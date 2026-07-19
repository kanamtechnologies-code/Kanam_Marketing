import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PrintButton } from "@/components/site/PrintButton";
import {
  COVERAGE_SUMMARY,
  CSTA_2026_FORWARD,
  CSTA_LEVEL_BANDS,
  DATA_TRACK_HIGHLIGHTS,
  ISTE_HIGHLIGHTS,
  PATH_COVERAGE,
  PYTHON_FOUNDATIONS_MAP,
  STANDARDS_FRAMEWORKS,
  STANDARDS_PACKET,
} from "@/lib/standards-alignment";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kanam Academy Foundations Standards Alignment",
  description:
    "Standards alignment packet for Kanam Academy — CSTA 2017 Levels 2 & 3A, forward map to 2026 CSTA PK–12 Standards, ISTE Students 2024, Common Core Math, and Jump$tart financial education.",
  robots: { index: true, follow: true },
};

const SITE_URL = "https://www.kanamacademy.com";

export default function StandardsOnePagerPage() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[8.5in] items-center justify-between gap-3 px-4 py-4 print:hidden sm:px-6">
        <p className="text-sm text-[var(--muted)]">
          Share this page or save as PDF for adoption packets.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <PrintButton />
          <Link
            href="/images/docs/Kanam%20Academy%20Foundations%20Standards%20Alignment.pdf"
            className="text-sm font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </Link>
          <Link
            href="/one-pager/pricing"
            className="text-sm font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
          >
            Pricing
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
        <header className="relative overflow-hidden rounded-2xl border border-[rgb(var(--brand-2-rgb)/0.2)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-rgb)/0.92)] to-[rgb(var(--brand-2-rgb)/0.88)] px-5 py-5 text-white print:rounded-xl print:px-4 print:py-3.5 sm:px-6 sm:py-5">
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
                  {siteConfig.tagline} Foundations Standards Alignment
                </p>
              </div>
            </div>
            <div className="text-right text-xs leading-relaxed text-white/80 sm:text-sm">
              <p className="font-semibold text-white">{SITE_URL}</p>
              <p>{siteConfig.links.email}</p>
              <p>{siteConfig.links.phone}</p>
              <p className="mt-1.5">
                v{STANDARDS_PACKET.version} · {STANDARDS_PACKET.revised}
              </p>
            </div>
          </div>
        </header>

        <section className="mt-3.5 print:mt-2.5">
          <h1 className="font-display text-[1.35rem] font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-[1.5rem] print:text-[1.25rem]">
            {STANDARDS_PACKET.title}
          </h1>
          <p className="mt-1.5 max-w-3xl text-[0.84rem] leading-relaxed text-[var(--muted)] print:text-[0.74rem]">
            {STANDARDS_PACKET.purpose} Audience: {STANDARDS_PACKET.audience}. Each
            learning track is designed as <strong>16 sessions over 8 weeks</strong>{" "}
            (flexible pacing).
          </p>
        </section>

        <section className="mt-3 print:mt-2">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            Frameworks we map to
          </h2>
          <div className="mt-1.5 overflow-hidden rounded-xl border border-zinc-900/10">
            <table className="w-full text-left text-[0.72rem] print:text-[0.64rem]">
              <thead className="bg-[rgb(var(--brand-2-rgb)/0.08)] text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                <tr>
                  <th className="px-2.5 py-1.5">Framework</th>
                  <th className="px-2.5 py-1.5">Edition</th>
                  <th className="px-2.5 py-1.5">Role</th>
                </tr>
              </thead>
              <tbody>
                {STANDARDS_FRAMEWORKS.map((fw) => (
                  <tr key={fw.name} className="border-t border-zinc-900/8">
                    <td className="px-2.5 py-1.5 font-medium text-[var(--foreground)]">
                      {fw.name}
                    </td>
                    <td className="px-2.5 py-1.5 text-[var(--muted)]">{fw.edition}</td>
                    <td className="px-2.5 py-1.5 text-[var(--muted)]">{fw.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-1.5 text-[0.7rem] leading-snug text-[var(--muted)] print:text-[0.62rem]">
            <strong className="text-[var(--foreground)]">Why two CSTA editions?</strong>{" "}
            2017 remains the edition most state adoptions and accreditation reviewers still
            cite. The 2026 PK–12 Standards are published; we map conceptually to their five
            foundational concepts so partners can transition without rewriting the program.
          </p>
        </section>

        <section className="mt-3 print:mt-2">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            CSTA grade bands (2017)
          </h2>
          <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2">
            {CSTA_LEVEL_BANDS.map((band) => (
              <div
                key={band.level}
                className="rounded-xl border border-zinc-900/10 bg-white px-3 py-2 print:px-2.5 print:py-1.5"
              >
                <p className="font-display text-[0.88rem] font-semibold text-[var(--foreground)] print:text-[0.8rem]">
                  {band.level}{" "}
                  <span className="font-sans text-[0.72rem] font-medium text-[var(--muted)]">
                    · {band.grades}
                  </span>
                </p>
                <p className="mt-0.5 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.66rem]">
                  {band.how}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-3 print:mt-2">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            Eight learning tracks — coverage at a glance
          </h2>
          <div className="mt-1.5 overflow-hidden rounded-xl border border-zinc-900/10">
            <table className="w-full text-left text-[0.72rem] print:text-[0.64rem]">
              <thead className="bg-[rgb(var(--brand-2-rgb)/0.08)] text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                <tr>
                  <th className="px-2.5 py-1.5">Track</th>
                  <th className="px-2.5 py-1.5">Emphasis</th>
                  <th className="px-2.5 py-1.5">Primary frameworks</th>
                </tr>
              </thead>
              <tbody>
                {PATH_COVERAGE.map((row) => (
                  <tr key={row.path} className="border-t border-zinc-900/8">
                    <td className="px-2.5 py-1.5 font-medium text-[var(--foreground)]">
                      {row.path}
                    </td>
                    <td className="px-2.5 py-1.5 text-[var(--muted)]">{row.focus}</td>
                    <td className="px-2.5 py-1.5 text-[var(--muted)]">{row.frameworks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-3.5 print:mt-2.5">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            Python & AI Foundations → CSTA 2017
          </h2>
          <p className="mt-1 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.66rem]">
            Primary foundations track for Algorithms &amp; Programming. Level 2 is the core
            path; Level 3A codes mark stretch / early high-school depth.
          </p>
          <div className="mt-1.5 overflow-hidden rounded-xl border border-zinc-900/10">
            <table className="w-full text-left text-[0.72rem] print:text-[0.64rem]">
              <thead className="bg-[rgb(var(--brand-2-rgb)/0.08)] text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                <tr>
                  <th className="px-2.5 py-1.5">Component</th>
                  <th className="px-2.5 py-1.5">Codes</th>
                  <th className="px-2.5 py-1.5">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PYTHON_FOUNDATIONS_MAP.map((row) => (
                  <tr key={row.component} className="border-t border-zinc-900/8">
                    <td className="px-2.5 py-1.5 font-medium text-[var(--foreground)]">
                      {row.component}
                    </td>
                    <td className="whitespace-nowrap px-2.5 py-1.5 font-semibold text-[var(--brand-2)]">
                      {row.codes}
                    </td>
                    <td className="px-2.5 py-1.5 text-[var(--muted)]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-3 print:mt-2">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            Data Analyst highlights
          </h2>
          <ul className="mt-1.5 grid gap-1 sm:grid-cols-2">
            {DATA_TRACK_HIGHLIGHTS.map((row) => (
              <li
                key={row.component}
                className="rounded-lg border border-zinc-900/10 bg-white px-3 py-2 text-[0.72rem] print:text-[0.64rem]"
              >
                <span className="font-medium text-[var(--foreground)]">{row.component}</span>
                <span className="mt-0.5 block font-semibold text-[var(--brand-2)]">
                  {row.codes}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-3 print:mt-2">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            ISTE Standards for Students (2024)
          </h2>
          <div className="mt-1.5 grid gap-1 sm:grid-cols-2">
            {ISTE_HIGHLIGHTS.map((row) => (
              <div
                key={row.code}
                className="rounded-lg border border-zinc-900/10 px-3 py-2 text-[0.72rem] print:text-[0.64rem]"
              >
                <p className="font-semibold text-[var(--foreground)]">{row.code}</p>
                <p className="mt-0.5 text-[var(--muted)]">{row.where}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-3 print:mt-2">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            Forward map — 2026 CSTA PK–12 concepts
          </h2>
          <p className="mt-1 text-[0.72rem] leading-snug text-[var(--muted)] print:text-[0.66rem]">
            Conceptual alignment to the five foundational concepts (not a line-by-line code
            rematch). Useful while partners transition from 2017 adoptions.
          </p>
          <div className="mt-1.5 overflow-hidden rounded-xl border border-zinc-900/10">
            <table className="w-full text-left text-[0.72rem] print:text-[0.64rem]">
              <thead className="bg-[rgb(var(--brand-2-rgb)/0.08)] text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                <tr>
                  <th className="px-2.5 py-1.5">2026 concept</th>
                  <th className="px-2.5 py-1.5">Where Kanam addresses it</th>
                </tr>
              </thead>
              <tbody>
                {CSTA_2026_FORWARD.map((row) => (
                  <tr key={row.concept} className="border-t border-zinc-900/8">
                    <td className="px-2.5 py-1.5 font-medium text-[var(--foreground)]">
                      {row.concept}
                    </td>
                    <td className="px-2.5 py-1.5 text-[var(--muted)]">{row.kanam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-3 print:mt-2">
          <h2 className="font-display text-base font-semibold text-[var(--foreground)] print:text-[0.95rem]">
            CSTA 2017 coverage summary
          </h2>
          <div className="mt-1.5 overflow-hidden rounded-xl border border-zinc-900/10">
            <table className="w-full text-left text-[0.72rem] print:text-[0.64rem]">
              <thead className="bg-[rgb(var(--brand-2-rgb)/0.08)] text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                <tr>
                  <th className="px-2.5 py-1.5">Concept</th>
                  <th className="px-2.5 py-1.5">Level 2 (6–8)</th>
                  <th className="px-2.5 py-1.5">Level 3A (9–10)</th>
                </tr>
              </thead>
              <tbody>
                {COVERAGE_SUMMARY.map((row) => (
                  <tr key={row.area} className="border-t border-zinc-900/8">
                    <td className="px-2.5 py-1.5 font-medium text-[var(--foreground)]">
                      {row.area}
                    </td>
                    <td className="px-2.5 py-1.5 text-[var(--muted)]">{row.level2}</td>
                    <td className="px-2.5 py-1.5 text-[var(--muted)]">{row.level3a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-1.5 text-[0.7rem] leading-snug text-[var(--muted)] print:text-[0.62rem]">
            Positioning: strong, assessable coverage of <strong>Algorithms &amp; Programming</strong>{" "}
            and <strong>Data &amp; Analysis</strong>, with recurring <strong>Impacts of Computing</strong>.
            Computing Systems and Networks are intentionally light — pair with a partner course if a
            full CSTA-comprehensive sequence is required.
          </p>
        </section>

        <footer className="mt-4 border-t border-zinc-900/10 pt-3 print:mt-3 print:pt-2">
          <p className="text-[0.68rem] leading-snug text-[var(--muted)] print:text-[0.6rem]">
            {STANDARDS_PACKET.disclaimer} Request the full lesson-level matrix for accreditation
            review: {siteConfig.links.email} · {siteConfig.links.phone}.
          </p>
          <p className="mt-1 text-[0.68rem] text-[var(--muted)] print:text-[0.6rem]">
            {SITE_URL}/one-pager/standards · Print or Save as PDF
          </p>
        </footer>
      </article>
    </>
  );
}
