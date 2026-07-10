import type { ReactNode } from "react";

export default function OnePagerLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-dvh bg-[var(--background)]">{children}</div>;
}
