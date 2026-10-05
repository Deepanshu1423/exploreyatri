export type DestinationStatus = "draft" | "active" | "inactive";

export interface Destination {
  id: string;

  name: string;
  slug: string;

  state: string;
  country: string;

  category:
    | "mountains"
    | "heritage"
    | "desert"
    | "pilgrimage"
    | "nature"
    | "beach"
    | "international";

  shortDescription: string;
  description: string;

  image: string;
  imageAlt: string;

  featured: boolean;
  status: DestinationStatus;

  createdAt: string;
  updatedAt: string;
}