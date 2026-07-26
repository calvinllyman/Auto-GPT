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
      title="Marketing that points home"
      description="Beautiful listing content is only useful if it creates conversations and showings."
      intro="Calvin's broader content engine — YouTube, social, Google Business, and this website — supports every listing. Buyers are always directed back to CalvinLymanRealEstate.com."
      points={[
        "Professional visuals and property storytelling",
        "Targeted distribution across social and local channels",
        "Follow-up systems so interested buyers don't go cold",
        "Consistent branding that builds trust before the first tour",
      ]}
      links={[
        { label: "Recent Sales", href: "/sell/recent-sales", description: "Results and stories coming soon." },
        { label: "Schedule Consultation", href: "/schedule", description: "Talk through your launch plan." },
      ]}
      cta={{ label: "Plan your listing launch", href: "/schedule" }}
    />
  );
}
