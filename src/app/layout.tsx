import type { Metadata } from "next";
import "./globals.css";
import { Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Kanam Academy",
  description:
    "Career-focused training with hands-on projects, mentorship, and job-ready skills.",
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
    <html lang="en">
      <body
        className="min-h-dvh bg-[var(--background)] text-zinc-950 antialiased"
      >
        {children}
        <Sonner />
      </body>
    </html>
  );
}
