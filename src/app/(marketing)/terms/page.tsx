import type { Metadata } from "next";
import Link from "next/link";

import { FullBleed, PageBand } from "@/components/layout/PageBands";
import { SubpageShell } from "@/components/layout/SubpageShell";
import { LegalList, LegalSection } from "@/components/site/LegalDoc";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Kanam Academy",
  description:
    "Terms governing use of Kanam Academy websites, learning platform, and related educational services.",
};

const EFFECTIVE_DATE = "July 17, 2026";
const CONTACT_EMAIL = siteConfig.links.email;
const CONTACT_PHONE = siteConfig.links.phone;

export default function TermsPage() {
  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        <PageBand tone="mid" className="pt-16 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Legal
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#f7f3e8] sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#c5d2cb]">
              The rules and expectations for using Kanam Academy.
            </p>
            <p className="mt-3 text-sm text-[#a8b8b0]">Effective date: {EFFECTIVE_DATE}</p>
          </div>
        </PageBand>

        <PageBand tone="light">
          <article className="mx-auto max-w-3xl space-y-10 rounded-2xl border border-[rgb(var(--accent-rgb)/0.2)] bg-white/70 p-6 shadow-sm sm:p-10">
            <p className="text-sm leading-relaxed text-zinc-700 sm:text-[0.95rem] sm:leading-7">
              These Terms of Service (“<strong>Terms</strong>”) are a binding agreement between you
              and Kanam Academy (“<strong>Kanam</strong>,” “<strong>we</strong>,” “
              <strong>us</strong>,” or “<strong>our</strong>”) governing access to and use of our
              websites (including kanamacademy.com and learn.kanamacademy.com), learning platform,
              live instruction, tutoring, and related products and services (collectively, the “
              <strong>Services</strong>”).
            </p>
            <p className="text-sm leading-relaxed text-zinc-700 sm:text-[0.95rem] sm:leading-7">
              By accessing or using the Services, creating an account, clicking to accept, or
              purchasing access, you agree to these Terms and our{" "}
              <Link
                className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              . If you do not agree, do not use the Services.
            </p>

            <LegalSection id="eligibility" title="1. Eligibility and accounts">
              <p>
                You must be able to form a binding contract under applicable law to accept these
                Terms for yourself. The Services are intended for learners approximately in grades
                6–12 and for parents/guardians, educators, and organizational partners who support
                them.
              </p>
              <p>
                If you are under 18, you may use the Services only with the consent and supervision
                of a parent or legal guardian who agrees to these Terms on your behalf. If you are
                under 13 in the United States, a parent/guardian (or an authorized school, where
                permitted) must provide consent as described in our Privacy Policy before an account
                is created for you.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of account credentials and
                for activity under your account. Notify us promptly of any unauthorized use.
              </p>
            </LegalSection>

            <LegalSection id="roles" title="2. Parents, schools, and partners">
              <p>
                If you create or manage accounts for a child or learner, you represent that you are
                the parent/guardian or otherwise authorized to do so, and that information you
                provide is accurate.
              </p>
              <p>
                If you use the Services on behalf of a school, district, after-school program, Scout
                troop, or other organization, you represent that you have authority to bind that
                organization to these Terms (or to a separate written agreement with Kanam, which
                controls if it conflicts with these Terms for that engagement). Organizational
                customers are responsible for obtaining any consents required for their learners and
                for lawful use of the Services in their programs.
              </p>
            </LegalSection>

            <LegalSection id="services" title="3. The Services">
              <p>
                Kanam provides educational content and tools related to technology and life skills
                (including coding, AI literacy, data, cybersecurity, financial literacy, and digital
                literacy), which may include self-paced lessons, assessments, progress tracking,
                live online or in-person instruction, and tutoring. Features may change as we
                improve the platform.
              </p>
              <p>
                <strong>No academic credit guarantee.</strong> Unless expressly agreed in writing
                with a school partner, Kanam does not award school credit, diplomas, or official
                certifications, and does not guarantee admission outcomes, grades, employment, or
                specific skill mastery timelines.
              </p>
              <p>
                <strong>Demo access.</strong> Guided demos may be offered without an account. Demo
                features may be limited and are provided as-is.
              </p>
            </LegalSection>

            <LegalSection id="purchases" title="4. Purchases, subscriptions, and refunds">
              <p>
                Paid plans, track purchases, tutoring sessions, and related offerings are described
                at the time of purchase. Prices may change; changes will not affect purchases already
                completed except as required by law or stated at checkout.
              </p>
              <p>
                Payments are processed by third-party payment processors (such as Stripe). You
                authorize us and our processors to charge the payment method you provide for amounts
                due, including applicable taxes.
              </p>
              <p>
                Unless a specific offer states otherwise, purchases are generally non-refundable
                once access has been provided, except where required by law or where we cancel a
                live session without a reasonable makeup option. Live tutoring and cohort sessions
                may have scheduling and cancellation rules communicated at booking. Contact{" "}
                <a
                  className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                for billing questions.
              </p>
            </LegalSection>

            <LegalSection id="conduct" title="5. Acceptable use">
              <p>You agree not to:</p>
              <LegalList
                items={[
                  "Use the Services for unlawful, harmful, harassing, or abusive purposes;",
                  "Share account access in a way that violates these Terms or a purchased plan;",
                  "Attempt to disrupt, reverse engineer, scrape, or gain unauthorized access to the Services or other users’ data;",
                  "Upload malware or interfere with platform security;",
                  "Submit content that infringes others’ rights or is inappropriate for a youth learning environment;",
                  "Misrepresent your identity, age, or affiliation; or",
                  "Use the Services to provide offensive cybersecurity instruction or to attack systems you are not authorized to test.",
                ]}
              />
              <p>
                We may suspend or terminate access for violations, suspected fraud, safety risks, or
                to protect the Services and users.
              </p>
            </LegalSection>

            <LegalSection id="ip" title="6. Intellectual property">
              <p>
                The Services—including curriculum, lesson text, graphics, software, branding, and
                logos—are owned by Kanam or its licensors and are protected by intellectual property
                laws. We grant you a limited, non-exclusive, non-transferable, revocable license to
                access and use the Services for personal, family, or authorized institutional
                educational use, subject to these Terms and your purchase entitlements.
              </p>
              <p>
                You may not copy, redistribute, publicly post, resell, or create derivative works
                from Kanam curriculum or platform materials except as expressly permitted in writing
                or as allowed by fair use / educational exceptions under applicable law.
              </p>
            </LegalSection>

            <LegalSection id="user-content" title="7. User content">
              <p>
                You may submit responses, projects, messages, or other content (“
                <strong>User Content</strong>”). You retain ownership of your User Content. You
                grant Kanam a worldwide, non-exclusive license to host, process, display, and use
                User Content solely to operate, secure, and improve the Services and to provide
                instruction and progress visibility to authorized adults/organizations.
              </p>
              <p>
                You represent that you have the rights needed to submit User Content and that it
                does not violate law or these Terms.
              </p>
            </LegalSection>

            <LegalSection id="live" title="8. Live instruction and scheduling">
              <p>
                Live sessions depend on instructor availability, connectivity, and mutual
                punctuality. We will make reasonable efforts to deliver scheduled sessions and to
                reschedule when an instructor cancels. Kanam is not responsible for missed sessions
                caused by your failure to attend, local device/network issues on your side, or force
                majeure events.
              </p>
            </LegalSection>

            <LegalSection id="third-parties" title="9. Third-party services">
              <p>
                The Services may integrate with or link to third-party tools (for example, payment
                processors or optional external resources). Third-party services are governed by
                their own terms and privacy policies. Kanam is not responsible for third-party
                services we do not control.
              </p>
            </LegalSection>

            <LegalSection id="disclaimers" title="10. Disclaimers">
              <p>
                THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT
                PERMITTED BY LAW, KANAM DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR
                STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
                UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
              <p>
                Some jurisdictions do not allow certain disclaimers; in those jurisdictions, the
                disclaimers apply to the fullest extent permitted.
              </p>
            </LegalSection>

            <LegalSection id="liability" title="11. Limitation of liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, KANAM AND ITS INSTRUCTORS, OFFICERS,
                EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA,
                GOODWILL, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATED TO THE SERVICES OR
                THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT
                OF OR RELATED TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE
                AMOUNTS YOU PAID TO KANAM FOR THE SERVICES IN THE TWELVE (12) MONTHS BEFORE THE
                CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US $100).
              </p>
              <p>
                These limitations are a fundamental part of the bargain between you and Kanam and
                apply regardless of the legal theory.
              </p>
            </LegalSection>

            <LegalSection id="indemnity" title="12. Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless Kanam and its instructors,
                officers, employees, and agents from and against claims, damages, losses,
                liabilities, and expenses (including reasonable attorneys’ fees) arising out of or
                related to your User Content, your misuse of the Services, or your violation of
                these Terms or applicable law, except to the extent caused by Kanam’s willful
                misconduct.
              </p>
            </LegalSection>

            <LegalSection id="termination" title="13. Suspension and termination">
              <p>
                You may stop using the Services at any time. We may suspend or terminate access
                immediately if you breach these Terms, if required by law, or if needed to protect
                users or the Services. Provisions that by their nature should survive (including
                intellectual property, disclaimers, limitations of liability, indemnity, and
                governing law) will survive termination.
              </p>
            </LegalSection>

            <LegalSection id="changes" title="14. Changes to the Services or Terms">
              <p>
                We may update the Services and these Terms from time to time. We will post updated
                Terms with a new effective date. Material changes may be communicated by email or
                notice in the Services. Continued use after the effective date constitutes
                acceptance, except where applicable law requires otherwise.
              </p>
            </LegalSection>

            <LegalSection id="law" title="15. Governing law and disputes">
              <p>
                These Terms are governed by the laws of the State of Georgia, USA, without regard to
                conflict-of-law rules. Except where prohibited by law (including consumer-protection
                rules that may apply to you), you agree that courts located in Georgia will have
                exclusive jurisdiction over disputes arising out of or relating to these Terms or
                the Services, and you consent to personal jurisdiction there.
              </p>
              <p>
                Nothing in these Terms limits rights you may have under mandatory consumer
                protection or privacy laws that cannot be waived by contract.
              </p>
            </LegalSection>

            <LegalSection id="misc" title="16. Miscellaneous">
              <LegalList
                items={[
                  "If any provision of these Terms is found unenforceable, the remaining provisions remain in effect.",
                  "Our failure to enforce a provision is not a waiver.",
                  "You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets.",
                  "These Terms, together with the Privacy Policy and any applicable order form or school/partner agreement, are the entire agreement between you and Kanam regarding the Services.",
                ]}
              />
            </LegalSection>

            <LegalSection id="contact" title="17. Contact">
              <p>Questions about these Terms:</p>
              <LegalList
                items={[
                  <>
                    Email:{" "}
                    <a
                      className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline"
                      href={`mailto:${CONTACT_EMAIL}`}
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </>,
                  <>Phone: {CONTACT_PHONE}</>,
                  <>
                    Contact form:{" "}
                    <Link
                      className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline"
                      href="/contact"
                    >
                      kanamacademy.com/contact
                    </Link>
                  </>,
                ]}
              />
            </LegalSection>
          </article>
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}
