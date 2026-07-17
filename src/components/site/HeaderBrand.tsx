"use client";

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

/** Shared upper-left brand control — official Kanam Academy lockup. */
export function HeaderBrand() {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className="group inline-flex items-center rounded-2xl border border-[rgb(var(--accent-rgb)/0.9)] bg-white/95 px-3 py-2 shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.7)] focus-visible:ring-offset-2 max-[360px]:px-2.5 max-[360px]:py-1.5"
    >
      <Image
        src="/images/kanam-logo-clean-white.png"
        alt=""
        width={348}
        height={104}
        className="h-8 w-auto object-contain max-[360px]:h-7 sm:h-9"
        priority
      />
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
