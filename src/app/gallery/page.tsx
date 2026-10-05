import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Gallery | ExploreYatri",
  description:
    "Real travel memories and client experiences shared with ExploreYatri.",
};

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

export type GalleryItem = {
  id: string;
  src: string;
  type: "image" | "video";
  alt: string;
};

function getGalleryItems(): GalleryItem[] {
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
    .map((fileName, index) => {
      const extension = path.extname(fileName).toLowerCase();
      const isVideo = VIDEO_EXTENSIONS.includes(extension);

      return {
        id: `gallery-${index + 1}`,
        src: `/images/explorephotos/${fileName}`,
        type: isVideo ? "video" : "image",
        alt: `ExploreYatri client travel memory ${index + 1}`,
      };
    });
}

export default function GalleryPage() {
  const galleryItems = getGalleryItems();

  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)]">
        <section className="theme-section-soft border-b border-[var(--border)] py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
                ExploreYatri Memories
              </p>

              <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-semibold leading-[1.04] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                Journeys become
                <span className="hero-gradient-text block">
                  stories worth sharing.
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                A collection of real travel moments, happy memories and
                unforgettable experiences shared by our travellers.
              </p>
            </div>
          </div>
        </section>

        <GalleryGrid items={galleryItems} />
      </main>

      <Footer />
    </>
  );
}
