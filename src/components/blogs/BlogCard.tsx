import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import type { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  const date = new Date(
    blog.publishedAt ?? blog.createdAt
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_45px_rgba(82,43,20,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/30 hover:shadow-[0_28px_70px_rgba(124,55,12,0.14)]">
      
      <Link
        href={`/blogs/${blog.slug}`}
        className="relative block h-56 overflow-hidden sm:h-64"
      >
        <Image
          src={blog.featuredImage}
          alt={blog.featuredImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,108,12,0.08),transparent_50%,rgba(201,11,18,0.05))]" />

        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {blog.category}
        </span>

        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          <CalendarDays className="h-3.5 w-3.5 text-[var(--primary-light)]" />
          {date}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link href={`/blogs/${blog.slug}`}>
          <h3 className="text-xl font-semibold leading-snug text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-2xl">
            {blog.title}
          </h3>
        </Link>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--text-secondary)]">
          {blog.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-[10px] font-semibold text-[var(--primary)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="border-t border-[var(--border)] pt-5">
            <Link
              href={`/blogs/${blog.slug}`}
              className="group/button inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]"
            >
              Read Article

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}