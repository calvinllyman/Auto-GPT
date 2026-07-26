import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Rentals",
  description: "Available rentals plus tenant and landlord resources with Calvin Lyman.",
};

export default function RentalsPage() {
  return (
    <ContentPage
      eyebrow="Rentals"
      title="Rentals"
      description="Available rentals, tenant help, and landlord resources — one place for the leasing side of the business."
      intro="Listing inventory can be connected later. For now, reach out if you're looking for a rental or need landlord support in the OKC metro."
      points={[
        "Available rentals feed (coming soon)",
        "Tenant application and move-in guidance",
        "Landlord education and local market context",
      ]}
      links={[
        { label: "Tenant Resources", href: "/rentals/tenants", description: "What renters need to know." },
        { label: "Landlord Resources", href: "/rentals/landlords", description: "Tools for property owners." },
        { label: "Contact Calvin", href: "/contact", description: "Ask about current availability." },
      ]}
      cta={{ label: "Ask about rentals", href: "/contact" }}
    />
  );
}
