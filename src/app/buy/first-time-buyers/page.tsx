import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "First-Time Buyer Guide",
  description: "A clear first-time buyer path for the OKC metro with Calvin Lyman.",
};

export default function FirstTimeBuyersPage() {
  return (
    <ContentPage
      eyebrow="Buy"
      title="First-time buyer guide"
      description="Buying your first home shouldn’t feel confusing. Here’s a clear path you can follow."
      intro="Request the guide below and Calvin will send it to you, along with optional market updates if you’d like to stay in the loop."
      points={[
        "Get pre-approved before you fall in love with a house",
        "Define must-haves vs. nice-to-haves for OKC metro living",
        "Understand earnest money, inspections, and closing costs",
        "Know what a competitive offer looks like in your price range",
      ]}
      links={[
        {
          label: "Schedule a buyer consult",
          href: "/schedule",
          description: "Map your timeline and budget.",
        },
        {
          label: "Homes for Heroes",
          href: "/buy/homes-for-heroes",
          description: "See if you qualify for hero savings.",
        },
      ]}
    >
      <div className="mt-10 max-w-xl">
        <LeadForm
          type="buyer-guide"
          title="Get the First-Time Buyer Guide"
          subtitle="Leave your details and Calvin will send the guide, plus optional market updates."
          submitLabel="Send me the guide"
        />
      </div>
    </ContentPage>
  );
}
