import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { ContactForm } from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import {
  getPartnerAudience,
  PARTNER_AUDIENCES,
} from "@/lib/partner-audiences";
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
      <div className="space-y-12 md:space-y-14 lg:space-y-16">
        {/* Hero */}
        <section
          aria-labelledby="audience-hero-heading"
          className="kanam-fade-up relative isolate overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-950 shadow-[0_22px_56px_rgba(15,23,42,0.16)]"
        >
          <div className="absolute inset-0">
            <Image
              src={audience.image}
              alt={audience.imageAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1280px) 90rem, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/88 to-zinc-950/25 sm:via-zinc-950/75 sm:to-zinc-950/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-zinc-950/30" />
          </div>

          <div className="relative z-10 flex min-h-[24rem] flex-col justify-between gap-8 p-6 sm:min-h-[26rem] sm:p-8 lg:min-h-[28rem] lg:p-10">
            <Link
              href="/educators"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All schools & leaders
            </Link>

            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                {audience.eyebrow}
              </p>
              <h1
                id="audience-hero-heading"
                className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.06]"
              >
                {audience.heroHeadline}
                <span className="block text-[rgb(var(--accent-rgb)/1)]">
                  {audience.heroAccent}
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                {audience.heroBody}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild>
                  <Link href="#request-info">Request information</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
                >
                  <Link href={siteConfig.links.pricingPdf} target="_blank" rel="noreferrer">
                    Pricing PDF
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
                >
                  <Link href={siteConfig.links.onePager} target="_blank" rel="noreferrer">
                    One-pager PDF
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resources strip */}
        <div className="flex flex-col gap-3 rounded-[1.25rem] border border-[rgb(var(--brand-rgb)/0.35)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-2-rgb)/0.94)] to-[rgb(var(--brand-rgb)/0.88)] px-5 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm font-medium text-white/90">
            Share with your team — printable pages you can save as PDF.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
            >
              <Link href={siteConfig.links.onePager} target="_blank" rel="noreferrer">
                Product one-pager
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
            >
              <Link href={siteConfig.links.pricingPdf} target="_blank" rel="noreferrer">
                Pricing one-pager
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="border-white/25 bg-white/10 text-white hover:bg-white/18 hover:text-white"
            >
              <Link href={siteConfig.links.standardsPdf} target="_blank" rel="noreferrer">
                Standards PDF
              </Link>
            </Button>
          </div>
        </div>

        {/* At a glance + fit */}
        <section className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              At a glance
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              What you get
            </h2>
            <ul className="mt-5 space-y-3">
              {audience.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-snug text-zinc-800 sm:text-base">
                  <span
                    aria-hidden
                    className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              A good fit if
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Built for your setting
            </h2>
            <ul className="mt-5 space-y-3">
              {audience.fitFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-snug text-zinc-800 sm:text-base">
                  <span
                    aria-hidden
                    className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent-rgb)/1)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <Link href="/learning-paths">See the five learning paths</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="how-heading"
          className="relative overflow-hidden rounded-[1.5rem] border border-[rgb(var(--brand-rgb)/0.35)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-2-rgb)/0.94)] to-[rgb(var(--brand-rgb)/0.88)] px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] kanam-hex-pattern" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent-rgb)/1)]">
              How it works
            </p>
            <h2
              id="how-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              You host. We teach.
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {audience.howItWorks.map((step, i) => (
                <div key={step.title}>
                  <p className="font-display text-sm font-semibold tabular-nums text-[rgb(var(--accent-rgb)/1)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-semibold text-white sm:text-lg">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-snug text-white/75">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing guidance */}
        <section aria-labelledby="pricing-heading" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Starting guidance
              </p>
              <h2
                id="pricing-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
              >
                Pricing for {audience.shortTitle.toLowerCase()}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Ranges below are starting guidance for quotes — final pricing depends on
                learner count, cohort length, and whether you add live Kanam instruction.
              </p>
            </div>
            <Button asChild>
              <Link href={siteConfig.links.pricingPdf} target="_blank" rel="noreferrer">
                Full pricing PDF
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.pricingCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.25rem] border border-zinc-900/10 bg-white/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                  {card.title}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950">
                  {card.price}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-600">{card.alt}</p>
                <p className="mt-3 text-sm leading-snug text-zinc-700">{card.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Request info */}
        <section
          id="request-info"
          aria-labelledby="request-heading"
          className="scroll-mt-24 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Next step
            </p>
            <h2
              id="request-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Request information
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Tell us your role, group size, location, and timeline. We&apos;ll follow up
              with next steps for a quote — usually within 1–2 business days.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700">
              <li>
                <Link
                  href={siteConfig.links.onePager}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
                >
                  Product one-pager →
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.pricingPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
                >
                  Pricing one-pager →
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--brand-2)] underline-offset-4 hover:underline"
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
        </section>

        {/* Other audiences */}
        <section aria-labelledby="other-heading" className="space-y-4">
          <h2
            id="other-heading"
            className="font-display text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl"
          >
            Looking for a different setting?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group rounded-[1.15rem] border border-zinc-900/10 bg-white/70 px-5 py-4 transition-colors hover:border-[rgb(var(--brand-2-rgb)/0.35)] hover:bg-white"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                  {item.eyebrow}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-zinc-950 group-hover:text-[rgb(var(--brand-2-rgb)/1)]">
                  {item.title} →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
