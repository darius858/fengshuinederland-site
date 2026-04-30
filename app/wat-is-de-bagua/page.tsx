import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { createMetadata } from "../seo";

const baguaAreas = [
  {
    name: "Weelde",
    description:
      "Dit vak wordt vaak gekoppeld aan groei, overvloed en de manier waarop energie zich mag uitbreiden.",
  },
  {
    name: "Roem",
    description:
      "Deze plek gaat over zichtbaarheid, uitstraling en hoe jij naar buiten treedt in de wereld.",
  },
  {
    name: "Relaties",
    description:
      "Hier kijk je naar verbinding, partnerschap en hoe balans in geven en ontvangen zich laat zien.",
  },
  {
    name: "Familie",
    description:
      "Dit vak heeft te maken met roots, steun, geschiedenis en de basis waarop je verder bouwt.",
  },
  {
    name: "Centrum",
    description:
      "Het midden staat voor balans, gezondheid en de samenhang tussen alle andere gebieden.",
  },
  {
    name: "Kinderen en creativiteit",
    description:
      "Dit gebied gaat over expressie, scheppingskracht, speelsheid en wat jij de wereld in brengt.",
  },
  {
    name: "Kennis",
    description:
      "Hier draait het om reflectie, innerlijke wijsheid, leren en de beweging naar binnen.",
  },
  {
    name: "Carriere",
    description:
      "Dit vak gaat over levensrichting, stroming, werk en de manier waarop jouw pad zich ontvouwt.",
  },
  {
    name: "Behulpzame mensen",
    description:
      "Dit gebied heeft te maken met steun, mentoren, netwerk en de hulp die op je pad kan komen.",
  },
];

const faqs = [
  {
    question: "Is de BaGua een vaste plattegrond?",
    answer:
      "Nee, de BaGua is vooral een manier om naar een ruimte te kijken. Het is een raster dat helpt om verschillende levensgebieden en energiekwaliteiten zichtbaar te maken.",
  },
  {
    question: "Moet ik de BaGua letterlijk over mijn huis leggen?",
    answer:
      "Dat hangt af van de methode waarmee je werkt. Binnen conceptuele Feng Shui wordt de BaGua vaak gebruikt als een helder hulpmiddel om richting en samenhang in een ruimte te begrijpen.",
  },
  {
    question: "Wat als mijn ruimte niet perfect past in negen vakken?",
    answer:
      "Dat is heel normaal. Het gaat niet om perfectie, maar om inzicht. De BaGua helpt vooral om te zien waar aandacht, balans of versterking nodig kan zijn.",
  },
  {
    question: "Waarom is de BaGua waardevol?",
    answer:
      "Omdat het een eenvoudige manier geeft om verband te zien tussen ruimte, energie en levensthema's. Daardoor wordt Feng Shui concreter en beter toepasbaar.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Wat is de BaGua? | Feng Shui Nederland",
  description:
    "Lees wat de BaGua is binnen Feng Shui, hoe de 9 vakken werken en waarom dit raster helpt om meer balans en inzicht in een ruimte te brengen.",
  path: "/wat-is-de-bagua",
  keywords: [
    "wat is de BaGua",
    "BaGua uitleg",
    "Feng Shui BaGua",
    "9 vakken BaGua",
    "conceptuele Feng Shui BaGua",
  ],
});

export default function BaguaPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800 md:py-24">
      <div className="mx-auto max-w-6xl">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Feng Shui
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Wat is de BaGua?
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              De BaGua is een belangrijk hulpmiddel binnen Feng Shui. Je kunt
              het zien als een raster met 9 vakken waarmee je naar een ruimte
              kijkt: niet alleen praktisch, maar ook in relatie tot thema&apos;s
              zoals rust, richting, relaties, groei en balans.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Juist daardoor helpt de BaGua om Feng Shui concreter te maken. Je
              ziet sneller welke delen van een ruimte aandacht vragen en waar
              energie sterker of juist zachter mag worden.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/wat-is-feng-shui"
                className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Lees wat Feng Shui is
              </Link>

              <Link
                href="/diensten"
                className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
              >
                Bekijk Feng Shui diensten
              </Link>

              <Link
                href="/nine-star-ki"
                className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Meer over Nine Star Ki
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#eee7dd]">
            <Image
              src="/omarm-jezelf-bagua.png"
              alt="Conceptuele Feng Shui BaGua op papier"
              width={1400}
              height={1050}
              className="h-[360px] w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">Hoe werkt de BaGua?</h2>

          <p className="mt-6 leading-8 text-gray-600">
            De BaGua verdeelt een ruimte in 9 vakken. Elk vak staat symbool
            voor een bepaald levensgebied of energiekwaliteit. Door dat raster
            over een ruimte heen te denken, ontstaat er een andere manier van
            kijken: je ziet niet alleen meubels en muren, maar ook samenhang,
            richting en aandachtspunten.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Binnen conceptuele Feng Shui helpt dit raster om rust en overzicht
            te brengen. Het geeft een logische basis om te onderzoeken welke
            plekken in een huis, werkruimte of praktijk aandacht vragen en waar
            meer balans mag ontstaan.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            De 9 vakken van de BaGua
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {baguaAreas.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd]"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {area.name}
                </h3>
                <p className="mt-4 leading-7 text-gray-600">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Waarom de BaGua zo&apos;n waardevol hulpmiddel is
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Veel mensen voelen wel dat een ruimte invloed heeft, maar kunnen
            nog niet goed aanwijzen waarom. De BaGua helpt om dat concreter te
            maken. Je krijgt taal voor wat je ervaart en een structuur om
            gericht naar een ruimte te kijken.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Dat maakt het niet alleen bruikbaar voor huizen, maar ook voor
            werkruimtes, praktijken en plekken waar samenwerking of concentratie
            belangrijk zijn.
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
            Wil je weten wat de BaGua in jouw ruimte laat zien?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Met een Feng Shui analyse kijk ik niet alleen naar de inrichting,
            maar ook naar de onderliggende balans en de thema&apos;s die in een
            ruimte zichtbaar worden.
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
