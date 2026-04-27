"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DienstenContent() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Diensten
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Praktisch Feng Shui advies voor meer rust en focus
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Voor ondernemers en bedrijven die merken dat hun werkruimte invloed
            heeft op hun concentratie, energie en productiviteit.
          </p>

          <div className="mt-10 max-w-3xl border-l-4 border-[#c57b57] pl-6 text-gray-600">
            <h2 className="text-xl font-semibold text-gray-800">
              Geen standaardoplossingen, maar advies dat past bij jouw ruimte
            </h2>

            <p className="mt-4 leading-7">
              Veel Feng Shui adviezen zijn algemeen. In de praktijk werkt dat
              vaak niet.
            </p>

            <p className="mt-4 leading-7">
              Daarom kijk ik naar jouw ruimte, jouw manier van werken en wat er
              echt nodig is.
            </p>

            <p className="mt-4 leading-7">
              Vaak zit de grootste winst in kleine aanpassingen die direct
              verschil maken.
            </p>

            <div className="mt-6">
              <Link
                href="/wat-is-de-bagua"
                className="inline-flex rounded-full border border-[#c57b57] px-6 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Lees meer over de bagua
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-xl font-semibold">Bedrijfsadvies</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Analyse van je werkruimte met concrete verbeterpunten. Gericht op
              meer rust, overzicht en betere focus in je dagelijkse werk.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-xl font-semibold">Online sessies</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Persoonlijk advies op afstand, afgestemd op jouw ruimte en
              situatie. Direct toepasbaar, zonder ingewikkelde theorie.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h2 className="text-xl font-semibold">Workshops</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Praktische sessies voor teams en groepen. Gericht op
              bewustwording, inzicht en direct toepasbare aanpassingen.
            </p>
          </div>
        </div>

        <motion.section
          id="werkwijze"
          className="mt-20 rounded-[2.5rem] bg-white px-8 py-12 shadow-sm ring-1 ring-[#eee7dd] md:px-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Werkwijze
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Helder, persoonlijk en praktisch
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Mijn aanpak is rustig en overzichtelijk. Je krijgt geen vage
              theorie, maar duidelijke stappen en advies dat past bij jouw
              ruimte, manier van werken en vraag.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.75rem] bg-[#f8f6f1] p-8 ring-1 ring-[#eee7dd]">
              <span className="text-sm font-medium text-[#c57b57]">Stap 1</span>
              <h3 className="mt-3 text-xl font-semibold">Kennismaking</h3>
              <p className="mt-4 leading-7 text-gray-600">
                We bespreken je ruimte, je uitdagingen en wat je wilt
                verbeteren. Zo wordt snel duidelijk waar de meeste winst zit.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-[#f8f6f1] p-8 ring-1 ring-[#eee7dd]">
              <span className="text-sm font-medium text-[#c57b57]">Stap 2</span>
              <h3 className="mt-3 text-xl font-semibold">Analyse</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Ik kijk naar de indeling en energie van de ruimte en waar rust,
                flow en balans versterkt kunnen worden.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-[#f8f6f1] p-8 ring-1 ring-[#eee7dd]">
              <span className="text-sm font-medium text-[#c57b57]">Stap 3</span>
              <h3 className="mt-3 text-xl font-semibold">Advies</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Je ontvangt duidelijke adviezen die logisch voelen en direct
                toepasbaar zijn in je eigen werk- of leefruimte.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-[#f8f6f1] p-8 ring-1 ring-[#eee7dd]">
              <span className="text-sm font-medium text-[#c57b57]">Stap 4</span>
              <h3 className="mt-3 text-xl font-semibold">Toepassen</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Met kleine of grotere aanpassingen ontstaat er meer rust,
                overzicht en richting in je ruimte en in hoe je werkt.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Pakketten
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Kies wat bij jouw situatie past
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
              <h3 className="text-xl font-semibold">Online sessie</h3>

              <p className="mt-6 text-3xl font-semibold">EUR 95</p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>- 60 minuten</li>
                <li>- Persoonlijk advies</li>
                <li>- Direct toepasbaar</li>
              </ul>

              <Link
                href="/contact"
                className="mt-8 block rounded-full bg-[#c57b57] px-6 py-3 text-center text-white"
              >
                Plan intake
              </Link>
            </div>

            <div className="rounded-[2rem] bg-[#2f312d] p-8 text-white">
              <h3 className="text-xl font-semibold">Bedrijfsadvies</h3>

              <p className="mt-6 text-3xl font-semibold">Vanaf EUR 295</p>

              <p className="mt-2 text-sm text-white/70">
                Afhankelijk van locatie, grootte en wensen
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>- Op locatie</li>
                <li>- Analyse + concreet plan</li>
                <li>- Meer rust en focus</li>
              </ul>

              <Link
                href="/contact"
                className="mt-8 block rounded-full bg-[#c57b57] px-6 py-3 text-center text-white"
              >
                Plan intake
              </Link>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
              <h3 className="text-xl font-semibold">Workshop</h3>

              <p className="mt-6 text-3xl font-semibold">Vanaf EUR 495</p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>- Teams en groepen</li>
                <li>- Praktisch en duidelijk</li>
                <li>- Direct toepasbaar</li>
              </ul>

              <Link
                href="/contact"
                className="mt-8 block rounded-full bg-[#c57b57] px-6 py-3 text-center text-white"
              >
                Plan intake
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold">
            Klaar voor meer rust en focus in je werkruimte?
          </h2>

          <p className="mt-4 text-gray-600">
            Plan vrijblijvend een intake en ontdek wat er mogelijk is.
          </p>

          <div className="mt-6">
            <Link
              href="/feng-shui-werkplek"
              className="mr-4 rounded-full border border-[#c57b57] px-6 py-3 text-[#c57b57]"
            >
              Lees meer over je werkplek
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-[#c57b57] px-6 py-3 text-white"
            >
              Plan gratis intake
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
