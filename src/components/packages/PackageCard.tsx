import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Package } from "@/data/packages";

export function PackageCard({ packageItem }: { packageItem: Package }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_45px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <div className="relative h-52 overflow-hidden sm:h-64">
        <Image
          src={packageItem.image}
          alt={`${packageItem.title} in ${packageItem.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,17,31,0.38)] to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[rgba(255,255,255,0.18)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {packageItem.type}
        </span>
      </div>

      <div className="space-y-4 p-5 sm:space-y-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">{packageItem.title}</h3>
            <div className="mt-3 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <MapPin className="h-4 w-4 text-[var(--primary)]" />
              <span>{packageItem.location}</span>
            </div>
          </div>
          <span className="rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--primary)]">
            {packageItem.duration}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Starting from</p>
            <p className="mt-2 text-xl font-semibold text-[var(--text-primary)]">{packageItem.price}</p>
          </div>
          <Link
            href={packageItem.slug}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            View Package
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)] sm:leading-7">{packageItem.description}</p>
      </div>
    </article>
  );
}
