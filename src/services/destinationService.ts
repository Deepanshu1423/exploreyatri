import { destinations } from "@/data/destinations";
import type { Destination } from "@/types/destination";

export function getAllDestinations(): Destination[] {
  return destinations.filter(
    (destination) => destination.status === "active"
  );
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter(
    (destination) =>
      destination.status === "active" &&
      destination.featured
  );
}

export function getDestinationBySlug(
  slug: string
): Destination | undefined {
  return destinations.find(
    (destination) =>
      destination.slug === slug &&
      destination.status === "active"
  );
}