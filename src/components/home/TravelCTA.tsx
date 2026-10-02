import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

export function TravelCTA() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="theme-panel rounded-[32px] border border-[var(--border)] p-8 shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">Not sure where to go?</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
                Tell us how you want to travel and we&apos;ll help you plan the right experience.
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-[var(--text-on-primary)] shadow-[0_18px_40px_rgba(15,118,110,0.2)] transition-all duration-300 hover:bg-[var(--primary-hover)]"
              >
                Plan My Trip
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <PhoneCall className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
