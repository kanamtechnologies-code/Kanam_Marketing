import type { Metadata } from "next";
import Link from "next/link";

import {
  Band,
  H2,
  Section,
  SubpageShell,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import { LEARNING_PATHS, DEVICE_READY_BLURB, LESSONS_COUNT_LABEL, PACING_BLURB } from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Kanam Academy",
  description:
    "Kanam Academy: coding, AI, data, and digital literacy — for teens and anyone learning tech. Chromebook and mobile ready. Flexible schedule. Live instruction or structured async. Move forward.",
};

export default function AboutPage() {
  return (
    <SubpageShell
      eyebrow="About Kanam Academy"
      title="Move forward with real skills for a digital world"
      subtitle="Kanam Academy is a web learning platform where teens — and anyone ready to learn tech — complete structured learning paths, practice real skills in the browser, and earn XP and badges on a visible roadmap. Live instruction when you want a guide; structured async when you want to move at your own pace."
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/learning-paths">See the five learning paths</Link>
          </Button>
        </>
      }
      toc={[
        { href: "#what", label: "What we are" },
        { href: "#problem", label: "Problem we solve" },
        { href: "#learning-paths", label: "Learning paths" },
        { href: "#partner", label: "Partner with us" },
      ]}
    >
      <Section id="what" className="pt-0">
        <Band>
          <H2>What Kanam Academy is</H2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Browser-based coding, AI literacy, digital literacy, data, and cybersecurity.
            Every lesson is designed to explain, check, and correct itself — so learners can
            progress confidently and instructors or families can support with minimal prep.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            One platform. Five learning paths. Interactive lessons. Auto-feedback. Progress
            visibility for instructors. Demo mode for families and decision-makers.{" "}
            {DEVICE_READY_BLURB} {PACING_BLURB}
          </p>
        </Band>
      </Section>

      <Section id="problem" className="border-t border-foreground/10 scroll-mt-24">
        <H2>The problem we solve</H2>
        <Band className="mt-5">
          <p className="text-muted-foreground leading-relaxed">
            People need credible pathways into coding, AI, data, cybersecurity, and digital
            citizenship — not more unstructured screen time. Schools and programs need
            something standards-aligned and measurable — with Kanam live instruction so their
            own staff don&apos;t have to become CS teachers. Families and self-paced learners
            need structure that still feels human.
          </p>
        </Band>
      </Section>

      <Section id="learning-paths" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Five learning paths · {LESSONS_COUNT_LABEL} lessons</H2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {LEARNING_PATHS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/learning-paths/${p.slug}`}
                className="block rounded-2xl border border-foreground/10 bg-white/80 px-5 py-4 hover:shadow-md"
              >
                <div className="font-semibold">{p.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="partner" className="border-t border-foreground/10 scroll-mt-24 pb-0">
        <Band>
          <H2>Partner with Kanam</H2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Schools, districts, after-school and weekend programs, Boy Scout and Girl Scout
            troops, and enrichment partners can request a pilot. Learners and families can
            start with the guided demo today.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Request a pilot</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
                Get started
              </Link>
            </Button>
          </div>
        </Band>
      </Section>
    </SubpageShell>
  );
}
