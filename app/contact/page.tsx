import type { Metadata } from "next";

import ContactContent from "./ContactContent";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Contact | Feng Shui Nederland",
  description:
    "Plan een gratis intakegesprek met Feng Shui Nederland. Neem contact op voor praktisch Feng Shui advies of een Nine Star Ki consult.",
  path: "/contact",
  keywords: [
    "contact Feng Shui Nederland",
    "gratis intake Feng Shui",
    "Feng Shui consult aanvragen",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
