import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  CalendarDays,
  Check,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  getAllPackages,
  getPackageBySlug,
} from "@/services/packageService";

type PackagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPackages().map((packageItem) => ({
    slug: packageItem.slug,
  }));
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;

  const packageItem = getPackageBySlug(slug);

  if (!packageItem) {
    return {
      title: "Package Not Found | ExploreYatri",
    };
  }

  return {
    title: `${packageItem.title} | ExploreYatri`,
    description: packageItem.shortDescription,
  };
}

export default async function PackageDetailPage({
  params,
}: PackagePageProps) {
  const { slug } = await params;

  const packageItem = getPackageBySlug(slug);

  if (!packageItem) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("en-IN").format(
    packageItem.price
  );

  const formattedOriginalPrice = packageItem.originalPrice
    ? new Intl.NumberFormat("en-IN").format(
        packageItem.originalPrice
      )
    : null;

  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)]">
        {/* =========================
            PACKAGE HEADER
        ========================= */}
        <section className="theme-section-soft border-b border-[var(--border)] py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition-transform hover:-translate-x-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Packages
            </Link>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--primary-soft)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--primary)]">
                    {packageItem.type}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)]">
                    <CalendarDays className="h-3.5 w-3.5 text-[var(--primary)]" />

                    {packageItem.nights} Nights /{" "}
                    {packageItem.days} Days
                  </span>

                  {packageItem.route && (
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)]">
                      {packageItem.route}
                    </span>
                  )}
                </div>

                <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  {packageItem.title}
                </h1>

                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-secondary)] sm:text-base">
                  <MapPin className="h-4 w-4 shrink-0 text-[var(--primary)]" />
                  {packageItem.location}
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  {packageItem.shortDescription}
                </p>
              </div>

              {/* Price summary */}
              <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_50px_rgba(82,43,20,0.08)] sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Starting from
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl font-bold text-[var(--text-primary)]">
                    ₹{formattedPrice}
                  </span>

                  {formattedOriginalPrice && (
                    <span className="text-sm text-[var(--text-secondary)] line-through">
                      ₹{formattedOriginalPrice}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  per person*
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--primary-hover)]"
                >
                  <Phone className="h-4 w-4" />
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            COVER IMAGE
        ========================= */}
        <section className="bg-[var(--background)] pt-8 sm:pt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[26px] border border-[var(--border)] shadow-[0_25px_70px_rgba(82,43,20,0.12)] sm:rounded-[34px] lg:aspect-[16/7]">
              <Image
                src={packageItem.coverImage}
                alt={packageItem.coverImageAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Explore
                </p>

                <p className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                  {packageItem.destination}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            MAIN DETAILS
        ========================= */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
            <div>
              {/* ABOUT */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary)]">
                  About This Journey
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                  Experience {packageItem.destination}
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                  {packageItem.description}
                </p>
              </section>

              {/* HIGHLIGHTS */}
              <section className="mt-10 sm:mt-12">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[var(--primary)]" />

                  <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                    Trip Highlights
                  </h2>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {packageItem.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)]">
                        <Check className="h-4 w-4 text-[var(--primary)]" />
                      </span>

                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* PRICING */}
              {packageItem.pricingOptions &&
                packageItem.pricingOptions.length > 0 && (
                  <section className="mt-10 sm:mt-12">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[var(--primary)]" />

                      <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                        Package Pricing
                      </h2>
                    </div>

                    <div className="mt-5 space-y-5">
                      {packageItem.pricingOptions.map(
                        (pricing) => (
                          <div
                            key={pricing.label}
                            className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)]"
                          >
                            <div className="border-b border-[var(--border)] bg-[var(--surface-soft)] px-5 py-4">
                              <p className="font-semibold text-[var(--text-primary)]">
                                {pricing.label}
                              </p>
                            </div>

                            <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3">
                              <PriceCell
                                label="Quad Sharing"
                                subLabel="4 people"
                                price={pricing.quad}
                              />

                              <PriceCell
                                label="Triple Sharing"
                                subLabel="3 people"
                                price={pricing.triple}
                              />

                              <PriceCell
                                label="Dual Sharing"
                                subLabel="2 people"
                                price={pricing.dual}
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    <p className="mt-3 text-xs leading-5 text-[var(--text-secondary)]">
                      *Prices are per person and may change based on departure,
                      availability and season.
                    </p>
                  </section>
                )}

              {/* ITINERARY */}
              {packageItem.itinerary &&
                packageItem.itinerary.length > 0 && (
                  <section className="mt-10 sm:mt-12">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary)]">
                      Day by Day
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                      Itinerary
                    </h2>

                    <div className="relative mt-6 space-y-4">
                      {packageItem.itinerary.map(
                        (item) => (
                          <article
                            key={item.day}
                            className="rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
                          >
                            <div className="flex gap-4">
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white shadow-[0_8px_20px_var(--primary-shadow)]">
                                {item.day}
                              </div>

                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                                  Day {item.day}
                                </p>

                                <h3 className="mt-1 text-xl font-semibold text-[var(--text-primary)]">
                                  {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </article>
                        )
                      )}
                    </div>
                  </section>
                )}
            </div>

            {/* =========================
                SIDEBAR
            ========================= */}
            <aside>
              <div className="space-y-5 lg:sticky lg:top-24">
                {/* INCLUDED */}
                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[var(--primary)]" />

                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                      Inclusions
                    </h2>
                  </div>

                  <div className="mt-5 space-y-3">
                    {packageItem.inclusions.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--primary)]" />

                        <span className="text-sm leading-6 text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EXCLUDED */}
                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                  <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                    Exclusions
                  </h2>

                  <div className="mt-5 space-y-3">
                    {packageItem.exclusions.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <X className="mt-1 h-4 w-4 shrink-0 text-red-500" />

                        <span className="text-sm leading-6 text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-[26px] bg-[linear-gradient(135deg,var(--primary),var(--accent))] p-6 text-white shadow-[0_22px_55px_var(--primary-shadow)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    ExploreYatri
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    Want to customize this trip?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    Tell us your dates, group size and preferences. We&apos;ll
                    help you plan the journey.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--primary)]"
                  >
                    Plan My Trip
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function PriceCell({
  label,
  subLabel,
  price,
}: {
  label: string;
  subLabel: string;
  price: number;
}) {
  return (
    <div className="bg-[var(--surface)] p-5">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-secondary)]">
        {label}
      </p>

      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        {subLabel}
      </p>

      <p className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
        ₹{new Intl.NumberFormat("en-IN").format(price)}
      </p>

      <p className="mt-1 text-[10px] text-[var(--text-secondary)]">
        per person
      </p>
    </div>
  );
}