import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EventCard } from "@/components/EventCard";
import { getPastEvents, getUpcomingEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Local Events",
  description:
    "Upcoming community events across Yukon, Edmond, and the Oklahoma City metro — including gatherings hosted by Calvin Lyman.",
};

export default function EventsIndexPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();
  const featured = upcoming.find((e) => e.featured) || upcoming.find((e) => e.slug.includes("community-safety"));
  const rest = upcoming.filter((e) => e.slug !== featured?.slug);

  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Local events"
        description="Festivals, downtown nights, and neighborhood gatherings that help you feel daily life across the OKC metro — not just the floor plan."
      />
      <section className="section-shell py-14">
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          From Yukon’s Route 66 weekends to Edmond’s street festivals, these are real dates on the
          local calendar. Calvin’s own Community Safety Awareness Day is featured below — come say
          hello.
        </p>

        {featured ? (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-navy">Featured</h2>
            <div className="mt-5">
              <EventCard doc={featured} featured />
            </div>
          </div>
        ) : null}

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold text-navy">Upcoming</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((doc) => (
              <EventCard key={doc.slug} doc={doc} />
            ))}
          </div>
        </div>

        {past.length ? (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-navy">Recently on the calendar</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Past events stay published so you can still sense how a community gathers through the
              year.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {past.map((doc) => (
                <EventCard key={doc.slug} doc={doc} />
              ))}
            </div>
          </div>
        ) : null}

        <p className="mt-12 text-sm text-muted">
          Want help matching a neighborhood to the lifestyle these events represent?{" "}
          <Link href="/schedule" className="font-semibold text-crimson hover:text-crimson-deep">
            Schedule a consult
          </Link>
          .
        </p>
      </section>
    </>
  );
}
