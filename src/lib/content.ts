import { existsSync, readFileSync, readdirSync } from "fs";
import path from "path";

export type ContentKind =
  | "neighborhood"
  | "event"
  | "business"
  | "guide"
  | "faq"
  | "checklist"
  | "market-report";

export type ContentDoc = {
  slug: string;
  kind: ContentKind;
  title: string;
  description: string;
  date?: string;
  city?: string;
  tags: string[];
  ctaLabel?: string;
  ctaHref?: string;
  body: string;
  filePath: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  return { data, body: match[2].trim() };
}

function kindDir(kind: ContentKind) {
  switch (kind) {
    case "neighborhood":
      return path.join(CONTENT_ROOT, "community", "neighborhoods");
    case "event":
      return path.join(CONTENT_ROOT, "community", "events");
    case "business":
      return path.join(CONTENT_ROOT, "community", "businesses");
    case "guide":
      return path.join(CONTENT_ROOT, "resources", "guides");
    case "faq":
      return path.join(CONTENT_ROOT, "resources", "faqs");
    case "checklist":
      return path.join(CONTENT_ROOT, "resources", "checklists");
    case "market-report":
      return path.join(CONTENT_ROOT, "resources", "market-reports");
  }
}

function toDoc(kind: ContentKind, filePath: string): ContentDoc {
  const raw = readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const slug = path.basename(filePath, ".md");
  return {
    slug,
    kind,
    title: data.title || slug,
    description: data.description || "",
    date: data.date,
    city: data.city,
    tags: data.tags
      ? data.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [],
    ctaLabel: data.ctaLabel,
    ctaHref: data.ctaHref,
    body,
    filePath,
  };
}

export function getContentByKind(kind: ContentKind): ContentDoc[] {
  const dir = kindDir(kind);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => toDoc(kind, path.join(dir, name)))
    .sort((a, b) => (b.date || "").localeCompare(a.date || "") || a.title.localeCompare(b.title));
}

export function getContentDoc(kind: ContentKind, slug: string): ContentDoc | null {
  const filePath = path.join(kindDir(kind), `${slug}.md`);
  if (!existsSync(filePath)) return null;
  return toDoc(kind, filePath);
}

export function getAllContentSlugs(kind: ContentKind): string[] {
  return getContentByKind(kind).map((doc) => doc.slug);
}
