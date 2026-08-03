import { existsSync, readFileSync, readdirSync } from "fs";
import path from "path";

export type ContentKind =
  | "neighborhood"
  | "event"
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
  /** ISO date (YYYY-MM-DD) for event start — used for sorting/upcoming */
  eventDate?: string;
  eventEndDate?: string;
  eventTime?: string;
  location?: string;
  hostedBy?: string;
  image?: string;
  featured?: boolean;
  externalUrl?: string;
  body: string;
  filePath: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  // Normalize CRLF so markdown block splitting works the same on Windows and Linux builds
  const text = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, body: text.trim() };

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
    eventDate: data.eventDate,
    eventEndDate: data.eventEndDate,
    eventTime: data.eventTime,
    location: data.location,
    hostedBy: data.hostedBy,
    image: data.image,
    featured: data.featured === "true" || data.featured === "yes",
    externalUrl: data.externalUrl,
    body,
    filePath,
  };
}

function sortContent(a: ContentDoc, b: ContentDoc) {
  if (a.kind === "event" || b.kind === "event") {
    const aKey = a.eventDate || a.date || "";
    const bKey = b.eventDate || b.date || "";
    // Upcoming-first chronological for events
    return aKey.localeCompare(bKey) || a.title.localeCompare(b.title);
  }
  return (b.date || "").localeCompare(a.date || "") || a.title.localeCompare(b.title);
}

export function getContentByKind(kind: ContentKind): ContentDoc[] {
  const dir = kindDir(kind);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => toDoc(kind, path.join(dir, name)))
    .sort(sortContent);
}

export function getUpcomingEvents(referenceDate = new Date()): ContentDoc[] {
  const today = referenceDate.toISOString().slice(0, 10);
  return getContentByKind("event").filter((doc) => {
    const end = doc.eventEndDate || doc.eventDate || doc.date || "";
    return end >= today;
  });
}

export function getPastEvents(referenceDate = new Date()): ContentDoc[] {
  const today = referenceDate.toISOString().slice(0, 10);
  return getContentByKind("event")
    .filter((doc) => {
      const end = doc.eventEndDate || doc.eventDate || doc.date || "";
      return end < today;
    })
    .sort((a, b) => (b.eventDate || b.date || "").localeCompare(a.eventDate || a.date || ""));
}

export function formatEventDateLabel(doc: ContentDoc) {
  const start = doc.eventDate || doc.date;
  if (!start) return "";
  const startDate = new Date(`${start}T12:00:00`);
  const startLabel = startDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  if (doc.eventEndDate && doc.eventEndDate !== start) {
    const endDate = new Date(`${doc.eventEndDate}T12:00:00`);
    const endLabel = endDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return `${startLabel} – ${endLabel}`;
  }
  return startLabel;
}

export function getContentDoc(kind: ContentKind, slug: string): ContentDoc | null {
  const filePath = path.join(kindDir(kind), `${slug}.md`);
  if (!existsSync(filePath)) return null;
  return toDoc(kind, filePath);
}

export function getAllContentSlugs(kind: ContentKind): string[] {
  return getContentByKind(kind).map((doc) => doc.slug);
}

/** Match any of the given tags (case-insensitive). */
export function getContentByTag(
  tags: string[],
  kinds: ContentKind[] = ["guide", "checklist", "faq", "market-report"],
): ContentDoc[] {
  const wanted = new Set(tags.map((t) => t.toLowerCase()));
  return kinds
    .flatMap((kind) => getContentByKind(kind))
    .filter((doc) => doc.tags.some((t) => wanted.has(t.toLowerCase())))
    .sort((a, b) => (b.date || "").localeCompare(a.date || "") || a.title.localeCompare(b.title));
}
