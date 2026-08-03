import {
  ResourceIndexPage,
  resourceIndexMetadata,
} from "@/components/ResourceIndexPage";

export const metadata = resourceIndexMetadata(
  "Checklists",
  "Buyer and seller checklists from Calvin Lyman Real Estate for the OKC metro.",
);

export default function ChecklistsIndexPage() {
  return (
    <ResourceIndexPage
      kind="checklist"
      eyebrow="Resources"
      title="Checklists"
      description="Practical lists for first-time buyers, sellers, and anyone preparing for a move."
    />
  );
}
