import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fengshuinederland.nl"),
  title: {
    default: "Feng Shui Nederland | Rust, focus en balans",
    template: "%s | Feng Shui Nederland",
  },
  description:
    "Praktisch Feng Shui advies en Nine Star Ki inzichten voor meer rust, focus en balans in je werkruimte en dagelijks leven.",
  keywords: [
    "Feng Shui Nederland",
    "Feng Shui advies",
    "Feng Shui werkruimte",
    "Feng Shui kantoor",
    "Nine Star Ki",
    "Nine Star Ki calculator",
    "rust focus balans",
    "werkplek verbeteren",
  ],
  openGraph: {
    title: "Feng Shui Nederland | Rust, focus en balans",
    description:
      "Praktisch Feng Shui advies en Nine Star Ki inzichten voor meer rust, focus en balans.",
    url: "https://fengshuinederland.nl",
    siteName: "Feng Shui Nederland",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Feng Shui Nederland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feng Shui Nederland",
    description:
      "Meer rust, focus en balans met praktisch Feng Shui advies.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col bg-[#f8f6f1] text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}