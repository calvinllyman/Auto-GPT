import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Investors",
  description: "OKC metro real estate investing support with Calvin Lyman.",
};

export default function InvestorsPage() {
  return (
    <ContentPage
      eyebrow="Buy"
      title="Investor insight"
      description="Local deal flow, rental demand, and practical numbers — not hype."
      intro="Investor content and recurring 'Investor Insight' updates will live here and in Resources. Start with a consult if you want Calvin watching for opportunities that match your criteria."
      points={[
        "Define buy box: price, area, condition, and return targets",
        "Compare hold vs. flip strategy against current OKC metro conditions",
        "Coordinate with lenders, property managers, and contractors as needed",
      ]}
      links={[
        { label: "Rentals", href: "/rentals", description: "Tenant and landlord resources." },
        { label: "Resources", href: "/resources", description: "Market notes and guides." },
        { label: "Schedule Consultation", href: "/schedule", description: "Share your buy box." },
      ]}
      cta={{ label: "Share your investment criteria", href: "/schedule" }}
    />
  );
}
