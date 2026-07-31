import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { getAllContentSlugs, getContentDoc } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllContentSlugs("checklist").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getContentDoc("checklist", slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function ChecklistPage({ params }: Props) {
  const { slug } = await params;
  const doc = getContentDoc("checklist", slug);
  if (!doc) notFound();
  return (
    <ArticlePage
      doc={doc}
      eyebrow="Checklist"
      backHref="/resources/checklists"
      backLabel="All checklists"
    />
  );
}
