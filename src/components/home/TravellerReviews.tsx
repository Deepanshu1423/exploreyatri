"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { Container } from "@/components/ui/Container";

type Review = {
  id: string;
  name: string;
  destination: string;
  rating: number;
  review: string;
  sample: boolean;
};

const reviews: Review[] = [
  {
    id: "review-001",
    name: "Rahul S.",
    destination: "Kashmir",
    rating: 5,
    review:
      "The itinerary was well planned and the overall travel experience was smooth and enjoyable.",
    sample: true,
  },
  {
    id: "review-002",
    name: "Priya G.",
    destination: "Manali",
    rating: 5,
    review:
      "A comfortable trip with good planning and helpful support throughout the journey.",
    sample: true,
  },
  {
    id: "review-003",
    name: "Aman K.",
    destination: "Jaisalmer",
    rating: 4,
    review:
      "The desert experience and sightseeing plan were nicely organized and easy to follow.",
    sample: true,
  },
  {
    id: "review-004",
    name: "Neha M.",
    destination: "Kedarnath",
    rating: 5,
    review:
      "The journey was planned in a simple way and the support made the trip easier to manage.",
    sample: true,
  },
];

const AUTO_SLIDE_DELAY = 4200;

export function TravellerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentReview = useMemo(
    () => reviews[currentIndex],
    [currentIndex]
  );

  useEffect(() => {
    if (paused || reviews.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % reviews.length);
    }, AUTO_SLIDE_DELAY);

    return () => window.clearInterval(timer);
  }, [paused]);

  function previous() {
    setCurrentIndex(
      (currentIndex - 1 + reviews.length) % reviews.length
    );
  }

  function next() {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  }

  return (
    <section
      className="bg-[var(--background)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="traveller-reviews-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
            Traveller Experiences
          </p>

          <h2
            id="traveller-reviews-heading"
            className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
          >
            What travellers
            <span className="hero-gradient-text block">
              say about the journey.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Sample feedback is shown here for layout preview. Replace these
            entries with real traveller reviews before production.
          </p>
        </div>

        <div
          className="mx-auto mt-8 max-w-4xl sm:mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <article className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_22px_60px_rgba(82,43,20,0.08)] sm:p-8 lg:p-10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--primary)]/10 blur-3xl" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  Sample Review
                </span>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < currentReview.rating
                          ? "fill-[var(--primary)] text-[var(--primary)]"
                          : "text-[var(--border-strong)]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <Quote className="h-8 w-8 shrink-0 text-[var(--primary)]/35 sm:h-10 sm:w-10" />
            </div>

            <blockquote className="relative mt-6 text-lg font-semibold leading-8 text-[var(--text-primary)] sm:text-xl sm:leading-9">
              “{currentReview.review}”
            </blockquote>

            <div className="relative mt-7 flex flex-col gap-3 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-[var(--text-primary)]">
                  {currentReview.name}
                </p>

                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  {currentReview.destination}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-primary)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-primary)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>

          <div className="mt-5 flex justify-center gap-1.5">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                aria-label={`Show review ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-[var(--primary)]"
                    : "w-2 bg-[var(--border-strong)]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
