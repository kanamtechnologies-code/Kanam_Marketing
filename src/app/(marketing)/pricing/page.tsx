import type { Metadata } from "next";
import Link from "next/link";

import {
  FullBleed,
  HomeHeroVeil,
  PageBand,
  duskEyebrowClass,
  duskGhostBtnClass,
  duskMutedClass,
  duskTitleClass,
  lightEyebrowClass,
  lightMutedClass,
  lightTitleClass,
} from "@/components/layout/PageBands";
import { SubpageShell } from "@/components/layout/SubpageShell";
import {
  brandCtaBodyClass,
  brandCtaEyebrowClass,
  brandCtaPrimaryBtnClass,
  brandCtaSecondaryBtnClass,
  brandCtaTitleClass,
} from "@/components/site/BrandCtaBand";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Button } from "@/components/ui/button";
import { billingLinks } from "@/lib/billing-links";
import {
  LIVE_ADD_ONS,
  PRICING,
  PRICING_CONTEXT,
  PRICING_INCLUDES,
  TRACK_PRICE_RANGE_LABEL,
  TRACK_PRICES,
  TRACK_PROGRAM,
  TRACK_VALUE_BLURB,
} from "@/lib/pricing";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing | Kanam Academy",
  description:
    "Kanam Academy pricing — $30/mo family access, full learning tracks from $100–$250, optional 1:1 tutoring from $49 trial, and custom quotes for schools and programs.",
};

const PARTNER_PLANS = [
  PRICING.classroom,
  PRICING.site,
  PRICING.program,
  PRICING.scout,
] as const;

