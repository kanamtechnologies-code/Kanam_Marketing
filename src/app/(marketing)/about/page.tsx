import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import {
  DEVICE_READY_BLURB,
  DEVICE_READY_SHORT,
  LEARNING_PATHS,
  LESSONS_COUNT_LABEL,
  PACING_BLURB,
  PATHS_COUNT_LABEL,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Kanam Academy",
  description:
    "Kanam Academy: coding, AI, data, cybersecurity, and digital literacy — for teens and anyone learning tech. Chromebook and mobile ready. Flexible schedule. Live instruction or structured async. Move Forward.",
};

const HERO_PROOF = [
  { label: "Learning paths", value: PATHS_COUNT_LABEL },
  { label: "Interactive lessons", value: LESSONS_COUNT_LABEL },
  { label: "Instruction", value: "Live + async" },
  { label: "Access", value: DEVICE_READY_SHORT },
] as const;

const BELIEFS = [
  {
    title: "Structure beats screen time",
    body: "People need credible pathways into tech — not more unstructured clicking.",
  },
  {
    title: "Adults shouldn’t have to become CS teachers",
    body: "Schools and programs need measurable learning with Kanam live instruction.",
  },
  {
    title: "Progress should be visible",
    body: "Families and self-paced learners deserve structure that still feels human.",
  },
] as const;

export default function AboutPage() {
  return (
    <SubpageShell overlapNav={false}>
      <div className="space-y-12 md:space-y-14 lg:space-y-16">
        {/* Hero */}
        <section
          aria-labelledby="about-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_22px_56px_rgba(15,23,42,0.16)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/product/about-hero.png"
              alt="Learners and educators collaborating in a Kanam learning space"
              fill
              priority
              className="object-cover object-[55%_center] sm:object-center"
              sizes="(min-width: 1280px) 90rem, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/88 to-zinc-950/28 sm:via-zinc-950/78 sm:to-zinc-950/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-zinc-950/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.22)] via-transparent to-[rgb(var(--accent-rgb)/0.12)]" />
          </div>

          <div className="relative z-10 flex min-h-[26rem] flex-col justify-end p-6 sm:min-h-[28rem] sm:p-8 lg:min-h-[32rem] lg:p-10">
            <div className="max-w-xl lg:max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                About Kanam Academy
              </p>
              <h1
                id="about-hero-heading"
                className="mt-3 font-display text-[2.1rem] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06]"
              >
                Real skills
                <span className="block text-[rgb(var(--accent-rgb)/1)]">
                  for a digital world.
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                A web learning platform where teens — and anyone ready to learn tech —
                practice real skills, earn visible progress, and{" "}
                <span className="font-semibold text-[rgb(var(--accent-rgb)/1)]">
                  Move Forward.
                </span>
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

        {/* Proof */}
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

        {/* What we are */}
        <section
          id="what"
          aria-labelledby="what-heading"
          className="scroll-mt-24 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10"
        >
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              What we are
            </p>
            <h2
              id="what-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              One platform. Five paths. Progress you can see.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              Browser-based coding, AI literacy, digital literacy, data, and cybersecurity.
              Every lesson is designed to explain, check, and correct itself — so learners
              progress confidently and instructors or families can support with minimal prep.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              Live instruction when you want a guide. Structured async when you want to move
              at your own pace. {DEVICE_READY_BLURB} {PACING_BLURB}
            </p>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-zinc-900/10 shadow-[0_18px_44px_rgba(15,23,42,0.12)] sm:aspect-[5/4] lg:col-span-6 lg:aspect-auto lg:min-h-[26rem]">
            <Image
              src="/images/product/live-instruction.png"
              alt="Kanam live instruction with learners practicing in the lesson canvas"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </figure>
        </section>

        {/* Problem / beliefs */}
        <section
          id="problem"
          aria-labelledby="problem-heading"
          className="scroll-mt-24 relative overflow-hidden rounded-[1.5rem] border border-[rgb(var(--brand-2-rgb)/0.2)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.14)] via-white/85 to-[rgb(var(--accent-rgb)/0.2)] px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] kanam-hex-pattern" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Why Kanam exists
            </p>
            <h2
              id="problem-heading"
              className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              The gap between “interested in tech” and real skill.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
              People need credible pathways into coding, AI, data, cybersecurity, and digital
              citizenship. Schools need something standards-aligned and measurable. Families
              need enrichment that doesn’t require becoming the CS teacher at home.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {BELIEFS.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning paths */}
        <section
          id="learning-paths"
          aria-labelledby="paths-heading"
          className="scroll-mt-24 space-y-6"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Learning paths
            </p>
            <h2
              id="paths-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Five paths · {LESSONS_COUNT_LABEL} interactive lessons
            </h2>
            <p className="mt-3 text-base text-[var(--muted)]">
              Clear starting points for teens and beginners — with depth for anyone leveling
              up in tech.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEARNING_PATHS.map((path, index) => (
              <Link
                key={path.slug}
                href={`/learning-paths/${path.slug}`}
                className={`group relative flex min-h-[14rem] flex-col overflow-hidden rounded-[1.35rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_12px_28px_rgba(15,23,42,0.1)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2 ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1 lg:min-h-[16rem]" : ""
                }`}
              >
                <Image
                  src={path.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/15" />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.22)] via-transparent to-[rgb(var(--accent-rgb)/0.1)]" />
                <div className="relative z-10 mt-auto p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/65">
                    {path.lessons} lessons
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-white">
                    {path.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-white/75">{path.subtitle}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[rgb(var(--accent-rgb)/1)]">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Partner CTA */}
        <section
          id="partner"
          aria-labelledby="partner-heading"
          className="scroll-mt-24 relative overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/product/leaders-school-live.png"
              alt=""
              fill
              className="object-cover object-center opacity-40"
              sizes="(min-width: 1280px) 90rem, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/92 to-zinc-950/70" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.3)] via-transparent to-[rgb(var(--accent-rgb)/0.15)]" />
          </div>
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent-rgb)/1)]">
              Partner with Kanam
            </p>
            <h2
              id="partner-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Schools, programs, Scout troops — and families ready to start.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">
              Request information for a pilot, or begin with the guided demo today. We’ll
              help you choose the right next step.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">Request information</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
              >
                <Link href="/educators">For schools &amp; leaders</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
