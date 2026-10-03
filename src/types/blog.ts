export type BlogStatus = "draft" | "published";

export interface BlogSeo {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Blog {
  id: string;

  title: string;
  slug: string;

  excerpt: string;
  content: string;

  featuredImage: string;
  featuredImageAlt: string;

  category: string;
  tags: string[];

  author: string;

  featured: boolean;
  status: BlogStatus;

  publishedAt?: string;

  createdAt: string;
  updatedAt: string;

  seo?: BlogSeo;
}