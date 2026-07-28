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
      intro="Share your buy box and Calvin can help you evaluate opportunities that match your price range, areas, condition preferences, and return targets."
      points={[
        "Define your buy box: price, area, condition, and return targets",
        "Compare hold vs. flip strategy against current OKC metro conditions",
        "Coordinate with lenders, property managers, and contractors as needed",
      ]}
      links={[
        { label: "Rentals", href: "/rentals", description: "Tenant and landlord resources." },
        { label: "Resources", href: "/resources", description: "Market notes and guides." },
        {
          label: "Schedule Consultation",
          href: "/schedule",
          description: "Share your investment criteria.",
        },
      ]}
      cta={{ label: "Share your investment criteria", href: "/schedule" }}
    />
  );
}
