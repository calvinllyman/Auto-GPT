import {
  ResourceIndexPage,
  resourceIndexMetadata,
} from "@/components/ResourceIndexPage";

export const metadata = resourceIndexMetadata(
  "Guides",
  "Plain-English real estate guides for buyers, sellers, and community heroes in the OKC metro.",
);

export default function GuidesIndexPage() {
  return (
    <ResourceIndexPage
      kind="guide"
      eyebrow="Resources"
      title="Guides"
      description="Straightforward explainers you can use before you tour, list, or close."
    />
  );
}
