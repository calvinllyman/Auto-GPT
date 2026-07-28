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
      description="Closed transactions and neighborhood results will be featured here."
      intro="Looking for examples relevant to your home? Request a valuation and Calvin will walk you through current local comps and recent activity in your area."
      points={[
        "Sold property highlights",
        "Neighborhood context",
        "What made the difference in marketing or negotiation",
      ]}
      links={[
        {
          label: "Home Valuation",
          href: "/sell/home-valuation",
          description: "Get pricing for your home.",
        },
        {
          label: "About Calvin",
          href: "/about",
          description: "Learn who you’re hiring.",
        },
      ]}
      cta={{ label: "Request a valuation", href: "/sell/home-valuation" }}
    />
  );
}
