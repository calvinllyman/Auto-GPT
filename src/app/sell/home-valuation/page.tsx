import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { HomeValueCalculator } from "@/components/HomeValueCalculator";

export const metadata: Metadata = {
  title: "Home Valuation",
  description:
    "Estimate your OKC metro home’s planning value with an interactive walkthrough, then talk with Calvin Lyman to refine it with local comps.",
};

export default function HomeValuationPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell"
        title="What might your home be worth?"
        description="Walk through a clear estimate based on location, size, condition, and updates — then refine it with a personal valuation conversation."
      />
      <section className="section-shell py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted">
            Online averages can’t see your street, your updates, or today’s buyer pool. This
            calculator gives you a{" "}
            <span className="font-semibold text-navy">planning range</span> in a few steps — then
            Calvin helps turn it into a real pricing strategy.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <HomeValueCalculator />
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Start with a range",
              copy: "Answer practical questions about area, size, condition, and updates.",
            },
            {
              title: "See what moved the number",
              copy: "Understand the drivers behind the estimate — not a mysterious black box.",
            },
            {
              title: "Refine with Calvin",
              copy: "Request a personal valuation grounded in local comps and your timeline.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted">
          Prefer to skip the calculator?{" "}
          <Link href="/schedule" className="font-semibold text-crimson hover:text-crimson-deep">
            Schedule a consultation
          </Link>{" "}
          or read{" "}
          <Link
            href="/resources/guides/selling-your-home-okc-metro"
            className="font-semibold text-crimson hover:text-crimson-deep"
          >
            how selling works in the OKC metro
          </Link>
          .
        </p>
      </section>
    </>
  );
}
