export type PackageType = "domestic" | "international";
export type PackageStatus = "draft" | "active" | "inactive";

export interface PackageItinerary {
  day: number;
  title: string;
  description: string;
}

export interface TravelPackage {
  id: string;

  title: string;
  slug: string;

  type: PackageType;

  destination: string;
  location: string;

  days: number;
  nights: number;

  price: number;
  originalPrice?: number;

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

  createdAt: string;
  updatedAt: string;
}