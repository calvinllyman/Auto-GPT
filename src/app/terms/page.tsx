import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The rules that govern use of CalvinLymanRealEstate.com and related content."
      />
      <section className="section-shell py-14">
        <div className="prose-legal">
          <p>
            <strong>Effective date:</strong> July 26, 2026
          </p>
          <p>
            Welcome to {site.domain}. By accessing or using this website, you agree to these Terms
            of Use. If you do not agree, please do not use the site.
          </p>

          <h2>Who we are</h2>
          <p>
            This website is operated by {site.name}. Real estate services in Oklahoma are provided
            through affiliation with {site.brokerages.oklahoma.name}. Real estate services in Texas
            are provided through affiliation with {site.brokerages.texas.name}.
          </p>

          <h2>Informational purpose</h2>
          <p>
            Content on this website — including articles, guides, market commentary, neighborhood
            information, and estimates — is for general informational purposes only. It is not legal,
            tax, lending, or financial advice, and it is not a guarantee of property value, savings,
            or transaction outcomes.
          </p>

          <h2>No brokerage relationship by browsing</h2>
          <p>
            Visiting this website or submitting a form does not automatically create an agency or
            brokerage relationship. Any representation relationship begins according to applicable
            state law and written agreements where required.
          </p>

          <h2>Listings and third-party data</h2>
          <p>
            Property information, when available, may come from MLS/IDX feeds, third-party sources,
            or manual updates. While we aim for accuracy, we do not warrant that all information is
            complete, current, or error-free. Buyers and sellers should independently verify material
            facts.
          </p>

          <h2>Homes for Heroes and other affiliations</h2>
          <p>
            References to Homes for Heroes® and other programs describe affiliations or specialties.
            Program benefits are subject to the terms of those organizations and your eligibility.
            Trademarks belong to their respective owners.
          </p>

          <h2>Equal Housing Opportunity</h2>
          <p>
            We are committed to Equal Housing Opportunity. All real estate advertising and services
            are offered without regard to race, color, religion, sex, handicap, familial status,
            national origin, or any other classification protected by applicable law.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Site design, branding, text, and original media are owned by {site.name} or used with
            permission. You may not copy or reuse materials for commercial purposes without prior
            written consent, except for limited personal, non-commercial use.
          </p>

          <h2>User submissions</h2>
          <p>
            If you submit information through forms, you agree to provide accurate contact details
            and not to misuse the site (including spam, scraping, or attempts to disrupt service).
          </p>

          <h2>Third-party links</h2>
          <p>
            This site may link to third-party websites. We are not responsible for the content,
            policies, or practices of those sites.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The site is provided &quot;as is&quot; and &quot;as available.&quot; To the fullest
            extent permitted by law, we disclaim warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {site.name} and its affiliated brokerages are
            not liable for indirect, incidental, consequential, or punitive damages arising from
            your use of the site.
          </p>

          <h2>Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of Oklahoma, without regard to
            conflict-of-law principles, except where Texas law applies to Texas real estate
            brokerage activity.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these Terms of Use at any time by posting a revised version on this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href={site.emailHref}>{site.email}</a> or {site.address.full}.
          </p>
        </div>
      </section>
    </>
  );
}
