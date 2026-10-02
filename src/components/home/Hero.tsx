import Link from "next/link";

export function Hero() {
  return (
    <section className="theme-section relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0" style={{ backgroundImage: "var(--section-hero-bg)" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--text-secondary)] shadow-sm">
            EXPLORE • DREAM • DISCOVER
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-7xl">
            Journeys Made
            <span className="block text-[var(--primary)]">Worth Remembering.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base lg:text-lg">
            Discover handpicked domestic and international holidays designed around the way you love to travel.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-[var(--text-on-primary)] shadow-[0_16px_38px_rgba(15,118,110,0.2)] transition-all duration-300 hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Explore Packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Plan Your Trip
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[var(--text-secondary)]">
            Curated Trips • Personal Support • Memorable Experiences
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="hero-visual" aria-label="Travel destination collage">
            <div
              className="hero-main-image"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(8,16,25,0.12), rgba(8,16,25,0.44)), url('/images/hero-travel.svg')",
              }}
            />

            <div className="float-card float-card--domestic">
              <span className="float-card__label">Domestic</span>
              <strong>Himalayan Escape</strong>
            </div>

            <div className="float-card float-card--international">
              <span className="float-card__label">International</span>
              <strong>Bali Calm</strong>
            </div>

            <div className="floating-pin floating-pin--one">
              <span className="floating-pin__dot" />
              Kashmir
            </div>

            <div className="floating-pin floating-pin--two">
              <span className="floating-pin__dot" />
              Bali
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
