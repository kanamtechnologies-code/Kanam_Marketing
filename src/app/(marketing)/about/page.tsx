import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
  textLinkClass,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | Kanam Academy",
  description:
    "Kanam Academy is human-first, instructor-led learning for kids—focused on real projects, confidence, and teaching AI understanding rather than prompt shortcuts.",
};

export default function AboutPage() {
  return (
    <SubpageShell
      toc={[
        { href: "#mission", label: "Mission" },
        { href: "#partner", label: "Partner with Kanam" },
      ]}
    >
      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              About Kanam Academy
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              A structured path into real coding skills.
            </h1>
            <p className="mt-5 max-w-3xl text-muted-foreground leading-relaxed">
              Kanam Academy was created to make computer science approachable, rigorous, and
              supportive for middle school learners. We teach Python through live,
              human-led instruction and project-based milestones—so students build skills
              they can explain, demonstrate, and feel proud of.
            </p>
            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              Our programs are designed for clarity, accountability, and measurable
              progress, with curriculum alignment to CSTA Computer Science Standards
              (Grades 6–8 / Level 3A). Students learn what AI is and how to evaluate its
              output responsibly, rather than depending on prompts to generate work.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="/curriculum">Explore the curriculum</Link>
              </Button>
              <Link href="/documents/standards-alignment.pdf" className={textLinkClass}>
                Download standards alignment (PDF)
              </Link>
            </div>
          </div>
          <figure className="space-y-2">
            <div className="rounded-3xl overflow-hidden border border-foreground/10 bg-background">
              <div className="relative h-[320px] md:h-[420px] w-full">
                <Image
                  src="/images/family_pics/pexels-kampus-6297625.jpg"
                  alt="Student learning with instructor support"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </figure>
        </div>
      </Section>

      <Section id="mission" className="border-t border-foreground/10">
        <H2>Our Mission</H2>
        <Band className="mt-5">
          <div className="max-w-4xl space-y-4 md:space-y-6 text-muted-foreground">
            <p>
              We believe every student deserves access to structured, high-quality computer
              science education — regardless of background or prior exposure.
            </p>
            <p>
              Kanam Academy delivers standards-aligned instruction grounded in technical
              rigor, empathy, and safety. Through expert, human-led teaching and
              project-based progression, students develop foundational programming skills,
              computational thinking, and the confidence to explain and defend their work.
              Our approach prioritizes equity, measurable outcomes, and responsible
              technology use in a supportive learning environment. We teach AI literacy as
              part of core computer science learning, not as a replacement for
              understanding.
            </p>
          </div>
        </Band>
      </Section>

      <Section id="partner" className="border-t border-foreground/10 pb-0">
        <H2>Partner with Kanam</H2>
        <div className="mt-5 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6">
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            We work with families, enrichment programs, and schools seeking a clear,
            standards-aligned pathway into computer science.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/contact">Book a call</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/curriculum">View curriculum</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SubpageShell>
  );
}
