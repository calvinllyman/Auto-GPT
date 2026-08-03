import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContentCard, contentHref } from "@/components/ContentBody";
import { getContentByTag } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rentals",
  description:
    "OKC metro rentals — tenant guides, landlord resources, and a clear next step with Calvin Lyman.",
};

export default function RentalsPage() {
  const tenantDocs = getContentByTag(["renters"]).slice(0, 3);
  const landlordDocs = getContentByTag(["landlords"]).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Rentals"
        title="Rentals with clear next steps"
        description="Searching for a place to rent — or managing a property as an owner? Start with practical guidance, then talk through current options."
      />
      <section className="section-shell py-14">
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/rentals/tenants"
            className="border border-[var(--line)] bg-white p-6 transition hover:border-crimson/40"
          >
            <h2 className="font-display text-xl font-semibold text-navy">Tenant resources</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Applications, showing questions, leases, and move-in checklists for OKC metro renters.
            </p>
            <p className="mt-4 text-sm font-semibold text-crimson">Browse renter guides →</p>
          </Link>
          <Link
            href="/rentals/landlords"
            className="border border-[var(--line)] bg-white p-6 transition hover:border-crimson/40"
          >
            <h2 className="font-display text-xl font-semibold text-navy">Landlord resources</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Pricing, make-ready, screening basics, and hold-vs-sell frameworks for owners.
            </p>
            <p className="mt-4 text-sm font-semibold text-crimson">Browse landlord guides →</p>
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-navy">Start here for renters</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {tenantDocs.map((doc) => (
              <ContentCard
                key={doc.slug}
                href={contentHref(doc)}
                title={doc.title}
                description={doc.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-navy">Start here for landlords</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {landlordDocs.map((doc) => (
              <ContentCard
                key={doc.slug}
                href={contentHref(doc)}
                title={doc.title}
                description={doc.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Link
            href="/contact"
            className="inline-flex rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white hover:bg-crimson-deep"
          >
            Ask about current rental availability
          </Link>
        </div>
      </section>
    </>
  );
}
