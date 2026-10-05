"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import type { GalleryItem } from "@/types/gallery";

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
        setActiveIndex((current) =>
          current === null
            ? null
            : (current + 1) % items.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + items.length) % items.length
        );
      }
    }

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, items.length]);

  function previous() {
    if (activeIndex === null || items.length === 0) return;

    setActiveIndex(
      (activeIndex - 1 + items.length) % items.length
    );
  }

  function next() {
    if (activeIndex === null || items.length === 0) return;

    setActiveIndex((activeIndex + 1) % items.length);
  }

  return (
    <>
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <>
              <div className="mb-7 flex flex-col items-center gap-3 text-center sm:mb-9 sm:flex-row sm:justify-between sm:text-left">
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

                <div className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] shadow-sm">
                  {items.length} memories
                </div>
              </div>

              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                {items.map((item, index) => {
                  const shape =
                    index % 7 === 0
                      ? "aspect-[4/5]"
                      : index % 5 === 0
                        ? "aspect-[3/4]"
                        : index % 3 === 0
                          ? "aspect-square"
                          : "aspect-[4/3]";

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] text-left shadow-[0_16px_45px_rgba(82,43,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(82,43,20,0.10)]"
                      aria-label={`Open gallery memory ${index + 1}`}
                    >
                      <div className={`relative overflow-hidden ${shape}`}>
                        {item.type === "image" ? (
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            priority={index < 4}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        ) : (
                          <>
                            <video
                              src={item.src}
                              muted
                              playsInline
                              preload="metadata"
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white shadow-lg backdrop-blur-md">
                                <Play className="ml-1 h-6 w-6 fill-current" />
                              </span>
                            </div>
                          </>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                        <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[10px] font-bold text-white/90 backdrop-blur-md">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {item.type === "video" ? (
                          <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                            Video
                          </div>
                        ) : null}

                        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <p className="text-sm font-semibold text-white">
                            ExploreYatri Memory
                          </p>

                          <p className="mt-1 text-xs text-white/75">
                            Tap to view full screen
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-2xl rounded-[28px] border border-dashed border-[var(--border-strong)] bg-[var(--surface)] p-8 text-center sm:p-12">
              <Camera className="mx-auto h-9 w-9 text-[var(--primary)]" />

              <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
                Gallery photos coming soon
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                Add photos or videos inside{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  public/images/explorephotos
                </span>{" "}
                and they will automatically appear here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,var(--primary),var(--accent))] px-5 py-8 text-center text-white shadow-[0_22px_60px_var(--primary-shadow)] sm:px-8 sm:py-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 sm:text-xs">
                  Your Story Could Be Next
                </p>
              </div>

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
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--primary)] transition-transform hover:-translate-y-0.5"
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
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeItem && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={() => setActiveIndex(null)}
        >
          {/* TOP BAR */}
          <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
            <div className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-md">
              {activeIndex + 1} / {items.length}
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-white/10"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* DESKTOP ARROWS */}
          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previous();
                }}
                className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all hover:bg-white/10 sm:flex sm:left-6"
                aria-label="Previous memory"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all hover:bg-white/10 sm:flex sm:right-6"
                aria-label="Next memory"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          ) : null}

          {/* MEDIA */}
          <div
            className="relative flex max-h-[84vh] max-w-[94vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {activeItem.type === "image" ? (
              <Image
                key={activeItem.src}
                src={activeItem.src}
                alt={activeItem.alt}
                width={1800}
                height={1400}
                priority
                className="max-h-[82vh] w-auto max-w-[92vw] rounded-2xl object-contain shadow-2xl"
              />
            ) : (
              <video
                key={activeItem.src}
                src={activeItem.src}
                controls
                autoPlay
                playsInline
                className="max-h-[82vh] max-w-[92vw] rounded-2xl shadow-2xl"
              />
            )}
          </div>

          {/* MOBILE CONTROLS */}
          {items.length > 1 ? (
            <div
              className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={previous}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md"
                aria-label="Previous memory"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <span className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                {activeIndex + 1} / {items.length}
              </span>

              <button
                type="button"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md"
                aria-label="Next memory"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
