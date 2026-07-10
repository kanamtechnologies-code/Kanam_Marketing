import type { Metadata } from "next";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import { LEARNING_PATHS, LESSONS_COUNT_LABEL } from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learning paths | Kanam Academy",
  description:
    "Four 8-week learning paths: AI Literacy, Digital Literacy, AI + Python, and Data Analyst — 60+ interactive lessons. Live instruction or structured async, in the browser.",
};

export default function LearningPathsPage() {
  return (
    <SubpageShell
      eyebrow="Learning paths"
      title="Four learning paths. One platform."
      subtitle={`${LESSONS_COUNT_LABEL} interactive lessons across AI Literacy, Digital Literacy, AI + Python, and Data Analyst. Each path is paced as ~8 weeks with about two sessions per week — live, hybrid, or self-paced.`}
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
          <Band>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <H2>{path.name}</H2>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {path.lessons} lessons · 8 weeks
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
            <p className="mt-2 text-sm text-muted-foreground">{path.marketingAngle}</p>
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
          </Band>
        </Section>
      ))}
    </SubpageShell>
  );
}
