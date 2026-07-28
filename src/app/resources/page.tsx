import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles, guides, videos, checklists, market reports, and FAQs from Calvin Lyman Real Estate.",
};

const resourceTypes = [
  {
    title: "Articles",
    copy: "Straightforward answers to real buyer and seller questions.",
    href: "/resources",
  },
  {
    title: "Guides",
    copy: "First-time buyers, VA, investors, and local move checklists.",
    href: "/buy/first-time-buyers",
  },
  {
    title: "Videos",
    copy: "Bite-sized educational reels on real estate subjects.",
    href: "/resources/videos",
  },
  {
    title: "Downloads",
    copy: "Workbooks, checklists, and practical tools.",
    href: "/resources",
  },
  {
    title: "Market Reports",
    copy: "Local snapshots to help you track the OKC metro.",
    href: "/resources",
  },
  {
    title: "FAQs",
    copy: "Clear answers that help you decide what to do next.",
    href: "/resources",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides and answers for your next move"
        description="Browse articles, guides, videos, checklists, market reports, and FAQs — then take the next step that fits your goals."
      />
      <section className="section-shell py-14">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Whether you’re buying, selling, or exploring the OKC metro, these resources are here to
          help you make clearer decisions — and know exactly where to go next.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resourceTypes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="border border-[var(--line)] bg-white p-5 transition hover:border-crimson/40"
            >
              <h2 className="font-display text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.copy}</p>
              {item.title === "Videos" ? (
                <p className="mt-4 text-sm font-semibold text-crimson">Watch reels →</p>
              ) : null}
            </Link>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy">Start here</h3>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/resources/videos", label: "Educational reels" },
                { href: "/buy/first-time-buyers", label: "First-Time Buyer Guide" },
                { href: "/buy/homes-for-heroes", label: "Homes for Heroes" },
                { href: "/community", label: "Community guides" },
                { href: "/schedule", label: "Book a consultation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-medium text-crimson hover:text-crimson-deep">
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm
            type="newsletter"
            title="Join the email list"
            subtitle="Market updates, local notes, and new guides — unsubscribe anytime."
            submitLabel="Subscribe"
          />
        </div>
      </section>
    </>
  );
}
