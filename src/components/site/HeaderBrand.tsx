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
      className="group inline-flex items-center rounded-2xl border border-[rgb(var(--accent-rgb)/0.9)] bg-white/95 px-2 py-1.5 shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.7)] focus-visible:ring-offset-2 max-[360px]:px-1.5 max-[360px]:py-1"
    >
      <Image
        src="/images/kanam-logo-nav.png"
        alt=""
        width={400}
        height={170}
        className="h-9 w-auto object-contain max-[360px]:h-8 sm:h-11"
        priority
      />
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
