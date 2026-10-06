"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  const [menuRoute, setMenuRoute] = useState<string | null>(null);
  const open = menuRoute === pathname;
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [packageRoute, setPackageRoute] = useState<string | null>(null);
  const packagesOpen = packageRoute === pathname;

  useEffect(() => {
    function closePackages() { setPackageRoute(null); }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closePackages();
    }
    document.addEventListener("click", closePackages);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", closePackages);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuRoute(null);
        buttonRef.current?.focus();
      }
    }
    function handleOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMenuRoute(null);
    }
    const desktop = window.matchMedia("(min-width: 768px)");
    function handleResize() {
      if (desktop.matches) setMenuRoute(null);
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  function active(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="site-navbar" ref={headerRef}>
      <div className="site-navbar-inner">
        <Link href="/" aria-label="ExploreYatri home" className="site-brand" onClick={() => setMenuRoute(null)}>
          <Image src="/logo/explore-yatri-logo.png" alt="ExploreYatri logo" width={170} height={84} priority />
        </Link>

        <nav className="site-desktop-nav" aria-label="Main navigation">
          {siteConfig.nav.map(item => (
            <div className="site-nav-item" key={item.href} onMouseEnter={() => { if (item.children?.length) setPackageRoute(pathname); }} onMouseLeave={() => { if (item.children?.length) setPackageRoute(null); }} onFocus={event => { if (item.children?.length && !event.currentTarget.contains(event.relatedTarget)) setPackageRoute(pathname); }} onBlur={event => { if (item.children?.length && !event.currentTarget.contains(event.relatedTarget)) setPackageRoute(null); }}>
              <Link href={item.href} className="site-nav-link" data-active={active(item.href)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
              {item.children?.length ? (
                <div className="site-package-menu">
                  <ChevronDown size={15} aria-hidden="true" />
                  <div className="site-package-dropdown" hidden={!packagesOpen}>
                    <Link href="/packages">All Packages</Link>
                    {item.children.map(child => <Link key={child.href} href={child.href}>{child.label}</Link>)}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <button className="site-mobile-toggle" type="button" ref={buttonRef} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="site-mobile-navigation" onClick={() => setMenuRoute(open ? null : pathname)}>
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      <nav id="site-mobile-navigation" className="site-mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {siteConfig.nav.map(item => (
          <div key={item.href}>
            <Link href={item.href} className="site-mobile-link" data-active={active(item.href)} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setMenuRoute(null)}>{item.label}</Link>
            {item.children?.map(child => <Link key={child.href} href={child.href} className="site-mobile-child" data-active={active(child.href)} onClick={() => setMenuRoute(null)}>{child.label}</Link>)}
          </div>
        ))}
      </nav>
    </header>
  );
}
