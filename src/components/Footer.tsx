import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container>
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="text-sm font-bold text-zinc-950">{siteConfig.name}</div>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm text-zinc-600">
              <a className="font-medium text-zinc-950" href={`mailto:${siteConfig.links.email}`}>
                {siteConfig.links.email}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Explore
              </div>
              <ul className="mt-3 space-y-2">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link className="text-sm text-zinc-700 hover:text-zinc-950" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Social
              </div>
              <ul className="mt-3 space-y-2">
                {siteConfig.socials.map((item) => (
                  <li key={item.label}>
                    <a
                      className="text-sm text-zinc-700 hover:text-zinc-950"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Legal
              </div>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link className="text-sm text-zinc-700 hover:text-zinc-950" href="/privacy">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-zinc-700 hover:text-zinc-950" href="/terms">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 py-6 text-xs text-zinc-500">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

