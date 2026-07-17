"use client";

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function HeaderBrand() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-1 rounded-2xl border border-[rgb(var(--accent-rgb)/0.9)] bg-white/95 px-2 py-1.5 max-[360px]:gap-0.5 max-[360px]:px-1.5 shadow-md transition hover:bg-white"
    >
      <Image
        src="/images/Logo.png"
        alt=""
        width={44}
        height={44}
        className="relative -top-0.5 h-9 w-9 max-[360px]:h-8 max-[360px]:w-8 sm:h-11 sm:w-11"
        priority
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-tight max-[360px]:text-[0.86rem] sm:text-lg">
          <span className="sr-only">{siteConfig.name}</span>
          <span
            aria-hidden
            className="text-[color:var(--brand-2)] decoration-[rgb(var(--accent-rgb)/0.85)] decoration-2 underline-offset-4 group-hover:underline"
          >
            anam
          </span>{" "}
          <span className="text-[color:var(--brand-2)] decoration-[rgb(var(--accent-rgb)/0.85)] decoration-2 underline-offset-4 group-hover:underline">
            Academy
          </span>
        </span>
        <span
          aria-hidden
          className="mt-0.5 text-[0.68rem] font-semibold tracking-[0.04em] text-[var(--accent)] max-[360px]:text-[0.6rem] sm:text-[0.75rem]"
        >
          Move Forward.
        </span>
      </span>
    </Link>
  );
}
