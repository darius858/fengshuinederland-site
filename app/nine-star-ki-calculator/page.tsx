import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "../seo";

const numberMeanings = [
  {
    number: "1",
    title: "Diepgang en wijsheid",
    description:
      "De energie van introspectie, gevoeligheid en innerlijke rust.",
  },
  {
    number: "2",
    title: "Zorgzaamheid en verbinding",
    description:
      "De energie van ondersteuning, ontvankelijkheid en betrokkenheid.",
  },
  {
    number: "3",
    title: "Groei en beweging",
    description:
      "De energie van vernieuwing, initiatief en levenskracht.",
  },
  {
    number: "4",
    title: "Verfijning en communicatie",
    description:
      "De energie van zachtheid, afstemming en heldere uitwisseling.",
  },
  {
    number: "5",
    title: "Centrum en verandering",
    description:
      "De energie van invloed, beweging en het midden bewaren.",
  },
  {
    number: "6",
    title: "Helderheid en verantwoordelijkheid",
    description:
      "De energie van leiderschap, overzicht en structuur.",
  },
  {
    number: "7",
    title: "Lichtheid en expressie",
    description:
      "De energie van plezier, openheid en zichtbare levendigheid.",
  },
  {
    number: "8",
    title: "Stevigheid en stilte",
    description:
      "De energie van innerlijke kracht, begrenzing en verdieping.",
  },
  {
    number: "9",
    title: "Vuur en zichtbaarheid",
    description:
      "De energie van inspiratie, intensiteit en uitstraling.",
  },
];

const faqs = [
  {
    question: "Wat is een Nine Star Ki reeks?",
    answer:
      "Je reeks laat zien welke energie een belangrijke rol speelt in jouw karakter, kwaliteiten en levenspatronen.",
  },
  {
    question: "Is de Nine Star Ki Calculator gratis?",
    answer:
      "Ja, je kunt de calculator gratis gebruiken om jouw Nine Star Ki reeks te berekenen.",
  },
  {
    question: "Waarom kan het begin van het jaar invloed hebben?",
    answer:
      "Binnen Nine Star Ki wordt gekeken naar een eigen jaarindeling. Daardoor kan een geboortedatum aan het begin van het jaar invloed hebben op de uitkomst.",
  },
  {
    question: "Kan Nine Star Ki helpen bij zelfinzicht?",
    answer:
      "Ja, veel mensen gebruiken Nine Star Ki om zichzelf beter te begrijpen en meer inzicht te krijgen in hun kwaliteiten, gevoeligheden en relatiepatronen.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Nine Star Ki Calculator | Bereken je reeks",
  description:
    "Bereken eenvoudig je Nine Star Ki reeks en ontdek wat jouw getal zegt over je energie, kwaliteiten en levenspatronen.",
  path: "/nine-star-ki-calculator",
  keywords: [
    "Nine Star Ki calculator",
    "bereken je Nine Star Ki",
    "Nine Star Ki reeks",
    "Nine Star Ki getal betekenis",
  ],
});

export default function NineStarKiCalculatorPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Nine Star Ki Calculator
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Bereken je Nine Star Ki reeks
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bereken hier je Nine Star Ki reeks en ontdek wat jouw energie je
            laat zien over je karakter, kwaliteiten en levenspatronen.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Nine Star Ki is een eeuwenoude Oosterse methode die helpt om jezelf
            en anderen beter te begrijpen. Met deze calculator krijg je op een
            toegankelijke manier een eerste indruk van jouw energie.
          </p>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
            <h2 className="text-2xl font-semibold">Open de calculator</h2>

            <p className="mt-5 leading-8 text-gray-600">
              Vul je geboortedatum in en ontdek jouw Nine Star Ki reeks. Je
              kunt direct de webversie openen of de Android app downloaden.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://app.fengshuinederland.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
              >
                Open webversie
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=nl.fengshuinederland.ninestarkicalculator&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Download Android app
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Gebruik je liever je browser of werk je op iPhone? Kies dan de
              webversie.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-[#fcfaf7] p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-2xl font-semibold">Wat je ontdekt</h2>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                <span className="text-gray-700">
                  Welk getal bij jouw geboortedatum hoort
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                <span className="text-gray-700">
                  Wat jouw energie zegt over je kwaliteiten en patronen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                <span className="text-gray-700">
                  Waarom begin februari belangrijk is bij de berekening
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                <span className="text-gray-700">
                  Hoe je met die inzichten meer rust en richting kunt ervaren
                </span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">Wat is Nine Star Ki?</h2>

          <p className="mt-6 leading-8 text-gray-600">
            Nine Star Ki is een methode die werkt met energie, beweging en
            natuurlijke patronen. Het helpt je om meer inzicht te krijgen in
            jezelf, in je kwaliteiten en in de manier waarop jij reageert op
            het leven om je heen.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Veel mensen ervaren Nine Star Ki als een spiegel. Niet om jezelf in
            een hokje te stoppen, maar juist om jezelf beter te begrijpen.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Hoe wordt jouw reeks berekend?
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Je Nine Star Ki reeks wordt berekend op basis van je geboortedatum.
            Daarbij wordt binnen Nine Star Ki gekeken naar een eigen
            jaarindeling, waardoor de overgang aan het begin van het jaar net
            anders kan worden benaderd dan in het gewone kalenderjaar.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Daardoor kan een geboortedatum aan het begin van het jaar invloed
            hebben op de uitkomst. De calculator houdt hier automatisch rekening
            mee, zodat je op een eenvoudige manier jouw reeks kunt ontdekken.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Wat betekenen de cijfers 1 tot en met 9?
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {numberMeanings.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd]"
              >
                <p className="text-sm font-medium text-[#c57b57]">
                  Getal {item.number}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 leading-8 text-gray-600">
            Je reeks is meer dan alleen een getal. Het geeft richting aan hoe
            jij jezelf beter kunt leren verstaan.
          </p>

          <div className="mt-8">
            <Link
              href="/nine-star-ki-cijfers"
              className="inline-flex rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
            >
              Lees de uitgebreide betekenis van 1 t/m 9
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Wat kun je met deze inzichten?
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Wanneer je jouw reeks kent, ontstaat er vaak meer herkenning. Je
            ziet beter waarom bepaalde patronen steeds terugkomen, waar jouw
            kracht ligt, wat jou uit balans brengt en wat jij nodig hebt om
            dichter bij jezelf te blijven.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Nine Star Ki kan je helpen om zachter naar jezelf te kijken en met
            meer bewustzijn keuzes te maken in je dagelijks leven, relaties en
            werk.
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
            Meer verdieping
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Wil je meer dan alleen je uitkomst?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Ontdek wat jouw uitkomst echt over jou zegt met een consult of
            verdiep je via de cursus Omarm Jezelf.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Plan een consult
            </a>

            <a
              href="/aanbod"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Bekijk aanbod
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
