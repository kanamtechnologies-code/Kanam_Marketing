import type { Metadata } from "next";

import { SubpageShell } from "@/components/layout/SubpageShell";
import { FullBleed, PageBand } from "@/components/layout/PageBands";

export const metadata: Metadata = {
  title: "Privacy | Kanam Academy",
  description: "Privacy-first posture for families and schools.",
};

export default function PrivacyPage() {
  return (
    <SubpageShell overlapNav={false}>
      <FullBleed>
        <PageBand tone="mid" className="pt-16 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Legal</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#f7f3e8] sm:text-5xl">Privacy</h1>
            <p className="mt-5 text-lg leading-8 text-[#c5d2cb]">
              Our privacy-first, family- and school-friendly posture.
            </p>
          </div>
        </PageBand>
        <PageBand tone="light">
          <article className="mx-auto max-w-3xl rounded-2xl border border-[rgb(var(--accent-rgb)/0.2)] bg-white/55 p-6 shadow-sm sm:p-10">
            <p className="text-base leading-relaxed text-[var(--muted)]">
              This page is a placeholder. Before launch, we’ll replace it with your final privacy policy.
            </p>
            <div className="mt-8 space-y-6 text-sm leading-6 text-zinc-700">
                <section>
                  <h2 className="text-base font-bold text-zinc-950">Privacy-first posture</h2>
                  <p className="mt-2">
                    We encourage learners to avoid sharing personal information and keep the
                    learning environment safe and age-appropriate.
                  </p>
                </section>
                <section>
                  <h2 className="text-base font-bold text-zinc-950">Progress visibility</h2>
                  <p className="mt-2">
                    Families and educators should be able to understand progress without
                    exposing unnecessary personal details.
                  </p>
                </section>
                <section>
                  <h2 className="text-base font-bold text-zinc-950">Questions</h2>
                  <p className="mt-2">Contact us through the Contact page.</p>
                </section>
            </div>
          </article>
        </PageBand>
      </FullBleed>
    </SubpageShell>
  );
}

