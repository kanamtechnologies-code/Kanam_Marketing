import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Kanam Academy",
  description:
    "Kanam Academy’s mission is to make real tech skills accessible early — for youth, parents, schools, and Scout troops — through live instruction first. Move Forward.",
};

const WHO_WE_SERVE = [
  {
    title: "Youth",
    body: "Teens deserve more than another app to click through. They deserve a real instructor, a clear path, and the confidence that comes from building something that works.",
    image: "/images/product/teen-girl-coding.png",
    imageAlt: "Teen focused on building real tech skills",
  },
  {
    title: "Parents",
    body: "You shouldn’t have to become a computer-science teacher overnight. We give your child live guidance — and progress you can actually see — so enrichment feels trustworthy, not vague.",
    image: "/images/product/family-mom-son.png",
    imageAlt: "Parent supporting a young learner at home",
  },
  {
    title: "Schools & Scouts",
    body: "Classrooms, after-school programs, and Scout troops already hold the learners and the schedule. We bring the live teaching — online or in person where available — so your team can host without becoming the CS expert.",
    image: "/images/product/leaders-youth-live.png",
    imageAlt: "Youth leaders and learners in a Kanam live session",
  },
] as const;

export default function AboutPage() {
  return (
    <SubpageShell overlapNav={false}>
      <div className="space-y-14 md:space-y-16 lg:space-y-20">
        {/* Personal mission intro — editorial, not a product hero */}
        <header className="kanam-fade-up mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
            About Kanam Academy
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
            Tech should be accessible early —
            <span className="block text-[rgb(var(--accent-rgb)/1)]">
              not reserved for later.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            We’re here for young people first. Kanam Academy exists so teens can learn
            coding, AI, data, cybersecurity, and digital literacy with a real instructor —
            and so parents, schools, and Scout leaders don’t have to figure it out alone.
          </p>
        </header>

        {/* Mission essay + image */}
        <section
          id="mission"
          aria-labelledby="mission-heading"
          className="scroll-mt-24 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12"
        >
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-zinc-900/10 shadow-[0_18px_44px_rgba(15,23,42,0.12)] sm:aspect-[5/4] lg:col-span-5 lg:aspect-auto lg:min-h-[32rem]">
            <Image
              src="/images/product/about-hero.png"
              alt="Young people and mentors learning together"
              fill
              priority
              className="object-cover object-[center_30%]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </figure>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Our mission
            </p>
            <h2
              id="mission-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Help youth move forward in a tech-shaped world.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <p>
                Too many young people wait until college — or never get a clear on-ramp —
                to learn the skills that already shape every job, every device, every
                decision. We believe that access should start earlier, with teaching that
                feels human.
              </p>
              <p>
                Kanam Academy was built around a simple conviction:{" "}
                <strong className="font-semibold text-zinc-900">
                  live instruction comes first.
                </strong>{" "}
                Videos and self-paced tools can help practice stick, but a real instructor
                is what unlocks confidence, accountability, and momentum — especially for
                teens who are just getting started.
              </p>
              <p>
                Async tracks support the journey. Live teaching leads it. That’s how we
                help youth — and the adults who care for them —{" "}
                <span className="font-semibold text-[rgb(var(--accent-rgb)/1)]">
                  Move Forward.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Who we show up for */}
        <section
          id="who"
          aria-labelledby="who-heading"
          className="scroll-mt-24 space-y-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Who we show up for
            </p>
            <h2
              id="who-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Youth first. Then the people who stand beside them.
            </h2>
          </div>

          <div className="space-y-12 md:space-y-16">
            {WHO_WE_SERVE.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10 ${
                  index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] border border-zinc-900/10 shadow-[0_14px_36px_rgba(15,23,42,0.1)] lg:col-span-6 lg:aspect-auto lg:min-h-[20rem]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </figure>
                <div className="lg:col-span-6 lg:px-2">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-2)]">
                    {item.title}
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                    {item.title === "Youth"
                      ? "The learners at the center of everything we do."
                      : item.title === "Parents"
                        ? "Partners at home who want clarity, not guesswork."
                        : "Hosts who bring the community — we bring the teaching."}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Live over async */}
        <section
          id="live"
          aria-labelledby="live-heading"
          className="scroll-mt-24 relative overflow-hidden rounded-[1.5rem] border border-[rgb(var(--brand-2-rgb)/0.22)] bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.16)] via-white/90 to-[rgb(var(--accent-rgb)/0.22)] px-5 py-10 sm:px-8 sm:py-12 lg:px-12"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] kanam-hex-pattern" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              How we teach
            </p>
            <h2
              id="live-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Live instruction first.
              <span className="block text-[rgb(var(--accent-rgb)/1)]">
                Async practice second.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-700 sm:text-lg">
              We lead with people — Kanam instructors who teach live, answer questions in
              the moment, and keep learners moving. Structured async lessons help skills
              stick between sessions. That order matters: guidance first, practice next,
              progress you can see throughout.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
              Whether it’s a family tutoring session, a school cohort, or a Scout troop
              night, the heart of Kanam is the same: a real teacher helping a young person
              grow.
            </p>
          </div>
        </section>

        {/* Closing invitation */}
        <section
          id="join"
          aria-labelledby="join-heading"
          className="scroll-mt-24 grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Join us
            </p>
            <h2
              id="join-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              If you care about a young person’s future in tech — we’re already on your
              side.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              Tell us about your child, your classroom, your program, or your troop. We’ll
              help you find the right next step — with live instruction at the center.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button asChild>
              <Link href="/contact">Talk with us</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/parents">For families</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/educators">For schools &amp; leaders</Link>
            </Button>
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}
