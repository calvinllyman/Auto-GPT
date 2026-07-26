import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Calvin Lyman Real Estate collects, uses, and protects your information."
      />
      <section className="section-shell py-14">
        <div className="prose-legal">
          <p>
            <strong>Effective date:</strong> July 26, 2026
          </p>
          <p>
            {site.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
            This Privacy Policy explains how we collect, use, share, and protect personal
            information when you visit {site.domain}, contact us, or submit a form on this website.
          </p>

          <h2>Information we collect</h2>
          <p>We may collect information you voluntarily provide, including:</p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Property address and real estate goals</li>
            <li>Messages you send through forms or email</li>
            <li>Marketing preferences (opt-in / opt-out)</li>
          </ul>
          <p>
            We may also collect standard technical information such as browser type, device
            information, pages visited, and approximate location through analytics tools.
          </p>

          <h2>How we use information</h2>
          <ul>
            <li>Respond to consultation, valuation, and general inquiries</li>
            <li>Provide real estate services and follow up on your request</li>
            <li>Send market updates and educational content when you opt in</li>
            <li>Improve the website, content, and client experience</li>
            <li>Comply with legal, brokerage, and professional obligations</li>
          </ul>

          <h2>CRM and email marketing</h2>
          <p>
            Lead information may be stored in HubSpot or another customer relationship management
            system used by {site.name}. If you opt in to marketing emails, you may receive updates
            about the market, guides, events, and services. You can unsubscribe at any time using
            the link in those emails or by contacting us.
          </p>

          <h2>Sharing of information</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul>
            <li>Our affiliated brokerages ({site.brokerages.oklahoma.name} and {site.brokerages.texas.name}) as needed to provide services</li>
            <li>Service providers who help with email, CRM, hosting, analytics, or communications</li>
            <li>Professional partners involved in a transaction when appropriate and authorized</li>
            <li>Authorities when required by law</li>
          </ul>

          <h2>Cookies and analytics</h2>
          <p>
            This site may use cookies or similar technologies for basic functionality and analytics.
            You can control cookies through your browser settings.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain personal information as long as needed to provide services, maintain business
            records, and meet legal or brokerage requirements.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>Request access to or correction of your information</li>
            <li>Opt out of marketing emails</li>
            <li>Ask questions about how your information is handled</li>
          </ul>

          <h2>Children&apos;s privacy</h2>
          <p>
            This website is not directed to children under 13, and we do not knowingly collect
            personal information from children.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date above will be
            revised when changes are posted.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy can be sent to{" "}
            <a href={site.emailHref}>{site.email}</a> or by mail to {site.address.full}.
          </p>
        </div>
      </section>
    </>
  );
}
