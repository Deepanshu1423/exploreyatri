import { packages } from "@/data/packages";
import { PackageCollection, PackageType, TravelPackage } from "@/types/package";
import { filterPackageList } from "@/components/packages/packagePresentation";

export function getPackagesByCollection(collection: PackageCollection): TravelPackage[] {
  return getAllPackages().filter(item => item.collections?.includes(collection));
}

export function getFilteredPackages(filter: string): TravelPackage[] {
  return filterPackageList(getAllPackages(), filter);
}

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
