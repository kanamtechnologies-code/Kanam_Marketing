import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PrintButton } from "@/components/site/PrintButton";
import {
  LIVE_ADD_ONS,
  PRICING,
  PRICING_CONTEXT,
  PRICING_INCLUDES,
  PRICING_OPTIONS,
  TRACK_PRICES,
  TRACK_PROGRAM,
  TRACK_VALUE_BLURB,
} from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kanam Academy pricing one-pager",
  description:
    "Kanam Academy pricing — $30/mo family subscription, full learning tracks from $100–$250, plus optional 1:1 tutoring from $49 trial / $90 per session.",
  robots: { index: true, follow: true },
};

const SITE_URL = "https://www.kanamacademy.com";

export default function PricingOnePagerPage() {
  const tiers = [
    PRICING.family,
    PRICING.program,
    PRICING.scout,
    PRICING.classroom,
    PRICING.site,
  ];

  return (
    <>
      <div className="mx-auto flex w-full max-w-[8.5in] items-center justify-between gap-3 px-4 py-4 print:hidden sm:px-6">
        <p className="text-sm text-[var(--muted)]">
          Share this page or save as PDF for email.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <PrintButton />
          <Link
            href="/one-pager/standards"
            className="text-sm font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
          >
            Standards
          </Link>
          <Link
            href="/one-pager"
            className="text-sm font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
          >
            Product one-pager
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
          >
            Back to site
          </Link>
        </div>
      </div>

      <article className="one-pager mx-auto w-full max-w-[8.5in] bg-[var(--background)] px-4 pb-10 sm:px-6 print:max-w-none print:px-[0.4in] print:pb-0 print:pt-0">
        <header className="relative overflow-hidden rounded-2xl border border-[rgb(var(--brand-2-rgb)/0.2)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-rgb)/0.92)] to-[rgb(var(--brand-2-rgb)/0.88)] px-5 py-4 text-white print:rounded-xl print:px-4 print:py-3.5 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_45%),radial-gradient(circle_at_85%_10%,rgb(var(--accent-rgb)/0.9)_0,transparent_35%)]" />
          <div className="relative flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/95 ring-2 ring-white/40">
                <Image
                  src="/images/Logo.png"
                  alt=""
                  fill
                  className="object-contain p-1"
                  sizes="40px"
                  priority
                />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                  {siteConfig.name}
                </p>
                <p className="text-sm font-medium text-white/85">
                  Pricing one-pager · Platform + optional live tutoring
                </p>
              </div>
            </div>
            <div className="text-right text-xs leading-relaxed text-white/80 sm:text-sm">
              <p className="font-semibold text-white">{SITE_URL}</p>
              <p>{siteConfig.links.email}</p>
              <p>{siteConfig.links.phone}</p>
            </div>
          </div>
        </header>

        <section className="mt-3.5 print:mt-2.5">
          <h1 className="font-display text-[1.45rem] font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-[1.6rem] print:text-[1.35rem]">
            Clear pricing for families, programs &amp; schools
          </h1>
          <p className="mt-1.5 max-w-3xl text-[0.88rem] leading-relaxed text-[var(--muted)] print:text-[0.78rem]">
            Family subscription is {PRICING.family.price}, or {PRICING.family.alt}. Optional
            live tutoring with industry professionals is priced separately. Programs and
            schools are quoted to fit your cohort (grades 6–12). Final pricing confirmed in
            writing before you start.
          </p>
        </section>

        <section className="mt-3 grid gap-1.5 sm:grid-cols-2 print:mt-2 print:gap-1.5">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="rounded-xl border border-zinc-900/10 bg-white px-3 py-2.5 print:rounded-lg print:px-2.5 print:py-2"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                <h2 className="font-display text-[0.88rem] font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                  {tier.title}
                </h2>
                <p className="font-display text-base font-semibold text-[var(--brand-2)] print:text-[0.95rem]">
                  {tier.price}
                </p>
              </div>
              <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                {tier.alt}
              </p>
              <p className="mt-1 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.66rem]">
                {tier.detail}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-3.5 print:mt-2.5">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            Learning track prices (self-serve)
          </h2>
          <p className="mt-1 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.66rem]">
            {TRACK_VALUE_BLURB}
          </p>
          <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            Full track · {TRACK_PROGRAM.shortLabel}
          </p>
          <div className="mt-1.5 grid gap-1 sm:grid-cols-2 print:gap-1">
            {TRACK_PRICES.map((track) => (
              <div
                key={track.slug}
                className="flex items-baseline justify-between gap-2 rounded-lg border border-zinc-900/10 bg-white px-3 py-2 print:px-2.5 print:py-1.5"
              >
                <p className="text-[0.78rem] font-medium text-[var(--foreground)] print:text-[0.7rem]">
                  {track.name}
                </p>
                <p className="font-display text-sm font-semibold text-[var(--brand-2)] print:text-[0.8rem]">
                  {track.priceLabel}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-3.5 print:mt-2.5">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            Optional live instruction (separate cost)
          </h2>
          <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2 print:gap-1.5">
            <div className="rounded-xl border border-[rgb(var(--brand-2-rgb)/0.25)] bg-[rgb(var(--brand-2-rgb)/0.06)] px-3 py-2.5 print:rounded-lg print:px-2.5 print:py-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                <h3 className="font-display text-[0.88rem] font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                  {LIVE_ADD_ONS.oneToOne.title}
                </h3>
                <p className="font-display text-base font-semibold text-[var(--brand-2)] print:text-[0.95rem]">
                  {LIVE_ADD_ONS.oneToOne.sessionPriceLabel}/session
                </p>
              </div>
              <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                {LIVE_ADD_ONS.oneToOne.duration}
              </p>
              <ul className="mt-1.5 space-y-0.5 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.66rem]">
                <li>Trial session: {LIVE_ADD_ONS.oneToOne.trial}</li>
                {LIVE_ADD_ONS.oneToOne.bundles.map((bundle) => (
                  <li key={bundle.label}>
                    {bundle.label}: {bundle.price}{" "}
                    <span className="text-[var(--foreground)]">({bundle.note})</span>
                  </li>
                ))}
              </ul>
              <p className="mt-1.5 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.66rem]">
                {LIVE_ADD_ONS.oneToOne.detail}
              </p>
            </div>
            <div className="rounded-xl border border-[rgb(var(--brand-2-rgb)/0.25)] bg-[rgb(var(--brand-2-rgb)/0.06)] px-3 py-2.5 print:rounded-lg print:px-2.5 print:py-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                <h3 className="font-display text-[0.88rem] font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                  {LIVE_ADD_ONS.groupLive.title}
                </h3>
                <p className="font-display text-base font-semibold text-[var(--brand-2)] print:text-[0.95rem]">
                  {LIVE_ADD_ONS.groupLive.price}
                </p>
              </div>
              <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                {LIVE_ADD_ONS.groupLive.alt}
              </p>
              <p className="mt-1 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.66rem]">
                {LIVE_ADD_ONS.groupLive.detail}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-3.5 grid gap-1.5 sm:grid-cols-2 print:mt-2.5 print:gap-1.5">
          <div className="rounded-xl border border-zinc-900/10 bg-white px-3 py-2.5 print:rounded-lg print:px-2.5 print:py-2">
            <h2 className="font-display text-[0.95rem] font-semibold print:text-[0.85rem]">
              Options
            </h2>
            <ul className="mt-1.5 space-y-1 text-[0.72rem] text-[var(--muted)] print:text-[0.64rem]">
              {PRICING_OPTIONS.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[var(--foreground)]">{item.title}:</span>{" "}
                  {item.detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-900/10 bg-white px-3 py-2.5 print:rounded-lg print:px-2.5 print:py-2">
            <h2 className="font-display text-[0.95rem] font-semibold print:text-[0.85rem]">
              Context
            </h2>
            <ul className="mt-1.5 space-y-1 text-[0.72rem] text-[var(--muted)] print:text-[0.64rem]">
              {PRICING_CONTEXT.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[var(--foreground)]">{item.title}:</span>{" "}
                  {item.detail}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-3.5 grid gap-1.5 sm:grid-cols-[1.1fr_0.9fr] print:mt-2.5 print:gap-1.5">
          <div className="rounded-xl border border-zinc-900/10 bg-white px-3 py-2.5 print:rounded-lg print:px-2.5 print:py-2">
            <h2 className="font-display text-[0.95rem] font-semibold print:text-[0.85rem]">
              Platform includes
            </h2>
            <ul className="mt-1.5 columns-1 gap-x-4 space-y-1 text-[0.72rem] text-[var(--muted)] sm:columns-2 print:text-[0.64rem]">
              {PRICING_INCLUDES.map((item) => (
                <li key={item} className="flex break-inside-avoid gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[rgb(var(--accent-rgb)/0.45)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.08)] to-[rgb(var(--accent-rgb)/0.16)] px-3 py-2.5 print:rounded-lg print:px-2.5 print:py-2">
            <h2 className="font-display text-[0.95rem] font-semibold print:text-[0.85rem]">
              Request a quote
            </h2>
            <p className="mt-1 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.64rem]">
              Email {siteConfig.links.email} · {siteConfig.links.phone} ·{" "}
              {SITE_URL}/contact · Guided demo at learn.kanamacademy.com/demo
              (no account required).
            </p>
            <p className="mt-2 text-[0.68rem] leading-snug text-[var(--muted)] print:text-[0.62rem]">
              Tell us: who you serve, learner count, live vs async, and preferred start
              window. Final pricing confirmed in writing before you start.
            </p>
          </div>
        </section>

        <footer className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-900/10 pt-2 text-[0.65rem] text-[var(--muted)] print:mt-2 print:pt-1.5">
          <p>
            Starting guidance only · Not a public rate card · Quote by cohort &amp; delivery
            model
          </p>
          <p className="font-medium text-[var(--brand-2)]">{SITE_URL}/one-pager/pricing</p>
        </footer>
      </article>

      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.35in;
          }
          html, body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .one-pager {
            max-width: none !important;
          }
        }
      `}</style>
    </>
  );
}
