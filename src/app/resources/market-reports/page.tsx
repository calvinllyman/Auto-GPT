import {
  ResourceIndexPage,
  resourceIndexMetadata,
} from "@/components/ResourceIndexPage";

export const metadata = resourceIndexMetadata(
  "Market Reports",
  "OKC metro market report primers and snapshots from Calvin Lyman Real Estate.",
);

export default function MarketReportsIndexPage() {
  return (
    <ResourceIndexPage
      kind="market-report"
      eyebrow="Resources"
      title="Market reports"
      description="Context for inventory, prices, and timing — use reports as a guide, not a verdict."
    />
  );
}
