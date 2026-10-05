import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { Hero } from "@/components/home/Hero";
import { LatestBlogs } from "@/components/home/LatestBlogs";
import { PackageCategories } from "@/components/home/PackageCategories";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { TravelCTA } from "@/components/home/TravelCTA";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

import { Footer } from "@/components/layout/Footer";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <IntroLoader />

      <Navbar />

      <main className="overflow-hidden bg-[var(--background)]">
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
