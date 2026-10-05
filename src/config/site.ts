export const siteConfig = {
  name: "ExploreYatri",

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
