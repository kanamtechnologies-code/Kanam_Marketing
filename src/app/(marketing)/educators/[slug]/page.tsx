import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import {
  duskGhostBtnClass,
  duskInsetClass,
  FullBleed,
  HomeHeroVeil,
  lightEyebrowClass,
  lightMutedClass,
  lightTitleClass,
  PageBand,
} from "@/components/layout/PageBands";
import { SubpageShell } from "@/components/layout/SubpageShell";
import { brandCtaPrimaryBtnClass } from "@/components/site/BrandCtaBand";
import { ContactForm } from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import { getPartnerAudience, PARTNER_AUDIENCES } from "@/lib/partner-audiences";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PARTNER_AUDIENCES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const audience = getPartnerAudience(slug);
  if (!audience) return { title: "For schools & leaders | Kanam Academy" };
  return {
    title: `${audience.title} | Kanam Academy`,
    description: audience.metaDescription,
  };
}

export default async function PartnerAudiencePage({ params }: Props) {
  const { slug } = await params;
  const audience = getPartnerAudience(slug);
  if (!audience) notFound();

  const others = PARTNER_AUDIENCES.filter((a) => a.slug !== audience.slug);

  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        {/* Hero */}
        <section
          aria-labelledby="audience-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]"
        >
          <div className="absolute inset-0">
            <Image
              src={audience.image}
              alt={audience.imageAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <HomeHeroVeil />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[28rem] w-full max-w-6xl flex-col justify-between gap-8 px-4 pb-12 pt-28 sm:min-h-[32rem] sm:px-6 sm:pb-16 lg:min-h-[36rem] lg:px-8">
            <Link
              href="/educators"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#e8e0cf]/90 transition-colors hover:text-[var(--accent)]"
            >
              <ArrowLeft className="h-4 w-4" />
              All schools & leaders
            </Link>

            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {audience.eyebrow}
              </p>
              <h1
                id="audience-hero-heading"
                className="mt-3 font-display text-[2.15rem] font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl lg:text-[3rem] lg:leading-[1.05]"
              >
                {audience.heroHeadline}
                <span className="block text-[var(--accent)]">
                  {audience.heroAccent}
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#c5d2cb] sm:text-lg">
                {audience.heroBody}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className={brandCtaPrimaryBtnClass}>
                  <Link href="#request-info">Request information</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className={duskGhostBtnClass}
                >
                  <Link
                    href={siteConfig.links.pricingPdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pricing PDF
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className={duskGhostBtnClass}
                >
                  <Link
                    href={siteConfig.links.onePager}
                    target="_blank"
                    rel="noreferrer"
                  >
                    One-pager PDF
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resources strip */}
        <PageBand tone="proof" className="py-7 md:py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-[#f7f3e8]">
              Share with your team — printable pages you can save as PDF.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                asChild
                variant="secondary"
                size="sm"
                className={duskGhostBtnClass}
              >
                <Link
                  href={siteConfig.links.onePager}
                  target="_blank"
                  rel="noreferrer"
                >
                  Product one-pager
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className={duskGhostBtnClass}
              >
                <Link
                  href={siteConfig.links.pricingPdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pricing one-pager
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className={duskGhostBtnClass}
              >
                <Link
                  href={siteConfig.links.standardsPdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Standards packet
                </Link>
              </Button>
            </div>
          </div>
        </PageBand>

        {/* At a glance + fit */}
        <PageBand tone="mid">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                At a glance
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl">
                What you get
              </h2>
              <ul className="mt-5 space-y-3">
                {audience.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-snug text-[#c5d2cb] sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                A good fit if
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl">
                Built for your setting
              </h2>
              <ul className="mt-5 space-y-3">
                {audience.fitFor.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-snug text-[#c5d2cb] sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent-rgb)/1)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  variant="secondary"
                  className={duskGhostBtnClass}
                >
                  <Link href="/learning-paths">See the six learning paths</Link>
                </Button>
              </div>
            </div>
          </div>
        </PageBand>

        {/* How it works */}
        <PageBand tone="base" aria-labelledby="how-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
          >
            You host. We teach.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {audience.howItWorks.map((step, i) => (
              <div key={step.title} className={`${duskInsetClass} p-5`}>
                <p className="font-mono text-xs font-semibold text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-[#f7f3e8]">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#c5d2cb]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </PageBand>

        {/* Pricing guidance */}
        <PageBand tone="light" aria-labelledby="pricing-heading">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className={lightEyebrowClass}>Starting guidance</p>
              <h2
                id="pricing-heading"
                className={`${lightTitleClass} mt-2 text-3xl sm:text-4xl`}
              >
                Pricing for {audience.shortTitle.toLowerCase()}
              </h2>
              <p className={`${lightMutedClass} mt-3 text-sm sm:text-base`}>
                Ranges below are starting guidance for quotes — final pricing
                depends on learner count, cohort length, and whether you add
                live Kanam instruction.
              </p>
            </div>
            <Button asChild className={brandCtaPrimaryBtnClass}>
              <Link
                href={siteConfig.links.pricingPdf}
                target="_blank"
                rel="noreferrer"
              >
                Full pricing PDF
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.pricingCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[rgb(var(--brand-2-rgb)/0.2)] bg-white/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                  {card.title}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                  {card.price}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                  {card.alt}
                </p>
                <p className="mt-3 text-sm leading-snug text-zinc-700">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </PageBand>

        {/* Request info */}
        <PageBand
          tone="base"
          id="request-info"
          aria-labelledby="request-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Next step
              </p>
              <h2
                id="request-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl"
              >
                Request information
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#c5d2cb] sm:text-base">
                Tell us your role, group size, location, and timeline.
                We&apos;ll follow up with next steps for a quote — usually
                within 1–2 business days.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#c5d2cb]">
                <li>
                  <Link
                    href={siteConfig.links.onePager}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    Product one-pager →
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.links.pricingPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    Pricing one-pager →
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    Try the guided lesson →
                  </Link>
                </li>
              </ul>
            </div>
            <ContactForm
              defaultRole={audience.contactRole}
              defaultHelpTopic={audience.contactHelpTopic}
              title="Request information"
              submitLabel="Send request"
            />
          </div>
        </PageBand>

        {/* Other audiences */}
        <PageBand tone="mid" aria-labelledby="other-heading">
          <h2
            id="other-heading"
            className="font-display text-2xl font-semibold tracking-tight text-[#f7f3e8] sm:text-3xl"
          >
            Looking for a different setting?
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group rounded-2xl border border-[rgb(var(--accent-rgb)/0.16)] bg-[#0e241c]/80 px-5 py-4 transition-colors hover:border-[rgb(var(--accent-rgb)/0.4)] hover:bg-[#16352b]"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  {item.eyebrow}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-[#f7f3e8] group-hover:text-[var(--accent)]">
                  {item.title} →
                </p>
              </Link>
            ))}
          </div>
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}
