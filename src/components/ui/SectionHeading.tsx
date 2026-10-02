type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
