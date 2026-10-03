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

      <main>
        {/* =========================
            HEADER
        ========================= */}

        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(237,108,12,0.12),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(201,11,18,0.07),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition-transform hover:-translate-x-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Packages
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-[var(--primary-soft)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--primary)]">
                    {packageItem.type === "domestic"
                      ? "Domestic"
                      : "International"}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)]">
                    <CalendarDays className="h-3.5 w-3.5 text-[var(--primary)]" />

                    {packageItem.nights} Nights /{" "}
                    {packageItem.days} Days
                  </span>
                </div>

                <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  {packageItem.title}
                </h1>

                <div className="mt-5 flex items-center gap-2 text-[var(--text-secondary)]">
                  <MapPin className="h-5 w-5 text-[var(--primary)]" />

                  <span>{packageItem.location}</span>
                </div>

                <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                  {packageItem.shortDescription}
                </p>
              </div>

              {/* PRICE CARD */}

              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_55px_rgba(82,43,20,0.08)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Starting from
                </p>

                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">
                    ₹{formattedPrice}
                  </span>

                  {formattedOriginalPrice && (
                    <span className="text-sm text-[var(--text-secondary)] line-through">
                      ₹{formattedOriginalPrice}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs text-[var(--text-secondary)]">
                  per person*
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_34px_var(--primary-shadow)] transition-all hover:bg-[var(--primary-hover)]"
                >
                  <Phone className="h-4 w-4" />
                  Plan This Trip
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            HERO IMAGE
        ========================= */}

        <section className="bg-[var(--background)]">
          <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[28px] border border-[var(--border)] shadow-[0_28px_70px_rgba(82,43,20,0.12)] sm:rounded-[36px]">
              <Image
                src={packageItem.coverImage}
                alt={packageItem.coverImageAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md sm:bottom-7 sm:left-7">
                {packageItem.destination}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            DETAILS
        ========================= */}

        <section className="bg-[var(--background)] py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
            <div>
              {/* ABOUT */}

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  About this journey
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                  Experience {packageItem.destination}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
                  {packageItem.description}
                </p>
              </div>

              {/* HIGHLIGHTS */}

              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                  Trip Highlights
                </h2>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {packageItem.highlights.map(
                    (highlight) => (
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
                    )
                  )}
                </div>
              </div>

              {/* ITINERARY */}

              {packageItem.itinerary &&
                packageItem.itinerary.length > 0 && (
                  <div className="mt-14">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                      Day by day
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                      Itinerary
                    </h2>

                    <div className="mt-7 space-y-4">
                      {packageItem.itinerary.map(
                        (item) => (
                          <div
                            key={item.day}
                            className="rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
                          >
                            <div className="flex gap-4">
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                                {item.day}
                              </div>

                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
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
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>

            {/* =========================
                SIDEBAR
            ========================= */}

            <aside>
              <div className="sticky top-28 space-y-5">
                {/* INCLUSIONS */}

                <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                    What's Included
                  </h2>

                  <div className="mt-5 space-y-3">
                    {packageItem.inclusions.map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />

                          <span className="text-sm leading-6 text-[var(--text-secondary)]">
                            {item}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* EXCLUSIONS */}

                <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                    Not Included
                  </h2>

                  <div className="mt-5 space-y-3">
                    {packageItem.exclusions.map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />

                          <span className="text-sm leading-6 text-[var(--text-secondary)]">
                            {item}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* CTA */}

                <div className="rounded-[26px] bg-[linear-gradient(135deg,var(--primary),var(--accent))] p-6 text-white shadow-[0_24px_55px_var(--primary-shadow)]">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                    Need help?
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    Plan this trip with us.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    Talk to ExploreYatri and customize this
                    package according to your travel needs.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--primary)]"
                  >
                    Send Enquiry
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