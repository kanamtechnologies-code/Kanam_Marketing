import Link from "next/link";

import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

function isConfiguredSocial(href: string) {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "");
    // Hide bare platform homepages until real profile URLs are set in env.
    return !["instagram.com", "linkedin.com", "youtube.com"].includes(host);
  } catch {
    return false;
  }
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = siteConfig.socials.filter((item) => isConfiguredSocial(item.href));

  return (
    <footer className="border-t border-[rgb(var(--brand-2-rgb)/0.2)] bg-gradient-to-b from-[rgb(var(--brand-2-rgb)/0.08)] to-[rgb(var(--background))]">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-lg font-semibold tracking-tight text-zinc-950">
              Kanam Academy
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--brand-2-rgb)/1)]">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
              Coding, AI, data, and digital literacy for teens and anyone learning tech —
              live instruction or structured async classes. Chromebook and mobile ready.
              Flexible schedule. Progress you can see.
            </p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Contact:{" "}
              <a
                className="font-semibold text-zinc-950"
                href={`mailto:${siteConfig.links.email}`}
              >
                {siteConfig.links.email}
              </a>
              <span className="mx-1.5 text-zinc-400" aria-hidden>
                ·
              </span>
              <a
                className="font-semibold text-zinc-950"
                href={siteConfig.links.phoneHref}
              >
                {siteConfig.links.phone}
              </a>
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <a
                className="text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)] underline-offset-4 hover:underline"
                href={siteConfig.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the guided lesson →
              </a>
              <a
                className="text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)] underline-offset-4 hover:underline"
                href={siteConfig.links.app}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started / Sign in →
              </a>
              <Link
                className="text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)] underline-offset-4 hover:underline"
                href="/one-pager"
              >
                One-pager (print / PDF) →
              </Link>
              <Link
                className="text-sm font-semibold text-[rgb(var(--brand-2-rgb)/1)] underline-offset-4 hover:underline"
                href="/one-pager/pricing"
              >
                Pricing one-pager →
              </Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Explore
                </div>
                <ul className="mt-3 space-y-2">
                  {siteConfig.nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="text-sm text-zinc-700 hover:text-zinc-950"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Connect
                </div>
                <ul className="mt-3 space-y-2">
                  {socials.map((item) => (
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
                  <li>
                    <a
                      className="text-sm text-zinc-700 hover:text-zinc-950"
                      href={`mailto:${siteConfig.links.email}`}
                    >
                      {siteConfig.links.email}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-zinc-700 hover:text-zinc-950"
                      href={siteConfig.links.phoneHref}
                    >
                      {siteConfig.links.phone}
                    </a>
                  </li>
                  <li>
                    <Link className="text-sm text-zinc-700 hover:text-zinc-950" href="/contact">
                      Contact form
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
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
        </div>

        <div className="border-t border-zinc-900/10 py-6 text-sm text-zinc-500">
          © {year} Kanam Academy. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
