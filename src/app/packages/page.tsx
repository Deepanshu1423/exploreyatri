import { PackageCard } from "@/components/packages/PackageCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getAllPackages } from "@/services/packageService";

export const metadata = {
  title: "Holiday Packages | ExploreYatri",
  description:
    "Explore domestic and international holiday packages with ExploreYatri.",
};

export default function PackagesPage() {
  const packages = getAllPackages();

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(237,108,12,0.12),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(201,11,18,0.08),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                ExploreYatri Packages
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                Handpicked journeys for
                <span className="hero-gradient-text block">
                  memorable escapes.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                Explore thoughtfully designed domestic and international
                holidays with comfortable stays, curated experiences and
                personal support.
              </p>
            </div>
          </div>
        </section>

        {/* PACKAGE GRID */}
        <section className="theme-section-soft py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Our Packages
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                  Find your next journey
                </h2>
              </div>

              <p className="hidden text-sm text-[var(--text-secondary)] sm:block">
                {packages.length}{" "}
                {packages.length === 1 ? "package" : "packages"}
              </p>
            </div>

            {packages.length > 0 ? (
              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {packages.map((packageItem) => (
                  <PackageCard
                    key={packageItem.id}
                    packageItem={packageItem}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
                <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                  Packages coming soon.
                </h2>

                <p className="mt-3 text-[var(--text-secondary)]">
                  New travel experiences will appear here.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}