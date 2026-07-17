import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import { INSTRUCTORS } from "@/lib/instructors";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet Our Live Instructors | Kanam Academy",
  description:
    "Meet the Kanam Academy live instructors — industry professionals who teach coding, AI, data, cybersecurity, and more. Move Forward.",
};

export default function InstructorsPage() {
  return (
    <SubpageShell overlapNav={false}>
      <div className="space-y-14 md:space-y-16 lg:space-y-20">
        <header className="kanam-fade-up mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
            Live instruction
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
            Meet the people who
            <span className="block text-[rgb(var(--accent-rgb)/1)]">
              teach the lesson.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Kanam Academy is built around live instruction first. Our instructors bring
            real industry experience — and the patience to make hard skills click for teens,
            families, and classroom partners.
          </p>
        </header>

        <section aria-label="Instructors" className="space-y-8">
          {INSTRUCTORS.map((person, index) => (
            <article
              key={person.slug}
              id={person.slug}
              className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
            >
              <div
                className={`grid lg:grid-cols-12 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative flex flex-col justify-between bg-gradient-to-br from-[#145c45] via-[rgb(var(--brand-2-rgb)/1)] to-[#0b2f24] px-6 py-8 text-white sm:px-8 lg:col-span-4 lg:min-h-[22rem]">
                  <div className="pointer-events-none absolute inset-0 opacity-[0.08] kanam-hex-pattern" />
                  <div className="relative">
                    {person.image ? (
                      <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-2 ring-[rgb(var(--accent-rgb)/0.65)] sm:mx-0">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover"
                          sizes="144px"
                        />
                      </div>
                    ) : (
                      <div
                        aria-hidden
                        className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[#0b2f24]/55 font-display text-4xl font-semibold text-[var(--accent)] ring-2 ring-[rgb(var(--accent-rgb)/0.65)] sm:mx-0"
                      >
                        {person.initials}
                      </div>
                    )}
                    <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      {person.role}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                      {person.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      {person.headline}
                    </p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-white/65">
                      {person.location}
                    </p>
                  </div>
                  <div className="relative mt-6">
                    <Button
                      asChild
                      className="rounded-full bg-[var(--accent)] text-[#14201c] hover:bg-[rgb(var(--accent-rgb)/0.92)]"
                    >
                      <a
                        href={person.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-8 lg:col-span-8 lg:py-10">
                  <div className="space-y-4 text-base leading-relaxed text-[var(--muted)]">
                    {person.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                        What they bring
                      </p>
                      <ul className="mt-3 space-y-2">
                        {person.focus.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm font-medium text-zinc-800"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-2)]">
                        Background highlights
                      </p>
                      <ul className="mt-3 space-y-2">
                        {person.credentials.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm font-medium text-zinc-800"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="relative overflow-hidden rounded-[1.5rem] border border-[rgb(var(--brand-rgb)/0.35)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/1)] via-[rgb(var(--brand-2-rgb)/0.94)] to-[rgb(var(--brand-rgb)/0.88)] px-5 py-8 text-white sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] kanam-hex-pattern" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent-rgb)/1)]">
                Learn with us
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready for a real instructor?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                Try a guided lesson, book live tutoring, or request a pilot for your school,
                after-school program, or Scout troop.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[var(--accent)] text-[#14201c] hover:bg-[rgb(var(--accent-rgb)/0.92)]"
              >
                <Link
                  href={siteConfig.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try the guided lesson
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/contact">Request a pilot</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
