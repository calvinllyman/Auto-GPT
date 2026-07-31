import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContentCard, contentHref } from "@/components/ContentBody";
import { getContentByKind } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Neighborhood guides, local events, and business spotlights across Yukon, Mustang, and Oklahoma City.",
};

export default function CommunityPage() {
  const neighborhoods = getContentByKind("neighborhood");
  const events = getContentByKind("event");
  const businesses = getContentByKind("business");

  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Life around the OKC metro"
        description="Neighborhood guides, local events, and business spotlights — so you can picture daily life before you buy or sell."
      />
      <section className="section-shell py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">Neighborhood guides</h2>
            <p className="mt-2 max-w-2xl text-muted">
              Start with Yukon, Mustang, and Oklahoma City — then ask Calvin which pockets fit your
              lifestyle and budget.
            </p>
          </div>
          <Link href="/schedule" className="text-sm font-semibold text-crimson hover:text-crimson-deep">
            Ask about a neighborhood →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {neighborhoods.map((doc) => (
            <ContentCard
              key={doc.slug}
              href={contentHref(doc)}
              title={doc.title}
              description={doc.description}
              meta={doc.city}
            />
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">Local events</h2>
            <p className="mt-2 text-muted">
              Community calendars help you feel the rhythm of a place — not just the floor plan.
            </p>
            <div className="mt-6 space-y-4">
              {events.map((doc) => (
                <ContentCard
                  key={doc.slug}
                  href={contentHref(doc)}
                  title={doc.title}
                  description={doc.description}
                  meta={doc.city}
                />
              ))}
            </div>
            <Link
              href="/community/events"
              className="mt-4 inline-flex text-sm font-semibold text-crimson hover:text-crimson-deep"
            >
              All events →
            </Link>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">Business spotlights</h2>
            <p className="mt-2 text-muted">
              Local spots that shape daily life across the west metro and Oklahoma City.
            </p>
            <div className="mt-6 space-y-4">
              {businesses.map((doc) => (
                <ContentCard
                  key={doc.slug}
                  href={contentHref(doc)}
                  title={doc.title}
                  description={doc.description}
                  meta={doc.city}
                />
              ))}
            </div>
            <Link
              href="/community/businesses"
              className="mt-4 inline-flex text-sm font-semibold text-crimson hover:text-crimson-deep"
            >
              All spotlights →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
