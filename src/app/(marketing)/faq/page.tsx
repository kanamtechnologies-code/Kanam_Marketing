import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ | Kanam Academy",
  description:
    "Frequently asked questions about age range, beginner-friendliness, Zoom format, safety, time commitment, device requirements, and educator adoption.",
};

const faqs = [
  {
    q: "What age range is this for?",
    a: "Kanam is designed for ages 11–14. If a learner is slightly younger/older, we can recommend whether the cohort pace is a fit based on experience and confidence.",
  },
  {
    q: "Is it beginner-friendly?",
    a: "Yes. We start from fundamentals and teach at a calm pace. Students don’t need prior coding experience to succeed.",
  },
  {
    q: "How do live Zoom classes work?",
    a: "Students attend live Zoom instruction with an instructor, then complete guided practice and projects with clear steps. Questions are encouraged—getting stuck is normal.",
  },
  {
    q: "Is this self-paced or cohort-based?",
    a: "Cohort-based. Cohorts provide structure, consistency, and a shared pace—while practice time is flexible during the week.",
  },
  {
    q: "How much time per week should we plan for?",
    a: "Most families plan for the live session plus additional practice time to complete weekly milestones. We can recommend a routine that fits your schedule.",
  },
  {
    q: "What device is required?",
    a: "A laptop or desktop is recommended for the best coding experience. We’ll share setup steps before the cohort starts.",
  },
  {
    q: "Do students need to install anything?",
    a: "We keep setup simple. If an install is needed, we provide a step-by-step guide and support so families and schools can get ready confidently.",
  },
  {
    q: "How do you keep it safe for kids?",
    a: "We use clear community expectations, a code of conduct, and privacy-first rules (including no personal data sharing). We encourage students to involve trusted adults when unsure.",
  },
  {
    q: "How do you teach AI responsibly?",
    a: "We start with understandable, rules-based logic and focus on good judgment. When AI tools are introduced, we emphasize safe prompts and explaining work in the student’s own words.",
  },
  {
    q: "What will students build?",
    a: "Students build mini games, quiz apps, creative coding projects, and a final showcase project—plus practice presenting what they built.",
  },
  {
    q: "What if my child gets stuck?",
    a: "Help is expected. Instructors support students through questions during live sessions and through help requests during practice so progress doesn’t stall.",
  },
  {
    q: "Can schools or after-school programs adopt Kanam?",
    a: "Yes. We support cohort-based implementation for schools and programs, with clear objectives and progress visibility for stakeholders.",
  },
  {
    q: "Do parents need to be present during Zoom?",
    a: "Parents do not typically need to sit in, but we recommend being nearby for setup and to support a focused learning environment.",
  },
  {
    q: "How do I get started?",
    a: "Explore the curriculum, then book a quick call so we can recommend the best starting track and cohort options.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">FAQ</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            Answers for parents and educators
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            If you don’t see your question here, send us a message and we’ll reply with a
            clear recommendation.
          </p>

          <Card className="mt-10">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible>
                {faqs.map((item, idx) => (
                  <AccordionItem key={item.q} value={`faq-${idx}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/contact">Book a Call</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/curriculum">Explore the Curriculum</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

