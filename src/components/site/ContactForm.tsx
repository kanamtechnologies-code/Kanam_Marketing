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

type Role = "parent" | "educator" | "other";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("parent");
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
              await new Promise((r) => setTimeout(r, 450));
              toast.success("Message sent", {
                description:
                  "Thanks—this form is currently a UI demo. We’ll wire delivery next.",
              });
              setName("");
              setEmail("");
              setRole("parent");
              setMessage("");
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
            <Label htmlFor="role">Role</Label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className={cn(
                "flex h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              )}
            >
              <option value="parent">Parent</option>
              <option value="educator">Educator / Program</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us the learner’s age, experience level, and what you want to build."
              required
            />
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

