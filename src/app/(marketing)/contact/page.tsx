import type { Metadata } from "next";
import Link from "next/link";

import { Band, H2, Section, SubpageShell, textLinkClass } from "@/components/layout/SubpageShell";
import { ContactForm } from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Request a pilot | Kanam Academy",
  description:
    "Request a pilot or ask a question. For schools, teachers, families, and anyone evaluating Kanam Academy — live instruction or structured async tech learning.",
};

export default function ContactPage() {
  const supportEmail = siteConfig.links.email;

  return (
    <SubpageShell
      eyebrow="Contact"
      title="Request a pilot or ask a question"
      subtitle="Tell us your role, who you’re supporting, and your timeline. We’ll help you evaluate Kanam for a classroom, after-school block, enrichment program, or self-paced learning."
      actions={
        <>
          <Button asChild>
            <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
              Try the guided lesson
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
              Get started
            </Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] xl:items-start">
        <div>
          <Section className="pt-0">
            <Band>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-foreground/10 bg-white/70 p-5">
                  <h3 className="text-lg font-semibold">Schools &amp; partners</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground leading-relaxed marker:text-[var(--brand)]">
                    <li>Pilot for a class, after-school, or enrichment block</li>
                    <li>Standards packet &amp; implementation questions</li>
                    <li>Instructor tools: class codes, roster, assignments</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-white/70 p-5">
                  <h3 className="text-lg font-semibold">Families &amp; teachers</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground leading-relaxed marker:text-[var(--brand)]">
                    <li>Try the guided demo first (no account)</li>
                    <li>Student accounts &amp; progress questions</li>
                    <li>Homeschool / self-paced enrichment</li>
                  </ul>
                </div>
              </div>
            </Band>
          </Section>

          <Section id="send-message" className="border-t border-foreground/10">
            <H2>Send a message</H2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We typically respond within 1–2 business days. Include who you’re supporting
              and your preferred start window when you can.
            </p>
            <div className="mt-5 rounded-3xl border border-foreground/10 bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <ContactForm />
            </div>
          </Section>

          {supportEmail ? (
            <Section className="border-t border-foreground/10 pb-0">
              <H2>Prefer email?</H2>
              <Band className="mt-5">
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href={`mailto:${supportEmail}`} className={textLinkClass}>
                    {supportEmail}
                  </a>
                </p>
              </Band>
            </Section>
          ) : null}
        </div>

        <aside className="space-y-4 xl:sticky xl:top-24">
          <Band className="p-5">
            <h3 className="font-semibold">Quick links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href={siteConfig.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClass}
                >
                  Try the guided lesson
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.app}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClass}
                >
                  Student welcome / sign-in
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.instructor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClass}
                >
                  Instructor sign-in
                </Link>
              </li>
              <li>
                <Link href="/learning-paths" className={textLinkClass}>
                  See the four learning paths
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.standardsPdf}
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  Curriculum overview (PDF)
                </Link>
              </li>
            </ul>
          </Band>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We do not invent pricing, partner logos, or school counts on this site. Ask us
            directly for pilot details.
          </p>
        </aside>
      </div>
    </SubpageShell>
  );
}
