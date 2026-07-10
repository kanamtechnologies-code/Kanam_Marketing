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

export const metadata: Metadata = {
  title: "FAQ | Kanam Academy",
  description:
    "FAQ: who Kanam is for, four learning paths, browser-only lessons, guided demo, live or async learning, instructor class codes, and how to get started.",
};

const faqs = [
  {
    q: "What is Kanam Academy?",
    a: "A browser-based learning platform for coding, AI literacy, digital literacy, and data skills — with four 8-week learning paths, interactive lessons, XP and badges, and progress you can see. Live instruction when you want a guide; structured async when you want to move at your own pace.",
  },
  {
    q: "Who is it for?",
    a: "Teens and anyone learning tech who wants great live instruction or strong async classes — plus teachers, schools, families, and enrichment partners.",
  },
  {
    q: "What are the four learning paths?",
    a: "AI Literacy (16 lessons), Digital Literacy (16), AI + Python Starter Pack (13), and Data Analyst Track (14) — 60+ interactive lessons total, including the guided demo.",
  },
  {
    q: "Can I try it without creating an account?",
    a: "Yes. Open the guided lesson demo — no account needed. It is a real lesson tour (coach notes, code blanks, Run & check, XP), not a fake dashboard.",
  },
  {
    q: "Do learners need to install software?",
    a: "No. Kanam is browser-only and Chromebook-ready. Python and SQL run in the browser. No special software install.",
  },
  {
    q: "Is this only live cohorts?",
    a: "No. Supported models include live cohort / classroom, hybrid, self-paced enrichment, and homeschool / family use.",
  },
  {
    q: "How do instructors use Kanam?",
    a: "Separate instructor sign-in. Create a class, share a class code, assign lessons, and view roster progress (lessons completed, XP, last activity).",
  },
  {
    q: "Do adults need to be CS experts?",
    a: "No. Lessons include coach notes and plain-language explainers so adults can support with minimal prep.",
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
    q: "How do I get started?",
    a: "Try the guided lesson, create an account from Welcome, or request a pilot if you are a school or partner.",
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
            <Link href="/learning-paths">See the four learning paths</Link>
          </Button>
        </div>
      </Section>
    </SubpageShell>
  );
}
