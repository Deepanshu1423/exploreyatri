import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function TravelCTA() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    "Hello ExploreYatri, I would like to plan a trip."
  );

  return (
    <section className="bg-[var(--background)] py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[30px] border border-[var(--border)] shadow-[0_28px_80px_rgba(82,43,20,0.10)]">
          <Image
            src="/images/herobackground_image.jpg"
            alt="ExploreYatri travel planning"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(24,13,8,0.88)_0%,rgba(34,18,10,0.78)_46%,rgba(54,22,10,0.48)_100%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,108,12,0.26),transparent_48%,rgba(201,11,18,0.18))]" />

          <div className="relative grid min-h-[420px] items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_auto] lg:px-12 lg:py-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-white" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80 sm:text-xs">
                  Start Your Journey
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
                Your next trip can start
                <span className="block text-[#ff9a3d]">
                  with one simple conversation.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Tell us your destination, preferred dates, group size and
                budget. ExploreYatri will help turn those details into a
                journey designed around you.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--primary)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Plan My Trip

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <p className="mt-5 text-xs leading-5 text-white/60">
                No fixed plan yet? Destination or budget alone is enough to
                begin.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="w-[250px] rounded-[28px] border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                  ExploreYatri
                </p>

                <p className="mt-3 text-2xl font-semibold leading-tight">
                  Travel your way.
                </p>

                <div className="mt-5 space-y-3 text-sm text-white/75">
                  <p>• Flexible planning</p>
                  <p>• Personalized support</p>
                  <p>• Domestic & international trips</p>
                  <p>• Direct WhatsApp assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
