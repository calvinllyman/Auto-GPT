import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getBrandAssets } from "@/lib/brand-assets";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Calvin",
  description:
    "Meet Calvin Lyman — OKC metro Realtor, Homes for Heroes affiliate, licensed in Oklahoma and Texas.",
};

const story = [
  "For me, real estate is about much more than buying and selling property. It is about helping people make confident decisions during some of life’s biggest transitions.",
  "I serve buyers and sellers throughout the Oklahoma City metro, with a focus on residential real estate. Whether someone is purchasing their first home, preparing to sell, relocating, or navigating an unexpected change, my goal is to make the process feel clear, organized, and personal.",
  "Although I am early in my real estate career, I bring years of experience in communication, technology, problem-solving, and helping people navigate complicated situations. I believe clients deserve an agent who listens carefully, explains each step, follows through, and treats their goals as more than just another transaction.",
  "My faith is central to who I am and how I serve others. My wife, Abby, and I are actively involved in our local church and in Celebrate Recovery, a Christ-centered ministry that helps people find healing, freedom, and hope. Those experiences have taught me the value of honesty, compassion, accountability, and meeting people wherever they are.",
  "Outside of real estate, I enjoy spending time with Abby and our children, serving in our church, reading, writing, and finding new ways to support families in our community.",
  "I would be honored to help you take the next step toward buying, selling, or finding a place to call home.",
];

export default function AboutPage() {
  const brand = getBrandAssets();

  return (
    <>
      <PageHero
        eyebrow="About Calvin"
        title="Helping people make confident decisions."
        description="Real estate with clarity, follow-through, and a personal guide in your corner across the OKC metro."
      />
      <section className="section-shell grid gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden bg-navy">
          {brand.headshot.exists ? (
            <Image
              src={brand.headshot.src}
              alt="Calvin Lyman, Realtor"
              fill
              className="object-cover object-top"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(160deg,#2d465c,#1c2d3c)] p-8 text-center text-white">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/30 bg-white/10 font-display text-4xl font-bold">
                CL
              </div>
              <p className="mt-6 font-display text-2xl font-bold">Calvin Lyman</p>
              <p className="mt-2 text-sm tracking-[0.2em] text-white/70 uppercase">Realtor</p>
            </div>
          )}
        </div>

        <div>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {story.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
              Affiliations
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              When you work with Calvin, you’re supported by {site.brokerages.oklahoma.name} in
              Oklahoma and {site.brokerages.texas.name} in Texas, with Homes for Heroes available when
              you qualify.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex h-14 items-center rounded-md border border-[var(--line)] bg-white px-3 py-2">
                <Image
                  src={brand.epic.src}
                  alt="Epic Real Estate"
                  width={120}
                  height={72}
                  className="h-10 w-auto object-contain"
                />
              </div>
              {brand.vip.exists ? (
                <div className="flex h-14 items-center rounded-md bg-black px-3 py-2">
                  <Image
                    src={brand.vip.src}
                    alt="VIP Realty"
                    width={200}
                    height={56}
                    className="h-9 w-auto max-w-[200px] object-contain"
                  />
                </div>
              ) : null}
              <Link
                href="/buy/homes-for-heroes"
                className="inline-flex h-14 items-center rounded-md bg-black px-4 py-2"
              >
                <Image
                  src={brand.homesForHeroes.src}
                  alt="Homes for Heroes Affiliate"
                  width={280}
                  height={32}
                  className="h-auto w-[200px] object-contain"
                />
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/schedule"
              className="rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white hover:bg-crimson-deep"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:border-crimson hover:text-crimson"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
