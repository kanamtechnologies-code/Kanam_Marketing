import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  BrandCtaBand,
  brandCtaBodyClass,
  brandCtaEyebrowClass,
  brandCtaPrimaryBtnClass,
  brandCtaSecondaryBtnClass,
  brandCtaTitleClass,
} from "@/components/site/BrandCtaBand";
import {
  duskEyebrowClass,
  duskMutedClass,
  duskTitleClass,
  FullBleed,
  HomeHeroVeil,
  lightEyebrowClass,
  lightMutedClass,
  lightTitleClass,
  PageBand,
} from "@/components/layout/PageBands";
import { SubpageShell } from "@/components/layout/SubpageShell";
import { Button } from "@/components/ui/button";

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
      <FullBleed>
        <section aria-labelledby="about-hero-heading" className="kanam-fade-up relative isolate overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.25)]">
          <div className="absolute inset-0">
            <Image
              src="/images/product/about-hero.png"
              alt="Young people and mentors learning together"
              fill
              priority
              className="object-cover object-[62%_center]"
              sizes="100vw"
            />
            <HomeHeroVeil />
          </div>
          <div className="relative z-10 mx-auto flex min-h-[29rem] w-full max-w-6xl flex-col justify-center px-4 pb-12 pt-28 sm:min-h-[33rem] sm:px-6 sm:pb-16 lg:min-h-[37rem] lg:px-8">
            <div className="max-w-xl">
              <p className={duskEyebrowClass}>About Kanam Academy</p>
              <h1 id="about-hero-heading" className="mt-3 font-display text-[2.15rem] font-semibold tracking-tight text-[#f7f3e8] sm:text-4xl lg:text-[3rem] lg:leading-[1.05]">
                Tech should be accessible early —
                <span className="block text-[var(--accent)]">not reserved for later.</span>
              </h1>
              <p className={`mt-5 max-w-xl text-base sm:text-lg ${duskMutedClass}`}>
                We’re here for young people first. Kanam Academy exists so teens can learn
                coding, AI, data, cybersecurity, financial literacy, and digital literacy with a real instructor —
                and so parents, schools, and Scout leaders don’t have to figure it out alone.
              </p>
            </div>
          </div>
        </section>

        <PageBand tone="mid" id="mission" aria-labelledby="mission-heading">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[rgb(var(--accent-rgb)/0.28)] sm:aspect-[5/4] lg:col-span-5 lg:aspect-auto lg:min-h-[32rem]">
            <Image src="/images/product/about-hero.png" alt="Young people and mentors learning together" fill className="object-cover object-[center_30%]" sizes="(min-width: 1024px) 40vw, 100vw" />
          </figure>
          <div className="lg:col-span-7">
            <p className={duskEyebrowClass}>
              Our mission
            </p>
            <h2
              id="mission-heading"
              className={`mt-2 text-3xl sm:text-4xl ${duskTitleClass}`}
            >
              Help youth move forward in a tech-shaped world.
            </h2>
            <div className={`mt-5 space-y-4 text-base sm:text-lg ${duskMutedClass}`}>
              <p>
                Too many young people wait until college — or never get a clear on-ramp —
                to learn the skills that already shape every job, every device, every
                decision. We believe that access should start earlier, with teaching that
                feels human.
              </p>
              <p>
                Kanam Academy was built around a simple conviction:{" "}
                <strong className="font-semibold text-[#f7f3e8]">
                  live instruction comes first.
                </strong>{" "}
                Videos and self-paced tools can help practice stick, but a real instructor
                is what unlocks confidence, accountability, and momentum — especially for
                teens who are just getting started.
              </p>
              <p>
                Async tracks support the journey. Live teaching leads it. That’s how we
                help youth — and the adults who care for them —{" "}
                <span className="font-semibold text-[var(--accent)]">
                  Move Forward.
                </span>
              </p>
            </div>
          </div>
          </div>
        </PageBand>

        {/* Who we show up for */}
        <PageBand
          tone="light"
          id="who"
          aria-labelledby="who-heading"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className={lightEyebrowClass}>
              Who we show up for
            </p>
            <h2
              id="who-heading"
              className={`mt-2 text-3xl sm:text-4xl ${lightTitleClass}`}
            >
              Youth first. Then the people who stand beside them.
            </h2>
          </div>

          <div className="mt-12 space-y-12 md:space-y-16">
            {WHO_WE_SERVE.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10 ${
                  index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-[rgb(var(--brand-2-rgb)/0.28)] lg:col-span-6 lg:aspect-auto lg:min-h-[20rem]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </figure>
                <div className="lg:col-span-6 lg:px-2">
                  <p className={lightEyebrowClass}>
                    {item.title}
                  </p>
                  <p className={`mt-3 text-2xl sm:text-3xl ${lightTitleClass}`}>
                    {item.title === "Youth"
                      ? "The learners at the center of everything we do."
                      : item.title === "Parents"
                        ? "Partners at home who want clarity, not guesswork."
                        : "Hosts who bring the community — we bring the teaching."}
                  </p>
                  <p className={`mt-4 text-base ${lightMutedClass}`}>
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </PageBand>

        {/* Live over async */}
        <PageBand
          tone="proof"
          id="live"
          aria-labelledby="live-heading"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className={duskEyebrowClass}>
              How we teach
            </p>
            <h2
              id="live-heading"
              className={`mt-3 text-3xl sm:text-4xl ${duskTitleClass}`}
            >
              Live instruction first.
              <span className="block text-[var(--accent)]">
                Async practice second.
              </span>
            </h2>
            <p className={`mt-5 text-base sm:text-lg ${duskMutedClass}`}>
              We lead with people — Kanam instructors who teach live, answer questions in
              the moment, and keep learners moving. Structured async lessons help skills
              stick between sessions. That order matters: guidance first, practice next,
              progress you can see throughout.
            </p>
            <p className={`mt-4 text-base sm:text-lg ${duskMutedClass}`}>
              Whether it’s a family tutoring session, a school cohort, or a Scout troop
              night, the heart of Kanam is the same: a real teacher helping a young person
              grow.
            </p>
          </div>
        </PageBand>

        {/* Closing invitation */}
        <div className="bg-[#0e241c] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
        <BrandCtaBand
          id="join"
          aria-labelledby="join-heading"
          className="scroll-mt-24"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className={brandCtaEyebrowClass}>
              Join us
            </p>
            <h2
              id="join-heading"
              className={brandCtaTitleClass}
            >
              If you care about a young person’s future in tech — we’re already on your
              side.
            </h2>
            <p className={brandCtaBodyClass}>
              Tell us about your child, your classroom, your program, or your troop. We’ll
              help you find the right next step — with live instruction at the center.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button asChild className={brandCtaPrimaryBtnClass}>
              <Link href="/contact">Talk with us</Link>
            </Button>
            <Button asChild variant="secondary" className={brandCtaSecondaryBtnClass}>
              <Link href="/parents">For families</Link>
            </Button>
            <Button asChild variant="secondary" className={brandCtaSecondaryBtnClass}>
              <Link href="/educators">For schools &amp; leaders</Link>
            </Button>
          </div>
          </div>
        </BrandCtaBand>
        </div>
        </div>
      </FullBleed>
    </SubpageShell>
  );
}
