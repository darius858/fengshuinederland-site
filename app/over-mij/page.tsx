import type { Metadata } from "next";

import OverMijContent from "./OverMijContent";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Over mij | Feng Shui Nederland",
  description:
    "Lees meer over de achtergrond van Feng Shui Nederland en de combinatie van praktisch Feng Shui advies met Nine Star Ki inzichten.",
  path: "/over-mij",
  keywords: [
    "over Feng Shui Nederland",
    "Feng Shui professional Nederland",
    "Nine Star Ki begeleider",
  ],
});

export default function OverMijPage() {
  return <OverMijContent />;
}
