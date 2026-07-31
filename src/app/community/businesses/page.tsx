import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentCard, contentHref } from "@/components/ContentBody";
import { getContentByKind } from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Spotlights",
  description: "Local business spotlights across the OKC metro from Calvin Lyman Real Estate.",
};

export default function BusinessesIndexPage() {
  const businesses = getContentByKind("business");
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Business spotlights"
        description="Local places that shape daily life — featured for community fit, not as paid ads."
      />
      <section className="section-shell grid gap-5 py-14 md:grid-cols-2">
        {businesses.map((doc) => (
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
