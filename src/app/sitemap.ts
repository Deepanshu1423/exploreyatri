import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { seoPages } from "@/config/seo-pages";
import { absoluteUrl } from "@/lib/seo";
import { getAllPackages } from "@/services/packageService";
import { getAllDestinations } from "@/services/destinationService";
import { getAllBlogs } from "@/services/blogService";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.isIndexable) return [];
  return [
    ...Object.keys(seoPages).map(path => ({ url: absoluteUrl(path) })),
    ...getAllPackages().map(item => ({ url: absoluteUrl(`/packages/${item.slug}`), lastModified: item.updatedAt, images: [absoluteUrl(item.coverImage)] })),
    ...getAllDestinations().map(item => ({ url: absoluteUrl(`/destinations/${item.slug}`), lastModified: item.updatedAt, images: [absoluteUrl(item.image)] })),
    ...getAllBlogs().map(item => ({ url: absoluteUrl(`/blogs/${item.slug}`), lastModified: item.updatedAt, images: [absoluteUrl(item.featuredImage)] })),
  ];
}
