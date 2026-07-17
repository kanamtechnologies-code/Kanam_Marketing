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
import { Button } from "@/components/ui/button";
import {
  DEVICE_READY_SHORT,
} from "@/lib/learning-paths";
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
      <div className="space-y-12 md:space-y-14 lg:space-y-16">
        {/* Hero — image-led, benefit-first */}
        <section
          aria-labelledby="educators-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden rounded-[1.5rem] border border-[rgb(var(--accent-rgb)/0.2)] bg-zinc-950 shadow-[0_22px_56px_rgba(15,23,42,0.16)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/product/leaders-inperson-kanam.png"
              alt="Kanam instructor teaching learners in person with the lesson canvas on a laptop"
              fill
              priority
              className="object-cover object-[58%_center] sm:object-[55%_center] lg:object-center"
              sizes="(min-width: 1280px) 90rem, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/86 to-zinc-950/20 sm:via-zinc-950/72 sm:to-zinc-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-zinc-950/25" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.2)] via-transparent to-[rgb(var(--accent-rgb)/0.1)]" />
          </div>

          <div className="relative z-10 flex min-h-[26rem] flex-col justify-end p-6 sm:min-h-[28rem] sm:p-8 lg:min-h-[32rem] lg:p-10">
            <div className="max-w-xl lg:max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                Schools · Programs · Youth leaders
              </p>
              <h1
                id="educators-hero-heading"
                className="mt-3 font-display text-[2.1rem] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]"
              >
                We teach live.
                <span className="block text-[rgb(var(--accent-rgb)/1)]">You host the cohort.</span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                Online sessions — or in person where available. Your team brings students,
                schedule, and space. Kanam brings instructors and progress you can see.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild>
                  <Link href="/contact">Request a pilot</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
                >
                  <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                    Try the guided lesson
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tight facts — immediately under hero */}
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgb(var(--brand-rgb)/0.35)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-2-rgb)/0.94)] to-[rgb(var(--brand-rgb)/0.88)] px-5 py-5 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] kanam-hex-pattern" />
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
            {HERO_PROOF.map((item, index) => (
              <div
                key={item.label}
                className={
                  index > 0
                    ? "sm:border-l sm:border-white/20 sm:px-4 sm:first:pl-0"
                    : "sm:px-4 sm:pl-0"
                }
              >
                <div className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent-rgb)/0.9)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <p className="relative mt-4 text-xs text-white/65">
            *In-person instruction where available — ask us for your area.
          </p>
        </div>

        {/* Who this is for — premium image highlight */}
        <section aria-labelledby="audience-heading" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Who it’s for
              </p>
              <h2
                id="audience-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
              >
                Built for the places teens already show up
              </h2>
              <p className="mt-3 text-base text-[var(--muted)]">
                Classrooms, after-school blocks, weekend cohorts, and Scout troops — same live
                instruction model, fitted to your calendar. Open a page for details, pricing,
                and a request form.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">Request a pilot</Link>
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
            <Link
              href={featured.href}
              className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.5rem] border border-[rgb(var(--accent-rgb)/0.2)] bg-zinc-950 shadow-[0_18px_44px_rgba(15,23,42,0.14)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(15,23,42,0.18)] sm:min-h-[26rem] lg:col-span-7 lg:min-h-[32rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2"
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
                  {featured.tileBody}
                </p>
                <p className="mt-4 text-sm font-semibold text-[rgb(var(--accent-rgb)/1)]">
                  Learn more →
                </p>
              </div>
            </Link>

            <div className="grid gap-4 lg:col-span-5 lg:grid-rows-2 lg:gap-5">
              {rest.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group relative flex min-h-[16rem] flex-col overflow-hidden rounded-[1.5rem] border border-[rgb(var(--accent-rgb)/0.2)] bg-zinc-950 shadow-[0_14px_36px_rgba(15,23,42,0.12)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,23,42,0.16)] sm:min-h-[17rem] lg:min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2"
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
                    <p className="mt-2 text-sm leading-snug text-white/80">{item.tileBody}</p>
                    <p className="mt-3 text-sm font-semibold text-[rgb(var(--accent-rgb)/1)]">
                      Learn more →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="how-heading"
          className="relative overflow-hidden rounded-[1.5rem] border border-[rgb(var(--brand-rgb)/0.35)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-2-rgb)/0.94)] to-[rgb(var(--brand-rgb)/0.88)] px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] kanam-hex-pattern" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent-rgb)/1)]">
              How it works
            </p>
            <h2
              id="how-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              You host. We teach.
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {STEPS.map((step) => (
                <div key={step.n}>
                  <p className="font-display text-sm font-semibold tabular-nums text-[rgb(var(--accent-rgb)/1)]">
                    {step.n}
                  </p>
                  <p className="mt-2 font-semibold text-white sm:text-lg">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-snug text-white/75">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual + why */}
        <section aria-labelledby="why-heading" className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Why partners choose Kanam
            </p>
            <h2
              id="why-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Live instruction included
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Don&apos;t ask your teachers or troop leaders to become CS instructors. Kanam
              delivers the teaching — online, or in person where available — on a platform
              with progress adults can see.
            </p>
            <ul className="mt-5 space-y-3">
              {WHY.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-snug text-zinc-800 sm:text-base">
                  <span
                    aria-hidden
                    className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href="/learning-paths">See the six learning paths</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={siteConfig.links.standardsPdf} target="_blank" rel="noreferrer">
                  Standards alignment packet
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
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
              Share your role, group size, location, and timeline. We&apos;ll design a
              pilot that fits — online or in person where available — for a class period,
              after-school block, weekend cohort, or Scout troop.
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
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Try the guided lesson
                </Link>
              </Button>
            </div>
          </div>
        </BrandCtaBand>
      </div>
    </SubpageShell>
  );
}
