import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import {
  CHART_TYPES,
  DELIVERY_MODES,
  DEVICE_READY_BLURB,
  DEVICE_READY_SHORT,
  LESSON_FLOW,
  LESSONS_COUNT_LABEL,
  PACING_BLURB,
  PACING_DESIGNED,
  PACING_FLEXIBLE,
  PATHS_COUNT_LABEL,
  STANDARDS_BLURB,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works | Kanam Academy",
  description:
    "How Kanam lessons work: learn it, practice with instant feedback, reflect, earn XP. Flexible schedule, Chromebook and mobile ready, standards-aligned documentation.",
};

const HERO_PROOF = [
  { label: "Lesson rhythm", value: "Learn → Do → Reflect" },
  { label: "Learning paths", value: PATHS_COUNT_LABEL },
  { label: "Interactive lessons", value: LESSONS_COUNT_LABEL },
  { label: "Devices", value: DEVICE_READY_SHORT },
] as const;

const LESSON_PARTS = [
  {
    title: "Coach’s note",
    body: "Goal and big idea in plain language — so learners know what “done” looks like.",
  },
  {
    title: "Quick explainer + Word help",
    body: "A short primer and vocabulary support before they build.",
  },
  {
    title: "Guided practice",
    body: "Fill-in-the-blank work with immediate feedback — mistakes become instruction.",
  },
  {
    title: "From-scratch challenge",
    body: "Unaided skill-building so mastery is earned, not clicked through.",
  },
  {
    title: "Check-for-understanding",
    body: "A conceptual check that confirms the idea landed.",
  },
  {
    title: "Try This + reflection",
    body: "Optional stretch, then an ethics or reflection moment that makes the skill human.",
  },
  {
    title: "Earn on the roadmap",
    body: "XP and badge progress learners, families, and instructors can all see.",
  },
] as const;

const MASTERY = [
  "Auto-graded guided and scratch exercises",
  "CFU conceptual checks",
  "Capstone projects that prove skill",
  "XP, badges, and progress visibility for instructors",
  "Designed so mastery is demonstrated — not just clicked through",
] as const;

const TECH = [
  `Cloud web app · ${DEVICE_READY_SHORT}`,
  "No install / no special software",
  "Secure learner accounts",
  "Python lessons run in-browser",
  `Data lessons use real in-browser SQL + charts (${CHART_TYPES.join(", ")})`,
] as const;

