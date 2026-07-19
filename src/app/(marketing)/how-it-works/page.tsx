import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  FullBleed,
  HomeHeroVeil,
} from "@/components/layout/PageBands";
import { SubpageShell } from "@/components/layout/SubpageShell";
import {
  BrandCtaBand,
  brandCtaBodyClass,
  brandCtaEyebrowClass,
  brandCtaPrimaryBtnClass,
  brandCtaSecondaryBtnClass,
  brandCtaTitleClass,
} from "@/components/site/BrandCtaBand";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Button } from "@/components/ui/button";
import {
  DEVICE_READY_BLURB,
  DEVICE_READY_SHORT,
  LEARNING_PATHS,
  LESSON_FLOW,
  LESSONS_COUNT_LABEL,
  PACING_BLURB,
  PATHS_COUNT_LABEL,
  PATHS_LIST_SHORT,
  STANDARDS_BLURB,
} from "@/lib/learning-paths";
import { LIVE_ADD_ONS, TRACK_PRICE_RANGE_LABEL, TRACK_PROGRAM } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works | Kanam Academy",
  description:
    "How Kanam Academy works: eight learning paths including Advanced AI and AP CSP Prep, live instruction or structured async, progress adults can see, and a real lesson canvas — for teens, families, schools, and youth programs.",
};

const PLATFORM_STEPS = [
  {
    n: "01",
    title: "Choose a learning path",
    body: `${PATHS_LIST_SHORT} — ${LESSONS_COUNT_LABEL} interactive lessons with clear finish lines and real capstones.`,
  },
  {
    n: "02",
    title: "Learn your way",
    body: "Live with a Kanam instructor for guidance and accountability — or move through structured async tracks at a pace that fits home, class, or troop night.",
  },
  {
    n: "03",
    title: "Practice in the real canvas",
    body: "Coach notes, guided practice, instant feedback, and from-scratch challenges — the same premium lesson experience whether you’re live or on your own.",
  },
  {
    n: "04",
    title: "Show progress adults can trust",
    body: "Roadmap, XP, badges, and roster visibility for families, instructors, and program leaders — mastery you can prove, not just clicks.",
  },
] as const;

const WAYS = [
  {
    eyebrow: "Live instruction",
    title: "Learn with a Kanam instructor",
    body: `Private 1:1 tutoring or small-group cohorts with industry professionals. Start with a ${LIVE_ADD_ONS.oneToOne.trial} trial session — then add platform practice between meetings.`,
    points: [
      `${LIVE_ADD_ONS.oneToOne.duration} live sessions online`,
      "Real unblocking, challenge, and accountability",
      "Pairs cleanly with async tracks between sessions",
    ],
    image: "/images/product/live-session-instructor.png",
    imageAlt: "Learner in a live online Kanam tutoring session",
    href: "/pricing",
    cta: "See tutoring options",
  },
  {
    eyebrow: "Platform access",
    title: "Move at your own pace",
    body: `Eight structured paths with coach notes, auto-checks, and progress you can see. Monthly access or buy one full track (${TRACK_PROGRAM.shortLabel}) from ${TRACK_PRICE_RANGE_LABEL}.`,
    points: [
      "Self-paced enrichment that still feels guided",
      "XP, badges, and a roadmap families can follow",
      "Works on Chromebook and mobile — no install",
    ],
    image: "/images/product/teen-girl-coding.png",
    imageAlt: "Teen working through a structured Kanam lesson",
    href: "/learning-paths",
    cta: "Explore learning paths",
  },
  {
    eyebrow: "Schools & programs",
    title: "Bring Kanam to your cohort",
    body: "Classrooms, after-school blocks, weekend cohorts, and Scout troops — Kanam teaches live where you need us, with roster progress adults can see.",
    points: [
      "Online or in person where available",
      "Class codes, assignments, and standards docs",
      "Custom quotes for schools, programs, and troops",
    ],
    image: "/images/product/leaders-school-live.png",
    imageAlt: "Kanam live instruction for a school or program cohort",
    href: "/educators",
    cta: "Request a pilot",
  },
] as const;

const AUDIENCES = [
  {
    title: "Teens & learners",
    body: "Clear goals, instant feedback, and skills that feel useful — coding, AI, cyber, data, digital fluency, and money.",
  },
  {
    title: "Families & homeschool",
    body: "Live tutoring when you want a guide. Async tracks when you want practice that continues — with progress you can see.",
  },
  {
    title: "Schools & youth leaders",
    body: "CSTA-aligned paths, live Kanam instructors, and roster visibility — without asking every adult to become the CS teacher.",
  },
] as const;

const PROOF = [
  "Auto-graded guided practice and from-scratch challenges",
  "Check-for-understanding that confirms the idea landed",
  "Capstone projects that prove skill, not completion clicks",
  "XP, badges, and roadmap visibility for learners and adults",
  "Roster progress for classrooms, programs, and troops",
] as const;

