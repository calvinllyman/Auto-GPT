import Link from "next/link";
import type { ContentDoc } from "@/lib/content";

function renderInline(text: string) {
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (link) {
      const href = link[2];
      const external = href.startsWith("http");
      if (external) {
        return (
          <a key={index} href={href} className="font-semibold text-crimson hover:text-crimson-deep">
            {link[1]}
          </a>
        );
      }
      return (
        <Link key={index} href={href} className="font-semibold text-crimson hover:text-crimson-deep">
          {link[1]}
        </Link>
      );
    }
    const bold = part.match(/^\*\*(.*?)\*\*$/);
    if (bold) {
      return (
        <strong key={index} className="font-semibold text-navy">
          {bold[1]}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function MarkdownBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/);
  return (
    <div className="space-y-5 text-base leading-relaxed text-muted">
      {blocks.map((block, index) => {
        const lines = block.split("\n");
        if (lines.every((line) => line.trim().startsWith("- "))) {
          return (
            <ul key={index} className="space-y-2 pl-1">
              {lines.map((line) => (
                <li key={line} className="flex gap-3 text-navy">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                  <span className="text-muted">{renderInline(line.replace(/^- /, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2 key={index} className="pt-2 font-display text-2xl font-semibold text-navy">
              {block.replace(/^## /, "")}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3 key={index} className="pt-1 font-display text-xl font-semibold text-navy">
              {block.replace(/^### /, "")}
            </h3>
          );
        }
        return (
          <p key={index} className="text-muted">
            {renderInline(block.replace(/\n/g, " "))}
          </p>
        );
      })}
    </div>
  );
}

export function ContentCard({
  href,
  title,
  description,
  meta,
}: {
  href: string;
  title: string;
  description: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="block border border-[var(--line)] bg-white p-5 transition hover:border-crimson/40"
    >
      {meta ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">{meta}</p>
      ) : null}
      <h3 className="mt-2 font-display text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </Link>
  );
}

export function contentHref(doc: ContentDoc) {
  switch (doc.kind) {
    case "neighborhood":
      return `/community/${doc.slug}`;
    case "event":
      return `/community/events/${doc.slug}`;
    case "business":
      return `/community/businesses/${doc.slug}`;
    case "guide":
      return `/resources/guides/${doc.slug}`;
    case "faq":
      return `/resources/faqs/${doc.slug}`;
    case "checklist":
      return `/resources/checklists/${doc.slug}`;
    case "market-report":
      return `/resources/market-reports/${doc.slug}`;
  }
}
