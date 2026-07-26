import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { getBrandAssets } from "@/lib/brand-assets";

export const metadata: Metadata = {
  title: "Homes for Heroes",
  description:
    "Calvin Lyman is a Homes for Heroes affiliate helping community heroes save when buying or selling.",
};

export default function HomesForHeroesPage() {
  const brand = getBrandAssets();

  return (
    <ContentPage
      eyebrow="Buy"
      title="Homes for Heroes"
      description="Calvin is an affiliated Homes for Heroes® professional — helping teachers, first responders, medical staff, military, and other community heroes access meaningful savings."
      intro="Homes for Heroes is an existing affiliation, not a separate brand. Heroes still work directly with Calvin under Calvin Lyman Real Estate, with Epic Real Estate in Oklahoma and VIP Realty in Texas."
      points={[
        "Learn whether you qualify as a community hero",
        "Understand Hero Rewards® savings on buying or selling",
        "Get a clear local process for OKC metro transactions",
        "Work with someone who treats the relationship as the product",
      ]}
      links={[
        {
          label: "Official Homes for Heroes site",
          href: "https://www.homesforheroes.com/",
          description: "Program details and national resources.",
        },
        {
          label: "Schedule a hero consult",
          href: "/schedule",
          description: "Ask Calvin how the savings work for your move.",
        },
      ]}
      cta={{ label: "Start a Homes for Heroes conversation", href: "/schedule" }}
    >
      <div className="mt-8">
        <div className="inline-flex rounded-md bg-navy-deep px-5 py-4">
          <Image
            src={brand.homesForHeroes.src}
            alt="Homes for Heroes Affiliate"
            width={320}
            height={90}
            className="h-14 w-auto max-w-[280px] object-contain sm:h-16"
            priority
          />
        </div>
        {!brand.homesForHeroes.isPreferred ? (
          <p className="mt-4 max-w-xl text-sm text-muted">
            Drop your official Homes for Heroes affiliate badge at{" "}
            <code className="text-navy">public/brand/homes-for-heroes.png</code> to replace this
            mark. Until then, this page clearly communicates the affiliation and links to the
            national program.{" "}
            <Link href="https://www.homesforheroes.com/" className="font-semibold text-crimson">
              homesforheroes.com
            </Link>
          </p>
        ) : (
          <p className="mt-4 max-w-xl text-sm text-muted">
            Learn more about the national program at{" "}
            <Link href="https://www.homesforheroes.com/" className="font-semibold text-crimson">
              homesforheroes.com
            </Link>
            .
          </p>
        )}
      </div>
    </ContentPage>
  );
}
