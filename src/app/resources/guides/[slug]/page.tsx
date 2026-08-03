import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { getAllContentSlugs, getContentDoc } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllContentSlugs("guide").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getContentDoc("guide", slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const doc = getContentDoc("guide", slug);
  if (!doc) notFound();
  return (
    <ArticlePage doc={doc} eyebrow="Guide" backHref="/resources/guides" backLabel="All guides" />
  );
}
