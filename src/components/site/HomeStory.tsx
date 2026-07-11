"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ClipboardCheck,
  Monitor,
  Play,
  School,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LessonCanvasPreview } from "@/components/site/LessonCanvasPreview";
import {
  DELIVERY_MODES,
  DEVICE_READY_BLURB,
  DEVICE_READY_LABEL,
  DEVICE_READY_SHORT,
  LESSON_FLOW,
  LESSONS_COUNT_LABEL,
  LEARNING_PATHS,
  PACING_BLURB,
  PATHS_LIST_SHORT,
  PROGRAM_FIT_SHORT,
  PROOF_POINTS,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl",
        className
      )}
    >
      <span className="inline-block max-w-full align-top">
        {children}
        <span
          aria-hidden="true"
          className="mt-3 block h-1 w-12 rounded-full bg-[rgb(var(--accent-rgb)/0.85)]"
        />
      </span>
    </h2>
  );
}

function HeroPanel() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[rgb(var(--brand-2-rgb)/0.18)] via-[rgb(var(--background))] to-[rgb(var(--accent-rgb)/0.16)] pt-10 pb-14 md:pt-14 md:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] kanam-hex-pattern" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-8">
        <div className="kanam-fade-up space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--brand-2-rgb)/1)]">
            Kanam Academy · {siteConfig.tagline}
          </p>
          <h1 className="font-display max-w-xl text-[clamp(2.1rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-zinc-950">
            Real tech skills for teens — and anyone ready to learn
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-[var(--muted)]">
            Coding, AI, data, cybersecurity, and digital literacy. Live instruction when
            you want a guide; structured async lessons when you want to move at your own
            pace. Progress you can see. {DEVICE_READY_SHORT}.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4" />
                Try the guided lesson
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
                Get started
              </Link>
            </Button>
          </div>

          <p className="text-sm text-zinc-500">
            No account needed for the demo · Live or async · {DEVICE_READY_SHORT}
          </p>
        </div>

        <div className="kanam-fade-up [animation-delay:120ms]">
          <LessonCanvasPreview showCta={false} />
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-y border-zinc-900/8 bg-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-zinc-900/8 sm:grid-cols-4">
        {PROOF_POINTS.map((item) => (
          <div
            key={item.label}
            className="bg-white px-4 py-5 text-center sm:px-5 sm:py-6"
          >
            <div className="font-display text-2xl font-semibold text-[rgb(var(--brand-2-rgb)/1)] sm:text-3xl">
              {item.value}
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LearningPathsPanel() {
  return (
    <section className="w-full border-t border-zinc-900/8 bg-[rgb(var(--background))] py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Five learning paths. One platform.</SectionTitle>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {LESSONS_COUNT_LABEL} interactive lessons across {PATHS_LIST_SHORT}.{" "}
          {PACING_BLURB}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {LEARNING_PATHS.map((path) => (
            <Link
              key={path.slug}
              href={`/learning-paths/${path.slug}`}
              className="group overflow-hidden rounded-2xl border border-zinc-900/10 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_16px_36px_rgba(15,23,42,0.1)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[rgb(var(--brand-2-rgb)/0.06)]">
                <Image
                  src={path.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-zinc-950 group-hover:text-[rgb(var(--brand-2-rgb)/1)]">
                    {path.name}
                  </h3>
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                    {path.lessons} lessons
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-[rgb(var(--brand-2-rgb)/1)]">
                  {path.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {path.marketingAngle}
                </p>
                <p className="mt-4 text-sm font-semibold text-zinc-800">
                  Capstone: {path.capstone}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild variant="secondary">
            <Link href="/learning-paths">See the five learning paths</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function HowItWorksPanel() {
  return (
    <section className="w-full border-t border-zinc-900/8 bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <SectionTitle>How learning works</SectionTitle>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Learn the idea, practice with instant feedback, reflect, and earn XP and
              badges on a clear roadmap.
            </p>

            <ol className="mt-8 grid gap-4 sm:grid-cols-2" role="list">
              {LESSON_FLOW.map((step, idx) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-zinc-900/8 bg-[rgb(var(--background))] p-5"
                >
                  <div className="font-mono text-xs font-semibold text-[rgb(var(--brand-2-rgb)/1)]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-zinc-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-900/10 shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
            <Image
              src="/images/product/teen-girl-coding.png"
              alt="Teen learner practicing coding on a laptop"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </figure>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-900/10 bg-[rgb(var(--background))] p-6">
            <h3 className="font-semibold text-zinc-950">Flexible schedule</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>{PACING_BLURB}</li>
              <li>Dashboard labels lessons as Week X · Session Y (suggested structure)</li>
              <li>Works self-paced, with light mentor support, or as a live cohort</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-900/10 bg-[rgb(var(--background))] p-6">
            <h3 className="font-semibold text-zinc-950">Delivery modes</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              {DELIVERY_MODES.map((mode) => (
                <li key={mode}>{mode}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/how-it-works"
            className="text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)] underline-offset-4 hover:underline"
          >
            See how lessons work in detail →
          </Link>
        </div>
      </div>
    </section>
  );
}

function AudienceSplitPanel() {
  return (
    <section className="w-full border-t border-zinc-900/8 bg-gradient-to-b from-[rgb(var(--brand-2-rgb)/0.06)] to-[rgb(var(--background))] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-zinc-900/10 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/product/live-session-instructor.png"
              alt="Learner in a live online lesson with an instructor"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="p-6 sm:p-8">
            <School
              className="h-6 w-6 text-[rgb(var(--brand-2-rgb)/1)]"
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-2xl font-semibold text-zinc-950">
              For schools &amp; programs
            </h3>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">
              Create a class, share a code, assign lessons, and see learner progress —
              without needing a full-time CS specialist for every session. Fits class
              periods, {PROGRAM_FIT_SHORT}.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700">
              <li className="flex gap-2">
                <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--brand-rgb)/1)]" />
                Class codes, roster, assignments, XP &amp; last activity
              </li>
              <li className="flex gap-2">
                <Monitor className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--brand-rgb)/1)]" />
                {DEVICE_READY_LABEL}
              </li>
              <li className="flex gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--brand-rgb)/1)]" />
                Standards-aligned curriculum packet available
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/educators">For schools &amp; programs</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Request a pilot</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-900/10 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/product/family-mom-daughter.png"
              alt="Parent and teen reviewing a lesson together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="p-6 sm:p-8">
            <Users
              className="h-6 w-6 text-[rgb(var(--brand-2-rgb)/1)]"
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-2xl font-semibold text-zinc-950">
              For families &amp; learners
            </h3>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">
              Start with a guided demo lesson — no account needed. Then create an account,
              keep progress, and follow a clear roadmap with badges and real projects. Live
              instruction when you want a guide; structured async when you want to move at
              your own pace.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700">
              <li className="flex gap-2">
                <Play className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--brand-rgb)/1)]" />
                Try the guided lesson in minutes
              </li>
              <li className="flex gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--brand-rgb)/1)]" />
                Structured alternative to random YouTube / AI chat wandering
              </li>
              <li className="flex gap-2">
                <Monitor className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--brand-rgb)/1)]" />
                Homeschool, enrichment, or self-paced — Chromebook & mobile ready
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link
                  href={siteConfig.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try the guided lesson
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/parents">For families</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustPanel() {
  return (
    <section className="w-full border-t border-zinc-900/8 bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Built for classrooms and credibility</SectionTitle>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          Standards-aligned curriculum documentation is available for accreditation and
          adoption conversations. Clear enough for teens starting out — deep enough for
          anyone leveling up in tech.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {[
            "Programming fundamentals (Python)",
            "Data analysis + visualization",
            "AI literacy / responsible use",
            "Digital citizenship & tech fluency",
            "Cybersecurity fundamentals",
          ].map((pillar) => (
            <div
              key={pillar}
              className="rounded-2xl border border-zinc-900/8 bg-[rgb(var(--background))] p-5 text-sm font-semibold text-zinc-900"
            >
              {pillar}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <Link href={siteConfig.links.standardsPdf} target="_blank" rel="noreferrer">
              Get the curriculum overview
            </Link>
          </Button>
          <Link
            href="/how-it-works#standards"
            className="inline-flex items-center text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)] underline-offset-4 hover:underline"
          >
            Standards details →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqPanel() {
  const items = [
    {
      q: "What is Kanam Academy?",
      a: `A browser-based learning platform for coding, AI literacy, digital literacy, data, and cybersecurity — with five learning paths, interactive lessons, live or async options, and progress adults can see. ${PACING_BLURB}`,
    },
    {
      q: "Who is it for?",
      a: `Teens and anyone learning tech who wants strong live instruction or structured async classes — plus teachers, schools, families, ${PROGRAM_FIT_SHORT}, and enrichment partners.`,
    },
    {
      q: "Is the schedule fixed?",
      a: `No. ${PACING_BLURB} Go faster, slower, or build around class periods, after-school blocks, or family routines.`,
    },
    {
      q: "Can I try it without an account?",
      a: "Yes. Open the guided lesson demo — no account needed. It walks through a real Python lesson: coach notes, code blanks, Run & check, and XP.",
    },
    {
      q: "Do learners need to install software?",
      a: `No. ${DEVICE_READY_BLURB} Python and SQL run in the lesson.`,
    },
    {
      q: "How do schools use it?",
      a: `Instructors and program leaders create a class, share a code, assign lessons, and view roster progress. Lessons include coach notes so adults can support with minimal prep — live, hybrid, after-school, weekend, or structured async.`,
    },
  ];

  return (
    <section className="w-full border-t border-zinc-900/8 bg-[rgb(var(--background))] py-14 md:py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Common questions</SectionTitle>
        <Card className="mt-8 border-zinc-900/10 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
          <CardContent className="pt-2">
            <Accordion type="single" collapsible defaultValue="item-0">
              {items.map((item, idx) => (
                <AccordionItem key={item.q} value={`item-${idx}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Link
            href="/faq"
            className="text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)] underline-offset-4 hover:underline"
          >
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalPanel() {
  return (
    <section className="w-full border-t border-[rgb(var(--accent-rgb)/0.45)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-rgb)/0.95)] to-[rgb(var(--brand-2-rgb)/0.88)] py-14 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 text-white sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Move forward — try a real lesson today
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Open the guided demo, create an account, or request a pilot for your school or
            organization.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white text-[rgb(var(--brand-2-rgb)/1)] hover:bg-white/95"
          >
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              <Play className="h-4 w-4" />
              Try the guided lesson
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20"
          >
            <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
              Get started
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20"
          >
            <Link href="/contact">Request a pilot</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function HomeStory() {
  return (
    <div className="relative overflow-hidden bg-[var(--background)]">
      <HeroPanel />
      <ProofStrip />
      <LearningPathsPanel />
      <HowItWorksPanel />
      <AudienceSplitPanel />
      <TrustPanel />
      <FaqPanel />
      <FinalPanel />
    </div>
  );
}
