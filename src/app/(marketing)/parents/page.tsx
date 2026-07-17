import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SubpageShell } from "@/components/layout/SubpageShell";
import {
  BrandCtaBand,
  brandCtaBodyClass,
  brandCtaEyebrowClass,
  brandCtaPrimaryBtnClass,
  brandCtaSecondaryBtnClass,
  brandCtaTitleClass,
} from "@/components/site/BrandCtaBand";
import {
  duskEyebrowClass,
  duskGhostBtnClass,
  duskMutedClass,
  duskTitleClass,
  FullBleed,
  HomeHeroVeil,
  lightEyebrowClass,
  lightMutedClass,
  lightTitleClass,
  PageBand,
} from "@/components/layout/PageBands";
import { LessonCanvasPreview } from "@/components/site/LessonCanvasPreview";
import { Button } from "@/components/ui/button";
import {
  DEVICE_READY_BLURB,
  DEVICE_READY_SHORT,
  LEARNING_PATHS,
  PACING_BLURB,
} from "@/lib/learning-paths";
import {
  LIVE_ADD_ONS,
  PRICING,
  TRACK_PRICE_RANGE_LABEL,
  TRACK_PRICES,
  TRACK_PROGRAM,
} from "@/lib/pricing";
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
    body: "Future-ready skills — coding, AI, data, cybersecurity, financial literacy, digital literacy — without you becoming the CS teacher.",
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
  "Curriculum aligns with CSTA K–12 Computer Science Standards",
  `${DEVICE_READY_SHORT} · no special software to install`,
  "Skills that matter: coding, AI literacy, data, cybersecurity, financial literacy, digital citizenship",
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
  { label: "Live tutoring", value: "1:1" },
  { label: "Trial session", value: LIVE_ADD_ONS.oneToOne.trial },
  { label: "Parents see", value: "Real progress" },
  { label: "Between sessions", value: "Async practice" },
] as const;

