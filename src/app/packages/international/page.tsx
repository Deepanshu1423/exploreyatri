import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Plane } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PackageCard } from "@/components/packages/PackageCard";
import { Container } from "@/components/ui/Container";
import { getPackagesByType } from "@/services/packageService";

export const metadata: Metadata = {
  title: "International Holiday Packages | ExploreYatri",
  description:
    "Discover international holiday packages and global travel experiences with ExploreYatri.",
};

export default function InternationalPackagesPage() {
  const packages = getPackagesByType("international");

  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)]">
        {/* HEADER */}
        <section className="theme-section-soft border-b border-[var(--border)] py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 shadow-sm">
                <Globe2 className="h-3.5 w-3.5 text-[var(--primary)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Explore The World
                </span>
              </div>

              <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                International holidays for your{" "}
                <span className="hero-gradient-text">
                  next big adventure.
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                Beaches, cities, culture and unforgettable global experiences
                curated around the way you want to travel.
              </p>
            </div>
          </Container>
        </section>

        {/* PACKAGES */}
        <section className="py-10 sm:py-12 lg:py-14">
          <Container>
            {packages.length > 0 ? (
              <>
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                      International Packages
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                      Discover the world
                    </h2>
                  </div>

                  <p className="hidden text-sm text-[var(--text-secondary)] sm:block">
                    {packages.length} packages
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {packages.map((packageItem) => (
                    <PackageCard
                      key={packageItem.id}
                      packageItem={packageItem}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="mx-auto max-w-3xl rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-7 text-center shadow-[0_20px_55px_rgba(82,43,20,0.06)] sm:p-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-soft)]">
                  <Plane className="h-6 w-6 text-[var(--primary)]" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Coming Soon
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                  International journeys are being curated.
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                  We&apos;re preparing handpicked international experiences.
                  Meanwhile, tell us your destination and we can help plan a
                  customized journey.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-bold text-white"
                  >
                    Plan International Trip
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/packages"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-3 text-sm font-bold text-[var(--text-primary)]"
                  >
                    Browse All Packages
                  </Link>
                </div>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}