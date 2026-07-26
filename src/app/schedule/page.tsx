import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule Consultation",
  description: "Schedule a real estate consultation with Calvin Lyman.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Schedule time with Calvin"
        description="Share your goals and the best way to reach you. Calvin will follow up personally."
      />
      <section className="section-shell grid gap-10 py-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-muted">
            Prefer to talk now? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-crimson">
              {site.phone}
            </a>{" "}
            or email{" "}
            <a href={site.emailHref} className="font-semibold text-crimson">
              {site.email}
            </a>
            .
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Calendly embed can replace the form once you send the booking link. Until then, this
            form emails Calvin your contact info and can sync into HubSpot for ongoing marketing.
          </p>
          <ul className="mt-8 space-y-3 text-navy">
            {[
              "Buying in the OKC metro",
              "Selling or pricing your home",
              "Homes for Heroes / VA questions",
              "Investment criteria",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <LeadForm
          type="consultation"
          title="Request a consultation"
          subtitle="You'll hear from Calvin directly. Opt in below for ongoing market emails."
          submitLabel="Request consultation"
        />
      </section>
    </>
  );
}