const ACCESS = [
  `Cloud web app · ${DEVICE_READY_SHORT}`,
  "No install / no special software",
  "Secure learner accounts",
  "Python lessons run in-browser",
  "Data lessons use real in-browser SQL and charts",
] as const;

export default function HowItWorksPage() {
  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        {/* Hero */}
        <section
          aria-labelledby="how-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]"
        >
          <div className="absolute inset-0">
            <ParallaxImage
              src="/images/product/how-it-works-hero.png"
              alt="Teen focused on a structured Kanam lesson at a laptop"
              priority
              intensity={140}
              scale={1.36}
              className="object-[72%_center] sm:object-[68%_center] lg:object-[65%_center]"
              sizes="100vw"
            />
            <HomeHeroVeil />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[28rem] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-28 sm:min-h-[32rem] sm:px-6 sm:pb-16 lg:min-h-[36rem] lg:px-8">
            <div className="max-w-xl lg:-translate-y-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                How Kanam works
              </p>
              <h1
                id="how-hero-heading"
                className="mt-3 font-display text-[2.15rem] font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl lg:text-[3rem] lg:leading-[1.05]"
              >
                One platform.
                <span className="block text-[var(--accent)]">
                  Live guidance — or your pace.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#c5d2cb] sm:text-lg">
                Kanam Academy is a complete learning system for teens: {PATHS_COUNT_LABEL}{" "}
                premium paths, industry instructors, a real lesson canvas, and progress
                families and schools can trust.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
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
                  size="lg"
                  variant="secondary"
                  className={brandCtaSecondaryBtnClass}
                >
                  <Link href="/contact">Talk with Kanam</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform — home mid band */}
        <section
          id="platform"
          aria-labelledby="platform-heading"
          className="scroll-mt-24 border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#122c24] py-14 md:py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                The platform
              </p>
              <h2
                id="platform-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
              >
                How the whole experience fits together.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#c5d2cb] sm:text-lg">
                Not a pile of videos — a guided path from first lesson to proven skill, whether
                you learn live, async, or both.
              </p>
            </div>

            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {PLATFORM_STEPS.map((step) => (
                <li
                  key={step.n}
                  className="rounded-2xl border border-[rgb(var(--accent-rgb)/0.16)] bg-[#0e241c]/80 p-5 sm:p-6"
                >
                  <p className="font-mono text-xs font-semibold text-[var(--accent)]">
                    {step.n}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#f7f3e8]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#c5d2cb] sm:text-base">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Options — home base band */}
        <section
          id="options"
          aria-labelledby="options-heading"
          className="scroll-mt-24 border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#0e241c] py-14 md:py-20"
        >
          <div className="mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Your options
              </p>
              <h2
                id="options-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
              >
                Choose how you show up.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#c5d2cb] sm:text-lg">
                Live instruction and platform access are designed to work alone — or together.
                Pick what fits your learner, family, or program.
              </p>
            </div>

            {WAYS.map((way, idx) => (
              <article
                key={way.title}
                className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <figure
                  className={`relative min-h-[16rem] overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)] lg:col-span-5 lg:min-h-[22rem] ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={way.image}
                    alt={way.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e241c]/70 via-transparent to-transparent" />
                </figure>
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {way.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl">
                    {way.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-[#c5d2cb]">
                    {way.body}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-[#c5d2cb] sm:text-base">
                    {way.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      asChild
                      variant="secondary"
                      className="rounded-full border-[rgb(var(--accent-rgb)/0.4)] bg-transparent text-[var(--accent)] hover:bg-[rgb(var(--accent-rgb)/0.1)]"
                    >
                      <Link href={way.href}>{way.cta}</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Light breather — keeps the page from feeling all-dusk */}
        <section
          id="who"
          aria-labelledby="who-heading"
          className="scroll-mt-24 border-t border-[rgb(var(--accent-rgb)/0.2)] bg-[#f3efe4] py-14 text-[#14201c] md:py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-2)]">
                Built for
              </p>
              <h2
                id="who-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
              >
                Teens, families, and the adults who guide them.
              </h2>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {AUDIENCES.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-[rgb(var(--brand-2-rgb)/0.28)] pt-5"
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Paths — home proof-strip green */}
        <section
          id="paths"
          aria-labelledby="paths-heading"
          className="scroll-mt-24 border-t border-[rgb(var(--accent-rgb)/0.35)] bg-gradient-to-b from-[#145c45] to-[rgb(var(--brand-2-rgb)/1)] py-14 md:py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Learning paths
                </p>
                <h2
                  id="paths-heading"
                  className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
                >
                  {PATHS_COUNT_LABEL} paths. {LESSONS_COUNT_LABEL} lessons. Real finish lines.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#e8e0cf]/90">
                  {PACING_BLURB} Start with literacy foundations or go deep into Python, data,
                  or cybersecurity.
                </p>
              </div>
              <Button
                asChild
                variant="secondary"
                className="rounded-full border-[rgb(var(--accent-rgb)/0.45)] bg-transparent text-[var(--accent)] hover:bg-[rgb(var(--accent-rgb)/0.1)]"
              >
                <Link href="/learning-paths">View all paths</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {LEARNING_PATHS.map((path) => (
                <Link
                  key={path.slug}
                  href={`/learning-paths/${path.slug}`}
                  className="group relative flex min-h-[11rem] flex-col justify-end overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.18)] bg-[#16352b] text-white"
                >
                  <Image
                    src={path.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16352b] via-[#16352b]/35 to-transparent" />
                  <div className="relative z-10 p-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {path.lessons} lessons
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold tracking-tight text-[#f7f3e8]">
                      {path.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons — mid dusk + inset panels like home */}
        <section
          id="lessons"
          aria-labelledby="lessons-heading"
          className="scroll-mt-24 border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#122c24] py-14 md:py-20"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Inside every lesson
              </p>
              <h2
                id="lessons-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
              >
                A premium rhythm learners can trust.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#c5d2cb]">
                Every lesson follows the same intentional arc — so support stays light and
                progress stays real, live or async.
              </p>
              <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                {LESSON_FLOW.map((step, idx) => (
                  <li
                    key={step.title}
                    className="rounded-2xl border border-[rgb(var(--accent-rgb)/0.16)] bg-[#0e241c]/80 p-5"
                  >
                    <p className="font-mono text-xs font-semibold text-[var(--accent)]">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-[#f7f3e8]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#c5d2cb]">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <figure className="relative min-h-[20rem] overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)] lg:col-span-6 lg:min-h-[26rem]">
              <ParallaxImage
                src="/images/product/path-detail-learning.png"
                alt="Learner working through a guided Kanam lesson"
                intensity={90}
                scale={1.28}
                className="object-center"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#122c24]/55 to-transparent" />
            </figure>
          </div>
        </section>

        {/* Progress + access */}
        <div className="border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#0e241c] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <BrandCtaBand
              id="progress"
              aria-labelledby="progress-heading"
              className="scroll-mt-24 rounded-2xl"
            >
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                <div>
                  <p className={brandCtaEyebrowClass}>Progress you can prove</p>
                  <h2 id="progress-heading" className={brandCtaTitleClass}>
                    Evidence of mastery — not busywork.
                  </h2>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#e8e0cf]/90 sm:text-base">
                    {PROOF.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div id="tech" className="scroll-mt-24">
                  <p className={brandCtaEyebrowClass}>Access anywhere</p>
                  <h2 className={brandCtaTitleClass}>Built for real homes and classrooms.</h2>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#e8e0cf]/90 sm:text-base">
                    {ACCESS.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-white/70">
                    {DEVICE_READY_BLURB}
                  </p>
                </div>
              </div>
            </BrandCtaBand>
          </div>
        </div>

        {/* Light breather — standards */}
        <section
          id="standards"
          aria-labelledby="standards-heading"
          className="scroll-mt-24 border-t border-[rgb(var(--accent-rgb)/0.2)] bg-[#f3efe4] py-14 text-[#14201c] md:py-16"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-8">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-2)]">
                Standards
              </p>
              <h2
                id="standards-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
              >
                Built to align with CSTA K–12 Computer Science Standards.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
                {STANDARDS_BLURB}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Button asChild>
                <Link href={siteConfig.links.standardsPdf} target="_blank" rel="noreferrer">
                  Standards alignment packet
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/educators">For schools &amp; leaders</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Closing — home final-panel energy */}
        <section
          aria-labelledby="how-cta-heading"
          className="relative overflow-hidden border-t border-[rgb(var(--accent-rgb)/0.35)] py-14 md:py-20"
        >
          <ParallaxImage
            src="/images/product/cohort-teens-learning.png"
            alt=""
            intensity={130}
            scale={1.34}
            className="object-center"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(100deg,rgba(20,92,69,0.92)_0%,rgba(36,120,100,0.86)_55%,rgba(11,47,36,0.78)_100%)]" />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div className="max-w-xl">
              <p className={brandCtaEyebrowClass}>Ready when you are</p>
              <h2
                id="how-cta-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
              >
                See the platform — then choose your path.
              </h2>
              <p className={brandCtaBodyClass}>
                Open a real guided lesson, explore the eight paths, or tell us about your
                learners. We’ll help you choose live tutoring, a family track, or a school
                and program pilot.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
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
                size="lg"
                variant="secondary"
                className={brandCtaSecondaryBtnClass}
              >
                <Link href="/contact">Contact Kanam</Link>
              </Button>
            </div>
          </div>
        </section>
      </FullBleed>
    </SubpageShell>
  );
}
