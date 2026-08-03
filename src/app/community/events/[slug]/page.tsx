import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { MarkdownBody } from "@/components/ContentBody";
import {
  formatEventDateLabel,
  getAllContentSlugs,
  getContentDoc,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllContentSlugs("event").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getContentDoc("event", slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const doc = getContentDoc("event", slug);
  if (!doc) notFound();

  const dateLabel = formatEventDateLabel(doc);

  return (
    <>
      <PageHero eyebrow="Events" title={doc.title} description={doc.description} />
      <section className="section-shell py-14">
        <Link
          href="/community/events"
          className="text-sm font-semibold text-crimson hover:text-crimson-deep"
        >
          ← All events
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <article className="max-w-3xl">
            {doc.image ? (
              <div className="relative mb-8 aspect-[16/10] overflow-hidden border border-[var(--line)] bg-mist">
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                />
              </div>
            ) : null}
            <MarkdownBody body={doc.body} />
            {doc.ctaHref && doc.ctaLabel ? (
              <Link
                href={doc.ctaHref}
                className="mt-10 inline-flex rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white hover:bg-crimson-deep"
              >
                {doc.ctaLabel}
              </Link>
            ) : null}
          </article>

          <aside className="h-fit border border-[var(--line)] bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
              Event details
            </p>
            <dl className="mt-4 space-y-4 text-sm">
              {dateLabel ? (
                <div>
                  <dt className="font-semibold text-navy">Date</dt>
                  <dd className="mt-1 text-muted">{dateLabel}</dd>
                </div>
              ) : null}
              {doc.eventTime ? (
                <div>
                  <dt className="font-semibold text-navy">Time</dt>
                  <dd className="mt-1 text-muted">{doc.eventTime}</dd>
                </div>
              ) : null}
              {doc.location ? (
                <div>
                  <dt className="font-semibold text-navy">Location</dt>
                  <dd className="mt-1 text-muted">{doc.location}</dd>
                </div>
              ) : null}
              {doc.city ? (
                <div>
                  <dt className="font-semibold text-navy">City</dt>
                  <dd className="mt-1 text-muted">{doc.city}</dd>
                </div>
              ) : null}
              {doc.hostedBy ? (
                <div>
                  <dt className="font-semibold text-navy">Hosted by</dt>
                  <dd className="mt-1 text-muted">{doc.hostedBy}</dd>
                </div>
              ) : null}
            </dl>
            {doc.externalUrl ? (
              <a
                href={doc.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-crimson hover:text-crimson-deep"
              >
                Official / source link →
              </a>
            ) : null}
            <Link
              href="/community"
              className="mt-4 block text-sm font-semibold text-navy hover:text-crimson"
            >
              Browse neighborhood guides →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
