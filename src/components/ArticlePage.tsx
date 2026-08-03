import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { MarkdownBody } from "@/components/ContentBody";
import type { ContentDoc } from "@/lib/content";

export function ArticlePage({
  doc,
  eyebrow,
  backHref,
  backLabel,
}: {
  doc: ContentDoc;
  eyebrow: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={doc.title} description={doc.description} />
      <section className="section-shell py-14">
        <Link href={backHref} className="text-sm font-semibold text-crimson hover:text-crimson-deep">
          ← {backLabel}
        </Link>
        <article className="mt-8 max-w-3xl">
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
      </section>
    </>
  );
}
