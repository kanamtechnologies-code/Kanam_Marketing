import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[rgb(var(--accent-rgb)/0.55)]">
              <Image
                src="/images/Logo.png"
                alt={`${siteConfig.name} logo`}
                fill
                sizes="36px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-zinc-950">{siteConfig.name}</div>
              <div className="text-xs text-zinc-500">Learn. Build. Launch.</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={siteConfig.links.app} variant="secondary" newTab>
              Open app
            </Button>
            <Button href="/contact" variant="primary">
              Talk to us
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

