import { blogs } from "@/data/blogs";
import { Blog } from "@/types/blog";

export function getAllBlogs(): Blog[] {
  return blogs.filter(
    (blog) => blog.status === "published"
  );
}

export function getFeaturedBlogs(): Blog[] {
  return blogs.filter(
    (blog) =>
      blog.status === "published" &&
      blog.featured
  );
}

export function getLatestBlogs(
  limit = 3
): Blog[] {
  return blogs
    .filter((blog) => blog.status === "published")
    .sort((a, b) => {
      const first = new Date(
        b.publishedAt ?? b.createdAt
      ).getTime();

      const second = new Date(
        a.publishedAt ?? a.createdAt
      ).getTime();

      return first - second;
    })
    .slice(0, limit);
}

export function getBlogBySlug(
  slug: string
): Blog | undefined {
  return blogs.find(
    (blog) =>
      blog.slug === slug &&
      blog.status === "published"
  );
}