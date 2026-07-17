"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Role = "family" | "teacher" | "school" | "partner" | "other";

type ContactFormProps = {
  defaultRole?: Role;
  defaultHelpTopic?: string;
  title?: string;
  submitLabel?: string;
  className?: string;
};

const helpOptionsByRole: Record<Role, string[]> = {
  family: [
    "A live tutoring trial",
    "Family subscription & learning tracks",
    "Homeschool or enrichment support",
    "Student accounts & progress",
    "Something else",
  ],
  teacher: [
    "Classroom or enrichment use",
    "Class codes & program tools",
    "Standards alignment packet",
    "Something else",
  ],
  school: [
    "Live instruction for our school",
    "CSTA standards & curriculum documentation",
    "Scheduling & implementation",
    "Pricing & licensing",
    "Something else",
  ],
  partner: [
    "An after-school or weekend program",
    "A Scout troop or youth group",
    "A partnership or enrichment program",
    "Pricing & scheduling",
    "Something else",
  ],
  other: [
    "A general question",
    "A partnership opportunity",
    "Curriculum & learning paths",
    "Something else",
  ],
};

const selectClassName = cn(
  "flex min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
);

export function ContactForm({
  defaultRole = "family",
  defaultHelpTopic,
  title = "Request information",
  submitLabel = "Send message",
  className,
}: ContactFormProps = {}) {
  const initialHelp =
    defaultHelpTopic && helpOptionsByRole[defaultRole].includes(defaultHelpTopic)
      ? defaultHelpTopic
      : helpOptionsByRole[defaultRole][0];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactPreference, setContactPreference] = useState<"email" | "call">("email");
  const [callWindow, setCallWindow] = useState<"morning" | "afternoon">("morning");
  const [role, setRole] = useState<Role>(defaultRole);
  const [helpTopic, setHelpTopic] = useState(initialHelp);
  const [organization, setOrganization] = useState("");
  const [startWindow, setStartWindow] = useState("");
  const [message, setMessage] = useState("");

  const prefersCall = contactPreference === "call";

  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim()) return false;
    if (!message.trim()) return false;
    if (prefersCall && !phone.trim()) return false;
    return true;
  }, [name, email, message, phone, prefersCall]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.35rem] border border-zinc-900/10 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]",
        className
      )}
    >
      <div className="border-b border-zinc-900/8 bg-gradient-to-br from-[rgb(var(--brand-2-rgb)/0.1)] via-white to-[rgb(var(--accent-rgb)/0.12)] px-5 py-5 sm:px-6">
        <h2 className="font-display text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
          {title}
        </h2>
        <p className="mt-1.5 text-sm text-zinc-600">
          Share a little context — we’ll reply within 1 business day.
        </p>
      </div>

      <form
        className="grid gap-5 p-5 sm:p-6"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!isValid || isSubmitting) return;
          setIsSubmitting(true);
          try {
            const payload = {
              name,
              email,
              phone,
              contactPreference,
              callWindow: prefersCall ? callWindow : "",
              role,
              helpTopic,
              organization,
              startWindow,
              message,
            };
            const response = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (!response.ok) {
              const body = (await response.json().catch(() => null)) as
                | { error?: string }
                | null;
              throw new Error(body?.error ?? "Something went wrong while sending your message.");
            }

            toast.success("Message sent", {
              description: prefersCall
                ? "Thanks! We’ll call you within 1 business day."
                : "Thanks! We’ll follow up by email within 1 business day.",
            });

            setName("");
            setEmail("");
            setPhone("");
            setContactPreference("email");
            setCallWindow("morning");
            setRole(defaultRole);
            setHelpTopic(initialHelp);
            setOrganization("");
            setStartWindow("");
            setMessage("");
          } catch (error) {
            toast.error("Message not sent", {
              description:
                error instanceof Error
                  ? error.message
                  : `Please try again, or email ${siteConfig.links.email} directly.`,
            });
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.org"
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="phone">{prefersCall ? "Phone number" : "Phone"}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={
                prefersCall
                  ? "Required for a call back"
                  : "Optional — if you’d like a call back"
              }
              required={prefersCall}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-preference">Preferred follow-up</Label>
            <select
              id="contact-preference"
              name="contactPreference"
              value={contactPreference}
              onChange={(e) =>
                setContactPreference(e.target.value as "email" | "call")
              }
              className={selectClassName}
            >
              <option value="email">Email</option>
              <option value="call">Phone call</option>
            </select>
          </div>
        </div>

        {prefersCall ? (
          <div className="grid gap-2 sm:max-w-[calc(50%-0.625rem)]">
            <Label htmlFor="call-window">Best time to call</Label>
            <select
              id="call-window"
              name="callWindow"
              value={callWindow}
              onChange={(e) =>
                setCallWindow(e.target.value as "morning" | "afternoon")
              }
              className={selectClassName}
            >
              <option value="morning">Mornings</option>
              <option value="afternoon">Afternoons</option>
            </select>
          </div>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="role">I am reaching out as</Label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => {
                const nextRole = e.target.value as Role;
                setRole(nextRole);
                setHelpTopic(helpOptionsByRole[nextRole][0]);
              }}
              className={selectClassName}
            >
              <option value="family">A parent or guardian</option>
              <option value="teacher">A teacher or instructor</option>
              <option value="school">A school or district leader</option>
              <option value="partner">A program or Scout leader</option>
              <option value="other">Someone else</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="help-topic">I am interested in</Label>
            <select
              id="help-topic"
              name="helpTopic"
              value={helpTopic}
              onChange={(e) => setHelpTopic(e.target.value)}
              className={selectClassName}
            >
              {helpOptionsByRole[role].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              name="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="School, program, or troop (optional)"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="start-window">Preferred start</Label>
            <select
              id="start-window"
              name="startWindow"
              value={startWindow}
              onChange={(e) => setStartWindow(e.target.value)}
              className={selectClassName}
            >
              <option value="">No preference yet</option>
              <option value="Next 30 days">Within the next 30 days</option>
              <option value="1–3 months">In 1–3 months</option>
              <option value="Next semester">Next semester</option>
              <option value="Summer">This summer</option>
              <option value="Not sure yet">Still exploring</option>
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">A few details</Label>
          <Textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share a little about your learners, goals, and timeline — we’ll take it from there."
            required
            className="min-h-[8rem]"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-900/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-zinc-500">
            We only use your info to respond to this request.
          </p>
          <Button type="submit" disabled={!isValid || isSubmitting} className="sm:min-w-[10rem]">
            {isSubmitting ? "Sending…" : submitLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}
