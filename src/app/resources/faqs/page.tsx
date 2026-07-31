import {
  ResourceIndexPage,
  resourceIndexMetadata,
} from "@/components/ResourceIndexPage";

export const metadata = resourceIndexMetadata(
  "FAQs",
  "Frequently asked questions about buying and selling in the OKC metro.",
);

export default function FaqsIndexPage() {
  return (
    <ResourceIndexPage
      kind="faq"
      eyebrow="Resources"
      title="FAQs"
      description="Clear answers that help you decide what to do next — then talk with Calvin when you’re ready."
    />
  );
}
