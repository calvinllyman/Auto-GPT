import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Calvin Lyman Real Estate in Yukon and the OKC metro.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's connect"
        description="Call, email, or send a note — every path leads back to a real conversation with Calvin."
      />
      <section className="section-shell grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-crimson uppercase">Phone</p>
            <a href={site.phoneHref} className="mt-2 block text-2xl font-display font-bold text-navy">
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-crimson uppercase">Email</p>
            <a href={site.emailHref} className="mt-2 block text-lg text-navy hover:text-crimson">
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-crimson uppercase">Office</p>
            <p className="mt-2 text-navy">
              {site.brokerages.oklahoma.name}
              <br />
              {site.address.full}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-crimson uppercase">Licensed</p>
            <p className="mt-2 text-muted">
              Oklahoma — {site.brokerages.oklahoma.name}
              <br />
              Texas — {site.brokerages.texas.name}
            </p>
          </div>
        </div>
        <LeadForm
          type="general"
          title="Send a message"
          subtitle="Share what you need help with. Marketing updates are optional."
          submitLabel="Send message"
        />
      </section>
    </>
  );
}
