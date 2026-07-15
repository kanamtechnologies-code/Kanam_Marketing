import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, HelpCircle, Users } from "lucide-react";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DEVICE_READY_BLURB,
  LESSONS_COUNT_LABEL,
  PACING_BLURB,
  PATHS_LIST_SHORT,
  PROGRAM_FIT_SHORT,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | Kanam Academy",
  description:
    "FAQ: who Kanam is for, five learning paths, flexible schedule, after-school and Scout programs, Chromebook and mobile ready, guided demo, and how to get started.",
};

const FAQ_GROUPS = [
  {
    id: "basics",
    label: "Basics",
    icon: HelpCircle,
    items: [
      {
        q: "What is Kanam Academy?",
        a: `A browser-based learning platform for coding, AI literacy, digital literacy, data, and cybersecurity — with five learning paths, interactive lessons, XP and badges, and progress you can see. ${PACING_BLURB} Live instruction when you want a guide; structured async when you want to move at your own pace.`,
      },
      {
        q: "Who is it for?",
        a: `Teens and anyone learning tech — plus teachers, schools, families, ${PROGRAM_FIT_SHORT}, and enrichment partners.`,
      },
      {
        q: "What are the five learning paths?",
        a: `AI Literacy (16), Digital Literacy (16), Cybersecurity (16), Financial Literacy (16), AI + Python Starter Pack (14), and Data Analyst Track (14) — ${LESSONS_COUNT_LABEL} interactive lessons total across ${PATHS_LIST_SHORT}.`,
      },
      {
        q: "How do I get started?",
        a: "Try the guided lesson, create an account from Welcome (teachers share a class code; self-paced learners can get a self-paced class code), or request information if you are a school, after-school program, Scout troop, or partner.",
      },
    ],
  },
  {
    id: "learning",
    label: "Learning & schedule",
    icon: BookOpen,
    items: [
      {
        q: "Is the schedule fixed at 8 weeks?",
        a: `No. ${PACING_BLURB} Go faster, slower, or build a calendar around class periods, after-school blocks, weekend meetings, Scout troop nights, or family routines.`,
      },
      {
        q: "Is this only live cohorts?",
        a: "No. Supported models include live cohort / classroom, after-school and weekend programs, Scout troops and youth groups, hybrid, self-paced enrichment, and homeschool / family use. Self-paced learners can get a self-paced class code to follow a path on their own.",
      },
      {
        q: "How does assessment work?",
        a: "Auto-graded guided and scratch exercises, check-for-understanding, capstone projects, and XP/badge progress visibility — designed so mastery is demonstrated, not just clicked through.",
      },
      {
        q: "What about the Data Analyst track?",
        a: "Learners write real SQL and use charts (bar, pie, line, histogram, scatter) in the browser — no Python required. Ask questions, query tables, and tell the story with visuals.",
      },
      {
        q: "What about the Cybersecurity path?",
        a: "Sixteen lessons of high-school cyber fundamentals focused on defending systems, data, and people — not learning to hack. Capstone: Defend the Scenario.",
      },
      {
        q: "Is the curriculum standards-aligned?",
        a: "Yes. Standards-aligned curriculum documentation is available (CSTA Levels 2 and 3A primary; also K–12 CS Framework, ISTE Students 2016, Common Core Math statistics/probability for data). Request the curriculum packet for adoption conversations.",
      },
    ],
  },
  {
    id: "access",
    label: "Access & devices",
    icon: GraduationCap,
    items: [
      {
        q: "What devices work with Kanam?",
        a: DEVICE_READY_BLURB,
      },
      {
        q: "Do learners need to install software?",
        a: `No. ${DEVICE_READY_BLURB} Python and SQL run in the lesson.`,
      },
      {
        q: "Can I try it without creating an account?",
        a: "Yes. Open the guided lesson demo — no account needed. It is a real lesson tour (coach notes, code blanks, Run & check, XP), not a fake dashboard.",
      },
    ],
  },
  {
    id: "partners",
    label: "Schools & programs",
    icon: Users,
    items: [
      {
        q: "Can after-school, weekend, or Scout programs use Kanam?",
        a: "Yes. After-school programs, weekend cohorts, and Boy Scout and Girl Scout troops are a natural fit: Kanam instructors teach live — online or in person where available — while leaders see roster progress.",
      },
      {
        q: "How do schools and programs use Kanam?",
        a: "Partner with Kanam for live instruction — online or in person where available. Your team brings learners and the schedule; we teach; you see lessons completed, XP, and last activity. Contact us to get started.",
      },
      {
        q: "Do adults need to be CS experts?",
        a: "No. Kanam instructors teach the live sessions. Teachers, after-school staff, and Scout leaders host and coordinate — they don’t need to be the coding expert in the room.",
      },
    ],
  },
] as const;

