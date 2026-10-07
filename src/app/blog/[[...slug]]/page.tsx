import { permanentRedirect } from "next/navigation";

type BlogRedirectPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function BlogRedirectPage({
  params,
}: BlogRedirectPageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    permanentRedirect("/blogs");
  }

  permanentRedirect(`/blogs/${slug.join("/")}`);
}
