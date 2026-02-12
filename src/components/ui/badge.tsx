import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] focus:ring-offset-2 focus:ring-offset-[var(--background)]",
  {
    variants: {
      variant: {
        default:
          "border-zinc-200 bg-white text-zinc-700 shadow-sm",
        brand:
          "border-[rgb(var(--accent-rgb)/0.65)] bg-[rgb(var(--brand-rgb)/0.10)] text-[var(--brand-2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

