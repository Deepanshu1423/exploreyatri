import { PageSeo } from "@/components/seo/PageSeo";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { PackageCard } from "@/components/packages/PackageCard";
import { Container } from "@/components/ui/Container";
import { getAllPackages } from "@/services/packageService";

export const metadata: Metadata = pageMetadata("/packages");

export default function PackagesPage() {
  const packages = getAllPackages();

  return (
    <>

      <main className="bg-[var(--background)]">
        <PageSeo path="/packages" type="CollectionPage" items={packages.map(item => ({ name: item.title, path: `/packages/${item.slug}` }))} />
        {/* =========================
            PAGE INTRO
        ========================= */}
        <section className="theme-section-soft border-b border-[var(--border)] py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs sm:tracking-[0.28em]">
                ExploreYatri Packages
              </p>

              <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-[1.08] text-[var(--text-primary)] sm:mt-4 sm:text-4xl lg:text-5xl">
                Handpicked journeys for{" "}
                <span className="hero-gradient-text">
                  memorable escapes.
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base sm:leading-7">
                Explore thoughtfully designed domestic and international
                holidays with comfortable stays, curated experiences and
                personal support.
              </p>
            </div>
          </Container>
        </section>

        {/* =========================
            PACKAGES
        ========================= */}
        <section className="bg-[var(--background)] py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="mb-7 flex flex-col gap-2 text-center sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)] sm:text-xs">
                  Explore Your Way
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                  Find your next journey
                </h2>
              </div>

              <p className="text-xs text-[var(--text-secondary)] sm:text-sm">
                {packages.length}{" "}
                {packages.length === 1 ? "package" : "packages"}
              </p>
            </div>

            {packages.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                {packages.map((packageItem) => (
                  <PackageCard
                    key={packageItem.id}
                    packageItem={packageItem}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] px-5 py-10 text-center sm:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  ExploreYatri
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                  New journeys are coming soon.
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
                  We are preparing more handpicked travel experiences for you.
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}