const FAQS = [
  {
    q: "Is Kanam right for my child?",
    a: "Kanam is built for teens and beginners learning tech — coding, AI, data, cybersecurity, financial literacy, and digital literacy. Paths start gentle and go deeper as confidence grows. Prior coding is not required.",
  },
  {
    q: "Should we get live tutoring?",
    a: "Yes — if you want faster progress, accountability, and a real instructor who can unblock your child in the moment. Pair live sessions with the async platform so they keep practicing between classes.",
  },
  {
    q: "How much does it cost?",
    a: `Live 1:1 tutoring is ${LIVE_ADD_ONS.oneToOne.sessionPriceLabel}/session (${LIVE_ADD_ONS.oneToOne.duration}; trial ${LIVE_ADD_ONS.oneToOne.trial}). Platform access is ${PRICING.family.price} for all tracks, or one full track (${TRACK_PROGRAM.label}, ${TRACK_PRICE_RANGE_LABEL}). Sibling discount: 25% off platform for each additional learner at home.`,
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
      <FullBleed>
        {/* Hero — parent-first */}
        <section
          aria-labelledby="parents-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]"
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
            <HomeHeroVeil />
          </div>
          <div className="relative z-10 mx-auto flex min-h-[29rem] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-28 sm:min-h-[33rem] sm:px-6 sm:pb-16 lg:min-h-[37rem] lg:px-8">
            <div className="max-w-xl lg:max-w-2xl">
              <p className={duskEyebrowClass}>
                For parents · Homeschool · Enrichment
              </p>
              <h1
                id="parents-hero-heading"
                className="mt-3 font-display text-[2.15rem] font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl lg:text-[3rem] lg:leading-[1.05]"
              >
                Prepare your child
                <span className="block text-[var(--accent)]">
                  for a tech-shaped future.
                </span>
              </h1>
              <p className={`mt-5 max-w-xl text-base sm:text-lg ${duskMutedClass}`}>
                Live 1:1 tutoring plus structured async tracks — coding, AI, data,
                cybersecurity, financial literacy, and digital literacy. Progress you can actually see.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                  <Link href="/contact">Book a tutoring trial</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className={brandCtaSecondaryBtnClass}
                >
                  <Link href="#pricing">See pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <PageBand tone="proof" className="py-8 md:py-10">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-0">
            {HERO_PROOF.map((item, index) => (
              <div
                key={item.label}
                className={
                  index > 0
                    ? "sm:border-l sm:border-[rgb(var(--accent-rgb)/0.28)] sm:px-6 sm:first:pl-0"
                    : "sm:px-6 sm:pl-0"
                }
              >
                <div className="font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </PageBand>

        {/* Ways to learn */}
        <PageBand tone="base" aria-labelledby="options-heading">
          <div className="max-w-2xl">
            <p className={duskEyebrowClass}>
              Ways to learn
            </p>
            <h2
              id="options-heading"
              className={`mt-2 text-3xl sm:text-4xl ${duskTitleClass}`}
            >
              Live guidance. Real practice. Progress you can see.
            </h2>
            <p className={`mt-4 text-base sm:text-lg ${duskMutedClass}`}>
              Book a tutor who teaches. Pair it with async tracks so skills stick between
              sessions.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5">
            <Link
              href={featured.href}
              className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)] bg-[#16352b] transition-transform duration-500 hover:-translate-y-0.5 sm:min-h-[26rem] lg:col-span-7 lg:min-h-[32rem]"
            >
              <div className="absolute inset-0">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e241c]/95 via-[#0e241c]/45 to-transparent" />
              </div>
              <div className="relative z-10 mt-auto p-6 sm:p-8 lg:p-9">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {featured.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#c5d2cb] sm:text-base">
                  {featured.body}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  {featured.cta}
                </p>
              </div>
            </Link>

            <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2 lg:gap-5">
              {rest.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex min-h-[16rem] flex-col overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)] bg-[#16352b] transition-transform duration-500 hover:-translate-y-0.5 sm:min-h-[17rem] lg:min-h-0"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e241c]/95 via-[#0e241c]/50 to-transparent" />
                  </div>
                  <div className="relative z-10 mt-auto p-5 sm:p-6">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-[#f7f3e8] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-[#c5d2cb]">{item.body}</p>
                    <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
                      {item.cta}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </PageBand>

        {/* Trust / future */}
        <PageBand
          tone="mid"
          aria-labelledby="trust-heading"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)]">
            <Image
              src="/images/product/family-mom-daughter.png"
              alt="Parent reviewing a child’s learning progress together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </figure>
          <div>
            <p className={duskEyebrowClass}>
              Why parents choose Kanam
            </p>
            <h2
              id="trust-heading"
              className={`mt-2 text-2xl sm:text-3xl ${duskTitleClass}`}
            >
              Skills that prepare them — transparency that reassures you
            </h2>
            <p className={`mt-4 text-sm sm:text-base ${duskMutedClass}`}>
              The future asks for more than typing and apps. Kanam helps your child
              understand how technology works, use AI wisely, protect themselves online, and
              build real projects — at a price built for families.
            </p>
            <ul className="mt-5 space-y-3">
              {TRUST.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-snug text-[#c5d2cb] sm:text-base">
                  <span
                    aria-hidden
                    className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </PageBand>

        {/* Pricing */}
        <PageBand
          tone="light"
          id="pricing"
          aria-labelledby="pricing-heading"
        >
          <div className="overflow-hidden border-y border-[rgb(var(--brand-2-rgb)/0.24)]">
            <div className="bg-[#e8e2d3] px-1 pb-7 pt-1 sm:pb-8">
              <div className="px-5 py-6 sm:px-7">
              <p className={lightEyebrowClass}>
                Family pricing
              </p>
              <h2
                id="pricing-heading"
                className={`mt-2 text-2xl sm:text-3xl ${lightTitleClass}`}
              >
                Give your child a real instructor — not just another app
              </h2>
              <p className={`mt-3 max-w-2xl text-sm sm:text-base ${lightMutedClass}`}>
                Live 1:1 tutoring builds confidence faster. Pair it with our async
                platform so they keep practicing between sessions — with progress you can
                actually see.
              </p>
            </div>
            </div>

            <div className="divide-y divide-[rgb(var(--brand-2-rgb)/0.18)] bg-[#f3efe4]">
              {/* Live tutoring — lead with the sell */}
              <div className="px-5 py-7 sm:px-7">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                  Best results
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-zinc-950 sm:text-2xl">
                  1:1 live tutoring
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
                  A Kanam instructor online — focused on your child. Unblock stuck moments,
                  keep them accountable, and turn “I tried” into real skills.
                </p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="border-t-2 border-[var(--brand-2)] bg-[#e8e2d3] px-4 py-4">
                    <dt className="text-sm font-medium text-[var(--muted)]">Per session</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                      {LIVE_ADD_ONS.oneToOne.price.replace("/session", "")}
                    </dd>
                    <dd className="mt-1 text-xs text-zinc-500">
                      {LIVE_ADD_ONS.oneToOne.duration}
                    </dd>
                  </div>
                  <div className="border-t border-[rgb(var(--brand-2-rgb)/0.28)] bg-[#e8e2d3] px-4 py-4">
                    <dt className="text-sm font-medium text-[var(--muted)]">Try one session</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                      {LIVE_ADD_ONS.oneToOne.trial}
                    </dd>
                    <dd className="mt-1 text-xs text-zinc-500">Intro trial</dd>
                  </div>
                  {LIVE_ADD_ONS.oneToOne.bundles.map((bundle) => (
                    <div key={bundle.label} className="border-t border-[rgb(var(--brand-2-rgb)/0.28)] bg-[#e8e2d3] px-4 py-4">
                      <dt className="text-sm font-medium text-[var(--muted)]">{bundle.label}</dt>
                      <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                        {bundle.price}
                      </dd>
                      <dd className="mt-1 text-xs text-zinc-500">{bundle.note}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Async platform */}
              <div className="px-5 py-7 sm:px-7">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                  Pair with the platform
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-zinc-950 sm:text-2xl">
                  Async learning tracks
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
                  Structured tracks with coach notes and auto-checks — each full track is{" "}
                  {TRACK_PROGRAM.label}, so practice doesn’t stop when the live session ends.
                </p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="border-t border-[rgb(var(--brand-2-rgb)/0.28)] bg-[#e8e2d3] px-4 py-4">
                    <dt className="text-sm font-medium text-[var(--muted)]">Monthly subscription</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                      {PRICING.family.price}
                    </dd>
                    <dd className="mt-1 text-xs text-zinc-500">Ongoing access to all tracks</dd>
                  </div>
                  <div className="border-t border-[rgb(var(--brand-2-rgb)/0.28)] bg-[#e8e2d3] px-4 py-4">
                    <dt className="text-sm font-medium text-[var(--muted)]">Per learning track</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                      {TRACK_PRICE_RANGE_LABEL}
                    </dd>
                    <dd className="mt-1 text-xs text-zinc-500">
                      Full program · {TRACK_PROGRAM.shortLabel}
                    </dd>
                  </div>
                </dl>
                <ul className="mt-4 grid gap-1.5 text-sm text-zinc-700 sm:grid-cols-2">
                  {TRACK_PRICES.map((track) => (
                    <li key={track.slug} className="flex justify-between gap-3 border-b border-zinc-900/6 py-1.5">
                      <span>{track.name}</span>
                      <span className="font-semibold text-zinc-950">{track.priceLabel}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-zinc-700">
                  <span className="font-semibold text-zinc-950">Sibling discount:</span>{" "}
                  25% off platform for each additional learner in the household.
                </p>
              </div>

              <div className="flex flex-col gap-4 bg-[#e8e2d3] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
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
        </PageBand>

        {/* How it works */}
        <PageBand
          tone="proof"
          id="how-it-works"
          aria-labelledby="how-heading"
        >
            <p className={duskEyebrowClass}>
              How it works for parents
            </p>
            <h2
              id="how-heading"
              className={`mt-2 text-2xl sm:text-3xl ${duskTitleClass}`}
            >
              Simple to start. Easy to trust.
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {STEPS.map((step) => (
                <div key={step.n}>
                  <p className="font-display text-sm font-semibold tabular-nums text-[rgb(var(--accent-rgb)/1)]">
                    {step.n}
                  </p>
                  <p className="mt-2 font-semibold text-[#f7f3e8] sm:text-lg">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-snug text-[#c5d2cb]">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className={brandCtaPrimaryBtnClass}>
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Try a free guided lesson
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className={brandCtaSecondaryBtnClass}
              >
                <Link href="/contact">Ask about your child</Link>
              </Button>
            </div>
        </PageBand>

        {/* Lesson preview */}
        <PageBand tone="mid" aria-labelledby="demo-heading">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <p className={duskEyebrowClass}>
              See it yourself
            </p>
            <h2
              id="demo-heading"
              className={`mt-2 text-2xl sm:text-3xl ${duskTitleClass}`}
            >
              A real lesson — not a sales video
            </h2>
            <p className={`mt-3 text-sm sm:text-base ${duskMutedClass}`}>
              Open the guided demo with your child. You’ll see coach notes, a practice
              workspace, and Run &amp; check feedback — the same experience they use every
              day.
            </p>
            <div className="mt-6">
              <Button asChild className={brandCtaPrimaryBtnClass}>
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Open the free demo
                </Link>
              </Button>
            </div>
          </div>
          <LessonCanvasPreview compact />
          </div>
        </PageBand>

        {/* Paths */}
        <PageBand tone="base" aria-labelledby="paths-heading">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className={duskEyebrowClass}>
                What they’ll learn
              </p>
              <h2
                id="paths-heading"
                className={`mt-2 text-3xl sm:text-4xl ${duskTitleClass}`}
              >
                Six paths toward future-ready skills
              </h2>
              <p className={`mt-3 text-base ${duskMutedClass}`}>
                Choose what fits your child’s curiosity. Beginners welcome — with room to grow.
              </p>
            </div>
            <Button asChild variant="secondary" className={duskGhostBtnClass}>
              <Link href="/learning-paths">Browse all paths</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:gap-5">
            <Link
              href={`/learning-paths/${featuredPath.slug}`}
              className="group relative flex min-h-[18rem] flex-col overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)] bg-[#16352b] transition-transform duration-500 hover:-translate-y-0.5 sm:min-h-[20rem] lg:col-span-5 lg:min-h-[28rem]"
            >
              <div className="absolute inset-0">
                <Image
                  src={featuredPath.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e241c]/95 via-[#0e241c]/45 to-transparent" />
              </div>
              <div className="relative z-10 mt-auto p-6 sm:p-7">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {featuredPath.lessons} lessons
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl">
                  {featuredPath.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                  {featuredPath.subtitle}
                </p>
              </div>
            </Link>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
              {otherPaths.map((path) => (
                <Link
                  key={path.slug}
                  href={`/learning-paths/${path.slug}`}
                  className="group relative flex min-h-[12rem] flex-col overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)] bg-[#16352b] transition-transform duration-500 hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={path.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e241c]/95 via-[#0e241c]/50 to-transparent" />
                  </div>
                  <div className="relative z-10 mt-auto p-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {path.lessons} lessons
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-[#f7f3e8] sm:text-xl">
                      {path.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </PageBand>

        {/* FAQ */}
        <PageBand tone="light" aria-labelledby="faq-heading">
          <div>
            <p className={lightEyebrowClass}>
              Parent FAQ
            </p>
            <h2
              id="faq-heading"
              className={`mt-2 text-2xl sm:text-3xl ${lightTitleClass}`}
            >
              Straight answers
            </h2>
          </div>
          <div className="mt-7 divide-y divide-[rgb(var(--brand-2-rgb)/0.18)] border-y border-[rgb(var(--brand-2-rgb)/0.28)]">
            {FAQS.map((item) => (
              <div key={item.q} className="px-1 py-5 sm:px-2">
                <h3 className="font-semibold text-zinc-950">{item.q}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
              </div>
            ))}
          </div>
        </PageBand>

        {/* CTA */}
        <div className="bg-[#0e241c] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
        <BrandCtaBand aria-labelledby="cta-heading">
          <div className="max-w-2xl">
            <p className={brandCtaEyebrowClass}>Next step</p>
            <div
              aria-hidden
              className="mt-3 h-px w-12 bg-gradient-to-r from-[var(--accent)] to-transparent"
            />
            <h2 id="cta-heading" className={brandCtaTitleClass}>
              Give your child a real Kanam tutor
            </h2>
            <p className={brandCtaBodyClass}>
              Start with a {LIVE_ADD_ONS.oneToOne.trial} trial session. Add async tracks so
              practice continues between classes — with progress you can see.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                <Link href="/contact">Book a tutoring trial</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className={brandCtaSecondaryBtnClass}
              >
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Try a free guided lesson
                </Link>
              </Button>
            </div>
          </div>
        </BrandCtaBand>
        </div>
        </div>
      </FullBleed>
    </SubpageShell>
  );
}
