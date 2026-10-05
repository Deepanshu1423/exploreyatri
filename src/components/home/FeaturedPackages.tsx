"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";

import { PackageCard } from "@/components/packages/PackageCard";
import { Container } from "@/components/ui/Container";
import { getFeaturedPackages } from "@/services/packageService";

const AUTO_SLIDE_DELAY = 3800;

function getVisibleCount() {
  if (typeof window === "undefined") return 3;

  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1280) return 2;

  return 3;
}

export function FeaturedPackages() {
  const featuredPackages = useMemo(
    () => getFeaturedPackages(),
    []
  );

  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const touchStartX = useRef<number | null>(null);

  const slideItems = useMemo(() => {
    if (featuredPackages.length === 0) return [];

    const cloneCount = Math.min(3, featuredPackages.length);

    return [
      ...featuredPackages,
      ...featuredPackages.slice(0, cloneCount),
    ];
  }, [featuredPackages]);

  useEffect(() => {
    function updateVisibleCount() {
      setVisibleCount(getVisibleCount());
      setCurrentIndex(0);
      setIsTransitioning(false);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    if (
      paused ||
      featuredPackages.length <= visibleCount
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((current) => current + 1);
    }, AUTO_SLIDE_DELAY);

    return () => window.clearInterval(timer);
  }, [paused, featuredPackages.length, visibleCount]);

  useEffect(() => {
    if (
      currentIndex < featuredPackages.length ||
      featuredPackages.length === 0
    ) {
      return;
    }

    const resetTimer = window.setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(0);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }, 650);

    return () => window.clearTimeout(resetTimer);
  }, [currentIndex, featuredPackages.length]);

  function goNext() {
    if (featuredPackages.length <= visibleCount) return;

    setIsTransitioning(true);
    setCurrentIndex((current) => current + 1);
  }

  function goPrevious() {
    if (featuredPackages.length <= visibleCount) return;

    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(featuredPackages.length);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(featuredPackages.length - 1);
        });
      });

      return;
    }

    setCurrentIndex((current) => current - 1);
  }

  function handleTouchStart(
    event: React.TouchEvent<HTMLDivElement>
  ) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(
    event: React.TouchEvent<HTMLDivElement>
  ) {
    if (touchStartX.current === null) return;

    const endX =
      event.changedTouches[0]?.clientX ?? touchStartX.current;

    const difference = touchStartX.current - endX;

    if (Math.abs(difference) > 45) {
      if (difference > 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    touchStartX.current = null;
  }

  if (featuredPackages.length === 0) {
    return null;
  }

  const canSlide =
    featuredPackages.length > visibleCount;

  const translatePercentage =
    currentIndex * (100 / visibleCount);

  return (
    <section
      className="theme-section-soft border-y border-[var(--border)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="featured-packages-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--primary)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
              Handpicked Experiences
            </p>
          </div>

          <h2
            id="featured-packages-heading"
            className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-[1.08] text-[var(--text-primary)] sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            Journeys designed around
            <span className="hero-gradient-text block">
              your way of travel.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:mt-5 sm:text-base sm:leading-7">
            Thoughtful itineraries for relaxed escapes,
            cultural discoveries and memorable moments.
          </p>
        </div>

        <div
          className="relative mt-8 sm:mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : ""
              }`}
              style={{
                transform: `translateX(-${translatePercentage}%)`,
              }}
            >
              {slideItems.map((packageItem, index) => (
                <div
                  key={`${packageItem.id}-${index}`}
                  className="shrink-0 px-2"
                  style={{
                    width: `${100 / visibleCount}%`,
                  }}
                >
                  <PackageCard packageItem={packageItem} />
                </div>
              ))}
            </div>
          </div>

          {canSlide ? (
            <>
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous package"
                className="absolute left-1 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/95 text-[var(--text-primary)] shadow-lg backdrop-blur-md transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] sm:flex"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next package"
                className="absolute right-1 top-1/2 z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/95 text-[var(--text-primary)] shadow-lg backdrop-blur-md transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] sm:flex"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          ) : null}
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8">
          {canSlide ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {featuredPackages.map((packageItem, index) => {
                  const normalizedIndex =
                    currentIndex % featuredPackages.length;

                  return (
                    <button
                      key={packageItem.id}
                      type="button"
                      aria-label={`Go to package ${index + 1}`}
                      onClick={() => {
                        setIsTransitioning(true);
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        normalizedIndex === index
                          ? "w-6 bg-[var(--primary)]"
                          : "w-2 bg-[var(--border-strong)]"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setPaused((current) => !current)}
                aria-label={
                  paused
                    ? "Resume package slider"
                    : "Pause package slider"
                }
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
              >
                {paused ? (
                  <Play className="h-3.5 w-3.5" />
                ) : (
                  <Pause className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          ) : null}

          <Link
            href="/packages"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            View All Packages

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
