"use client";

import Image from "next/image";
import Link from "next/link";

export function HeaderBrand() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-1 rounded-2xl border border-[rgb(var(--accent-rgb)/0.95)] bg-white/95 px-2 py-1.5 max-[360px]:gap-0.5 max-[360px]:px-1.5 shadow-lg transition hover:bg-white"
    >
      <Image
        src="/images/Logo.png"
        alt="Kanam Academy logo"
        width={44}
        height={44}
        className="relative -top-0.5 h-9 w-9 max-[360px]:h-8 max-[360px]:w-8 sm:h-11 sm:w-11 drop-shadow-[0_10px_14px_rgba(0,0,0,0.12)]"
        priority
      />
      <span className="text-[0.95rem] font-semibold tracking-tight max-[360px]:text-[0.86rem] sm:text-lg">
        <span className="sr-only">Kanam Academy</span>
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
    </Link>
  );
}
