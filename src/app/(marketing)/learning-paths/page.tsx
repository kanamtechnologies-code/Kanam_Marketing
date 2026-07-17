import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SubpageShell } from "@/components/layout/SubpageShell";
import {
  FullBleed,
  HomeHeroVeil,
  PageBand,
  duskEyebrowClass,
  duskGhostBtnClass,
  duskMutedClass,
  duskTitleClass,
} from "@/components/layout/PageBands";
import {
  BrandCtaBand,
  brandCtaPrimaryBtnClass,
  brandCtaSecondaryBtnClass,
} from "@/components/site/BrandCtaBand";
import { Button } from "@/components/ui/button";
import { billingLinks } from "@/lib/billing-links";
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
        "group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.22)] bg-[#16352b] text-white transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(7,26,20,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2",
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#16352b] via-[#16352b]/50 to-[#16352b]/10" />
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
    <SubpageShell overlapNav={false}>
      <FullBleed>
        <section className="relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]">
          <div className="absolute inset-0">
            <Image
              src="/images/product/learning-paths-hero.png"
              alt="Teen learner working through a Kanam learning path on a Chromebook"
              fill
              priority
              className="object-cover object-[74%_center] sm:object-[70%_center]"
              sizes="100vw"
            />
            <HomeHeroVeil />
          </div>
          <div className="relative z-10 mx-auto flex min-h-[30rem] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-28 sm:min-h-[34rem] sm:px-6 sm:pb-16 lg:min-h-[38rem] lg:px-8">
            <div className="max-w-xl">
              <p className={duskEyebrowClass}>Learning paths</p>
              <h1 className={cn("mt-3 text-[2.15rem] sm:text-4xl lg:text-[3rem] lg:leading-[1.05]", duskTitleClass)}>
                Six learning paths. <span className="block text-[var(--accent)]">One platform.</span>
              </h1>
              <p className={cn("mt-5 text-base sm:text-lg", duskMutedClass)}>
                {LESSONS_COUNT_LABEL} interactive lessons across coding, AI, data, cybersecurity, financial literacy, and digital skills. {PACING_BLURB}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                  <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">Try the guided lesson</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className={duskGhostBtnClass}>
                  <Link href="/contact">Talk to us about getting started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <PageBand tone="light">
          <div className="kanam-fade-up grid grid-cols-2 gap-5 sm:grid-cols-4">
          {PROOF_POINTS.map((item) => (
            <div
              key={item.label}
              className="border-b border-[rgb(var(--accent-rgb)/0.2)] pb-3 pt-1 sm:border-b-0 sm:border-l sm:border-[rgb(var(--accent-rgb)/0.2)] sm:pb-0 sm:pl-5 sm:first:border-l-0 sm:first:pl-0"
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
        </PageBand>

        <PageBand tone="proof">
          <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className={duskEyebrowClass}>Choose a path</p>
              <p className={cn("mt-2 max-w-xl text-base", duskMutedClass)}>
                Each path is a complete track with lessons, practice, and a capstone — pick
                where you want to start.
              </p>
            </div>
            <p className="text-sm font-medium text-[#e8e0cf]/80">
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
        </PageBand>

        <PageBand tone="base">
          <BrandCtaBand className="px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                How it fits together
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-[2.5rem] sm:leading-[1.1]">
                Start anywhere. Finish with a real project.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#e8e0cf]/90 sm:text-lg">
                Literacy paths build judgment and fluency. Python, data, and cybersecurity
                build hands-on skill. Live instruction when you want a guide; structured
                async when you want to move at your own pace. {DEVICE_READY_SHORT}.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#e8e0cf]/90 sm:text-base">
                {[
                  "Clear roadmap with XP, badges, and progress adults can see",
                  "Instant feedback inside lessons — not worksheet busywork",
                  "Capstones that prove the skill, not just completion clicks",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                Schedule
              </p>
              <p className="mt-3 font-display text-xl font-semibold tracking-tight text-[#f7f3e8] sm:text-2xl">
                Flexible by design
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                {PACING_BLURB}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className={cn("w-full sm:w-auto", brandCtaPrimaryBtnClass)}
                >
                  <Link
                    href={billingLinks.subscription()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe · $30/mo
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className={cn("w-full sm:w-auto", brandCtaSecondaryBtnClass)}
                >
                  <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                    Try the guided lesson
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          </BrandCtaBand>
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}
