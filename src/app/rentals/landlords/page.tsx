import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Landlord Resources",
  description: "Landlord resources and rental guidance from Calvin Lyman.",
};

export default function LandlordsPage() {
  return (
    <ContentPage
      eyebrow="Rentals"
      title="Landlord resources"
      description="Practical support for owners who want reliable tenants and clearer local intel."
      intro="If you need help leasing a property or deciding whether to hold or sell, start with a conversation. Calvin can help you weigh pricing, make-ready priorities, and timing."
      points={[
        "Pricing and days-on-market context",
        "Make-ready priorities that protect rent",
        "When selling may beat holding",
      ]}
      links={[
        { label: "Investors", href: "/buy/investors", description: "Acquisition strategy." },
        {
          label: "Home Valuation",
          href: "/sell/home-valuation",
          description: "Compare hold vs. sell.",
        },
      ]}
      cta={{ label: "Talk landlord strategy", href: "/schedule" }}
    />
  );
}
