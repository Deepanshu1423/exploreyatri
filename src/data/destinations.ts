export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: "kashmir",
    name: "Kashmir",
    location: "Himalayan splendour",
    image: "/images/hero-travel.svg",
    description: "Lakes, gardens, and crisp mountain air.",
  },
  {
    id: "goa",
    name: "Goa",
    location: "Coastal elegance",
    image: "/images/hero-travel.svg",
    description: "Golden beaches and effortless island energy.",
  },
  {
    id: "kerala",
    name: "Kerala",
    location: "Green serenity",
    image: "/images/hero-travel.svg",
    description: "Backwaters, tea hills, and slow-living charm.",
  },
  {
    id: "dubai",
    name: "Dubai",
    location: "City of modern wonders",
    image: "/images/hero-travel.svg",
    description: "Luxury, landmarks, and unforgettable skylines.",
  },
  {
    id: "bali",
    name: "Bali",
    location: "Island escapes",
    image: "/images/hero-travel.svg",
    description: "Temple towns, beaches, and tropical calm.",
  },
  {
    id: "thailand",
    name: "Thailand",
    location: "Sunny adventures",
    image: "/images/hero-travel.svg",
    description: "A gentle mix of culture, coast, and flavour.",
  },
];
