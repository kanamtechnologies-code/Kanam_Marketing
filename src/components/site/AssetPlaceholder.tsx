import type { ReactNode } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AssetPlaceholderProps = {
  /** Suggested filename under /public/images/product/ */
  slot: string;
  /** What to capture / photograph for this slot */
  guidance: string;
  /** Optional real image path once you drop the asset in */
  src?: string | null;
  alt?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
  children?: ReactNode;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[2/1]",
} as const;

/**
 * Drop real screenshots/photos into /public/images/product/ and pass `src`.
 * Until then, this shows a labeled placeholder so you know exactly what to shoot.
 */
export function AssetPlaceholder({
  slot,
  guidance,
  src,
  alt = "",
  aspect = "video",
  className,
  children,
}: AssetPlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.35)] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]",
          aspectClass[aspect],
          className
        )}
      >
        <Image
          src={src}
          alt={alt || guidance}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-[rgb(var(--brand-2-rgb)/0.45)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.08)] via-white to-[rgb(var(--accent-rgb)/0.18)] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.08)] sm:p-6",
        aspectClass[aspect],
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--brand-2-rgb)/0.12)] text-[rgb(var(--brand-2-rgb)/1)] ring-1 ring-[rgb(var(--brand-2-rgb)/0.2)]">
          <ImageIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--brand-2-rgb)/0.9)]">
            Asset needed
          </p>
          <p className="mt-1 font-mono text-xs text-zinc-600">{slot}</p>
        </div>
      </div>

      <div className="mt-auto space-y-2 pt-6">
        <p className="text-sm font-semibold leading-snug text-zinc-900 sm:text-base">
          {guidance}
        </p>
        {children}
        <p className="text-xs leading-relaxed text-zinc-500">
          Save to <span className="font-mono text-zinc-700">/public/images/product/</span> then
          pass the path as <span className="font-mono">src</span>.
        </p>
      </div>
    </div>
  );
}
