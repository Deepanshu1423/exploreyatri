import { TravelPackage } from "@/types/package";

export const packages: TravelPackage[] = [
  {
    id: "pkg-001",

    title: "Kashmir Paradise Escape",
    slug: "kashmir-paradise-escape",

    type: "domestic",

    destination: "Kashmir",
    location: "Jammu & Kashmir, India",

    days: 6,
    nights: 5,

    price: 24999,
    originalPrice: 29999,

    shortDescription:
      "Snow-capped mountains, peaceful lakes and unforgettable Himalayan landscapes.",

    description:
      "Experience Srinagar, Gulmarg and Pahalgam through a thoughtfully designed Kashmir holiday.",

    coverImage: "/images/packages/kashmir-paradise.jpg",
    coverImageAlt:
      "Scenic Kashmir lake surrounded by Himalayan mountains",

    gallery: [],

    highlights: [
      "Dal Lake experience",
      "Gulmarg excursion",
      "Pahalgam sightseeing",
      "Srinagar city tour",
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transfers",
      "Sightseeing",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Travel insurance",
    ],

    featured: true,
    status: "active",

    createdAt: "2026-10-04",
    updatedAt: "2026-10-04",
  },

  {
    id: "pkg-002",

    title: "Bali Tropical Escape",
    slug: "bali-tropical-escape",

    type: "international",

    destination: "Bali",
    location: "Indonesia",

    days: 7,
    nights: 6,

    price: 54999,
    originalPrice: 62999,

    shortDescription:
      "Tropical beaches, peaceful temples and beautiful island experiences.",

    description:
      "Discover Bali through a premium combination of tropical landscapes, local culture and relaxation.",

    coverImage: "/images/packages/bali-tropical.jpg",
    coverImageAlt:
      "Luxury tropical beach landscape in Bali Indonesia",

    gallery: [],

    highlights: [
      "Ubud sightseeing",
      "Temple visits",
      "Island tour",
      "Beach experiences",
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Airport transfers",
      "Selected sightseeing",
    ],

    exclusions: [
      "International flights",
      "Visa fees",
      "Personal expenses",
    ],

    featured: true,
    status: "active",

    createdAt: "2026-10-04",
    updatedAt: "2026-10-04",
  },

  {
    id: "pkg-003",

    title: "Manali Mountain Retreat",
    slug: "manali-mountain-retreat",

    type: "domestic",

    destination: "Manali",
    location: "Himachal Pradesh, India",

    days: 5,
    nights: 4,

    price: 18999,
    originalPrice: 22999,

    shortDescription:
      "A refreshing Himalayan escape filled with mountains, valleys and adventure.",

    description:
      "Relax in Manali while exploring scenic valleys, mountain roads and famous attractions.",

    coverImage: "/images/packages/manali-retreat.jpg",
    coverImageAlt:
      "Snow covered mountains and valley landscape in Manali",

    gallery: [],

    highlights: [
      "Solang Valley",
      "Manali sightseeing",
      "Mountain views",
      "Local experiences",
    ],

    inclusions: [
      "Accommodation",
      "Breakfast",
      "Transfers",
      "Sightseeing",
    ],

    exclusions: [
      "Adventure activities",
      "Flights",
      "Personal expenses",
    ],

    featured: true,
    status: "active",

    createdAt: "2026-10-04",
    updatedAt: "2026-10-04",
  },
];