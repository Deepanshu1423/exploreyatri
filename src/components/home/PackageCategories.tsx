import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  MapPinned,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

const categories = [
  {
    title: "Domestic Escapes",
    eyebrow: "Explore India",
    description:
      "From Himalayan valleys and spiritual journeys to royal cities and desert landscapes.",
    href: "/packages/domestic",
    image: "/images/packages/kashmir-explorer.jpg",
    imageAlt: "Beautiful Kashmir mountains in India",
    icon: MapPinned,
  },
  {
    title: "International Getaways",
    eyebrow: "Beyond Borders",
    description:
      "Discover thoughtfully planned international holidays, city breaks and tropical escapes.",
    href: "/packages/international",
    image: "/images/packages/bali-tropical.jpg",
    imageAlt: "Tropical Bali international holiday destination",
    icon: Globe2,
  },
];

export function PackageCategories() {
  return (
    <section className="bg-[var(--background)] py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--primary)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
              Choose Your Journey
            </p>
          </div>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Travel near. Travel far.
            <span className="hero-gradient-text block">
              Travel your way.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Start with the kind of journey you want, then explore packages
            designed around memorable places and flexible travel experiences.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.href}
                href={category.href}
                className="group relative min-h-[330px] overflow-hidden rounded-[28px] border border-[var(--border)] shadow-[0_22px_60px_rgba(82,43,20,0.08)] sm:min-h-[380px]"
              >
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,108,12,0.12),transparent_48%,rgba(201,11,18,0.08))]" />

                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-black/15 text-white backdrop-blur-md sm:left-5 sm:top-5">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 sm:text-xs">
                    {category.eyebrow}
                  </p>

                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                        {category.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/75 sm:text-[15px]">
                        {category.description}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-6 group-hover:bg-[var(--primary)] sm:h-12 sm:w-12">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-7 flex justify-center sm:mt-8">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition-opacity hover:opacity-80"
          >
            Browse all packages
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
