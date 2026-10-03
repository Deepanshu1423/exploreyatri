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
    setMobileOpen(false);
    setPackagesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-md dark:bg-black/[0.08]" />

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10 dark:bg-white/5" />

      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="ExploreYatri home"
        >
          <Image
            src="/logo/explore-yatri-logo.png"
            alt="ExploreYatri logo"
            width={240}
            height={150}
            priority
            sizes="120px"
            className="h-auto w-[95px] object-contain sm:w-[105px] lg:w-[115px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>

          <div className="relative">
            <button
              type="button"
              aria-expanded={packagesOpen}
              aria-controls="packages-menu"
              className={`nav-link inline-flex items-center gap-1 ${
                pathname.startsWith("/packages") ? "active" : ""
              }`}
              onClick={() => setPackagesOpen((open) => !open)}
            >
              Packages
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  packagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {packagesOpen && (
              <div
                id="packages-menu"
                className="absolute left-1/2 top-full mt-5 min-w-60 -translate-x-1/2 rounded-2xl border border-white/30 bg-white/80 p-2 shadow-[0_24px_60px_rgba(32,20,14,0.13)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(29,23,20,0.82)]"
              >
                {siteConfig.nav[1].children?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-all hover:bg-[var(--surface-soft)] hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/destinations"
            className={`nav-link ${isActive("/destinations") ? "active" : ""}`}
          >
            Destinations
          </Link>

          <Link
            href="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_var(--primary-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
          >
            <Phone className="h-4 w-4" />
            Plan My Trip
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/30 text-[var(--text-primary)] shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/20"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/20 bg-white/75 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[rgba(19,14,12,0.8)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            <Link href="/" className="nav-link-mobile">
              Home
            </Link>

            <div className="my-1 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]/85 p-3 backdrop-blur-md">
              <p className="mb-2 px-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Packages
              </p>

              <div className="flex flex-col gap-1">
                {siteConfig.nav[1].children?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link-mobile"
                  >
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
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3.5 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" />
              Plan My Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
