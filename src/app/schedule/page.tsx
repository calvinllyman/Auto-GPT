import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule Consultation",
  description: "Schedule a real estate consultation with Calvin Lyman.",
};

export default function SchedulePage() {
  const hasCalendly = Boolean(site.calendly);

  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Let’s find a time that works for you"
        description="Book a meeting or send a quick note — Calvin will follow up personally."
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
            Use the calendar to pick a time, or request a call back below if you’d rather start with
            a message.
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
          subtitle="You’ll hear from Calvin directly. Opt in below if you’d like ongoing market emails."
          submitLabel="Request consultation"
        />
      </section>

      {hasCalendly ? (
        <section className="section-shell pb-16">
          <h2 className="font-display text-2xl font-semibold text-navy">Book a time</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Choose a slot that works for you. You’ll get a confirmation from Calendly right away.
          </p>
          <div className="mt-6">
            <CalendlyEmbed url={site.calendly} />
          </div>
        </section>
      ) : null}
    </>
  );
}
