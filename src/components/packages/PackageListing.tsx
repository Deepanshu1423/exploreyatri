"use client";

import { useState } from "react";
import type { TravelPackage } from "@/types/package";
import { PackageCard } from "./PackageCard";
import { filterPackageList, packageFilters } from "./packagePresentation";

export function PackageListing({ packages }: { packages: TravelPackage[] }) {
  const [filter, setFilter] = useState<string>("all");
  const visible = filterPackageList(packages, filter);

  return (
    <>
      <div aria-label="Filter packages" role="group" className="mb-5 flex flex-wrap gap-2">
        {packageFilters.map(item => (
          <button key={item.value} type="button" onClick={() => setFilter(item.value)} aria-pressed={filter === item.value}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${filter === item.value ? "border-[var(--primary)] bg-[var(--primary)] text-white" : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--primary)]"}`}>
            {item.label}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mb-6 text-sm text-[var(--text-secondary)]">
        {packageFilters.find(item => item.value === filter)?.label}: {visible.length} {visible.length === 1 ? "journey" : "journeys"}
      </p>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map(item => <PackageCard key={item.id} packageItem={item} />)}
      </div>
      {visible.length === 0 && <p className="py-8 text-center text-[var(--text-secondary)]">No packages in this collection yet.</p>}
    </>
  );
}
