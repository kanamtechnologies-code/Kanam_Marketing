export const siteConfig = {
  name: "Kanam Academy",
  description:
    "Live, instructor-led Python + AI for kids—hands-on lessons, real projects, and progress you can track.",
  links: {
    app:
      process.env.NEXT_PUBLIC_APP_URL ??
      "https://kanam-academy-2026-v1-ewp3-f9w7ckn3b.vercel.app/welcome",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@kanamacademy.com",
    bookCall: process.env.NEXT_PUBLIC_BOOK_CALL_URL ?? "/contact",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/parents", label: "Parents" },
    { href: "/educators", label: "Educators" },
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

