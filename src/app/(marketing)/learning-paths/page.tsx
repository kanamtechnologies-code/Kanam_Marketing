import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import { LEARNING_PATHS, LESSONS_COUNT_LABEL, PACING_BLURB, PATHS_LIST_SHORT } from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learning paths | Kanam Academy",
  description:
    `Five learning paths: ${PATHS_LIST_SHORT} — ${LESSONS_COUNT_LABEL} interactive lessons. Flexible schedule. Chromebook and mobile ready. Live instruction or structured async.`,
};

export default function LearningPathsPage() {
  return (
    <SubpageShell
      eyebrow="Learning paths"
      title="Five learning paths. One platform."
      subtitle={`${LESSONS_COUNT_LABEL} interactive lessons across ${PATHS_LIST_SHORT}. ${PACING_BLURB} Live, hybrid, or self-paced.`}
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
              Get started
            </Link>
          </Button>
        </>
      }
      toc={LEARNING_PATHS.map((p) => ({
        href: `#${p.slug}`,
        label: p.shortName,
      }))}
    >
      {LEARNING_PATHS.map((path) => (
        <Section
          key={path.slug}
          id={path.slug}
          className="border-t border-foreground/10 first:border-t-0 first:pt-0 scroll-mt-24"
        >
          <Band className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[280px]">
                <Image
                  src={path.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <H2>{path.name}</H2>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {path.lessons} lessons · flexible pace
                  </span>
                </div>
                <p className="mt-2 text-base font-medium text-[var(--brand-2)]">
                  {path.subtitle}
                </p>
                <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                  {path.outcome}
                </p>
                {path.prerequisite ? (
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Note:</span>{" "}
                    {path.prerequisite}
                  </p>
                ) : null}
                <p className="mt-4 text-sm font-semibold text-foreground">
                  Capstone: {path.capstone}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {path.marketingAngle}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Who it&apos;s for:</span>{" "}
                  {path.whoFor}
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link href={`/learning-paths/${path.slug}`}>
                      Explore {path.shortName}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Band>
        </Section>
      ))}
    </SubpageShell>
  );
}
