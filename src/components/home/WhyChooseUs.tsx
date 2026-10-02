import { Compass, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Curated Experiences",
    description: "Every itinerary is thoughtfully chosen to match your style, pace, and priorities.",
    icon: Sparkles,
  },
  {
    title: "Personalised Planning",
    description: "We shape each journey around your interests, budget, and the moments you want to remember.",
    icon: Compass,
  },
  {
    title: "Transparent Guidance",
    description: "Travel decisions feel clearer with honest suggestions, flexible recommendations, and simplicity.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support",
    description: "A friendly team is there to guide you before, during, and after your trip planning journey.",
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section className="theme-section-soft py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Travel Made Simple"
          title="A better way to plan your next getaway"
          description="Thoughtful guidance and personalised support, without the overwhelm."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_16px_30px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
