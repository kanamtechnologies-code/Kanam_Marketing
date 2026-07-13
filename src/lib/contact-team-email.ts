const BRAND = {
  green: "#18a16d",
  teal: "#247864",
  gold: "#d8c07a",
  paper: "#f7f6f2",
  ink: "#14201c",
  muted: "#5b6b64",
  white: "#ffffff",
} as const;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string, emphasize = false): string {
  if (!value) return "";
  return `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(20,32,28,0.08);font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:${BRAND.muted};width:36%;vertical-align:top;">
                    ${escapeHtml(label)}
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(20,32,28,0.08);font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.45;color:${BRAND.ink};font-weight:${emphasize ? "700" : "500"};vertical-align:top;">
                    ${value}
                  </td>
                </tr>`;
}

export type ContactTeamEmailParams = {
  name: string;
  email: string;
  phone: string;
  roleLabel: string;
  helpTopic: string;
  organization: string;
  startWindow: string;
  contactPreference: "email" | "call";
  callWindowLabel: string;
  learnerAge: string;
  experienceLevel: string;
  goals: string;
  gradeBand: string;
  learnerCount: string;
  message: string;
};

export function buildContactTeamEmail({
  name,
  email,
  phone,
  roleLabel,
  helpTopic,
  organization,
  startWindow,
  contactPreference,
  callWindowLabel,
  learnerAge,
  experienceLevel,
  goals,
  gradeBand,
  learnerCount,
  message,
}: ContactTeamEmailParams): { subject: string; text: string; html: string } {
  const prefersCall = contactPreference === "call";
  const followUpLabel = prefersCall ? "Phone call" : "Email";
  const topic = helpTopic || "General question";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

  const actionTitle = prefersCall ? "Action: call them back" : "Action: reply by email";
  const actionDetail = prefersCall
    ? callWindowLabel
      ? `Preferred window: ${callWindowLabel}`
      : "No time window selected"
    : "They asked to hear from you by email";

  const subject = prefersCall
    ? `Call request: ${name}${callWindowLabel ? ` · ${callWindowLabel}` : ""}`
    : `New contact: ${name} · ${topic}`;

  const textLines = [
    "NEW CONTACT REQUEST",
    "====================",
    "",
    actionTitle.toUpperCase(),
    actionDetail,
    "",
    "CONTACT",
    "-------",
    `Name:  ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "(not provided)"}`,
    "",
    "PREFERENCES",
    "-----------",
    `Follow-up: ${followUpLabel}`,
    `Call window: ${callWindowLabel || "(n/a)"}`,
    `Role: ${roleLabel}`,
    `Topic: ${topic}`,
    `Organization: ${organization || "(not provided)"}`,
    `Preferred start: ${startWindow || "(not provided)"}`,
  ];

  if (learnerAge) textLines.push(`Learner age: ${learnerAge}`);
  if (experienceLevel) textLines.push(`Experience: ${experienceLevel}`);
  if (goals) textLines.push(`Goals: ${goals}`);
  if (gradeBand) textLines.push(`Supporting: ${gradeBand}`);
  if (learnerCount) textLines.push(`Learner count: ${learnerCount}`);

  textLines.push(
    "",
    "MESSAGE",
    "-------",
    message,
    "",
    "—",
    "Reply to this email to respond directly to the sender."
  );

  const emailCell = `<a href="mailto:${safeEmail}" style="color:${BRAND.teal};font-weight:700;text-decoration:none;">${safeEmail}</a>`;
  const phoneCell = phone
    ? `<a href="tel:${escapeHtml(phone.replace(/[^\d+]/g, ""))}" style="color:${BRAND.teal};font-weight:700;text-decoration:none;">${safePhone}</a>`
    : `<span style="color:${BRAND.muted};">(not provided)</span>`;

  const detailRows = [
    row("Follow-up", escapeHtml(followUpLabel), true),
    prefersCall ? row("Call window", escapeHtml(callWindowLabel || "Not specified"), true) : "",
    row("Role", escapeHtml(roleLabel)),
    row("Topic", escapeHtml(topic)),
    row("Organization", organization ? escapeHtml(organization) : ""),
    row("Preferred start", startWindow ? escapeHtml(startWindow) : ""),
    row("Learner age", learnerAge ? escapeHtml(learnerAge) : ""),
    row("Experience", experienceLevel ? escapeHtml(experienceLevel) : ""),
    row("Goals", goals ? escapeHtml(goals) : ""),
    row("Supporting", gradeBand ? escapeHtml(gradeBand) : ""),
    row("Learner count", learnerCount ? escapeHtml(learnerCount) : ""),
  ].join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.paper};-webkit-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.paper};">
    <tr>
      <td align="center" style="padding:28px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:${BRAND.white};border-radius:16px;overflow:hidden;border:1px solid rgba(20,32,28,0.08);">

          <tr>
            <td style="background:linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.green} 80%);padding:22px 28px;">
              <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.75);">
                Kanam Academy · Contact form
              </p>
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:700;line-height:1.25;color:${BRAND.white};">
                New request from ${safeName}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:22px 28px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${prefersCall ? "rgba(216,192,122,0.22)" : "rgba(36,120,100,0.1)"};border-radius:12px;border:1px solid ${prefersCall ? "rgba(216,192,122,0.55)" : "rgba(36,120,100,0.22)"};">
                <tr>
                  <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">
                      ${escapeHtml(actionTitle)}
                    </p>
                    <p style="margin:0;font-size:15px;line-height:1.5;color:${BRAND.ink};font-weight:600;">
                      ${escapeHtml(actionDetail)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 28px 8px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">
                Contact
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${row("Name", safeName, true)}
                ${row("Email", emailCell)}
                ${row("Phone", phoneCell)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 28px 8px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">
                Details
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${detailRows}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 28px 24px;">
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">
                Their message
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.paper};border-radius:12px;border-left:4px solid ${BRAND.gold};">
                <tr>
                  <td style="padding:18px 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:${BRAND.ink};">
                    ${safeMessage}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 28px 28px;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius:10px;background-color:${BRAND.teal};">
                    <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: Your Kanam Academy request`)}" style="display:inline-block;padding:12px 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:${BRAND.white};text-decoration:none;">
                      Reply to ${safeName}
                    </a>
                  </td>
                  ${
                    phone
                      ? `<td width="10"></td>
                  <td style="border-radius:10px;border:1.5px solid ${BRAND.teal};">
                    <a href="tel:${escapeHtml(phone.replace(/[^\d+]/g, ""))}" style="display:inline-block;padding:11px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:${BRAND.teal};text-decoration:none;">
                      Call ${safePhone}
                    </a>
                  </td>`
                      : ""
                  }
                </tr>
              </table>
              <p style="margin:14px 0 0;font-size:12px;line-height:1.5;color:${BRAND.muted};">
                Tip: you can also hit Reply in your inbox — reply-to is set to their email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text: textLines.join("\n"), html };
}
