import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Mail, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { PageSeo } from "@/components/seo/PageSeo";
import { siteConfig } from "@/config/site";
import { termsSections } from "@/data/terms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/privacy");

// Reuse the supplied privacy clauses without introducing unverified practices.
const privacySections = [
  { title: "Customer information", source: 26 },
  { title: "Booking & service communications", source: 27 },
  { title: "Photography & marketing", source: 18 },
].map(({ title, source }) => ({
  title,
  paragraphs: termsSections
    .find((section) => section.number === source)!
    .blocks.filter((block) => block.type === "paragraph")
    .map((block) => block.text)
    // The original second privacy paragraph references this very page.
    .filter((_, index) => source !== 26 || index === 0),
}));

export default function PrivacyPage() {
  return (
    <>
      <main className="bg-[var(--background)]">
        <PageSeo path="/privacy" />
        <section className="border-b border-[var(--border)] bg-[image:var(--section-hero-bg)]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)]">
              <ArrowLeft size={16} aria-hidden="true" /> Back to home
            </Link>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
              <ShieldCheck size={20} aria-hidden="true" /> Your information, handled with care
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Privacy <span className="hero-gradient-text">Policy</span></h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              Information about how Exploreyatri uses customer details, communicates about travel services and uses voluntarily provided content.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm">
              <CalendarDays size={16} aria-hidden="true" /> Last updated: <time dateTime="2026-10-08">8 October 2026</time>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 sm:space-y-6 sm:px-6 sm:py-12 lg:px-8">
          {privacySections.map((section, index) => (
            <section key={section.title} aria-labelledby={`privacy-section-${index}`} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-8">
              <div className="mb-5 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-sm font-bold text-[var(--primary)]">0{index + 1}</span>
                <h2 id={`privacy-section-${index}`} className="pt-1.5 text-lg font-semibold leading-7 sm:text-xl">{section.title}</h2>
              </div>
              <div className="space-y-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
          <section aria-labelledby="privacy-contact" className="rounded-3xl border border-[var(--border)] bg-[image:var(--section-panel-bg)] p-5 sm:p-8">
            <Mail className="text-[var(--primary)]" aria-hidden="true" />
            <h2 id="privacy-contact" className="mt-4 text-2xl font-semibold">Privacy questions?</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">Contact Exploreyatri with questions about your personal information or to communicate your preferences about voluntarily provided photos, videos or testimonials.</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-4 inline-block break-all font-medium text-[var(--primary)] underline underline-offset-4">{siteConfig.email}</a>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
              <Link href="/contact" className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--primary-hover)]">Contact our team</Link>
              <Link href="/terms" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)]">Terms &amp; Conditions <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
