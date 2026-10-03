import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogCard } from "@/components/blogs/BlogCard";
import { getLatestBlogs } from "@/services/blogService";

export function LatestBlogs() {
  const blogs = getLatestBlogs(3);

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="theme-section-soft border-y border-[var(--border)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
              ExploreYatri Stories
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Travel inspiration,
              <span className="hero-gradient-text block">
                guides & stories.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              Helpful travel guides, destination ideas and practical tips to
              make every journey easier and more memorable.
            </p>
          </div>

          <Link
            href="/blogs"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            View All Blogs

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}