import type { Metadata } from "next";
import Link from "next/link";

import {
  Band,
  Section,
  SubpageShell,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site";
import { DEVICE_READY_BLURB, LESSONS_COUNT_LABEL, PACING_BLURB, PATHS_LIST_SHORT, PROGRAM_FIT_SHORT } from "@/lib/learning-paths";

export const metadata: Metadata = {
  title: "FAQ | Kanam Academy",
  description:
    "FAQ: who Kanam is for, five learning paths, flexible schedule, after-school and Scout programs, Chromebook and mobile ready, guided demo, and how to get started.",
};

const faqs = [
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
    a: `AI Literacy (16 lessons), Digital Literacy (16), Cybersecurity (16), AI + Python Starter Pack (14), and Data Analyst Track (14) — ${LESSONS_COUNT_LABEL} interactive lessons total across ${PATHS_LIST_SHORT}.`,
  },
  {
    q: "Is the schedule fixed at 8 weeks?",
    a: `No. ${PACING_BLURB} Go faster, slower, or build a calendar around class periods, after-school blocks, weekend meetings, Scout troop nights, or family routines.`,
  },
  {
    q: "Can after-school, weekend, or Scout programs use Kanam?",
    a: "Yes. After-school programs, weekend cohorts, and Boy Scout and Girl Scout troops are a natural fit: create a class, share a code, assign lessons, and track progress — with coach notes so adult leaders can support without being CS experts.",
  },
  {
    q: "What devices work with Kanam?",
    a: DEVICE_READY_BLURB,
  },
  {
    q: "Can I try it without creating an account?",
    a: "Yes. Open the guided lesson demo — no account needed. It is a real lesson tour (coach notes, code blanks, Run & check, XP), not a fake dashboard.",
  },
  {
    q: "Do learners need to install software?",
    a: `No. ${DEVICE_READY_BLURB} Python and SQL run in the lesson.`,
  },
  {
    q: "Is this only live cohorts?",
    a: "No. Supported models include live cohort / classroom, after-school and weekend programs, Scout troops and youth groups, hybrid, self-paced enrichment, and homeschool / family use. Self-paced learners can get a self-paced class code to follow a path on their own.",
  },
  {
    q: "How do instructors use Kanam?",
    a: "Separate instructor sign-in. Create a class, share a class code, assign lessons, and view roster progress (lessons completed, XP, last activity).",
  },
  {
    q: "Do adults need to be CS experts?",
    a: "No. Lessons include coach notes and plain-language explainers so adults can support with minimal prep — including teachers, after-school staff, and Scout leaders.",
  },
  {
    q: "How does assessment work?",
    a: "Auto-graded guided and scratch exercises, check-for-understanding, capstone projects, and XP/badge progress visibility — designed so mastery is demonstrated, not just clicked through.",
  },
  {
    q: "Is the curriculum standards-aligned?",
    a: "Yes. Standards-aligned curriculum documentation is available (CSTA Levels 2 and 3A primary; also K–12 CS Framework, ISTE Students 2016, Common Core Math statistics/probability for data). Request the curriculum packet for adoption conversations.",
  },
  {
    q: "What about the Data Analyst track?",
    a: "It builds on intro Python foundations (recommended after starting AI + Python). Learners write real SQL and use charts (bar, pie, line, histogram, scatter) in the browser.",
  },
  {
    q: "What about the Cybersecurity path?",
    a: "Sixteen lessons of high-school cyber fundamentals focused on defending systems, data, and people — not learning to hack. Capstone: Defend the Scenario.",
  },
  {
    q: "How do I get started?",
    a: "Try the guided lesson, create an account from Welcome (teachers share a class code; self-paced learners can get a self-paced class code), or request a pilot if you are a school, after-school program, Scout troop, or partner.",
  },
] as const;

export default function FaqPage() {
  return (
    <SubpageShell
      eyebrow="FAQ"
      title="Frequently asked questions"
      subtitle="Clear answers for learners, families, teachers, and school decision-makers."
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">Contact us</Link>
          </Button>
        </>
      }
    >
      <Section className="pt-0 pb-0">
        <Band className="p-5 md:p-6">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Band>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
              Get started
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/learning-paths">See the five learning paths</Link>
          </Button>
        </div>
      </Section>
    </SubpageShell>
  );
}
