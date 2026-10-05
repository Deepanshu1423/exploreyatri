"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  MessageCircle,
  Play,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import type { GalleryItem } from "@/app/gallery/page";
import { siteConfig } from "@/config/site";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem =
    activeIndex !== null ? items[activeIndex] : null;

  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return null;
          return (current + 1) % items.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return null;
          return (current - 1 + items.length) % items.length;
        });
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, items.length]);

  function showPrevious() {
    if (activeIndex === null || items.length === 0) return;

    setActiveIndex(
      (activeIndex - 1 + items.length) % items.length
    );
  }

  function showNext() {
    if (activeIndex === null || items.length === 0) return;

    setActiveIndex((activeIndex + 1) % items.length);
  }

  return (
    <>
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <>
              <div className="mb-7 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                <div>
                  <div className="inline-flex items-center gap-2 text-[var(--primary)]">
                    <Camera className="h-4 w-4" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs">
                      Client Travel Moments
                    </p>
                  </div>

                  <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                    Memories from the road
                  </h2>
                </div>

                <p className="text-sm text-[var(--text-secondary)]">
                  {items.length} memories
                </p>
              </div>

              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                {items.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] text-left shadow-[0_16px_45px_rgba(82,43,20,0.06)]"
                    aria-label={`Open gallery item ${index + 1}`}
                  >
                    {item.type === "image" ? (
                      <div
                        className={`relative ${
                          index % 5 === 0
                            ? "aspect-[4/5]"
                            : index % 3 === 0
                              ? "aspect-square"
                              : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[4/5] overflow-hidden bg-black">
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md">
                            <Play className="ml-1 h-6 w-6" />
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-semibold text-white">
                        ExploreYatri Memory
                      </p>

                      <p className="mt-1 text-xs text-white/75">
                        Tap to view
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-2xl rounded-[28px] border border-dashed border-[var(--border-strong)] bg-[var(--surface)] p-8 text-center sm:p-12">
              <Camera className="mx-auto h-9 w-9 text-[var(--primary)]" />

              <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
                Gallery photos coming soon
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                Add photos inside
                <span className="mx-1 font-semibold text-[var(--text-primary)]">
                  public/images/explorephotos
                </span>
                and they will automatically appear here.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,var(--primary),var(--accent))] px-5 py-8 text-center text-white shadow-[0_22px_60px_var(--primary-shadow)] sm:px-8 sm:py-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/70 sm:text-xs">
                Your Story Could Be Next
              </p>

              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Ready to create memories of your own?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Tell us where you want to go and we&apos;ll help you start
                planning the journey.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--primary)]"
                >
                  Plan My Trip
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello ExploreYatri, I would like to plan a trip."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md sm:right-6 sm:top-6"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md sm:left-6 sm:h-12 sm:w-12"
                aria-label="Previous image"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md sm:right-6 sm:h-12 sm:w-12"
                aria-label="Next image"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <div
            className="relative flex max-h-[90vh] max-w-[92vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {activeItem.type === "image" ? (
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                width={1600}
                height={1200}
                className="max-h-[88vh] w-auto max-w-[90vw] rounded-2xl object-contain"
              />
            ) : (
              <video
                src={activeItem.src}
                controls
                autoPlay
                playsInline
                className="max-h-[88vh] max-w-[90vw] rounded-2xl"
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
