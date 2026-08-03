import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Homeownership for Heroes Workshop",
  description:
    "Free employee financial wellness workshop with Calvin Lyman — home-buying education and Homes for Heroes resources for teachers, first responders, healthcare, and military.",
};

const learnItems = [
  "Preparing credit for homeownership",
  "Saving for a down payment and closing costs",
  "FHA, VA, Conventional, and USDA loan options",
  "The step-by-step home-buying process",
  "Choosing a lender and Realtor",
  "Home inspections and appraisals",
  "Avoiding common first-time buyer mistakes",
  "Creating a personalized plan to become purchase-ready",
];

const heroGroups = [
  "Teachers & school staff",
  "Healthcare professionals",
  "Law enforcement officers",
  "Firefighters",
  "EMS professionals",
  "Active-duty military",
  "Veterans",
];

export default function HomeownershipForHeroesWorkshopPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Homeownership for Heroes"
        description="A free employee financial wellness workshop — practical home-buying education in a no-pressure setting, with Homes for Heroes resources for eligible participants."
      />
      <section className="section-shell py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr]">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              Buying a home is one of the largest financial decisions most people will ever make,
              yet many employees don’t know where to begin. This free educational workshop helps
              participants understand the process, prepare financially, and learn about resources
              that may be available to them.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Built for your organization’s wellness efforts — engaging, practical, and{" "}
              <span className="font-semibold text-navy">not a sales pitch</span>. The teaching
              approach aligns with Calvin’s{" "}
              <Link href="/resources/clearpath" className="font-semibold text-crimson hover:text-crimson-deep">
                ClearPath System™
              </Link>
              .
            </p>

            <h2 className="mt-12 font-display text-2xl font-bold text-navy">
              What employees will learn
            </h2>
            <ul className="mt-5 space-y-3">
              {learnItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl font-bold text-navy">
              Special feature: Homes for Heroes
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Eligible participants also learn about Homes for Heroes savings opportunities for
              community heroes, including:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {heroGroups.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/buy/homes-for-heroes"
              className="mt-4 inline-flex text-sm font-semibold text-crimson hover:text-crimson-deep"
            >
              Learn more about Homes for Heroes →
            </Link>

            <h2 className="mt-12 font-display text-2xl font-bold text-navy">
              Flexible workshop formats
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "30-minute express",
                  copy: "Ideal for shift changes, staff meetings, or department training.",
                },
                {
                  title: "45-minute lunch & learn",
                  copy: "The most popular option for employee wellness programming.",
                },
                {
                  title: "60-minute interactive",
                  copy: "Expanded Q&A and personalized planning discussion.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-[var(--line)] bg-white p-5">
                  <h3 className="font-display font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">Available in-person or virtually.</p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-xl font-bold text-navy">What we provide</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {[
                    "Professional presentation",
                    "Educational handouts and resources",
                    "Optional registration management",
                    "Question & answer session",
                    "Follow-up resources for attendees",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-crimson">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-navy">
                  There is no cost to your organization.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-navy">What we ask from you</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {[
                    "A meeting room (or virtual meeting link)",
                    "Permission to invite employees",
                    "30–60 minutes on the calendar",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">That’s it.</p>
              </div>
            </div>

            <div className="mt-12 border border-[var(--line)] bg-mist/50 p-6">
              <h2 className="font-display text-xl font-bold text-navy">Our commitment</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                This is an educational program — not a sales presentation. Employees are never
                required to apply for a mortgage, share financial information, or work with any
                specific lender or Realtor. The goal is informed decisions whenever the time is
                right.
              </p>
            </div>

            <p className="mt-8 text-sm italic text-muted">
              “Helping local heroes and families build a stronger future through education and
              informed homeownership.”
            </p>
            <p className="mt-4 text-sm text-muted">
              {site.phone} · {site.email} · calvinlymanrealestate.com
            </p>
          </div>

          <div>
            <LeadForm
              type="workshop"
              title="Schedule a workshop"
              subtitle="Tell Calvin about your organization, preferred format (30 / 45 / 60 minutes), and whether you’d like in-person or virtual."
              defaultMessage={
                "I'd like to schedule a Homeownership for Heroes workshop for our employees.\n\nOrganization:\nPreferred format: 30 / 45 / 60 minutes\nIn-person or virtual:\nApprox. audience size:\nIdeal timing:"
              }
              submitLabel="Request a workshop"
            />
            <Link
              href="/resources/clearpath"
              className="mt-6 inline-flex text-sm font-semibold text-crimson hover:text-crimson-deep"
            >
              Download The ClearPath System™ ebook →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
