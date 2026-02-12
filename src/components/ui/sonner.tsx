"use client";

import { Toaster } from "sonner";

export function Sonner() {
  return (
    <Toaster
      position="top-right"
      richColors
      toastOptions={{
        classNames: {
          toast:
            "rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-lg",
          title: "font-semibold",
          description: "text-zinc-600",
          actionButton:
            "bg-[var(--brand)] text-white hover:bg-[var(--brand-2)]",
          cancelButton: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
        },
      }}
    />
  );
}

