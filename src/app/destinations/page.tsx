import { PageSeo } from "@/components/seo/PageSeo";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Compass } from "lucide-react";

import { DestinationCard } from "@/components/destinations/DestinationCard";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getAllDestinations } from "@/services/destinationService";

export const metadata: Metadata = pageMetadata("/destinations");

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <>

      <main className="bg-[var(--background)]">
        <PageSeo path="/destinations" type="CollectionPage" items={destinations.map(item => ({ name: item.name, path: `/destinations/${item.slug}` }))} />
        {/* INTRO */}
        <section className="theme-section-soft border-b border-[var(--border)] py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 shadow-sm">
                <Compass className="h-3.5 w-3.5 text-[var(--primary)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Explore Your Way
                </span>
              </div>

              <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                Places worth{" "}
                <span className="hero-gradient-text">
                  discovering.
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                From Himalayan valleys and spiritual journeys to royal cities
                and desert landscapes — find a destination that matches the way
                you want to travel.
              </p>
            </div>
          </Container>
        </section>

        {/* DESTINATIONS */}
        <section className="py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="mb-7 text-center sm:mb-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                Handpicked Destinations
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                Where will you go next?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}