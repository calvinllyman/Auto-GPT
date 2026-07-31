import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContentCard, contentHref } from "@/components/ContentBody";
import { LeadForm } from "@/components/LeadForm";
import { getContentByKind } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, checklists, FAQs, market reports, and educational videos from Calvin Lyman Real Estate.",
};

export default function ResourcesPage() {
  const guides = getContentByKind("guide");
  const checklists = getContentByKind("checklist");
  const faqs = getContentByKind("faq");
  const reports = getContentByKind("market-report");

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides and answers for your next move"
        description="Browse guides, checklists, FAQs, market reports, and educational reels — then take the next step that fits your goals."
      />
      <section className="section-shell py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Guides",
              copy: "Plain-English explainers for buyers, sellers, and community heroes.",
              href: "/resources/guides",
            },
            {
              title: "Checklists",
              copy: "Practical lists you can use before touring, listing, or closing.",
              href: "/resources/checklists",
            },
            {
              title: "FAQs",
              copy: "Clear answers that help you decide what to do next.",
              href: "/resources/faqs",
            },
            {
              title: "Market reports",
              copy: "How to read local stats — and when to ask for a personal take.",
              href: "/resources/market-reports",
            },
            {
              title: "Videos",
              copy: "Bite-sized educational reels on real estate subjects.",
              href: "/resources/videos",
            },
            {
              title: "Community",
              copy: "Neighborhood guides and local events across the metro.",
              href: "/community",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="border border-[var(--line)] bg-white p-5 transition hover:border-crimson/40"
            >
              <h2 className="font-display text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.copy}</p>
              <p className="mt-4 text-sm font-semibold text-crimson">Browse →</p>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-bold text-navy">Latest guides</h2>
            <Link href="/resources/guides" className="text-sm font-semibold text-crimson hover:text-crimson-deep">
              All guides →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {guides.map((doc) => (
              <ContentCard
                key={doc.slug}
                href={contentHref(doc)}
                title={doc.title}
                description={doc.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-end justify-between gap-3">
              <h2 className="font-display text-2xl font-bold text-navy">Checklists</h2>
              <Link
                href="/resources/checklists"
                className="text-sm font-semibold text-crimson hover:text-crimson-deep"
              >
                All →
              </Link>
            </div>
            <div className="mt-6 space-y-4">
              {checklists.map((doc) => (
                <ContentCard
                  key={doc.slug}
                  href={contentHref(doc)}
                  title={doc.title}
                  description={doc.description}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between gap-3">
              <h2 className="font-display text-2xl font-bold text-navy">FAQs</h2>
              <Link
                href="/resources/faqs"
                className="text-sm font-semibold text-crimson hover:text-crimson-deep"
              >
                All →
              </Link>
            </div>
            <div className="mt-6 space-y-4">
              {faqs.map((doc) => (
                <ContentCard
                  key={doc.slug}
                  href={contentHref(doc)}
                  title={doc.title}
                  description={doc.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-bold text-navy">Market reports</h2>
            <Link
              href="/resources/market-reports"
              className="text-sm font-semibold text-crimson hover:text-crimson-deep"
            >
              All →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reports.map((doc) => (
              <ContentCard
                key={doc.slug}
                href={contentHref(doc)}
                title={doc.title}
                description={doc.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-xl">
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
