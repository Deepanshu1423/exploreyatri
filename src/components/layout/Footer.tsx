import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    "Hello ExploreYatri, I would like to plan a trip.",
  );

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      {/* TOP CTA */}
      <div className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-10 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,var(--primary),var(--accent))] px-5 py-5 text-white shadow-[0_20px_55px_var(--primary-shadow)] sm:px-8 sm:py-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 sm:text-xs">
                Built for Explorers
              </p>

              <h2 className="mt-2 text-xl font-semibold leading-tight sm:text-3xl">
                Have a destination in mind?
              </h2>

              <p className="mt-2 text-sm leading-5 sm:mt-3 sm:leading-6 text-white/80 sm:text-base">
                Share your destination, dates and budget. We&apos;ll help shape
                the journey around you.
              </p>
            </div>

            <div className="relative mt-4 flex flex-row flex-wrap gap-2 sm:mt-5 sm:gap-3 lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--primary)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Plan My Trip
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.1fr] lg:gap-10">
          {/* BRAND */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="ExploreYatri home"
            >
              <Image
                src="/logo/explore-yatri-logo.png"
                alt="ExploreYatri logo"
                width={170}
                height={84}
                className="h-auto w-[135px] object-contain sm:w-[145px]"
              />
            </Link>

            <p className="mt-2 max-w-md text-sm leading-5 sm:mt-4 sm:leading-7 text-[var(--text-secondary)]">
              Thoughtfully planned journeys for travellers who value memorable
              experiences, personal guidance and flexible travel options.
            </p>

            <div className="mt-3 flex items-center gap-3 sm:mt-5">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ExploreYatri Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ExploreYatri Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ExploreYatri WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Explore
            </h3>

            <ul className="mt-3 space-y-2 text-[13px] sm:mt-4 sm:space-y-3 sm:text-sm text-[var(--text-secondary)]">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* PACKAGES */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Packages
            </h3>

            <ul className="mt-3 space-y-2 text-[13px] sm:mt-4 sm:space-y-3 sm:text-sm text-[var(--text-secondary)]">
              <li>
                <Link
                  href="/packages"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  All Packages
                </Link>
              </li>

              <li>
                <Link
                  href="/packages/domestic"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Domestic Packages
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/packages/international"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  International Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Contact
            </h3>

            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-[13px] sm:mt-4 sm:block sm:space-y-4 sm:text-sm text-[var(--text-secondary)]">
              {/* CALL */}
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />

                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  {siteConfig.phone}
                </a>
              </li>

              {/* WHATSAPP */}
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello ExploreYatri, I would like to plan a trip.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  WhatsApp Us
                </a>
              </li>

              {/* EMAIL */}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-[var(--primary)]"
                >
                  {siteConfig.email}
                </a>
              </li>

              {/* LOCATION */}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />

                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-5 flex flex-col gap-3 sm:gap-4 border-t border-[var(--border)] pt-4 text-xs sm:pt-6 text-[var(--text-secondary)] sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ExploreYatri. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Terms & Conditions
            </Link>

            <span>Built for Explorers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
