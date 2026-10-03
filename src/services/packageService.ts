import { packages } from "@/data/packages";
import { PackageType, TravelPackage } from "@/types/package";

export function getAllPackages(): TravelPackage[] {
  return packages.filter((item) => item.status === "active");
}

export function getFeaturedPackages(): TravelPackage[] {
  return packages.filter(
    (item) => item.status === "active" && item.featured
  );
}

export function getPackagesByType(
  type: PackageType
): TravelPackage[] {
  return packages.filter(
    (item) =>
      item.status === "active" &&
      item.type === type
  );
}

export function getPackageBySlug(
  slug: string
): TravelPackage | undefined {
  return packages.find(
    (item) =>
      item.slug === slug &&
      item.status === "active"
  );
}