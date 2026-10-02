import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--text-on-primary)] shadow-[0_16px_35px_rgba(15,118,110,0.18)] transition-all duration-300 hover:bg-[var(--primary-hover)] hover:shadow-[0_18px_36px_rgba(15,118,110,0.23)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--surface-soft)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link href={href} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
