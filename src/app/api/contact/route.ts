import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { buildContactReceiptEmail } from "@/lib/contact-receipt-email";

type Role =
  | "family"
  | "teacher"
  | "school"
  | "partner"
  | "other"
  | "parent_guardian"
  | "educator_school"
  | "program_partner";

type ContactRequestBody = {
  name?: string;
  email?: string;
  role?: Role;
  helpTopic?: string;
  learnerAge?: string;
  experienceLevel?: string;
  goals?: string;
  gradeBand?: string;
  startWindow?: string;
  learnerCount?: string;
  organization?: string;
  message?: string;
};

const roleLabels: Record<Role, string> = {
  family: "Family / Homeschool",
  teacher: "Teacher / Instructor",
  school: "School / District",
  partner: "Partner / After-school / Scout troop",
  other: "Other",
  parent_guardian: "Parent/Guardian",
  educator_school: "Educator/School",
  program_partner: "Program Partner",
};

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function formatOptionalLine(label: string, value: string): string {
  return value ? `${label}: ${value}` : `${label}: (not provided)`;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactRequestBody | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const role = body.role && roleLabels[body.role] ? body.role : "other";
  const helpTopic = sanitize(body.helpTopic);
  const learnerAge = sanitize(body.learnerAge);
  const experienceLevel = sanitize(body.experienceLevel);
  const goals = sanitize(body.goals);
  const gradeBand = sanitize(body.gradeBand);
  const startWindow = sanitize(body.startWindow);
  const learnerCount = sanitize(body.learnerCount);
  const organization = sanitize(body.organization);
  const message = sanitize(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === "true";

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Contact form email is not configured yet. Please try again soon." },
      { status: 503 }
    );
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;
  // Always deliver contact form submissions to the Kanam info inbox.
  const contactInbox =
    process.env.CONTACT_INBOX_EMAIL?.trim() ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
    "info@kanamacademy.com";

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const roleLabel = roleLabels[role];
  const detailsLines = [
    formatOptionalLine("Help topic", helpTopic),
    formatOptionalLine("Learner age", learnerAge),
    formatOptionalLine("Experience level", experienceLevel),
    formatOptionalLine("Goals", goals),
    formatOptionalLine("Who you're supporting", gradeBand),
    formatOptionalLine("Preferred start window", startWindow),
    formatOptionalLine("Estimated learner count", learnerCount),
    formatOptionalLine("School / Organization", organization),
  ];

  const teamText = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Role: ${roleLabel}`,
    ...detailsLines,
    "",
    "Message:",
    message,
  ].join("\n");

  const receipt = buildContactReceiptEmail({
    name,
    helpTopic,
    message,
    contactEmail: contactInbox,
  });

  try {
    await Promise.all([
      transporter.sendMail({
        from: fromEmail,
        to: contactInbox,
        replyTo: email,
        subject: `New contact form: ${name}`,
        text: teamText,
      }),
      transporter.sendMail({
        from: `Kanam Academy <${fromEmail}>`,
        to: email,
        replyTo: contactInbox,
        subject: receipt.subject,
        text: receipt.text,
        html: receipt.html,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email delivery failed", error);
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
