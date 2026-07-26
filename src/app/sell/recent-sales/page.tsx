import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Recent Sales",
  description: "Recent sales and transaction stories from Calvin Lyman.",
};

export default function RecentSalesPage() {
  return (
    <ContentPage
      eyebrow="Sell"
      title="Recent sales"
      description="Closed transactions and behind-the-closing stories will live here."
      intro="This section is ready for real sold comps, photos, and short case studies. Until those are added, request a valuation for current local examples relevant to your property."
      points={[
        "Sold property highlights",
        "Neighborhood context",
        "What made the difference in marketing or negotiation",
      ]}
      links={[
        { label: "Home Valuation", href: "/sell/home-valuation", description: "Get pricing for your home." },
        { label: "About Calvin", href: "/about", description: "Learn who you're hiring." },
      ]}
      cta={{ label: "Request a valuation", href: "/sell/home-valuation" }}
    />
  );
}
