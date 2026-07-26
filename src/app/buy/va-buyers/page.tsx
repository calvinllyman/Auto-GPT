import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "VA Buyers",
  description: "VA home buying guidance in the OKC metro with Calvin Lyman.",
};

export default function VaBuyersPage() {
  return (
    <ContentPage
      eyebrow="Buy"
      title="VA buyers"
      description="Use your VA benefit with a clear process — certificate of eligibility through closing."
      intro="Calvin helps veteran and active-duty buyers understand how VA financing fits the homes and neighborhoods they're considering in the OKC metro."
      points={[
        "Confirm eligibility and lender fit early",
        "Identify VA-friendly properties and timelines",
        "Coordinate appraisals, repairs, and negotiation strategy",
        "Pair with Homes for Heroes when you also qualify",
      ]}
      links={[
        { label: "Homes for Heroes", href: "/buy/homes-for-heroes", description: "Additional savings for heroes." },
        { label: "Schedule Consultation", href: "/schedule", description: "Walk through your VA next steps." },
      ]}
      cta={{ label: "Talk VA buying with Calvin", href: "/schedule" }}
    />
  );
}
