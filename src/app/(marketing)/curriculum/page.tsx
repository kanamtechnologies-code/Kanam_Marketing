import type { Metadata } from "next";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
  textLinkClass,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Curriculum | Kanam Academy",
  description:
    "Kanam Academy Foundations (ages 12–15): human-led Python curriculum with clear scope, projects, standards alignment, and responsible AI literacy without prompt shortcuts.",
};

const standardsPdfUrl =
  "/images/docs/Kanam%20Academy%20Foundations%20Standards%20Alignment.pdf";

const overviewItems = [
  ["Ages", "12–15"],
  ["Language", "Python"],
  ["Format", "Live, human-led instruction"],
  ["Approach", "Project-based progression"],
  ["Outcomes", "Weekly builds + capstone showcase"],
] as const;

const weeks = [
  {
    week: "Week 1",
    title: "Python Basics",
    objectives: [
      "Use variables to store and update values",
      "Work with input/output and core data types",
      "Read simple output and debug basic mistakes",
    ],
    build: "Personalized intro program",
  },
  {
    week: "Week 2",
    title: "Decisions",
    objectives: [
      "Write conditional logic with if/else",
      "Compare values and evaluate outcomes",
      "Design branching behavior in small programs",
    ],
    build: "Choose-your-path mini story",
  },
  {
    week: "Week 3",
    title: "Loops",
    objectives: [
      "Use repetition to reduce manual coding",
      "Track counters and control loop flow",
      "Test repeated logic for correctness",
    ],
    build: "Scorekeeper / practice drill",
  },
  {
    week: "Week 4",
    title: "Game Logic",
    objectives: [
      "Combine loops and conditionals in one system",
      "Track points, states, and user interactions",
      "Refine gameplay through testing and iteration",
    ],
    build: "Mini quiz or reaction game",
  },
  {
    week: "Week 5",
    title: "Lists",
    objectives: [
      "Store and update multiple values efficiently",
      "Iterate through collections for processing",
      "Connect inputs to simple data workflows",
    ],
    build: "Simple data tracker",
  },
  {
    week: "Week 6",
    title: "Refactoring & Organization",
    objectives: [
      "Improve readability with cleaner structure",
      "Reuse logic with function-style organization",
      "Reduce duplication and improve maintainability",
    ],
    build: "Cleaner version of a prior project",
  },
  {
    week: "Week 7",
    title: "Automation Concepts",
    objectives: [
      "Model rules-based helper behavior with decision trees",
      "Explain why outputs are accepted or revised",
      "Apply critical thinking before automation",
    ],
    build: "Helper program with rules",
  },
  {
    week: "Week 8",
    title: "Capstone",
    objectives: [
      "Plan scope, tasks, and technical approach",
      "Build, test, and revise a complete project",
      "Present and explain design decisions clearly",
    ],
    build: "Capstone showcase project",
  },
] as const;

const outcomesCategories = [
  {
    category: "Foundations",
    skills: "Variables, input/output, conditionals",
    rows: [
      {
        title: "Personalized Intro Program",
        outcome: "Input-driven scripts using variables and clear output.",
      },
      {
        title: "Choose-Your-Path Story",
        outcome: "Branching logic with conditionals and story flow.",
      },
    ],
  },
  {
    category: "Control Flow & Logic",
    skills: "Loops, branching, rule systems",
    rows: [
      {
        title: "Quiz / Reaction Game",
        outcome: "Loops + conditionals to drive game rules and scoring.",
      },
      {
        title: "Rules-Based Helper",
        outcome: "Decision-tree logic that automates responses without generative AI.",
      },
    ],
  },
  {
    category: "Data & Structure",
    skills: "Lists, input handling, data organization",
    rows: [
      {
        title: "Simple Data Tracker",
        outcome: "Collect and organize multiple values using lists and inputs.",
      },
    ],
  },
  {
    category: "Capstone",
    skills: "Integrated project design, testing, communication",
    accent: true,
    rows: [
      {
        title: "Capstone Showcase",
        outcome: "A complete program students present and explain end-to-end.",
      },
    ],
  },
] as const;

