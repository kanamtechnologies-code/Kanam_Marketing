import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function StickyCta() {
  return (
    <div className="pointer-events-none fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] right-3 z-40 md:bottom-6 md:right-6">
      <Button
        asChild
        size="sm"
        className="pointer-events-auto h-10 border-2 border-[rgb(var(--accent-rgb)/0.95)] bg-[var(--brand)] px-3.5 text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)] ring-1 ring-[rgb(var(--accent-rgb)/0.45)] hover:bg-[var(--brand-2)]"
      >
        <Link href="/contact">
          <MessageCircle className="h-4 w-4" />
          Request info
        </Link>
      </Button>
    </div>
  );
}
