import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUp, CalendarDays, FileText, Mail, Phone, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { PageSeo } from "@/components/seo/PageSeo";
import { siteConfig } from "@/config/site";
import { termsIntroduction, termsSections } from "@/data/terms";
import { pageMetadata } from "@/lib/seo";
import { TermsAccordion } from "@/components/terms/TermsAccordion";

export const metadata: Metadata = pageMetadata("/terms");

export default function TermsPage() {
  return (
    <>
      <main id="terms-top" className="bg-[var(--background)]">
        <PageSeo path="/terms" />
        <section className="border-b border-[var(--border)] bg-[image:var(--section-hero-bg)]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)]"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--primary)]"><ShieldCheck size={16} aria-hidden="true" /> Travel with clarity</div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Terms <span className="hero-gradient-text">&amp; Conditions</span></h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">{termsIntroduction}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm text-[var(--text-primary)]"><CalendarDays size={16} aria-hidden="true" /> Last updated: <time dateTime="2026-10-07">7 October 2026</time></div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:px-8">
          <aside className="hidden min-w-0 sm:block lg:sticky lg:top-32">
            <details open className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
              <summary className="cursor-pointer text-base font-semibold text-[var(--text-primary)]">On this page <span className="ml-2 text-xs font-normal text-[var(--text-secondary)]">30 sections</span></summary>
              <nav aria-label="Terms and conditions sections" className="mt-4 max-h-64 overflow-y-auto overscroll-contain pr-2 lg:max-h-[calc(100dvh-240px)]">
                <ol className="space-y-1">
                  {termsSections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`} className="flex gap-3 rounded-xl px-3 py-2.5 text-sm leading-5 text-[var(--text-secondary)] transition-colors hover:bg-[var(--primary-soft)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]"><span className="w-5 shrink-0 text-[var(--primary)]">{String(section.number).padStart(2, "0")}</span>{section.title}</a></li>
                  ))}
                </ol>
              </nav>
            </details>
          </aside>

          <div className="min-w-0 space-y-4 sm:space-y-6">
            <TermsAccordion sections={termsSections.map((section) => ({
              id: section.id,
              title: section.title,
              number: section.number,
              content: (
                <div className="space-y-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                  {section.blocks.map((block, index) => {
                    if (block.type === "paragraph") return <p key={index}>{block.text}</p>;
                    const List = block.type === "ordered" ? "ol" : "ul";
                    return <List key={index} className={`${block.type === "ordered" ? "list-decimal" : "list-disc"} space-y-3 pl-5 marker:font-semibold marker:text-[var(--primary)]`}>
                      {block.items.map((item) => <li key={item} className="pl-1">{item}</li>)}
                    </List>;
                  })}
                </div>
              ),
            }))} />

            <section className="rounded-3xl border border-[var(--border)] bg-[image:var(--section-panel-bg)] p-5 sm:p-8" aria-labelledby="terms-contact-title">
              <FileText className="text-[var(--primary)]" aria-hidden="true" />
              <h2 id="terms-contact-title" className="mt-4 text-2xl font-semibold">Exploreyatri</h2>
              <p className="mt-1 font-medium text-[var(--primary)]">Travel Like a True Yatri</p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">Domestic &amp; International Trips | Group Departures | Customized Tours | Corporate Trips | Solo Travel</p>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">GSTIN: <span className="font-semibold text-[var(--text-primary)]">09CKMPJ4866K1ZE</span></p>
              <div className="mt-5 flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap">
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 break-all hover:text-[var(--primary)]"><Mail size={16} className="shrink-0 text-[var(--primary)]" aria-hidden="true" />{siteConfig.email}</a>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-[var(--primary)]"><Phone size={16} className="text-[var(--primary)]" aria-hidden="true" />{siteConfig.phone}</a>
                <a href="https://www.exploreyatri.com" className="hover:text-[var(--primary)]">www.exploreyatri.com</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
                <Link href="/contact" className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]">Questions? Contact us</Link>
                <a href="#terms-top" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)]">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
