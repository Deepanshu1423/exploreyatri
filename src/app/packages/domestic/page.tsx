import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PackageCard } from "@/components/packages/PackageCard";
import { Container } from "@/components/ui/Container";
import { getPackagesByType } from "@/services/packageService";

export const metadata: Metadata = {
  title: "Domestic Holiday Packages | ExploreYatri",
  description:
    "Explore handpicked domestic holiday packages across India with ExploreYatri.",
};

export default function DomesticPackagesPage() {
  const packages = getPackagesByType("domestic");

  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)]">
        {/* HEADER */}
        <section className="theme-section-soft border-b border-[var(--border)] py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-[var(--primary)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Explore India
                </span>
              </div>

              <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                Domestic journeys made for{" "}
                <span className="hero-gradient-text">
                  unforgettable escapes.
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                Mountains, pilgrimage journeys, deserts, heritage cities and
                peaceful escapes — discover handpicked experiences across
                India.
              </p>
            </div>
          </Container>
        </section>

        {/* PACKAGES */}
        <section className="py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="mb-7 flex flex-col gap-3 text-center sm:mb-9 sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Domestic Packages
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                  Explore India your way
                </h2>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                {packages.length}{" "}
                {packages.length === 1 ? "journey" : "journeys"}
              </p>
            </div>

            {packages.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                {packages.map((packageItem) => (
                  <PackageCard
                    key={packageItem.id}
                    packageItem={packageItem}
                  />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] px-5 py-12 text-center">
      <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
        More domestic journeys are coming soon.
      </h2>

      <Link
        href="/packages"
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]"
      >
        View All Packages
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}