import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ReelGallery } from "@/components/ReelGallery";
import { reels } from "@/lib/reels";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Bite-sized educational real estate reels from Calvin Lyman — tips for buyers, sellers, and the OKC metro.",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Educational reels"
        description="Short, practical real estate tips you can watch in a minute or two — then take the next step when you’re ready."
      />
      <section className="section-shell py-14">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            These are the same style of bite-sized lessons Calvin shares on Facebook — gathered here
            so you can revisit them anytime.
          </p>
          <Link
            href="/schedule"
            className="inline-flex shrink-0 rounded-md bg-crimson px-5 py-3 text-sm font-semibold text-white hover:bg-crimson-deep"
          >
            Schedule a consultation
          </Link>
        </div>
        <ReelGallery reels={reels} />
      </section>
    </>
  );
}
