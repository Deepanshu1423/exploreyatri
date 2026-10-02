"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const mountedTimeout = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    const visibilityTimeout = window.setTimeout(
      () => setVisible(false),
      mediaQuery.matches ? 500 : 1700,
    );

    return () => {
      window.clearTimeout(mountedTimeout);
      window.clearTimeout(visibilityTimeout);
    };
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  return (
    <div className="intro-loader" aria-live="polite" aria-label="Loading ExploreYatri">
      <div className="intro-loader__brand" aria-label="ExploreYatri logo">
        <Image
          src="/logo/exploreyatri-logo.webp"
          alt="ExploreYatri logo"
          width={260}
          height={84}
          priority
          className="h-auto w-[220px] sm:w-[260px]"
        />
      </div>
      <div className="intro-loader__line" aria-hidden="true" />
    </div>
  );
}
