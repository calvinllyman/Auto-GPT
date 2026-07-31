import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContentCard, contentHref } from "@/components/ContentBody";
import { getContentByTag } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tenant Resources",
  description:
    "Renter guides and checklists for the OKC metro — applications, showings, leases, and move-in protection.",
};

export default function TenantsPage() {
  const docs = getContentByTag(["renters"]);

  return (
    <>
      <PageHero
        eyebrow="Rentals"
        title="Tenant resources"
        description="Practical guides and checklists for a cleaner rental search, stronger application, and safer move-in."
      />
      <section className="section-shell py-14">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          These resources are built for renters in Yukon, Mustang, Oklahoma City, and nearby
          communities — so you know what to prepare, what to ask, and how to protect your deposit.
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
            href="/contact"
            className="inline-flex rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white hover:bg-crimson-deep"
          >
            Ask about current rentals
          </Link>
          <Link
            href="/rentals/landlords"
            className="inline-flex rounded-md border border-[var(--line)] px-5 py-3 text-sm font-semibold text-navy hover:border-crimson/40"
          >
            Landlord resources
          </Link>
        </div>
      </section>
    </>
  );
}
