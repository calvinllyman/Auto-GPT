import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { getBrandAssets } from "@/lib/brand-assets";
import { site } from "@/lib/site";

const pillars = [
  {
    title: "Buy with clarity",
    copy: "First home, VA benefits, investing, or Homes for Heroes savings — you’ll get a clear plan and practical next steps.",
    href: "/buy",
  },
  {
    title: "Sell with ClearPath",
    copy: "The ClearPath System™ walks sellers through preparation, pricing, and closing with less stress and more confidence.",
    href: "/resources/clearpath",
  },
  {
    title: "Know the community",
    copy: "Explore Yukon, Mustang, Oklahoma City, and the neighborhoods that fit the way you actually want to live.",
    href: "/community",
  },
];

const destinations = [
  { label: "Download The ClearPath System™", href: "/resources/clearpath" },
  { label: "Book a Homeownership for Heroes workshop", href: "/resources/homeownership-for-heroes-workshop" },
  { label: "Schedule a consultation", href: "/schedule" },
  { label: "Get a home valuation", href: "/sell/home-valuation" },
  { label: "Homes for Heroes savings", href: "/buy/homes-for-heroes" },
  { label: "Browse all resources", href: "/resources" },
];

export default function HomePage() {
  const brand = getBrandAssets();

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-navy-deep text-white">
        <Image
          src="/brand/hero-okc.jpg"
          alt="Oklahoma City metro home exterior at dusk"
          fill
          priority
          className="hero-media object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(28,45,60,0.92)_0%,rgba(28,45,60,0.72)_46%,rgba(28,45,60,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep/80 to-transparent" />

        <div className="section-shell relative flex min-h-[92vh] flex-col justify-end pb-16 pt-28 sm:pb-20">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.35em] text-white/80 uppercase sm:text-base">
            Calvin Lyman Real Estate
          </p>
          <h1 className="animate-rise-delay-1 mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {site.tagline}
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Education-first guidance for the OKC metro — powered by The ClearPath System™ and
            Homeownership for Heroes workshops.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/resources/clearpath"
              className="rounded-md bg-crimson px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-deep"
            >
              Get the ClearPath ebook
            </Link>
            <Link
              href="/resources/homeownership-for-heroes-workshop"
              className="rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Book a workshop
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white">
        <div className="section-shell grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Link
            href="/resources/clearpath"
            className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden border border-[var(--line)] bg-navy-deep shadow-[0_24px_60px_rgba(28,45,60,0.16)] transition hover:shadow-[0_28px_70px_rgba(28,45,60,0.22)]"
          >
            <Image
              src="/brand/clearpath-ebook-cover.png"
              alt="The ClearPath System ebook cover"
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
          </Link>
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-crimson uppercase">
              The ClearPath System™
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              A peace-driven guide to selling your home.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              ClearPath is Calvin’s educational approach to real estate — the same framework behind
              his seller guidance and Homeownership for Heroes lunch-and-learns. Download the free
              First Edition ebook and move forward with a clearer plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resources/clearpath-system-ebook.pdf"
                className="rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-deep"
                download
              >
                Download free ebook
              </a>
              <Link
                href="/resources/clearpath"
                className="rounded-md border border-[var(--line)] px-5 py-3 text-sm font-semibold text-navy transition hover:border-crimson/40"
              >
                Learn about ClearPath
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-crimson uppercase">
              Homeownership for Heroes
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-navy sm:text-4xl">
              Free workshops for employees — education, not a sales pitch.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Bring Calvin to your organization for a 30-, 45-, or 60-minute financial wellness
              session on credit, loans, the buying process, and Homes for Heroes savings for
              eligible teachers, first responders, healthcare pros, and military members.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Lunch & learn friendly",
                "In-person or virtual",
                "No cost to your organization",
                "ClearPath-aligned teaching",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-navy">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resources/homeownership-for-heroes-workshop"
                className="rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
              >
                Schedule a workshop
              </Link>
              <Link
                href="/buy/homes-for-heroes"
                className="rounded-md border border-[var(--line)] px-5 py-3 text-sm font-semibold text-navy transition hover:border-crimson/40"
              >
                Homes for Heroes savings
              </Link>
            </div>
          </div>
          <div className="border border-[var(--line)] bg-mist/40 p-6 sm:p-8">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-navy uppercase">
              Popular format
            </p>
            <p className="mt-3 font-display text-2xl font-bold text-navy">45-minute lunch & learn</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Perfect for employee wellness programming. Calvin provides the presentation, handouts,
              Q&A, and follow-up resources — you provide the room (or Zoom link) and the invite.
            </p>
            <p className="mt-6 text-sm italic text-muted">
              “Helping local heroes and families build a stronger future through education and
              informed homeownership.”
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-[var(--line)] py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-crimson uppercase">
              How can Calvin help?
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-navy sm:text-4xl">
              One trusted guide for every step of your move.
            </h2>
          </div>
          <p className="max-w-md text-muted leading-relaxed">
            Whether you’re buying, selling, or investing, you’ll work directly with Calvin —
            supported by {site.brokerages.oklahoma.name}, {site.brokerages.texas.name}, and Homes for
            Heroes when those programs fit your goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group border-t-2 border-crimson/80 pt-5 transition hover:border-crimson"
            >
              <h3 className="font-display text-xl font-semibold text-navy group-hover:text-crimson">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white">
        <div className="section-shell grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden">
            <Image
              src="/brand/community.jpg"
              alt="Welcoming Oklahoma neighborhood home"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-crimson uppercase">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">
              Choose your next step.
            </h2>
            <ul className="mt-8 space-y-4">
              {destinations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-[var(--line)] py-3 text-navy transition hover:text-crimson"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-crimson uppercase">
              Educational reels
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">
              Quick tips you can watch anytime.
            </h2>
          </div>
          <Link
            href="/resources/videos"
            className="text-sm font-semibold text-crimson hover:text-crimson-deep"
          >
            See all videos →
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Bite-sized lessons that pair with ClearPath teaching — buying, selling, and local market
          basics in the same style Calvin shares on Facebook.
        </p>
      </section>

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-crimson uppercase">About Calvin</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy">
            A Realtor who teaches as he guides.
          </h2>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
            {brand.headshot.exists ? (
              <div className="relative h-36 w-36 shrink-0 overflow-hidden bg-navy">
                <Image
                  src={brand.headshot.src}
                  alt="Calvin Lyman, Realtor"
                  fill
                  className="object-cover object-top"
                />
              </div>
            ) : null}
            <p className="leading-relaxed text-muted">
              Calvin helps buyers and sellers across the OKC metro through {site.brokerages.oklahoma.name},
              with Texas transactions through {site.brokerages.texas.name}. Through ClearPath and
              Homeownership for Heroes workshops, education comes first — then the right next step.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-semibold text-crimson hover:text-crimson-deep"
          >
            Meet Calvin →
          </Link>
        </div>

        <LeadForm
          type="consultation"
          title="Schedule a consultation"
          subtitle="Tell Calvin what you’re working on — selling with ClearPath, buying as a hero, or booking a workplace workshop."
          submitLabel="Request consultation"
        />
      </section>
    </>
  );
}
