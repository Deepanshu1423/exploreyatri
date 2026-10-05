import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { Destination } from "@/types/destination";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block min-h-[360px] overflow-hidden rounded-[28px] border border-[var(--border)] shadow-[0_20px_55px_rgba(82,43,20,0.08)] sm:min-h-[420px]"
    >
      <Image
        src={destination.image}
        alt={destination.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,108,12,0.10),transparent_50%,rgba(201,11,18,0.08))]" />

      <div className="absolute left-4 top-4">
        <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {destination.category}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs text-white/75">
          <MapPin className="h-3.5 w-3.5" />

          <span>
            {destination.state}, {destination.country}
          </span>
        </div>

        <div className="mt-2 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-3xl font-semibold text-white">
              {destination.name}
            </h3>

            <p className="mt-2 line-clamp-2 max-w-sm text-sm leading-6 text-white/75">
              {destination.shortDescription}
            </p>
          </div>

          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[var(--primary)]">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}