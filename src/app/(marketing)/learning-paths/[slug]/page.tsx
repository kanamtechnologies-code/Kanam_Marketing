import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import {
  DEVICE_READY_SHORT,
  getLearningPath,
  groupLessonsByWeek,
  LEARNING_PATHS,
  PACING_SHORT,
  type LearningPath,
  type LearningPathSlug,
} from "@/lib/learning-paths";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

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
    description: `${path.subtitle}. ${path.lessons} interactive lessons, flexible schedule, capstone: ${path.capstone}.`,
  };
}

function OtherPathTile({ path }: { path: LearningPath }) {
  return (
    <Link
      href={`/learning-paths/${path.slug}`}
      className="group relative flex min-h-[10rem] flex-col overflow-hidden rounded-[1.25rem] border border-zinc-900/10 bg-zinc-950 text-white shadow-[0_12px_28px_rgba(15,23,42,0.1)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2"
    >
      <div className="absolute inset-0">
        <Image
          src={path.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-zinc-950/5" />
      </div>
      <div className="relative z-10 mt-auto p-4 sm:p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/65">
          {path.lessons} lessons
        </p>
        <p className="mt-1 font-display text-lg font-semibold tracking-tight text-white">
          {path.shortName}
        </p>
      </div>
    </Link>
  );
}

function CtaPair({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button asChild>
        <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
          Try the guided lesson
        </Link>
      </Button>
      <Button
        asChild
        variant="secondary"
        className={
          onDark
            ? "border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
            : undefined
        }
      >
        <Link href="/contact">Talk to us about getting started</Link>
      </Button>
    </div>
  );
}

export default async function LearningPathDetailPage({ params }: Props) {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) notFound();

  const others = LEARNING_PATHS.filter((p) => p.slug !== (slug as LearningPathSlug));
  const modules = groupLessonsByWeek(path);
  let runningLesson = 0;
  const outline = modules.map((mod) => {
    const lessons = mod.lessons.map((title) => {
      runningLesson += 1;
      return { n: runningLesson, title };
    });
    return { ...mod, lessons };
  });

  /** Keep the walk-away list short and high-impact. */
  const highlights = path.learnOutcomes.slice(0, 4);

  return (
    <SubpageShell overlapNav={false}>
      <div className="space-y-12 md:space-y-14 lg:space-y-16">
        {/* Hero */}
        <div className="kanam-fade-up relative overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_20px_48px_rgba(15,23,42,0.14)]">
          <div className="absolute inset-0">
            <Image
              src={path.image}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1280px) 90rem, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/72 to-zinc-950/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/20" />
          </div>

          <div className="relative z-10 flex flex-col gap-5 p-5 sm:gap-6 sm:p-7 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/learning-paths"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                All learning paths
              </Link>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                {path.lessons} lessons · {DEVICE_READY_SHORT}
              </p>
            </div>

            <div className="max-w-2xl">
              <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                {path.name}
              </h1>
              <p className="mt-2 max-w-xl text-base font-medium text-[rgb(var(--accent-rgb)/1)] sm:text-lg">
                {path.subtitle}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-snug text-white/80">
                {path.marketingAngle}
              </p>
              <div className="mt-5">
                <CtaPair onDark />
              </div>
            </div>
          </div>
        </div>

        {/* Tight facts */}
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgb(var(--brand-rgb)/0.35)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-2-rgb)/0.94)] to-[rgb(var(--brand-rgb)/0.88)] px-5 py-5 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] kanam-hex-pattern" />
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
            {[
              { label: "Lessons", value: String(path.lessons) },
              { label: "Schedule", value: "Flexible" },
              { label: "Format", value: "Live + async" },
              { label: "Capstone", value: path.capstone },
            ].map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "sm:px-4 sm:first:pl-0 sm:last:pr-0",
                  index > 0 && "sm:border-l sm:border-white/20"
                )}
              >
                <div
                  className={cn(
                    "font-display font-semibold tracking-tight text-white",
                    item.label === "Capstone"
                      ? "text-base sm:text-lg leading-snug"
                      : "text-2xl sm:text-3xl"
                  )}
                >
                  {item.value}
                </div>
                <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent-rgb)/0.9)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What you get — no “learning outcomes” jargon */}
        <section aria-labelledby="overview-heading">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-7">
            <figure className="relative min-h-[14rem] overflow-hidden rounded-[1.25rem] border border-zinc-900/10 sm:min-h-[16rem]">
              <Image
                src={path.overviewImage}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </figure>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                For learners &amp; program leaders
              </p>
              <h2
                id="overview-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
              >
                What you&apos;ll walk away with
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
                {path.whoFor} {PACING_SHORT}.
              </p>
              {path.prerequisite ? (
                <p className="mt-2 text-sm text-zinc-600">
                  <span className="font-semibold text-zinc-900">Note:</span> {path.prerequisite}
                </p>
              ) : null}

              <ul className="mt-5 space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-snug text-zinc-800 sm:text-[0.95rem]">
                    <span
                      aria-hidden
                      className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-[rgb(var(--brand-2-rgb)/1)]">
                {path.skills.slice(0, 4).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outline — collapsed by default for speed */}
        <section aria-labelledby="outline-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Inside the path
              </p>
              <h2
                id="outline-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
              >
                {path.lessons} lessons · {outline.length} weeks
              </h2>
              <p className="mt-1 max-w-xl text-sm text-[var(--muted)]">
                Open a week for lesson titles. Pace flexes to your classroom, family, or program.
              </p>
            </div>
          </div>

          <div className="mt-5 divide-y divide-zinc-900/8 overflow-hidden rounded-[1.25rem] border border-zinc-900/10 bg-white/75">
            {outline.map((mod) => (
              <details key={mod.theme} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-3.5 marker:content-none transition-colors hover:bg-[rgb(var(--brand-2-rgb)/0.04)] sm:px-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-sm font-semibold tabular-nums text-[rgb(var(--brand-2-rgb)/1)]">
                    {String(mod.week).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-zinc-950">{mod.theme}</span>
                    <span className="text-xs text-zinc-500">
                      {mod.lessons.length}{" "}
                      {mod.lessons.length === 1 ? "lesson" : "lessons"}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <ol className="space-y-1.5 border-t border-zinc-900/6 bg-[rgb(var(--brand-2-rgb)/0.03)] px-4 py-3 sm:px-5 sm:pl-[3.75rem]">
                  {mod.lessons.map(({ n, title }) => (
                    <li key={`${n}-${title}`} className="flex gap-3 text-sm text-zinc-800">
                      <span className="w-6 shrink-0 font-display text-xs font-semibold tabular-nums text-zinc-400">
                        {String(n).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          title.toLowerCase().startsWith("capstone") &&
                            "font-semibold text-zinc-950"
                        )}
                      >
                        {title}
                      </span>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </section>

        {/* Conversion CTA — learners + admins */}
        <section
          aria-labelledby="next-heading"
          className="relative overflow-hidden rounded-[1.5rem] border border-zinc-900/8 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.14)] via-[rgb(var(--background))] to-[rgb(var(--accent-rgb)/0.22)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] kanam-hex-pattern" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Get started
              </p>
              <h2
                id="next-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
              >
                Try a lesson — then talk to us
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Learners and families can demo the real lesson canvas first. Schools and
                programs: tell us your timeline and we&apos;ll help you pilot a class,
                after-school block, or Scout troop.
              </p>
              <div className="mt-5">
                <CtaPair />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border-t border-zinc-900/10 pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="font-semibold text-zinc-950">Families &amp; learners</p>
                <p className="mt-1.5 text-sm leading-snug text-[var(--muted)]">
                  Demo with no account. Then reach out for a self-paced class code or live
                  support.
                </p>
              </div>
              <div className="border-t border-zinc-900/10 pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="font-semibold text-zinc-950">Schools &amp; admins</p>
                <p className="mt-1.5 text-sm leading-snug text-[var(--muted)]">
                  Class codes, roster progress, and standards docs — request a pilot when
                  you&apos;re ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other paths */}
        <section aria-labelledby="other-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2
              id="other-heading"
              className="font-display text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl"
            >
              Other learning paths
            </h2>
            <Link
              href="/learning-paths"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)]"
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <OtherPathTile key={p.slug} path={p} />
            ))}
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