export default function HowItWorksPage() {
  return (
    <SubpageShell overlapNav={false}>
      <div className="space-y-12 md:space-y-14 lg:space-y-16">
        {/* Hero */}
        <section
          aria-labelledby="how-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_22px_56px_rgba(15,23,42,0.16)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/product/how-it-works-hero.png"
              alt="Teen focused on a structured Kanam lesson at a laptop"
              fill
              priority
              className="object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
              sizes="(min-width: 1280px) 90rem, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/88 to-zinc-950/25 sm:via-zinc-950/75 sm:to-zinc-950/12" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-zinc-950/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.2)] via-transparent to-[rgb(var(--accent-rgb)/0.1)]" />
          </div>

          <div className="relative z-10 flex min-h-[26rem] flex-col justify-end p-6 sm:min-h-[28rem] sm:p-8 lg:min-h-[32rem] lg:p-10">
            <div className="max-w-xl lg:max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                How it works
              </p>
              <h1
                id="how-hero-heading"
                className="mt-3 font-display text-[2.1rem] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06]"
              >
                Lessons that explain,
                <span className="block text-[rgb(var(--accent-rgb)/1)]">
                  check, and level up.
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                Every Kanam lesson is built to teach, verify, and reward progress — live with
                an instructor or structured async on their own.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild>
                  <Link
                    href={siteConfig.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try the guided lesson
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
                >
                  <Link href="/learning-paths">See learning paths</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip */}
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgb(var(--brand-2-rgb)/0.22)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.22)] via-[rgb(var(--brand-rgb)/0.14)] to-[rgb(var(--accent-rgb)/0.35)] px-5 py-5 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] kanam-hex-pattern" />
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
            {HERO_PROOF.map((item, index) => (
              <div
                key={item.label}
                className={
                  index > 0
                    ? "sm:border-l sm:border-[rgb(var(--brand-2-rgb)/0.28)] sm:px-4"
                    : "sm:px-4 sm:pl-0"
                }
              >
                <div className="font-display text-xl font-semibold tracking-tight text-[rgb(var(--brand-2-rgb)/1)] sm:text-2xl lg:text-[1.65rem]">
                  {item.value}
                </div>
                <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--brand-2-rgb)/0.72)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson flow */}
        <section id="flow" aria-labelledby="flow-heading" className="scroll-mt-24 space-y-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Lesson flow
            </p>
            <h2
              id="flow-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Learn it → Do the activity → Reflect → Earn
            </h2>
            <p className="mt-3 text-base text-[var(--muted)]">
              A consistent rhythm so learners always know what comes next — and adults can
              trust that progress is real.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <ol className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {LESSON_FLOW.map((step, idx) => (
                <li key={step.title}>
                  <p className="font-display text-sm font-semibold tabular-nums text-[rgb(var(--brand-2-rgb)/1)]">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-zinc-950">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{step.body}</p>
                </li>
              ))}
            </ol>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-zinc-900/10 shadow-[0_18px_44px_rgba(15,23,42,0.12)] lg:col-span-5 lg:aspect-auto lg:min-h-[28rem]">
              <Image
                src="/images/product/path-detail-learning.png"
                alt="Learner working through a guided Kanam lesson"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </figure>
          </div>
        </section>

        {/* Inside a lesson */}
        <section
          id="structure"
          aria-labelledby="structure-heading"
          className="scroll-mt-24 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10"
        >
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Inside a lesson
            </p>
            <h2
              id="structure-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Built the same way every time — on purpose.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              Interactive lessons follow a research-based structure so support stays light
              and learning stays clear.
            </p>
            <figure className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-zinc-900/10 lg:block">
              <Image
                src="/images/product/learner-coding.png"
                alt="Close view of a learner practicing in the browser"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </figure>
          </div>
          <ol className="space-y-5 lg:col-span-7">
            {LESSON_PARTS.map((part, idx) => (
              <li
                key={part.title}
                className="grid grid-cols-[auto_1fr] gap-4 border-b border-zinc-900/8 pb-5 last:border-b-0 last:pb-0"
              >
                <span className="font-display text-sm font-semibold tabular-nums text-[rgb(var(--brand-2-rgb)/1)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-950">{part.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">{part.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Schedule & delivery */}
        <section
          id="pacing"
          aria-labelledby="pacing-heading"
          className="scroll-mt-24 space-y-8"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Schedule &amp; delivery
            </p>
            <h2
              id="pacing-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Flexible by design.
            </h2>
            <p className="mt-3 text-base text-[var(--muted)]">{PACING_BLURB}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-8">
            <figure className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-zinc-900/10 lg:col-span-5 lg:min-h-full">
              <Image
                src="/images/product/instructor-woman-live.png"
                alt="Kanam instructor leading a live online session"
                fill
                className="object-cover object-[center_20%]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                  Live or async
                </p>
                <p className="mt-1.5 font-display text-xl font-semibold tracking-tight text-white">
                  Same lesson canvas. Your schedule.
                </p>
              </figcaption>
            </figure>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:content-center lg:gap-10 lg:px-2">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-950">
                  Flexible schedule
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600">
                  <li className="flex gap-3">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                    {PACING_DESIGNED}
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                    {PACING_FLEXIBLE}
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                    Dashboard labels lessons as Week X · Session Y
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                    Works self-paced, with light mentor support, or as a live cohort
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-950">
                  Delivery modes
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600">
                  {DELIVERY_MODES.map((mode) => (
                    <li key={mode} className="flex gap-3">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent-rgb)/1)]" />
                      {mode}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mastery + tech */}
        <section
          id="mastery"
          aria-labelledby="mastery-heading"
          className="scroll-mt-24 relative overflow-hidden rounded-[1.5rem] border border-[rgb(var(--brand-2-rgb)/0.2)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.14)] via-white/85 to-[rgb(var(--accent-rgb)/0.2)] px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] kanam-hex-pattern" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Evidence of mastery
              </p>
              <h2
                id="mastery-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
              >
                Progress you can prove.
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700">
                {MASTERY.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div id="tech" className="scroll-mt-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Technology
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                Built for real classrooms and homes.
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700">
                {TECH.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent-rgb)/1)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-zinc-600">{DEVICE_READY_BLURB}</p>
            </div>
          </div>
        </section>

        {/* Standards */}
        <section
          id="standards"
          aria-labelledby="standards-heading"
          className="scroll-mt-24 grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Standards &amp; credibility
            </p>
            <h2
              id="standards-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Documentation ready for adoption conversations.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              {STANDARDS_BLURB}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button asChild>
              <Link href={siteConfig.links.standardsPdf} target="_blank" rel="noreferrer">
                Curriculum overview
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">Request information</Link>
            </Button>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          aria-labelledby="how-cta-heading"
          className="relative overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.35)] via-transparent to-[rgb(var(--accent-rgb)/0.2)]" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent-rgb)/1)]">
              Ready when you are
            </p>
            <h2
              id="how-cta-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              See a real lesson — then talk with us.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">
              Open the guided demo, or tell us about your learners and we’ll help you choose
              live tutoring, a family track, or a school/program cohort.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link
                  href={siteConfig.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try the guided lesson
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
              >
                <Link href="/contact">Contact Kanam</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
