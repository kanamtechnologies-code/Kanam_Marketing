"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ClipboardCheck,
  Monitor,
  Play,
  School,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import {
  DELIVERY_MODES,
  DEVICE_READY_BLURB,
  DEVICE_READY_LABEL,
  DEVICE_READY_SHORT,
  LESSON_FLOW,
  LEARNING_PATHS,
  PACING_BLURB,
  PACING_SHORT,
  PROGRAM_FIT_SHORT,
  PROOF_POINTS,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl lg:text-5xl",
        className
      )}
    >
      <span className="inline-block max-w-full align-top">
        {children}
        <span
          aria-hidden="true"
          className="mt-3 block h-px w-16 bg-[rgb(var(--accent-rgb)/0.9)]"
        />
      </span>
    </h2>
  );
}

function HeroPanel() {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]">
      <ParallaxImage
        src="/images/product/teen-girl-coding.png"
        alt=""
        priority
        intensity={150}
        scale={1.38}
        className="object-[82%_18%] sm:object-[78%_14%]"
        sizes="100vw"
      />
      {/* Heavy left veil for copy; keep her face clear on the right */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(11,47,36,0.95)_0%,rgba(11,47,36,0.88)_38%,rgba(20,92,69,0.45)_62%,rgba(7,26,20,0.18)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(7,26,20,0.35)_0%,transparent_28%,transparent_55%,rgba(7,26,20,0.45)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8">
        <div className="kanam-fade-up max-w-xl space-y-6 lg:-translate-y-6">
          <p className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-tight text-[#f7f3e8]">
            Kanam Academy
          </p>
          <div className="space-y-4">
            <h1 className="font-display text-[clamp(2.75rem,8vw,5.25rem)] font-semibold leading-[0.95] tracking-tight text-[var(--accent)]">
              Move Forward.
            </h1>
            <span
              aria-hidden
              className="block h-px w-20 bg-[rgb(var(--accent-rgb)/0.85)]"
            />
            <p className="max-w-md font-display text-xl font-semibold leading-snug tracking-tight text-[#f7f3e8] sm:text-2xl">
              The skills that open doors — taught with clarity, rigor, and real progress.
            </p>
            <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              From AI and coding to AP CSP prep, cybersecurity, data, digital fluency, and money skills —
              learn live with a Kanam instructor, or at a pace that fits your life. Built for
              teens, families, and schools.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-[var(--accent)] text-[#14201c] hover:bg-[rgb(var(--accent-rgb)/0.92)] sm:w-auto"
            >
              <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4" />
                Start the free lesson
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full rounded-full border-white/45 bg-white/15 text-white hover:bg-white/25 sm:w-auto"
            >
              <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
                Create your account
              </Link>
            </Button>
          </div>

          <p className="text-sm text-white/70">
            No account needed for the demo · {DEVICE_READY_SHORT}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-b border-[rgb(var(--accent-rgb)/0.35)] bg-gradient-to-b from-[#145c45] to-[rgb(var(--brand-2-rgb)/1)]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-[rgb(var(--accent-rgb)/0.5)] sm:grid-cols-3 lg:grid-cols-6">
        {PROOF_POINTS.map((item) => (
          <div
            key={item.label}
            className="bg-[#145c45] px-4 py-7 text-center sm:px-5 sm:py-8 lg:bg-transparent lg:bg-gradient-to-b lg:from-[#145c45] lg:to-[rgb(var(--brand-2-rgb)/1)] lg:px-4 lg:py-8"
          >
            <div className="font-display text-xl font-semibold leading-tight tracking-tight text-[var(--accent)] sm:text-2xl">
              {item.value}
            </div>
            <div className="mx-auto mt-2.5 max-w-[14rem] text-sm font-medium leading-snug text-white/90">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LearningPathsPanel() {
  return (
    <section className="w-full border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#0e241c] py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Learning paths
        </p>
        <SectionTitle className="mt-2">Eight paths. One standard of excellence.</SectionTitle>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#c5d2cb]">
          Every track is a complete program — guided practice, visible progress, and a
          capstone that proves the skill.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {LEARNING_PATHS.map((path) => (
            <Link
              key={path.slug}
              href={`/learning-paths/${path.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.18)] bg-[#16352b] transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={path.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#16352b]/85 to-transparent" />
                <span className="absolute bottom-3 left-4 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {path.lessons} lessons · full path
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] group-hover:text-[var(--accent)]">
                  {path.name}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-[var(--accent)]">
                  {path.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#c5d2cb]">
                  {path.marketingAngle}
                </p>
                <div className="mt-5 border-t border-[rgb(var(--accent-rgb)/0.2)] pt-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#a8b8b0]">
                    Capstone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#f7f3e8]">
                    {path.capstone}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            asChild
            variant="secondary"
            className="rounded-full border-[rgb(var(--accent-rgb)/0.45)] bg-transparent text-[var(--accent)] hover:bg-[rgb(var(--accent-rgb)/0.1)]"
          >
            <Link href="/learning-paths">Compare all eight paths</Link>
          </Button>
          <p className="text-sm text-[#a8b8b0]">
            {PACING_SHORT} · live or self-paced
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorksPanel() {
  return (
    <section className="w-full border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#122c24] py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <SectionTitle>How learning works</SectionTitle>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#c5d2cb]">
              Learn the idea, practice with instant feedback, reflect, and earn XP and
              badges on a clear roadmap.
            </p>

            <ol className="mt-8 grid gap-4 sm:grid-cols-2" role="list">
              {LESSON_FLOW.map((step, idx) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-[rgb(var(--accent-rgb)/0.16)] bg-[#0e241c]/80 p-5"
                >
                  <div className="font-mono text-xs font-semibold text-[var(--accent)]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-[#f7f3e8]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#c5d2cb]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)]">
            <ParallaxImage
              src="/images/product/teen-mixed-chromebook.png"
              alt="Teen learner practicing on a Chromebook"
              intensity={95}
              scale={1.3}
              className="object-center"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#122c24]/55 to-transparent" />
          </figure>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[rgb(var(--accent-rgb)/0.16)] bg-[#0e241c]/80 p-6">
            <h3 className="font-semibold text-[#f7f3e8]">Flexible schedule</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#c5d2cb]">
              <li>{PACING_BLURB}</li>
              <li>Dashboard labels lessons as Week X · Session Y (suggested structure)</li>
              <li>Works self-paced, with light mentor support, or as a live cohort</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[rgb(var(--accent-rgb)/0.16)] bg-[#0e241c]/80 p-6">
            <h3 className="font-semibold text-[#f7f3e8]">Delivery modes</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#c5d2cb]">
              {DELIVERY_MODES.map((mode) => (
                <li key={mode}>{mode}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/how-it-works"
            className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            See how lessons work in detail →
          </Link>
        </div>
      </div>
    </section>
  );
}

function AudienceSplitPanel() {
  return (
    <section className="w-full border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#0e241c] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.18)] bg-[#16352b]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <ParallaxImage
              src="/images/product/live-session-instructor.png"
              alt="Learner in a live online lesson with an instructor"
              intensity={80}
              scale={1.28}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#16352b] via-transparent to-transparent" />
          </div>
          <div className="p-6 sm:p-8">
            <School className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-[#f7f3e8]">
              For schools &amp; leaders
            </h3>
            <p className="mt-3 leading-relaxed text-[#c5d2cb]">
              Kanam instructors teach live — online or in person where available. Your team
              brings the learners and schedule; you see roster progress. Fits class periods,{" "}
              {PROGRAM_FIT_SHORT}.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#d7e0db]">
              <li className="flex gap-2">
                <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                Live Kanam instruction · progress adults can see
              </li>
              <li className="flex gap-2">
                <Monitor className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                {DEVICE_READY_LABEL}
              </li>
              <li className="flex gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                Built to align with CSTA standards · standards packet available
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-[var(--accent)] text-[#14201c] hover:bg-[rgb(var(--accent-rgb)/0.92)]"
              >
                <Link href="/educators">For schools &amp; leaders</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="rounded-full border-[rgb(var(--accent-rgb)/0.4)] bg-transparent text-[var(--accent)] hover:bg-[rgb(var(--accent-rgb)/0.1)]"
              >
                <Link href="/instructors">Meet our instructors</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.18)] bg-[#16352b]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <ParallaxImage
              src="/images/product/family-mom-daughter.png"
              alt="Parent and teen reviewing a lesson together"
              intensity={80}
              scale={1.28}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#16352b] via-transparent to-transparent" />
          </div>
          <div className="p-6 sm:p-8">
            <Users className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-[#f7f3e8]">
              For families &amp; learners
            </h3>
            <p className="mt-3 leading-relaxed text-[#c5d2cb]">
              Start with a guided demo lesson — no account needed. Then create an account,
              keep progress, and follow a clear roadmap with badges and real projects. Live
              instruction when you want a guide; structured async when you want to move at
              your own pace.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#d7e0db]">
              <li className="flex gap-2">
                <Play className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                Try the guided lesson in minutes
              </li>
              <li className="flex gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                Structured alternative to random YouTube / AI chat wandering
              </li>
              <li className="flex gap-2">
                <Monitor className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                Homeschool, enrichment, or self-paced — Chromebook & mobile ready
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-[var(--accent)] text-[#14201c] hover:bg-[rgb(var(--accent-rgb)/0.92)]"
              >
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
                className="rounded-full border-[rgb(var(--accent-rgb)/0.4)] bg-transparent text-[var(--accent)] hover:bg-[rgb(var(--accent-rgb)/0.1)]"
              >
                <Link href="/parents">For families</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustPanel() {
  return (
    <section className="w-full border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#122c24] py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Built for classrooms and credibility</SectionTitle>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#c5d2cb]">
          Kanam Academy is built to align with the{" "}
          <strong className="font-semibold text-[#f7f3e8]">
            CSTA K–12 Computer Science Standards (2017)
          </strong>
          , Levels 2 and 3A, with a forward map to the 2026 CSTA PK–12 Standards. The
          Foundations Standards Alignment packet is ready for accreditation and adoption
          conversations — clear enough for teens starting out, deep enough for anyone
          leveling up in tech.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {[
            "Programming fundamentals (Python)",
            "Data analysis + visualization",
            "AI literacy / responsible use",
            "Digital citizenship & tech fluency",
            "Cybersecurity fundamentals",
          ].map((pillar) => (
            <div
              key={pillar}
              className="rounded-2xl border border-[rgb(var(--accent-rgb)/0.16)] bg-[#0e241c]/80 p-5 text-sm font-semibold text-[#f7f3e8]"
            >
              {pillar}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            variant="secondary"
            className="rounded-full border-[rgb(var(--accent-rgb)/0.4)] bg-transparent text-[var(--accent)] hover:bg-[rgb(var(--accent-rgb)/0.1)]"
          >
            <Link href={siteConfig.links.standardsPdf} target="_blank" rel="noreferrer">
              Foundations Standards Alignment
            </Link>
          </Button>
          <Link
            href="/how-it-works#standards"
            className="inline-flex items-center text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            CSTA standards details →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqPanel() {
  const items = [
    {
      q: "What is Kanam Academy?",
      a: `A browser-based learning platform for coding, AI literacy, Advanced AI, AP CSP prep, digital literacy, data, cybersecurity, and financial literacy — with eight learning paths, interactive lessons, live or async options, and progress adults can see. ${PACING_BLURB}`,
    },
    {
      q: "Who is it for?",
      a: `Teens and anyone learning tech who wants strong live instruction or structured async classes — plus teachers, schools, families, ${PROGRAM_FIT_SHORT}, and enrichment partners.`,
    },
    {
      q: "Is the schedule fixed?",
      a: `No. ${PACING_BLURB} Go faster, slower, or build around class periods, after-school blocks, or family routines.`,
    },
    {
      q: "Can I try it without an account?",
      a: "Yes. Open the guided lesson demo — no account needed. It walks through a real Python lesson: coach notes, code blanks, Run & check, and XP.",
    },
    {
      q: "Do learners need to install software?",
      a: `No. ${DEVICE_READY_BLURB} Python and SQL run in the lesson.`,
    },
    {
      q: "How do schools use it?",
      a: `Schools and program leaders partner with Kanam for live instruction — online or in person where available — plus roster progress adults can see. Fits class periods, after-school, weekend, or structured async enrichment.`,
    },
  ];

  return (
    <section className="w-full border-t border-[rgb(var(--accent-rgb)/0.12)] bg-[#0e241c] py-14 md:py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Common questions</SectionTitle>
        <div className="mt-8 rounded-2xl border border-[rgb(var(--accent-rgb)/0.18)] bg-[#16352b] px-5 sm:px-6">
          <Accordion type="single" collapsible defaultValue="item-0">
            {items.map((item, idx) => (
              <AccordionItem
                key={item.q}
                value={`item-${idx}`}
                className="border-[rgb(var(--accent-rgb)/0.15)]"
              >
                <AccordionTrigger className="text-[#f7f3e8] hover:text-[var(--accent)] [&_svg]:text-[var(--accent)]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#c5d2cb]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-6">
          <Link
            href="/faq"
            className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalPanel() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[rgb(var(--accent-rgb)/0.35)] py-14 md:py-20">
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
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Move forward — try a real lesson today
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Open the guided demo, create an account, or request a pilot for your school or
            organization.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[var(--accent)] text-[#14201c] hover:bg-[rgb(var(--accent-rgb)/0.92)]"
          >
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              <Play className="h-4 w-4" />
              Try the guided lesson
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full border-white/45 bg-white/15 text-white hover:bg-white/25"
          >
            <Link href="/pricing">
              View plans &amp; pricing
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full border-white/45 bg-white/15 text-white hover:bg-white/25"
          >
            <Link href="/contact">Request a pilot</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function HomeStory() {
  return (
    <div className="relative overflow-hidden bg-[#0e241c] text-[#f3efe4]">
      <HeroPanel />
      <ProofStrip />
      <LearningPathsPanel />
      <HowItWorksPanel />
      <AudienceSplitPanel />
      <TrustPanel />
      <FaqPanel />
      <FinalPanel />
    </div>
  );
}
