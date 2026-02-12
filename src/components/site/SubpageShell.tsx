import type { ReactNode } from "react";

export function SubpageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="absolute -right-40 top-[-160px] h-[560px] w-[560px] rounded-full bg-amber-400/30 blur-3xl" />
        <div className="absolute left-1/2 top-[-260px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

