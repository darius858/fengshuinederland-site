import type { Metadata } from "next";

import OmarmJezelfContent from "./OmarmJezelfContent";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Omarm Jezelf | Feng Shui Nederland",
  description:
    "Omarm Jezelf is een warme online cursus waarin je via Nine Star Ki meer zelfinzicht krijgt in je patronen, energie en natuurlijke kracht.",
  path: "/omarm-jezelf",
  keywords: [
    "Omarm Jezelf",
    "Nine Star Ki cursus",
    "zelfinzicht cursus vrouwen",
    "online cursus Nine Star Ki",
  ],
});

export default function OmarmJezelfPage() {
  return <OmarmJezelfContent />;
}
