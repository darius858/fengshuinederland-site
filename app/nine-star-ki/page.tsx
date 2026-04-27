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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is Nine Star Ki precies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nine Star Ki is een methode die werkt met energie, karakter en natuurlijke patronen. Het helpt om jezelf beter te begrijpen en meer inzicht te krijgen in gedrag, communicatie en samenwerking.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe wordt mijn Nine Star Ki getal berekend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je getal wordt berekend op basis van je geboortedatum. Daarbij wordt binnen Nine Star Ki gekeken naar een eigen jaarindeling, waardoor het begin van het jaar net anders kan worden benaderd dan in het gewone kalenderjaar.",
      },
    },
    {
      "@type": "Question",
      name: "Waarvoor gebruik je Nine Star Ki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je kunt Nine Star Ki gebruiken voor zelfinzicht, relatievragen, teamontwikkeling, bewustere keuzes en meer begrip voor je eigen energie en levenspatronen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen Feng Shui en Nine Star Ki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Feng Shui kijkt vooral naar de invloed van een ruimte en omgeving. Nine Star Ki richt zich meer op de energie van mensen zelf. Juist de combinatie van die twee geeft vaak veel verdieping.",
      },
    },
  ],
};

export default function NineStarKiPage() {
  return (
    <>
      <Script
        id="nine-star-ki-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="nine-star-ki-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NineStarKiContent />
    </>
  );
}
