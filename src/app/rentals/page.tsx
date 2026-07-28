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
      description="Looking for a place to rent — or support as a landlord? Start here."
      intro="Reach out if you’re searching for a rental or need landlord support in the OKC metro. Calvin can help you understand options and next steps."
      points={[
        "Ask about current rental availability",
        "Tenant application and move-in guidance",
        "Landlord education and local market context",
      ]}
      links={[
        {
          label: "Tenant Resources",
          href: "/rentals/tenants",
          description: "What renters need to know.",
        },
        {
          label: "Landlord Resources",
          href: "/rentals/landlords",
          description: "Tools for property owners.",
        },
        {
          label: "Contact Calvin",
          href: "/contact",
          description: "Ask about current availability.",
        },
      ]}
      cta={{ label: "Ask about rentals", href: "/contact" }}
    />
  );
}
