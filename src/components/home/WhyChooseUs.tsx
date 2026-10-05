import {
  BadgeCheck,
  Headphones,
  Route,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

const reasons = [
  {
    icon: Route,
    title: "Trips Built Around You",
    description:
      "We shape the itinerary around your destination, dates, budget and travel style instead of forcing a one-size-fits-all plan.",
  },
  {
    icon: WalletCards,
    title: "Clear Travel Planning",
    description:
      "Get a simple understanding of the trip structure, inclusions and pricing before you move ahead.",
  },
  {
    icon: BadgeCheck,
    title: "Handpicked Experiences",
    description:
      "From stays and sightseeing to memorable local experiences, every journey is planned with care.",
  },
  {
    icon: Headphones,
    title: "Human Support",
    description:
      "Talk directly with the ExploreYatri team whenever you need help planning or understanding your trip.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="theme-section-soft border-y border-[var(--border)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="why-choose-us-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[var(--primary)]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
                Why ExploreYatri
              </p>
            </div>

            <h2
              id="why-choose-us-heading"
              className="mt-3 text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
            >
              Travel planning that feels
              <span className="hero-gradient-text block">
                simple and personal.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              A good trip is more than a list of places. It should match the
              way you want to travel, the people you are travelling with and
              the experience you want to remember.
            </p>

            <div className="mt-6 rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-5 text-left shadow-[0_18px_48px_rgba(82,43,20,0.06)] sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]">
                  <ShieldCheck className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Plan with confidence
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                    Start with whatever you know — destination, budget or
                    dates — and build the journey step by step with our team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className={`group rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_45px_rgba(82,43,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40 sm:p-6 ${
                    index % 2 === 1 ? "sm:translate-y-5" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
