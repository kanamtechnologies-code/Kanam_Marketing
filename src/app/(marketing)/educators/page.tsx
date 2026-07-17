import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  duskInsetClass,
  FullBleed,
  HomeHeroVeil,
  lightEyebrowClass,
  lightMutedClass,
  lightTitleClass,
  PageBand,
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
import { Button } from "@/components/ui/button";
import { DEVICE_READY_SHORT } from "@/lib/learning-paths";
import { PARTNER_AUDIENCES } from "@/lib/partner-audiences";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For schools, programs & youth leaders | Kanam Academy",
  description:
    "Bring Kanam live instruction to your school, after-school program, or Scout troop — online or in person where available. Built to align with CSTA K–12 Computer Science Standards. Progress you can see. Request a pilot.",
};

const STEPS = [
  {
    n: "01",
    title: "Partner with Kanam",
    body: "Pick learning paths and a schedule that fits class periods, after-school blocks, or troop nights.",
  },
  {
    n: "02",
    title: "We teach live",
    body: "Kanam instructors lead sessions online — or in person where available. Learners practice in the real lesson canvas.",
  },
  {
    n: "03",
    title: "You see progress",
    body: "Roster view shows lessons completed, XP, and last activity — so admins and leaders know who’s on track.",
  },
] as const;

const WHY = [
  "Live instruction from Kanam — online or in person where available",
  "Your team hosts and coordinates; we teach the tech",
  "Auto-checks and capstones show real mastery, not click-through",
  `CSTA-aligned curriculum packet · ${DEVICE_READY_SHORT}`,
] as const;

const HERO_PROOF = [
  { label: "Kanam brings", value: "Live teaching" },
  { label: "You bring", value: "The cohort" },
  { label: "Where", value: "Online · on-site*" },
  { label: "You see", value: "Roster progress" },
] as const;

export default function EducatorsPage() {
  const [featured, ...rest] = PARTNER_AUDIENCES;

  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        {/* Hero */}
        <section
          aria-labelledby="educators-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/product/leaders-inperson-kanam.png"
              alt="Kanam instructor teaching learners in person with the lesson canvas on a laptop"
              fill
              priority
              className="object-cover object-[58%_center] sm:object-[55%_center] lg:object-center"
              sizes="100vw"
            />
            <HomeHeroVeil />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[28rem] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-28 sm:min-h-[32rem] sm:px-6 sm:pb-16 lg:min-h-[36rem] lg:px-8">
            <div className="max-w-xl lg:max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Schools · Programs · Youth leaders
              </p>
              <h1
                id="educators-hero-heading"
                className="mt-3 font-display text-[2.15rem] font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl lg:text-[3rem] lg:leading-[1.05]"
              >
                We teach live.
                <span className="block text-[var(--accent)]">
                  You host the cohort.
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#c5d2cb] sm:text-lg">
                Online sessions — or in person where available. Your team brings
                students, schedule, and space. Kanam brings instructors and
                progress you can see.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                  <Link href="/contact">Request a pilot</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className={brandCtaSecondaryBtnClass}
                >
                  <Link
                    href={siteConfig.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try the guided lesson
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tight facts */}
        <PageBand tone="proof" className="py-8 md:py-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0">
            {HERO_PROOF.map((item, index) => (
              <div
                key={item.label}
                className={
                  index > 0
                    ? "sm:border-l sm:border-white/20 sm:px-5"
                    : "sm:pr-5"
                }
              >
                <div className="font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-[#e8e0cf]/80">
            *In-person instruction where available — ask us for your area.
          </p>
        </PageBand>

        {/* Who this is for */}
        <PageBand tone="mid" aria-labelledby="audience-heading">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Who it’s for
              </p>
              <h2
                id="audience-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
              >
                Built for the places teens already show up
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#c5d2cb]">
                Classrooms, after-school blocks, weekend cohorts, and Scout
                troops — same live instruction model, fitted to your calendar.
                Open a page for details, pricing, and a request form.
              </p>
            </div>
            <Button asChild className={brandCtaPrimaryBtnClass}>
              <Link href="/contact">Request a pilot</Link>
            </Button>
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e241c] via-[#0e241c]/45 to-transparent" />
              </div>
              <div className="relative z-10 mt-auto p-6 sm:p-8 lg:p-9">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {featured.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#c5d2cb] sm:text-base">
                  {featured.tileBody}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  Learn more →
                </p>
              </div>
            </Link>

            <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2 lg:gap-5">
              {rest.map((item) => (
                <Link
                  key={item.slug}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e241c] via-[#0e241c]/50 to-transparent" />
                  </div>
                  <div className="relative z-10 mt-auto p-5 sm:p-6">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-[#f7f3e8] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-[#c5d2cb]">
                      {item.tileBody}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
                      Learn more →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </PageBand>

        {/* How it works */}
        <PageBand tone="proof" aria-labelledby="how-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
          >
            You host. We teach.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.n} className={`${duskInsetClass} p-5`}>
                <p className="font-mono text-xs font-semibold text-[var(--accent)]">
                  {step.n}
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-[#f7f3e8]">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#c5d2cb]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </PageBand>

        {/* Light breather */}
        <PageBand tone="light" aria-labelledby="why-heading">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-[rgb(var(--accent-rgb)/0.2)] shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
              <Image
                src="/images/product/leaders-kanam-instructor.png"
                alt="Kanam instructor teaching a live online session"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </figure>
            <div>
              <p className={lightEyebrowClass}>Why partners choose Kanam</p>
              <h2
                id="why-heading"
                className={`${lightTitleClass} mt-2 text-3xl sm:text-4xl`}
              >
                Live instruction included
              </h2>
              <p className={`${lightMutedClass} mt-3 text-sm sm:text-base`}>
                Don&apos;t ask your teachers or troop leaders to become CS
                instructors. Kanam delivers the teaching — online, or in person
                where available — on a platform with progress adults can see.
              </p>
              <ul className="mt-5 space-y-3">
                {WHY.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-snug text-zinc-800 sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="secondary"
                  className="border-[rgb(var(--brand-2-rgb)/0.3)]"
                >
                  <Link href="/learning-paths">See the six learning paths</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="border-[rgb(var(--brand-2-rgb)/0.3)]"
                >
                  <Link
                    href={siteConfig.links.standardsPdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Standards alignment packet
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </PageBand>

        {/* CTA */}
        <PageBand tone="base">
          <BrandCtaBand aria-labelledby="pilot-heading">
            <div className="max-w-2xl">
              <p className={brandCtaEyebrowClass}>Next step</p>
              <div
                aria-hidden
                className="mt-3 h-px w-12 bg-gradient-to-r from-[var(--accent)] to-transparent"
              />
              <h2 id="pilot-heading" className={brandCtaTitleClass}>
                Bring live Kanam instruction to your school or program
              </h2>
              <p className={brandCtaBodyClass}>
                Share your role, group size, location, and timeline. We&apos;ll
                design a pilot that fits — online or in person where available —
                for a class period, after-school block, weekend cohort, or Scout
                troop.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                  <Link href="/contact">Request a pilot</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className={brandCtaSecondaryBtnClass}
                >
                  <Link
                    href={siteConfig.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try the guided lesson
                  </Link>
                </Button>
              </div>
            </div>
          </BrandCtaBand>
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}
