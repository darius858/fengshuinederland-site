import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fengshuinederland.nl",
      lastModified: new Date(),
    },
    {
      url: "https://fengshuinederland.nl/diensten",
      lastModified: new Date(),
    },
    {
      url: "https://fengshuinederland.nl/werkwijze",
      lastModified: new Date(),
    },
    {
      url: "https://fengshuinederland.nl/over-mij",
      lastModified: new Date(),
    },
    {
      url: "https://fengshuinederland.nl/nine-star-ki",
      lastModified: new Date(),
    },
    {
      url: "https://fengshuinederland.nl/contact",
      lastModified: new Date(),
    },
    {
      url: "https://fengshuinederland.nl/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://fengshuinederland.nl/cookies",
      lastModified: new Date(),
    },
  ];
}