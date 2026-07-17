import type { Metadata } from "next";

import { FullBleed, PageBand } from "@/components/layout/PageBands";
import { SubpageShell } from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "Terms | Kanam Academy",
  description: "Terms of service placeholder for the marketing site.",
};

export default function TermsPage() {
  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        <PageBand tone="mid" className="pt-16 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Legal</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#f7f3e8] sm:text-5xl">Terms</h1>
            <p className="mt-5 text-lg leading-8 text-[#c5d2cb]">The expectations for using Kanam Academy.</p>
          </div>
        </PageBand>
        <PageBand tone="light">
          <article className="mx-auto max-w-3xl rounded-2xl border border-[rgb(var(--accent-rgb)/0.2)] bg-white/55 p-6 shadow-sm sm:p-10">
            <p className="text-base leading-relaxed text-[var(--muted)]">
              This page is a placeholder. Before launch, we’ll replace it with your final terms of service.
            </p>
            <div className="mt-8 space-y-6 text-sm leading-6 text-zinc-700">
                <section>
                  <h2 className="text-base font-bold text-zinc-950">Use of service</h2>
                  <p className="mt-2">
                    Users agree to use the site and services responsibly and not disrupt or
                    misuse the learning environment.
                  </p>
                </section>
                <section>
                  <h2 className="text-base font-bold text-zinc-950">Family/school-friendly</h2>
                  <p className="mt-2">
                    We expect respectful conduct and age-appropriate communication across
                    cohorts and community spaces.
                  </p>
                </section>
                <section>
                  <h2 className="text-base font-bold text-zinc-950">Updates</h2>
                  <p className="mt-2">
                    We may update these terms by posting a revised version on this page.
                  </p>
                </section>
            </div>
          </article>
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}

