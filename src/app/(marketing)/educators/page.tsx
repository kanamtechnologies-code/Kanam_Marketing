import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, CheckCircle2, School, Users } from "lucide-react";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "For Educators | Kanam Academy",
  description:
    "Bring instructor-led Python + AI to schools and after-school programs. Cohort model, objectives, and progress visibility.",
};

export default function EducatorsPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">For Educators</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            A cohort model that works for schools and programs
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Kanam supports implementation for schools and after-school programs: clear
            objectives, project-based evidence, and progress visibility for stakeholders.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Cohort delivery",
                icon: Users,
                body: "Predictable scheduling with live instruction and structured weekly milestones.",
              },
              {
                title: "Learning objectives",
                icon: School,
                body: "Python fundamentals, problem solving, and responsible AI habits—shown through projects.",
              },
              {
                title: "Reporting & visibility",
                icon: BarChart3,
                body: "Progress tracking and clear outcomes that programs can share with families or administrators.",
              },
            ].map((c) => (
              <Card key={c.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgb(var(--brand-rgb)/0.10)] text-[var(--brand-2)]">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{c.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-zinc-600">{c.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>What programs get</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-6 text-zinc-700">
                  {[
                    "Instructor-led Zoom delivery (or hybrid support)",
                    "A curriculum map aligned to ages 11–14",
                    "Project prompts and showcase-ready outcomes",
                    "A safe, family/school-friendly learning environment",
                    "Progress visibility to support reporting",
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
                <CardTitle>Request a demo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-zinc-700">
                  Tell us about your program size, schedule, and goals. We’ll share how the
                  cohort model would work and what reporting looks like.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/contact">Request a demo</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/curriculum">View curriculum</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

