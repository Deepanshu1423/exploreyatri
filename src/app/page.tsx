import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { Hero } from "@/components/home/Hero";
import { PackageCategories } from "@/components/home/PackageCategories";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { TravelCTA } from "@/components/home/TravelCTA";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Footer } from "@/components/layout/Footer";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { Navbar } from "@/components/layout/Navbar";
import { LatestBlogs } from "@/components/home/LatestBlogs";

export default function HomePage() {
  return (
    <>
      <IntroLoader />
      <Navbar />

      <main>
        <Hero />
        <PackageCategories />
        <FeaturedPackages />
        <PopularDestinations />
        <WhyChooseUs />
        <LatestBlogs />
        <TravelCTA />
      </main>

      <Footer />
    </>
  );
}