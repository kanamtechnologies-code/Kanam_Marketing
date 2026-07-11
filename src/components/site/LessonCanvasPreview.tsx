import Link from "next/link";
import { Play } from "lucide-react";

import { AssetPlaceholder } from "@/components/site/AssetPlaceholder";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LessonCanvasPreviewProps = {
  className?: string;
  /** When you have a real screenshot, set this path */
  screenshotSrc?: string | null;
  showCta?: boolean;
  compact?: boolean;
};

/**
 * Product-first visual: either a real app screenshot, or a faithful CSS mock
 * of the Kanam lesson canvas (coach note + Python workspace + Run & check).
 */
export function LessonCanvasPreview({
  className,
  screenshotSrc = null,
  showCta = false,
  compact = false,
}: LessonCanvasPreviewProps) {
  if (screenshotSrc) {
    return (
      <div className={cn("space-y-4", className)}>
        <AssetPlaceholder
          slot="lesson-canvas-hero.png"
          guidance="Full lesson canvas: coach note left, Python workspace + Run & check right"
          src={screenshotSrc}
          alt="Kanam Academy lesson canvas — coach note and Python workspace"
          aspect="wide"
        />
        {showCta ? (
          <Button asChild className="w-full sm:w-auto">
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              <Play className="h-4 w-4" />
              Try this lesson
            </Link>
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.4)] bg-white shadow-[0_22px_50px_rgba(15,23,42,0.16)] ring-1 ring-[rgb(var(--brand-2-rgb)/0.12)]",
          compact ? "text-[11px]" : "text-xs sm:text-sm"
        )}
      >
        {/* App chrome bar */}
        <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-rgb)/0.95)] to-[rgb(var(--brand-2-rgb)/0.9)] px-3 py-2.5 text-white sm:px-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75">
              Python + AI Hub
            </p>
            <p className={cn("truncate font-bold tracking-tight", compact ? "text-sm" : "text-sm sm:text-base")}>
              Quickstart: Meet Your AI Helper
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold ring-1 ring-white/25">
              50 XP
            </span>
            <span className="hidden rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[rgb(var(--brand-2-rgb)/1)] sm:inline">
              Demo
            </span>
          </div>
        </div>

        <div className="border-b border-zinc-200 bg-zinc-50/80 px-3 py-2 sm:px-4">
          <div className="flex items-center justify-between gap-3 text-[10px] font-medium text-zinc-600 sm:text-[11px]">
            <span>Exercises complete: 0 / 2</span>
            <span className="tabular-nums">0%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-zinc-200">
            <div className="h-full w-[8%] rounded-full bg-[rgb(var(--brand-rgb)/1)]" />
          </div>
        </div>

        <div className={cn("grid gap-0", compact ? "lg:grid-cols-1" : "lg:grid-cols-2")}>
          {/* Coach column */}
          <div className="space-y-3 border-b border-zinc-200 p-3 sm:p-4 lg:border-b-0 lg:border-r">
            <div className="rounded-xl border border-zinc-200 bg-[rgb(var(--brand-2-rgb)/0.06)] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--brand-2-rgb)/1)]">
                Coach&apos;s note
              </p>
              <p className="mt-2 font-semibold text-zinc-900">Welcome to Kanam Academy.</p>
              <p className="mt-1.5 leading-relaxed text-zinc-600">
                Today you&apos;ll teach a computer to introduce itself — the same first step
                learners take in Kanam.
              </p>
              <p className="mt-2 leading-relaxed text-zinc-600">
                <span className="font-semibold text-zinc-800">Big idea:</span> Computers (and AI)
                do not guess. They follow your instructions exactly.
              </p>
            </div>

            {!compact ? (
              <div className="rounded-xl border border-zinc-200 bg-white p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  Python command guide
                </p>
                <ul className="mt-2 space-y-1.5 font-mono text-[11px] text-zinc-700 sm:text-xs">
                  <li>
                    <span className="text-[rgb(var(--brand-2-rgb)/1)]">name = &quot;...&quot;</span>
                    <span className="ml-2 font-sans text-zinc-500">stores text</span>
                  </li>
                  <li>
                    <span className="text-[rgb(var(--brand-2-rgb)/1)]">print(...)</span>
                    <span className="ml-2 font-sans text-zinc-500">shows output</span>
                  </li>
                  <li>
                    <span className="text-[rgb(var(--brand-2-rgb)/1)]">+</span>
                    <span className="ml-2 font-sans text-zinc-500">joins strings</span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>

          {/* Workspace column */}
          <div className="space-y-3 p-3 sm:p-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Python workspace
              </p>
              <p className="mt-1 font-semibold text-zinc-900">Exercise 1 — Store a name</p>
              <p className="mt-1 leading-relaxed text-zinc-600">
                Fill in the blank so <span className="font-mono text-zinc-800">name</span> holds
                your name.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-[#0f172a] font-mono text-[11px] leading-relaxed text-emerald-100 sm:text-xs">
              <div className="border-b border-white/10 px-3 py-1.5 text-[10px] text-white/50">
                exercise_1.py
              </div>
              <pre className="overflow-x-auto p-3 whitespace-pre-wrap">{`# Fill in the blank
name = "Alex"`}</pre>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-[rgb(var(--brand-rgb)/1)] px-3 py-1.5 text-[11px] font-bold text-white">
                <Play className="h-3 w-3" aria-hidden="true" />
                Run &amp; check
              </span>
              <span className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-zinc-600">
                Reset
              </span>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-950 px-3 py-2.5 font-mono text-[11px] text-emerald-300/90">
              <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Console output
              </p>
              <p className="mt-1">Ready — press Run &amp; check</p>
            </div>
          </div>
        </div>
      </div>

      {showCta ? (
        <Button asChild className="w-full sm:w-auto">
          <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
            <Play className="h-4 w-4" />
            Try this lesson — no account needed
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
