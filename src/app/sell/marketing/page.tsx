import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Marketing Strategy",
  description: "Listing marketing strategy from Calvin Lyman Real Estate.",
};

export default function MarketingPage() {
  return (
    <ContentPage
      eyebrow="Sell"
      title="Marketing that creates conversations"
      description="Beautiful listing content only matters if it leads to showings and offers."
      intro="Your listing gets professional visuals, targeted exposure, and follow-up so interested buyers don’t go cold — and every conversation stays connected to Calvin."
      points={[
        "Professional visuals and property storytelling",
        "Targeted distribution across social and local channels",
        "Follow-up systems so interested buyers don’t go cold",
        "Consistent branding that builds trust before the first tour",
      ]}
      links={[
        {
          label: "Recent Sales",
          href: "/sell/recent-sales",
          description: "See local results and stories.",
        },
        {
          label: "Schedule Consultation",
          href: "/schedule",
          description: "Talk through your launch plan.",
        },
      ]}
      cta={{ label: "Plan your listing launch", href: "/schedule" }}
    />
  );
}
