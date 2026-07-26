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
      intro="This pillar will grow with market notes, checklists, and partner referrals. Start with a conversation if you need help leasing or evaluating a rental property."
      points={[
        "Pricing and days-on-market context",
        "Make-ready priorities that protect rent",
        "When selling may beat holding",
      ]}
      links={[
        { label: "Investors", href: "/buy/investors", description: "Acquisition strategy." },
        { label: "Home Valuation", href: "/sell/home-valuation", description: "Compare hold vs. sell." },
      ]}
      cta={{ label: "Talk landlord strategy", href: "/schedule" }}
    />
  );
}
