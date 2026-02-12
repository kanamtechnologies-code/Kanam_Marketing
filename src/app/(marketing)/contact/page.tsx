import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Kanam Academy",
  description:
    "Book a call or send a message. For parents and educators interested in instructor-led Python + AI for kids.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--background)]">
      <Container>
        <div className="py-16">
          <Badge variant="brand">Contact</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            Book a call or send a message
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Tell us whether you’re a parent or educator, the learner age range, and what
            you’re hoping they’ll build. We’ll recommend the best starting track.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

