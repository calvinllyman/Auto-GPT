import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";

type LinkItem = { label: string; href: string; description: string };

type ContentPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  intro: string;
  points?: string[];
  links?: LinkItem[];
  cta?: { label: string; href: string };
  children?: ReactNode;
};

export function ContentPage({
  eyebrow,
  title,
  description,
  intro,
  points = [],
  links = [],
  cta,
  children,
}: ContentPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
            {points.length ? (
              <ul className="mt-8 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-navy">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {children}
            {cta ? (
              <Link
                href={cta.href}
                className="mt-10 inline-flex rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-deep"
              >
                {cta.label}
              </Link>
            ) : null}
          </div>

          {links.length ? (
            <aside className="space-y-3">
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-navy uppercase">
                Next steps
              </p>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border border-[var(--line)] bg-white p-5 transition hover:border-crimson/40"
                >
                  <p className="font-display font-semibold text-navy">{link.label}</p>
                  <p className="mt-1 text-sm text-muted">{link.description}</p>
                </Link>
              ))}
            </aside>
          ) : null}
        </div>
      </section>
    </>
  );
}
