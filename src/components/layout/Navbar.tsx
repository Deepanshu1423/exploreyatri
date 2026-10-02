"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setMobileOpen(false);
      setPackagesOpen(false);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-[var(--surface)]/80 backdrop-blur-sm" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--border)]" />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center" aria-label="ExploreYatri home">
          <Image
            src="/logo/exploreyatri-logo.webp"
            alt="ExploreYatri logo"
            width={180}
            height={54}
            priority
            className="h-auto w-[140px] sm:w-[170px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="nav-link active">
            Home
          </Link>

          <div className="relative">
            <button
              type="button"
              aria-expanded={packagesOpen}
              aria-controls="packages-menu"
              className="nav-link inline-flex items-center gap-1"
              onClick={() => setPackagesOpen((open) => !open)}
            >
              Packages
              <ChevronDown className={`h-4 w-4 transition-transform ${packagesOpen ? "rotate-180" : ""}`} />
            </button>

            {packagesOpen ? (
              <div
                id="packages-menu"
                className="absolute left-0 top-full mt-4 min-w-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[0_24px_50px_rgba(15,23,42,0.08)]"
              >
                {siteConfig.nav[1].children?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link href="/destinations" className="nav-link">
            Destinations
          </Link>
          <Link href="/about" className="nav-link">
            About Us
          </Link>
          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--text-on-primary)] shadow-[0_18px_38px_rgba(15,118,110,0.2)] transition-all duration-300 hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            <Phone className="h-4 w-4" />
            Plan My Trip
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            <Link href="/" className="nav-link-mobile">
              Home
            </Link>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Packages
              </p>
              <div className="flex flex-col gap-1">
                {siteConfig.nav[1].children?.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-link-mobile">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/destinations" className="nav-link-mobile">
              Destinations
            </Link>
            <Link href="/about" className="nav-link-mobile">
              About Us
            </Link>
            <Link href="/contact" className="nav-link-mobile">
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--text-on-primary)]"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
