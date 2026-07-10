import type { Metadata } from "next";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import {
  CHART_TYPES,
  DELIVERY_MODES,
  LESSON_FLOW,
  STANDARDS_BLURB,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works | Kanam Academy",
  description:
    "How Kanam lessons work: learn it, practice with instant feedback, reflect, earn XP. 8-week pacing, browser-only Python and SQL, standards-aligned documentation.",
};

export default function HowItWorksPage() {
  const lessonParts = [
    "Coach’s note — goal + big idea in plain language",
    "Quick explainer + Word help — vocabulary / concept primer",
    "Guided practice — fill-in-the-blank with immediate feedback",
    "From-scratch challenge — unaided skill-builder",
    "Check-for-understanding (CFU)",
    "Try This — optional stretch",
    "Ethics / reflection moment",
    "Earn — XP + badge progress on the roadmap",
  ] as const;

  const mastery = [
    "Auto-graded guided + scratch exercises",
    "CFU conceptual checks",
    "Capstone projects",
    "XP, badges, and progress visibility for instructors",
    "Designed so mastery is demonstrated, not just clicked through",
  ] as const;

  const tech = [
    "Cloud web app · browser-only (Chromebooks and laptops)",
    "No install / no special software",
    "Secure learner accounts",
    "Python lessons run in-browser",
    `Data lessons use real in-browser SQL + charts (${CHART_TYPES.join(", ")})`,
  ] as const;

  return (
    <SubpageShell
      eyebrow="How it works"
      title="Structured learning that explains, checks, and levels up"
      subtitle="Every lesson is designed to explain, check, and correct itself — so learners progress confidently, whether they have live instruction or are moving through structured async classes."
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/learning-paths">See the four learning paths</Link>
          </Button>
        </>
      }
      toc={[
        { href: "#flow", label: "Lesson flow" },
        { href: "#structure", label: "Inside a lesson" },
        { href: "#pacing", label: "Pacing & delivery" },
        { href: "#mastery", label: "Evidence of mastery" },
        { href: "#tech", label: "Technology" },
        { href: "#standards", label: "Standards" },
      ]}
    >
      <Section id="flow" className="pt-0">
        <H2>Learn it → Do the activity → Reflect → Earn</H2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LESSON_FLOW.map((step, idx) => (
            <li
              key={step.title}
              className="rounded-2xl border border-foreground/10 bg-white/80 p-5"
            >
              <div className="font-mono text-xs font-semibold text-[var(--brand-2)]">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="structure" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Inside a lesson</H2>
        <Band className="mt-5">
          <p className="text-muted-foreground leading-relaxed">
            Interactive lessons generally include a consistent, research-based structure:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {lessonParts.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                {item}
              </li>
            ))}
          </ul>
        </Band>
      </Section>

      <Section id="pacing" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Pacing &amp; delivery</H2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Band>
            <h3 className="text-lg font-semibold">Path pacing</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>8 weeks per path</li>
              <li>~2 sessions per week</li>
              <li>Dashboard labels lessons as Week X · Session Y</li>
              <li>Works self-paced, with light mentor support, or as a live cohort</li>
            </ul>
          </Band>
          <Band>
            <h3 className="text-lg font-semibold">Delivery modes</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {DELIVERY_MODES.map((mode) => (
                <li key={mode}>{mode}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Site license, per-class, and after-school block models are available for
              schools and partners.
            </p>
          </Band>
        </div>
      </Section>

      <Section id="mastery" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Evidence of mastery</H2>
        <Band className="mt-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {mastery.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                {item}
              </li>
            ))}
          </ul>
        </Band>
      </Section>

      <Section id="tech" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Technology</H2>
        <Band className="mt-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {tech.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            We do not claim native mobile apps, offline desktop installs, or that an
            instructor must be a CS expert to run a session.
          </p>
        </Band>
      </Section>

      <Section id="standards" className="border-t border-foreground/10 scroll-mt-24 pb-0">
        <H2>Standards &amp; credibility</H2>
        <div className="mt-5 rounded-2xl border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.12)] p-6">
          <p className="text-muted-foreground leading-relaxed">{STANDARDS_BLURB}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={siteConfig.links.standardsPdf} target="_blank" rel="noreferrer">
                Get the curriculum overview
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">Request a pilot</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SubpageShell>
  );
}
