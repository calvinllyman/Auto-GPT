import Image from "next/image";
import Link from "next/link";
import {
  formatEventDateLabel,
  type ContentDoc,
} from "@/lib/content";
import { contentHref } from "@/components/ContentBody";

export function EventCard({
  doc,
  featured = false,
}: {
  doc: ContentDoc;
  featured?: boolean;
}) {
  const dateLabel = formatEventDateLabel(doc);
  const href = contentHref(doc);

  if (featured) {
    return (
      <Link
        href={href}
        className="group grid overflow-hidden border border-[var(--line)] bg-white transition hover:border-crimson/40 lg:grid-cols-[1.1fr_1fr]"
      >
        {doc.image ? (
          <div className="relative min-h-[220px] bg-navy">
            <Image
              src={doc.image}
              alt={doc.title}
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        ) : (
          <div className="bg-gradient-to-br from-navy to-navy-deep p-8 text-white">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">Featured event</p>
            <p className="mt-4 font-display text-3xl font-bold">{doc.city}</p>
          </div>
        )}
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
            Hosted by Calvin
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-navy">{doc.title}</h3>
          {dateLabel ? <p className="mt-3 text-sm font-semibold text-navy">{dateLabel}</p> : null}
          {doc.eventTime ? <p className="mt-1 text-sm text-muted">{doc.eventTime}</p> : null}
          {doc.location ? <p className="mt-1 text-sm text-muted">{doc.location}</p> : null}
          <p className="mt-4 text-sm leading-relaxed text-muted">{doc.description}</p>
          <p className="mt-5 text-sm font-semibold text-crimson">Event details →</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="flex h-full flex-col border border-[var(--line)] bg-white p-5 transition hover:border-crimson/40"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
          {doc.city || "OKC metro"}
        </p>
        {doc.hostedBy?.toLowerCase().includes("calvin") ? (
          <span className="rounded-sm bg-crimson px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase">
            Hosted
          </span>
        ) : null}
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold text-navy">{doc.title}</h3>
      {dateLabel ? <p className="mt-3 text-sm font-semibold text-navy">{dateLabel}</p> : null}
      {doc.eventTime ? <p className="mt-1 text-sm text-muted">{doc.eventTime}</p> : null}
      {doc.location ? <p className="mt-1 text-sm text-muted">{doc.location}</p> : null}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{doc.description}</p>
      <p className="mt-4 text-sm font-semibold text-crimson">Details →</p>
    </Link>
  );
}
