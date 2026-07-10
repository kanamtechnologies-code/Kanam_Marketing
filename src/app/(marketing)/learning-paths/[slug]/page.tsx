import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Band,
  H2,
  Section,
  SubpageShell,
} from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import {
  getLearningPath,
  LEARNING_PATHS,
  type LearningPathSlug,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LEARNING_PATHS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) return { title: "Learning path | Kanam Academy" };
  return {
    title: `${path.name} | Kanam Academy`,
    description: `${path.subtitle}. ${path.lessons} interactive lessons, 8-week pacing, capstone: ${path.capstone}.`,
  };
}

export default async function LearningPathDetailPage({ params }: Props) {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) notFound();

  const others = LEARNING_PATHS.filter((p) => p.slug !== (slug as LearningPathSlug));

  return (
    <SubpageShell
      eyebrow="Learning path"
      title={path.name}
      subtitle={path.subtitle}
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
              Start learning
            </Link>
          </Button>
        </>
      }
      toc={[
        { href: "#overview", label: "Overview" },
        { href: "#weeks", label: "Weekly themes" },
        { href: "#lessons", label: "Lesson list" },
        { href: "#capstone", label: "Capstone" },
      ]}
    >
      <Section id="overview" className="pt-0">
        <Band>
          <H2>Overview</H2>
          <dl className="mt-4 space-y-2 text-sm">
            {[
              ["Lessons", String(path.lessons)],
              ["Pacing", "8 weeks · ~2 sessions / week"],
              ["Who it's for", "Teens & anyone learning tech"],
              ["Format", "Browser-based · live or async · no install"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[120px_1fr] gap-3 border-b border-foreground/10 py-2 last:border-b-0"
              >
                <dt className="font-semibold">{label}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-muted-foreground leading-relaxed">{path.outcome}</p>
          {path.prerequisite ? (
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Prerequisite:</span>{" "}
              {path.prerequisite}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Who it&apos;s for:</span>{" "}
            {path.whoFor}
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">{path.marketingAngle}</p>
        </Band>
      </Section>

      <Section id="weeks" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Weekly themes</H2>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {path.weeklyThemes.map((theme, idx) => (
            <li
              key={theme}
              className="rounded-2xl border border-foreground/10 bg-white/80 px-4 py-3 text-sm"
            >
              <span className="font-mono text-xs font-semibold text-[var(--brand-2)]">
                Week {idx + 1}
              </span>
              <div className="mt-1 font-semibold text-foreground">{theme}</div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="lessons" className="border-t border-foreground/10 scroll-mt-24">
        <H2>Lesson titles</H2>
        <Band className="mt-5">
          <ol className="divide-y divide-foreground/10">
            {path.lessonTitles.map((title, idx) => (
              <li key={title} className="flex gap-4 py-2.5 text-sm first:pt-0 last:pb-0">
                <span className="w-8 shrink-0 font-mono text-xs font-semibold text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground">{title}</span>
              </li>
            ))}
          </ol>
        </Band>
      </Section>

      <Section id="capstone" className="border-t border-foreground/10 scroll-mt-24 pb-0">
        <Band>
          <H2>Capstone</H2>
          <p className="mt-3 text-lg font-semibold text-foreground">{path.capstone}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Learners finish with a project they can present and explain — evidence of
            mastery, not just click-through completion.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                Try the guided lesson
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/learning-paths">All learning paths</Link>
            </Button>
          </div>
        </Band>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Other learning paths
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/learning-paths/${p.slug}`}
                  className="text-sm font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
                >
                  {p.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </SubpageShell>
  );
}
