import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import type { TravelPackage } from "@/types/package";

interface PackageCardProps {
  packageItem: TravelPackage;
}

export function PackageCard({
  packageItem,
}: PackageCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-IN").format(
    packageItem.price
  );

  const formattedOriginalPrice = packageItem.originalPrice
    ? new Intl.NumberFormat("en-IN").format(
        packageItem.originalPrice
      )
    : null;

  const duration = `${packageItem.nights} Nights / ${packageItem.days} Days`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_45px_rgba(82,43,20,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/30 hover:shadow-[0_28px_70px_rgba(124,55,12,0.14)]">
      {/* IMAGE */}
      <Link
        href={`/packages/${packageItem.slug}`}
        className="relative block h-56 overflow-hidden sm:h-64"
        aria-label={`View ${packageItem.title}`}
      >
        <Image
          src={packageItem.coverImage}
          alt={packageItem.coverImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Premium image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        {/* Orange warmth */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,108,12,0.06),transparent_45%,rgba(201,11,18,0.04))]" />

        {/* PACKAGE TYPE */}
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-md">
          {packageItem.type === "domestic"
            ? "Domestic"
            : "International"}
        </span>

        {/* DURATION */}
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          <CalendarDays className="h-3.5 w-3.5 text-[var(--primary-light)]" />

          {duration}
        </div>
      </Link>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <Link href={`/packages/${packageItem.slug}`}>
            <h3 className="text-xl font-semibold leading-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-2xl">
              {packageItem.title}
            </h3>
          </Link>

          <div className="mt-3 flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />

            <span>{packageItem.location}</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-[var(--text-secondary)] sm:leading-7">
          {packageItem.shortDescription}
        </p>

        {/* HIGHLIGHTS */}
        {packageItem.highlights.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {packageItem.highlights
              .slice(0, 3)
              .map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-[10px] font-semibold text-[var(--primary)]"
                >
                  {highlight}
                </span>
              ))}
          </div>
        )}

        {/* PRICE + CTA */}
        <div className="mt-auto pt-6">
          <div className="border-t border-[var(--border)] pt-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Starting from
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl font-bold text-[var(--text-primary)]">
                    ₹{formattedPrice}
                  </span>

                  {formattedOriginalPrice && (
                    <span className="text-xs text-[var(--text-secondary)] line-through">
                      ₹{formattedOriginalPrice}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-[10px] text-[var(--text-secondary)]">
                  per person*
                </p>
              </div>

              <Link
                href={`/packages/${packageItem.slug}`}
                className="group/button inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2.5 text-sm font-bold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
              >
                View Package

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}