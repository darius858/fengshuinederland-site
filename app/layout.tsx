import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

import { defaultOgImage, siteName, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Rust, focus en balans`,
    template: `%s | ${siteName}`,
  },
  description:
    "Praktisch Feng Shui advies en Nine Star Ki inzichten voor meer rust, focus en balans in je werkruimte en dagelijks leven.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteName} | Rust, focus en balans`,
    description:
      "Praktisch Feng Shui advies en Nine Star Ki inzichten voor meer rust, focus en balans.",
    url: siteUrl,
    siteName,
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Meer rust, focus en balans met praktisch Feng Shui advies.",
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="flex min-h-screen flex-col bg-[#f8f6f1] text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
