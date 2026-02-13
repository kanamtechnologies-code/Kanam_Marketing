"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HeaderBrand } from "@/components/site/HeaderBrand";
import { HeaderVideo } from "@/components/site/HeaderVideo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-7">
      {siteConfig.nav.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white md:px-0 md:py-0",
              isActive && "text-white"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b-2 border-[rgb(var(--accent-rgb)/0.98)] bg-gradient-to-r from-[rgb(var(--brand-2-rgb)/0.98)] via-[rgb(var(--brand-rgb)/0.92)] to-[rgb(var(--accent-rgb)/0.86)] shadow-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[rgb(var(--accent-rgb)/0.92)] via-[rgb(var(--brand-rgb)/0.92)] to-[rgb(var(--accent-rgb)/0.92)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <HeaderVideo
          className="h-full w-full object-cover opacity-[0.06] saturate-0"
          src="/video/8733062-uhd_3840_2160_30fps.mp4"
          playbackRate={0.35}
        />
      </div>
      <div className="relative mx-auto w-full px-4 py-3 md:px-10">
        <div className="flex items-center justify-between gap-6">
          <HeaderBrand />

          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              variant="secondary"
              className="rounded-full border border-[rgb(var(--accent-rgb)/0.98)] bg-white/95 px-3 py-1.5 text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)] shadow-md hover:bg-white"
            >
              <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
                Try our interactive demo
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 shadow-sm hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--brand-2-rgb)/0.85)]"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5 text-white" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Kanam Academy</SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-4">
                  <NavLinks />
                  <div className="h-px bg-zinc-200" />
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={siteConfig.links.app} target="_blank" rel="noopener noreferrer">
                      Try our interactive demo
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

