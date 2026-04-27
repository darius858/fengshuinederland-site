import Link from "next/link";
import type { Metadata } from "next";

import { createMetadata } from "../seo";

const numbers = [
  {
    number: "1",
    element: "Water",
    title: "Diepgang en gevoeligheid",
    description:
      "Getal 1 wordt binnen Nine Star Ki vaak verbonden met waterenergie. Deze energie gaat over diepgang, gevoeligheid, intuïtie en de neiging om eerst te voelen voordat je handelt.",
    strengths:
      "In balans laat dit getal vaak wijsheid, rust, aanvoelingsvermogen en innerlijke kracht zien.",
    challenge:
      "Uit balans kan deze energie zich uiten in terugtrekken, piekeren of het gevoel hebben dat alles eerst vanbinnen verwerkt moet worden.",
  },
  {
    number: "2",
    element: "Aarde",
    title: "Zorgzaamheid en draagkracht",
    description:
      "Getal 2 hoort bij aarde-energie en wordt vaak geassocieerd met zorg, verbinding, geduld en de wens om voor anderen een veilige basis te creëren.",
    strengths:
      "In balans brengt deze energie warmte, betrouwbaarheid, dienstbaarheid en het vermogen om anderen te ondersteunen.",
    challenge:
      "Uit balans kan dit getal omslaan in jezelf wegcijferen, te veel dragen of moeite hebben om je eigen grenzen goed te bewaken.",
  },
  {
    number: "3",
    element: "Hout",
    title: "Groei en initiatief",
    description:
      "Getal 3 wordt verbonden met jonge houtenergie. Deze energie wil bewegen, vernieuwen, ontdekken en met frisse kracht ergens aan beginnen.",
    strengths:
      "In balans laat dit getal spontaniteit, creativiteit, moed en enthousiasme zien.",
    challenge:
      "Uit balans kan deze energie onrustig worden, te snel gaan of zich impulsief uiten zonder genoeg afstemming.",
  },
  {
    number: "4",
    element: "Hout",
    title: "Verfijning en communicatie",
    description:
      "Getal 4 hoort ook bij hout, maar dan in een verfijndere, zachtere vorm. Deze energie heeft veel met afstemming, communicatie, gevoel en subtiele beweging te maken.",
    strengths:
      "In balans zie je vaak zachtheid, diplomatie, creativiteit en een goed gevoel voor sfeer en verbinding.",
    challenge:
      "Uit balans kan dit getal gaan twijfelen, zich versnipperd voelen of te veel meebewegen met de omgeving.",
  },
  {
    number: "5",
    element: "Aarde",
    title: "Centrum en verandering",
    description:
      "Getal 5 wordt gezien als centrumenergie. Het heeft te maken met invloed, stabiliteit, verandering en het vermogen om verschillende krachten samen te brengen.",
    strengths:
      "In balans brengt deze energie overzicht, innerlijke stevigheid en het vermogen om richting te geven.",
    challenge:
      "Uit balans kan 5 zwaar voelen, controlerend worden of het idee geven dat alles tegelijk op jouw schouders rust.",
  },
  {
    number: "6",
    element: "Metaal",
    title: "Helderheid en verantwoordelijkheid",
    description:
      "Getal 6 hoort bij metaalenergie en wordt vaak geassocieerd met helderheid, structuur, verantwoordelijkheid en een sterk gevoel voor kwaliteit.",
    strengths:
      "In balans zie je vaak leiderschap, betrouwbaarheid, focus en de wens om dingen goed en zorgvuldig te doen.",
    challenge:
      "Uit balans kan deze energie streng worden, te veel controle willen houden of moeite hebben met loslaten.",
  },
  {
    number: "7",
    element: "Metaal",
    title: "Lichtheid en expressie",
    description:
      "Getal 7 wordt ook verbonden met metaal, maar dan op een lichtere en expressievere manier. Deze energie heeft te maken met plezier, schoonheid, contact en genieten.",
    strengths:
      "In balans brengt dit getal openheid, charme, creativiteit en het vermogen om lichtheid te brengen.",
    challenge:
      "Uit balans kan 7 oppervlakkig worden, afleiding zoeken of moeite hebben met echte diepgang en begrenzing.",
  },
  {
    number: "8",
    element: "Aarde",
    title: "Stilte en stevigheid",
    description:
      "Getal 8 hoort bij aarde-energie en heeft veel te maken met vertragen, innerlijke kracht, grenzen, concentratie en het zoeken naar een stevige basis.",
    strengths:
      "In balans laat deze energie vaak stabiliteit, volharding, betrouwbaarheid en innerlijke rust zien.",
    challenge:
      "Uit balans kan 8 zich afsluiten, star worden of moeite hebben om in beweging te komen als iets eenmaal vastzit.",
  },
  {
    number: "9",
    element: "Vuur",
    title: "Zichtbaarheid en inspiratie",
    description:
      "Getal 9 wordt verbonden met vuurenergie. Deze energie gaat over zichtbaarheid, inspiratie, passie, intuïtieve helderheid en het verlangen om te laten zien wat wezenlijk is.",
    strengths:
      "In balans zie je vaak charisma, warmte, inspiratie en het vermogen om situaties scherp aan te voelen.",
    challenge:
      "Uit balans kan deze energie intens worden, sneller overprikkeld raken of emotioneel uitschieten.",
  },
];

