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
    "Reassuring, instructor-led Python + AI learning for kids. See outcomes, safety approach, weekly flow, and what devices are needed.",
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
      subtitle="Kanam is built for kids who are curious—but don’t need to do it alone. Live instructors guide the learning, projects keep it engaging, and progress stays visible."
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
              frameClassName="min-h-[320px]"
            />
          </div>
        </Band>
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
                src="/images/family_pics/pexels-august-de-richelieu-4260747.jpg"
                alt="Student receiving support while practicing Python"
                caption="Support is available when learners get stuck."
                frameClassName="min-h-[220px]"
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
