import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  {
    title: "Domestic Escapes",
    description: "Discover incredible journeys across India.",
    href: "/packages/domestic",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "International Journeys",
    description: "Experience unforgettable destinations around the world.",
    href: "/packages/international",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
  },
];

export function PackageCategories() {
  return (
    <section className="theme-section py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Explore Your Way"
          title="Choose the rhythm of your next escape"
          description="From soul-soothing domestic hideaways to global adventures with a premium touch."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-[280px] overflow-hidden rounded-[26px] sm:h-[340px] lg:h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,17,31,0.65)] via-[rgba(7,17,31,0.18)] to-[rgba(7,17,31,0.08)]" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] backdrop-blur-sm">
                    Curated travel
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">{category.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/80 sm:leading-7">{category.description}</p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-on-primary)]">
                    {category.title.includes("Domestic") ? "Explore Domestic" : "Explore International"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
