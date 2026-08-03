type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(700px 280px at 20% 0%, rgba(219,57,43,0.35), transparent 60%), linear-gradient(135deg, rgba(28,45,60,0.2), transparent)",
        }}
      />
      <div className="section-shell relative py-14 sm:py-18">
        {eyebrow ? (
          <p className="animate-rise text-xs font-semibold tracking-[0.24em] text-white/70 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-rise-delay-1 mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="animate-rise-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {description}
        </p>
        <div className="accent-line mt-8 h-px w-24 bg-crimson" />
      </div>
    </section>
  );
}
