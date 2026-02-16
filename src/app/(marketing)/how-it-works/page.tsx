import type { Metadata } from "next";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
  textLinkClass,
} from "@/components/layout/SubpageShell";
import { SectionImage } from "@/components/site/SectionImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How it works | Kanam Academy",
  description:
    "How Kanam Academy Foundations works: structured, human-led instruction with weekly milestones, capstone outcomes, standards alignment, and responsible AI literacy without prompt shortcuts.",
};

export default function HowItWorksPage() {
  const atAGlance = [
    ["Duration", "8 weeks"],
    ["Sessions", "2 per week"],
    ["Session length", "2 hours"],
    ["Total instruction", "32 hours"],
    ["Format", "Live, human-led (Zoom)"],
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
      bullets: ["Guided reinforcement tasks", "Project progress work", "Reflection and review prompts"],
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

  return (
    <SubpageShell
      eyebrow="Program structure"
      title="How Kanam Academy Works"
      subtitle="Structured learning. Human guidance. Measurable progress. Students learn what AI is and how to evaluate it—without relying on prompt shortcuts."
      actions={
        <>
          <Button asChild>
            <Link href="/curriculum">Explore the curriculum</Link>
          </Button>
          <Link href="/documents/standards-alignment.pdf" className={textLinkClass}>
            Download standards alignment (PDF)
          </Link>
          <Link href="/documents/syllabus.pdf" className={textLinkClass}>
            View program syllabus (PDF)
          </Link>
        </>
      }
      toc={[
        { href: "#format", label: "Format" },
        { href: "#process", label: "Process" },
        { href: "#week", label: "Typical Week" },
        { href: "#capstone", label: "Capstone" },
        { href: "#support", label: "Support" },
        { href: "#standards", label: "Standards" },
      ]}
    >
      <Section id="format" className="pt-0">
        <Band>
          <H2>Program Format</H2>
          <p className="mt-4 max-w-4xl text-muted-foreground leading-relaxed">
            Kanam Academy Foundations is designed for learners ages 12–15 who benefit from
            clear structure and consistent milestones. The program combines live,
            human-led instruction with guided independent practice so students build real
            programming skill — not just exposure.
          </p>
          <p className="mt-4 max-w-4xl text-muted-foreground leading-relaxed">
            Students meet twice per week for structured instruction. Each session builds
            directly on the previous one, progressing from foundational Python concepts to
            a complete capstone project.
          </p>
          <dl className="mt-4 grid gap-2 text-sm md:grid-cols-2">
            {atAGlance.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[130px_1fr] gap-3 border-t border-foreground/10 py-2 first:border-t-0 first:pt-0"
              >
                <dt className="font-semibold text-foreground">{label}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </Band>
      </Section>

      <Section id="process" className="border-t border-foreground/10">
        <H2>The Learning Process</H2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="relative">
            <div aria-hidden="true" className="absolute left-4 top-2 bottom-2 w-px bg-foreground/10" />
            <ol className="space-y-8 pl-12">
              {steps.map((step) => (
                <li key={step.number} className="space-y-2">
                  <div className="text-3xl font-semibold text-foreground/20">{step.number}</div>
                  <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                  <p className="text-sm font-medium text-foreground">
                    Outcome: <span className="font-normal text-muted-foreground">{step.outcome}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <SectionImage
            src="/images/family_pics/pexels-august-de-richelieu-4260744.jpg"
            alt="Instructor leading students through a structured coding lesson"
            caption="Guided live instruction with clear weekly milestones"
            frameClassName="min-h-[360px]"
          />
        </div>
      </Section>

      <Section id="week" className="border-t border-foreground/10">
        <H2>What a Typical Week Looks Like</H2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {weekPanels.map((panel) => (
            <Band key={panel.title} className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">{panel.title}</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed marker:text-[rgb(var(--accent-rgb)/0.9)]">
                {panel.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Band>
          ))}
        </div>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          This structure ensures steady progress without overwhelming students.
        </p>
      </Section>

      <Section className="border-t border-foreground/10">
        <H2>Live Instruction Model</H2>
        <Band className="mt-5">
          <p className="text-muted-foreground leading-relaxed">
            All sessions are taught live by experienced instructors.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed marker:text-[rgb(var(--accent-rgb)/0.9)]">
            {liveInstructionBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Band>
      </Section>

      <Section className="border-t border-foreground/10">
        <H2>Practice &amp; Projects</H2>
        <Band className="mt-5">
          <p className="text-muted-foreground leading-relaxed">
            Between sessions, students complete guided exercises and build small projects
            that reinforce new skills.
          </p>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
            {progression.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Each build prepares students for the final capstone.
          </p>
        </Band>
      </Section>

      <Section id="capstone" className="border-t border-foreground/10">
        <H2>Capstone Showcase</H2>
        <Band className="mt-5">
          <p className="text-muted-foreground leading-relaxed">
            In the final week, students design and build an independent project integrating
            all core programming constructs.
          </p>
          <h3 className="mt-5 text-lg md:text-xl font-semibold">Capstone requirements</h3>
          <ul className="mt-3 list-disc pl-5 grid gap-1 text-sm text-muted-foreground leading-relaxed sm:grid-cols-2 marker:text-[rgb(var(--accent-rgb)/0.9)]">
            {capstoneRequirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Students present their work and explain how their code functions,
            demonstrating true comprehension — not memorization.
          </p>
        </Band>
      </Section>

      <Section id="support" className="border-t border-foreground/10">
        <H2>Support Structure</H2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6">
            <h3 className="text-lg md:text-xl font-semibold">How students are supported</h3>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed marker:text-[rgb(var(--accent-rgb)/0.9)]">
              {supportedBy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6">
            <h3 className="text-lg md:text-xl font-semibold">Learning integrity</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We do not teach by having students generate answers from AI prompts.
              Students build genuine programming foundations first, then learn how to
              analyze AI output, question reliability, and explain their own work
              independently.
            </p>
          </div>
        </div>
      </Section>

      <Section id="standards" className="border-t border-foreground/10">
        <H2>Standards &amp; Outcomes</H2>
        <div className="mt-5 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
          <p className="text-muted-foreground leading-relaxed">
            Kanam Academy Foundations is designed in alignment with CSTA Computer Science
            Standards (Grade Band 3A, Grades 6–8).
          </p>
          <h3 className="mt-5 text-lg md:text-xl font-semibold">Students finish with</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed marker:text-[rgb(var(--accent-rgb)/0.9)]">
            {finishWith.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild>
              <Link href="/documents/standards-alignment.pdf">Download standards alignment (PDF)</Link>
            </Button>
            <Link href="/curriculum" className={textLinkClass}>
              Explore the curriculum
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-foreground/10 pb-0">
        <H2>Frequently Asked Questions</H2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <Card key={item.q} className="rounded-2xl border border-foreground/15 bg-white/78 shadow-[0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-[rgb(var(--accent-rgb)/0.12)] transition-shadow hover:shadow-[0_14px_34px_rgba(15,23,42,0.13)] dark:bg-background/60">
              <CardHeader className="p-5 pb-2 md:p-6 md:pb-2">
                <CardTitle className="text-lg font-semibold">{item.q}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 md:p-6 md:pt-0">
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </SubpageShell>
  );
}
