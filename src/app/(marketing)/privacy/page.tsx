import type { Metadata } from "next";
import Link from "next/link";

import { FullBleed, PageBand } from "@/components/layout/PageBands";
import { SubpageShell } from "@/components/layout/SubpageShell";
import { LegalList, LegalSection } from "@/components/site/LegalDoc";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Kanam Academy",
  description:
    "How Kanam Academy collects, uses, and protects personal information for families, learners, and schools.",
};

const EFFECTIVE_DATE = "July 17, 2026";
const CONTACT_EMAIL = siteConfig.links.email;
const CONTACT_PHONE = siteConfig.links.phone;

export default function PrivacyPage() {
  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        <PageBand tone="mid" className="pt-16 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Legal
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#f7f3e8] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#c5d2cb]">
              How we collect, use, and protect information when you use Kanam Academy.
            </p>
            <p className="mt-3 text-sm text-[#a8b8b0]">Effective date: {EFFECTIVE_DATE}</p>
          </div>
        </PageBand>

        <PageBand tone="light">
          <article className="mx-auto max-w-3xl space-y-10 rounded-2xl border border-[rgb(var(--accent-rgb)/0.2)] bg-white/70 p-6 shadow-sm sm:p-10">
            <p className="text-sm leading-relaxed text-zinc-700 sm:text-[0.95rem] sm:leading-7">
              Kanam Academy (“<strong>Kanam</strong>,” “<strong>we</strong>,” “<strong>us</strong>,”
              or “<strong>our</strong>”) operates the websites at kanamacademy.com and related
              subdomains (including our learning platform at learn.kanamacademy.com), and related
              products and services (collectively, the “<strong>Services</strong>”). This Privacy
              Policy explains what information we collect, how we use it, and the choices available
              to you. By using the Services, you acknowledge this Policy. If you do not agree, please
              do not use the Services.
            </p>

            <LegalSection id="who" title="1. Who this Policy covers">
              <p>This Policy applies to:</p>
              <LegalList
                items={[
                  "Visitors to our marketing website;",
                  "Parents, guardians, and adult account holders;",
                  "Learners using Kanam (including teens and children, subject to parental/guardian consent where required);",
                  "Educators, schools, districts, after-school programs, Scout troops, and other organizational partners; and",
                  "Anyone who contacts us or purchases access to the Services.",
                ]}
              />
              <p>
                If a school or other organization provides learner accounts under a separate written
                agreement with Kanam, that organization may control certain student data as described
                in Section 7.
              </p>
            </LegalSection>

            <LegalSection id="collect" title="2. Information we collect">
              <p>
                <strong>Information you provide.</strong> We may collect information you submit,
                including:
              </p>
              <LegalList
                items={[
                  "Name, email address, phone number, and message content (for example, via our contact form);",
                  "Account credentials and profile details;",
                  "Parent/guardian information and learner profile information (such as display name, grade band, or progress preferences);",
                  "Organization name, role, and program details for school/partner inquiries;",
                  "Payment and billing details processed by our payment provider (we do not store full payment card numbers on our servers); and",
                  "Communications with our instructors or support team.",
                ]}
              />
              <p>
                <strong>Information generated through use.</strong> When you use the Services, we
                may collect learning and product activity data, such as lesson progress, completion
                status, practice responses, XP/badges, device/browser type, approximate location
                derived from IP address, timestamps, and diagnostic logs needed to operate and
                secure the Services.
              </p>
              <p>
                <strong>Information from third parties.</strong> We may receive information from
                payment processors, authentication providers, school or partner administrators who
                create or manage accounts, and analytics or hosting providers that help us run the
                Services.
              </p>
            </LegalSection>

            <LegalSection id="use" title="3. How we use information">
              <p>We use personal information to:</p>
              <LegalList
                items={[
                  "Provide, operate, maintain, and improve the Services;",
                  "Create and manage accounts, learner profiles, and progress records;",
                  "Deliver live instruction, tutoring, and educational content;",
                  "Process purchases, subscriptions, and invoices;",
                  "Respond to inquiries and provide customer support;",
                  "Communicate about accounts, lessons, scheduling, safety, and service updates;",
                  "Monitor for abuse, security incidents, and technical issues;",
                  "Comply with law and enforce our Terms of Service; and",
                  "With appropriate consent or as otherwise permitted, send product updates or marketing communications (you may opt out of marketing emails).",
                ]}
              />
              <p>
                We do <strong>not</strong> sell personal information. We do not use learner content
                or student education records for targeted advertising.
              </p>
            </LegalSection>

            <LegalSection id="children" title="4. Children’s privacy (including COPPA)">
              <p>
                Kanam is designed for learners in approximately grades 6–12 and may be used by
                children under 13 in the United States. We take children’s privacy seriously and
                design the Services with age-appropriate expectations.
              </p>
              <p>
                Where the Children’s Online Privacy Protection Act (“<strong>COPPA</strong>”)
                applies, we obtain verifiable parental/guardian consent before collecting personal
                information from a child under 13, except where an exception applies (for example,
                when a school authorizes educational use as described below). Parents/guardians may
                review, request correction or deletion of, or refuse further collection of their
                child’s personal information by contacting us at{" "}
                <a className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <p>
                We ask learners not to share unnecessary personal information in lesson responses or
                communications. Parents and schools should supervise account use as appropriate.
              </p>
            </LegalSection>

            <LegalSection id="schools" title="5. Schools, programs, and education records">
              <p>
                When a school, district, or similar educational institution (“<strong>School</strong>”)
                contracts with Kanam to provide the Services for instructional purposes, the School
                typically determines the purposes and means of processing student data for that
                program. In that context, Kanam acts as a service provider / school official for
                education records to the extent applicable under the Family Educational Rights and
                Privacy Act (“<strong>FERPA</strong>”) and similar state student-privacy laws.
              </p>
              <p>For School-directed programs, we:</p>
              <LegalList
                items={[
                  "Use student data only to provide and support the educational Services, and for related administrative, security, and legal compliance purposes;",
                  "Do not sell student data;",
                  "Do not use student data for targeted advertising; and",
                  "Return or delete student data upon the School’s written request at the end of the engagement, subject to legal retention requirements and backups that are securely deleted on a rolling cycle.",
                ]}
              />
              <p>
                Parents seeking access to education records held by a School should contact the
                School. Kanam will cooperate with Schools to support lawful access requests.
              </p>
            </LegalSection>

            <LegalSection id="sharing" title="6. How we share information">
              <p>We may share personal information with:</p>
              <LegalList
                items={[
                  <>
                    <strong>Service providers</strong> that help us host, operate, secure, analyze,
                    communicate, or process payments for the Services (for example, cloud hosting,
                    email delivery, and payment processing such as Stripe), under contractual
                    obligations to protect the information;
                  </>,
                  <>
                    <strong>Instructors and authorized staff</strong> who need access to deliver
                    lessons, tutoring, or support;
                  </>,
                  <>
                    <strong>Parents/guardians and authorized organizational admins</strong> so they
                    can view progress and manage accounts they control;
                  </>,
                  <>
                    <strong>Professional advisors</strong> (such as lawyers or accountants) under
                    confidentiality obligations; and
                  </>,
                  <>
                    <strong>Authorities or other parties</strong> when required by law, to protect
                    rights/safety, or in connection with a merger, acquisition, or asset sale
                    (subject to continued protection of personal information).
                  </>,
                ]}
              />
            </LegalSection>

            <LegalSection id="cookies" title="7. Cookies and similar technologies">
              <p>
                We and our providers may use cookies, local storage, and similar technologies to
                keep you signed in, remember preferences, measure performance, and secure the
                Services. You can control cookies through your browser settings; some features may
                not work if cookies are disabled.
              </p>
            </LegalSection>

            <LegalSection id="retention" title="8. Retention">
              <p>
                We retain personal information for as long as needed to provide the Services, comply
                with legal obligations, resolve disputes, and enforce agreements. Retention periods
                vary by data type and context (for example, billing records may be kept longer than
                transient logs). When information is no longer needed, we delete or de-identify it
                in accordance with our practices.
              </p>
            </LegalSection>

            <LegalSection id="security" title="9. Security">
              <p>
                We use administrative, technical, and organizational measures designed to protect
                personal information. No method of transmission or storage is completely secure. If
                you believe an account has been compromised, contact us immediately.
              </p>
            </LegalSection>

            <LegalSection id="rights" title="10. Your choices and rights">
              <p>Depending on your location and role, you may have rights to:</p>
              <LegalList
                items={[
                  "Access, correct, or update personal information;",
                  "Request deletion of personal information;",
                  "Object to or restrict certain processing;",
                  "Opt out of marketing communications; and",
                  "For parents/guardians of children under 13, exercise COPPA rights described above.",
                ]}
              />
              <p>
                To make a request, email{" "}
                <a className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                . We may need to verify your identity and authority (for example, that you are the
                parent/guardian or an authorized school contact). Some requests may be limited by
                law or by our need to keep records for security, billing, or education operations.
              </p>
            </LegalSection>

            <LegalSection id="transfers" title="11. International users">
              <p>
                The Services are operated from the United States. If you access the Services from
                outside the United States, you understand that information may be processed in the
                United States, where laws may differ from those in your country.
              </p>
            </LegalSection>

            <LegalSection id="links" title="12. Third-party links">
              <p>
                The Services may link to third-party sites or tools we do not control. Their privacy
                practices are governed by their own policies.
              </p>
            </LegalSection>

            <LegalSection id="changes" title="13. Changes to this Policy">
              <p>
                We may update this Privacy Policy from time to time. We will post the updated Policy
                with a revised effective date. If changes are material, we will provide additional
                notice as appropriate (for example, by email or an in-product notice). Continued use
                of the Services after the effective date means you accept the updated Policy.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="14. Contact us">
              <p>Questions about this Privacy Policy or our privacy practices:</p>
              <LegalList
                items={[
                  <>
                    Email:{" "}
                    <a className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                      {CONTACT_EMAIL}
                    </a>
                  </>,
                  <>Phone: {CONTACT_PHONE}</>,
                  <>
                    Contact form:{" "}
                    <Link className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline" href="/contact">
                      kanamacademy.com/contact
                    </Link>
                  </>,
                ]}
              />
              <p>
                See also our{" "}
                <Link className="font-semibold text-[var(--brand-2)] underline-offset-2 hover:underline" href="/terms">
                  Terms of Service
                </Link>
                .
              </p>
            </LegalSection>
          </article>
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}
