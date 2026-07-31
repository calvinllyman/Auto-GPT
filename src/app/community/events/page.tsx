import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentCard, contentHref } from "@/components/ContentBody";
import { getContentByKind } from "@/lib/content";

export const metadata: Metadata = {
  title: "Local Events",
  description: "Community event notes across Yukon, Mustang, and the Oklahoma City metro.",
};

export default function EventsIndexPage() {
  const events = getContentByKind("event");
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Local events"
        description="Weekend festivals, community gatherings, and notes that help you feel the rhythm of a place."
      />
      <section className="section-shell grid gap-5 py-14 md:grid-cols-2">
        {events.map((doc) => (
          <ContentCard
            key={doc.slug}
            href={contentHref(doc)}
            title={doc.title}
            description={doc.description}
            meta={doc.city}
          />
        ))}
      </section>
    </>
  );
}
