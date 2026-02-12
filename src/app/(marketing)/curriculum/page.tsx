import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { SubpageShell } from "@/components/site/SubpageShell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Curriculum | Kanam Academy",
  description:
    "Kanam Academy Foundations (ages 12–15): human-led Python curriculum with clear scope, projects, and standards alignment.",
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

const sectionClass = "py-12 md:py-16";
const h2Class = "text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl";
const h3Class = "text-lg font-semibold tracking-tight text-zinc-950";
const bodyClass = "text-zinc-600 leading-relaxed";
const cardClass = "h-full rounded-2xl border border-zinc-900/10 bg-white/90 shadow-none";
const kanamLinkClass =
  "text-emerald-700 dark:text-emerald-400 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className={h2Class}>{children}</h2>
      <div className="mt-3 h-1 w-10 rounded-full bg-amber-400/70" />
    </div>
  );
}

function ProgramOverview() {
  return (
    <Card className={cardClass}>
      <CardHeader className="p-5 md:p-6 pb-3">
        <CardTitle className={h3Class}>Program Overview</CardTitle>
      </CardHeader>
      <CardContent className="p-5 md:p-6 pt-0">
        <dl className="space-y-2.5 text-sm">
          {overviewItems.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[110px_1fr] gap-3 border-b border-zinc-900/8 py-2 last:border-b-0"
            >
              <dt className="font-semibold text-zinc-900">{label}</dt>
              <dd className="text-zinc-700">{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}

function HeroIntro() {
  return (
    <section className={sectionClass}>
      <h1 className="text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
        Curriculum
      </h1>
      <p className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
        Kanam Academy Foundations (Ages 12–15)
      </p>
      <p className={`mt-5 max-w-3xl text-lg ${bodyClass}`}>
        Kanam Academy Foundations is a project-based Python program for learners ages
        12–15. Students develop core programming skills through direct instruction, guided
        practice, and weekly build outcomes. The curriculum emphasizes computational
        thinking, code comprehension, and clear explanation of student work.
      </p>

      <div className="mt-8 grid gap-5 lg:max-w-3xl">
        <ProgramOverview />
        <div
          id="standards"
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 md:p-6 scroll-mt-24"
        >
          <SectionHeading>Standards Alignment</SectionHeading>
          <p className={`mt-2 text-base ${bodyClass}`}>
            Curriculum designed in alignment with CSTA Computer Science Standards (Grades
            6–8).
          </p>
          <div className="mt-5 flex flex-col items-start gap-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button asChild>
                <Link
                  href={standardsPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={kanamLinkClass}
                >
                  Download Standards Alignment (PDF)
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#scope-sequence">View Syllabus</Link>
              </Button>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500">
              Maps major units to CSTA 3A benchmark codes.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Link
          href="#outcomes"
          className={`inline-flex items-center text-sm font-medium transition-colors hover:text-zinc-900 ${kanamLinkClass}`}
        >
          See what students build ↓
        </Link>
      </div>
    </section>
  );
}

export default function CurriculumPage() {
  return (
    <SubpageShell>
      <Container>
        <HeroIntro />

        <section id="scope-sequence" className={`${sectionClass} border-t border-zinc-900/10 scroll-mt-24`}>
          <SectionHeading>Scope &amp; Sequence</SectionHeading>
          <p className={`mt-3 max-w-3xl text-base ${bodyClass}`}>
            Weekly progression for Kanam Academy Foundations. Each week combines direct
            instruction, guided practice, and a concrete build outcome.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {weeks.map((week) => (
              <Card key={week.week} className={cardClass}>
                <CardHeader className="p-5 md:p-6 pb-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    {week.week}
                  </p>
                  <CardTitle className="mt-1 text-lg font-semibold leading-tight md:text-xl">
                    {week.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 md:p-6 pt-0">
                  <ul className="space-y-2 text-sm leading-relaxed text-zinc-700">
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
                  <p className="mt-4 border-t border-zinc-900/10 pt-3 text-sm font-semibold text-zinc-900">
                    Build: <span className="font-medium text-zinc-700">{week.build}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="outcomes" className={`${sectionClass} border-t border-zinc-900/10 scroll-mt-24`}>
          <SectionHeading>Student Work &amp; Outcomes</SectionHeading>
          <p className={`mt-3 max-w-3xl text-base ${bodyClass}`}>
            Examples of cumulative projects that demonstrate coding foundations, applied
            problem-solving, and communication.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {outcomesCategories.map((group) => (
              <div
                key={group.category}
                className={[
                  "rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 md:p-6",
                  group.accent ? "border-l-2 border-l-[rgb(var(--brand-rgb)/0.40)] pl-4 md:pl-5" : "",
                ].join(" ")}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {group.category}
                </h3>
                <div className="mt-3 divide-y divide-zinc-900/10">
                  {group.rows.map((row) => (
                    <div key={row.title} className="py-3 first:pt-0 last:pb-0">
                      <p className="font-semibold text-zinc-950">{row.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600">{row.outcome}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                  <span className="font-semibold text-zinc-700">Skills reinforced:</span>{" "}
                  {group.skills}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${sectionClass} border-t border-zinc-900/10`}>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-6 rounded-2xl border border-zinc-900/10 bg-white/80 px-5 py-1">
            <Accordion type="single" collapsible>
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} value={`faq-${idx}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </Container>
    </SubpageShell>
  );
}

