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

export const metadata: Metadata = {
  title: "For Educators | Kanam Academy",
  description:
    "Bring instructor-led Python + AI to schools and after-school programs with an emphasis on AI literacy, not prompt-generated shortcuts. Cohort model, objectives, and progress visibility.",
};

const assessmentRows = [
  "Weekly artifact checkpoints tied to objective-level success criteria",
  "Project demonstrations with explanation of logic and debugging decisions",
  "Instructor feedback cycles for revision, clarity, and code quality",
  "Milestone progression reviews to validate readiness for next unit",
] as const;

const implementationRows = [
  "Instructor-led Zoom delivery (or hybrid support)",
  "A curriculum map aligned to ages 12–15",
  "Project prompts and showcase-ready outcomes",
  "A safe, family/school-friendly learning environment",
  "Progress visibility to support reporting",
] as const;

export default function EducatorsPage() {
  return (
    <SubpageShell
      eyebrow="For Educators"
      title="A cohort model that works for schools and programs"
      subtitle="Kanam supports implementation for schools and after-school programs: clear objectives, project-based evidence, and progress visibility for stakeholders without AI prompt-dependent instruction."
      actions={
        <>
          <Button asChild>
            <Link href="/contact">Request a demo</Link>
          </Button>
          <Link href="/curriculum" className={textLinkClass}>
            View curriculum
          </Link>
        </>
      }
      toc={[
        { href: "#overview", label: "Program overview" },
        { href: "#instructional-team", label: "Instructional team" },
        { href: "#assessment", label: "Assessment approach" },
        { href: "#implementation", label: "Implementation" },
      ]}
    >
      <Section id="overview" className="pt-0 pb-14 md:pb-20">
        <H2>Program Implementation Overview</H2>
        <p className="mt-3 max-w-4xl leading-relaxed text-foreground/80">
          Kanam Academy Foundations is structured for schools, districts, and enrichment
          partners seeking a predictable, standards-aligned coding program with live
          instruction and measurable outcomes.
        </p>
        <div className="mt-6 rounded-3xl border border-foreground/10 bg-white/55 p-6 backdrop-blur-sm md:p-10 dark:bg-background/50">
          <div className="md:grid md:grid-cols-[220px_1fr] md:gap-10">
            <aside className="hidden md:block">
              <div className="sticky top-24 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Implementation Brief
                </p>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Designed for districts, schools, and enrichment partners.
                </p>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Clear structure. Measurable outcomes.
                </p>
                <Link
                  href="/images/docs/Kanam%20Academy%20Foundations%20Standards%20Alignment.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-emerald-800 hover:underline underline-offset-4"
                >
                  Download
                </Link>
              </div>
            </aside>

            <div className="grid gap-4 md:gap-6">
              <div className="rounded-2xl border border-foreground/10 bg-background p-5 md:p-6">
                <p className="text-xs tracking-widest text-muted-foreground">01</p>
                <h3 className="text-lg md:text-xl font-semibold">Implementation Model</h3>
                <div className="mt-3 h-1 w-10 rounded-full bg-amber-400/70" />
                <ul className="mt-4 list-disc pl-5 marker:text-emerald-600 text-muted-foreground leading-relaxed space-y-1.5">
                  <li>8-week cohort structure</li>
                  <li>2 live sessions per week (2 hours each)</li>
                  <li>Total instructional time: 32 hours</li>
                  <li>Designed for grades 6–9 (Ages 12–15)</li>
                  <li>Suitable for after-school, enrichment, or supplemental CS programs</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-foreground/10 bg-background p-5 md:p-6">
                <p className="text-xs tracking-widest text-muted-foreground">02</p>
                <h3 className="text-lg md:text-xl font-semibold">Instructional Structure</h3>
                <div className="mt-3 h-1 w-10 rounded-full bg-amber-400/70" />
                <ul className="mt-4 list-disc pl-5 marker:text-emerald-600 text-muted-foreground leading-relaxed space-y-1.5">
                  <li>Live Zoom instruction led by experienced educators</li>
                  <li>Guided practice during class</li>
                  <li>Weekly project builds tied to learning objectives</li>
                  <li>Capstone presentation in final week</li>
                  <li>Beginner-friendly pacing with structured milestones</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 md:p-6">
                <p className="text-xs tracking-widest text-muted-foreground">03</p>
                <h3 className="text-lg md:text-xl font-semibold">Standards Alignment</h3>
                <div className="mt-3 h-1 w-10 rounded-full bg-amber-400/70" />
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Curriculum aligned to CSTA Computer Science Standards (Grades 6–8 / 3A
                  band). Emphasis on:
                </p>
                <ul className="mt-3 list-disc pl-5 marker:text-emerald-600 text-muted-foreground leading-relaxed space-y-1.5">
                  <li>Algorithms &amp; problem solving</li>
                  <li>Variables, conditionals, loops</li>
                  <li>Data organization (lists)</li>
                  <li>Program design &amp; debugging</li>
                  <li>Responsible AI use and critical evaluation</li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="/images/docs/Kanam%20Academy%20Foundations%20Standards%20Alignment.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-800 hover:underline underline-offset-4"
                  >
                    Download Standards Alignment (PDF)
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 md:p-6">
                <p className="text-xs tracking-widest text-muted-foreground">04</p>
                <h3 className="text-lg md:text-xl font-semibold">Assessment &amp; Reporting</h3>
                <div className="mt-3 h-1 w-10 rounded-full bg-amber-400/70" />
                <ul className="mt-4 list-disc pl-5 marker:text-emerald-600 text-muted-foreground leading-relaxed space-y-1.5">
                  <li>Weekly project artifacts</li>
                  <li>Structured rubrics</li>
                  <li>Milestone-based progression</li>
                  <li>Capstone presentation rubric</li>
                  <li>Clear evidence of skill development</li>
                </ul>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Progress documentation available for families and administrators upon
                  request.
                </p>
              </div>

              <div className="rounded-2xl border border-foreground/10 bg-background p-5 md:p-6">
                <p className="text-xs tracking-widest text-muted-foreground">05</p>
                <h3 className="text-lg md:text-xl font-semibold">Technology Requirements</h3>
                <div className="mt-3 h-1 w-10 rounded-full bg-amber-400/70" />
                <ul className="mt-4 list-disc pl-5 marker:text-emerald-600 text-muted-foreground leading-relaxed space-y-1.5">
                  <li>Chromebook-compatible</li>
                  <li>Python-based instruction</li>
                  <li>No software installation required for learners</li>
                  <li>Stable internet connection required</li>
                  <li>Instructor-managed live sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="instructional-team" className="border-t border-foreground/10">
        <H2>Instructional Team &amp; Delivery</H2>
        <div className="mt-3 h-1 w-12 rounded-full bg-amber-400/70" />
        <div className="mt-5 rounded-3xl border border-foreground/10 bg-white/70 p-6 backdrop-blur-sm md:p-8 dark:bg-background/60">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-base leading-relaxed md:text-lg">
                Kanam Academy instruction is delivered live by qualified educators with
                real-world technical experience and structured teaching practice. Our
                instructional model emphasizes consistency, academic rigor, and
                measurable outcomes—particularly for learners new to computer science.
              </p>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                Instructors are responsible for:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed marker:text-emerald-600 md:text-lg">
                <li>
                  Delivering standards-aligned instruction with clear objectives
                </li>
                <li>
                  Facilitating guided practice and structured build milestones
                </li>
                <li>Supporting debugging and code comprehension</li>
                <li>
                  Assessing work using defined rubrics and milestone checkpoints
                </li>
                <li>Maintaining a safe, supportive learning environment</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold md:text-xl">
                Instructional consistency
              </h3>
              <p className="mt-2 text-base leading-relaxed md:text-lg">
                Lessons follow a consistent session format (instruction → guided
                practice → application → check for understanding), supporting
                predictable implementation in school and enrichment settings.
              </p>
            </div>

            <SectionImage
              src="/images/family_pics/pexels-august-de-richelieu-4260758.jpg"
              alt="Instructor delivering live instruction to student cohort"
              frameClassName="h-[280px] md:h-full"
            />
          </div>
        </div>
        <div className="mt-5 rounded-3xl border border-foreground/10 bg-emerald-500/5 p-6 md:p-8">
          <h3 className="text-lg font-semibold md:text-xl">
            Instructor Qualifications &amp; Safeguards
          </h3>
          <p className="mt-3 text-base leading-relaxed md:text-lg">
            Kanam Academy instructors are selected for both technical competence and
            instructional ability. All instructional staff undergo background
            screening prior to assignment and complete structured onboarding aligned
            to curriculum delivery standards.
          </p>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            Instructor preparation includes:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed marker:text-emerald-600 md:text-lg">
            <li>Background screening prior to student engagement</li>
            <li>Curriculum-specific training and milestone alignment</li>
            <li>
              Classroom facilitation standards and instructional consistency
            </li>
            <li>Age-appropriate communication protocols</li>
            <li>Professional conduct and learner safety expectations</li>
          </ul>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            This framework supports consistent implementation, measurable
            instructional outcomes, and safe learning environments across cohorts.
            Instruction emphasizes AI literacy and evaluation, not prompt-generated
            completion.
          </p>
        </div>
      </Section>

      <Section id="assessment" className="border-t border-foreground/10">
        <H2>Assessment approach</H2>
        <Band className="mt-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Assessment is embedded throughout instruction and aligned to observable coding
            behaviors. Schools receive clear, implementation-ready evidence of student
            progress rather than isolated completion checks.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-foreground/10 bg-background p-5">
              <h3 className="text-lg font-semibold">Evidence Collected Weekly</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {assessmentRows.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-background p-5">
              <h3 className="text-lg font-semibold">Rubric Domains</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Concept accuracy (variables, conditionals, loops, lists)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Program structure and readability</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Debugging process and iteration quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Communication of logic in student explanations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-foreground/10 bg-background p-5">
              <h3 className="text-lg font-semibold">Reporting Cadence</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Weekly progress snapshots by milestone</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Midpoint status review for pacing and intervention planning</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Final capstone rubric and presentation outcome summary</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5">
              <h3 className="text-lg font-semibold">Intervention & Support Signals</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Missed milestone flags for targeted instructor support</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Structured reteach/revision loops before progression</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>Clear next-step guidance for students and partner staff</span>
                </li>
              </ul>
            </div>
          </div>
        </Band>
      </Section>

      <Section id="implementation" className="border-t border-foreground/10 pb-0">
        <H2>Implementation</H2>
        <div className="mt-5 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h3 className="text-lg font-semibold">What programs get</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {implementationRows.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/contact">Request a demo</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/curriculum">View curriculum</Link>
                </Button>
              </div>
            </div>
            <SectionImage
              src="/images/family_pics/pexels-august-de-richelieu-4260758.jpg"
              alt="Classroom-style group instruction for student cohorts"
              caption="Built for classroom and program implementation."
              frameClassName="min-h-[320px]"
            />
          </div>
        </div>
      </Section>
    </SubpageShell>
  );
}
