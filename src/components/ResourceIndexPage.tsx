import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentCard, contentHref } from "@/components/ContentBody";
import { getContentByKind, type ContentKind } from "@/lib/content";

type IndexConfig = {
  kind: ContentKind;
  title: string;
  description: string;
  eyebrow: string;
};

export function ResourceIndexPage({ kind, title, description, eyebrow }: IndexConfig) {
  const docs = getContentByKind(kind);
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="section-shell grid gap-5 py-14 md:grid-cols-2">
        {docs.map((doc) => (
          <ContentCard
            key={doc.slug}
            href={contentHref(doc)}
            title={doc.title}
            description={doc.description}
          />
        ))}
      </section>
    </>
  );
}

export function resourceIndexMetadata(title: string, description: string): Metadata {
  return { title, description };
}
