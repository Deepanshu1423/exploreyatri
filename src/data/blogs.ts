import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    id: "blog-001",

    title: "Best Places to Visit in Kashmir",
    slug: "best-places-to-visit-in-kashmir",

    excerpt:
      "Discover Kashmir's most beautiful destinations, from peaceful lakes to dramatic Himalayan valleys.",

    content:
      "Kashmir offers a beautiful combination of mountains, lakes, valleys and unique travel experiences. Srinagar, Gulmarg and Pahalgam remain some of its most popular destinations.",

    featuredImage: "/images/blogs/kashmir-travel-guide.png",
    featuredImageAlt:
      "Beautiful Kashmir mountains featured in ExploreYatri travel guide",

    category: "Travel Guide",

    tags: ["Kashmir", "India", "Travel Guide"],

    author: "ExploreYatri",

    featured: true,
    status: "published",

    publishedAt: "2026-10-04",

    createdAt: "2026-10-04",
    updatedAt: "2026-10-04",

    seo: {
      title: "Best Places to Visit in Kashmir | ExploreYatri",
      description:
        "Explore beautiful destinations and travel experiences across Kashmir.",
      keywords: [
        "Kashmir travel",
        "Kashmir tourism",
        "places in Kashmir",
      ],
    },
  },

  {
    id: "blog-002",

    title: "How to Plan Your First International Trip",
    slug: "how-to-plan-your-first-international-trip",

    excerpt:
      "Everything you need to know before planning your first international holiday.",

    content:
      "A successful international trip starts with selecting the right destination, understanding visa requirements and planning your overall budget.",

    featuredImage:
      "/images/blogs/international-trip-guide.png",

    featuredImageAlt:
      "Traveller planning an international holiday",

    category: "Travel Tips",

    tags: [
      "International Travel",
      "Travel Tips",
      "Planning",
    ],

    author: "ExploreYatri",

    featured: true,
    status: "published",

    publishedAt: "2026-10-03",

    createdAt: "2026-10-03",
    updatedAt: "2026-10-03",
  },

  {
    id: "blog-003",

    title: "Best Time to Visit Bali",
    slug: "best-time-to-visit-bali",

    excerpt:
      "Understand Bali's seasons and find the perfect time for your tropical holiday.",

    content:
      "Choosing the right time to visit Bali can make a significant difference to your travel experience.",

    featuredImage: "/images/blogs/bali-best-time.png",

    featuredImageAlt:
      "Tropical Bali beach during beautiful weather",

    category: "Destination Guide",

    tags: [
      "Bali",
      "Indonesia",
      "Destination Guide",
    ],

    author: "ExploreYatri",

    featured: true,
    status: "published",

    publishedAt: "2026-10-02",

    createdAt: "2026-10-02",
    updatedAt: "2026-10-02",
  },
];