import type { Metadata } from "next";

import DienstenContent from "./DienstenContent";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Diensten | Feng Shui Nederland",
  description:
    "Bekijk de Feng Shui diensten van Feng Shui Nederland: online sessies, bedrijfsadvies en workshops voor meer rust, focus en overzicht in je werkruimte.",
  path: "/diensten",
  keywords: [
    "Feng Shui diensten",
    "Feng Shui bedrijfsadvies",
    "online Feng Shui sessie",
    "Feng Shui workshop",
  ],
});

export default function DienstenPage() {
  return <DienstenContent />;
}
