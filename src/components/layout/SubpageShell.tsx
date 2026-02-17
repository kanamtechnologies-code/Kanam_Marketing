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
};

export function SubpageShell({
  children,
  title,
  subtitle,
  eyebrow,
  actions,
  toc,
}: SubpageShellProps) {
  return (
    <div className="relative isolate -mt-6 overflow-hidden bg-background md:-mt-16 lg:-mt-20">
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className="absolute inset-x-0 top-0 h-[100svh] w-full object-cover object-center opacity-[0.075]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/video/8733062-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-400/10" />
        <div className="absolute -left-60 top-0 h-full w-[520px] bg-emerald-500/12 blur-3xl" />
        <div className="absolute -right-60 top-0 h-full w-[520px] bg-amber-400/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.7)_1px,transparent_0)] [background-size:28px_28px] dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 max-[360px]:px-3 sm:px-6 sm:py-10 lg:px-10 md:py-14 2xl:max-w-[90rem] 2xl:px-12">
        {title ? (
          <header className="space-y-4 md:space-y-6">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-3xl font-bold tracking-tight leading-[1.08] max-[360px]:text-[1.75rem] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4rem]">
              {title}
            </h1>
            {subtitle ? (
              <p className="max-w-4xl text-base max-[360px]:text-[15px] md:text-lg text-muted-foreground leading-relaxed 2xl:max-w-5xl">
                {subtitle}
              </p>
            ) : null}
            {actions ? <div className="flex flex-wrap items-start gap-3 pt-2 sm:items-center">{actions}</div> : null}
          </header>
        ) : null}

        <div className={toc?.length ? "mt-8 grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-10 2xl:grid-cols-[260px_1fr] 2xl:gap-12" : "mt-8"}>
          {toc?.length ? (
            <aside className="sticky top-24 hidden lg:block">
              <nav className="rounded-2xl border border-foreground/10 bg-white/82 p-4 backdrop-blur-sm">
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
          <main className="min-w-0 [&_p]:text-[15px] [&_p]:sm:text-base [&_p]:md:text-lg [&_p]:leading-relaxed [&_li]:text-[15px] [&_li]:sm:text-base [&_li]:md:text-lg [&_li]:leading-relaxed [&_h3]:text-lg [&_h3]:md:text-xl [&_h3]:font-semibold [&_p]:2xl:text-[1.125rem] [&_li]:2xl:text-[1.125rem]">
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
    <section id={id} className={cn("py-8 max-[360px]:py-7 sm:py-10 md:py-12 2xl:py-14", className)}>
      {children}
    </section>
  );
}

export function Band({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-foreground/15 bg-white/72 p-4 max-[360px]:p-3.5 sm:p-6 2xl:p-7 shadow-[0_12px_34px_rgba(15,23,42,0.10)] ring-1 ring-[rgb(var(--accent-rgb)/0.14)] backdrop-blur-sm transition-shadow hover:shadow-[0_16px_40px_rgba(15,23,42,0.13)] dark:bg-background/55",
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
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{children}</h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-amber-400/70" />
    </div>
  );
}

export const textLinkClass =
  "block rounded-md px-2 py-1.5 text-zinc-900 font-medium hover:bg-zinc-900/5 hover:text-black hover:underline underline-offset-4";

