import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy | Kanam Academy",
  description: "Privacy-first posture for families and schools.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">Legal</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            Privacy
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            This page is a placeholder. Before launch, we’ll replace it with your final
            privacy policy. The intent is simple: a privacy-first, family/school-friendly
            posture.
          </p>

          <Card className="mt-10">
            <CardContent className="pt-6">
              <div className="space-y-6 text-sm leading-6 text-zinc-700">
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
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

