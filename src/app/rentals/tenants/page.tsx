import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Tenant Resources",
  description: "Tenant resources for OKC metro renters working with Calvin Lyman.",
};

export default function TenantsPage() {
  return (
    <ContentPage
      eyebrow="Rentals"
      title="Tenant resources"
      description="Checklists and guidance for a smoother rental search and move-in."
      intro="Guides, FAQs, and downloadable checklists will stack here over time as part of the Resources SEO engine."
      points={[
        "What to prepare before you apply",
        "Questions to ask on a showing",
        "Move-in checklist essentials",
      ]}
      links={[
        { label: "Available Rentals", href: "/rentals", description: "Start the search conversation." },
        { label: "Resources", href: "/resources", description: "More guides and articles." },
      ]}
      cta={{ label: "Contact about rentals", href: "/contact" }}
    />
  );
}
