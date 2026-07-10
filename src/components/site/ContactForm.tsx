"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Role = "family" | "teacher" | "school" | "partner" | "other";

const helpOptionsByRole: Record<Role, string[]> = {
  family: [
    "Try the product / guided demo",
    "Student account & progress",
    "Homeschool / enrichment",
    "Curriculum overview",
    "Other",
  ],
  teacher: [
    "Class codes & instructor tools",
    "Assigning lessons",
    "Classroom / after-school / weekend use",
    "Curriculum overview",
    "Other",
  ],
  school: [
    "Request a pilot",
    "Standards alignment & documentation",
    "Implementation / scheduling",
    "Site license / per-class / after-school / weekend",
    "Other",
  ],
  partner: [
    "Request a pilot",
    "After-school / weekend program",
    "Boy Scout or Girl Scout troop",
    "Partnerships & enrichment programs",
    "Standards alignment & documentation",
    "Other",
  ],
  other: ["General question", "Partnerships", "Curriculum", "Other"],
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("family");
  const [helpTopic, setHelpTopic] = useState(helpOptionsByRole.family[0]);
  const [learnerAge, setLearnerAge] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [goals, setGoals] = useState("");
  const [gradeBand, setGradeBand] = useState("");
  const [startWindow, setStartWindow] = useState("");
  const [learnerCount, setLearnerCount] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim()) return false;
    if (!message.trim()) return false;
    return true;
  }, [name, email, message]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-5"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!isValid || isSubmitting) return;
            setIsSubmitting(true);
            try {
              const payload = {
                name,
                email,
                role,
                helpTopic,
                learnerAge,
                experienceLevel,
                goals,
                gradeBand,
                startWindow,
                learnerCount,
                organization,
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
                description:
                  "Thanks! We received your message and sent a confirmation email.",
              });

              setName("");
              setEmail("");

              setRole("family");
              setHelpTopic(helpOptionsByRole.family[0]);
              setLearnerAge("");
              setExperienceLevel("");
              setGoals("");
              setGradeBand("");
              setStartWindow("");
              setLearnerCount("");
              setOrganization("");
              setMessage("");
            } catch (error) {
              toast.error("Message not sent", {
                description:
                  error instanceof Error
                    ? error.message
                    : "Please try again, or email us directly if this continues.",
              });
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
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
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="role">I&apos;m reaching out as</Label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => {
                const nextRole = e.target.value as Role;
                setRole(nextRole);
                setHelpTopic(helpOptionsByRole[nextRole][0]);
              }}
              className={cn(
                "flex min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              )}
            >
              <option value="family">Family / Homeschool</option>
              <option value="teacher">Teacher / Instructor</option>
              <option value="school">School / District</option>
              <option value="partner">Partner / after-school / Scout troop</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="help-topic">What can we help with?</Label>
            <select
              id="help-topic"
              name="helpTopic"
              value={helpTopic}
              onChange={(e) => setHelpTopic(e.target.value)}
              className={cn(
                "flex min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              )}
            >
              {helpOptionsByRole[role].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {role === "family" ? (
            <div className="grid gap-4 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4">
              <p className="text-sm font-semibold text-zinc-900">Details (optional)</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="learner-age">Learner age</Label>
                  <Input
                    id="learner-age"
                    name="learnerAge"
                    value={learnerAge}
                    onChange={(e) => setLearnerAge(e.target.value)}
                    placeholder="e.g. 14, or adult beginner"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="experience-level">Experience level</Label>
                  <select
                    id="experience-level"
                    name="experienceLevel"
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className={cn(
                      "flex min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                    )}
                  >
                    <option value="">Select one</option>
                    <option value="New to coding">New to coding</option>
                    <option value="Some experience">Some experience</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="goals">Goals</Label>
                <select
                  id="goals"
                  name="goals"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className={cn(
                    "flex min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  )}
                >
                  <option value="">Select one</option>
                  <option value="Build confidence">Build confidence</option>
                  <option value="Learn Python / AI / data basics">
                    Learn Python / AI / data basics
                  </option>
                  <option value="Structured enrichment">Structured enrichment</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>
            </div>
          ) : null}

          {role === "teacher" || role === "school" || role === "partner" ? (
            <div className="grid gap-4 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4">
              <p className="text-sm font-semibold text-zinc-900">Details (optional)</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="grade-band">Who you&apos;re supporting</Label>
                  <select
                    id="grade-band"
                    name="gradeBand"
                    value={gradeBand}
                    onChange={(e) => setGradeBand(e.target.value)}
                    className={cn(
                      "flex min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                    )}
                  >
                    <option value="">Select one</option>
                    <option value="Middle school">Middle school</option>
                    <option value="High school">High school</option>
                    <option value="Mixed teens">Mixed teens</option>
                    <option value="After-school / weekend program">
                      After-school / weekend program
                    </option>
                    <option value="Boy Scout or Girl Scout troop">
                      Boy Scout or Girl Scout troop
                    </option>
                    <option value="Adult / open enrollment">Adult / open enrollment</option>
                    <option value="Mixed / Other">Mixed / Other</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="start-window">Preferred start window</Label>
                  <select
                    id="start-window"
                    name="startWindow"
                    value={startWindow}
                    onChange={(e) => setStartWindow(e.target.value)}
                    className={cn(
                      "flex min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                    )}
                  >
                    <option value="">Select one</option>
                    <option value="Next 30 days">Next 30 days</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="Next semester">Next semester</option>
                    <option value="Summer">Summer</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="learner-count">Estimated learner count</Label>
                  <select
                    id="learner-count"
                    name="learnerCount"
                    value={learnerCount}
                    onChange={(e) => setLearnerCount(e.target.value)}
                    className={cn(
                      "flex min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                    )}
                  >
                    <option value="">Select one</option>
                    <option value="10–20">10–20</option>
                    <option value="21–40">21–40</option>
                    <option value="41–75">41–75</option>
                    <option value="75+">75+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="organization">School / Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Optional"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                If you don’t know the details yet, select “Not sure yet”—we can help you
                plan.
              </p>
            </div>
          ) : null}

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us your role, who you’re supporting, timeline, and what you’re hoping to run."
              required
            />
            {role === "family" ? (
              <p className="text-xs text-muted-foreground">
                Optional: include learner age or experience level and what they’re excited
                to learn.
              </p>
            ) : null}
            {role === "teacher" || role === "school" || role === "partner" ? (
              <p className="text-xs text-muted-foreground">
                Include who you’re supporting and preferred start window when you can.
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-zinc-600">
              Or email us:{" "}
              <a className="font-semibold text-zinc-950" href={`mailto:${siteConfig.links.email}`}>
                {siteConfig.links.email}
              </a>
            </div>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

