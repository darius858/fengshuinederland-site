import Link from "next/link";
import type { Metadata } from "next";

import { createMetadata } from "../seo";

const principles = [
  {
    title: "Rust en overzicht",
    description:
      "Een werkplek met te veel prikkels of rommel maakt het lastiger om helder te denken. Rust in je omgeving helpt om rust in je hoofd te brengen.",
  },
  {
    title: "Logische indeling",
    description:
      "De plaats van je bureau, scherm, looproute en opbergruimte heeft direct invloed op hoe prettig en effectief je werkt.",
  },
  {
    title: "Ondersteunende energie",
    description:
      "Een goede werkplek voelt niet leeg of zwaar, maar ondersteunend. Je merkt dat aan meer focus, minder afleiding en meer flow in je dag.",
  },
];

const tips = [
  "Zorg dat je bureau rust en overzicht uitstraalt en niet overvol ligt.",
  "Kijk kritisch naar wat je steeds in je blikveld hebt tijdens het werken.",
  "Creëer een duidelijke plek voor focus, overleg en administratie.",
  "Werk met licht, rustpunten en materialen die prettig aanvoelen.",
  "Let op hoe je je voelt op je werkplek, niet alleen op hoe het eruitziet.",
];

const faqs = [
  {
    question: "Werkt Feng Shui ook in een klein kantoor of thuiskantoor?",
    answer:
      "Ja. Juist in kleinere ruimtes kan een logische indeling en meer rust veel verschil maken. Het gaat niet om grootte, maar om hoe een plek is ingericht en aanvoelt.",
  },
  {
    question: "Moet mijn werkplek helemaal leeg en minimalistisch zijn?",
    answer:
      "Nee. Het gaat niet om kaal of streng, maar om balans. Een ruimte mag persoonlijk zijn, zolang die je ondersteunt en niet voortdurend afleidt.",
  },
  {
    question: "Kan Feng Shui helpen bij concentratieproblemen?",
    answer:
      "Een werkplek is natuurlijk niet de enige factor, maar de omgeving heeft wel degelijk invloed op focus, rust en mentale belasting. Kleine aanpassingen kunnen daarin veel doen.",
  },
  {
    question: "Is dit alleen voor ondernemers?",
    answer:
      "Nee. Deze inzichten zijn bruikbaar voor ondernemers, thuiswerkers en professionals in loondienst. Iedereen heeft baat bij een werkplek die beter ondersteunt.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Feng Shui voor je werkplek | Feng Shui Nederland",
  description:
    "Lees hoe Feng Shui kan helpen om meer rust, focus en balans te brengen op je werkplek met praktische aanpassingen die direct verschil maken.",
  path: "/feng-shui-werkplek",
  keywords: [
    "feng shui werkplek",
    "feng shui kantoor",
    "feng shui thuiskantoor",
    "meer rust op je werkplek",
    "werkplek inrichten feng shui",
  ],
});

export default function FengShuiWerkplekPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800 md:py-24">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Feng Shui werkplek
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Meer rust, focus en balans op je werkplek
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Je werkplek heeft direct invloed op hoe je je voelt en hoe je
            functioneert. Wanneer een ruimte onrustig, vol of onlogisch is
            ingericht, merk je dat vaak in je concentratie, energie en
            productiviteit.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Feng Shui helpt om je werkplek zo in te richten dat deze je beter
            ondersteunt. Niet met ingewikkelde regels, maar met praktische
            keuzes die zorgen voor meer overzicht, prettiger werken en minder
            onnodige prikkels.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Waarom een werkplek zo veel invloed heeft
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Je ogen, aandacht en energie reageren voortdurend op de ruimte om
            je heen. Een rommelig bureau, onrustige achtergrond of onlogische
            opstelling hoeft niet altijd direct op te vallen, maar kan wel op
            de achtergrond energie kosten.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Andersom geldt dat ook: een prettige werkplek geeft meer helderheid
            en maakt het makkelijker om aanwezig, rustig en gefocust te
            blijven.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Praktische Feng Shui tips voor je werkplek
          </h2>

          <ul className="mt-8 space-y-4">
            {tips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 rounded-2xl bg-[#fcfaf7] p-5 ring-1 ring-[#efe7dd]"
              >
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                <span className="leading-7 text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <h2 className="text-3xl font-semibold">
            Kleine veranderingen kunnen al veel doen
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Je hoeft een werkplek niet helemaal om te gooien om verschil te
            merken. Soms zit de grootste winst in een andere plaatsing van je
            bureau, meer rust in je blikveld, een helderder gebruik van de
            ruimte of het weghalen van wat voortdurend afleidt.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Juist daarom is Feng Shui zo waardevol voor werkplekken: het helpt
            om gericht te kijken naar wat jouw ruimte nodig heeft, in plaats van
            algemene tips toe te passen die niet echt passen.
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
            Wil je jouw werkplek laten bekijken?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Met praktische Feng Shui analyse kijk ik naar wat jouw werkplek
            nodig heeft om meer rust, focus en ondersteuning te bieden in je
            dagelijkse werk.
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
