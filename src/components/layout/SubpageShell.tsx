import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type TocItem = {
  href: string;
  label: string;
};

type SubpageShellProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  actions?: ReactNode;
  toc?: TocItem[];
  /** Pull content under the sticky nav (default). Set false when the first child is a hero. */
  overlapNav?: boolean;
};

export function SubpageShell({
  children,
  title,
  subtitle,
  eyebrow,
  actions,
  toc,
  overlapNav = true,
}: SubpageShellProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-[var(--background)] text-[#14201c]",
        overlapNav && "-mt-6 md:-mt-16 lg:-mt-20"
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--brand-2-rgb)/0.12)] via-transparent to-[rgb(var(--accent-rgb)/0.1)]" />
        <div className="absolute inset-0 opacity-[0.035] kanam-hex-pattern" />
      </div>

      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-7xl px-4 max-[360px]:px-3 sm:px-6 lg:px-10 2xl:max-w-[90rem] 2xl:px-12",
          title
            ? "py-8 sm:py-10 md:py-14"
            : "pb-8 pt-5 sm:pb-10 sm:pt-6 md:pb-14 md:pt-7"
        )}
      >
        {title ? (
          <header className="space-y-4 md:space-y-6">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-display text-3xl font-semibold tracking-tight leading-[1.08] text-zinc-950 max-[360px]:text-[1.75rem] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4rem]">
              {title}
            </h1>
            {subtitle ? (
              <p className="max-w-4xl text-base leading-relaxed text-[var(--muted)] max-[360px]:text-[15px] md:text-lg 2xl:max-w-5xl">
                {subtitle}
              </p>
            ) : null}
            {actions ? <div className="flex flex-wrap items-start gap-3 pt-2 sm:items-center">{actions}</div> : null}
          </header>
        ) : null}

        <div
          className={
            toc?.length
              ? "mt-8 grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-10 2xl:grid-cols-[260px_1fr] 2xl:gap-12"
              : title
                ? "mt-8"
                : undefined
          }
        >
          {toc?.length ? (
            <aside className="sticky top-24 hidden lg:block">
              <nav className="rounded-2xl border border-[rgb(var(--accent-rgb)/0.35)] bg-white/90 p-4 shadow-sm backdrop-blur-sm">
                <ul className="space-y-2">
                  {toc.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={textLinkClass}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          ) : null}
          <main className="min-w-0 [&>section]:rounded-3xl [&>section]:border [&>section]:border-[rgb(var(--accent-rgb)/0.28)] [&>section]:bg-white/90 [&>section]:px-4 [&>section]:shadow-[0_14px_34px_rgba(15,23,42,0.07)] [&>section]:sm:px-5 [&>section]:md:px-6 [&>section:nth-of-type(even)]:bg-gradient-to-br [&>section:nth-of-type(even)]:from-white [&>section:nth-of-type(even)]:via-[rgb(var(--brand-2-rgb)/0.06)] [&>section:nth-of-type(even)]:to-[rgb(var(--accent-rgb)/0.1)] [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:sm:text-base [&_p]:md:text-lg [&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:sm:text-base [&_li]:md:text-lg [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:md:text-xl [&_p]:2xl:text-[1.125rem] [&_li]:2xl:text-[1.125rem]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-8 max-[360px]:py-7 sm:py-10 md:py-12 2xl:py-14 backdrop-blur-[1px]",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Band({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[rgb(var(--accent-rgb)/0.3)] bg-white/90 p-4 shadow-[0_12px_34px_rgba(15,23,42,0.08)] ring-1 ring-[rgb(var(--accent-rgb)/0.12)] backdrop-blur-sm transition-shadow hover:shadow-[0_16px_40px_rgba(15,23,42,0.11)] max-[360px]:p-3.5 sm:p-6 2xl:p-7",
        className
      )}
    >
      {children}
    </div>
  );
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
        {children}
      </h2>
      <div className="mt-3 h-px w-14 bg-[rgb(var(--accent-rgb)/0.9)]" />
    </div>
  );
}

export const textLinkClass =
  "block rounded-md px-2 py-1.5 text-sm font-medium text-zinc-800 hover:bg-[rgb(var(--brand-2-rgb)/0.08)] hover:text-[var(--brand-2)] hover:underline underline-offset-4";
