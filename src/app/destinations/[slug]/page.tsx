import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Compass,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PackageCard } from "@/components/packages/PackageCard";

import {
  getAllDestinations,
  getDestinationBySlug,
} from "@/services/destinationService";

import { getAllPackages } from "@/services/packageService";

type DestinationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllDestinations().map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;

  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination Not Found | ExploreYatri",
    };
  }

  return {
    title: `${destination.name} Travel Packages | ExploreYatri`,
    description: destination.shortDescription,
  };
}

export default async function DestinationDetailPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;

  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  /*
   * Temporary matching while we use local dummy data.
   * Later admin/backend me packages ko destination IDs/slugs
   * se directly connect karenge.
   */
  const allPackages = getAllPackages();

  const destinationSearch = [
    destination.name,
    destination.state,
    destination.slug.replaceAll("-", " "),
  ]
    .join(" ")
    .toLowerCase();

  const relatedPackages = allPackages.filter((packageItem) => {
    const packageSearch = [
      packageItem.title,
      packageItem.destination,
      packageItem.location,
      packageItem.slug.replaceAll("-", " "),
    ]
      .join(" ")
      .toLowerCase();

    const destinationWords = destinationSearch
      .split(/\s+/)
      .filter((word) => word.length > 3);

    return destinationWords.some((word) =>
      packageSearch.includes(word)
    );
  });

  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)]">
        {/* =========================
            HERO
        ========================= */}
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="relative min-h-[62vh] sm:min-h-[68vh]">
            <Image
              src={destination.image}
              alt={destination.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,108,12,0.18),transparent_46%,rgba(201,11,18,0.08))]" />

            <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-end px-4 pb-10 pt-24 sm:min-h-[68vh] sm:px-6 sm:pb-14 lg:px-8">
              <div className="max-w-3xl">
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Destinations
                </Link>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {destination.category}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <MapPin className="h-3.5 w-3.5" />

                    {destination.state}, {destination.country}
                  </span>
                </div>

                <h1 className="mt-5 text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                  Explore
                  <span className="block text-[var(--primary-light)]">
                    {destination.name}
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  {destination.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            ABOUT DESTINATION
        ========================= */}
        <section className="py-12 sm:py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs">
                Discover {destination.name}
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl">
                A destination worth remembering.
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                {destination.description}
              </p>
            </div>

            {/* QUICK CTA */}
            <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_50px_rgba(82,43,20,0.06)] sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary-soft)]">
                <Compass className="h-5 w-5 text-[var(--primary)]" />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
                Planning {destination.name}?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                Tell us your dates, group size and travel preferences.
                We&apos;ll help customize the journey.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--primary-hover)]"
              >
                Plan My Trip
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================
            RELATED PACKAGES
        ========================= */}
        <section className="theme-section-soft border-y border-[var(--border)] py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[var(--primary)]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs">
                  ExploreYatri Packages
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
                Travel packages for {destination.name}
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                Explore curated journeys connected with this destination.
              </p>
            </div>

            {relatedPackages.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                {relatedPackages.map((packageItem) => (
                  <PackageCard
                    key={packageItem.id}
                    packageItem={packageItem}
                  />
                ))}
              </div>
            ) : (
              <div className="mx-auto mt-8 max-w-2xl rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-7 text-center sm:mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Customized Journey
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                  No fixed package yet?
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  We can still create a customized {destination.name} trip
                  around your dates, budget and travel style.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white"
                >
                  Request Custom Package
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* =========================
            FINAL CTA
        ========================= */}
        <section className="py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs">
              Built for Explorers
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Ready to explore{" "}
              <span className="hero-gradient-text">
                {destination.name}?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              Start with a destination. We&apos;ll help turn it into a
              memorable journey.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_var(--primary-shadow)] hover:bg-[var(--primary-hover)]"
            >
              Plan My Trip

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}