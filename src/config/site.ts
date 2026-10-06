const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://exploreyatri.com";
const parsedUrl = new URL(configuredUrl);

if (!["http:", "https:"].includes(parsedUrl.protocol)) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute HTTP or HTTPS URL.");
}

export const siteConfig = {
  url: parsedUrl.origin,
  isIndexable: process.env.NODE_ENV === "production" && !["localhost", "127.0.0.1", "[::1]"].includes(parsedUrl.hostname) && process.env.VERCEL_ENV !== "preview" && process.env.SITE_NOINDEX !== "true",
  name: "ExploreYatri",
  defaultTitle: "ExploreYatri | Domestic & International Holiday Packages",
  description: "Discover India holiday packages, Himalayan adventures, pilgrimage journeys and customized international trips with personal travel planning from ExploreYatri.",
  locale: "en_IN",
  language: "en-IN",
  logo: "/logo/explore-yatri-logo.png",
  socialImage: "/share-image",
  founder: "Vansh Jain",
  keywords: ["ExploreYatri", "India holiday packages", "domestic tour packages", "international holiday packages", "Manali tour packages", "Kashmir holiday packages", "Kedarnath yatra", "customized travel itineraries"],
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },

  tagline: "Handpicked escapes for every kind of traveller",

  phone: "+91 93680 66293",

  email: "exploreyatri01@gmail.com",

  instagram:
    "https://www.instagram.com/exploreyatri__?stkn=emF0dHZ1cjEyemI2",

  facebook:
    "https://www.facebook.com/share/1EW9iWavqm/?mibextid=wwXIfr",

  nav: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Packages",
      href: "/packages",

      children: [
        {
          label: "Domestic Packages",
          href: "/packages/domestic",
        },

        {
          label: "International Packages",
          href: "/packages/international",
        },
      ],
    },

    {
      label: "Destinations",
      href: "/destinations",
    },

    {
      label: "Gallery",
      href: "/gallery",
    },

    {
      label: "Blogs",
      href: "/blogs",
    },

    {
      label: "About Us",
      href: "/about",
    },

    {
      label: "Contact Us",
      href: "/contact",
    },
  ],
};
