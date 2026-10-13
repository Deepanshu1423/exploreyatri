import { siteConfig } from "@/config/site";
import type { TravelPackage } from "@/types/package";

export const packageFilters = [
  { value: "all", label: "All" },
  { value: "domestic", label: "Domestic" },
  { value: "international", label: "International" },
  { value: "christmas-new-year", label: "Christmas & New Year Specials" },
  { value: "weekend-trip", label: "Weekend Trips" },
] as const;

export function filterPackageList(packages: TravelPackage[], filter: string): TravelPackage[] {
  return packages.filter(item => {
    if (filter === "domestic" || filter === "international") return item.type === filter;
    if (filter === "christmas-new-year" || filter === "weekend-trip") return item.collections?.includes(filter);
    return true;
  });
}

export function getPackageEnquiryUrl(item: TravelPackage): string {
  const festive = item.collections?.includes("christmas-new-year");
  const weekend = item.collections?.includes("weekend-trip");
  const request = item.enquiryPrompt ?? (festive
    ? "Please confirm the active Christmas/New Year departure date, availability and final quotation."
    : weekend
      ? "Please confirm the next weekend departure and final double/triple-sharing rate."
      : "Please confirm dates, availability, inclusions and the final quotation.");
  const message = [
    "Hello ExploreYatri, I would like to enquire about:",
    `Package: ${item.shortTitle ?? item.title}`,
    `Destination: ${item.destination}`,
    `Duration: ${item.durationLabel ?? `${item.nights} Nights / ${item.days} Days`}`,
    ...(item.badge ? [`Collection: ${item.badge}`] : []),
    ...(item.departureLabel ? [`Source departure label: ${item.departureLabel} (date/year confirmation required)`] : []),
    ...(item.pickupLocations ? [`Pickup: ${item.pickupLocations.join(" / ")}`] : []),
    ...(item.enquiryPrompt ? ["Preferred departure date:", "Adults:", "Children:", "Sharing preference:", "Pickup location:"] : []),
    request,
  ].join("\n");
  return `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function getPackagePriceNote(item: TravelPackage): string {
  return item.priceNote ?? (item.priceStatus === "on-request"
    ? "Confirm dates and availability with ExploreYatri"
    : "per person*");
}
