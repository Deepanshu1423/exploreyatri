import { packages } from "@/data/packages";
import { PackageCard } from "@/components/packages/PackageCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedPackages() {
  return (
    <section className="theme-section-soft py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Handpicked Experiences"
          title="Journeys designed around your way of travel"
          description="Thoughtful itineraries for relaxed escapes, cultural discoveries, and memorable moments."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((packageItem) => (
            <PackageCard key={packageItem.id} packageItem={packageItem} />
          ))}
        </div>
      </Container>
    </section>
  );
}
