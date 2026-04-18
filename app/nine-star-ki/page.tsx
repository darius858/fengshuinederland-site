import Script from "next/script";
import type { Metadata } from "next";

import NineStarKiContent from "./NineStarKiContent";
import { createMetadata, siteUrl } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Nine Star Ki | Feng Shui Nederland",
  description:
    "Ontdek wat Nine Star Ki is, hoe deze methode werkt en hoe je meer inzicht krijgt in energie, gedrag en samenwerking.",
  path: "/nine-star-ki",
  keywords: [
    "Nine Star Ki Nederland",
    "Nine Star Ki uitleg",
    "Nine Star Ki calculator",
    "Nine Star Ki consult",
  ],
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nine Star Ki consult",
  provider: {
    "@type": "ProfessionalService",
    name: "Feng Shui Nederland",
    url: siteUrl,
  },
  areaServed: "NL",
  url: `${siteUrl}/nine-star-ki`,
  description:
    "Nine Star Ki consulten en uitleg voor meer inzicht in energie, gedrag en samenwerking.",
};

export default function NineStarKiPage() {
  return (
    <>
      <Script
        id="nine-star-ki-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NineStarKiContent />
    </>
  );
}
