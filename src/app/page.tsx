import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { getBrandAssets } from "@/lib/brand-assets";
import { site } from "@/lib/site";

const pillars = [
  {
    title: "Buy with clarity",
    copy: "Whether you’re buying your first home, using VA benefits, investing, or exploring Homes for Heroes savings — you’ll get a clear plan and practical next steps.",
    href: "/buy",
  },
  {
    title: "Sell with strategy",
    copy: "From pricing to preparation to marketing, you’ll have a plan built around one goal: the right buyer at the right number.",
    href: "/sell",
  },
  {
    title: "Know the community",
    copy: "Explore Yukon, Mustang, Oklahoma City, and the neighborhoods that fit the way you actually want to live.",
    href: "/community",
  },
];

const destinations = [
  { label: "Schedule a consultation", href: "/schedule" },
  { label: "Get a home valuation", href: "/sell/home-valuation" },
  { label: "Homes for Heroes", href: "/buy/homes-for-heroes" },
  { label: "Watch educational reels", href: "/resources/videos" },
  { label: "Browse resources", href: "/resources" },
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
            Buying, selling, and investing across Yukon, Mustang, and Oklahoma City — with licensed
            help in Oklahoma and Texas.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/schedule"
              className="rounded-md bg-crimson px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-deep"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/buy"
              className="rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Search Homes
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
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
            Whether you’re buying, selling, or investing, you’ll work directly with Calvin — supported
            by {site.brokerages.oklahoma.name}, {site.brokerages.texas.name}, and Homes for Heroes when
            those programs fit your goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group border-t-2 border-crimson/80 pt-5 transition hover:border-crimson"
              style={{ transitionDelay: `${index * 40}ms` }}
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
          Bite-sized real estate lessons covering buying, selling, and local market basics — the same
          style of short videos Calvin shares on Facebook.
        </p>
      </section>

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-crimson uppercase">About Calvin</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy">
            A Realtor who stays with you.
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
              with Texas transactions through {site.brokerages.texas.name}. You’ll get clear
              communication, practical guidance, and a real person to call.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-semibold text-crimson hover:text-crimson-deep"
          >
            Meet Calvin →
          </Link>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border border-[var(--line)] bg-mist/60 p-5">
              <p className="font-display text-sm font-semibold text-navy">Office</p>
              <p className="mt-2 text-sm text-muted">{site.address.full}</p>
            </div>
            <div className="border border-[var(--line)] bg-mist/60 p-5">
              <p className="font-display text-sm font-semibold text-navy">Direct</p>
              <p className="mt-2 text-sm text-muted">
                <a href={site.phoneHref} className="hover:text-crimson">
                  {site.phone}
                </a>
                <br />
                <a href={site.emailHref} className="hover:text-crimson">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <LeadForm
          type="consultation"
          title="Schedule a consultation"
          subtitle="Tell Calvin what you’re working on. You’ll get a personal follow-up — and market updates if you’d like them."
          submitLabel="Request consultation"
        />
      </section>
    </>
  );
}
