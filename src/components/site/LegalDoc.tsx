import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700 sm:text-[0.95rem] sm:leading-7">
        {children}
      </div>
    </section>
  );
}

export function LegalList({
  items,
  ordered = false,
}: {
  items: ReactNode[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={cn(
        "space-y-2 pl-5",
        ordered ? "list-decimal" : "list-disc"
      )}
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
}
