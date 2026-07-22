import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { SubpageShell } from "@/components/layout/SubpageShell";
import {
  FullBleed,
  HomeHeroVeil,
  PageBand,
  duskTitleClass,
  lightEyebrowClass,
  lightMutedClass,
  lightTitleClass,
} from "@/components/layout/PageBands";
import {
  BrandCtaBand,
  brandCtaPrimaryBtnClass,
  brandCtaSecondaryBtnClass,
} from "@/components/site/BrandCtaBand";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { PathInside } from "@/components/site/PathInside";
import { Button } from "@/components/ui/button";
import { billingLinks } from "@/lib/billing-links";
import {
  DEVICE_READY_SHORT,
  getLearningPath,
  groupLessonsByWeek,
  LEARNING_PATHS,
  PACING_SHORT,
  STANDARDS_SHORT,
  type LearningPath,
  type LearningPathSlug,
} from "@/lib/learning-paths";
import { TRACK_PRICES } from "@/lib/pricing";
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
      className="group relative flex min-h-[10rem] flex-col overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.2)] bg-[#16352b] text-white transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(7,26,20,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.8)] focus-visible:ring-offset-2"
    >
      <div className="absolute inset-0">
        <Image
          src={path.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16352b] via-[#16352b]/45 to-[#16352b]/5" />
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
  trackSlug,
  trackPriceLabel,
}: {
  onDark?: boolean;
  trackSlug?: string;
  trackPriceLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {trackSlug ? (
        <Button
          asChild
          size={onDark ? "lg" : "default"}
          className={onDark ? brandCtaPrimaryBtnClass : undefined}
        >
          <Link
            href={billingLinks.track(trackSlug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {trackPriceLabel ? `Purchase this track · ${trackPriceLabel}` : "Purchase this track"}
          </Link>
        </Button>
      ) : null}
      <Button
        asChild
        size={onDark ? "lg" : "default"}
        variant={trackSlug ? "secondary" : "default"}
        className={
          trackSlug
            ? onDark
              ? brandCtaSecondaryBtnClass
              : undefined
            : onDark
              ? brandCtaPrimaryBtnClass
              : undefined
        }
      >
        <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
          Try the guided lesson
        </Link>
      </Button>
      <Button
        asChild
        size={onDark ? "lg" : "default"}
        variant="secondary"
        className={onDark ? brandCtaSecondaryBtnClass : undefined}
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
  const outline = modules.reduce<
    Array<
      Omit<(typeof modules)[number], "lessons"> & {
        lessons: Array<{
          n: number;
          title: string;
          session: number;
          synopsis: string;
        }>;
      }
    >
  >((items, mod) => {
    const start = items.reduce((count, item) => count + item.lessons.length, 0);
    return [
      ...items,
      {
        ...mod,
        lessons: mod.lessons.map((lesson, index) => ({
          n: start + index + 1,
          title: lesson.title,
          synopsis: lesson.synopsis,
          session: index + 1,
        })),
      },
    ];
  }, []);

  const trackPrice = TRACK_PRICES.find((t) => t.slug === path.slug);

  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        {/* Hero */}
        <section className="kanam-fade-up relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]">
          <div className="absolute inset-0">
            <ParallaxImage
              src={path.image}
              alt=""
              priority
              intensity={140}
              scale={1.36}
              className="object-center"
              sizes="(min-width: 1280px) 90rem, 100vw"
            />
            <HomeHeroVeil />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[30rem] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-28 sm:min-h-[34rem] sm:px-6 sm:pb-16 lg:min-h-[38rem] lg:px-8">
            <div className="max-w-2xl">
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

            <div className="mt-8">
              <h1 className={cn("text-3xl sm:text-4xl lg:text-[3rem] lg:leading-[1.05]", duskTitleClass)}>
                {path.name}
              </h1>
              <p className="mt-2 max-w-xl text-base font-medium text-[rgb(var(--accent-rgb)/1)] sm:text-lg">
                {path.subtitle}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-snug text-white/80">
                {path.marketingAngle}
              </p>
              <div className="mt-5">
                <CtaPair
                  onDark
                  trackSlug={path.slug}
                  trackPriceLabel={trackPrice?.priceLabel}
                />
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Facts — same proof-strip language as the rest of the site */}
        <PageBand tone="proof" className="py-8 md:py-10">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { label: "Lessons", value: String(path.lessons) },
              { label: "Schedule", value: "Flexible" },
              { label: "Format", value: "Live + async" },
              { label: "Capstone", value: path.capstone },
            ].map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "border-b border-white/15 pb-3 pt-1 sm:border-b-0 sm:border-l sm:border-white/15 sm:pb-0 sm:pl-5 sm:first:border-l-0 sm:first:pl-0",
                  index === 0 && "sm:border-l-0 sm:pl-0"
                )}
              >
                <div
                  className={cn(
                    "font-display font-semibold tracking-tight text-[#f7f3e8]",
                    item.label === "Capstone"
                      ? "text-base leading-snug sm:text-lg"
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
        </PageBand>

        {/* What you get — full-bleed split, tighter, photo-led */}
        <section
          aria-labelledby="overview-heading"
          className="scroll-mt-24 border-t border-[rgb(var(--accent-rgb)/0.2)] bg-[#f3efe4]"
        >
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <figure className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[32rem]">
              <ParallaxImage
                src={path.overviewImage}
                alt=""
                intensity={90}
                scale={1.28}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#0b2f24]/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#f3efe4]/25"
              />
            </figure>

            <div className="flex flex-col justify-center px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-14">
              <p className={lightEyebrowClass}>For learners &amp; program leaders</p>
              <h2
                id="overview-heading"
                className={cn("mt-2 text-2xl sm:text-3xl lg:text-[2.15rem]", lightTitleClass)}
              >
                What you&apos;ll walk away with
              </h2>
              <p className={cn("mt-2 max-w-xl text-sm sm:text-[0.95rem]", lightMutedClass)}>
                {path.whoFor} {PACING_SHORT}.
              </p>
              {path.prerequisite ? (
                <p className="mt-2 text-sm text-[var(--muted)]">
                  <span className="font-semibold text-zinc-950">Note:</span>{" "}
                  {path.prerequisite}
                </p>
              ) : null}

              <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {path.learnOutcomes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-snug text-zinc-800"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {path.detailCallouts?.length ? (
                <div className="mt-6 space-y-4 border-t border-zinc-200/80 pt-5">
                  {path.detailCallouts.map((callout) => (
                    <div key={callout.title}>
                      <p className="text-sm font-semibold text-zinc-950">{callout.title}</p>
                      <p className={cn("mt-1 text-sm leading-relaxed", lightMutedClass)}>
                        {callout.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 border-t border-[rgb(var(--brand-2-rgb)/0.18)] pt-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--brand-2-rgb)/0.85)]">
                  Skills · Capstone · Standards
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-[rgb(var(--brand-2-rgb)/1)]">
                  {path.skills.join(" · ")}
                </p>
                <p className={cn("mt-2 text-xs leading-snug", lightMutedClass)}>
                  Capstone:{" "}
                  <span className="font-semibold text-zinc-800">{path.capstone}</span>
                  {" · "}
                  {STANDARDS_SHORT}
                </p>
              </div>
            </div>
          </div>
        </section>

        <PageBand tone="base" aria-labelledby="outline-heading">
          <PathInside
            pathName={path.name}
            lessonCount={path.lessons}
            weeks={outline}
          />
        </PageBand>

        {/* Conversion CTA — learners + admins */}
        <PageBand tone="mid">
        <BrandCtaBand aria-labelledby="next-heading" className="lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Get started
              </p>
              <h2
                id="next-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
              >
                Try a lesson — then talk to us
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#e8e0cf]/90">
                Learners and families can demo the real lesson canvas first. Schools and
                programs: tell us your timeline and we&apos;ll help you pilot a class,
                after-school block, or Scout troop.
              </p>
              <div className="mt-8">
                <CtaPair
                  onDark
                  trackSlug={path.slug}
                  trackPriceLabel={trackPrice?.priceLabel}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border-t border-white/20 pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="font-semibold text-[#f7f3e8]">Families &amp; learners</p>
                <p className="mt-1.5 text-sm leading-snug text-white/80">
                  Demo with no account. Then reach out for a self-paced class code or live
                  support.
                </p>
              </div>
              <div className="border-t border-white/20 pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="font-semibold text-[#f7f3e8]">Schools &amp; admins</p>
                <p className="mt-1.5 text-sm leading-snug text-white/80">
                  Class codes, roster progress, and standards docs — request a pilot when
                  you&apos;re ready.
                </p>
              </div>
            </div>
          </div>
        </BrandCtaBand>
        </PageBand>

        {/* Other paths */}
        <PageBand tone="proof" aria-labelledby="other-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2
              id="other-heading"
              className={cn("text-xl sm:text-2xl", duskTitleClass)}
            >
              Other learning paths
            </h2>
            <Link
              href="/learning-paths"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)]"
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
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}
