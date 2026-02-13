import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Band, H2, Section, SubpageShell, textLinkClass } from "@/components/layout/SubpageShell";
import { ContactForm } from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Kanam Academy",
  description:
    "Book a call or send a message. For parents and educators interested in instructor-led Python + AI for kids.",
};

export default function ContactPage() {
  const supportEmail = siteConfig.links.email;

  return (
    <SubpageShell
      eyebrow="Contact"
      title="Let’s talk about the right fit."
      subtitle="Whether you’re a parent exploring cohorts or an educator looking for a standards-aligned program, we’ll help you find the best next step."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
        <div>
          <Section className="pt-0">
            <Band className="mt-2">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-foreground/10 bg-white/70 p-5">
                  <h3 className="text-lg md:text-xl font-semibold">For Families</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed marker:text-emerald-600">
                    <li>Cohort availability and schedule</li>
                    <li>Enrollment questions</li>
                    <li>Student readiness and expectations</li>
                  </ul>
                  <div className="mt-5">
                    <Button asChild variant="outline">
                      <Link href="#send-message">Ask about a cohort</Link>
                    </Button>
                  </div>
                </div>

                <div className="rounded-2xl border border-foreground/10 bg-white/70 p-5">
                  <h3 className="text-lg md:text-xl font-semibold">For Schools &amp; Programs</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed marker:text-emerald-600">
                    <li>Standards alignment and implementation</li>
                    <li>Partnerships and group cohorts</li>
                    <li>Reporting and documentation</li>
                  </ul>
                  <div className="mt-5">
                    <Button asChild variant="outline">
                      <Link href="#send-message">Discuss a partnership</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Band>
          </Section>

          <Section className="border-t border-foreground/10">
            <H2>What happens after you reach out?</H2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-foreground/10 bg-white/70 p-5">
                <h3 className="text-lg font-semibold">We review your message</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  We read every inquiry carefully to understand your goals.
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-white/70 p-5">
                <h3 className="text-lg font-semibold">We respond within 1–2 business days</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  You’ll receive a clear reply outlining next steps.
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-white/70 p-5">
                <h3 className="text-lg font-semibold">We schedule or guide</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  We’ll either schedule a call or provide direct enrollment details.
                </p>
              </div>
            </div>
          </Section>

          <Section id="send-message" className="border-t border-foreground/10">
            <H2>Send a message</H2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We respond within 1–2 business days.
            </p>
            <div className="mt-5 rounded-3xl bg-white shadow-sm border border-foreground/10 p-8 md:p-10">
              <h3 className="text-lg md:text-xl font-semibold">Send a message</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                We typically respond within 1–2 business days.
              </p>
              <div className="[&_label]:text-sm [&_label]:md:text-base [&_input]:py-3 [&_input]:text-base [&_select]:py-3 [&_select]:text-base [&_textarea]:py-3 [&_textarea]:text-base [&_textarea]:leading-relaxed [&_input]:focus-visible:ring-2 [&_input]:focus-visible:ring-[var(--brand-2)] [&_select]:focus-visible:ring-2 [&_select]:focus-visible:ring-[var(--brand-2)] [&_textarea]:focus-visible:ring-2 [&_textarea]:focus-visible:ring-[var(--brand-2)]">
                <ContactForm />
              </div>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                For schools/programs: include grade band, preferred start window, and estimated learner count.
              </p>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Human-led instruction",
                "CSTA-aligned curriculum",
                "Safe, structured learning",
                "Ages 12–15",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-foreground/10 bg-white/65 px-3 py-2 text-xs tracking-widest text-muted-foreground uppercase"
                >
                  {item}
                </div>
              ))}
            </div>
          </Section>

          {supportEmail ? (
            <Section className="border-t border-foreground/10 pb-0">
              <H2>Prefer email?</H2>
              <Band className="mt-5">
                <div className="flex flex-col gap-2 text-muted-foreground">
                  <p>
                    Email:{" "}
                    <a href={`mailto:${supportEmail}`} className={textLinkClass}>
                      {supportEmail}
                    </a>
                  </p>
                  <p>Or we’ll reply to the email you provide.</p>
                </div>
              </Band>
            </Section>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-24">
          <figure className="space-y-2">
            <div className="rounded-3xl overflow-hidden border border-foreground/10 bg-background ring-1 ring-[rgb(var(--accent-rgb)/0.28)]">
              <div className="relative h-[260px] md:h-[520px] w-full">
                <Image
                  src="/images/family_pics/pexels-august-de-richelieu-4260747.jpg"
                  alt="Family-friendly learning environment"
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Live, human-led support for families and schools.
            </figcaption>
          </figure>
        </aside>
      </div>
    </SubpageShell>
  );
}
