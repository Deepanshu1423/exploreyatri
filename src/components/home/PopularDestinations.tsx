import Link from "next/link";
import { ArrowRight, MapPinned, Sparkles } from "lucide-react";

import { DestinationCard } from "@/components/destinations/DestinationCard";
import { Container } from "@/components/ui/Container";
import { getFeaturedDestinations } from "@/services/destinationService";

export function PopularDestinations() {
  const featuredDestinations = getFeaturedDestinations().slice(0, 6);

  if (featuredDestinations.length === 0) {
    return null;
  }

  return (
    <section
      className="bg-[var(--background)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="popular-destinations-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--primary)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
              Popular Destinations
            </p>
          </div>

          <h2
            id="popular-destinations-heading"
            className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
          >
            Places that make you want to
            <span className="hero-gradient-text block">
              pack your bags.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Explore mountain escapes, heritage cities, spiritual journeys and
            unforgettable landscapes handpicked for your next trip.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:mt-10">
          <div className="inline-flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <MapPinned className="h-4 w-4 text-[var(--primary)]" />
            More destinations are being added as ExploreYatri grows.
          </div>

          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Explore All Destinations

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
