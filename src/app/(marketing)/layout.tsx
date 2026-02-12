import type { ReactNode } from "react";

import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[rgb(var(--brand-2-rgb)/0.32)] via-[rgb(var(--brand-rgb)/0.12)] to-[var(--background)]"
      />
      <SiteNavbar />
      <main className="flex-1 pt-8 md:pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

