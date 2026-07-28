import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Selling Process",
  description: "How Calvin Lyman guides sellers from prep to closing.",
};

export default function SellingProcessPage() {
  return (
    <ContentPage
      eyebrow="Sell"
      title="The selling process"
      description="A straightforward path from first conversation to keys in the buyer’s hand."
      intro="Every sale has details, but the stages stay clear. You’ll know what’s happening at each step so you’re never guessing what comes next."
      points={[
        "Consult and valuation",
        "Prep, repairs, and staging recommendations",
        "Photos, listing launch, and showing strategy",
        "Offers, negotiation, and inspections",
        "Under contract through closing day",
      ]}
      links={[
        {
          label: "Home Valuation",
          href: "/sell/home-valuation",
          description: "Start with your number.",
        },
        {
          label: "Marketing Strategy",
          href: "/sell/marketing",
          description: "See how the listing gets attention.",
        },
      ]}
      cta={{ label: "Start the selling conversation", href: "/schedule" }}
    />
  );
}
