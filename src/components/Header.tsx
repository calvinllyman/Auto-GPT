"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(243,246,248,0.92)] backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex min-w-0 flex-col" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-bold tracking-[0.04em] text-navy sm:text-xl">
            CALVIN LYMAN
          </span>
          <span className="text-[0.68rem] font-semibold tracking-[0.28em] text-crimson">
            REAL ESTATE
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy transition hover:bg-mist"
              >
                {item.label}
              </Link>
              {"children" in item && item.children && activeMenu === item.label ? (
                <div className="absolute left-0 top-full min-w-56 border border-[var(--line)] bg-white py-2 shadow-[0_16px_40px_rgba(28,45,60,0.12)]">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-navy transition hover:bg-mist hover:text-crimson"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/schedule"
            className="hidden rounded-md bg-crimson px-4 py-2.5 text-sm font-semibold !text-white transition hover:bg-crimson-deep sm:inline-flex"
          >
            Schedule Consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] text-navy lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span className="h-0.5 w-full bg-navy" />
              <span className="h-0.5 w-full bg-navy" />
              <span className="h-0.5 w-full bg-navy" />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-[var(--line)] py-2">
                <Link
                  href={item.href}
                  className="block py-1 font-medium text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <div className="mt-1 ml-3 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1 text-sm text-muted"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              href="/schedule"
              className="mt-3 rounded-md bg-crimson px-4 py-3 text-center text-sm font-semibold !text-white"
              onClick={() => setOpen(false)}
            >
              Schedule Consultation
            </Link>
            <a href={site.phoneHref} className="py-2 text-center text-sm text-navy">
              {site.phone}
            </a>
          </div>
        </div>
      ) : null}

      </header>
  );
}
