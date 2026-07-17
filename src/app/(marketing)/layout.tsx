import type { ReactNode } from "react";

import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyCta } from "@/components/site/StickyCta";
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden bg-[#0e241c]">
      <SiteNavbar />
      <main className="flex-1">{children}</main>
      <StickyCta />
      <SiteFooter />
    </div>
  );
}

