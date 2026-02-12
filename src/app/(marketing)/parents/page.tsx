import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Laptop, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Parents | Kanam Academy",
  description:
    "Reassuring, instructor-led Python + AI learning for kids. See outcomes, safety approach, weekly flow, and what devices are needed.",
};

export default function ParentsPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">For Parents</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            A calm, supportive way to learn Python + AI
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Kanam is built for kids who are curious—but don’t need to do it alone. Live
            instructors guide the learning, projects keep it engaging, and progress stays
            visible.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Real outcomes",
                icon: Sparkles,
                body: "Your child builds projects they can show, explain, and feel proud of.",
              },
              {
                title: "Beginner-friendly",
                icon: CheckCircle2,
                body: "We start from fundamentals and build confidence step by step.",
              },
              {
                title: "Safety-first",
                icon: ShieldCheck,
                body: "Clear rules, respectful collaboration, and responsible AI habits.",
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
                <CardTitle>What a typical week looks like</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-6 text-zinc-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Live Zoom lesson with instructor guidance
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Guided practice (short, manageable steps)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    A project milestone (something to show by the end of the week)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Support when stuck + a simple progress check-in
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How parents can support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-6 text-zinc-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Ask them to “teach you” what they built (great confidence booster)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Celebrate progress, not perfection—debugging is part of learning
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    Encourage breaks and steady routines instead of cramming
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgb(var(--brand-rgb)/0.10)] text-[var(--brand-2)]">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <CardTitle>What device is needed?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-zinc-700">
                  A laptop or desktop is strongly recommended for a smooth coding experience.
                  We’ll provide setup steps before the cohort starts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ready to get details?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-zinc-700">
                  Tell us your child’s age and experience level. We’ll recommend the best
                  starting track and cohort.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href={siteConfig.links.bookCall}>Book a Call</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/curriculum">Explore curriculum</Link>
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

