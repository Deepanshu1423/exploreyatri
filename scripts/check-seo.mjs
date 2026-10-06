import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const origin = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://exploreyatri.com").origin;
const appDirectory = path.resolve(".next/server/app");

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const results = await Promise.all(entries.map(entry => {
    const location = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(location) : Promise.resolve(entry.name.endsWith(".html") ? [location] : []);
  }));
  return results.flat();
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
}

const sitemap = await readFile(path.join(appDirectory, "sitemap.xml.body"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).href);
assert(sitemapUrls.length > 9, "The production sitemap must include detail pages.");
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, "Sitemap URLs must be unique.");
assert(sitemapUrls.every(url => new URL(url).origin === origin), "Sitemap host must match the configured domain.");

const robots = await readFile(path.join(appDirectory, "robots.txt.body"), "utf8");
assert(robots.includes("Allow: /"), "Production robots.txt must allow crawling.");
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`), "Robots must reference the production sitemap.");
assert(!/^Disallow: \/$/m.test(robots), "The public website must not block all crawlers.");

const titles = new Set();
const canonicalUrls = new Set();
for (const file of await htmlFiles(appDirectory)) {
  if (path.basename(file) === "_global-error.html") continue;
  const html = await readFile(file, "utf8");
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => attributes(match[0]));
  if (file.includes("_not-found")) {
    assert(meta.some(tag => tag.name === "robots" && tag.content.includes("noindex")), "404 pages must be noindex.");
    continue;
  }
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert(title, `Missing title: ${file}`);
  assert(!titles.has(title), `Duplicate title: ${title}`);
  titles.add(title);
  assert(!title.includes("| ExploreYatri | ExploreYatri"), `Duplicated brand suffix: ${file}`);
  assert(meta.some(tag => tag.name === "description" && tag.content), `Missing description: ${file}`);
  assert(!meta.some(tag => tag.name === "robots" && tag.content.includes("noindex")), `Public page incorrectly noindex: ${file}`);

  const canonicals = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attributes(match[0])).filter(tag => tag.rel === "canonical");
  assert.equal(canonicals.length, 1, `Expected one canonical: ${file}`);
  const canonical = new URL(canonicals[0].href).href;
  assert(sitemapUrls.includes(canonical), `Canonical missing from sitemap: ${canonical}`);
  assert(!canonicalUrls.has(canonical), `Duplicate canonical: ${canonical}`);
  canonicalUrls.add(canonical);
  assert.equal(new URL(meta.find(tag => tag.property === "og:url")?.content).href, canonical, `OG URL differs from canonical: ${file}`);
  for (const field of ["og:title", "og:description", "og:image"]) assert(meta.some(tag => tag.property === field && tag.content), `Missing ${field}: ${file}`);
  assert(meta.some(tag => tag.name === "twitter:card" && tag.content === "summary_large_image"), `Missing Twitter preview: ${file}`);
  assert((html.match(/<h1\b/g) || []).length === 1, `Expected one main heading: ${file}`);

  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  assert(scripts.length, `Missing JSON-LD: ${file}`);
  for (const schema of scripts) {
    assert.equal(schema["@context"], "https://schema.org");
    if (schema["@type"] === "BreadcrumbList") assert.equal(schema.itemListElement.at(-1).item, canonical, `Breadcrumb differs from canonical: ${file}`);
    if (schema["@type"] === "BlogPosting") {
      assert(schema.datePublished && schema.dateModified && schema.author && schema.publisher, `Incomplete article markup: ${file}`);
    }
  }
}
assert.equal(canonicalUrls.size, sitemapUrls.length, "Every sitemap URL must correspond to a rendered public page.");

const image = await readFile(path.join(appDirectory, "share-image.body"));
assert.equal(image.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", "Social preview must be a real PNG.");
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
console.log(`SEO checks passed: ${canonicalUrls.size} pages, robots.txt, sitemap, structured data and 1200×630 social image.`);
