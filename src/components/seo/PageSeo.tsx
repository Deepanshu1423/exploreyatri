import { JsonLd } from "@/components/seo/JsonLd";
import { seoPages, type SeoPagePath } from "@/config/seo-pages";
import { siteConfig } from "@/config/site";
import { absoluteUrl, breadcrumbData, websiteId } from "@/lib/seo";

type PageSeoProps = {
  path: SeoPagePath;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage" | "ImageGallery";
  items?: { name: string; path: string }[];
};

export function PageSeo({ path, type = "WebPage", items }: PageSeoProps) {
  const page = seoPages[path];
  return <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": type,
      "@id": absoluteUrl(`${path}#webpage`),
      url: absoluteUrl(path),
      name: page.title,
      description: page.description,
      inLanguage: siteConfig.language,
      isPartOf: { "@id": websiteId },
      ...(items?.length ? {
        mainEntity: {
          "@type": "ItemList",
          itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: absoluteUrl(item.path) })),
        },
      } : {}),
    }} />
    {path !== "/" ? <JsonLd data={breadcrumbData([
      { name: "Home", path: "/" },
      ...(path.startsWith("/packages/") ? [{ name: "Holiday Packages", path: "/packages" }] : []),
      { name: page.title, path },
    ])} /> : null}
  </>;
}
