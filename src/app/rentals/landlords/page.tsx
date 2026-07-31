import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContentCard, contentHref } from "@/components/ContentBody";
import { getContentByTag } from "@/lib/content";

export const metadata: Metadata = {
  title: "Landlord Resources",
  description:
    "Landlord guides for the OKC metro — rental pricing, make-ready priorities, screening basics, and hold vs. sell.",
};

export default function LandlordsPage() {
  const docs = getContentByTag(["landlords"]);

  return (
    <>
      <PageHero
        eyebrow="Rentals"
        title="Landlord resources"
        description="Clear frameworks for pricing, preparing, screening, and deciding whether to keep renting or sell."
      />
      <section className="section-shell py-14">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Whether you own one rental or several, these guides focus on practical decisions — cash
          flow, vacancy risk, tenant quality, and timing — not vague slogans.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {docs.map((doc) => (
            <ContentCard
              key={`${doc.kind}-${doc.slug}`}
              href={contentHref(doc)}
              title={doc.title}
              description={doc.description}
              meta={doc.kind}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/schedule"
            className="inline-flex rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white hover:bg-crimson-deep"
          >
            Talk landlord strategy
          </Link>
          <Link
            href="/sell/home-valuation"
            className="inline-flex rounded-md border border-[var(--line)] px-5 py-3 text-sm font-semibold text-navy hover:border-crimson/40"
          >
            Compare hold vs. sell with a valuation
          </Link>
        </div>
      </section>
    </>
  );
}
