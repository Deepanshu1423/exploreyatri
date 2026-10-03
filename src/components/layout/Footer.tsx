import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="ExploreYatri home"
            >
              <Image
                src="/logo/explore-yatri-logo.png"
                alt="ExploreYatri logo"
                width={240}
                height={150}
                sizes="160px"
                className="h-auto w-[155px] object-contain"
                style={{ height: "auto" }}
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              Thoughtful journeys for travellers who want more than a
              checklist—meaningful experiences, personal guidance, and spaces to
              create lasting memories.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <Link href="/" className="hover:text-[var(--primary)]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[var(--primary)]">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="hover:text-[var(--primary)]"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[var(--primary)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Packages
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <Link
                  href="/packages/domestic"
                  className="hover:text-[var(--primary)]"
                >
                  Domestic
                </Link>
              </li>

              <li>
                <Link
                  href="/packages/international"
                  className="hover:text-[var(--primary)]"
                >
                  International
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Contact
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[var(--primary)]" />

                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[var(--primary)]"
                >
                  {siteConfig.phone}
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all hover:text-[var(--primary)]"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaInstagram className="h-4 w-4 shrink-0 text-[var(--accent)]" />

                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  Instagram
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaFacebookF className="h-4 w-4 shrink-0 text-[var(--accent)]" />

                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent" />

        <div className="mt-6 flex flex-col gap-3 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ExploreYatri. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[var(--primary)]">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-[var(--primary)]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
