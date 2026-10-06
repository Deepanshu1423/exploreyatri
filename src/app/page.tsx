import { ReferenceHome } from "@/components/home/ReferenceHome";
import { Footer } from "@/components/layout/Footer";
import "./home.css";
import { pageMetadata } from "@/lib/seo";
import { PageSeo } from "@/components/seo/PageSeo";

export const metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <PageSeo path="/" />
      <ReferenceHome />
      <Footer />
    </>
  );
}
