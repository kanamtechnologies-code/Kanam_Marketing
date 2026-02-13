"use client";

import { Fragment, type ReactNode, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Brain,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PanelShell, PanelText, PanelMedia } from "@/components/site/PanelShell";
import { DeviceFrame } from "@/components/site/MediaFrames";
import { SectionImage } from "@/components/site/SectionImage";
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
        "text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl [text-shadow:0_1px_0_rgba(255,255,255,0.75),0_18px_40px_rgba(15,23,42,0.10)]",
        className
      )}
    >
      <span className="inline-block max-w-full align-top">
        {children}
        <div aria-hidden="true" className="mt-3 h-1 w-12 rounded-full bg-amber-400/70" />
      </span>
    </h2>
  );
}

function HeroPanel() {
  return (
    <section className="relative w-full min-h-[90svh] overflow-hidden bg-transparent pt-8 pb-4 md:pt-12 md:pb-6">
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.20]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/video/8733062-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/8 via-transparent to-amber-400/8" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--brand-2-rgb)/0.24)] via-white/82 to-white/92" />
      </div>

      <div className="w-full">
        <div className="relative z-10 flex flex-col justify-center">
          <PanelShell>
            <PanelText>
              <div className="rounded-2xl border border-foreground/10 bg-white/70 p-6 md:p-8 backdrop-blur-sm">
                <h1 className="text-5xl font-black tracking-tight text-zinc-950 sm:text-6xl">
                  Live, instructor-led Python & AI learning for young beginners
                </h1>
                <p className="mt-5 text-zinc-700">
                  Students learn through live instruction, hands-on projects, and consistent
                  support from real educators — even if they are starting with no prior coding
                  experience.
                </p>
                <p className="mt-4 text-zinc-600">
                  Designed for families and educators seeking a safe, structured path with
                  clear milestones and outcomes students can confidently explain and showcase.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild>
                    <Link href="/curriculum">Explore the Curriculum</Link>
                  </Button>
                </div>
              </div>

              <ul
                className="mt-8 grid overflow-hidden rounded-2xl bg-[rgb(var(--brand-2-rgb)/0.08)] text-zinc-900 ring-1 ring-black/5 backdrop-blur-sm sm:grid-cols-3"
                role="list"
              >
                <li className="relative flex items-start gap-3 bg-white/35 p-4 sm:p-5">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 ring-1 ring-black/10">
                    <Video
                      className="h-4.5 w-4.5 text-emerald-700"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="text-base font-semibold leading-tight">
                      Live Zoom instructors
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent-rgb)/0.55)] to-transparent"
                  />
                </li>

                <li className="relative flex items-start gap-3 border-t border-black/5 bg-white/35 p-4 sm:border-l sm:border-t-0 sm:p-5">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 ring-1 ring-black/10">
                    <Users
                      className="h-4.5 w-4.5 text-emerald-700"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="text-base font-semibold leading-tight">
                      Beginner-friendly
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent-rgb)/0.55)] to-transparent"
                  />
                </li>

                <li className="relative flex items-start gap-3 border-t border-black/5 bg-white/35 p-4 sm:border-l sm:border-t-0 sm:p-5">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 ring-1 ring-black/10">
                    <Sparkles
                      className="h-4.5 w-4.5 text-emerald-700"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="text-base font-semibold leading-tight">
                      Project-based outcomes
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent-rgb)/0.55)] to-transparent"
                  />
                </li>
              </ul>
            </PanelText>
            <PanelMedia>
              <SectionImage
                src="/images/family_pics/pexels-kampus-6297625.jpg"
                alt="Learner and instructor collaborating during a live coding session"
                className="h-full"
                frameClassName="min-h-[380px] md:min-h-[540px] lg:min-h-[620px]"
                priority
              />
            </PanelMedia>
          </PanelShell>
        </div>
      </div>
    </section>
  );
}