const QUICK_LINKS = [
  {
    title: "For families",
    body: "Tutoring, async tracks, and progress parents can see.",
    href: "/parents",
  },
  {
    title: "For schools & leaders",
    body: "Live instruction for classrooms, programs, and Scout troops.",
    href: "/educators",
  },
  {
    title: "How it works",
    body: "Lesson flow, pacing, mastery, and standards.",
    href: "/how-it-works",
  },
] as const;

export default function FaqPage() {
  return (
    <SubpageShell overlapNav={false}>
      <div className="space-y-12 md:space-y-14 lg:space-y-16">
        <header className="kanam-fade-up max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
            FAQ
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
            Clear answers.
            <span className="block">
              Then{" "}
              <span className="text-[rgb(var(--accent-rgb)/1)]">Move Forward.</span>
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Straight answers for learners, families, teachers, and school decision-makers —
            without the sales fog.
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
            <Button asChild variant="secondary">
              <Link href="/contact">Still have a question?</Link>
            </Button>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <nav
            aria-label="FAQ topics"
            className="hidden lg:col-span-3 lg:block"
          >
            <div className="sticky top-24 space-y-1">
              <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-2)]">
                Topics
              </p>
              {FAQ_GROUPS.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-[rgb(var(--brand-2-rgb)/0.08)] hover:text-zinc-950"
                >
                  <group.icon className="h-4 w-4 text-[var(--brand-2)]" aria-hidden />
                  {group.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="space-y-10 lg:col-span-9">
            {FAQ_GROUPS.map((group) => (
              <section
                key={group.id}
                id={group.id}
                aria-labelledby={`${group.id}-heading`}
                className="scroll-mt-24"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(var(--brand-2-rgb)/0.12)] text-[var(--brand-2)]">
                    <group.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h2
                    id={`${group.id}-heading`}
                    className="font-display text-2xl font-semibold tracking-tight text-zinc-950"
                  >
                    {group.label}
                  </h2>
                </div>

                <div className="overflow-hidden rounded-[1.35rem] border border-zinc-900/10 bg-white/90 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
                  <Accordion type="single" collapsible className="px-1 sm:px-2">
                    {group.items.map((item, idx) => (
                      <AccordionItem
                        key={item.q}
                        value={`${group.id}-${idx}`}
                        className="border-zinc-900/8 px-4 sm:px-5"
                      >
                        <AccordionTrigger className="py-5 text-left font-semibold text-zinc-950 hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-[var(--muted)] leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <section
          aria-labelledby="faq-links-heading"
          className="rounded-[1.5rem] border border-zinc-900/8 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.1)] via-[rgb(var(--background))] to-[rgb(var(--accent-rgb)/0.16)] px-5 py-7 sm:px-7 sm:py-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
            Keep exploring
          </p>
          <h2
            id="faq-links-heading"
            className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
          >
            Useful next steps
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {QUICK_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-[1.15rem] border border-zinc-900/8 bg-white/80 px-5 py-4 transition-colors hover:border-[rgb(var(--brand-2-rgb)/0.35)] hover:bg-white"
              >
                <span className="font-display text-lg font-semibold text-zinc-950">
                  {item.title}
                </span>
                <span className="mt-1 flex-1 text-sm leading-snug text-zinc-600">
                  {item.body}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-2)]">
                  Go
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section
          aria-labelledby="faq-cta-heading"
          className="relative overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.35)] via-transparent to-[rgb(var(--accent-rgb)/0.2)]" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent-rgb)/1)]">
              Still curious?
            </p>
            <h2
              id="faq-cta-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Ask us directly — or try a lesson first.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">
              We’ll reply within 1 business day. Or open the guided demo and see the real
              experience in minutes.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">Contact Kanam</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
              >
                <Link
                  href={siteConfig.links.app}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get started
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
