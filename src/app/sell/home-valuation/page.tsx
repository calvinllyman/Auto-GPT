import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Home Valuation",
  description: "Request a home valuation from Calvin Lyman in the OKC metro.",
};

export default function HomeValuationPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell"
        title="Home valuation"
        description="Get a clear read on where your home stands in today's market — and what it would take to sell well."
      />
      <section className="section-shell grid gap-10 py-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-muted">
            This isn&apos;t a generic online Zestimate dump. Share your property details and Calvin
            will follow up with a personal conversation about price range, timing, and preparation.
          </p>
          <ul className="mt-8 space-y-3 text-navy">
            {[
              "Local comps and current buyer demand",
              "Condition and improvement recommendations",
              "Go-to-market timing based on your goals",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <LeadForm
          type="home-valuation"
          title="Request your valuation"
          subtitle="Calvin will email/call you directly and can add you to ongoing market updates."
          showAddress
          submitLabel="Request valuation"
        />
      </section>
    </>
  );
}
