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
  { title: "Articles", copy: "SEO-friendly answers to real buyer and seller questions." },
  { title: "Guides", copy: "First-time buyers, VA, investors, and local move checklists." },
  { title: "Videos", copy: "YouTube library embeds and episode roundups." },
  { title: "Downloads", copy: "Workbooks, checklists, and lead magnets." },
  { title: "Market Reports", copy: "Monday Market Minute archives and monthly snapshots." },
  { title: "FAQs", copy: "Clear answers that reduce back-and-forth and build trust." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="The content library"
        description="This is the SEO machine — articles, guides, videos, downloads, market reports, and FAQs that keep working long after they publish."
      />
      <section className="section-shell py-14">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Recurring shows like Monday Market Minute, Neighborhood Spotlight, Ask Calvin, and
          Investor Insight will feed this library. Every piece should answer: where does this person
          go next?
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resourceTypes.map((item) => (
            <div key={item.title} className="border border-[var(--line)] bg-white p-5">
              <h2 className="font-display text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy">Start here</h3>
            <ul className="mt-5 space-y-3">
              {[
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
            subtitle="Market updates, local notes, and new guides — no spam, unsubscribe anytime."
            submitLabel="Subscribe"
          />
        </div>
      </section>
    </>
  );
}
