const appBase =
  process.env.NEXT_PUBLIC_APP_URL ??
  "https://kanam-academy-2026-v1.vercel.app";

const normalizedBase = appBase.replace(/\/$/, "");

export const siteConfig = {
  name: "Kanam Academy",
  tagline: "Move forward.",
  description:
    "Coding, AI, data, cybersecurity, and digital literacy for teens and anyone learning tech — live instruction or structured async classes. Five learning paths. Flexible schedule. Chromebook and mobile ready. Progress you can see.",
  links: {
    app: `${normalizedBase}/welcome`,
    demo:
      process.env.NEXT_PUBLIC_DEMO_URL ?? `${normalizedBase}/demo`,
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@kanamacademy.com",
    bookCall: process.env.NEXT_PUBLIC_BOOK_CALL_URL ?? "/contact",
    standardsPdf:
      "/images/docs/Kanam%20Academy%20Foundations%20Standards%20Alignment.pdf",
    /** Printable HTML one-pagers (Save as PDF / Print). */
    onePager: "/one-pager",
    pricingPdf: "/one-pager/pricing",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/learning-paths", label: "Learning paths" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/educators", label: "For schools & leaders" },
    { href: "/parents", label: "For families & learners" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  socials: [
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/",
    },
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com/",
    },
    {
      label: "YouTube",
      href: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://youtube.com/",
    },
  ],
} as const;