function ValuePillarsPanel() {
  const items = [
    {
      label: "Live Zoom instructors",
      body: "Real-time guidance so learners never get stuck alone.",
    },
    {
      label: "Beginner-friendly",
      body: "Designed for first-time coders with a steady, supportive pace.",
    },
    {
      label: "Project-based outcomes",
      body: "Students build things they can show, explain, and be proud of.",
    },
    {
      label: "Human-first learning",
      body: "Understanding comes before speed or shortcuts.",
    },
    {
      label: "Responsible AI education",
      body: "Careful, age-appropriate use with clear guidance.",
    },
    {
      label: "Safe for kids + schools",
      body: "Family-friendly expectations and a calm learning environment.",
    },
    {
      label: "Progress you can track",
      body: "Milestones parents and educators can understand.",
    },
  ];
  return (
    <section className="w-full border-t border-foreground/10 bg-emerald-500/5 py-14 md:py-20">
      <div className="w-full">
        <div className="mx-auto w-full max-w-[92vw]">
          <SectionTitle className="sm:tracking-tight md:tracking-tight">
            Why families trust Kanam
          </SectionTitle>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Kanam Academy was built to make complex topics like coding and AI approachable,
            structured, and safe for young learners. We combine a clear curriculum with
            live instruction so students aren’t left guessing — and families always know
            what’s being learned and why.
          </p>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Kanam is built for clarity and support. Learners don’t get stuck alone—real
            instructors guide them live, step by step.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[92vw]">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.55fr_1fr] lg:gap-8">
            <SectionImage
              src="/images/family_pics/pexels-august-de-richelieu-4260325%20(1).jpg"
              alt="Live instructor guiding a student through coding"
              caption="Live, human-led learning"
              frameClassName="h-full min-h-[560px]"
            />
            <div className="h-full rounded-2xl bg-[rgb(var(--brand-2-rgb)/0.08)] px-6 py-8 shadow-[0_12px_32px_rgba(15,23,42,0.10)] ring-1 ring-[rgb(var(--brand-2-rgb)/0.18)]">
              <ul className="space-y-0">
                {items.map((item, idx) => (
                  <Fragment key={item.label}>
                    <li className="py-4 first:pt-0 last:pb-0">
                      <div className="grid gap-2 text-zinc-700 md:grid-cols-[240px_minmax(0,1fr)] md:items-start md:gap-x-5">
                        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-900">
                          {item.label}
                        </div>
                        <p className="text-base leading-7 text-zinc-700">{item.body}</p>
                      </div>
                    </li>
                    {idx < items.length - 1 ? (
                      <li aria-hidden="true" className="h-px bg-zinc-900/10" />
                    ) : null}
                    {idx === 2 ? (
                      <li aria-hidden="true" className="py-4">
                        <div className="relative flex items-center justify-center">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgb(var(--accent-rgb)/0.60)] to-transparent" />
                          <span className="absolute inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-800 ring-1 ring-[rgb(var(--accent-rgb)/0.55)] shadow-[0_6px_18px_rgba(15,23,42,0.10)]">
                            <Sparkles className="h-3 w-3 text-[rgb(var(--accent-rgb)/0.95)]" />
                            More ways we support learners
                          </span>
                        </div>
                      </li>
                    ) : null}
                  </Fragment>
                ))}
              </ul>
            </div>
            <SectionImage
              src="/images/family_pics/pexels-timur-weber-9127614.jpg"
              alt="Student working independently in a family-friendly setting"
              caption="Family-friendly structure"
              frameClassName="h-full min-h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildPanel() {
  const trustTrio = [
    { icon: Users, label: "Human-led instruction" },
    { icon: Sparkles, label: "Project-based learning" },
    { icon: GraduationCap, label: "Students build real, explainable work" },
  ] as const;

  const projectSteps = [
    {
      title: "Data Tracker (simple lists/inputs)",
      micro: "Start with variables, inputs, and basic outputs.",
      detail:
        "Students begin with Python foundations: storing values in variables, collecting user input, and printing clear output in simple tracker-style programs.",
      pythonFocus: "Variables, input/output, basic types, and lists.",
      aiAlignment:
        "Builds the data-handling mindset needed for later AI work: clean inputs, clear structure, and traceable outputs.",
      outcomes: [
        "Stores and updates learner-entered values correctly.",
        "Validates input before using it in a result.",
        "Explains how input quality affects downstream behavior.",
      ],
    },
    {
      title: "Quiz Game (score tracking)",
      micro: "Use decision logic to score and respond.",
      detail:
        "Students implement a quiz engine with answer validation, score state, and clear feedback loops to reinforce correctness and revision.",
      pythonFocus: "Variables, loops, branching, and state updates.",
      aiAlignment:
        "Introduces evaluation thinking: compare output to expected behavior and refine the logic.",
      outcomes: [
        "Tracks score across rounds with reliable state handling.",
        "Separates question logic from display/feedback logic.",
        "Debugs incorrect outcomes using traceable test cases.",
      ],
    },
    {
      title: "Mini Game (logic + loops)",
      micro: "Apply loops to build repeatable game flow.",
      detail:
        "Students build a mini game loop where decisions, win conditions, and repeated updates are controlled by explicit program logic.",
      pythonFocus: "Loop control, condition checks, and function reuse.",
      aiAlignment:
        "Reinforces that reliable automation starts with clear rules and controlled repetition.",
      outcomes: [
        "Designs game rules with measurable win/loss conditions.",
        "Uses loops to manage turns, timing, or repeated actions.",
        "Refactors game logic into reusable helper functions.",
      ],
    },
    {
      title: "Story Generator (creative coding)",
      micro: "Organize code with functions and reusable prompts.",
      detail:
        "Students structure larger programs with helper functions and reusable prompt templates, strengthening code organization and readability.",
      pythonFocus: "Functions, string handling, lists/dictionaries, and templating.",
      aiAlignment:
        "Shows prompting as a structured skill that depends on context, constraints, and revision.",
      outcomes: [
        "Builds reusable prompt templates with explicit variables.",
        "Evaluates coherence across generated drafts.",
        "Refines prompts to improve specificity and consistency.",
      ],
    },
    {
      title: "AI Helper (rules-based chatbot)",
      micro: "Introduce AI through rule-based helper design.",
      detail:
        "After programming foundations are in place, students build a rules-based AI helper and learn the difference between scripted decisions and model-like behavior.",
      pythonFocus: "Conditionals, functions, input validation, and flow control.",
      aiAlignment:
        "Teaches responsible AI use: guided prompts, review of outputs, and clear limits on when AI should be trusted.",
      outcomes: [
        "Implements deterministic response rules for common cases.",
        "Tests where outputs fail and revises helper logic.",
        "Explains when AI support is useful versus when manual reasoning is required.",
      ],
    },
    {
      title: "Capstone Showcase Project",
      micro: "Combine Python + AI concepts in a final build.",
      detail:
        "Students integrate variables, logic, loops, function structure, and responsible AI usage into a final project they present and defend.",
      pythonFocus: "End-to-end project structure, modular code, and testing.",
      aiAlignment:
        "Demonstrates responsible AI usage with justification, verification, and human oversight.",
      outcomes: [
        "Presents a working build with clear technical walkthrough.",
        "Defends where AI was used and where it was intentionally avoided.",
        "Explains debugging, revisions, and final implementation choices.",
      ],
    },
  ] as const;

  const [pinnedIdx, setPinnedIdx] = useState<number | null>(null);
  const [previewIdx, setPreviewIdx] = useState<number | null>(null);
  const activeIdx = previewIdx ?? pinnedIdx ?? 0;

  return (
    <section className="w-full border-t border-foreground/10 bg-emerald-500/5 py-14 md:py-20">
      <div className="w-full">
        <PanelShell>
          <PanelText>
            <SectionTitle>What students build and take with them</SectionTitle>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Every unit leads to something tangible — not just knowledge, but confidence
              and capability.
            </p>

            {/* Trust Trio (compact, calm) */}
            <ul className="mt-4 flex flex-wrap items-center gap-2" role="list">
              {trustTrio.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/55 px-3 py-1 text-sm font-medium text-zinc-800 ring-1 ring-black/5">
                      <Icon
                        className="h-4 w-4 text-[rgb(var(--accent-rgb)/0.90)]"
                        aria-hidden="true"
                      />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </PanelText>
          <PanelMedia>
            <DeviceFrame
              imageSrc="/images/family_pics/pexels-kampus-6297625.jpg"
              imageAlt="Student working on a laptop with guidance"
            />
          </PanelMedia>
        </PanelShell>

        <div className="mx-auto mt-8 w-full max-w-[92vw]">
          {/* Project Path (12-col grid on desktop) */}
          <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
            <div className="lg:col-span-7">
              <ol className="relative space-y-1 pl-0" role="list">
                <div
                  aria-hidden="true"
                  className="absolute left-[14px] top-[40px] bottom-0 w-px bg-zinc-900/15"
                />

                {projectSteps.map((step, idx) => {
                  const isPinned = pinnedIdx === idx;
                  const isPreviewing = previewIdx === idx;
                  const isActive = isPinned || isPreviewing || activeIdx === idx;
                  const detailId = `project-step-detail-${idx}`;

                  return (
                    <li key={step.title} className="relative">
                      <button
                        type="button"
                        className={cn(
                          "group relative w-full rounded-xl px-3 py-3.5 text-left",
                          "transition-colors motion-reduce:transition-none",
                          "hover:bg-white/55 focus-visible:bg-white/55",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.30)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                          "before:absolute before:inset-y-2 before:left-0 before:w-[2px] before:rounded-full before:bg-transparent",
                          isActive &&
                            "bg-white/60 before:bg-[rgb(var(--accent-rgb)/0.55)]"
                        )}
                        aria-expanded={isPinned}
                        aria-controls={detailId}
                        onMouseEnter={() => setPreviewIdx(idx)}
                        onMouseLeave={() => setPreviewIdx(null)}
                        onFocus={() => setPreviewIdx(idx)}
                        onBlur={() => setPreviewIdx(null)}
                        onClick={() => setPinnedIdx((cur) => (cur === idx ? null : idx))}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute left-0 top-3.5 grid h-7 w-7 place-items-center rounded-full text-xs font-semibold",
                            "ring-1 ring-black/10 bg-white/70 text-zinc-800",
                            isActive &&
                              "ring-1 ring-[rgb(var(--accent-rgb)/0.30)] bg-[rgb(var(--accent-rgb)/0.12)] text-zinc-950"
                          )}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>

                        <span className="ml-10 flex items-start justify-between gap-4">
                          <span className="min-w-0">
                            <h3 className="truncate text-base font-semibold leading-tight text-zinc-950 lg:pr-6">
                              {step.title}
                            </h3>
                            <p className="mt-1 text-sm leading-snug text-zinc-600">
                              {step.micro}
                            </p>
                          </span>
                        </span>

                        {/* Mobile accordion detail */}
                        <div
                          id={detailId}
                          className={cn(
                            "mt-3 grid lg:hidden",
                            "transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none",
                            isPinned ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="rounded-xl bg-white/70 p-3 text-sm leading-6 text-zinc-700 ring-1 ring-black/5">
                              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                                Currently viewing
                              </div>
                              <div className="mt-2 text-sm font-semibold text-zinc-900">
                                {step.title}
                              </div>
                              <p className="mt-2 text-zinc-600">{step.detail}</p>
                              <div className="mt-3 space-y-2 text-sm text-zinc-700">
                                <p>
                                  <span className="font-semibold text-zinc-900">Python focus:</span>{" "}
                                  {step.pythonFocus}
                                </p>
                                <p>
                                  <span className="font-semibold text-zinc-900">AI alignment:</span>{" "}
                                  {step.aiAlignment}
                                </p>
                              </div>
                              <ul className="mt-3 space-y-1.5 text-sm text-zinc-700">
                                {step.outcomes.map((point) => (
                                  <li key={point} className="flex gap-2">
                                    <span
                                      aria-hidden="true"
                                      className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.8)]"
                                    />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Desktop detail panel (sticky + aligned) */}
            <aside className="hidden lg:block lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl bg-white/65 p-6 ring-1 ring-zinc-900/10">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Currently viewing
                  </div>
                  <div className="mt-2 text-lg font-semibold leading-tight text-zinc-950">
                    {projectSteps[activeIdx].title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {projectSteps[activeIdx].detail}
                  </p>
                  <div className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                    <p>
                      <span className="font-semibold text-zinc-900">Python focus:</span>{" "}
                      {projectSteps[activeIdx].pythonFocus}
                    </p>
                    <p>
                      <span className="font-semibold text-zinc-900">AI alignment:</span>{" "}
                      {projectSteps[activeIdx].aiAlignment}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                    {projectSteps[activeIdx].outcomes.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.75)]"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <p className="mt-8 text-base leading-7 text-zinc-600">
            Students finish with real projects they can explain, demo, and be proud of.
          </p>
        </div>
      </div>
    </section>
  );
}

function DifferencePanel() {
  return (
    <section className="w-full border-t border-foreground/10 bg-transparent py-14 md:py-20">
      <div className="w-full">
        <PanelShell>
          <PanelText>
            <SectionTitle>What makes Kanam different</SectionTitle>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Families usually choose between self-paced platforms or tutoring. Kanam takes
              a different approach—combining structure, live teaching, and outcomes.
            </p>
            <p className="mt-3 text-lg leading-8 text-zinc-600">
              Learners follow a clear curriculum, build real projects each unit, and get
              guidance that keeps progress steady and confidence high.
            </p>
          </PanelText>
          <PanelMedia>
            <DeviceFrame
              imageSrc="/images/app_pics/pexels-katerina-holmes-5905700.jpg"
              imageAlt="Learning platform interface on a laptop"
            />
          </PanelMedia>
        </PanelShell>

        <div className="mx-auto mt-8 grid w-full max-w-[92vw] items-stretch gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.15fr] lg:gap-x-10">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="rounded-xl border border-zinc-900/12 bg-white/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-800 ring-1 ring-zinc-900/8">
              Common approaches
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1 lg:col-start-3">
            <div className="rounded-xl border border-[rgb(var(--accent-rgb)/0.45)] bg-[rgb(var(--accent-rgb)/0.14)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-900 ring-1 ring-[rgb(var(--accent-rgb)/0.28)]">
              The Kanam approach
            </div>
          </div>
          <Card className="h-full border-[rgb(var(--brand-2-rgb)/0.22)] bg-[rgb(var(--brand-2-rgb)/0.08)] shadow-[0_12px_32px_rgba(15,23,42,0.10)] ring-1 ring-[rgb(var(--brand-2-rgb)/0.16)] transition-shadow hover:shadow-[0_16px_36px_rgba(15,23,42,0.13)]">
            <CardHeader className="pt-7">
              <CardTitle className="text-base">Self-paced videos</CardTitle>
              <div className="text-base font-medium leading-7 text-zinc-600">
                Watch-first, mostly solo learning.
              </div>
            </CardHeader>
            <CardContent className="pb-7">
              <ul className="space-y-2 text-base leading-7 text-zinc-700">
                <li>Watch-first lessons</li>
                <li>Limited live feedback</li>
                <li>Easy to fall behind without support</li>
                <li>Best for highly independent learners</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full border-[rgb(var(--brand-2-rgb)/0.22)] bg-[rgb(var(--brand-2-rgb)/0.08)] shadow-[0_12px_32px_rgba(15,23,42,0.10)] ring-1 ring-[rgb(var(--brand-2-rgb)/0.16)] transition-shadow hover:shadow-[0_16px_36px_rgba(15,23,42,0.13)]">
            <CardHeader className="pt-7">
              <CardTitle className="text-base">Unstructured tutoring</CardTitle>
              <div className="text-base font-medium leading-7 text-zinc-600">
                Helpful help, but outcomes vary.
              </div>
            </CardHeader>
            <CardContent className="pb-7">
              <ul className="space-y-2 text-base leading-7 text-zinc-700">
                <li>Helpful one-on-one guidance</li>
                <li>Pacing varies week to week</li>
                <li>Often no shared curriculum</li>
                <li>Outcomes depend on the tutor</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full border-2 border-[rgb(var(--accent-rgb)/0.9)] bg-[rgb(var(--brand-2-rgb)/0.10)] shadow-[0_14px_36px_rgba(15,23,42,0.14)] ring-1 ring-[rgb(var(--accent-rgb)/0.24)] transition-shadow hover:shadow-[0_18px_42px_rgba(15,23,42,0.18)]">
            <CardHeader className="pt-7">
              <div className="mb-2 inline-flex w-fit rounded-full border border-[rgb(var(--accent-rgb)/0.45)] bg-[rgb(var(--accent-rgb)/0.14)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-900">
                Kanam approach
              </div>
              <CardTitle>Kanam Academy</CardTitle>
              <div className="text-base font-medium leading-7 text-zinc-600">
                Structure + live teaching + outcomes.
              </div>
            </CardHeader>
            <CardContent className="pb-7">
              <ul className="space-y-2 text-base leading-7 text-zinc-700">
                <li>Live, instructor-led learning (Zoom)</li>
                <li>Structured beginner curriculum</li>
                <li>Project outcomes every unit</li>
                <li>Support built in, not an add-on</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="mx-auto mt-6 w-full max-w-[92vw] text-center text-base leading-7 text-zinc-600">
          Kanam is designed for beginners who need clarity, encouragement, and structure—not
          shortcuts.
        </p>
      </div>
    </section>
  );
}

function HowItWorksPanel() {
  const steps = [
    {
      title: "Join",
      body: "Enroll in Kanam Academy Foundations (Ages 12–15). Families receive a simple start checklist so learners begin confidently.",
      outcome: "Clear setup + cohort start",
    },
    {
      title: "Build",
      body: "Attend live, human-led Zoom sessions and complete guided practice. Each week ends with a concrete build.",
      outcome: "Weekly project milestone",
    },
    {
      title: "Grow",
      body: "Refine projects, debug with support, and practice explaining your work. Finish with a capstone showcase.",
      outcome: "Capstone + explanation skills",
    },
  ];

  const panels = [
    {
      title: "Live Zoom instruction",
      bullets: [
        "Real-time teaching with examples, questions, and interactive practice",
        "Clear lesson outcomes and checkpoints",
        "Beginner-friendly pace with supportive guidance",
      ],
    },
    {
      title: "Practice + projects between sessions",
      bullets: [
        "Guided practice tasks tied to the week’s concept",
        "Projects that build from fundamentals (variables → logic → loops → lists)",
        "Human help when stuck + structured review before moving on",
      ],
    },
  ] as const;

  const outcomes = [
    "Weekly builds they can demo",
    "A rules-based helper (automation logic)",
    "A capstone project they present and explain",
  ] as const;

  const standardsHref = "/documents/standards-alignment.pdf";

  return (
    <section className="border-t border-foreground/10 bg-transparent py-14 md:py-20">
      <div className="mx-auto w-full max-w-[92vw]">
        <div className="rounded-3xl bg-zinc-900/[0.03] p-6 md:p-8 lg:p-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Simple, supportive process
          </p>
          <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
            How Kanam works
          </h2>
          <div aria-hidden="true" className="mt-3 h-1 w-12 rounded-full bg-amber-400/70" />
          <p className="text-base font-semibold leading-relaxed text-zinc-800 md:text-lg">
            Structured instruction. Human guidance. Measurable progress.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-4 top-2 bottom-2 w-px bg-zinc-900/10"
            />
            <ol className="space-y-8">
              {steps.map((step, index) => (
                <li key={step.title} className="relative pl-14">
                  <div className="text-3xl font-semibold leading-none text-zinc-400 md:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                    {step.body}
                  </p>
                  <p className="mt-3 text-sm font-medium text-zinc-800">
                    Outcome: <span className="font-normal text-zinc-600">{step.outcome}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-zinc-950">What learning looks like</h3>
            {panels.map((panel) => (
              <div key={panel.title} className="rounded-2xl border border-zinc-900/10 bg-[var(--background)] p-5 md:p-6">
                <h4 className="text-base font-semibold text-zinc-950 md:text-lg">{panel.title}</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600">
                  {panel.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl border border-zinc-900/10 bg-[var(--background)] p-5 md:p-6">
              <h4 className="text-base font-semibold text-zinc-950">What students finish with</h4>
              <ul className="mt-3 divide-y divide-zinc-900/10 text-sm leading-relaxed text-zinc-700">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="py-2 first:pt-0 last:pb-0">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild>
            <Link href="/curriculum">Explore the curriculum</Link>
          </Button>
          <Link
            href={standardsHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            Download standards alignment (PDF)
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}

function ProductPreviewPanel() {
  return (
    <section className="w-full border-t border-foreground/10 bg-amber-400/5 py-14 md:py-20">
      <div className="w-full">
        <PanelShell>
          <PanelText>
            <SectionTitle>Inside a real Kanam classroom</SectionTitle>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Classes are taught live via Zoom by instructors who guide learners step by
              step. Students can ask questions, receive feedback, and see problems solved
              in real time — creating a supportive and engaging learning experience.
            </p>
          </PanelText>
          <PanelMedia>
            <DeviceFrame
              imageSrc="/images/family_pics/pexels-shkrabaanthony-5306453.jpg"
              imageAlt="Learner focused on a computer project"
            />
          </PanelMedia>
        </PanelShell>

        <div className="mx-auto mt-8 grid w-full max-w-[92vw] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Instructor-led walkthroughs",
            "Live questions and explanations",
            "Guided practice together",
            "A pace designed for beginners",
          ].map((item) => (
          <Card key={item} className="border-zinc-200 bg-[rgb(var(--brand-2-rgb)/0.03)]">
              <CardContent className="pt-6 text-sm leading-6 text-zinc-600">{item}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetyPanel() {
  return (
    <section className="w-full py-20">
      <div className="w-full">
        <PanelShell>
          <PanelText>
            <SectionTitle>AI is taught within real computer science foundations.</SectionTitle>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              We teach AI alongside programming fundamentals, logic, and critical thinking
              — so students understand how it works, when to use it, and when not to.
            </p>
          </PanelText>
          <PanelMedia>
            <DeviceFrame
              imageSrc="/images/family_pics/pexels-august-de-richelieu-4260744.jpg"
              imageAlt="Safe learning environment with guidance"
            />
          </PanelMedia>
        </PanelShell>

        <div className="mx-auto mt-8 w-full max-w-[92vw]">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-10">
            <div className="md:pr-8 md:border-r md:border-zinc-900/12">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                How AI fits into our curriculum
              </h3>
              <ul className="mt-3 divide-y divide-zinc-900/8 text-sm text-zinc-700">
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  Students learn core programming before using AI tools
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  AI helpers are built using rules-based logic
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  Prompting is structured and guided
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  AI output must be reviewed and revised
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  Projects require explanation in the student’s own words
                </li>
              </ul>
            </div>

            <div className="md:pl-2">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                What students actually learn
              </h3>
              <ul className="mt-3 divide-y divide-zinc-900/8 text-sm text-zinc-700">
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  Logic and loops power automation
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  Data inputs shape AI output
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  Bias and error are discussed openly
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  AI can assist — but it does not replace understanding
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.9)]" />
                  Students present and defend their final projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoItsForPanel() {
  return (
    <section className="w-full border-t border-foreground/10 bg-transparent py-14 md:py-20">
      <div className="w-full">
        <PanelShell>
          <PanelText>
            <SectionTitle>Who Kanam is designed for</SectionTitle>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Kanam supports both families and programs. Choose the path that fits your
              learner or classroom.
            </p>
          </PanelText>
          <PanelMedia>
            <DeviceFrame
              imageSrc="/images/family_pics/pexels-timur-weber-9127614.jpg"
              imageAlt="Group learning and collaboration"
            />
          </PanelMedia>
        </PanelShell>

        <div className="mx-auto mt-8 grid w-full max-w-[92vw] gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-[rgb(var(--brand-2-rgb)/0.03)]">
            <CardHeader>
              <CardTitle>Parents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base font-semibold leading-7 text-zinc-900">
                Confidence + projects you can see.
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  A structured, safe learning environment
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  Clear outcomes and visible progress
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  Support from real instructors
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <Link href="/parents">For Parents</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-[rgb(var(--brand-2-rgb)/0.03)]">
            <CardHeader>
              <CardTitle>Educators / Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base font-semibold leading-7 text-zinc-900">
                A structured track that fits programs.
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  A ready-to-use curriculum
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  Cohort-based instruction
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  Learning outcomes that fit classrooms and after-school settings
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <Link href="/educators">For Educators</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FaqPanel() {
  const activeIndex = 0;

  const items = [
    {
      q: "Do learners need prior coding experience?",
      a: "No. Kanam is designed for complete beginners.",
    },
    {
      q: "How are classes taught?",
      a: "Live via Zoom with instructor guidance.",
    },
    {
      q: "What age range is this for?",
      a: "Primarily ages 11–14, with flexibility for beginners.",
    },
    {
      q: "Is this safe for kids?",
      a: "Yes. Lessons are guided, moderated, and age-appropriate.",
    },
    {
      q: "What device is required?",
      a: "A laptop or desktop with internet access.",
    },
    {
      q: "How much time is expected each week?",
      a: "Sessions are structured to fit alongside school schedules.",
    },
  ];

  return (
    <section className="w-full border-t border-foreground/10 bg-emerald-500/5 py-14 md:py-20">
      <div className="w-full">
        <PanelShell>
          <PanelText>
            <div className="flex items-end justify-between gap-6">
              <div>
                <SectionTitle>
                  Common questions from families and educators
                </SectionTitle>
                <p className="mt-4 text-lg leading-8 text-zinc-600">
                  Quick answers to the most common questions from parents and educators.
                </p>
              </div>
              <Button asChild variant="outline" className="hidden sm:inline-flex">
                <Link href="/faq">View all FAQs</Link>
              </Button>
            </div>
          </PanelText>
          <PanelMedia>
            <DeviceFrame
              imageSrc="/images/family_pics/pexels-august-de-richelieu-4260747.jpg"
              imageAlt="Student asking a question during class"
            />
          </PanelMedia>
        </PanelShell>

        <Card className="mx-auto mt-8 w-full max-w-[92vw] border-zinc-200 bg-[rgb(var(--brand-2-rgb)/0.03)]">
          <CardContent className="pt-6">
            <Accordion type="single" collapsible value={`item-${activeIndex}`}>
              {items.map((item, idx) => (
                <AccordionItem key={item.q} value={`item-${idx}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-8 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/faq">View all FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FinalPanel() {
  return (
    <section className="w-full border-t border-foreground/10 bg-zinc-950 py-14 md:py-20">
      <div className="w-full">
        <div className="text-white">
          <PanelShell>
            <PanelText>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Ready to take the next step?
              </h2>
              <div aria-hidden="true" className="mt-3 h-1 w-12 rounded-full bg-amber-400/70" />
              <p className="mt-3 text-lg leading-8 text-zinc-300">
                Explore the curriculum or speak with a Kanam advisor to see if this is the
                right fit for your learner or program.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/curriculum">Explore the Curriculum</Link>
                </Button>
              </div>
            </PanelText>
            <PanelMedia>
              <DeviceFrame
                imageSrc="/images/family_pics/pexels-kampus-6297625.jpg"
                imageAlt="Celebrating student progress"
                className="bg-zinc-900/30"
              />
            </PanelMedia>
          </PanelShell>
        </div>
      </div>
    </section>
  );
}

export function HomeStory() {
  return (
    <div className="relative -mt-8 overflow-hidden bg-background md:-mt-20">
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className="absolute inset-x-0 top-0 h-[100svh] w-full object-cover object-center opacity-[0.075]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/video/8733062-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-400/10" />
        <div className="absolute -left-60 top-0 h-full w-[520px] bg-emerald-500/12 blur-3xl" />
        <div className="absolute -right-60 top-0 h-full w-[520px] bg-amber-400/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.7)_1px,transparent_0)] [background-size:28px_28px] dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)]" />
      </div>
      <div className="relative z-10 w-full">
        <HeroPanel />
        <DifferencePanel />
        <ValuePillarsPanel />
        <HowItWorksPanel />
        <BuildPanel />
        <SafetyPanel />
        <WhoItsForPanel />
        <FaqPanel />
        <FinalPanel />
      </div>
    </div>
  );
}

