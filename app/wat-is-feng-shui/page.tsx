import Link from "next/link";
import type { Metadata } from "next";

import { createMetadata } from "../seo";

const faqs = [
  {
    question: "Is Feng Shui alleen iets voor huizen?",
    answer:
      "Nee. Feng Shui kan ook waardevol zijn voor werkruimtes, praktijken en kantoren. Overal waar mensen leven of werken heeft een ruimte invloed op rust, concentratie en welzijn.",
  },
  {
    question: "Moet ik mijn hele interieur veranderen?",
    answer:
      "Meestal niet. Vaak zit de grootste winst juist in een paar gerichte aanpassingen die meer rust, flow en logica in een ruimte brengen.",
  },
  {
    question: "Is Feng Shui zweverig?",
    answer:
      "Dat hoeft helemaal niet. Feng Shui kan juist heel praktisch worden toegepast door te kijken naar indeling, looproutes, zichtlijnen, gebruiksgemak en de sfeer van een ruimte.",
  },
  {
    question: "Wat is het verschil tussen Feng Shui en Nine Star Ki?",
    answer:
      "Feng Shui kijkt vooral naar de invloed van de ruimte en omgeving. Nine Star Ki helpt juist om meer inzicht te krijgen in de energie en patronen van mensen. Die twee versterken elkaar mooi.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Wat is Feng Shui? | Feng Shui Nederland",
  description:
    "Lees wat Feng Shui is, hoe deze methode werkt en hoe je met kleine aanpassingen meer rust, focus en balans in een ruimte kunt brengen.",
  path: "/wat-is-feng-shui",
  keywords: [
    "wat is feng shui",
    "feng shui uitleg",
    "feng shui werkplek",
    "praktische feng shui",
    "feng shui betekenis",
  ],
});

export default function WatIsFengShuiPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800 md:py-24">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Feng Shui
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Wat is Feng Shui?
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Feng Shui is een eeuwenoude manier van kijken naar de invloed van
            een ruimte op hoe je je voelt, beweegt en functioneert. Het helpt
            om meer rust, overzicht en balans te brengen in je leef- of
            werkomgeving.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Je kunt Feng Shui daarom zien als de kunst van het afstemmen van
            een ruimte: zodat deze niet tegen je werkt, maar je juist
            ondersteunt in hoe je leeft, werkt en samenwerkt.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">Waar kijkt Feng Shui naar?</h2>

          <p className="mt-6 leading-8 text-gray-600">
            Feng Shui kijkt niet alleen naar styling of sfeer. Het gaat ook
            over indeling, zichtlijnen, looproutes, de plaats van meubels,
            licht, rustpunten en de manier waarop energie door een ruimte
            beweegt.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Soms voelt een ruimte direct prettig en helder. Soms merk je juist
            dat je sneller onrustig bent, minder focus hebt of dat een ruimte
            je energie kost. Feng Shui helpt om te begrijpen waar dat door kan
            komen.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-2xl font-semibold">Rust</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Een ruimte met meer rust geeft vaak ook meer rust in je hoofd.
              Dat helpt bij herstel, helder denken en prettiger werken.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-2xl font-semibold">Focus</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Een logische indeling en een prettige energiestroom maken het
              makkelijker om geconcentreerd te blijven en minder snel
              afgeleid te raken.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-2xl font-semibold">Balans</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Feng Shui helpt om een ruimte meer in evenwicht te brengen, zodat
              ze beter past bij wat jij nodig hebt in werk, leven en
              samenwerking.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Waarom Feng Shui juist praktisch kan zijn
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Voor mij hoeft Feng Shui niet ingewikkeld of zweverig te zijn.
            Juist kleine en logische aanpassingen kunnen al merkbaar verschil
            maken. Denk aan de plaats van een bureau, de manier waarop je een
            ruimte binnenkomt, de balans tussen drukte en rust of hoe een kamer
            wordt gebruikt.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Goede Feng Shui is daarom niet alleen iets om naar te kijken, maar
            vooral iets om te ervaren. Een ruimte voelt prettiger, werkt
            logischer en ondersteunt je beter in het dagelijks leven.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Wat hebben de bagua en Nine Star Ki hiermee te maken?
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Binnen Feng Shui zijn er verschillende manieren om een ruimte
            beter te begrijpen. De bagua helpt bijvoorbeeld om een ruimte op te
            delen in levensgebieden en energiekwaliteiten. Nine Star Ki geeft
            juist meer inzicht in de energie van mensen zelf.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Samen zorgen die invalshoeken voor meer diepgang: je kijkt niet
            alleen naar de ruimte, maar ook naar hoe die ruimte past bij de
            mensen die erin wonen of werken.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/wat-is-de-bagua"
              className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
            >
              Lees wat de bagua is
            </Link>

            <Link
              href="/nine-star-ki"
              className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
            >
              Meer over Nine Star Ki
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">Veelgestelde vragen</h2>

          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd]"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-[#2f312d] px-8 py-14 text-center text-white md:px-14">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Volgende stap
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Benieuwd wat Feng Shui voor jouw ruimte kan betekenen?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Met praktische Feng Shui analyse kijk ik naar wat jouw ruimte nodig
            heeft om meer rust, focus en balans te ondersteunen.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/diensten"
              className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Bekijk de diensten
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Plan gratis intake
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
