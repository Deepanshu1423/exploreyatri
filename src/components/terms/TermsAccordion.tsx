"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type TermsAccordionProps = {
  sections: { id: string; title: string; number: number; content: ReactNode }[];
};

export function TermsAccordion({ sections }: TermsAccordionProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (sections.some((section) => section.id === id)) setOpenSection(id);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [sections]);

  return (
    <div className="space-y-3 sm:space-y-6">
      {sections.map((section) => {
        const isOpen = openSection === section.id;
        const heading = (
          <>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-sm font-bold text-[var(--primary)] sm:h-10 sm:w-10">{String(section.number).padStart(2, "0")}</span>
            <span className="flex-1 text-left text-base font-semibold leading-6 sm:text-xl sm:leading-7">{section.title}</span>
          </>
        );
        return (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-36 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm sm:rounded-3xl">
            <h2 id={`${section.id}-title`}>
              <button type="button" aria-expanded={isOpen} aria-controls={`${section.id}-content`} onClick={() => setOpenSection(isOpen ? null : section.id)} className="flex w-full items-center gap-3 p-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--primary)] sm:hidden">
                {heading}
                <ChevronDown size={20} aria-hidden="true" className={`shrink-0 text-[var(--primary)] transition-transform motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <span className="hidden items-start gap-4 px-8 pt-8 sm:flex">{heading}</span>
            </h2>
            <div id={`${section.id}-content`} className={`${isOpen ? "block" : "hidden"} px-4 pb-5 pt-1 sm:block sm:px-8 sm:pb-8 sm:pt-5`}>
              {section.content}
            </div>
          </section>
        );
      })}
    </div>
  );
}
