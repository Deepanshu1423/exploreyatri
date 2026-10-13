export type PackageType = "domestic" | "international";
export type PackageStatus = "draft" | "active" | "inactive";
export type PackageCollection = "standard" | "christmas-new-year" | "weekend-trip";

export interface PackageItinerary {
  day: number;
  dayLabel?: string;
  title: string;
  description: string;
  meals?: string[];
  accommodation?: string;
}

export interface PackagePriceOption {
  label: string;
  quad?: number;
  triple: number;
  dual?: number;
}

export interface TravelPackage {
  id: string;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  country?: string;
  state?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  cardCtaLabel?: string;
  enquiryPrompt?: string;
  packageCode?: string;
  durationLabel?: string;
  importantNotes?: string[];
  collections?: PackageCollection[];
  badge?: string;
  departureLabel?: string;
  departureDates?: { date: string; status: "verify" }[];
  pickupLocations?: string[];
  dropLocations?: string[];
  accommodation?: { location: string; nights: number }[];
  slug: string;

  type: PackageType;

  destination: string;
  location: string;
  route?: string;

  days: number;
  nights: number;
  travelDays?: number;

  // Zero is unpublished when priceStatus is on-request.
  price: number;
  priceStatus?: "on-request" | "indicative" | "reference";
  priceNote?: string;
  originalPrice?: number;
  pricingOptions?: PackagePriceOption[];

  shortDescription: string;
  description: string;

  coverImage: string;
  coverImageAlt: string;
  gallery: string[];

  highlights: string[];
  inclusions: string[];
  exclusions: string[];

  itinerary?: PackageItinerary[];

  featured: boolean;
  status: PackageStatus;

  sourceNote?: string;

  createdAt: string;
  updatedAt: string;
}
