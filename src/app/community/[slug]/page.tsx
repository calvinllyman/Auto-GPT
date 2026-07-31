import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { getAllContentSlugs, getContentDoc } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllContentSlugs("neighborhood").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getContentDoc("neighborhood", slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const doc = getContentDoc("neighborhood", slug);
  if (!doc) notFound();
  return (
    <ArticlePage
      doc={doc}
      eyebrow="Neighborhood"
      backHref="/community"
      backLabel="All community guides"
    />
  );
}
