import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, HelpCircle, Users } from "lucide-react";

import { SubpageShell } from "@/components/layout/SubpageShell";
import {
  duskEyebrowClass,
  duskInsetClass,
  duskMutedClass,
  duskTitleClass,
  FullBleed,
  PageBand,
} from "@/components/layout/PageBands";
import {
  BrandCtaBand,
  brandCtaPrimaryBtnClass,
  brandCtaSecondaryBtnClass,
} from "@/components/site/BrandCtaBand";
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
    "FAQ: who Kanam is for, six learning paths, flexible schedule, after-school and Scout programs, Chromebook and mobile ready, guided demo, and how to get started.",
};

const FAQ_GROUPS = [
  {
    id: "basics",
    label: "Basics",
    icon: HelpCircle,
    items: [
      {
        q: "What is Kanam Academy?",
        a: `A browser-based learning platform for coding, AI literacy, digital literacy, data, cybersecurity, and financial literacy — with six learning paths, interactive lessons, XP and badges, and progress you can see. ${PACING_BLURB} Live instruction when you want a guide; structured async when you want to move at your own pace.`,
      },
      {
        q: "Who is it for?",
        a: `Teens and anyone learning tech — plus teachers, schools, families, ${PROGRAM_FIT_SHORT}, and enrichment partners.`,
      },
      {
        q: "What are the six learning paths?",
        a: `AI Literacy (16), Digital Literacy (16), Cybersecurity (16), Financial Literacy (16), Python & AI Foundations (14), and Data Analyst (14) — ${LESSONS_COUNT_LABEL} interactive lessons total across ${PATHS_LIST_SHORT}.`,
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
        q: "Is a track really 16 sessions over 8 weeks?",
        a: `Yes — that’s the designed program length for one full track. ${PACING_BLURB} Go faster, slower, or build a calendar around class periods, after-school blocks, weekend meetings, Scout troop nights, or family routines.`,
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
        q: "Is Kanam aligned with CSTA standards?",
        a: "Yes. Kanam Academy is built to align with the CSTA K–12 Computer Science Standards (2017), Levels 2 (grades 6–8) and 3A (grades 9–10). We also map to the K–12 CS Framework, ISTE Standards for Students (2024), Common Core Math statistics/probability (Data track), Jump$tart/CEE 2021 (Financial Literacy), and a forward map to the 2026 CSTA PK–12 Standards. Request the Foundations Standards Alignment packet for adoption conversations.",
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
      <FullBleed>
        <PageBand tone="mid" className="pt-16 md:pt-24">
          <header className="kanam-fade-up max-w-3xl">
            <p className={duskEyebrowClass}>FAQ</p>
            <h1 className={`mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08] ${duskTitleClass}`}>
              Clear answers. <span className="text-[var(--accent)]">Then move forward.</span>
            </h1>
            <p className={`mt-4 max-w-2xl text-base sm:text-lg ${duskMutedClass}`}>
              Straight answers for learners, families, teachers, and school decision-makers —
              without the sales fog.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className={brandCtaPrimaryBtnClass}>
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Try the guided lesson
                </Link>
              </Button>
              <Button asChild variant="secondary" className={brandCtaSecondaryBtnClass}>
                <Link href="/contact">Still have a question?</Link>
              </Button>
            </div>
          </header>
        </PageBand>

        <PageBand tone="base">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <nav aria-label="FAQ topics" className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-24 space-y-1">
                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Topics
                </p>
                {FAQ_GROUPS.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-[#c5d2cb] transition-colors hover:bg-white/10 hover:text-[#f7f3e8]"
                  >
                    <group.icon className="h-4 w-4 text-[var(--accent)]" aria-hidden />
                    {group.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="space-y-10 lg:col-span-9">
              {FAQ_GROUPS.map((group) => (
                <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`}>
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(var(--accent-rgb)/0.12)] text-[var(--accent)]">
                      <group.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h2 id={`${group.id}-heading`} className={`text-2xl ${duskTitleClass}`}>
                      {group.label}
                    </h2>
                  </div>
                  <div className={`overflow-hidden px-4 sm:px-5 ${duskInsetClass}`}>
                    <Accordion type="single" collapsible>
                      {group.items.map((item, idx) => (
                        <AccordionItem
                          key={item.q}
                          value={`${group.id}-${idx}`}
                          className="border-[rgb(var(--accent-rgb)/0.15)]"
                        >
                          <AccordionTrigger className="py-5 text-left font-semibold text-[#f7f3e8] hover:text-[var(--accent)] hover:no-underline [&_svg]:text-[var(--accent)]">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="pb-5 text-[#c5d2cb]">
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
        </PageBand>

        <PageBand tone="mid">
          <BrandCtaBand aria-labelledby="faq-links-heading" className="px-5 py-7 sm:px-7 sm:py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Keep exploring
          </p>
          <h2
            id="faq-links-heading"
            className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl"
          >
            Useful next steps
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {QUICK_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-[1.15rem] border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(247_243_232/0.08)] px-5 py-4 transition-colors hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-[rgb(247_243_232/0.14)]"
              >
                <span className="font-display text-lg font-semibold text-[#f7f3e8]">
                  {item.title}
                </span>
                <span className="mt-1 flex-1 text-sm leading-snug text-white/80">
                  {item.body}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)]">
                  Go
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          </BrandCtaBand>
        </PageBand>

        <PageBand tone="proof">
          <div className="mx-auto max-w-6xl">
            <p className={duskEyebrowClass}>Still curious?</p>
            <h2 id="faq-cta-heading" className={`mt-2 text-3xl sm:text-4xl ${duskTitleClass}`}>
              Ask us directly — or try a lesson first.
            </h2>
            <p className={`mt-3 max-w-2xl text-base ${duskMutedClass}`}>
              We’ll reply within 1 business day. Or open the guided demo and see the real experience in minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className={brandCtaPrimaryBtnClass}><Link href="/contact">Contact Kanam</Link></Button>
              <Button asChild size="lg" variant="secondary" className={brandCtaSecondaryBtnClass}>
                <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">Get started</Link>
              </Button>
            </div>
          </div>
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}
