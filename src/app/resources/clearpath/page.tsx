import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "The ClearPath System™",
  description:
    "Download The ClearPath System™ — Calvin Lyman’s peace-driven guide to selling your home in the OKC metro.",
};

export default function ClearPathPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="The ClearPath System™"
        description="A complete, peace-driven guide to selling your home in the OKC metro — Calvin’s educational approach to real estate."
      />
      <section className="section-shell grid gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden border border-[var(--line)] bg-navy-deep shadow-[0_24px_60px_rgba(28,45,60,0.18)]">
            <Image
              src="/brand/clearpath-ebook-cover.png"
              alt="The ClearPath System ebook cover by Calvin Lyman"
              fill
              className="object-cover"
              sizes="380px"
              priority
            />
          </div>
          <a
            href="/resources/clearpath-system-ebook.pdf"
            className="mt-6 flex w-full items-center justify-center rounded-md bg-crimson px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-deep"
            download
          >
            Download the free ebook (PDF)
          </a>
          <p className="mt-3 text-center text-xs text-muted">
            First Edition · calvinlymanrealestate.com
          </p>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-muted">
            The ClearPath System™ is how Calvin teaches sellers to move through a transaction with
            clarity instead of chaos — preparation, pricing, presentation, negotiation, and closing
            as one connected path.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            It’s also the educational backbone of his{" "}
            <Link
              href="/resources/homeownership-for-heroes-workshop"
              className="font-semibold text-crimson hover:text-crimson-deep"
            >
              Homeownership for Heroes
            </Link>{" "}
            lunch-and-learns and employee wellness workshops.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-navy">What’s inside</h2>
          <ul className="mt-5 space-y-3">
            {[
              "A calm framework for selling in the OKC metro",
              "Practical steps that reduce stress and surprise",
              "Guidance you can use before you ever list",
              "The same educational approach Calvin brings to hero workshops",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-navy">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-crimson" />
                <span className="leading-relaxed text-muted">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link
              href="/sell/home-valuation"
              className="border border-[var(--line)] bg-white p-5 transition hover:border-crimson/40"
            >
              <p className="font-display font-semibold text-navy">Get a valuation</p>
              <p className="mt-2 text-sm text-muted">
                Start with a planning-range estimate, then refine with Calvin.
              </p>
            </Link>
            <Link
              href="/sell/selling-process"
              className="border border-[var(--line)] bg-white p-5 transition hover:border-crimson/40"
            >
              <p className="font-display font-semibold text-navy">See the selling process</p>
              <p className="mt-2 text-sm text-muted">
                How ClearPath thinking shows up from prep to closing.
              </p>
            </Link>
          </div>

          <div className="mt-12">
            <LeadForm
              type="ebook"
              title="Want the ebook + a personal walkthrough?"
              subtitle="Download above anytime — or leave your details and Calvin will follow up with ClearPath next steps for your situation."
              defaultMessage="I'd like The ClearPath System ebook and help applying it to my home sale."
              submitLabel="Send me ClearPath help"
            />
          </div>
        </div>
      </section>
    </>
  );
}
