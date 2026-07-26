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

export default function AboutPage() {
  const brand = getBrandAssets();

  return (
    <>
      <PageHero
        eyebrow="About Calvin"
        title="Trust is built in the story."
        description="Why Calvin became a Realtor, how he works, and the community he serves across Oklahoma and Texas."
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
              <p className="mt-6 max-w-xs text-sm text-white/65">
                Add <code className="text-white">public/brand/calvin-headshot.jpg</code> to display
                your professional photo here.
              </p>
            </div>
          )}
        </div>

        <div>
          <p className="text-lg leading-relaxed text-muted">
            People hire people more than they hire brokerages. Calvin Lyman Real Estate is the one
            brand every card, QR code, social profile, and conversation should point to — with{" "}
            {site.brokerages.oklahoma.name} in Oklahoma and {site.brokerages.texas.name} in Texas
            as the brokerage affiliations behind the license.
          </p>

          <div className="mt-10 space-y-8">
            {[
              {
                title: "Philosophy",
                copy: "Clear communication, practical guidance, and next steps that respect your timeline. The website is the headquarters; the relationship is the business.",
              },
              {
                title: "Community",
                copy: "Rooted in the OKC metro — Yukon, Mustang, Oklahoma City, and the neighborhoods where families actually live their weeks.",
              },
              {
                title: "Homes for Heroes",
                copy: "An existing affiliation helping community heroes access savings when they buy or sell — under the same personal brand.",
              },
              {
                title: "Celebrate Recovery",
                copy: "Leadership and community involvement belong on this page. Share the details you want public, and we'll place them with the same care as the rest of your story.",
              },
            ].map((block) => (
              <div key={block.title} className="border-t border-[var(--line)] pt-5">
                <h2 className="font-display text-xl font-semibold text-navy">{block.title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{block.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-6">
            <Image
              src={brand.epic.src}
              alt="Epic Real Estate"
              width={140}
              height={72}
              className="h-14 w-auto max-w-[140px] object-contain"
            />
            <Link
              href="/buy/homes-for-heroes"
              className="inline-flex rounded-md bg-navy-deep px-4 py-3"
            >
              <Image
                src={brand.homesForHeroes.src}
                alt="Homes for Heroes Affiliate"
                width={180}
                height={48}
                className="h-9 w-auto max-w-[180px] object-contain"
              />
            </Link>
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
