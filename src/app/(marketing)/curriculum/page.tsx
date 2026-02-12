import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Curriculum | Kanam Academy",
  description:
    "Ages 11–14 curriculum map: Python fundamentals, project building, and responsible AI + creativity—taught live with real instructors.",
};

export default function CurriculumPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">Python + AI for Beginners (Ages 11–14)</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            A structured path from beginner to confident builder
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Kanam Academy’s curriculum is designed for learners starting from zero. Through
            live, instructor-led lessons, students learn Python fundamentals and
            age-appropriate AI concepts while building real projects they can explain and
            be proud of.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            No prior coding experience is required.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>At-a-glance overview</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-4 text-sm text-zinc-700 sm:grid-cols-2">
                  {[
                    ["Age range", "11–14"],
                    ["Experience required", "None"],
                    ["Format", "Live, instructor-led Zoom cohorts"],
                    ["Focus", "Python fundamentals, problem-solving, and responsible AI use"],
                    ["Outcome", "Real projects + a capstone showcase"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-semibold text-zinc-900">{label}</dt>
                      <dd className="mt-1 leading-6">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How learning is structured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-zinc-600">
                  The curriculum is divided into clear units that build on one another. Each
                  unit introduces new concepts, reinforces them through guided practice, and
                  ends with a project that demonstrates understanding.
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  Learners progress at a pace designed for beginners, with live support
                  throughout.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">
              Unit breakdown
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Unit 1 — Foundations of Coding</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students learn</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>What programming is and how Python works</li>
                        <li>Using variables to store information</li>
                        <li>Writing simple instructions and reading code output</li>
                        <li>Understanding errors and problem-solving basics</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students build</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Simple interactive programs</li>
                        <li>Input/output mini-activities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Unit 2 — Logic & Decision Making</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students learn</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Conditional logic (if / else)</li>
                        <li>Comparing values and making decisions</li>
                        <li>Thinking through problems step by step</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students build</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Decision-based games</li>
                        <li>Interactive quizzes with scoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Unit 3 — Loops & Repetition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students learn</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Repeating actions with loops</li>
                        <li>Patterns and efficiency in code</li>
                        <li>Debugging repeated logic</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students build</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Loop-driven games</li>
                        <li>Countdown timers and pattern projects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Unit 4 — Functions & Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students learn</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Writing reusable code with functions</li>
                        <li>Breaking problems into smaller steps</li>
                        <li>Naming and organizing code clearly</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students build</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Structured mini-apps</li>
                        <li>Games with reusable logic blocks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Unit 5 — Introduction to AI Concepts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students learn</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>What AI is (and what it is not)</li>
                        <li>Rule-based vs. intelligent behavior</li>
                        <li>How simple AI systems make decisions</li>
                        <li>Responsible and ethical AI use</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students build</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Rule-based AI helpers</li>
                        <li>Simple chatbot-style interactions (non-generative)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Unit 6 — Capstone Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">What students do</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>Plan and build a final project</li>
                        <li>Apply Python + logic + AI concepts</li>
                        <li>Explain how their project works</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">Capstone examples</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>AI-assisted quiz or helper</li>
                        <li>Mini-game with decision logic</li>
                        <li>Interactive tool designed by the learner</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>What students gain by the end</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-6 text-zinc-700">
                  {[
                    "A strong foundation in Python programming",
                    "Experience building and explaining real projects",
                    "Confidence solving problems independently",
                    "A clear understanding of responsible AI use",
                    "A capstone project they can demonstrate and share",
                  ].map((it) => (
                    <li key={it} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--brand-2)]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support built into every step</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-zinc-600">
                  Students are never left to figure things out alone. Instructors guide
                  lessons live, answer questions in real time, and help learners work through
                  challenges.
                </p>
                <p className="mt-4 text-sm font-semibold text-zinc-900">
                  Progress is measured through:
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                  <li>Completed projects</li>
                  <li>Concept check-ins</li>
                  <li>Milestones parents and educators can understand</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Designed with safety and responsibility in mind</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-6 text-zinc-700">
                  <li>Age-appropriate AI concepts only</li>
                  <li>No sharing of personal data</li>
                  <li>Emphasis on understanding over shortcuts</li>
                  <li>Clear expectations for behavior and participation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Who this curriculum is for</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">Parents</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                      <li>Learners curious about coding and technology</li>
                      <li>Beginners who need structure and support</li>
                      <li>Families looking for meaningful, guided learning</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">Educators & Programs</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                      <li>After-school or enrichment programs</li>
                      <li>Classrooms introducing coding fundamentals</li>
                      <li>Cohorts that benefit from live instruction</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8">
            <h2 className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">
              Explore what’s possible
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Review the curriculum in detail or book a call to discuss whether Kanam
              Academy is the right fit for your learner or program.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href={siteConfig.links.bookCall}>Book a Call</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

