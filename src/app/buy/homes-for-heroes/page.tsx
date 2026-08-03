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
      description="If you serve your community, you may qualify for meaningful savings when you buy or sell."
      intro="Calvin is an affiliated Homes for Heroes® professional. Teachers, first responders, medical staff, military members, and other community heroes can work directly with him to learn whether Hero Rewards® apply to their move."
      points={[
        "Find out if you qualify as a community hero",
        "Understand Hero Rewards® savings on buying or selling",
        "Get a clear local process for OKC metro transactions",
        "Work with an agent who keeps the process personal and organized",
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
          description: "Ask how the savings could work for your move.",
        },
      ]}
      cta={{ label: "Start a Homes for Heroes conversation", href: "/schedule" }}
    >
      <div className="mt-8">
        <div className="inline-flex rounded-md bg-black px-5 py-4">
          <Image
            src={brand.homesForHeroes.src}
            alt="Homes for Heroes Affiliate"
            width={320}
            height={36}
            className="h-auto w-[260px] max-w-full object-contain sm:w-[300px]"
            priority
          />
        </div>
        <p className="mt-4 max-w-xl text-sm text-muted">
          Learn more about the national program at{" "}
          <Link href="https://www.homesforheroes.com/" className="font-semibold text-crimson">
            homesforheroes.com
          </Link>
          .
        </p>
      </div>
    </ContentPage>
  );
}
