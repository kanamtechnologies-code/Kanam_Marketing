import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { SubpageShell } from "@/components/site/SubpageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How it works | Kanam Academy",
  description:
    "How Kanam Academy Foundations works: structured, human-led instruction with weekly milestones, capstone outcomes, and standards alignment.",
};

export default function HowItWorksPage() {
  const atAGlance = [
    ["Duration", "8 weeks"],
    ["Sessions", "2 per week"],
    ["Session length", "2 hours"],
    ["Total instruction", "32 hours"],
    ["Format", "Live, human-led (Zoom)"],
  ] as const;

  const formatRows = [
    ["Duration", "8 Weeks"],
    ["Sessions per Week", "2"],
    ["Session Length", "2 Hours"],
    ["Total Instructional Time", "32 Hours"],
    ["Format", "Live, human-led instruction (Zoom)"],
  ] as const;

  const steps = [
    {
      number: "01",
      title: "Join",
      body: "Families enroll in a cohort and receive a simple onboarding checklist, setup guidance, and a clear schedule so learners begin confidently.",
      outcome: "Clear setup and structured start",
    },
    {
      number: "02",
      title: "Build",
      body: "Students attend live sessions, complete guided practice, and finish each week with a concrete build that reinforces the concept introduced.",
      outcome: "Weekly project milestone",
    },
    {
      number: "03",
      title: "Grow",
      body: "Learners refine projects, debug with support, and practice explaining their logic. The program culminates in a capstone showcase.",
      outcome: "Capstone project + explanation skills",
    },
  ] as const;

  const weekPanels = [
    {
      title: "Session 1 (2 Hours)",
      bullets: [
        "Introduction of new programming concept",
        "Guided examples and instructor modeling",
        "Structured practice exercises",
        "Live feedback and clarification",
      ],
    },
    {
      title: "Between Sessions",
      bullets: [
        "Guided reinforcement tasks",
        "Project progress work",
        "Reflection and review prompts",
      ],
    },
    {
      title: "Session 2 (2 Hours)",
      bullets: [
        "Concept reinforcement and deeper application",
        "Build time with instructor support",
        "Debugging and refinement",
        "Completion of weekly milestone",
      ],
    },
  ] as const;

  const liveInstructionBullets = [
    "Real-time explanation of code",
    "Interactive question opportunities",
    "Immediate clarification when stuck",
    "Clear checkpoints during lessons",
    "Beginner-friendly pace designed for measurable growth",
  ] as const;

  const progression = [
    "Input-driven programs",
    "Branching logic applications",
    "Loop-based automation",
    "Data tracking with lists",
    "Structured rule-based helper systems",
  ] as const;

  const capstoneRequirements = [
    "Variables",
    "Conditional logic",
    "Loops",
    "Lists",
    "User input",
    "Clear program structure",
  ] as const;

  const supportedBy = [
    "Live instructor guidance",
    "Structured checkpoints",
    "Debugging assistance",
    "Clear pacing and expectations",
    "Cohort-based learning",
  ] as const;

  const finishWith = [
    "Weekly build artifacts they can demonstrate",
    "A rules-based helper program (automation logic)",
    "A completed capstone project",
    "The ability to explain how their code works",
  ] as const;

  const faqs = [
    {
      q: "Do students need prior experience?",
      a: "No prior coding experience is required.",
    },
    {
      q: "Is this self-paced?",
      a: "The program follows a structured cohort schedule with guided practice between sessions.",
    },
    {
      q: "What technology is required?",
      a: "Students attend live Zoom sessions and use a Python development environment.",
    },
    {
      q: "What happens if a student struggles?",
      a: "Instructors provide clarification, structured review, and debugging guidance.",
    },
  ] as const;

  const sectionClass = "py-10 md:py-12";
  const dividerClass = "border-t border-zinc-900/10";
  const panelClass =
    "rounded-2xl border border-zinc-900/10 bg-white/85 p-5 md:p-6";
  const kanamLinkClass =
    "text-emerald-700 dark:text-emerald-400 hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40";

  const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950">
        {children}
      </h2>
      <div className="mt-3 h-1 w-10 rounded-full bg-amber-400/70" />
    </div>
  );

  return (
    <SubpageShell>
      <Container>
        <div className="mx-auto w-full max-w-6xl px-6">
          <section className="py-14 md:py-20">
            <header className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Program structure
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950">
                How Kanam Academy Works
              </h1>
              <p className="text-xl font-semibold tracking-tight text-zinc-900">
                Structured learning. Human guidance. Measurable progress.
              </p>
              <p className="max-w-4xl text-zinc-600 leading-relaxed">
                Kanam Academy Foundations is designed for learners ages 12–15 who benefit
                from clear structure and consistent milestones. The program combines live,
                human-led instruction with guided independent practice so students build real
                programming skill — not just exposure.
              </p>
            </header>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild>
                <Link href="/curriculum">Explore the curriculum</Link>
              </Button>
              <Link
                href="/documents/standards-alignment.pdf"
                className={`text-sm font-semibold ${kanamLinkClass}`}
              >
                Download standards alignment (PDF)
              </Link>
              <Link
                href="/documents/syllabus.pdf"
                className={`text-sm font-semibold ${kanamLinkClass}`}
              >
                View program syllabus (PDF)
              </Link>
            </div>

            <div className={`mt-8 ${panelClass}`}>
              <SectionHeading>At-a-glance</SectionHeading>
              <dl className="mt-4 grid gap-2 text-sm md:grid-cols-2">
                {atAGlance.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[130px_1fr] gap-3 border-t border-zinc-900/10 py-2 first:border-t-0 first:pt-0"
                  >
                    <dt className="font-semibold text-zinc-900">{label}</dt>
                    <dd className="text-zinc-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section id="format" className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>Program Format</SectionHeading>
            <div className={`mt-5 ${panelClass}`}>
              <dl className="grid gap-2 text-sm md:grid-cols-2">
                {formatRows.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[170px_1fr] gap-3 border-t border-zinc-900/10 py-2 first:border-t-0 first:pt-0"
                  >
                    <dt className="font-semibold text-zinc-900">{label}</dt>
                    <dd className="text-zinc-700">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Students meet twice per week for structured instruction. Each session builds
                directly on the previous one, progressing from foundational Python concepts
                to a complete capstone project.
              </p>
            </div>
          </section>

          <section id="process" className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>The Learning Process</SectionHeading>
            <div className="mt-6 relative">
              <div
                aria-hidden="true"
                className="absolute left-4 top-2 bottom-2 w-px bg-[rgb(var(--brand-rgb)/0.22)]"
              />
              <ol className="space-y-8 pl-12">
                {steps.map((step) => (
                  <li key={step.number} className="space-y-2">
                    <div className="text-3xl font-semibold text-[rgb(var(--brand-rgb)/0.45)]">
                      {step.number}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-950">
                      {step.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      {step.body}
                    </p>
                    <p className="text-sm font-medium text-zinc-800">
                      Outcome: <span className="font-normal text-zinc-600">{step.outcome}</span>
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="week" className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>What a Typical Week Looks Like</SectionHeading>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {weekPanels.map((panel) => (
                <div key={panel.title} className={panelClass}>
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-950">{panel.title}</h3>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-zinc-600 leading-relaxed marker:text-[rgb(var(--accent-rgb)/0.9)]">
                    {panel.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              This structure ensures steady progress without overwhelming students.
            </p>
          </section>

          <section className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>Live Instruction Model</SectionHeading>
            <div className={`mt-5 ${panelClass}`}>
              <p className="text-zinc-600 leading-relaxed">
                All sessions are taught live by experienced instructors.
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-zinc-600 leading-relaxed marker:text-[rgb(var(--accent-rgb)/0.9)]">
                {liveInstructionBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>Practice &amp; Projects</SectionHeading>
            <div className={`mt-5 ${panelClass}`}>
              <p className="text-zinc-600 leading-relaxed">
                Between sessions, students complete guided exercises and build small projects
                that reinforce new skills.
              </p>
              <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-zinc-700 leading-relaxed">
                {progression.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Each build prepares students for the final capstone.
              </p>
            </div>
          </section>

          <section id="capstone" className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>Capstone Showcase</SectionHeading>
            <div className={`mt-5 ${panelClass}`}>
              <p className="text-zinc-600 leading-relaxed">
                In the final week, students design and build an independent project
                integrating all core programming constructs.
              </p>
              <h3 className="mt-5 text-lg md:text-xl font-semibold text-zinc-950">
                Capstone requirements
              </h3>
              <ul className="mt-3 list-disc pl-5 grid gap-1 text-sm text-zinc-700 leading-relaxed sm:grid-cols-2">
                {capstoneRequirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Students present their work and explain how their code functions,
                demonstrating true comprehension — not memorization.
              </p>
            </div>
          </section>

          <section id="support" className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>Support Structure</SectionHeading>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-zinc-950">
                  How students are supported
                </h3>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-zinc-600 leading-relaxed marker:text-[rgb(var(--accent-rgb)/0.9)]">
                  {supportedBy.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-zinc-950">
                  Learning integrity
                </h3>
                <p className="mt-3 text-zinc-600 leading-relaxed">
                  No generative shortcuts are used in the learning process. Students develop
                  genuine programming foundations and practice explaining their work
                  independently.
                </p>
              </div>
            </div>
          </section>

          <section id="standards" className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>Standards &amp; Outcomes</SectionHeading>
            <div className="mt-5 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 md:p-6">
              <p className="text-zinc-600 leading-relaxed">
                Kanam Academy Foundations is designed in alignment with CSTA Computer Science
                Standards (Grade Band 3A, Grades 6–8).
              </p>
              <h3 className="mt-5 text-lg md:text-xl font-semibold text-zinc-950">
                Students finish with
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-zinc-700 leading-relaxed">
                {finishWith.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild>
                  <Link href="/documents/standards-alignment.pdf" className={kanamLinkClass}>
                    Download standards alignment (PDF)
                  </Link>
                </Button>
                <Link
                  href="/curriculum"
                  className={`text-sm font-semibold ${kanamLinkClass}`}
                >
                  Explore the curriculum
                </Link>
              </div>
            </div>
          </section>

          <section className={`${sectionClass} ${dividerClass}`}>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <Card
                  key={item.q}
                  className="rounded-2xl border border-zinc-900/10 bg-white/85 shadow-none"
                >
                  <CardHeader className="p-5 md:p-6 pb-2">
                    <CardTitle className="text-lg font-semibold">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 md:p-6 pt-0">
                    <p className="text-zinc-600 leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </SubpageShell>
  );
}
