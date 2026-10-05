import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Play, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/Container";

type MemoryItem = {
  src: string;
  type: "image" | "video";
  alt: string;
};

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

function getMemoryItems(): MemoryItem[] {
  const galleryDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "explorephotos"
  );

  if (!fs.existsSync(galleryDirectory)) {
    return [];
  }

  return fs
    .readdirSync(galleryDirectory)
    .filter((fileName) => {
      const extension = path.extname(fileName).toLowerCase();

      return (
        IMAGE_EXTENSIONS.includes(extension) ||
        VIDEO_EXTENSIONS.includes(extension)
      );
    })
    .sort((a, b) => b.localeCompare(a))
    .slice(0, 6)
    .map((fileName, index) => {
      const extension = path.extname(fileName).toLowerCase();

      return {
        src: `/images/explorephotos/${fileName}`,
        type: VIDEO_EXTENSIONS.includes(extension) ? "video" : "image",
        alt: `ExploreYatri traveller memory ${index + 1}`,
      };
    });
}

export function TravellerMemories() {
  const memories = getMemoryItems();

  if (memories.length === 0) {
    return null;
  }

  return (
    <section
      className="theme-section-soft border-y border-[var(--border)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="traveller-memories-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--primary)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
              Traveller Memories
            </p>
          </div>

          <h2
            id="traveller-memories-heading"
            className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
          >
            Real journeys.
            <span className="hero-gradient-text block">
              Real memories.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            A glimpse into the experiences shared by travellers exploring with
            ExploreYatri.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-12">
          {memories.map((memory, index) => {
            const desktopClass =
              index === 0
                ? "lg:col-span-5 lg:row-span-2 lg:aspect-auto lg:min-h-[510px]"
                : index === 1
                  ? "lg:col-span-4 lg:min-h-[245px]"
                  : index === 2
                    ? "lg:col-span-3 lg:min-h-[245px]"
                    : index === 3
                      ? "lg:col-span-3 lg:min-h-[245px]"
                      : index === 4
                        ? "lg:col-span-4 lg:min-h-[245px]"
                        : "lg:col-span-7 lg:min-h-[245px]";

            return (
              <Link
                key={`${memory.src}-${index}`}
                href="/gallery"
                className={`group relative aspect-[4/5] overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_16px_40px_rgba(82,43,20,0.06)] sm:aspect-[4/3] ${desktopClass}`}
              >
                {memory.type === "image" ? (
                  <Image
                    src={memory.src}
                    alt={memory.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <>
                    <video
                      src={memory.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md">
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </span>
                    </div>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="text-xs font-semibold text-white sm:text-sm">
                    ExploreYatri Memory
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Camera className="h-4 w-4" />
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
