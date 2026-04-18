import type { Metadata } from "next";

import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Cookieverklaring | Feng Shui Nederland",
  description:
    "Lees welke cookies Feng Shui Nederland gebruikt en hoe je cookie-instellingen kunt beheren of uitschakelen.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
          Cookieverklaring
        </p>

        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          Cookieverklaring Feng Shui Nederland
        </h1>

        <p className="mt-6 leading-8 text-gray-600">
          Op deze website wordt gebruikgemaakt van cookies. Cookies zijn kleine
          tekstbestanden die op je apparaat worden opgeslagen om de website goed
          te laten functioneren en om inzicht te krijgen in het gebruik van de site.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Welke cookies worden gebruikt</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Feng Shui Nederland gebruikt voornamelijk functionele en beperkte
            analytische cookies:
          </p>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              Functionele cookies: noodzakelijk voor het correct functioneren van
              de website.
            </li>
            <li>
              Analytische cookies: om inzicht te krijgen in het gebruik van de
              website en deze te verbeteren.
            </li>
            <li>
              Cookies van externe diensten: bijvoorbeeld via formulieren of
              tools zoals MailerLite.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Waarom cookies worden gebruikt</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Cookies helpen om de website goed te laten werken en om inzicht te
            krijgen in hoe bezoekers de website gebruiken. Op basis daarvan kan
            de website worden verbeterd en beter worden afgestemd op bezoekers.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Cookies beheren of uitschakelen</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Je kunt cookies altijd zelf beheren of verwijderen via de instellingen
            van je browser. Houd er rekening mee dat de website mogelijk minder
            goed werkt wanneer cookies worden uitgeschakeld.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Wijzigingen</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Deze cookieverklaring kan worden aangepast. De meest actuele versie is
            altijd op deze pagina te vinden.
          </p>
        </section>
      </div>
    </main>
  );
}
