"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setClosing(true);
    }, 1600);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2050);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`premium-loader ${
        closing ? "premium-loader--closing" : ""
      }`}
      aria-hidden="true"
    >
      <div className="premium-loader__glow premium-loader__glow--one" />
      <div className="premium-loader__glow premium-loader__glow--two" />

      <div className="premium-loader__content">
        <div className="premium-loader__logo-wrap">
          <div className="premium-loader__ring" />

          <div className="premium-loader__logo-position">
            <Image
              src="/logo/explore-yatri-logo-display.png"
              alt="Explore Yatri"
              width={320}
              height={220}
              preload
              sizes="(max-width: 640px) 218px, 275px"
              className="premium-loader__logo"
            />
          </div>
        </div>

        <p className="premium-loader__tagline">
          Explore • Dream • Discover
        </p>

        <div className="premium-loader__line">
          <span />
        </div>

        <p className="premium-loader__small">
          Built for Explorers
        </p>
      </div>
    </div>
  );
}
