import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Buy a Home",
  description:
    "Home search guidance for first-time buyers, VA buyers, investors, and Homes for Heroes across the OKC metro.",
};

export default function BuyPage() {
  return (
    <ContentPage
      eyebrow="Buy"
      title="Find the right home — with a clear plan."
      description="Whether you’re buying your first place, using VA benefits, investing, or qualifying through Homes for Heroes, you’ll move with confidence."
      intro="Tell Calvin what you’re looking for — budget, timeline, and neighborhoods — and he’ll help you build a practical search plan for the OKC metro."
      points={[
        "OKC metro focus: Yukon, Mustang, Oklahoma City, and surrounding communities",
        "Guidance for financing conversations, offer strategy, and inspections",
        "Special pathways for veterans, heroes, and investors",
      ]}
      links={[
        {
          label: "First-Time Buyer Guide",
          href: "/buy/first-time-buyers",
          description: "A practical starting point before you tour.",
        },
        {
          label: "Homes for Heroes",
          href: "/buy/homes-for-heroes",
          description: "Savings and support for community heroes.",
        },
        {
          label: "VA Buyers",
          href: "/buy/va-buyers",
          description: "Use your benefits with a clear process.",
        },
        {
          label: "Investors",
          href: "/buy/investors",
          description: "Cash flow, value-add, and local market intel.",
        },
        {
          label: "Schedule Consultation",
          href: "/schedule",
          description: "Share what you’re looking for.",
        },
      ]}
      cta={{ label: "Talk with Calvin about buying", href: "/schedule" }}
    />
  );
}
