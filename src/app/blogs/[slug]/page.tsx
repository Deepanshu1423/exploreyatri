import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Tag,
  UserRound,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  getAllBlogs,
  getBlogBySlug,
} from "@/services/blogService";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | ExploreYatri",
    };
  }

  return {
    title:
      blog.seo?.title ??
      `${blog.title} | ExploreYatri`,

    description:
      blog.seo?.description ??
      blog.excerpt,

    keywords:
      blog.seo?.keywords ??
      blog.tags,
  };
}

export default async function BlogDetailPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const publishedDate = new Date(
    blog.publishedAt ?? blog.createdAt
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      <main>
        {/* ARTICLE HEADER */}
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(237,108,12,0.12),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(201,11,18,0.08),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Link>

            <div className="mt-8">
              <span className="inline-flex rounded-full bg-[var(--primary-soft)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                {blog.category}
              </span>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                {blog.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                {blog.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--text-secondary)]">
                <span className="inline-flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-[var(--primary)]" />
                  {blog.author}
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[var(--primary)]" />
                  {publishedDate}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED IMAGE */}
        <section className="bg-[var(--background)]">
          <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[28px] border border-[var(--border)] shadow-[0_28px_70px_rgba(82,43,20,0.12)] sm:rounded-[36px]">
              <Image
                src={blog.featuredImage}
                alt={blog.featuredImageAlt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1150px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <section className="bg-[var(--background)] py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
            <article className="max-w-3xl">
              <div className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg sm:leading-9">
                {blog.content
                  .split("\n")
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </article>

            {/* SIDEBAR */}
            <aside>
              <div className="sticky top-28 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_40px_rgba(82,43,20,0.05)]">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-[var(--primary)]" />

                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Topics
                  </h2>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--primary-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--primary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 border-t border-[var(--border)] pt-6">
                  <p className="text-sm leading-6 text-[var(--text-secondary)]">
                    Ready to turn inspiration into your next journey?
                  </p>

                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--primary-hover)]"
                  >
                    Plan My Trip
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}