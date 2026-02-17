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
  SheetTrigger,
} from "@/components/ui/sheet";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:items-center lg:justify-center lg:gap-7">
      {siteConfig.nav.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "relative rounded-lg px-3 py-2 text-base font-semibold tracking-[0.01em] text-white/90 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.55)] after:absolute after:bottom-0 after:left-1/2 after:h-[2.5px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-white/90 after:transition-all after:duration-200 hover:after:w-[72%] lg:px-0 lg:py-0 lg:after:-bottom-1",
              isActive &&
                "bg-white/15 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.65)] after:w-[72%] after:bg-white lg:bg-transparent"
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
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <HeaderVideo
          className="h-full w-full object-cover opacity-[0.06] saturate-0"
          src="/video/8733062-uhd_3840_2160_30fps.mp4"
          playbackRate={0.35}
        />
      </div>
      <div className="relative mx-auto w-full px-4 py-3 max-[360px]:px-3 max-[360px]:py-2.5 sm:px-6 lg:px-10 2xl:max-w-[90rem]">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          <HeaderBrand />

          <nav className="hidden lg:block">
            <NavLinks />
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
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

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="inline-flex h-11 w-11 max-[360px]:h-10 max-[360px]:w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 shadow-sm hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--brand-2-rgb)/0.85)]"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5 text-white" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l-2 border-[rgb(var(--accent-rgb)/0.95)] bg-gradient-to-b from-[rgb(var(--brand-2-rgb)/0.98)] via-[rgb(var(--brand-rgb)/0.94)] to-[rgb(var(--accent-rgb)/0.9)] text-white [&_[aria-label='Close']]:border [&_[aria-label='Close']]:border-white/30 [&_[aria-label='Close']]:bg-white/10 [&_[aria-label='Close']]:hover:bg-white/20 [&_[aria-label='Close']_svg]:text-white"
              >
                <SheetHeader className="pr-12">
                  <div className="mx-auto w-fit">
                    <HeaderBrand />
                  </div>
                </SheetHeader>

                <div className="mt-6 flex flex-col items-center gap-4">
                  <NavLinks />
                  <div className="h-px w-full bg-white/30" />
                  <Button asChild variant="secondary" className="w-full max-w-xs">
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

