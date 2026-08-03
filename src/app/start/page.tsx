import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "Your next step with Calvin Lyman Real Estate — schedule a consultation, request a valuation, or explore Homes for Heroes.",
  robots: { index: false, follow: true },
};

const nextSteps = [
  {
    label: "Schedule a consultation",
    href: "/schedule",
    description: "Pick a time or send a quick note — Calvin will follow up personally.",
  },
  {
    label: "Get a home valuation",
    href: "/sell/home-valuation",
    description: "See where your home stands in today’s OKC metro market.",
  },
  {
    label: "Homes for Heroes",
    href: "/buy/homes-for-heroes",
    description: "See if you qualify for Hero Rewards® savings when you buy or sell.",
  },
  {
    label: "Watch educational reels",
    href: "/resources/videos",
    description: "Bite-sized real estate tips you can watch anytime.",
  },
];

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Start here"
        title="Glad you’re here."
        description="Everything points to one place — choose the next step that fits what you’re working on."
      />
      <section className="section-shell py-14">
        <ul className="max-w-2xl space-y-4">
          {nextSteps.map((step) => (
            <li key={step.href}>
              <Link
                href={step.href}
                className="flex items-start justify-between gap-4 border-b border-[var(--line)] py-4 text-navy transition hover:text-crimson"
              >
                <span>
                  <span className="block font-display text-lg font-semibold">{step.label}</span>
                  <span className="mt-1 block text-sm text-muted">{step.description}</span>
                </span>
                <span aria-hidden className="mt-1 shrink-0">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-xl border border-[var(--line)] bg-white p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-crimson uppercase">Direct</p>
          <a href={site.phoneHref} className="mt-3 block font-display text-2xl font-bold text-navy">
            {site.phone}
          </a>
          <a href={site.emailHref} className="mt-2 block text-navy hover:text-crimson">
            {site.email}
          </a>
          <p className="mt-4 text-sm text-muted">{site.address.full}</p>
        </div>
      </section>
    </>
  );
}
