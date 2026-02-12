import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Sparkles, Users, Video } from "lucide-react";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works | Kanam Academy",
  description:
    "See the Kanam Academy learning flow: live Zoom instruction, guided practice, and project-based outcomes with real instructor support.",
};

export default function HowItWorksPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">Simple, supportive process</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            How Kanam works
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Students learn best with structure and a human guide. Kanam combines live Zoom
            instruction with independent practice and projects—so kids build confidence and
            real skills.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "1) Join",
                icon: Users,
                body: "Choose a cohort for ages 11–14 and get a quick, clear setup checklist so families can start smoothly.",
              },
              {
                title: "2) Build",
                icon: BookOpen,
                body: "Attend live Zoom lessons, then complete guided practice and projects with step-by-step support.",
              },
              {
                title: "3) Grow",
                icon: Sparkles,
                body: "Track progress, refine projects, and practice explaining your work—skills that matter beyond coding.",
              },
            ].map((s) => (
              <Card key={s.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgb(var(--brand-rgb)/0.10)] text-[var(--brand-2)]">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-zinc-600">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Live Zoom class</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Video className="mt-1 h-5 w-5 text-[var(--brand-2)]" />
                  <div>
                    <p className="text-sm leading-6 text-zinc-700">
                      Instructors teach in real time with examples, questions, and interactive
                      practice. Kids can ask questions without feeling stuck for days.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                        Short explanations, then immediate practice
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                        Clear outcomes for the day’s lesson
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                        A calm pace designed for beginners
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Independent practice + projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-zinc-700">
                  After class, students work through guided practice and projects at their own
                  pace. The goal is consistent progress—not cramming.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Step-by-step project prompts
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Built-in checkpoints and reflection
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Human help requests when stuck
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/curriculum">Explore the Curriculum</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={siteConfig.links.bookCall}>Book a Call</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

