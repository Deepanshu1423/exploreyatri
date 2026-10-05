import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PackageCard } from "@/components/packages/PackageCard";
import { Container } from "@/components/ui/Container";
import { getFeaturedPackages } from "@/services/packageService";

export function FeaturedPackages() {
  const featuredPackages = getFeaturedPackages().slice(0, 6);

  if (featuredPackages.length === 0) {
    return null;
  }

  return (
    <section
      className="theme-section-soft border-y border-[var(--border)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="featured-packages-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
            Handpicked Experiences
          </p>

          <h2
            id="featured-packages-heading"
            className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            Journeys designed around your way of travel
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:mt-5 sm:text-base sm:leading-7">
            Thoughtful itineraries for relaxed escapes, cultural discoveries,
            and memorable moments.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredPackages.map((packageItem) => (
            <PackageCard
              key={packageItem.id}
              packageItem={packageItem}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/packages"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            View All Packages
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
