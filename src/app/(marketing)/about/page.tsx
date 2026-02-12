import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, ShieldCheck, Users } from "lucide-react";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Kanam Academy",
  description:
    "Kanam Academy is human-first, instructor-led learning for kids—focused on real projects, confidence, and responsible AI habits.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">About Kanam</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            Human-first learning, led by real instructors
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Kanam Academy exists for kids who want to build with technology—without being
            left alone with a playlist. We believe live teaching, calm structure, and
            project-based practice create the best outcomes.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Mission",
                icon: HeartHandshake,
                body: "Help learners build confidence through real projects—and learn to explain what they made.",
              },
              {
                title: "Approach",
                icon: Users,
                body: "Live cohorts with clear milestones, guided practice, and a community that feels safe and supportive.",
              },
              {
                title: "Responsible AI",
                icon: ShieldCheck,
                body: "We teach foundations first, then modern tools—with judgment, safety, and clarity.",
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
                <CardTitle>A founder-style note (short and real)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-zinc-700">
                  We built Kanam because we saw a pattern: kids were excited about coding,
                  but got stuck in the gap between “watching” and “doing.” A real instructor
                  changes everything—kids ask questions, practice immediately, and build the
                  confidence to keep going.
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-700">
                  Our goal is simple: give students a calm place to learn, build projects
                  they’re proud of, and develop good judgment around modern AI tools.
                </p>
              </CardContent>
            </Card>

            <Card className="kanam-glow-card">
              <CardHeader>
                <CardTitle className="text-white">Want cohort details?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-white/90">
                  Explore the curriculum, then book a quick call to talk through goals and
                  the best starting point.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/curriculum">Explore curriculum</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href={siteConfig.links.bookCall}>Book a Call</Link>
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

