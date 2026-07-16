import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Sonner } from "@/components/ui/sonner";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kanam Academy",
    template: "%s | Kanam Academy",
  },
  description:
    "Coding, AI, data, cybersecurity, financial literacy, and digital skills for grades 6–12. Chromebook and mobile ready. Flexible schedule. Live instruction or structured async classes.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh bg-[var(--background)] font-sans text-zinc-950 antialiased">
        {children}
        <Sonner />
      </body>
    </html>
  );
}
