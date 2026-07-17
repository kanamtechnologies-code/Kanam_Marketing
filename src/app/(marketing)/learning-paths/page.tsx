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
import { ParallaxImage } from "@/components/site/ParallaxImage";
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

type TileTone = "spotlight" | "companion" | "panel";

/** Curated mosaic order — literacy hero, defense stack, then build tracks. */
const PATH_MOSAIC: Array<{ slug: LearningPath["slug"]; tone: TileTone }> = [
  { slug: "ai-literacy", tone: "spotlight" },
  { slug: "digital-literacy", tone: "companion" },
  { slug: "cybersecurity", tone: "companion" },
  { slug: "ai-python", tone: "panel" },
  { slug: "data-analyst", tone: "panel" },
  { slug: "financial-literacy", tone: "panel" },
];

function PathTile({
  path,
  tone,
  priority = false,
  className,
}: {
  path: LearningPath;
  tone: TileTone;
  priority?: boolean;
  className?: string;
}) {
  const isSpotlight = tone === "spotlight";
  const isCompanion = tone === "companion";
  const skillsLabel = path.skills.slice(0, isSpotlight ? 4 : 3).join(" · ");

  return (
    <Link
      href={`/learning-paths/${path.slug}`}
      className={cn(
        "group flex min-h-0 flex-col overflow-hidden rounded-[1.35rem] border border-[rgb(var(--accent-rgb)/0.22)] bg-[#16352b] text-white",
        "transition-[transform,box-shadow,border-color] duration-500 ease-out",
        "hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.45)] hover:shadow-[0_28px_56px_rgba(7,26,20,0.32)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e241c]",
        className
      )}
    >
      {/* Photo reads clearly — not buried under a full-bleed green wash */}
      <div
        className={cn(
          "relative w-full overflow-hidden",
          isSpotlight
            ? "aspect-[16/11] min-h-[14rem] flex-1 sm:min-h-[16rem] lg:min-h-0 lg:aspect-auto lg:h-full"
            : isCompanion
              ? "aspect-[16/10] min-h-[11rem]"
              : "aspect-[16/10] min-h-[10.5rem]"
        )}
      >
        <Image
          src={path.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes={
            isSpotlight
              ? "(min-width: 1024px) 55vw, 100vw"
              : "(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
          }
          priority={priority}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#16352b]/80 to-transparent" />
        {isSpotlight ? (
          <p className="absolute left-5 top-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)] drop-shadow sm:left-6 sm:top-5">
            Start here
          </p>
        ) : null}
      </div>

      <div
        className={cn(
          "flex flex-col justify-end border-t border-white/10",
          isSpotlight ? "p-6 sm:p-7 lg:p-8" : "p-5 sm:p-6"
        )}
      >
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/65">
          {path.lessons} lessons
        </p>

        <h2
          className={cn(
            "mt-2 font-display font-semibold tracking-tight text-[#f7f3e8]",
            isSpotlight
              ? "text-3xl sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08]"
              : isCompanion
                ? "text-xl sm:text-2xl"
                : "text-xl sm:text-[1.35rem]"
          )}
        >
          {path.name}
        </h2>

        <p
          className={cn(
            "mt-1.5 font-medium text-[rgb(var(--accent-rgb)/1)]",
            isSpotlight ? "max-w-md text-base sm:text-lg" : "text-sm"
          )}
        >
          {path.subtitle}
        </p>

        {isSpotlight ? (
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#c5d2cb] sm:text-base">
            {path.marketingAngle}
          </p>
        ) : null}

        <div
          className={cn(
            "mt-4 flex items-end justify-between gap-3 border-t border-white/12 pt-3",
            isSpotlight && "mt-5 pt-4"
          )}
        >
          <p
            className={cn(
              "line-clamp-2 leading-snug text-[#c5d2cb]",
              isSpotlight ? "text-sm" : "text-xs sm:text-sm"
            )}
          >
            {skillsLabel}
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
  const mosaic = PATH_MOSAIC.map((slot) => {
    const path = LEARNING_PATHS.find((p) => p.slug === slot.slug);
    return path ? { ...slot, path } : null;
  }).filter((item): item is { slug: LearningPath["slug"]; tone: TileTone; path: LearningPath } =>
    Boolean(item)
  );

  const spotlight = mosaic.find((m) => m.tone === "spotlight");
  const companions = mosaic.filter((m) => m.tone === "companion");
  const panels = mosaic.filter((m) => m.tone === "panel");

  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        <section className="relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]">
          <div className="absolute inset-0">
            <ParallaxImage
              src="/images/product/learning-paths-hero.png"
              alt="Teen learner working through a Kanam learning path on a Chromebook"
              priority
              intensity={140}
              scale={1.36}
              className="object-[74%_center] sm:object-[70%_center]"
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
          <div className="kanam-fade-up grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {PROOF_POINTS.map((item) => (
            <div key={item.label} className="min-w-0">
              <div className="font-display text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                {item.value}
              </div>
              <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
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
              <h2 className={cn("mt-2 text-2xl sm:text-3xl", duskTitleClass)}>
                Start where curiosity is strongest
              </h2>
              <p className={cn("mt-2 max-w-xl text-base", duskMutedClass)}>
                Each path is a full journey with lessons, practice, and a capstone — pick
                where you want to start.
              </p>
            </div>
            <p className="text-sm font-medium text-[#e8e0cf]/80">
              {PATHS_COUNT_LABEL} paths · {LESSONS_COUNT_LABEL} lessons
            </p>
          </div>

          {/* Premium bento: hero + stack + full bottom row of three */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {spotlight ? (
              <PathTile
                path={spotlight.path}
                tone="spotlight"
                priority
                className="sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[34rem]"
              />
            ) : null}

            {companions.map((item, index) => (
              <PathTile
                key={item.slug}
                path={item.path}
                tone="companion"
                priority={index === 0}
                className="lg:col-span-5"
              />
            ))}

            {panels.map((item, index) => (
              <PathTile
                key={item.slug}
                path={item.path}
                tone="panel"
                className={cn(
                  "lg:col-span-4",
                  index === panels.length - 1 && "sm:col-span-2 lg:col-span-4"
                )}
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
