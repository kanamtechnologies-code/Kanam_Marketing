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
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Parents | Kanam Academy",
  description:
    "Reassuring, instructor-led Python + AI learning for kids that teaches understanding over prompt shortcuts. See outcomes, safety approach, weekly flow, and what devices are needed.",
};

const expectations = [
  {
    title: "Real outcomes",
    body: "Your child builds projects they can show, explain, and feel proud of.",
  },
  {
    title: "Beginner-friendly",
    body: "We start from fundamentals and build confidence step by step.",
  },
  {
    title: "Safety-first",
    body: "Clear rules, respectful collaboration, and responsible AI habits.",
  },
] as const;

const scheduleRows = [
  "Live Zoom lesson with instructor guidance",
  "Guided practice (short, manageable steps)",
  "A project milestone (something to show by the end of the week)",
  "Support when stuck + a simple progress check-in",
] as const;

const supportRows = [
  "Ask them to \"teach you\" what they built (great confidence booster)",
  "Celebrate progress, not perfection—debugging is part of learning",
  "Encourage breaks and steady routines instead of cramming",
] as const;

const parentFaqs = [
  {
    q: "What device is needed?",
    a: "A laptop or desktop is strongly recommended for a smooth coding experience. We’ll provide setup steps before the cohort starts.",
  },
  {
    q: "How much support will my child receive?",
    a: "Learners receive live instruction, guided practice, and direct support when stuck so progress does not stall.",
  },
] as const;

export default function ParentsPage() {
  return (
    <SubpageShell
      eyebrow="For Parents"
      title="A calm, supportive way to learn Python + AI"
      subtitle="Kanam is built for kids who are curious—but don’t need to do it alone. Live instructors guide the learning, projects keep it engaging, and progress stays visible without relying on AI prompt shortcuts."
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.bookCall}>Book a Call</Link>
          </Button>
          <Link href="/curriculum" className={textLinkClass}>
            Explore curriculum
          </Link>
        </>
      }
      toc={[
        { href: "#expectations", label: "What parents can expect" },
        { href: "#instructors", label: "Meet Your Instructors" },
        { href: "#schedule", label: "Schedule & time commitment" },
        { href: "#support", label: "Support" },
        { href: "#faq", label: "FAQs" },
      ]}
    >
      <Section id="expectations" className="pt-0">
        <H2>What parents can expect</H2>
        <Band className="mt-5">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="divide-y divide-foreground/10">
              {expectations.map((item) => (
                <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
            <SectionImage
              src="/images/family_pics/pexels-kampus-6297625.jpg"
              alt="Parent and student reviewing a coding assignment together"
              caption="Families get clear progress and visible outcomes."
              frameClassName="min-h-[220px] sm:min-h-[280px] md:min-h-[320px]"
            />
          </div>
        </Band>
      </Section>

      <Section id="instructors" className="border-t border-foreground/10">
        <H2>Meet Your Instructors</H2>
        <div className="mt-3 h-1 w-12 rounded-full bg-amber-400/70" />
        <div className="mt-5 rounded-3xl border border-foreground/10 bg-white/70 p-6 backdrop-blur-sm md:p-8 dark:bg-background/60">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-base leading-relaxed md:text-lg">
                Kanam Academy classes are led live by experienced instructors who
                understand how to teach beginners with clarity and patience. Our
                instructors don’t just ‘know how to code’—they know how to help
                students learn, stay engaged, and build confidence through structure
                and encouragement.
              </p>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                In every session, students receive:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed marker:text-emerald-600 md:text-lg">
                <li>Real-time explanations and guided practice</li>
                <li>
                  Support when they get stuck (without doing the work for them)
                </li>
                <li>Clear checkpoints so they know what success looks like</li>
                <li>A calm, respectful learning environment</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                We prioritize safe, age-appropriate instruction and communication.
                Families can expect a professional classroom culture focused on
                learning, growth, and consistent progress.
              </p>

              <h3 className="mt-6 text-lg font-semibold md:text-xl">
                What families can expect from instructors
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed marker:text-emerald-600 md:text-lg">
                <li>Prepared lessons with clear outcomes</li>
                <li>Supportive coaching and constructive feedback</li>
                <li>Respectful classroom norms and learner safety</li>
                <li>
                  Encouragement of independent thinking and problem-solving
                </li>
              </ul>
            </div>

            <SectionImage
              src="/images/family_pics/pexels-august-de-richelieu-4260747.jpg"
              alt="Instructor supporting students during a live coding session"
              frameClassName="h-[220px] sm:h-[260px] md:h-full"
            />
          </div>
        </div>
        <div className="mt-5 rounded-3xl border border-foreground/10 bg-emerald-500/5 p-6 md:p-8">
          <h3 className="text-lg font-semibold md:text-xl">
            Instructor Standards &amp; Safety
          </h3>
          <p className="mt-3 text-base leading-relaxed md:text-lg">
            Kanam Academy maintains professional standards for all instructional staff
            to ensure a safe, supportive learning experience for every student. All
            instructors undergo background screening prior to working with learners
            and participate in structured onboarding before leading classes.
          </p>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            Instructor preparation includes training in:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed marker:text-emerald-600 md:text-lg">
            <li>Age-appropriate communication and classroom culture</li>
            <li>Empathetic, student-centered teaching practices</li>
            <li>Structured lesson delivery and milestone-based instruction</li>
            <li>Clear classroom conduct and safety expectations</li>
          </ul>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            We are committed to creating a respectful, safe, and encouraging
            learning environment where students feel supported while being challenged
            to grow. AI is taught as a topic students learn to understand and evaluate,
            not as a tool to generate their work for them.
          </p>
        </div>
      </Section>

      <Section id="schedule" className="border-t border-foreground/10">
        <H2>Schedule &amp; time commitment</H2>
        <Band className="mt-5">
          <h3 className="text-lg font-semibold">What a typical week looks like</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {scheduleRows.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Band>
      </Section>

      <Section id="support" className="border-t border-foreground/10">
        <H2>Support</H2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6">
            <h3 className="text-lg font-semibold">How parents can support</h3>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {supportRows.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <SectionImage
                src="/images/family_pics/Screenshot 2026-02-15 at 11.57.26 AM.png"
                alt="Student receiving support while practicing Python"
                caption="Support is available when learners get stuck."
                frameClassName="min-h-[220px] sm:min-h-[260px] md:min-h-[300px]"
                imageClassName="object-center"
              />
            </div>
          </div>

          <Band className="p-6">
            <h3 className="text-lg font-semibold">Ready to get details?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
          </Band>
        </div>
      </Section>

      <Section id="faq" className="border-t border-foreground/10 pb-0">
        <H2>Frequently Asked Questions</H2>
        <Band className="mt-5">
          <div className="divide-y divide-foreground/10">
            {parentFaqs.map((item) => (
              <div key={item.q} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-base font-semibold">{item.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </Band>
      </Section>
    </SubpageShell>
  );
}
