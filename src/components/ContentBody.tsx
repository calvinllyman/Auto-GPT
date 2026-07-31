import Link from "next/link";
import type { ContentDoc } from "@/lib/content";
import type { ReactNode } from "react";

function normalizeNewlines(text: string) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Prefer links and bold before single-asterisk italic
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|_(.+?)_/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(<span key={key++}>{text.slice(last, match.index)}</span>);
    }

    if (match[1] !== undefined) {
      const href = match[2];
      const label = match[1];
      const external = href.startsWith("http");
      nodes.push(
        external ? (
          <a key={key++} href={href} className="font-semibold text-crimson hover:text-crimson-deep">
            {label}
          </a>
        ) : (
          <Link key={key++} href={href} className="font-semibold text-crimson hover:text-crimson-deep">
            {label}
          </Link>
        ),
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-navy">
          {match[3]}
        </strong>,
      );
    } else if (match[4] !== undefined) {
      nodes.push(
        <em key={key++} className="italic">
          {match[4]}
        </em>,
      );
    } else if (match[5] !== undefined) {
      nodes.push(
        <em key={key++} className="italic">
          {match[5]}
        </em>,
      );
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(<span key={key++}>{text.slice(last)}</span>);
  }

  return nodes.length ? nodes : [<span key={0}>{text}</span>];
}

function isUnorderedItem(line: string) {
  return /^[-*]\s+/.test(line.trim());
}

function isOrderedItem(line: string) {
  return /^\d+\.\s+/.test(line.trim());
}

function ListBlock({
  ordered,
  items,
}: {
  ordered: boolean;
  items: string[];
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={`${i}-${item.slice(0, 24)}`} className="flex gap-3 text-navy">
          {ordered ? (
            <span className="mt-0.5 w-5 shrink-0 text-sm font-semibold text-crimson">{i + 1}.</span>
          ) : (
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
          )}
          <span className="text-muted">{renderInline(item)}</span>
        </li>
      ))}
    </Tag>
  );
}

function renderBlock(block: string, index: number) {
  const lines = block.split("\n").map((l) => l.trimEnd());
  const nonEmpty = lines.filter((l) => l.trim().length > 0);

  if (nonEmpty.length && nonEmpty.every(isUnorderedItem)) {
    return (
      <ListBlock
        key={index}
        ordered={false}
        items={nonEmpty.map((line) => line.trim().replace(/^[-*]\s+/, ""))}
      />
    );
  }

  if (nonEmpty.length && nonEmpty.every(isOrderedItem)) {
    return (
      <ListBlock
        key={index}
        ordered
        items={nonEmpty.map((line) => line.trim().replace(/^\d+\.\s+/, ""))}
      />
    );
  }

  // Lead-in paragraph + list in one block
  const firstListIdx = nonEmpty.findIndex((l) => isUnorderedItem(l) || isOrderedItem(l));
  if (firstListIdx > 0) {
    const lead = nonEmpty.slice(0, firstListIdx).join(" ");
    const listLines = nonEmpty.slice(firstListIdx);
    const ordered = listLines.every(isOrderedItem);
    const unordered = listLines.every(isUnorderedItem);
    if (ordered || unordered) {
      return (
        <div key={index} className="space-y-3">
          <p className="text-muted">{renderInline(lead)}</p>
          <ListBlock
            ordered={ordered}
            items={listLines.map((line) =>
              ordered
                ? line.trim().replace(/^\d+\.\s+/, "")
                : line.trim().replace(/^[-*]\s+/, ""),
            )}
          />
        </div>
      );
    }
  }

  if (block.startsWith("## ")) {
    const text = block.replace(/^##\s+/, "").split("\n")[0];
    return (
      <h2 key={index} className="pt-2 font-display text-2xl font-semibold text-navy">
        {renderInline(text)}
      </h2>
    );
  }

  if (block.startsWith("### ")) {
    const text = block.replace(/^###\s+/, "").split("\n")[0];
    return (
      <h3 key={index} className="pt-1 font-display text-xl font-semibold text-navy">
        {renderInline(text)}
      </h3>
    );
  }

  return (
    <p key={index} className="text-muted">
      {renderInline(nonEmpty.join(" "))}
    </p>
  );
}

export function MarkdownBody({ body }: { body: string }) {
  const normalized = normalizeNewlines(body).trim();
  const blocks = normalized.split(/\n\n+/).filter((b) => b.trim().length > 0);

  return (
    <div className="space-y-5 text-base leading-relaxed text-muted">
      {blocks.map((block, index) => renderBlock(block.trim(), index))}
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
