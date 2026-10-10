import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { seoPages, type SeoPagePath } from "@/config/seo-pages";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  article?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    tags: string[];
  };
};

export function createMetadata(options: SeoOptions): Metadata {
  const title = options.title.replace(/\s*\|\s*ExploreYatri$/i, "");

  const socialTitle =
    options.path === "/"
      ? siteConfig.defaultTitle
      : `${title} | ${siteConfig.name}`;

  const image = {
    url: absoluteUrl(options.image || siteConfig.socialImage),
    alt:
      options.imageAlt ||
      `${siteConfig.name} holiday packages and personalized travel`,
    ...(!options.image
      ? {
          width: 1200,
          height: 630,
        }
      : {}),
  };

  return {
    title:
      options.path === "/"
        ? {
            absolute: siteConfig.defaultTitle,
          }
        : title,

    description: options.description,

    ...(options.keywords
      ? {
          keywords: options.keywords,
        }
      : {}),

    alternates: {
      canonical: absoluteUrl(options.path),
    },

    openGraph: {
      title: socialTitle,
      description: options.description,
      url: absoluteUrl(options.path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [image],

      ...(options.article
        ? {
            type: "article" as const,
            publishedTime: options.article.publishedTime,
            modifiedTime: options.article.modifiedTime,
            authors: [options.article.author],
            tags: options.article.tags,
          }
        : {
            type: "website" as const,
          }),
    },

    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: options.description,
      images: [image],
    },
  };
}

export function pageMetadata(path: SeoPagePath) {
  return createMetadata({
    ...seoPages[path],
    path,
  });
}

/* -------------------------------------------------------------------------- */
/*                               STRUCTURED DATA                              */
/* -------------------------------------------------------------------------- */

export const organizationId = `${siteConfig.url}/#organization`;

export const websiteId = `${siteConfig.url}/#website`;

export const brandId = `${siteConfig.url}/#brand`;

export const siteStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",

      "@id": organizationId,

      name: "ExploreYatri",

      alternateName: "Explore Yatri",

      url: siteConfig.url,

      description: siteConfig.description,

      slogan: siteConfig.tagline,

      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo),
        contentUrl: absoluteUrl(siteConfig.logo),
      },

      brand: {
        "@type": "Brand",
        "@id": brandId,
        name: "ExploreYatri",
        alternateName: "Explore Yatri",
        logo: absoluteUrl(siteConfig.logo),
      },

      email: siteConfig.email,

      telephone: siteConfig.phone,

      sameAs: [siteConfig.instagram, siteConfig.facebook],

      founder: {
        "@type": "Person",
        name: siteConfig.founder,
        jobTitle: "Founder & CEO",
      },

      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },

    {
      "@type": "WebSite",

      "@id": websiteId,

      name: "ExploreYatri",

      alternateName: "Explore Yatri",

      url: siteConfig.url,

      description: siteConfig.description,

      inLanguage: siteConfig.language,

      publisher: {
        "@id": organizationId,
      },

      about: {
        "@id": brandId,
      },
    },

    {
      "@type": "Brand",

      "@id": brandId,

      name: "ExploreYatri",

      alternateName: "Explore Yatri",

      url: siteConfig.url,

      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo),
      },

      slogan: siteConfig.tagline,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              BREADCRUMB SCHEMA                             */
/* -------------------------------------------------------------------------- */

export function breadcrumbData(
  items: {
    name: string;
    path: string;
  }[]
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}