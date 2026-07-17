import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BandTone = "base" | "mid" | "proof" | "light";

const toneClass: Record<BandTone, string> = {
  base: "border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#0e241c] text-[#f3efe4]",
  mid: "border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#122c24] text-[#f3efe4]",
  proof:
    "border-t border-[rgb(var(--accent-rgb)/0.35)] bg-gradient-to-b from-[#145c45] to-[rgb(var(--brand-2-rgb)/1)] text-[#f3efe4]",
  light: "border-t border-[rgb(var(--accent-rgb)/0.2)] bg-[#f3efe4] text-[#14201c]",
};

/** Full-bleed section band matching the home / how-it-works storefront. */
export function PageBand({
  tone = "base",
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledBy,
}: {
  tone?: BandTone;
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("scroll-mt-24 py-14 md:py-20", toneClass[tone], className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Break out of SubpageShell horizontal padding for home-style full bands. */
export function FullBleed({ children }: { children: ReactNode }) {
  return (
    <div className="-mx-4 max-[360px]:-mx-3 sm:-mx-6 lg:-mx-10 2xl:-mx-12">
      {children}
    </div>
  );
}

export const duskEyebrowClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]";

export const duskTitleClass =
  "font-display font-semibold tracking-tight text-[#f7f3e8]";

export const duskMutedClass = "leading-relaxed text-[#c5d2cb]";

export const lightEyebrowClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-2)]";

export const lightTitleClass =
  "font-display font-semibold tracking-tight text-zinc-950";

export const lightMutedClass = "leading-relaxed text-[var(--muted)]";

export const duskPanelClass =
  "rounded-2xl border border-[rgb(var(--accent-rgb)/0.16)] bg-[#0e241c]/80";

export const duskInsetClass =
  "rounded-2xl border border-[rgb(var(--accent-rgb)/0.18)] bg-[#16352b]";

export const duskGhostBtnClass =
  "rounded-full border-[rgb(var(--accent-rgb)/0.4)] bg-transparent text-[var(--accent)] hover:bg-[rgb(var(--accent-rgb)/0.1)]";

/** Home-style hero image veil — strong left, open right. */
export function HomeHeroVeil() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(11,47,36,0.95)_0%,rgba(11,47,36,0.88)_38%,rgba(20,92,69,0.45)_62%,rgba(7,26,20,0.18)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(7,26,20,0.35)_0%,transparent_28%,transparent_55%,rgba(7,26,20,0.45)_100%)]" />
    </>
  );
}