const faqs = [
  {
    q: "Is this beginner-friendly?",
    a: "Yes. Foundations is designed for students starting from zero, with guided pacing and live support.",
  },
  {
    q: "Do students need prior coding experience?",
    a: "No prior coding is required. We begin with fundamentals like variables and input/output.",
  },
  {
    q: "Is this self-paced?",
    a: "No. Instruction is live and human-led, with real-time teaching, feedback, and structure.",
  },
  {
    q: "What tools do students use?",
    a: "Students use age-appropriate Python learning tools and guided project workflows provided by Kanam.",
  },
  {
    q: "How are students supported?",
    a: "Instructors provide live instruction, guided practice, and project feedback throughout each unit.",
  },
] as const;

export default function CurriculumPage() {
  return (
    <SubpageShell
      eyebrow="Program overview"
      title="Program Overview"
      subtitle="Kanam Academy Foundations (Ages 12–15) is an 8-week, standards-aligned computer science program delivering foundational Python instruction through live, educator-led sessions and structured project milestones."
      actions={
        <>
          <Button asChild>
            <Link href={standardsPdfUrl} target="_blank" rel="noreferrer">
              Download Standards Alignment (PDF)
            </Link>
          </Button>
          <p className="basis-full text-sm text-muted-foreground leading-relaxed">
            The curriculum is developed in alignment with the CSTA Computer Science
            Standards (Grades 6–8 / Level 3A). Each instructional unit includes clearly
            defined learning objectives mapped to benchmark standards across Algorithms
            &amp; Programming, Data &amp; Analysis, and Computational Thinking Practices.
          </p>
          <p className="basis-full text-sm text-muted-foreground leading-relaxed">
            Students demonstrate mastery through cumulative project builds, structured
            assessments, and final presentation. Documentation of standards alignment and
            unit mapping is available upon request.
          </p>
        </>
      }
      toc={[
        { href: "#overview", label: "Overview" },
        { href: "#scope", label: "Weekly Learning Plan" },
        { href: "#student-work", label: "Student Work" },
      ]}
    >
      <Section id="overview" className="pt-0">
        <Band>
          <H2>Program Overview</H2>
          <p className="mt-3 max-w-4xl text-muted-foreground leading-relaxed">
            AI is taught as a computer science topic within the program, not as a shortcut
            for producing answers. Students build understanding first, then learn how to
            evaluate AI behavior responsibly with clear human oversight.
          </p>
          <dl className="mt-6 space-y-2.5 text-sm">
            {overviewItems.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[110px_1fr] gap-3 border-b border-foreground/10 py-2 last:border-b-0"
              >
                <dt className="font-semibold text-foreground">{label}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </Band>
      </Section>

      <Section id="scope" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Weekly Learning Plan</H2>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Weekly progression for Kanam Academy Foundations. Each week combines direct
          instruction, guided practice, and a concrete build outcome.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {weeks.map((week) => (
            <Card
              key={week.week}
              className="h-full rounded-2xl border border-foreground/15 bg-white/78 shadow-[0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-[rgb(var(--accent-rgb)/0.12)] transition-shadow hover:shadow-[0_14px_34px_rgba(15,23,42,0.13)] dark:bg-background/60"
            >
              <CardHeader className="p-5 pb-3 md:p-6 md:pb-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {week.week}
                </p>
                <CardTitle className="mt-1 text-lg font-semibold leading-tight md:text-xl">
                  {week.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 md:p-6 md:pt-0">
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {week.objectives.map((objective) => (
                    <li key={objective} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]"
                      />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-foreground/10 pt-3 text-sm font-semibold text-foreground">
                  Build: <span className="font-medium text-muted-foreground">{week.build}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="student-work" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Student Work &amp; Outcomes</H2>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Examples of cumulative projects that demonstrate coding foundations, applied
          problem-solving, and communication.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {outcomesCategories.map((group) => (
            <Band
              key={group.category}
              className={group.accent ? "border-l-2 border-l-[rgb(var(--brand-rgb)/0.4)]" : undefined}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <div className="mt-3 divide-y divide-foreground/10">
                {group.rows.map((row) => (
                  <div key={row.title} className="py-3 first:pt-0 last:pb-0">
                    <p className="font-semibold text-foreground">{row.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.outcome}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Skills reinforced:</span>{" "}
                {group.skills}
              </p>
            </Band>
          ))}
        </div>
      </Section>

      <Section className="border-t border-foreground/10 pb-0">
        <H2>Frequently Asked Questions</H2>
        <Band className="mt-6 p-5 md:p-6">
          <Accordion type="single" collapsible>
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`faq-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Band>
      </Section>
    </SubpageShell>
  );
}
