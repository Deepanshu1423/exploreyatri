import { PageSeo } from "@/components/seo/PageSeo";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = pageMetadata("/contact");

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: siteConfig.phone,
    description: "Quickest way to discuss your trip.",
    href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`,
    external: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: siteConfig.phone,
    description: "Talk directly with our travel team.",
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    description: "Share detailed travel requirements.",
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>

      <main className="bg-[var(--background)]">
        <PageSeo path="/contact" type="ContactPage" />
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <Image
            src="/images/herobackground_image.jpg"
            alt="Beautiful ExploreYatri travel destination"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,245,0.95)_0%,rgba(255,250,245,0.88)_42%,rgba(255,250,245,0.62)_100%)] dark:bg-[linear-gradient(90deg,rgba(19,14,12,0.96)_0%,rgba(19,14,12,0.88)_45%,rgba(19,14,12,0.66)_100%)]" />

          <div className="relative mx-auto flex min-h-[48vh] max-w-7xl items-center px-4 py-14 sm:min-h-[52vh] sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/82 px-4 py-2 shadow-sm backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[var(--primary)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--text-secondary)] sm:text-xs">
                  Built for Explorers
                </span>
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                Tell us your plan.
                <span className="hero-gradient-text block">
                  We&apos;ll shape the journey.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8 lg:text-lg">
                Share your destination, dates, group size and budget. You can
                send the enquiry by email or continue directly on WhatsApp.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-[var(--text-secondary)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/75 px-3 py-2 backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
                  Personalized planning
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/75 px-3 py-2 backdrop-blur-md">
                  <Clock3 className="h-4 w-4 text-[var(--primary)]" />
                  Quick response
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT + FORM */}
        <section className="py-10 sm:py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            {/* LEFT */}
            <aside className="space-y-5">
              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_50px_rgba(82,43,20,0.06)] sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs">
                  Get in touch
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--text-primary)]">
                  Your next trip can start with one message.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  Whether you already know the destination or only have a budget
                  in mind, share the details and we&apos;ll help you choose the
                  right travel plan.
                </p>

                <div className="mt-6 space-y-3">
                  {contactCards.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/40"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]">
                          <Icon className="h-5 w-5" />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-[var(--primary)]">
                            {item.title}
                          </span>

                          <span className="mt-1 block break-all text-sm font-semibold text-[var(--text-primary)]">
                            {item.value}
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-[var(--text-secondary)]">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,var(--primary),var(--accent))] p-6 text-white shadow-[0_22px_55px_var(--primary-shadow)] sm:p-7">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

                <MapPin className="relative h-7 w-7" />

                <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Custom travel
                </p>

                <h3 className="relative mt-2 text-2xl font-semibold">
                  Have only a destination or budget?
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-white/80">
                  That&apos;s enough to begin. Tell us what you have in mind and
                  ExploreYatri can help build the rest around your preferences.
                </p>
              </div>
            </aside>

            {/* FORM */}
            <ContactForm />
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="theme-section-soft border-y border-[var(--border)] py-9 sm:py-10">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
            <div>
              <p className="text-2xl font-semibold text-[var(--text-primary)]">
                Personalized
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Trips built around your preferences.
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-[var(--text-primary)]">
                Flexible
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Destination, budget and group-size friendly.
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-[var(--text-primary)]">
                Human Support
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Direct assistance before your journey.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
