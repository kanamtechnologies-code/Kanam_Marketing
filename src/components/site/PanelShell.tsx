import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PanelShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-h-[60vh] w-full mx-auto px-5 sm:px-6 lg:px-16 lg:h-full lg:max-w-[92vw]",
        "grid grid-cols-1 items-center gap-10 lg:grid-cols-12",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PanelText({ children }: { children: ReactNode }) {
  return (
    <div className="order-1 col-span-12 max-w-3xl lg:order-none lg:col-span-5 [&_p]:text-base [&_p]:md:text-lg [&_p]:leading-relaxed">
      {children}
    </div>
  );
}

export function PanelMedia({ children }: { children: ReactNode }) {
  return (
    <div className="order-2 col-span-12 w-full lg:order-none lg:col-span-7">
      {children}
    </div>
  );
}

