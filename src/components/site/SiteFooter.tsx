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
    <footer className="border-t border-[rgb(var(--accent-rgb)/0.35)] bg-gradient-to-b from-[#145c45] to-[#0b2f24] text-[#f3efe4]">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-lg font-semibold tracking-tight text-[#f7f3e8]">
              Kanam Academy
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#d7e0db]">
              Coding, AI, data, financial literacy, and digital skills for teens and anyone learning tech —
              live instruction or structured async classes. Chromebook and mobile ready.
              Flexible schedule. Progress you can see.
            </p>
            <p className="mt-4 text-sm text-[#d7e0db]">
              Contact:{" "}
              <a
                className="font-semibold text-[#f7f3e8] underline-offset-4 hover:underline"
                href={`mailto:${siteConfig.links.email}`}
              >
                {siteConfig.links.email}
              </a>
              <span className="mx-1.5 text-[#a8b8b0]" aria-hidden>
                ·
              </span>
              <a
                className="font-semibold text-[#f7f3e8] underline-offset-4 hover:underline"
                href={siteConfig.links.phoneHref}
              >
                {siteConfig.links.phone}
              </a>
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <a
                className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                href={siteConfig.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the guided lesson →
              </a>
              <a
                className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                href={siteConfig.links.app}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started / Sign in →
              </a>
              <Link
                className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                href="/pricing"
              >
                Plans &amp; tutoring →
              </Link>
              <Link
                className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                href="/one-pager"
              >
                Program overview →
              </Link>
              <Link
                className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                href="/pricing"
              >
                Pricing →
              </Link>
              <Link
                className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                href="/one-pager/pricing"
              >
                Pricing overview →
              </Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-[#a8b8b0]">
                  Explore
                </div>
                <ul className="mt-3 space-y-2">
                  {siteConfig.nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="text-sm text-[#d7e0db] hover:text-[var(--accent)]"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-[#a8b8b0]">
                  Connect
                </div>
                <ul className="mt-3 space-y-2">
                  {socials.map((item) => (
                    <li key={item.label}>
                      <a
                        className="text-sm text-[#d7e0db] hover:text-[var(--accent)]"
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
                      className="text-sm text-[#d7e0db] hover:text-[var(--accent)]"
                      href={`mailto:${siteConfig.links.email}`}
                    >
                      {siteConfig.links.email}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-[#d7e0db] hover:text-[var(--accent)]"
                      href={siteConfig.links.phoneHref}
                    >
                      {siteConfig.links.phone}
                    </a>
                  </li>
                  <li>
                    <Link className="text-sm text-[#d7e0db] hover:text-[var(--accent)]" href="/contact">
                      Contact form
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-[#a8b8b0]">
                  Legal
                </div>
                <ul className="mt-3 space-y-2">
                  <li>
                    <Link className="text-sm text-[#d7e0db] hover:text-[var(--accent)]" href="/privacy">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-[#d7e0db] hover:text-[var(--accent)]" href="/terms">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgb(var(--accent-rgb)/0.22)] py-6 text-sm text-[#a8b8b0]">
          © {year} Kanam Academy. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
