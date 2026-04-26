"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OverMijContent() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800 md:py-24">
      <div className="mx-0 max-w-6xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Over mij
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Mijn weg naar Feng Shui en Nine Star Ki
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mijn interesse in energie begon al vroeg. Ik merkte vaak intuitief
            hoe een ruimte of omgeving invloed heeft op hoe mensen zich voelen
            en functioneren - niet alleen in huizen en gebouwen, maar ook in de
            dynamiek tussen mensen.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Oorspronkelijk ben ik agrarisch geschoold, maar al snel voelde ik
            dat dit niet de richting was die echt bij mij paste. Na een periode
            van zoeken en ontwikkelen kwam ik in aanraking met Feng Shui. Dat
            voelde direct als de juiste plek.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-12 md:grid-cols-2 md:items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <Image
              src="/profiel.jpg"
              alt="Feng Shui Nederland"
              width={640}
              height={800}
              className="mx-auto w-full max-w-[320px] rounded-[2rem] object-cover shadow-md ring-1 ring-[#eee7dd]"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Van zoeken naar richting</h2>

            <p className="mt-6 leading-8 text-gray-600">
              Ik ben mij verder gaan verdiepen en heb een opleiding gevolgd tot
              Conceptual Feng Shui Professional. Sinds 2020 help ik mensen om
              hun leef- en werkomgeving zo in te richten dat deze meer rust,
              balans en helderheid brengt.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              In de praktijk heb ik uiteenlopende mensen mogen begeleiden: van
              het optimaliseren van woningen en werkruimtes tot het inzetten van
              Nine Star Ki voor meer inzicht in jezelf, je gedrag en de manier
              waarop je samenwerkt.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Ook in andere situaties heb ik gezien hoeveel invloed een
              omgeving kan hebben - zelfs bij honden met gedragsproblemen.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h3 className="text-xl font-semibold">Praktisch</h3>
            <p className="mt-4 leading-7 text-gray-600">
              Mijn adviezen zijn helder, concreet en direct toepasbaar in jouw
              ruimte en situatie.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h3 className="text-xl font-semibold">Persoonlijk</h3>
            <p className="mt-4 leading-7 text-gray-600">
              Iedere ruimte en ieder persoon is anders. Daarom stem ik mijn
              advies af op jouw wensen en doelen.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h3 className="text-xl font-semibold">Resultaatgericht</h3>
            <p className="mt-4 leading-7 text-gray-600">
              Het doel is altijd meer rust, focus en een ruimte die echt voor je
              werkt.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 grid gap-10 md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-semibold">Feng Shui en Nine Star Ki</h2>

            <p className="mt-6 leading-8 text-gray-600">
              Naast Feng Shui werk ik ook met Nine Star Ki. Deze methode geeft
              inzicht in persoonlijke energie, gedrag en samenwerking.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Door deze inzichten te combineren met de inrichting van een
              ruimte ontstaat er een krachtig geheel: een omgeving die niet
              alleen goed voelt, maar ook beter aansluit op de mensen die erin
              werken en leven.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h3 className="text-xl font-semibold">Waar ik in geloof</h3>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>- Rust in een ruimte geeft rust in je hoofd</li>
              <li>- Een goede werkplek ondersteunt focus</li>
              <li>- Inrichting beinvloedt gedrag en energie</li>
              <li>- Kleine veranderingen maken vaak een groot verschil</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 rounded-[2rem] bg-[#2f312d] px-8 py-14 text-center text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-semibold">
            Benieuwd wat ik voor jouw ruimte kan betekenen?
          </h2>

          <p className="mt-6 text-white/80">
            Plan een gratis intake en ontdek wat er mogelijk is voor jouw
            ruimte, werkplek of situatie.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#c57b57] px-7 py-3 text-white"
            >
              Plan gratis intake
            </Link>

            <Link
              href="/diensten"
              className="rounded-full border border-white/30 px-7 py-3 text-white"
            >
              Bekijk diensten
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
