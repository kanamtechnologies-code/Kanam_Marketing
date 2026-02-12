import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms | Kanam Academy",
  description: "Terms of service placeholder for the marketing site.",
};

export default function TermsPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">Legal</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            Terms
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            This page is a placeholder. Before launch, we’ll replace it with your final
            terms of service.
          </p>

          <Card className="mt-10">
            <CardContent className="pt-6">
              <div className="space-y-6 text-sm leading-6 text-zinc-700">
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
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

