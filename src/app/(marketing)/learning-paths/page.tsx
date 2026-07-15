import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import {
  DEVICE_READY_SHORT,
  LEARNING_PATHS,
  LESSONS_COUNT_LABEL,
  PACING_BLURB,
  PATHS_COUNT_LABEL,
  PATHS_LIST_SHORT,
  PROOF_POINTS,
  type LearningPath,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Learning paths | Kanam Academy",
  description: `${PATHS_COUNT_LABEL} learning paths: ${PATHS_LIST_SHORT} — ${LESSONS_COUNT_LABEL} interactive lessons. Flexible schedule. Chromebook and mobile ready. Live instruction or structured async.`,
};

const FEATURED_SLUG = "ai-literacy";

function PathTile({
  path,
  className,
  size = "standard",
}: {
  path: LearningPath;
  className?: string;
  size?: "featured" | "standard" | "compact";
}) {
  const isFeatured = size === "featured";
  const isCompact = size === "compact";
  const skillsLabel = path.skills.join(", ");

  return (
    <Link
      href={`/learning-paths/${path.slug}`}
      className={cn(
        "group relative flex min-h-0 flex-col overflow-hidden rounded-[1.35rem] border border-zinc-900/10 bg-zinc-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(15,23,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={path.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes={
            isFeatured
              ? "(min-width: 1024px) 55vw, 100vw"
              : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          }
          priority={isFeatured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/45 to-zinc-950/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.25)] via-transparent to-[rgb(var(--accent-rgb)/0.12)] opacity-80" />
      </div>

      <div
        className={cn(
          "relative z-10 mt-auto flex flex-1 flex-col justify-end",
          isFeatured ? "p-7 sm:p-9 lg:p-10" : isCompact ? "p-5 sm:p-6" : "p-6 sm:p-7"
        )}
      >
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
          {path.lessons} lessons
          {path.prerequisite ? (
            <span className="text-white/45"> · builds on Python</span>
          ) : null}
        </p>

        <h2
          className={cn(
            "mt-3 font-display font-semibold tracking-tight text-white",
            isFeatured
              ? "text-3xl sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
              : isCompact
                ? "text-xl sm:text-2xl"
                : "text-2xl sm:text-[1.65rem]"
          )}
        >
          {path.name}
        </h2>

        <p
          className={cn(
            "mt-2 font-medium text-[rgb(var(--accent-rgb)/1)]",
            isFeatured ? "max-w-md text-base sm:text-lg" : "text-sm sm:text-[0.95rem]"
          )}
        >
          {path.subtitle}
        </p>

        {!isCompact ? (
          <p
            className={cn(
              "mt-3 text-white/75",
              isFeatured ? "max-w-lg text-base leading-relaxed" : "line-clamp-2 text-sm leading-relaxed"
            )}
          >
            {path.marketingAngle}
          </p>
        ) : null}

        <div
          className={cn(
            "mt-5 flex items-end justify-between gap-4 border-t border-white/15 pt-4",
            isCompact && "mt-4 pt-3"
          )}
        >
          <p className={cn("text-white/85", isCompact ? "text-xs leading-snug" : "text-sm leading-snug")}>
            <span className="font-semibold text-white">Skills:</span> {skillsLabel}
          </p>
          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-white">
            Explore
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function LearningPathsPage() {
  const featured =
    LEARNING_PATHS.find((p) => p.slug === FEATURED_SLUG) ?? LEARNING_PATHS[0];
  const secondary = LEARNING_PATHS.filter((p) => p.slug !== featured.slug);
  const [second, ...rest] = secondary;

  return (
    <SubpageShell
      eyebrow="Learning paths"
      title="Six learning paths. One platform."
      subtitle={`${LESSONS_COUNT_LABEL} interactive lessons across coding, AI, data, cybersecurity, financial literacy, and digital skills. ${PACING_BLURB}`}
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">Talk to us about getting started</Link>
          </Button>
        </>
      }
    >
      <div className="space-y-14 md:space-y-16 lg:space-y-20">
        <div className="kanam-fade-up grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PROOF_POINTS.map((item) => (
            <div
              key={item.label}
              className="border-b border-zinc-900/10 pb-3 pt-1 sm:border-b-0 sm:border-l sm:border-zinc-900/10 sm:pb-0 sm:pl-5 sm:first:border-l-0 sm:first:pl-0"
            >
              <div className="font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                {item.value}
              </div>
              <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Choose a path
              </p>
              <p className="mt-2 max-w-xl text-base text-[var(--muted)]">
                Each path is a complete track with lessons, practice, and a capstone — pick
                where you want to start.
              </p>
            </div>
            <p className="text-sm font-medium text-zinc-500">
              {PATHS_COUNT_LABEL} paths · {LESSONS_COUNT_LABEL} lessons
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
            <PathTile
              path={featured}
              size="featured"
              className="min-h-[22rem] sm:min-h-[26rem] lg:col-span-7 lg:min-h-[32rem]"
            />
            {second ? (
              <PathTile
                path={second}
                size="standard"
                className="min-h-[18rem] sm:min-h-[20rem] lg:col-span-5 lg:min-h-[32rem]"
              />
            ) : null}

            {rest.map((path) => (
              <PathTile
                key={path.slug}
                path={path}
                size="compact"
                className="min-h-[16rem] sm:min-h-[17.5rem] lg:col-span-4"
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-900/8 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.12)] via-[rgb(var(--background))] to-[rgb(var(--accent-rgb)/0.18)] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] kanam-hex-pattern" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                How it fits together
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Start anywhere. Finish with a real project.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Literacy paths build judgment and fluency. Python, data, and cybersecurity
                build hands-on skill. Live instruction when you want a guide; structured
                async when you want to move at your own pace. {DEVICE_READY_SHORT}.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700 sm:text-base">
                {[
                  "Clear roadmap with XP, badges, and progress adults can see",
                  "Instant feedback inside lessons — not worksheet busywork",
                  "Capstones that prove the skill, not just completion clicks",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-zinc-900/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Schedule
              </p>
              <p className="mt-3 font-display text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                Flexible by design
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {PACING_BLURB}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="w-full sm:w-auto">
                  <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                    Try the guided lesson
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="w-full sm:w-auto">
                  <Link href="/contact">Talk to us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageShell>
  );
}
