import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

import { BlogCard } from "@/components/blogs/BlogCard";
import { Container } from "@/components/ui/Container";
import { getLatestBlogs } from "@/services/blogService";

export function LatestBlogs() {
  const latestBlogs = getLatestBlogs(3);

  if (latestBlogs.length === 0) {
    return null;
  }

  return (
    <section
      className="bg-[var(--background)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="latest-blogs-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--primary)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
              Travel Stories & Guides
            </p>
          </div>

          <h2
            id="latest-blogs-heading"
            className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
          >
            Ideas for your
            <span className="hero-gradient-text block">
              next unforgettable journey.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Destination inspiration, practical travel tips and useful guides to
            help you Plan My Trip with more confidence.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:mt-10">
          <div className="inline-flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <BookOpen className="h-4 w-4 text-[var(--primary)]" />
            Fresh travel inspiration from ExploreYatri.
          </div>

          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Explore All Blogs

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
