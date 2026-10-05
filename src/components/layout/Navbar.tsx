"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteConfig } from "@/config/site";

function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  const packagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setPackagesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        packagesRef.current &&
        !packagesRef.current.contains(event.target as Node)
      ) {
        setPackagesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 border-b border-[var(--border)] bg-[var(--surface)]/72 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--surface)]/62" />

      <nav
        className="relative mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:min-h-[78px] lg:px-8"
        aria-label="Main navigation"
      >
        {/* LOGO */}
        <Link
          href="/"
          className="shrink-0"
          aria-label="ExploreYatri home"
        >
          <Image
            src="/logo/explore-yatri-logo.png"
            alt="ExploreYatri logo"
            width={150}
            height={74}
            priority
            className="h-auto w-[112px] object-contain sm:w-[122px] lg:w-[130px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-8">
          {siteConfig.nav.map((item) => {
            const active = isRouteActive(pathname, item.href);

            if (item.children?.length) {
              return (
                <div
                  key={item.href}
                  ref={packagesRef}
                  className="relative"
                >
                  <button
                    type="button"
                    aria-expanded={packagesOpen}
                    aria-controls="desktop-packages-menu"
                    onClick={() =>
                      setPackagesOpen((current) => !current)
                    }
                    className={`nav-link inline-flex items-center gap-1.5 ${
                      active ? "active" : ""
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        packagesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {packagesOpen ? (
                    <div
                      id="desktop-packages-menu"
                      className="absolute left-1/2 top-full mt-5 w-64 -translate-x-1/2 overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)]/96 p-2 shadow-[0_24px_60px_rgba(60,30,12,0.14)] backdrop-blur-xl"
                    >
                      {item.children.map((child) => {
                        const childActive = isRouteActive(
                          pathname,
                          child.href
                        );

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                              childActive
                                ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                                : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello ExploreYatri, I would like to plan a trip."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_36px_var(--primary-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
          >
            <Phone className="h-4 w-4" />
            Plan My Trip
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/85 text-[var(--text-primary)] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen ? (
        <div className="relative border-t border-[var(--border)] bg-[var(--surface)]/96 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => {
                const active = isRouteActive(pathname, item.href);

                if (item.children?.length) {
                  return (
                    <div
                      key={item.href}
                      className="rounded-[20px] border border-[var(--border)] bg-[var(--surface-soft)] p-2"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setPackagesOpen(
                            (current) => !current
                          )
                        }
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-semibold ${
                          active
                            ? "text-[var(--primary)]"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {item.label}

                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            packagesOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {packagesOpen ? (
                        <div className="mt-1 space-y-1">
                          <Link
                            href="/packages"
                            className={`nav-link-mobile ${
                              pathname === "/packages"
                                ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                                : ""
                            }`}
                          >
                            All Packages
                          </Link>

                          {item.children.map((child) => {
                            const childActive =
                              isRouteActive(
                                pathname,
                                child.href
                              );

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`nav-link-mobile ${
                                  childActive
                                    ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                                    : ""
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link-mobile ${
                      active
                        ? "bg-[var(--primary-soft)] font-semibold text-[var(--primary)]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello ExploreYatri, I would like to plan a trip."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_var(--primary-shadow)]"
            >
              <Phone className="h-4 w-4" />
              Plan My Trip
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
