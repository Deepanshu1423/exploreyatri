import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="theme-section hero-section-bg relative overflow-hidden border-b border-[var(--border)]">
      <div className="hero-section-overlay pointer-events-none absolute inset-0" />

      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />

      <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/85 px-4 py-2 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-[var(--primary)]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--text-secondary)] sm:text-[11px]">
              Built for Explorers
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[var(--text-primary)] sm:text-6xl lg:text-[4.7rem]">
            Journeys Made
            <span className="hero-gradient-text mt-1 block">
              Worth Remembering.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            Discover handpicked domestic and international holidays designed
            around the way you love to travel.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/packages"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_var(--primary-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              Explore Packages
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)]/78 px-7 py-3.5 text-sm font-bold text-[var(--text-primary)] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Plan My Trip
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
            <span>Curated Trips</span>
            <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />
            <span>Personal Support</span>
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            <span>Memorable Experiences</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-card">
              <Image
                src="/images/optimized/explore-yatri-hero.jpg.webp"
                alt="Beautiful mountain destination by a peaceful lake"
                fill
                priority
                sizes="(max-width: 768px) 94vw, (max-width: 1200px) 48vw, 600px"
                className="object-cover"
              />

              <div className="hero-photo-overlay" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5 text-[var(--primary-light)]" />
                  Kashmir, India
                </div>

                <div className="mt-3 max-w-sm">
                  <p className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                    Discover places that stay with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card--top">
              <span className="hero-floating-label">Domestic</span>
              <strong>Himalayan Escape</strong>
              <small>Nature • Mountains • Calm</small>
            </div>

            <div className="hero-floating-card hero-floating-card--bottom">
              <span className="hero-floating-label">Explore Yatri</span>
              <strong>Built for Explorers</strong>
            </div>

            <div className="hero-location-pin">
              <span className="hero-location-dot" />
              Kashmir
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
