type CalendlyEmbedProps = {
  url: string;
  title?: string;
};

/** Inline Calendly booking widget. Requires a public Calendly event URL. */
export function CalendlyEmbed({ url, title = "Schedule with Calvin" }: CalendlyEmbedProps) {
  const embedUrl = url.includes("?") ? `${url}&embed_type=Inline` : `${url}?embed_type=Inline`;

  return (
    <div className="overflow-hidden border border-[var(--line)] bg-white">
      <iframe
        src={embedUrl}
        title={title}
        className="h-[720px] w-full"
        loading="lazy"
      />
    </div>
  );
}
