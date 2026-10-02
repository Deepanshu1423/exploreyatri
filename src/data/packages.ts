export type PackageType = "Domestic" | "International";

export interface Package {
  id: string;
  title: string;
  location: string;
  type: PackageType;
  duration: string;
  price: string;
  description: string;
  image: string;
  slug: string;
}

export const packages: Package[] = [
  {
    id: "kashmir-spring",
    title: "Kashmir Bliss",
    location: "Dal Lake, Kashmir",
    type: "Domestic",
    duration: "5 Nights / 6 Days",
    price: "From ₹18,499",
    description: "Gentle valleys, houseboats, and scenic mornings for a serene Himalayan escape.",
    image: "/images/hero-travel.svg",
    slug: "/packages/domestic/kashmir",
  },
  {
    id: "goa-beach",
    title: "Goa Getaway",
    location: "North Goa, India",
    type: "Domestic",
    duration: "4 Nights / 5 Days",
    price: "From ₹14,999",
    description: "Sunny beaches, lively evenings, and indulgent coastal comfort with a relaxed rhythm.",
    image: "/images/hero-travel.svg",
    slug: "/packages/domestic/goa",
  },
  {
    id: "kerala-escape",
    title: "Kerala Retreat",
    location: "Munnar, Kerala",
    type: "Domestic",
    duration: "6 Nights / 7 Days",
    price: "From ₹22,299",
    description: "Tea gardens, backwaters, and soft wellness moments set in a lush green landscape.",
    image: "/images/hero-travel.svg",
    slug: "/packages/domestic/kerala",
  },
  {
    id: "dubai-city",
    title: "Dubai Icons",
    location: "Dubai, UAE",
    type: "International",
    duration: "4 Nights / 5 Days",
    price: "From ₹42,999",
    description: "Skyline views, desert evenings, and elevated experiences crafted for modern explorers.",
    image: "/images/hero-travel.svg",
    slug: "/packages/international/dubai",
  },
  {
    id: "bali-luxury",
    title: "Bali Serenity",
    location: "Ubud, Bali",
    type: "International",
    duration: "5 Nights / 6 Days",
    price: "From ₹39,499",
    description: "Rice terraces, ocean breezes, and a peaceful island rhythm for rest and discovery.",
    image: "/images/hero-travel.svg",
    slug: "/packages/international/bali",
  },
  {
    id: "thailand-gold",
    title: "Thailand Escape",
    location: "Bangkok & Phuket",
    type: "International",
    duration: "5 Nights / 6 Days",
    price: "From ₹35,699",
    description: "A rich blend of city charm, island views, and easygoing tropical adventure.",
    image: "/images/hero-travel.svg",
    slug: "/packages/international/thailand",
  },
];
