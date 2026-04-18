import type { Metadata } from "next";

import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Werkwijze | Feng Shui Nederland",
  description:
    "Lees hoe Feng Shui Nederland te werk gaat: van kennismaking en analyse tot concreet advies voor meer rust, overzicht en focus.",
  path: "/werkwijze",
  keywords: [
    "werkwijze Feng Shui",
    "Feng Shui advies proces",
    "werkruimte analyse",
  ],
});

export default function WerkwijzePage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold">Werkwijze</h1>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          Praktisch Feng Shui advies voor meer rust, overzicht en focus in je
          werkruimte.
        </p>

        <p className="mt-4 leading-8 text-gray-600">
          Mijn aanpak is rustig, praktisch en duidelijk. Je krijgt geen vage
          theorie, maar concrete inzichten die passen bij jouw ruimte en
          situatie.
        </p>

        <div className="mt-10 space-y-6">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-xl font-semibold">1. Kennismaking</h2>
            <p className="mt-3 leading-7 text-gray-600">
              We beginnen met jouw vraag, je ruimte en wat je wilt verbeteren.
              Zo wordt snel duidelijk waar de meeste winst zit.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-xl font-semibold">2. Analyse</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Ik kijk naar de indeling en energie van de ruimte en waar rust,
              flow en balans versterkt kunnen worden.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-xl font-semibold">3. Advies</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Je ontvangt duidelijke en logische adviezen die je direct kunt
              toepassen in je eigen ruimte.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-xl font-semibold">4. Toepassen</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Met kleine of grotere aanpassingen ontstaat er meer rust,
              overzicht en richting in je werkruimte.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
