import type { MetadataRoute } from "next";
import { getContentByKind } from "@/lib/content";
import { contentHref } from "@/components/ContentBody";

const base = "https://calvinlymanrealestate.com";

const staticPaths = [
  "/",
  "/buy",
  "/buy/first-time-buyers",
  "/buy/homes-for-heroes",
  "/buy/va-buyers",
  "/buy/investors",
  "/sell",
  "/sell/home-valuation",
  "/sell/selling-process",
  "/sell/marketing",
  "/sell/recent-sales",
  "/rentals",
  "/rentals/tenants",
  "/rentals/landlords",
  "/resources",
  "/resources/guides",
  "/resources/checklists",
  "/resources/faqs",
  "/resources/market-reports",
  "/resources/videos",
  "/community",
  "/community/events",
  "/community/businesses",
  "/about",
  "/contact",
  "/schedule",
  "/start",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const contentKinds = [
    "neighborhood",
    "event",
    "business",
    "guide",
    "faq",
    "checklist",
    "market-report",
  ] as const;

  const contentEntries = contentKinds.flatMap((kind) =>
    getContentByKind(kind).map((doc) => ({
      url: `${base}${contentHref(doc)}`,
      lastModified: doc.date ? new Date(doc.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...contentEntries,
  ];
}
