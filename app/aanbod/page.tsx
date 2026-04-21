import type { Metadata } from "next";

import { createMetadata } from "../seo";

const modules = [
  "Welkom in de wereld van Nine Star Ki",
  "De taal van energie",
  "Jouw hoofdgetal",
  "Jouw binnenwereld",
  "Jouw kracht en valkuilen",
  "Jij in relatie tot anderen",
  "Omarm wie je bent",
];

export const metadata: Metadata = createMetadata({
  title: "Aanbod | Feng Shui Nederland",
  description:
    "Bekijk het aanbod van Feng Shui Nederland: diensten, cursussen en producten voor meer rust, inzicht en balans.",
  path: "/aanbod",
  keywords: [
    "Feng Shui aanbod",
    "Nine Star Ki cursus",
    "Feng Shui producten",
    "Omarm Jezelf cursus",
  ],
});

export default function AanbodPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Aanbod
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Voor meer rust, zelfinzicht en praktische verdieping
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hier vind je het groeiende aanbod van Feng Shui Nederland. Van
            persoonlijke diensten en online cursussen tot producten die je
            helpen om bewuster te leven en te werken.
          </p>
        </div>

        <section className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
              Diensten
            </p>

            <h2 className="mt-4 text-2xl font-semibold">Praktisch advies</h2>

            <p className="mt-5 leading-8 text-gray-600">
              Feng Shui advies, online sessies en workshops die gericht zijn op
              meer rust, focus en balans in je werkruimte en dagelijks leven.
            </p>

            <div className="mt-8">
              <a
                href="/diensten"
                className="inline-flex rounded-full bg-[#c57b57] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
              >
                Bekijk diensten
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
              Cursussen
            </p>

            <h2 className="mt-4 text-2xl font-semibold">Omarm Jezelf</h2>

            <p className="mt-3 text-lg text-[#8a5a3b]">
              Leer jezelf begrijpen met Nine Star Ki
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Een warme, toegankelijke online cursus voor vrouwen die meer
              zelfinzicht willen, hun patronen beter willen begrijpen en met
              meer zachtheid naar zichzelf willen leren kijken.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-[#c57b57] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
              >
                Meld je interesse
              </a>

              <a
                href="/nine-star-ki"
                className="rounded-full border border-[#c57b57] px-6 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Meer over Nine Star Ki
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
              Producten
            </p>

            <h2 className="mt-4 text-2xl font-semibold">Binnenkort beschikbaar</h2>

            <p className="mt-5 leading-8 text-gray-600">
              Denk aan een jaarplanner, kalender en orakelkaarten die je helpen
              om bewuster te leven, te reflecteren en in contact te blijven met
              jouw eigen energie en ritme.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Zodra deze producten beschikbaar zijn, vind je ze hier terug.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
              Cursusopbouw
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              De inhoud van Omarm Jezelf
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Deze cursus is opgebouwd als een zachte reis naar meer
              zelfbegrip. Stap voor stap leer je hoe Nine Star Ki je kan helpen
              om jezelf en je patronen beter te verstaan.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {modules.map((module, index) => (
              <div
                key={module}
                className="rounded-2xl bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd]"
              >
                <p className="text-sm font-medium text-[#c57b57]">
                  Module {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">
                  {module}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
