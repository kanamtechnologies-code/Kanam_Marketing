import { siteConfig } from "@/lib/site";

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

function siteBaseUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_APP_URL?.trim() ||
    "https://learn.kanamacademy.com";
  return raw.replace(/\/$/, "");
}

export type ContactReceiptParams = {
  name: string;
  roleLabel: string;
  helpTopic: string;
  organization: string;
  startWindow: string;
  phone: string;
  contactPreference: "email" | "call";
  callWindow: "" | "morning" | "afternoon";
  message: string;
  contactEmail: string;
};

export function buildContactReceiptEmail({
  name,
  roleLabel,
  helpTopic,
  organization,
  startWindow,
  phone,
  contactPreference,
  callWindow,
  message,
  contactEmail,
}: ContactReceiptParams): { subject: string; text: string; html: string } {
  const firstName = name.trim().split(/\s+/)[0] || name;
  const safeName = escapeHtml(firstName);
  const topic = helpTopic || "General question";
  const safeTopic = escapeHtml(topic);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");
  const safeEmail = escapeHtml(contactEmail);
  const phoneDisplay = siteConfig.links.phone;
  const phoneHref = siteConfig.links.phoneHref;
  const safePhone = escapeHtml(phoneDisplay);
  const prefersCall = contactPreference === "call";
  const callWindowLabel =
    callWindow === "morning"
      ? "Mornings"
      : callWindow === "afternoon"
        ? "Afternoons"
        : "";
  const base = siteBaseUrl();
  const logoUrl = `${base}/images/Logo.png`;
  const homeUrl = base;
  const demoUrl = siteConfig.links.demo.startsWith("http")
    ? siteConfig.links.demo
    : `${base}${siteConfig.links.demo}`;

  const detailRows: { label: string; value: string }[] = [
    { label: "Topic", value: topic },
    { label: "You’re reaching out as", value: roleLabel },
    {
      label: "Preferred follow-up",
      value: prefersCall ? "Phone call" : "Email",
    },
  ];
  if (prefersCall && callWindowLabel) {
    detailRows.push({ label: "Best time to call", value: callWindowLabel });
  }
  if (organization) {
    detailRows.push({ label: "Organization", value: organization });
  }
  if (startWindow) {
    detailRows.push({ label: "Preferred start", value: startWindow });
  }
  if (phone) {
    detailRows.push({ label: "Phone you shared", value: phone });
  }

  const nextSteps = prefersCall
    ? [
        "We review your note and match you with the right person on our team.",
        callWindowLabel
          ? `We’ll call you within 1 business day, aiming for ${callWindowLabel.toLowerCase()}.`
          : "We’ll call you within 1 business day.",
        "We’ll walk through your goals together and leave you with a clear recommendation.",
      ]
    : [
        "We review your note and match you with the right person on our team.",
        "You’ll hear from us by email within 1 business day.",
        "We’ll answer your questions and outline a clear next step you can take.",
      ];

  const followUpConfirm = prefersCall
    ? callWindowLabel
      ? `a real person on our team will <strong style="color:${BRAND.ink};">call you within 1 business day</strong> (aiming for ${escapeHtml(callWindowLabel.toLowerCase())})`
      : `a real person on our team will <strong style="color:${BRAND.ink};">call you within 1 business day</strong>`
    : `a real person on our team will <strong style="color:${BRAND.ink};">follow up by email within 1 business day</strong>`;

  const followUpConfirmText = prefersCall
    ? callWindowLabel
      ? `A real person on our team will call you within 1 business day (aiming for ${callWindowLabel.toLowerCase()}).`
      : "A real person on our team will call you within 1 business day."
    : "A real person on our team will follow up by email within 1 business day.";

  const detailRowsHtml = detailRows
    .map(
      (row) => `
                    <tr>
                      <td style="padding:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${BRAND.muted};width:42%;vertical-align:top;">
                        ${escapeHtml(row.label)}
                      </td>
                      <td style="padding:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:${BRAND.ink};vertical-align:top;">
                        ${escapeHtml(row.value)}
                      </td>
                    </tr>`
    )
    .join("");

  const nextStepsHtml = nextSteps
    .map(
      (step, index) => `
                <tr>
                  <td style="padding:${index === nextSteps.length - 1 ? "0" : "0 0 10px"};font-size:15px;line-height:1.55;color:${BRAND.muted};">
                    <strong style="color:${BRAND.ink};">${index + 1}.</strong> ${escapeHtml(step)}
                  </td>
                </tr>`
    )
    .join("");

  const subject = "We got your message — thank you from Kanam Academy";

  const text = [
    `Hi ${firstName},`,
    "",
    "Thank you for reaching out to Kanam Academy — we’re glad you’re here.",
    "",
    `We’re glad you reached out about ${topic}. This note confirms we received your request. ${followUpConfirmText}`,
    "",
    "What we received:",
    ...detailRows.map((row) => `${row.label}: ${row.value}`),
    "",
    "Your message:",
    message,
    "",
    "What happens next:",
    ...nextSteps.map((step, index) => `${index + 1}. ${step}`),
    "",
    "Need us sooner?",
    `Call: ${phoneDisplay}`,
    `Email: ${contactEmail}`,
    "Or just reply to this message.",
    "",
    "We’re looking forward to helping you Move Forward.",
    "",
    "— The Kanam Academy team",
    siteConfig.name,
    phoneDisplay,
    contactEmail,
    base,
  ].join("\n");

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
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:${BRAND.white};border-radius:16px;overflow:hidden;border:1px solid rgba(20,32,28,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.green} 72%, ${BRAND.gold} 160%);padding:28px 32px 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;padding-right:14px;">
                    <img src="${logoUrl}" width="48" height="48" alt="Kanam Academy logo" style="display:block;border:0;border-radius:12px;background-color:${BRAND.white};padding:4px;box-sizing:border-box;" />
                  </td>
                  <td style="vertical-align:middle;">
                    <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:700;line-height:1.2;color:${BRAND.white};">
                      Kanam Academy
                    </div>
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.04em;color:${BRAND.gold};margin-top:4px;">
                      Move Forward.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 8px;font-family:Arial,Helvetica,sans-serif;color:${BRAND.ink};">
              <p style="margin:0 0 16px;font-size:22px;line-height:1.3;font-weight:700;font-family:Georgia,'Times New Roman',serif;color:${BRAND.ink};">
                Hi ${safeName}, thank you for writing.
              </p>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:${BRAND.muted};">
                We’re glad you reached out about <strong style="color:${BRAND.ink};">${safeTopic}</strong>.
                This email confirms that <strong style="color:${BRAND.ink};">we received your request</strong>
                and ${followUpConfirm}.
              </p>
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="padding:8px 32px 24px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">
                What happens next
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${nextStepsHtml}
              </table>
            </td>
          </tr>

          <!-- Request summary -->
          <tr>
            <td style="padding:0 32px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.paper};border-radius:12px;border-left:4px solid ${BRAND.gold};">
                <tr>
                  <td style="padding:18px 20px;font-family:Arial,Helvetica,sans-serif;">
                    <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">
                      Your request summary
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${detailRowsHtml}
                    </table>
                    <p style="margin:6px 0 6px;font-size:13px;font-weight:700;color:${BRAND.ink};">
                      Your note
                    </p>
                    <p style="margin:0;font-size:14px;line-height:1.6;color:${BRAND.muted};">
                      ${safeMessage}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reach us — phone prominent -->
          <tr>
            <td style="padding:0 32px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg, rgba(36,120,100,0.1) 0%, rgba(216,192,122,0.18) 100%);border-radius:12px;border:1px solid rgba(36,120,100,0.22);">
                <tr>
                  <td style="padding:20px 22px;font-family:Arial,Helvetica,sans-serif;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">
                      Need us sooner?
                    </p>
                    <p style="margin:0 0 14px;font-size:15px;line-height:1.55;color:${BRAND.muted};">
                      Call or email anytime — we’re happy to help.
                    </p>
                    <p style="margin:0 0 8px;font-size:20px;font-weight:700;line-height:1.3;font-family:Georgia,'Times New Roman',serif;">
                      <a href="${phoneHref}" style="color:${BRAND.teal};text-decoration:none;">${safePhone}</a>
                    </p>
                    <p style="margin:0;font-size:15px;line-height:1.5;">
                      <a href="mailto:${safeEmail}" style="color:${BRAND.teal};font-weight:600;text-decoration:none;">${safeEmail}</a>
                    </p>
                    <p style="margin:12px 0 0;font-size:13px;line-height:1.5;color:${BRAND.muted};">
                      Or simply reply to this email — it goes straight to our team.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 28px;font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius:10px;background-color:${BRAND.teal};">
                    <a href="${homeUrl}" style="display:inline-block;padding:12px 22px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:${BRAND.white};text-decoration:none;">
                      Visit Kanam Academy
                    </a>
                  </td>
                  <td width="12"></td>
                  <td style="border-radius:10px;border:1.5px solid ${BRAND.teal};">
                    <a href="${demoUrl}" style="display:inline-block;padding:11px 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:${BRAND.teal};text-decoration:none;">
                      Try a lesson
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid rgba(20,32,28,0.08);font-family:Arial,Helvetica,sans-serif;background-color:#fbfaf7;">
              <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:${BRAND.ink};">
                — The Kanam Academy team
              </p>
              <p style="margin:0;font-size:13px;line-height:1.5;color:${BRAND.muted};">
                Real skills for a digital world · <span style="color:${BRAND.gold};font-weight:700;">Move Forward.</span>
              </p>
              <p style="margin:10px 0 0;font-size:13px;line-height:1.5;color:${BRAND.muted};">
                <a href="${phoneHref}" style="color:${BRAND.teal};font-weight:600;text-decoration:none;">${safePhone}</a>
                ·
                <a href="mailto:${safeEmail}" style="color:${BRAND.teal};font-weight:600;text-decoration:none;">${safeEmail}</a>
              </p>
            </td>
          </tr>
        </table>

        <p style="margin:20px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.5;color:#8a9690;text-align:center;max-width:560px;">
          You received this because you submitted a request on the Kanam Academy website.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
