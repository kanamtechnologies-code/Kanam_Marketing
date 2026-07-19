"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { X } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HeaderBrand } from "@/components/site/HeaderBrand";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavLinks({
  onNavigate,
  closeOnNavigate = false,
}: {
  onNavigate?: () => void;
  /** Wrap each link in SheetClose so the mobile drawer dismisses on tap. */
  closeOnNavigate?: boolean;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:items-center lg:justify-center lg:gap-6">
      {siteConfig.nav.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        const link = (
          <Link
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "relative rounded-lg px-3 py-2 text-sm font-semibold tracking-[0.01em] text-[#d7e0db] transition-colors duration-200 hover:text-[var(--accent)] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[var(--accent)] after:transition-all after:duration-200 hover:after:w-[70%] lg:px-0 lg:py-0 lg:after:-bottom-1",
              isActive && "text-[var(--accent)] after:w-[70%]"
            )}
          >
            {item.label}
          </Link>
        );

        return closeOnNavigate ? (
          <SheetClose key={item.href} asChild>
            {link}
          </SheetClose>
        ) : (
          <Fragment key={item.href}>{link}</Fragment>
        );
      })}
    </div>
  );
}

export function SiteNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  /** Path where the drawer was opened — auto-closes after navigation without an effect. */
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuOpen && menuPath === pathname;

  return (
    <header className="sticky inset-x-0 top-0 z-[60] overflow-hidden border-b border-[rgb(var(--accent-rgb)/0.55)] bg-gradient-to-r from-[#145c45] via-[rgb(var(--brand-2-rgb)/0.96)] to-[#1a6b52] shadow-lg supports-[backdrop-filter]:backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent-rgb)/0.85)] to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(216,192,122,0.16),transparent_50%)]" />

      <div className="relative w-full px-4 py-3 max-[360px]:px-3 max-[360px]:py-2.5 sm:px-6 lg:px-4 xl:px-6">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          <HeaderBrand />

          <nav className="hidden lg:block">
            <NavLinks />
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              className="rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-semibold text-[#14201c] shadow-none hover:bg-[rgb(var(--accent-rgb)/0.92)]"
            >
              <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                Try the guided lesson
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet
              open={open}
              onOpenChange={(next) => {
                setMenuOpen(next);
                setMenuPath(next ? pathname : null);
              }}
            >
              <SheetTrigger asChild>
                <button
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[rgb(var(--accent-rgb)/0.4)] bg-white/5 px-4 text-sm font-semibold text-[#f3efe4] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  aria-label="Open menu"
                >
                  Menu
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l border-[rgb(var(--accent-rgb)/0.55)] bg-gradient-to-b from-[#145c45] via-[rgb(var(--brand-2-rgb)/0.98)] to-[#1a6b52] text-white [&_[aria-label='Close']]:border [&_[aria-label='Close']]:border-white/30 [&_[aria-label='Close']]:bg-white/10 [&_[aria-label='Close']]:hover:bg-white/20 [&_[aria-label='Close']_svg]:text-[var(--accent)]"
              >
                <SheetHeader className="pr-12">
                  <SheetTitle className="sr-only">Site navigation menu</SheetTitle>
                  <div
                    className="w-fit"
                    onClick={() => {
                      setMenuOpen(false);
                      setMenuPath(null);
                    }}
                  >
                    <HeaderBrand />
                  </div>
                </SheetHeader>
                <SheetClose asChild>
                  <button
                    type="button"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.4)] bg-white/5 px-4 py-2.5 text-sm font-semibold text-[#f3efe4] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <X className="h-4 w-4" />
                    Close menu
                  </button>
                </SheetClose>

                <div className="mt-6 flex flex-col items-center gap-4">
                  <NavLinks
                    closeOnNavigate
                    onNavigate={() => {
                      setMenuOpen(false);
                      setMenuPath(null);
                    }}
                  />
                  <div className="h-px w-full bg-[rgb(var(--accent-rgb)/0.25)]" />
                  <Button
                    asChild
                    className="w-full max-w-xs rounded-full bg-[var(--accent)] text-[#14201c] hover:bg-[rgb(var(--accent-rgb)/0.92)]"
                  >
                    <Link href={siteConfig.links.demo} target="_blank" rel="noopener noreferrer">
                      Try the guided lesson
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
