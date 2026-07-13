import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, ShieldCheck } from "lucide-react";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { ContactForm } from "@/components/site/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Request info | Kanam Academy",
  description:
    "Talk to Kanam Academy about live tutoring, family subscriptions, or bringing live instruction to your school, after-school program, or Scout troop. Email info@kanamacademy.com.",
};

const PATHS = [
  {
    title: "Parents & families",
    body: "Tutoring trials, async tracks, and progress you can see.",
    href: "/parents",
    external: false,
  },
  {
    title: "Schools & leaders",
    body: "Live instruction for classrooms, programs, and Scout troops.",
    href: "/educators",
    external: false,
  },
  {
    title: "Try a lesson first",
    body: "Open the guided demo — no account needed.",
    href: siteConfig.links.demo,
    external: true,
  },
] as const;

const EXPECT = [
  {
    icon: Clock3,
    title: "Reply in 1 business day",
    body: "A real person follows up — not an autoresponder loop.",
  },
  {
    icon: Mail,
    title: "Ask anything",
    body: "Tutoring, subscriptions, schools, programs — tell us what you need.",
  },
  {
    icon: ShieldCheck,
    title: "Your info stays with us",
    body: "We only use it to answer you and plan next steps.",
  },
] as const;

export default function ContactPage() {
  return (
    <SubpageShell overlapNav={false}>
      <div className="space-y-10 md:space-y-12 lg:space-y-14">
        {/* Intro — light, not a dark full-bleed hero */}
        <header className="kanam-fade-up max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
            Contact
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
            Tell us what you need.
            <span className="block">
              We’ll help you{" "}
              <span className="text-[rgb(var(--accent-rgb)/1)]">Move Forward.</span>
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Live tutoring, family subscriptions, or a school/program cohort — send a
            request and we’ll help you get started.
          </p>
        </header>

        {/* Form-forward split: form left, photo + trust right */}
        <section
          id="request"
          aria-labelledby="request-heading"
          className="scroll-mt-24 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-8"
        >
          <div className="lg:col-span-7">
            <h2 id="request-heading" className="sr-only">
              Request information
            </h2>
            <ContactForm submitLabel="Send request" />
          </div>

          <aside className="space-y-5 lg:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-zinc-900/10 shadow-[0_18px_44px_rgba(15,23,42,0.12)] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[22rem]">
              <Image
                src="/images/product/contact-hero.png"
                alt="Kanam team member ready to help parents and school partners"
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                  Real humans · Real replies
                </p>
                <p className="mt-1.5 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  We’re here to help you get started.
                </p>
              </figcaption>
            </figure>

            <div className="rounded-[1.35rem] border border-zinc-900/10 bg-white/90 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                What happens next
              </p>
              <ul className="mt-4 space-y-4">
                {EXPECT.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--brand-2-rgb)/0.12)] text-[var(--brand-2)]">
                      <item.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-950">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-snug text-zinc-600">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* Compact path strip — below the form, not competing with it */}
        <section
          aria-labelledby="paths-heading"
          className="rounded-[1.5rem] border border-zinc-900/8 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.1)] via-[rgb(var(--background))] to-[rgb(var(--accent-rgb)/0.16)] px-5 py-7 sm:px-7 sm:py-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                Explore while you wait
              </p>
              <h2
                id="paths-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
              >
                Useful next steps
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {PATHS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col rounded-[1.15rem] border border-zinc-900/8 bg-white/80 px-5 py-4 transition-colors hover:border-[rgb(var(--brand-2-rgb)/0.35)] hover:bg-white"
              >
                <span className="font-display text-lg font-semibold text-zinc-950">
                  {item.title}
                </span>
                <span className="mt-1 flex-1 text-sm leading-snug text-zinc-600">
                  {item.body}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-2)]">
                  Go
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
