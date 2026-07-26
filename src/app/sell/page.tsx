import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Sell Your Home",
  description: "Home valuation, selling process, and marketing strategy with Calvin Lyman.",
};

export default function SellPage() {
  return (
    <ContentPage
      eyebrow="Sell"
      title="Sell with a plan, not a hope."
      description="Pricing, preparation, and marketing that put your home in front of the right buyers."
      intro="Selling well starts with a clear valuation and a marketing plan that matches your timeline. Calvin keeps the process personal and the communication direct."
      points={[
        "Data-informed pricing for Yukon, Mustang, OKC, and nearby markets",
        "Preparation guidance before photos and showings",
        "Listing marketing that points buyers back to CalvinLymanRealEstate.com",
      ]}
      links={[
        {
          label: "Home Valuation",
          href: "/sell/home-valuation",
          description: "Request a personal pricing conversation.",
        },
        {
          label: "Selling Process",
          href: "/sell/selling-process",
          description: "See what happens from listing to closing.",
        },
        {
          label: "Marketing Strategy",
          href: "/sell/marketing",
          description: "How your home gets attention that converts.",
        },
        {
          label: "Recent Sales",
          href: "/sell/recent-sales",
          description: "Proof points and local results (coming soon).",
        },
      ]}
      cta={{ label: "Request a home valuation", href: "/sell/home-valuation" }}
    />
  );
}
