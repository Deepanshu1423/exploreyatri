import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/data/destinations";

export function PopularDestinations() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Places Worth Exploring"
          title="Find your next beautiful chapter"
          description="A curated collection of memorable escapes for every kind of traveller."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,17,31,0.62)] via-[rgba(7,17,31,0.08)] to-transparent" />
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{destination.name}</h3>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">{destination.location}</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--primary)] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="text-sm leading-7 text-[var(--text-secondary)]">{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
