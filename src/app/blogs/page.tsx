import { PageSeo } from "@/components/seo/PageSeo";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogCard } from "@/components/blogs/BlogCard";
import { Footer } from "@/components/layout/Footer";
import { getAllBlogs } from "@/services/blogService";

export const metadata = pageMetadata("/blogs");

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <>

      <main>
        <PageSeo path="/blogs" type="CollectionPage" items={blogs.map(item => ({ name: item.title, path: `/blogs/${item.slug}` }))} />
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(237,108,12,0.12),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(201,11,18,0.07),transparent_28%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                ExploreYatri Stories
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                Travel inspiration,
                <span className="hero-gradient-text block">
                  guides & stories.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                Destination guides, planning tips and useful travel information
                designed to help you discover your next memorable journey.
              </p>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="theme-section-soft py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Latest Articles
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                  Explore our travel journal
                </h2>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                {blogs.length} {blogs.length === 1 ? "article" : "articles"}
              </p>
            </div>

            {blogs.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
                <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                  Travel stories are coming soon.
                </h2>

                <p className="mt-3 text-[var(--text-secondary)]">
                  New guides and destination inspiration will appear here.
                </p>

                <Link
                  href="/"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]"
                >
                  Back to Home
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}