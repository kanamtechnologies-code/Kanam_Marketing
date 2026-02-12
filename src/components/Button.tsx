import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--brand)] text-white hover:bg-[var(--brand-2)] focus-visible:ring-[var(--brand-2)] ring-offset-[var(--background)] shadow-sm",
  secondary:
    "bg-white text-zinc-900 ring-1 ring-[rgb(var(--accent-rgb)/0.55)] hover:bg-zinc-50 focus-visible:ring-[var(--accent)] ring-offset-[var(--background)]",
  ghost:
    "text-zinc-900 hover:bg-zinc-100 focus-visible:ring-[var(--brand-2)] ring-offset-[var(--background)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  newTab,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  newTab?: boolean;
}) {
  const isExternal = href.startsWith("http");
  const target = newTab || isExternal ? "_blank" : undefined;
  const rel = target ? "noopener noreferrer" : undefined;

  if (isExternal) {
    return (
      <a
        className={`${base} ${styles[variant]}`}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${styles[variant]}`} href={href}>
      {children}
    </Link>
  );
}

