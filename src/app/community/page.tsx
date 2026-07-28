import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Neighborhood guides, schools, parks, restaurants, HOAs, and local events across the OKC metro.",
};

export default function CommunityPage() {
  return (
    <ContentPage
      eyebrow="Community"
      title="Life around the OKC metro"
      description="Neighborhood guides, restaurants, parks, schools, HOA notes, local events, and business spotlights."
      intro="Exploring where to live is about more than a floor plan. Start with Yukon, Mustang, and Oklahoma City — then ask Calvin about the neighborhoods that fit your day-to-day life."
      points={[
        "Neighborhood guides with real lifestyle context",
        "Schools, parks, and daily-life amenities",
        "HOA patterns to know before you buy",
        "Weekend events and local business spotlights",
      ]}
      links={[
        { label: "Buy a Home", href: "/buy", description: "Match a neighborhood to your goals." },
        { label: "Resources", href: "/resources", description: "Deeper guides and market notes." },
        { label: "About Calvin", href: "/about", description: "Community involvement and story." },
      ]}
      cta={{ label: "Ask about a neighborhood", href: "/contact" }}
    />
  );
}
