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
  title: "Kanam Academy",
  description:
    "Coding, AI, data, and digital literacy in the browser — for teens and anyone learning tech. Live instruction or structured async classes.",
  icons: {
    icon: "/images/Logo.png",
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