export default function PricingPage() {
  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        {/* Hero — keep the current atmospheric feel */}
        <section
          aria-labelledby="pricing-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]"
        >
          <div className="absolute inset-0">
            <ParallaxImage
              src="/images/product/pricing-hero.png"
              alt="Teen learner working on a Chromebook while a parent reviews progress nearby"
              priority
              intensity={140}
              scale={1.36}
              className="object-[62%_center] sm:object-[58%_center]"
              sizes="100vw"
            />
            <HomeHeroVeil />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[30rem] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-28 sm:min-h-[34rem] sm:px-6 sm:pb-16 lg:min-h-[38rem] lg:px-8">
            <div className="max-w-xl">
              <p className={duskEyebrowClass}>Pricing</p>
              <h1
                id="pricing-hero-heading"
                className={cn(
                  "mt-3 text-[2.15rem] sm:text-4xl lg:text-[3rem] lg:leading-[1.05]",
                  duskTitleClass
                )}
              >
                Clear paths.
                <span className="block text-[var(--accent)]">Clear prices.</span>
              </h1>
              <p className={cn("mt-5 text-base sm:text-lg", duskMutedClass)}>
                Choose platform access, unlock a full track, or add live tutoring — then request a
                custom quote when you bring Kanam to a school, program, or troop.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                  <Link href="#families">Family pricing</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/45 bg-white/15 text-white hover:bg-white/25"
                >
                  <Link href="#schools">Schools &amp; programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* At-a-glance — premium proof strip */}
        <PageBand tone="light" className="!py-10 md:!py-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {[
              { value: PRICING.family.price, label: "All tracks · monthly" },
              { value: TRACK_PRICE_RANGE_LABEL, label: "One full track" },
              { value: LIVE_ADD_ONS.oneToOne.trial, label: "Tutoring trial" },
              { value: "Custom", label: "Schools & programs" },
            ].map((item) => (
              <div key={item.label} className="min-w-0">
                <div className="font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </PageBand>

        {/* Families — dusk storefront tiers */}
        <PageBand tone="proof" id="families" aria-labelledby="families-heading">
          <div className="max-w-2xl">
            <p className={duskEyebrowClass}>Families &amp; individual learners</p>
            <h2
              id="families-heading"
              className={cn("mt-2 text-3xl sm:text-4xl", duskTitleClass)}
            >
              Platform first. Live help when you want it.
            </h2>
            <p className={cn("mt-4 text-base sm:text-lg", duskMutedClass)}>
              {TRACK_VALUE_BLURB}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6">
            {/* Monthly spotlight */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[rgb(var(--accent-rgb)/0.45)] bg-[#0e241c] p-7 sm:p-9 lg:col-span-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgb(var(--accent-rgb)/0.22)_0%,transparent_70%)]"
              />
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Most flexible
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl">
                Monthly access
              </h3>
              <p className="mt-5 font-display text-5xl font-semibold tracking-tight text-[var(--accent)] sm:text-6xl">
                {PRICING.family.price}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#c5d2cb]">
                All eight learning paths — XP, badges, and progress adults can see. Stay as long as
                you need.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                  <Link
                    href={billingLinks.subscription()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe {PRICING.family.price}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Per-track companion */}
            <div className="flex flex-col justify-between rounded-[1.75rem] border border-[rgb(var(--accent-rgb)/0.22)] bg-[#0e241c]/70 p-7 sm:p-9 lg:col-span-5">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Clear finish line
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#f7f3e8]">
                  One full track
                </h3>
                <p className="mt-5 font-display text-4xl font-semibold tracking-tight text-[#f7f3e8] sm:text-5xl">
                  {TRACK_PRICE_RANGE_LABEL}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#c5d2cb]">
                  A complete program — {TRACK_PROGRAM.shortLabel}. Not a single session.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className={duskGhostBtnClass}>
                  <Link
                    href={billingLinks.tracks()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse tracks in billing
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Track menu — single elegant column */}
          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[rgb(var(--accent-rgb)/0.28)] pb-4">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Full track prices
                </p>
                <p className="mt-1 text-sm text-[#a8b8b0]">
                  Unlock one complete path · sibling discount 25% off platform for each additional
                  learner
                </p>
              </div>
            </div>

            <ul className="mt-2 divide-y divide-[rgb(var(--accent-rgb)/0.16)]">
              {TRACK_PRICES.map((track) => (
                <li
                  key={track.slug}
                  className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <Link
                    href={`/learning-paths/${track.slug}`}
                    className="min-w-0 font-display text-xl font-semibold tracking-tight text-[#f7f3e8] transition hover:text-[var(--accent)] sm:text-2xl"
                  >
                    {track.name}
                  </Link>
                  <div className="flex items-center justify-between gap-6 sm:justify-end sm:gap-8">
                    <span className="font-display text-2xl font-semibold tabular-nums text-[var(--accent)]">
                      {track.priceLabel}
                    </span>
                    <Link
                      href={billingLinks.track(track.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 min-w-[5.5rem] items-center justify-center rounded-full border border-[rgb(var(--accent-rgb)/0.55)] bg-[rgb(var(--accent-rgb)/0.12)] px-5 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)] hover:bg-[rgb(var(--accent-rgb)/0.22)]"
                    >
                      Buy
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </PageBand>

        {/* Tutoring — keep photo-led feel */}
        <section
          id="tutoring"
          aria-labelledby="tutoring-heading"
          className="scroll-mt-24 border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#0e241c]"
        >
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <figure className="relative min-h-[20rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[32rem]">
              <ParallaxImage
                src="/images/product/pricing-tutoring.png"
                alt="Learner in a live online tutoring session with a Kanam instructor"
                intensity={90}
                scale={1.28}
                className="object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#0e241c]/75 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0e241c]/60" />
            </figure>

            <div className="flex flex-col justify-center px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
              <p className={duskEyebrowClass}>Optional live tutoring</p>
              <h2
                id="tutoring-heading"
                className={cn("mt-2 text-3xl sm:text-4xl", duskTitleClass)}
              >
                {LIVE_ADD_ONS.oneToOne.title}
              </h2>
              <p className={cn("mt-4 max-w-md text-base", duskMutedClass)}>
                {LIVE_ADD_ONS.oneToOne.detail}
              </p>

              <div className="mt-10 space-y-0 divide-y divide-[rgb(var(--accent-rgb)/0.18)] border-y border-[rgb(var(--accent-rgb)/0.18)]">
                <div className="flex items-baseline justify-between gap-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-[#f7f3e8]">Intro trial</p>
                    <p className="mt-0.5 text-xs text-[#a8b8b0]">
                      {LIVE_ADD_ONS.oneToOne.duration}
                    </p>
                  </div>
                  <p className="font-display text-3xl font-semibold text-[var(--accent)]">
                    {LIVE_ADD_ONS.oneToOne.trial}
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-[#f7f3e8]">Per session</p>
                    <p className="mt-0.5 text-xs text-[#a8b8b0]">
                      {LIVE_ADD_ONS.oneToOne.duration}
                    </p>
                  </div>
                  <p className="font-display text-3xl font-semibold text-[var(--accent)]">
                    {LIVE_ADD_ONS.oneToOne.sessionPriceLabel}
                  </p>
                </div>
                {LIVE_ADD_ONS.oneToOne.bundles.map((bundle) => (
                  <div
                    key={bundle.label}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#f7f3e8]">{bundle.label}</p>
                      <p className="mt-0.5 text-xs text-[#a8b8b0]">{bundle.note}</p>
                    </div>
                    <p className="font-display text-3xl font-semibold text-[var(--accent)]">
                      {bundle.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                  <Link
                    href={billingLinks.tutoringTrial()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a {LIVE_ADD_ONS.oneToOne.trial} trial
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className={duskGhostBtnClass}>
                  <Link
                    href={billingLinks.tutoring()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    All tutoring options
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Schools */}
        <PageBand tone="mid" id="schools" aria-labelledby="schools-heading">
          <div className="max-w-2xl">
            <p className={duskEyebrowClass}>Schools · Programs · Troops</p>
            <h2
              id="schools-heading"
              className={cn("mt-2 text-3xl sm:text-4xl", duskTitleClass)}
            >
              Custom quotes for your cohort.
            </h2>
            <p className={cn("mt-4 text-base sm:text-lg", duskMutedClass)}>
              Kanam instructors teach live — online or in person where available. Your team hosts
              learners and schedule. Roster progress and a CSTA standards packet included in the
              conversation.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.75rem] border border-[rgb(var(--accent-rgb)/0.22)] bg-[rgb(var(--accent-rgb)/0.22)] sm:grid-cols-2">
            {PARTNER_PLANS.map((plan) => (
              <div key={plan.title} className="bg-[#122c24] p-7 sm:p-8">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  {plan.price}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#f7f3e8] sm:text-2xl">
                  {plan.title}
                </h3>
                <p className="mt-1 text-sm text-[#a8b8b0]">{plan.alt}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#c5d2cb]">{plan.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-[rgb(var(--accent-rgb)/0.28)] bg-[#0e241c]/80 px-7 py-8 sm:flex-row sm:items-center sm:px-9">
            <div className="max-w-xl">
              <h3 className="font-display text-xl font-semibold text-[#f7f3e8] sm:text-2xl">
                {LIVE_ADD_ONS.groupLive.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#c5d2cb]">
                {LIVE_ADD_ONS.groupLive.detail}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button asChild className={brandCtaPrimaryBtnClass}>
                <Link href="/contact">Request a quote</Link>
              </Button>
              <Button asChild variant="secondary" className={duskGhostBtnClass}>
                <Link href="/educators">For schools &amp; leaders</Link>
              </Button>
            </div>
          </div>
        </PageBand>

        {/* Includes — calm light breather */}
        <PageBand tone="light" aria-labelledby="includes-heading">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className={lightEyebrowClass}>Always included</p>
              <h2
                id="includes-heading"
                className={cn("mt-2 text-3xl", lightTitleClass)}
              >
                Built into every plan.
              </h2>
              <ul className="mt-8 space-y-4">
                {PRICING_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-zinc-900/8 pb-4 text-sm leading-relaxed text-zinc-700 last:border-0"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-6 shrink-0 bg-[var(--brand-2)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={lightEyebrowClass}>Good to know</p>
              <h2 className={cn("mt-2 text-3xl", lightTitleClass)}>
                Platform and live stay separate.
              </h2>
              <div className="mt-8 space-y-8">
                {PRICING_CONTEXT.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-display text-lg font-semibold text-zinc-950">
                      {item.title}
                    </h3>
                    <p className={cn("mt-2 text-sm sm:text-base", lightMutedClass)}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageBand>

        {/* Closing */}
        <section
          aria-labelledby="pricing-cta-heading"
          className="relative overflow-hidden border-t border-[rgb(var(--accent-rgb)/0.35)] py-16 md:py-24"
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
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div className="max-w-xl">
              <p className={brandCtaEyebrowClass}>Ready when you are</p>
              <h2 id="pricing-cta-heading" className={brandCtaTitleClass}>
                Try a lesson — then choose how you pay.
              </h2>
              <p className={brandCtaBodyClass}>
                Open the guided demo with no account, buy in the learning app, or request a pilot
                for your school or program.
              </p>
              <p className="mt-4 text-sm text-white/70">
                Prefer a printable sheet?{" "}
                <Link
                  href={siteConfig.links.pricingPdf}
                  className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Open the pricing one-pager
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Try the guided lesson
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className={brandCtaSecondaryBtnClass}>
                <Link
                  href={billingLinks.storefront()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open billing
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className={brandCtaSecondaryBtnClass}>
                <Link href="/contact">Request a pilot</Link>
              </Button>
            </div>
          </div>
        </section>
      </FullBleed>
    </SubpageShell>
  );
}
