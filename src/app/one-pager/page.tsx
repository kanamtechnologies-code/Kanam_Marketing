import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PrintButton } from "@/components/site/PrintButton";
import {
  DEVICE_READY_BLURB,
  DEVICE_READY_SHORT,
  LEARNING_PATHS,
  LESSONS_COUNT_LABEL,
  PACING_BLURB,
  PATHS_COUNT_LABEL,
  PROGRAM_FIT_SHORT,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kanam Academy one-pager",
  description:
    "One-page overview of Kanam Academy for school admins, parents, and learners — learning paths, flexible schedule, Chromebook and mobile ready, and how to get started.",
  robots: { index: true, follow: true },
};

const SITE_URL = "https://www.kanamacademy.com";

export default function OnePagerPage() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[8.5in] items-center justify-between gap-3 px-4 py-4 print:hidden sm:px-6">
        <p className="text-sm text-[var(--muted)]">
          Share this page or save as PDF for email.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <PrintButton />
          <Link
            href="/one-pager/pricing"
            className="text-sm font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
          >
            Pricing one-pager
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
          >
            Back to site
          </Link>
        </div>
      </div>

      <article className="one-pager mx-auto w-full max-w-[8.5in] bg-[var(--background)] px-4 pb-10 sm:px-6 print:max-w-none print:px-[0.45in] print:pb-0 print:pt-0">
        {/* Header */}
        <header className="relative overflow-hidden rounded-2xl border border-[rgb(var(--brand-2-rgb)/0.2)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-rgb)/0.92)] to-[rgb(var(--brand-2-rgb)/0.88)] px-5 py-5 text-white print:rounded-xl print:px-4 print:py-4 sm:px-6 sm:py-6">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_45%),radial-gradient(circle_at_85%_10%,rgb(var(--accent-rgb)/0.9)_0,transparent_35%)]" />
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white/95 ring-2 ring-white/40">
                <Image
                  src="/images/Logo.png"
                  alt=""
                  fill
                  className="object-contain p-1"
                  sizes="44px"
                  priority
                />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {siteConfig.name}
                </p>
                <p className="text-sm font-medium text-white/85">
                  {siteConfig.tagline} Coding, AI, data &amp; digital literacy —
                  in the browser.
                </p>
              </div>
            </div>
            <div className="text-right text-xs leading-relaxed text-white/80 sm:text-sm">
              <p className="font-semibold text-white">{SITE_URL}</p>
              <p>{siteConfig.links.email}</p>
              <p>{siteConfig.links.phone}</p>
              <p className="mt-1.5">
                <Link
                  href="/one-pager/pricing"
                  className="font-semibold text-white underline underline-offset-2 hover:text-white/90"
                >
                  Pricing one-pager →
                </Link>
              </p>
            </div>
          </div>
        </header>

        {/* Value prop */}
        <section className="mt-5 print:mt-3">
          <h1 className="font-display text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-[1.85rem] print:text-[1.45rem]">
            Structured tech learning for teens, families, and schools — live or
            async.
          </h1>
          <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-[var(--muted)] print:mt-1.5 print:text-[0.85rem]">
            Kanam Academy is a browser-based platform with five learning paths,{" "}
            {LESSONS_COUNT_LABEL} interactive lessons, instant feedback, and progress
            adults can see. {PACING_BLURB} {DEVICE_READY_BLURB}
          </p>
        </section>

        {/* Proof strip */}
        <section className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 print:mt-3 print:gap-1.5">
          {[
            { label: "Learning paths", value: PATHS_COUNT_LABEL },
            { label: "Lessons", value: LESSONS_COUNT_LABEL },
            { label: "Schedule", value: "Flexible" },
            { label: "Format", value: "Live + async" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-zinc-900/10 bg-white px-3 py-2.5 print:rounded-lg print:px-2.5 print:py-2"
            >
              <div className="font-display text-xl font-semibold text-[var(--brand-2)] print:text-lg">
                {item.value}
              </div>
              <div className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {item.label}
              </div>
            </div>
          ))}
        </section>

        {/* Who it's for */}
        <section className="mt-5 grid gap-3 sm:grid-cols-3 print:mt-3.5 print:gap-2">
          {[
            {
              title: "Schools & programs",
              body: `Kanam live instruction — online or in person where available — plus class codes, roster progress, and standards-aligned docs. Strong fit for classrooms, ${PROGRAM_FIT_SHORT}.`,
            },
            {
              title: "Parents & families",
              body: "Try a real guided lesson with no account. Then keep progress with XP, badges, and a clear roadmap — live help or structured async.",
            },
            {
              title: "Learners",
              body: "Write and run Python and SQL in the browser. Finish paths with real capstone projects — not random YouTube wandering.",
            },
          ].map((col) => (
            <div
              key={col.title}
              className="rounded-xl border border-zinc-900/10 bg-white p-3.5 print:rounded-lg print:p-3"
            >
              <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
                {col.title}
              </h2>
              <p className="mt-1.5 text-[0.8rem] leading-snug text-[var(--muted)] print:text-[0.72rem] print:leading-snug">
                {col.body}
              </p>
            </div>
          ))}
        </section>

        {/* Learning paths */}
        <section className="mt-5 print:mt-3.5">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-lg font-semibold text-[var(--foreground)] print:text-base">
              Five learning paths
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              Flexible schedule
            </p>
          </div>
          <div className="mt-2.5 grid gap-2 sm:grid-cols-2 print:mt-2 print:gap-1.5">
            {LEARNING_PATHS.map((path) => (
              <div
                key={path.slug}
                className="flex gap-3 rounded-xl border border-zinc-900/10 bg-white p-3 print:rounded-lg print:p-2.5"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[rgb(var(--brand-2-rgb)/0.06)] print:h-12 print:w-12">
                  <Image
                    src={path.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <h3 className="text-sm font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                      {path.shortName}
                    </h3>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                      {path.lessons} lessons
                    </span>
                  </div>
                  <p className="mt-0.5 text-[0.75rem] leading-snug text-[var(--muted)] print:text-[0.68rem]">
                    {path.subtitle}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-medium text-[var(--brand-2)] print:text-[0.65rem]">
                    Capstone: {path.capstone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works + why */}
        <section className="mt-5 grid gap-3 sm:grid-cols-2 print:mt-3.5 print:gap-2">
          <div className="rounded-xl border border-zinc-900/10 bg-white p-3.5 print:rounded-lg print:p-3">
            <h2 className="font-display text-base font-semibold print:text-[0.95rem]">
              How a lesson works
            </h2>
            <ol className="mt-2 space-y-1.5">
              {[
                ["Learn it", "Coach notes + plain-language explainers"],
                ["Practice", "Guided blanks, then from-scratch challenges"],
                ["Reflect", "Ethics & digital citizenship moments"],
                ["Earn", "XP, badges, and a visible roadmap"],
              ].map(([title, body], idx) => (
                <li
                  key={title}
                  className="flex gap-2 text-[0.8rem] print:text-[0.72rem]"
                >
                  <span className="font-mono text-[0.7rem] font-semibold text-[var(--brand-2)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-semibold text-[var(--foreground)]">
                      {title}.
                    </span>{" "}
                    <span className="text-[var(--muted)]">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-zinc-900/10 bg-white p-3.5 print:rounded-lg print:p-3">
            <h2 className="font-display text-base font-semibold print:text-[0.95rem]">
              Why teams choose Kanam
            </h2>
            <ul className="mt-2 space-y-1.5 text-[0.8rem] text-[var(--muted)] print:text-[0.72rem]">
              {[
                "Live cohorts, after-school, weekend, or Scout troop blocks",
                "Schedule flexes to your classroom, family, or self-paced needs",
                `${DEVICE_READY_SHORT} — no special software to install`,
                "Program tools: classes, codes, roster, XP",
                "Standards-aligned curriculum packet available",
                "Guided demo lesson — try before you commit",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTAs */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.45)] bg-gradient-to-r from-[rgb(var(--brand-2-rgb)/0.1)] via-white to-[rgb(var(--accent-rgb)/0.18)] px-4 py-4 print:mt-3.5 print:rounded-xl print:px-3 print:py-3 sm:px-5">
          <h2 className="font-display text-lg font-semibold text-[var(--foreground)] print:text-base">
            Get started today
          </h2>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 print:mt-2 print:gap-2 print:grid-cols-4">
            <a
              href={siteConfig.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-900/10 bg-white/90 px-3 py-2.5 transition-colors hover:border-[rgb(var(--brand-2-rgb)/0.45)] print:rounded-lg print:py-2"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--brand-2)]">
                Try it
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                Guided lesson demo →
              </p>
              <p className="mt-0.5 break-all text-[0.7rem] text-[var(--muted)] underline-offset-2 print:text-[0.65rem]">
                {siteConfig.links.demo}
              </p>
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-900/10 bg-white/90 px-3 py-2.5 transition-colors hover:border-[rgb(var(--brand-2-rgb)/0.45)] print:rounded-lg print:py-2"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--brand-2)]">
                Learn more
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                Marketing site →
              </p>
              <p className="mt-0.5 break-all text-[0.7rem] text-[var(--muted)] print:text-[0.65rem]">
                {SITE_URL}
              </p>
            </a>
            <Link
              href="/one-pager/pricing"
              className="rounded-xl border border-[rgb(var(--brand-2-rgb)/0.3)] bg-white/90 px-3 py-2.5 transition-colors hover:border-[rgb(var(--brand-2-rgb)/0.55)] print:rounded-lg print:py-2"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--brand-2)]">
                Pricing
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                Pricing one-pager →
              </p>
              <p className="mt-0.5 break-all text-[0.7rem] text-[var(--muted)] print:text-[0.65rem]">
                {SITE_URL}/one-pager/pricing
              </p>
            </Link>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="rounded-xl border border-zinc-900/10 bg-white/90 px-3 py-2.5 transition-colors hover:border-[rgb(var(--brand-2-rgb)/0.45)] print:rounded-lg print:py-2"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--brand-2)]">
                Schools & pilots
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                Request a conversation →
              </p>
              <p className="mt-0.5 break-all text-[0.7rem] text-[var(--muted)] print:text-[0.65rem]">
                {siteConfig.links.email}
              </p>
              <p className="mt-0.5 text-[0.7rem] text-[var(--muted)] print:text-[0.65rem]">
                {siteConfig.links.phone}
              </p>
            </a>
          </div>
        </section>

        <footer className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-900/10 pt-3 text-[0.7rem] text-[var(--muted)] print:mt-3 print:pt-2">
          <p>
            {siteConfig.name} · Move Forward. · Live instruction or structured
            async.
          </p>
          <Link
            href="/one-pager/pricing"
            className="font-medium text-[var(--brand-2)] underline-offset-2 hover:underline"
          >
            Pricing →
          </Link>
        </footer>
      </article>

      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.4in;
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
