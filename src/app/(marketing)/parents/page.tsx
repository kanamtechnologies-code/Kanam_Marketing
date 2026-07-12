import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { LessonCanvasPreview } from "@/components/site/LessonCanvasPreview";
import { Button } from "@/components/ui/button";
import {
  DEVICE_READY_BLURB,
  DEVICE_READY_SHORT,
  LEARNING_PATHS,
  LESSONS_COUNT_LABEL,
  PACING_BLURB,
  PATHS_COUNT_LABEL,
} from "@/lib/learning-paths";
import { LIVE_ADD_ONS, PRICING } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For parents | Homeschool & enrichment | Kanam Academy",
  description:
    "Help your child build future-ready tech skills at home. Affordable async subscriptions or pay-per-session live online tutoring. Progress parents can see. Try a guided lesson free.",
};

const OPTIONS = [
  {
    title: "Live tutoring that moves them forward",
    body: "1:1 online sessions with a Kanam instructor — real guidance, accountability, and momentum your child can’t get from videos alone.",
    image: "/images/product/live-session-instructor.png",
    imageAlt: "Learner in a live online Kanam tutoring session",
    eyebrow: "Recommended",
    href: "#pricing",
    cta: "See tutoring →",
  },
  {
    title: "Async tracks that keep them practicing",
    body: "Structured learning tracks with coach notes, auto-checks, and progress you can see — so practice continues between live sessions.",
    image: "/images/product/teen-girl-coding.png",
    imageAlt: "Teen working through a structured Kanam lesson at home",
    eyebrow: "Platform",
    href: "#pricing",
    cta: "See platform →",
  },
  {
    title: "Homeschool enrichment that sticks",
    body: "Future-ready skills — coding, AI, data, cybersecurity, digital literacy — without you becoming the CS teacher.",
    image: "/images/product/family-dad-son.png",
    imageAlt: "Parent supporting a teen’s enrichment learning at home",
    eyebrow: "At home",
    href: "#how-it-works",
    cta: "See how it works →",
  },
] as const;

const TRUST = [
  "Try a real lesson first — guided demo, no account required",
  "Progress parents can see — roadmap, XP, badges, and capstones",
  "Clear pricing — async subscription and live sessions sold separately",
  "You don’t need to teach CS — coach notes and checks guide every lesson",
  `${DEVICE_READY_SHORT} · no special software to install`,
  "Skills that matter: coding, AI literacy, data, cybersecurity, digital citizenship",
] as const;

const STEPS = [
  {
    n: "01",
    title: "Try a free guided lesson",
    body: "See the real experience with your child — coach notes, practice, Run & check, and XP.",
  },
  {
    n: "02",
    title: "Book live tutoring",
    body: "Start with a trial session. Your child gets a Kanam instructor who unblocks, challenges, and keeps them moving.",
  },
  {
    n: "03",
    title: "Practice on the platform",
    body: "Between sessions, they work async tracks — and you see roadmap progress, XP, and what’s next.",
  },
] as const;

const HERO_PROOF = [
  { label: "Learning paths", value: PATHS_COUNT_LABEL },
  { label: "Interactive lessons", value: LESSONS_COUNT_LABEL },
  { label: "What parents get", value: "Real progress" },
  { label: "Learning style", value: "Async + live" },
] as const;

const FAQS = [
  {
    q: "Is Kanam right for my child?",
    a: "Kanam is built for teens and beginners learning tech — coding, AI, data, cybersecurity, and digital literacy. Paths start gentle and go deeper as confidence grows. Prior coding is not required.",
  },
  {
    q: "Should we get live tutoring?",
    a: "Yes — if you want faster progress, accountability, and a real instructor who can unblock your child in the moment. Pair live sessions with the async platform so they keep practicing between classes.",
  },
  {
    q: "How much does it cost?",
    a: `Live 1:1 tutoring is ${LIVE_ADD_ONS.oneToOne.price} (${LIVE_ADD_ONS.oneToOne.duration}; trial ${LIVE_ADD_ONS.oneToOne.trial}). Platform access is ${PRICING.family.price}, or ${PRICING.family.alt}. Sibling discount: 25% off platform for each additional learner at home.`,
  },
  {
    q: "Can we use this for homeschool enrichment?",
    a: `Yes. Families use Kanam for structured enrichment at home. ${PACING_BLURB} Chromebook and mobile ready — no special software.`,
  },
  {
    q: "Will I be able to see what they’re learning?",
    a: "Yes. Progress is visible — roadmap, lessons completed, XP, badges, and capstone projects — so you’re not guessing what “screen time” accomplished.",
  },
  {
    q: "What device do we need?",
    a: DEVICE_READY_BLURB,
  },
] as const;

