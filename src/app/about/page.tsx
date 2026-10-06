import { PageSeo } from "@/components/seo/PageSeo";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Compass,
  HeartHandshake,
  MapPin,
  Mountain,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { FounderCard } from "@/components/about/FounderCard";

export const metadata: Metadata = pageMetadata("/about");

const journeySteps = [
  {
    year: "The Beginning",
    title: "Travel experience that shaped the idea",
    description:
      "The journey started with hands-on experience in travel sales, operations, customer handling, package creation and business development. That experience built a practical understanding of leads, bookings, suppliers, payments and trip coordination.",
  },
  {
    year: "The Transition",
    title: "From Travelznex to ExploreYatri",
    description:
      "The business moved forward with a fresh identity focused on a modern, youth-oriented and experience-led travel brand — ExploreYatri.",
  },
  {
    year: "The Brand",
    title: "Built for explorers",
    description:
      "ExploreYatri was shaped around affordability, customized holidays, group departures, youth travel, family trips, pilgrimage journeys, corporate travel and international holidays.",
  },
  {
    year: "Today",
    title: "A growing full-service travel brand",
    description:
      "The direction now combines B2C travel, B2B partnerships, group departures, customized planning, digital marketing, trip operations and a structured sales team.",
  },
];

const services = [
  {
    icon: Mountain,
    title: "Domestic Holidays",
    description:
      "Mountain escapes, beach breaks, weekend trips and curated holidays across India.",
  },
  {
    icon: Plane,
    title: "International Travel",
    description:
      "Thoughtfully planned international holidays for couples, families, groups and explorers.",
  },
  {
    icon: Users,
    title: "Group Departures",
    description:
      "Fixed-date trips designed for social travel, shared experiences and value-for-money journeys.",
  },
  {
    icon: HeartHandshake,
    title: "Customized Trips",
    description:
      "Personalized itineraries built around your destination, budget, comfort and travel style.",
  },
  {
    icon: Compass,
    title: "Yatra & Pilgrimage",
    description:
      "Kedarnath, Do Dham, Char Dham and other spiritual journeys with simple package options.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate & College Travel",
    description:
      "Travel planning for organizations, colleges, clubs and private groups with coordinated logistics.",
  },
];

const brandValues = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Clear communication, practical planning and transparent package information at every stage.",
  },
  {
    icon: Sparkles,
    title: "Experiences Over Checklists",
    description:
      "Trips are designed around memories, discovery, adventure and meaningful travel moments.",
  },
  {
    icon: BadgeCheck,
    title: "Value for Money",
    description:
      "Comfortable stays, transport, meals, sightseeing and coordination packaged around sensible pricing.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Support",
    description:
      "From first enquiry to post-trip feedback, ExploreYatri focuses on direct and responsive assistance.",
  },
];

const travelTypes = [
  "Adventure Trips",
  "Beach Holidays",
  "Yatra & Pilgrimage",
  "Honeymoons",
  "Family Holidays",
  "College Trips",
  "Corporate Travel",
  "International Travel",
  "Solo Travel",
  "Group Departures",
];

