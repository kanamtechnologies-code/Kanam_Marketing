import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Dark-green CTA band — warm, impactful accent on light subpages. */
export function BrandCtaBand({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-[rgb(var(--accent-rgb)/0.42)] bg-[#0f3d30] px-6 py-10 text-white shadow-[0_28px_64px_-24px_rgba(11,47,36,0.5)] sm:px-10 sm:py-12",
        className
      )}
    >
      {/* Forest base — warm mid-green into deep dusk */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#1a6b52_0%,#145c45_42%,#0f3d30_72%,#0b2f24_100%)]"
      />
      {/* Soft gold bloom (warmth without glow neon) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgb(var(--accent-rgb)/0.28)_0%,transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgb(24_161_109/0.22)_0%,transparent_70%)]"
      />
      {/* Quiet texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.055] kanam-hex-pattern"
      />
      {/* Refined gold edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent-rgb)/0.75)] to-transparent sm:inset-x-12"
      />
      <div className="relative">{children}</div>
    </section>
  );
}

export const brandCtaEyebrowClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]";

export const brandCtaTitleClass =
  "mt-3 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl";

export const brandCtaBodyClass =
  "mt-4 max-w-xl text-base leading-relaxed text-[#e8e0cf]/90 sm:text-lg";

export const brandCtaSecondaryBtnClass =
  "rounded-full border-[rgb(var(--accent-rgb)/0.45)] bg-white/10 text-[#f7f3e8] hover:border-[rgb(var(--accent-rgb)/0.7)] hover:bg-white/16 hover:text-white";

export const brandCtaPrimaryBtnClass =
  "rounded-full bg-[var(--accent)] text-[#14201c] shadow-[0_10px_28px_-12px_rgba(216,192,122,0.65)] hover:bg-[rgb(var(--accent-rgb)/0.92)]";
