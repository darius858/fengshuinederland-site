import Link from "next/link";
import type { Metadata } from "next";

import { createMetadata } from "../seo";

const articles = [
  {
    category: "Feng Shui",
    title: "Wat is Feng Shui?",
    description:
      "Een rustige en heldere uitleg over wat Feng Shui is en hoe kleine aanpassingen in een ruimte meer rust, focus en balans kunnen brengen.",
    href: "/wat-is-feng-shui",
  },
  {
    category: "BaGua",
    title: "Wat is de BaGua?",
    description:
      "Lees hoe de 9 vakken van de BaGua helpen om een ruimte anders te bekijken en meer samenhang en richting te zien.",
    href: "/wat-is-de-bagua",
  },
  {
    category: "Werkplek",
    title: "Feng Shui voor je werkplek",
    description:
      "Praktische inzichten voor een werkplek die rustiger, overzichtelijker en prettiger aanvoelt tijdens het werken.",
    href: "/feng-shui-werkplek",
  },
  {
    category: "Nine Star Ki",
    title: "Wat betekenen de cijfers 1 t/m 9?",
    description:
      "Een toegankelijke uitleg van de Nine Star Ki cijfers, met hun kwaliteiten, valkuilen en de energie die erbij hoort.",
    href: "/nine-star-ki-cijfers",
  },
  {
    category: "Nine Star Ki",
    title: "Wat is Nine Star Ki?",
    description:
      "Meer begrijpen van jezelf en van anderen met een methode die inzicht geeft in energie, gedrag en samenwerking.",
    href: "/nine-star-ki",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Kennisbank | Feng Shui Nederland",
  description:
    "Lees praktische artikelen over Feng Shui, de BaGua, Nine Star Ki en je werkplek. Heldere uitleg en verdiepende kennis op een plek.",
  path: "/kennisbank",
  keywords: [
    "feng shui kennisbank",
    "artikelen feng shui",
    "nine star ki artikelen",
    "bagua uitleg",
    "feng shui werkplek tips",
  ],
});

export default function KennisbankPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800 md:py-24">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Kennisbank
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Praktische uitleg en verdieping op een plek
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hier vind je heldere artikelen over Feng Shui, de BaGua, Nine Star
            Ki en je werkplek. Geen ingewikkelde theorie, maar rustige en
            praktische uitleg die helpt om meer te begrijpen van ruimte,
            energie en balans.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.href}
              className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
                {article.category}
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-tight">
                {article.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {article.description}
              </p>

              <div className="mt-6">
                <Link
                  href={article.href}
                  className="inline-flex rounded-full border border-[#c57b57] px-6 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
                >
                  Lees artikel
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">
              Meer weten over jouw ruimte of jouw energie?
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              De kennisbank geeft je een eerste basis. Wil je daarna verder
              kijken naar jouw werkplek, jouw vragen of jouw Nine Star Ki
              profiel, dan kijk ik graag samen met je mee.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/diensten"
              className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Bekijk de diensten
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
            >
              Plan gratis intake
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
