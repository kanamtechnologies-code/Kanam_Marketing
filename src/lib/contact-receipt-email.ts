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
    "https://kanam-academy-2026-v1.vercel.app";
  return raw.replace(/\/$/, "");
}

export type ContactReceiptParams = {
  name: string;
  helpTopic: string;
  message: string;
  contactEmail: string;
};

export function buildContactReceiptEmail({
  name,
  helpTopic,
  message,
  contactEmail,
}: ContactReceiptParams): { subject: string; text: string; html: string } {
  const firstName = name.trim().split(/\s+/)[0] || name;
  const safeName = escapeHtml(firstName);
  const safeTopic = escapeHtml(helpTopic || "General question");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");
  const safeEmail = escapeHtml(contactEmail);
  const base = siteBaseUrl();
  const logoUrl = `${base}/images/Logo.png`;
  const homeUrl = base;
  const demoUrl = siteConfig.links.demo.startsWith("http")
    ? siteConfig.links.demo
    : `${base}${siteConfig.links.demo}`;

  const subject = "We got your message — thank you from Kanam Academy";

  const text = [
    `Hi ${firstName},`,
    "",
    "Thank you for reaching out to Kanam Academy — we’re glad you’re here.",
    "",
    "This note confirms we received your message. A real person on our team will follow up within 1 business day.",
    "",
    `What you asked about: ${helpTopic || "General question"}`,
    "",
    "Your message:",
    message,
    "",
    "Need something sooner? Just reply to this email, or write us at " + contactEmail + ".",
    "",
    "We’re looking forward to helping you Move Forward.",
    "",
    "— The Kanam Academy team",
    siteConfig.name,
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
                We’re glad you reached out. This email confirms that <strong style="color:${BRAND.ink};">we received your message</strong> and a real person on our team will get back to you within <strong style="color:${BRAND.ink};">1 business day</strong>.
              </p>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:${BRAND.muted};">
                In the meantime, hang tight — we’re looking forward to helping you find the right next step for your learners.
              </p>
            </td>
          </tr>

          <!-- Confirmation card -->
          <tr>
            <td style="padding:0 32px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.paper};border-radius:12px;border-left:4px solid ${BRAND.gold};">
                <tr>
                  <td style="padding:18px 20px;font-family:Arial,Helvetica,sans-serif;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">
                      Message received
                    </p>
                    <p style="margin:0 0 14px;font-size:14px;line-height:1.5;color:${BRAND.ink};">
                      <strong>Topic:</strong> ${safeTopic}
                    </p>
                    <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:${BRAND.ink};">
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

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 28px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${BRAND.muted};">
                Need something sooner? Reply to this email anytime — it goes straight to our team at
                <a href="mailto:${safeEmail}" style="color:${BRAND.teal};font-weight:600;text-decoration:none;">${safeEmail}</a>.
              </p>
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
                Live tech instruction for teens and learners · Coding, AI, data, cybersecurity &amp; digital literacy
              </p>
              <p style="margin:12px 0 0;font-size:12px;color:${BRAND.gold};font-weight:700;letter-spacing:0.04em;">
                Move Forward.
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