export default function ParentsPage() {
  const [featured, ...rest] = OPTIONS;
  const [featuredPath, ...otherPaths] = LEARNING_PATHS;

  return (
    <SubpageShell overlapNav={false}>
      <div className="space-y-12 md:space-y-14 lg:space-y-16">
        {/* Hero — parent-first */}
        <section
          aria-labelledby="parents-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_22px_56px_rgba(15,23,42,0.16)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/product/family-learning.png"
              alt="Parent and child learning together with Kanam"
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
                For parents · Homeschool · Enrichment
              </p>
              <h1
                id="parents-hero-heading"
                className="mt-3 font-display text-[2.1rem] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06]"
              >
                Prepare your child
                <span className="block text-[rgb(var(--accent-rgb)/1)]">
                  for a tech-shaped future.
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                Live 1:1 tutoring plus structured async tracks — coding, AI, data,
                cybersecurity, and digital literacy. Progress you can actually see.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild>
                  <Link href="/contact">Book a tutoring trial</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
                >
                  <Link href="#pricing">See pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Facts */}
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgb(var(--brand-2-rgb)/0.22)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.22)] via-[rgb(var(--brand-rgb)/0.14)] to-[rgb(var(--accent-rgb)/0.35)] px-5 py-5 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] kanam-hex-pattern" />
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
            {HERO_PROOF.map((item, index) => (
              <div
                key={item.label}
                className={
                  index > 0
                    ? "sm:border-l sm:border-[rgb(var(--brand-2-rgb)/0.28)] sm:px-4 sm:first:pl-0"
                    : "sm:px-4 sm:pl-0"
                }
              >
                <div className="font-display text-2xl font-semibold tracking-tight text-[rgb(var(--brand-2-rgb)/1)] sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--brand-2-rgb)/0.72)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ways to learn */}
        <section aria-labelledby="options-heading" className="space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Ways to learn
            </p>
            <h2
              id="options-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Live guidance. Real practice. Progress you can see.
            </h2>
            <p className="mt-3 text-base text-[var(--muted)]">
              Book a tutor who teaches. Pair it with async tracks so skills stick between
              sessions.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
            <Link
              href={featured.href}
              className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_18px_44px_rgba(15,23,42,0.14)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(15,23,42,0.18)] sm:min-h-[26rem] lg:col-span-7 lg:min-h-[32rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2"
            >
              <div className="absolute inset-0">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/45 to-zinc-950/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.28)] via-transparent to-[rgb(var(--accent-rgb)/0.12)]" />
              </div>
              <div className="relative z-10 mt-auto p-6 sm:p-8 lg:p-9">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                  {featured.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                  {featured.body}
                </p>
                <p className="mt-4 text-sm font-semibold text-[rgb(var(--accent-rgb)/1)]">
                  {featured.cta}
                </p>
              </div>
            </Link>

            <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2 lg:gap-5">
              {rest.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex min-h-[16rem] flex-col overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_14px_36px_rgba(15,23,42,0.12)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,23,42,0.16)] sm:min-h-[17rem] lg:min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-zinc-950/15" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.25)] via-transparent to-[rgb(var(--accent-rgb)/0.1)]" />
                  </div>
                  <div className="relative z-10 mt-auto p-5 sm:p-6">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-white/80">{item.body}</p>
                    <p className="mt-3 text-sm font-semibold text-[rgb(var(--accent-rgb)/1)]">
                      {item.cta}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust / future */}
        <section
          aria-labelledby="trust-heading"
          className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10"
        >
          <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-zinc-900/10 shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
            <Image
              src="/images/product/family-mom-daughter.png"
              alt="Parent reviewing a child’s learning progress together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </figure>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Why parents choose Kanam
            </p>
            <h2
              id="trust-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Skills that prepare them — transparency that reassures you
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              The future asks for more than typing and apps. Kanam helps your child
              understand how technology works, use AI wisely, protect themselves online, and
              build real projects — at a price built for families.
            </p>
            <ul className="mt-5 space-y-3">
              {TRUST.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-snug text-zinc-800 sm:text-base">
                  <span
                    aria-hidden
                    className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="scroll-mt-24"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <div className="border-b border-zinc-900/8 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.12)] via-white to-[rgb(var(--accent-rgb)/0.14)] px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Family pricing
              </p>
              <h2
                id="pricing-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
              >
                Give your child a real instructor — not just another app
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Live 1:1 tutoring builds confidence faster. Pair it with our async
                platform so they keep practicing between sessions — with progress you can
                actually see.
              </p>
            </div>

            <div className="divide-y divide-zinc-900/10">
              {/* Live tutoring — lead with the sell */}
              <div className="px-6 py-6 sm:px-8">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                  Best results
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-zinc-950 sm:text-2xl">
                  1:1 live tutoring
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-zinc-600">
                  A Kanam instructor online — focused on your child. Unblock stuck moments,
                  keep them accountable, and turn “I tried” into real skills.
                </p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl bg-[rgb(var(--brand-2-rgb)/0.08)] px-4 py-4 ring-1 ring-[rgb(var(--brand-2-rgb)/0.2)]">
                    <dt className="text-sm font-medium text-zinc-600">Per session</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                      {LIVE_ADD_ONS.oneToOne.price.replace("/session", "")}
                    </dd>
                    <dd className="mt-1 text-xs text-zinc-500">
                      {LIVE_ADD_ONS.oneToOne.duration}
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 px-4 py-4">
                    <dt className="text-sm font-medium text-zinc-600">Try one session</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                      {LIVE_ADD_ONS.oneToOne.trial}
                    </dd>
                    <dd className="mt-1 text-xs text-zinc-500">Intro trial</dd>
                  </div>
                  {LIVE_ADD_ONS.oneToOne.packs.map((pack) => (
                    <div key={pack.label} className="rounded-2xl bg-zinc-50 px-4 py-4">
                      <dt className="text-sm font-medium text-zinc-600">{pack.label}</dt>
                      <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                        {pack.price}
                      </dd>
                      <dd className="mt-1 text-xs text-zinc-500">Save with a pack</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Async platform */}
              <div className="px-6 py-6 sm:px-8">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                  Pair with the platform
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-zinc-950 sm:text-2xl">
                  Async learning tracks
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-zinc-600">
                  Structured tracks with coach notes and auto-checks — so practice doesn’t
                  stop when the live session ends.
                </p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-zinc-50 px-4 py-4">
                    <dt className="text-sm font-medium text-zinc-600">Monthly subscription</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                      {PRICING.family.price}
                    </dd>
                    <dd className="mt-1 text-xs text-zinc-500">Ongoing access to all tracks</dd>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 px-4 py-4">
                    <dt className="text-sm font-medium text-zinc-600">Per learning track</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                      {PRICING.family.alt
                        .replace(/^or\s+/i, "")
                        .replace(/\s+per learning track$/i, "")}
                    </dd>
                    <dd className="mt-1 text-xs text-zinc-500">
                      One track · clear finish line
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-zinc-700">
                  <span className="font-semibold text-zinc-950">Sibling discount:</span>{" "}
                  25% off platform for each additional learner in the household.
                </p>
              </div>

              <div className="flex flex-col gap-4 bg-zinc-50/80 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <p className="text-sm font-medium text-zinc-800">
                  Ready to get your child a tutor? Start with a {LIVE_ADD_ONS.oneToOne.trial}{" "}
                  trial session.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <Link href="/contact">Book a tutoring trial</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href={siteConfig.links.pricingPdf} target="_blank" rel="noreferrer">
                      Full pricing sheet
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          aria-labelledby="how-heading"
          className="scroll-mt-24 relative overflow-hidden rounded-[1.5rem] border border-[rgb(var(--brand-2-rgb)/0.2)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.16)] via-white/80 to-[rgb(var(--accent-rgb)/0.22)] px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] kanam-hex-pattern" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              How it works for parents
            </p>
            <h2
              id="how-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Simple to start. Easy to trust.
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {STEPS.map((step) => (
                <div key={step.n}>
                  <p className="font-display text-sm font-semibold tabular-nums text-[rgb(var(--brand-2-rgb)/1)]">
                    {step.n}
                  </p>
                  <p className="mt-2 font-semibold text-zinc-950 sm:text-lg">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-snug text-zinc-700">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Try a free guided lesson
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Ask about your child</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Lesson preview */}
        <section aria-labelledby="demo-heading" className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              See it yourself
            </p>
            <h2
              id="demo-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              A real lesson — not a sales video
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Open the guided demo with your child. You’ll see coach notes, a practice
              workspace, and Run &amp; check feedback — the same experience they use every
              day.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Open the free demo
                </Link>
              </Button>
            </div>
          </div>
          <LessonCanvasPreview compact />
        </section>

        {/* Paths */}
        <section aria-labelledby="paths-heading" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                What they’ll learn
              </p>
              <h2
                id="paths-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
              >
                Five paths toward future-ready skills
              </h2>
              <p className="mt-3 text-base text-[var(--muted)]">
                Choose what fits your child’s curiosity. Beginners welcome — with room to grow.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href="/learning-paths">Browse all paths</Link>
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
            <Link
              href={`/learning-paths/${featuredPath.slug}`}
              className="group relative flex min-h-[18rem] flex-col overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_18px_44px_rgba(15,23,42,0.14)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(15,23,42,0.18)] sm:min-h-[20rem] lg:col-span-5 lg:min-h-[28rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2"
            >
              <div className="absolute inset-0">
                <Image
                  src={featuredPath.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/45 to-zinc-950/10" />
              </div>
              <div className="relative z-10 mt-auto p-6 sm:p-7">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                  {featuredPath.lessons} lessons
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {featuredPath.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-[rgb(var(--accent-rgb)/1)]">
                  {featuredPath.subtitle}
                </p>
              </div>
            </Link>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
              {otherPaths.map((path) => (
                <Link
                  key={path.slug}
                  href={`/learning-paths/${path.slug}`}
                  className="group relative flex min-h-[12rem] flex-col overflow-hidden rounded-[1.35rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_12px_28px_rgba(15,23,42,0.1)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={path.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-zinc-950/15" />
                  </div>
                  <div className="relative z-10 mt-auto p-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/65">
                      {path.lessons} lessons
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {path.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Parent FAQ
            </p>
            <h2
              id="faq-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Straight answers
            </h2>
          </div>
          <div className="divide-y divide-zinc-900/10 overflow-hidden rounded-[1.35rem] border border-zinc-900/10 bg-white/80">
            {FAQS.map((item) => (
              <div key={item.q} className="px-5 py-5 sm:px-6">
                <h3 className="font-semibold text-zinc-950">{item.q}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="cta-heading"
          className="relative overflow-hidden rounded-[1.5rem] border border-zinc-900/8 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.14)] via-[rgb(var(--background))] to-[rgb(var(--accent-rgb)/0.22)] px-6 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] kanam-hex-pattern" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Next step
            </p>
            <h2
              id="cta-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Get your child a Kanam tutor
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Start with a {LIVE_ADD_ONS.oneToOne.trial} trial session. Add async tracks so
              practice continues between classes — with progress you can see.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">Book a tutoring trial</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Try a free guided lesson
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
