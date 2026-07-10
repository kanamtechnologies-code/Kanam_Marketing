import type { Metadata } from "next";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import { DELIVERY_MODES, STANDARDS_BLURB } from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For schools & instructors | Kanam Academy",
  description:
    "Class codes, instructor dashboard, assignments, and roster progress. Chromebook-ready, standards-aligned, pilot-ready with a guided demo — no full-time CS specialist required for every session.",
};

export default function EducatorsPage() {
  const instructorTools = [
    "Separate instructor sign-in",
    "Create classes and get shareable class codes",
    "View roster + learner progress (lessons completed, XP, last activity)",
    "Assign lessons to a class",
    "Delete classes when needed",
    "Coach notes and plain-language explainers inside lessons",
  ] as const;

  const whySchools = [
    "Manageable without a full-time CS teacher for every minute",
    "Standards-aligned documentation for adoption conversations",
    "Evidence of mastery: auto-checks, CFUs, capstones, progress visibility",
    "Chromebook-ready · no install · browser-only",
    "Pilot-ready with a guided demo (no account required)",
    "Flexible: class period, after-school, enrichment, hybrid",
  ] as const;

  return (
    <SubpageShell
      eyebrow="For schools & instructors"
      title="Create a class. Share a code. See progress."
      subtitle="Kanam gives instructors class codes, assignments, and roster visibility — so classrooms, after-school programs, and partners can run structured CS, AI, digital literacy, and data learning without chaos."
      actions={
        <>
          <Button asChild>
            <Link href="/contact">Request a pilot</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link
              href={siteConfig.links.instructor}
              target="_blank"
              rel="noopener noreferrer"
            >
              For instructors
            </Link>
          </Button>
        </>
      }
      toc={[
        { href: "#why", label: "Why schools use Kanam" },
        { href: "#tools", label: "Instructor tools" },
        { href: "#delivery", label: "Delivery models" },
        { href: "#standards", label: "Standards" },
        { href: "#pilot", label: "Request a pilot" },
      ]}
    >
      <Section id="why" className="pt-0">
        <H2>Why schools &amp; partners choose Kanam</H2>
        <Band className="mt-5">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {whySchools.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                {item}
              </li>
            ))}
          </ul>
        </Band>
      </Section>

      <Section id="tools" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Instructor tools</H2>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Create a class in minutes. Share one code. Assign lessons. See who joined,
          what&apos;s completed, XP, and last activity — whether you run live sessions,
          hybrid, or structured async.
        </p>
        <Band className="mt-5">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {instructorTools.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button asChild>
              <Link
                href={siteConfig.links.instructor}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open instructor sign-in
              </Link>
            </Button>
          </div>
        </Band>
      </Section>

      <Section id="delivery" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Delivery models</H2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {DELIVERY_MODES.map((mode) => (
            <div
              key={mode}
              className="rounded-2xl border border-foreground/10 bg-white/80 px-5 py-4 text-sm font-semibold"
            >
              {mode}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Site license, per-class, and after-school block language are available as
          offering models. Contact us for a pilot conversation — we do not list unverified
          district logos or enrollment counts.
        </p>
      </Section>

      <Section id="standards" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Standards &amp; curriculum packet</H2>
        <Band className="mt-5">
          <p className="text-muted-foreground leading-relaxed">{STANDARDS_BLURB}</p>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <Link href={siteConfig.links.standardsPdf} target="_blank" rel="noreferrer">
                Get the curriculum overview
              </Link>
            </Button>
          </div>
        </Band>
      </Section>

      <Section id="pilot" className="border-t border-foreground/10 scroll-mt-24 pb-0">
        <Band>
          <H2>Request a pilot</H2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Tell us your role, who you&apos;re supporting, and timeline. We&apos;ll help you
            evaluate Kanam for a class period, after-school block, or enrichment program.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Request a pilot</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                Try the guided lesson
              </Link>
            </Button>
          </div>
        </Band>
      </Section>
    </SubpageShell>
  );
}
