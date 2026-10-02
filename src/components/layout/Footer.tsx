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
            <Link href="/" className="inline-flex items-center" aria-label="ExploreYatri home">
              <Image
                src="/logo/exploreyatri-logo.webp"
                alt="ExploreYatri logo"
                width={180}
                height={54}
                className="h-auto w-[150px]"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              Thoughtful journeys for travellers who want more than a checklist—meaningful experiences,
              personal guidance, and spaces to create lasting memories.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li><Link href="/" className="hover:text-[var(--text-primary)]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--text-primary)]">About</Link></li>
              <li><Link href="/destinations" className="hover:text-[var(--text-primary)]">Destinations</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--text-primary)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Packages</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li><Link href="/packages/domestic" className="hover:text-[var(--text-primary)]">Domestic</Link></li>
              <li><Link href="/packages/international" className="hover:text-[var(--text-primary)]">International</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--primary)]" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-[var(--text-primary)]">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--primary)]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--text-primary)]">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="h-4 w-4 text-[var(--primary)]" />
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebookF className="h-4 w-4 text-[var(--primary)]" />
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ExploreYatri. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[var(--text-primary)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--text-primary)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