export default function AboutPage() {
  return (
    <>

      <main>
        <PageSeo path="/about" type="AboutPage" />
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
          <Image
            src="/images/optimized/herobackground_image.jpg.webp"
            alt="ExploreYatri travel background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,245,0.94)_0%,rgba(255,250,245,0.86)_45%,rgba(255,250,245,0.60)_100%)] dark:bg-[linear-gradient(90deg,rgba(19,14,12,0.94)_0%,rgba(19,14,12,0.84)_45%,rgba(19,14,12,0.64)_100%)]" />

          <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-2 shadow-sm backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[var(--primary)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--text-secondary)] sm:text-xs">
                  Our Story • Our Journey • Our Vision
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-semibold leading-[0.98] text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
                Travel Like a
                <span className="hero-gradient-text block">True Yatri.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                ExploreYatri is a travel brand built around affordable travel,
                customized planning, memorable group experiences and personal
                support — for travellers who want more than just a booking.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/packages"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_var(--primary-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
                >
                  Explore Packages
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)]/80 px-7 py-3.5 text-sm font-bold text-[var(--text-primary)] backdrop-blur-md transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Plan My Trip
                </Link>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                ExploreYatri — Built for Explorers
              </p>
            </div>

            <div className="relative mx-auto hidden w-full max-w-xl lg:block">
              <div className="relative ml-auto aspect-[4/5] w-[78%] overflow-hidden rounded-[34px] border border-white/30 shadow-[0_30px_80px_rgba(60,30,12,0.18)]">
                <Image
                  src="/images/optimized/packages/kashmir-paradise.jpg.webp"
                  alt="Scenic Himalayan travel experience"
                  fill
                  sizes="520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 left-0 aspect-[4/3] w-[52%] overflow-hidden rounded-[26px] border-[6px] border-[var(--background)] shadow-[0_24px_55px_rgba(60,30,12,0.16)]">
                <Image
                  src="/images/optimized/packages/bali-tropical.jpg.webp"
                  alt="Bali tropical holiday"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-8 rounded-2xl border border-white/40 bg-white/78 p-4 shadow-[0_18px_40px_rgba(40,20,10,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-black/45">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Our Purpose
                </p>
                <p className="mt-1 max-w-[170px] text-sm font-semibold text-[var(--text-primary)]">
                  Not just trips — memories, adventure and experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FounderCard />

        <section className="bg-[var(--background)] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                Who We Are
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl">
                More than a conventional travel agency.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              <p>
                ExploreYatri grew from practical experience in travel sales,
                operations, customer handling, package creation and business
                development. That foundation shaped a brand designed to make
                travel easier, more personal and more experience-focused.
              </p>

              <p>
                The brand serves young travellers, couples, families, college
                groups, corporate clients, pilgrims, solo travellers and
                international holiday seekers through customized trips and
                fixed group departures.
              </p>

              <p className="font-semibold text-[var(--text-primary)]">
                The idea is simple: a traveller can come to us with a
                destination — or even just a budget — and we help shape the
                journey around them.
              </p>
            </div>
          </div>
        </section>

        <section className="theme-section-soft border-y border-[var(--border)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                Our Journey
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-[var(--text-primary)] sm:text-5xl">
                From travel operations to a scalable travel brand.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {journeySteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_45px_rgba(82,43,20,0.05)] sm:p-7"
                >
                  <div className="absolute right-5 top-4 text-6xl font-bold text-[var(--primary)] opacity-[0.06]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                    {step.year}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--background)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-[var(--text-primary)] sm:text-5xl">
                Travel for every kind of explorer.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                From relaxed holidays to social group trips and spiritual
                journeys, ExploreYatri is built to support different travel
                styles under one brand.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_22px_55px_rgba(82,43,20,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="theme-section-soft border-y border-[var(--border)] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <div className="relative min-h-[430px] overflow-hidden rounded-[34px] border border-[var(--border)]">
              <Image
                src="/images/optimized/packages/manali-retreat.jpg.webp"
                alt="ExploreYatri mountain travel"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Our Philosophy
                </p>
                <p className="mt-3 max-w-md text-3xl font-semibold leading-tight">
                  Travel should feel personal, simple and worth remembering.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                Why ExploreYatri
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-[var(--text-primary)] sm:text-5xl">
                Built around trust, value and experiences.
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {brandValues.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={value.title}
                      className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5"
                    >
                      <Icon className="h-5 w-5 text-[var(--primary)]" />

                      <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                        {value.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--background)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_20px_55px_rgba(82,43,20,0.06)] sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-soft)]">
                  <Building2 className="h-5 w-5 text-[var(--primary)]" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                  Formal Business Identity
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                  Travel with a brand built for trust.
                </h2>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      GST
                    </p>
                    <p className="mt-2 font-semibold text-[var(--text-primary)]">
                      09CKMPJ4866K1ZE
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      Udyam / MSME
                    </p>
                    <p className="mt-2 font-semibold text-[var(--text-primary)]">
                      UDYAM-UP-58-0091160
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      Email
                    </p>
                    <p className="mt-2 break-all font-semibold text-[var(--text-primary)]">
                      exploreyatri01@gmail.com
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      Phone / WhatsApp
                    </p>
                    <p className="mt-2 font-semibold text-[var(--text-primary)]">
                      +91 93680 66293
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-[linear-gradient(135deg,var(--primary),var(--accent))] p-7 text-white shadow-[0_24px_60px_var(--primary-shadow)] sm:p-9">
                <Compass className="h-8 w-8" />

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  Our Vision
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  One travel brand for every kind of journey.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
                  The long-term vision is to make ExploreYatri a recognizable
                  travel brand where customers can come with a destination, a
                  travel style or simply a budget — and have the journey planned
                  around them.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {travelTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="theme-section-soft border-t border-[var(--border)] py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <MapPin className="mx-auto h-7 w-7 text-[var(--primary)]" />

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
              Start Your Journey
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[var(--text-primary)] sm:text-5xl">
              Tell us where you want to go.
              <span className="hero-gradient-text mx-auto block">
                We&apos;ll help shape the journey.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
              Customized holiday, group departure, pilgrimage, honeymoon or
              international escape — start with a conversation.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_var(--primary-shadow)] transition-all duration-300 hover:bg-[var(--primary-hover)]"
            >
              Plan My Trip
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