const faqs = [
  {
    question: "Gaat dit over mijn hoofdgetal?",
    answer:
      "Ja, meestal wordt met deze betekenissen gekeken naar je hoofdgetal binnen Nine Star Ki. Dat getal geeft een eerste ingang naar jouw basisenergie.",
  },
  {
    question: "Ben ik alleen maar dat ene getal?",
    answer:
      "Nee. Nine Star Ki is rijker dan één omschrijving. Je getal laat een belangrijke onderstroom zien, maar niet je hele persoonlijkheid.",
  },
  {
    question: "Waarom herken ik mezelf niet volledig in mijn getal?",
    answer:
      "Dat is heel normaal. Je levenservaringen, omgeving en andere lagen binnen Nine Star Ki spelen ook mee. Zie je getal vooral als een spiegel, niet als een vast label.",
  },
  {
    question: "Wat kan ik doen als ik mijn getal nog niet weet?",
    answer:
      "Gebruik dan eerst de Nine Star Ki Calculator. Daarna kun je op deze pagina rustig de betekenis van jouw getal verder lezen.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Betekenis van de cijfers 1 t/m 9 | Nine Star Ki",
  description:
    "Lees wat de cijfers 1 tot en met 9 in Nine Star Ki betekenen en ontdek welke energie hoort bij jouw getal, kwaliteiten en patronen.",
  path: "/nine-star-ki-cijfers",
  keywords: [
    "Nine Star Ki cijfers betekenis",
    "Nine Star Ki getallen",
    "betekenis getal 1 tot 9 Nine Star Ki",
    "Nine Star Ki hoofdgetal betekenis",
  ],
});

export default function NineStarKiCijfersPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800 md:py-24">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Nine Star Ki
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Wat betekenen de cijfers 1 tot en met 9?
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            In Nine Star Ki vertelt ieder getal iets over een bepaalde
            energie. Die energie zegt niet alles over jou, maar geeft wel een
            waardevolle ingang naar jouw kwaliteiten, gevoeligheden en
            levenspatronen.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Zie deze betekenissen daarom niet als een hokje, maar als een
            zachte manier om jezelf beter te begrijpen.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">Hoe gebruik je deze pagina?</h2>

          <p className="mt-6 leading-8 text-gray-600">
            Ken je jouw hoofdgetal al? Zoek dan hieronder direct jouw cijfer op
            en lees wat die energie in de basis laat zien. Weet je jouw getal
            nog niet, gebruik dan eerst de calculator.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/nine-star-ki-calculator"
              className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Bereken je reeks
            </Link>

            <Link
              href="/nine-star-ki"
              className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
            >
              Meer over Nine Star Ki
            </Link>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          {numbers.map((item) => (
            <article
              key={item.number}
              className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
                Getal {item.number} · {item.element}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                {item.title}
              </h2>

              <p className="mt-6 leading-8 text-gray-600">{item.description}</p>

              <div className="mt-8 rounded-2xl bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd]">
                <h3 className="text-lg font-semibold text-gray-800">
                  In balans
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{item.strengths}</p>
              </div>

              <div className="mt-5 rounded-2xl bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd]">
                <h3 className="text-lg font-semibold text-gray-800">
                  Uit balans
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{item.challenge}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Waarom dit zoveel herkenning kan geven
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Veel mensen ervaren bij Nine Star Ki voor het eerst dat bepaalde
            eigenschappen, gevoeligheden of reacties op hun plek vallen. Niet
            omdat een getal jou volledig verklaart, maar omdat het taal geeft
            aan iets wat je misschien al langer voelde.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Juist dat maakt het waardevol: je hoeft jezelf niet te veranderen
            om beter te passen. Je mag eerst beter leren zien hoe jouw energie
            van nature beweegt.
          </p>
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
            Wil je de betekenis van jouw getal verder verdiepen?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Gebruik de calculator, plan een consult of verdiep je via Omarm
            Jezelf om jouw energie en patronen nog beter te leren begrijpen.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/nine-star-ki-calculator"
              className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Open calculator
            </Link>

            <Link
              href="/omarm-jezelf"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Bekijk Omarm Jezelf
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
