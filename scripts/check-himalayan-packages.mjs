import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const cache = new Map();
function load(relativePath) {
  const filename = path.resolve(relativePath);
  if (cache.has(filename)) return cache.get(filename);
  const exports = {};
  cache.set(filename, exports);
  const output = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  vm.runInNewContext(output, {
    exports, process, URL,
    require: name => {
      assert(name.startsWith("@/"), `Unexpected import: ${name}`);
      return load(`src/${name.slice(2)}.ts`);
    },
  }, { filename });
  return exports;
}

const { packages } = load("src/data/packages.ts");
const { getPackageEnquiryUrl } = load("src/components/packages/packagePresentation.ts");
const { siteConfig } = load("src/config/site.ts");
for (const field of ["id", "slug", "packageCode"]) {
  const values = packages.map(item => item[field]).filter(Boolean);
  assert.equal(new Set(values).size, values.length, `Duplicate ${field}`);
}
const chopta = packages.find(item => item.slug === "chopta-tungnath-chandrashila");
const manali = packages.find(item => item.slug === "manali-kasol-jibhi");
assert(chopta && manali);
assert.equal(chopta.id, "pkg-chopta-001");
assert.equal(chopta.packageCode, "EY-DOM-CHOPTA-001");
assert.equal(manali.packageCode, "EY-DOM-MKJ-001");
assert.equal(chopta.price, 6499);
assert.equal(chopta.pricingOptions[0].quad, 6499);
assert.equal(chopta.pricingOptions[0].triple, 6999);
assert.equal(chopta.pricingOptions[0].dual, 7499);
assert.equal(manali.priceStatus, "reference");
assert.equal(manali.price, 17999);
assert.equal(manali.originalPrice, 18999);
assert.equal(manali.pricingOptions.length, 1);
assert.equal(manali.pricingOptions[0].triple, 17999);
assert.equal(manali.pricingOptions[0].dual, undefined);
assert.equal(manali.pricingOptions[0].quad, undefined);
assert(manali.priceNote.includes("Supplier reference rate"));
assert(manali.priceNote.includes("taxes"));
assert.equal(manali.departureDates.map(item => item.date).join(","), "2026-12-03,2026-12-10,2026-12-17");
assert(manali.departureDates.every(item => item.status === "verify"));
assert.equal(manali.itinerary.reduce((count, day) => count + (day.meals?.length ?? 0), 0), 8);
assert.equal(manali.itinerary.filter(day => day.accommodation).map(day => day.accommodation).join(","), "Manali,Manali,Kasol,Jibhi");
for (const [item, nights, days] of [[chopta, 2, 3], [manali, 4, 5]]) {
  assert.equal(item.nights, nights);
  assert.equal(item.days, days);
  assert.equal(item.travelDays, 2);
  assert.equal(item.accommodation.reduce((sum, stay) => sum + stay.nights, 0), nights);
  assert.equal(item.itinerary.filter(day => day.accommodation).length, nights);
  assert.equal(item.itinerary[0].day, 0);
  assert.equal(item.itinerary.at(-1).dayLabel, "Travel completion");
  assert(item.durationLabel.includes("Overnight"));
  for (const image of [item.coverImage, ...item.gallery]) assert(fs.existsSync(path.join("public", image)), `Missing ${image}`);
  const url = new URL(getPackageEnquiryUrl(item));
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname.slice(1), siteConfig.phone.replace(/\D/g, ""));
  const message = url.searchParams.get("text");
  for (const label of [item.shortTitle, "Preferred departure date:", "Adults:", "Children:", "Sharing preference:", "Pickup location:", item.enquiryPrompt]) assert(message.includes(label), `Missing enquiry field ${label}`);
  const publicContent = JSON.stringify(item);
  assert(!/capture\s*a\s*trip|shark\s*tank|bank\s*details|\bupi\b|qr\s*code/i.test(publicContent));
}

const baselineIndex = process.argv.indexOf("--baseline");
if (baselineIndex !== -1) {
  const before = JSON.parse(fs.readFileSync(process.argv[baselineIndex + 1], "utf8"));
  assert.equal(packages.length, before.length + 1);
  for (const old of before) {
    const current = packages.find(item => item.id === old.id);
    assert(current, `Removed package ${old.id}`);
    assert.equal(current.slug, old.slug, `Changed existing route ${old.slug}`);
    if (old.slug !== chopta.slug) assert.equal(JSON.stringify(current), JSON.stringify(old), `Unrelated package changed: ${old.slug}`);
    else assert.equal(JSON.stringify(current.pricingOptions), JSON.stringify(old.pricingOptions));
  }
  console.log("Existing URLs, separate packages and previous rates are preserved.");
}

if (process.argv.includes("--built")) {
  const sitemap = fs.readFileSync(".next/server/app/sitemap.xml.body", "utf8");
  const domestic = fs.readFileSync(".next/server/app/packages/domestic.html", "utf8");
  for (const item of [chopta, manali]) {
    const html = fs.readFileSync(`.next/server/app/packages/${item.slug}.html`, "utf8");
    assert(html.includes(`<title>${item.seoTitle}</title>`));
    assert(html.includes(`content="${item.seoDescription}"`));
    assert(html.includes(`rel="canonical" href="${siteConfig.url}/packages/${item.slug}"`));
    assert.equal(sitemap.split(`<loc>${siteConfig.url}/packages/${item.slug}</loc>`).length - 1, 1);
    assert(domestic.includes(`/packages/${item.slug}`));
    assert(html.includes("Travel completion"));
    assert(html.includes("Meals:") || item === chopta);
    if (item === manali) {
      assert(html.includes("Supplier reference rate"));
      assert(html.includes("availability confirmation required"));
      assert(!html.includes("Dual Sharing") && !html.includes("Quad Sharing"));
      assert(!html.includes('"@type":"Offer"'), "Reference rate must not become a confirmed schema offer");
    }
  }
  console.log("Built pages, metadata, canonical links, sitemap, reference pricing and domestic cards verified.");
}
console.log("Himalayan package checks passed.");
