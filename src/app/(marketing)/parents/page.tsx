import type { Metadata } from "next";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
} from "@/components/layout/SubpageShell";
import { LessonCanvasPreview } from "@/components/site/LessonCanvasPreview";
import { Button } from "@/components/ui/button";
import { LEARNING_PATHS } from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For families & learners | Kanam Academy",
  description:
    "Try a guided Kanam lesson with no account. Then create an account, keep progress, and learn with live instruction or structured async classes — coding, AI, data, and digital literacy.",
};

export default function ParentsPage() {
  const path = [
    {
      title: "Try the guided lesson",
      body: "No account needed. Walk through a real Python lesson: coach notes, code blanks, Run & check, and XP.",
    },
    {
      title: "Create an account",
      body: "Sign up from Welcome. Optional class code joins a teacher’s class. Progress saves to the account.",
    },
    {
      title: "Follow the roadmap",
      body: "Clear lessons, XP, badges, and capstone projects — live when you want a guide, async when you want to move at your own pace.",
    },
  ] as const;

  return (
    <SubpageShell
      eyebrow="For families & learners"
      title="Start with a real lesson — no account needed"
      subtitle="Kanam Academy is a structured way for teens — and anyone learning tech — to build coding, AI, data, and digital literacy skills in the browser. Demo first. Then keep progress with an account."
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
              Create student account
            </Link>
          </Button>
        </>
      }
      toc={[
        { href: "#path", label: "How to start" },
        { href: "#demo", label: "What you’ll see" },
        { href: "#learning-paths", label: "Learning paths" },
        { href: "#homeschool", label: "Homeschool & enrichment" },
        { href: "#faq", label: "FAQs" },
      ]}
    >
      <Section id="path" className="pt-0">
        <H2>How to start</H2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {path.map((step, idx) => (
            <li
              key={step.title}
              className="rounded-2xl border border-foreground/10 bg-white/80 p-5"
            >
              <div className="font-mono text-xs font-semibold text-[var(--brand-2)]">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="demo" className="border-t border-foreground/10 scroll-mt-24">
        <H2>What you&apos;ll see</H2>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          The guided demo is the lesson experience itself — not a fake dashboard tour.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
          <LessonCanvasPreview compact />
          <Band className="p-6">
            <h3 className="text-lg font-semibold">Why this path works</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                Try before you commit — no account for the demo
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                Progress is visible — roadmap, XP, badges
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                Live instruction or structured async — your choice
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild>
                <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                  Open the guided demo
                </Link>
              </Button>
            </div>
          </Band>
        </div>
      </Section>

      <Section id="learning-paths" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Four learning paths</H2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {LEARNING_PATHS.map((p) => (
            <Link
              key={p.slug}
              href={`/learning-paths/${p.slug}`}
              className="rounded-2xl border border-foreground/10 bg-white/80 p-5 transition-shadow hover:shadow-md"
            >
              <div className="font-semibold text-foreground">{p.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-2)]">
                {p.lessons} lessons
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="homeschool" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Homeschool, enrichment &amp; self-paced</H2>
        <Band className="mt-5">
          <p className="text-muted-foreground leading-relaxed">
            Kanam works for self-paced enrichment and family use. You do not need to be a
            CS expert — lessons include coach notes and plain-language support, with
            instant feedback on exercises.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Browser-only · Chromebook and laptop friendly</li>
            <li>No software install</li>
            <li>Clear weekly pacing if you want structure — or move at your own pace</li>
          </ul>
        </Band>
      </Section>

      <Section id="faq" className="border-t border-foreground/10 scroll-mt-24 pb-0">
        <H2>Quick answers</H2>
        <Band className="mt-5">
          <div className="divide-y divide-foreground/10">
            {[
              {
                q: "Who is Kanam for?",
                a: "Teens and anyone learning tech who wants strong live instruction or structured async classes — plus families supporting them.",
              },
              {
                q: "What device is needed?",
                a: "A laptop, desktop, or Chromebook with internet. No install required.",
              },
              {
                q: "Is prior coding required?",
                a: "No. Learning paths are designed for beginners, with room to go deeper as you grow.",
              },
            ].map((item) => (
              <div key={item.q} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-base font-semibold">{item.q}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </Band>
      </Section>
    </SubpageShell>
  );
}
