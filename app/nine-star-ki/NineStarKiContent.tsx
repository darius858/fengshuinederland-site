"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NineStarKiContent() {
  return (
    <main className="bg-[#f8f6f1] text-gray-800">
      <section className="px-6 py-20 md:py-24">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Nine Star Ki
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Inzicht in energie, gedrag en samenwerking
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Nine Star Ki geeft inzicht in jouw persoonlijke energie,
            karaktereigenschappen en manier van communiceren. Het helpt om
            jezelf beter te begrijpen, bewuster keuzes te maken en meer rust en
            richting te ervaren in werk en dagelijks leven.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <motion.div
          className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center">
            <Image
              src="/nine-star-ki.jpg"
              alt="Nine Star Ki energie en inzicht"
              width={1200}
              height={1200}
              className="w-full max-w-[320px] rounded-[2rem] object-cover shadow-md ring-1 ring-[#eee7dd]"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Wat is het
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Meer begrijpen van jezelf en van anderen
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Nine Star Ki is een methode die inzicht geeft in de energie
              waarmee je van nature beweegt in het leven. Het laat zien welke
              kwaliteiten, patronen en valkuilen bij jou horen, en waarom
              bepaalde situaties je energie geven of juist kosten.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Voor mij is Nine Star Ki een waardevolle aanvulling op Feng Shui:
              niet alleen kijken naar de ruimte, maar ook naar de mensen die
              erin leven en werken. Juist die combinatie maakt het praktisch,
              persoonlijk en verdiepend.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <motion.div
          className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <Image
              src="/five-elements-cycle.jpg"
              alt="Vijf elementen cyclus Feng Shui"
              width={1200}
              height={900}
              className="w-full max-w-sm rounded-[2rem] object-cover shadow-sm ring-1 ring-[#eee7dd]"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Hoe werkt het?
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-gray-800 md:text-4xl">
              Inzicht op basis van je geboortedatum
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Nine Star Ki is gebaseerd op je geboortedatum. Daarmee wordt een
              persoonlijk profiel berekend dat inzicht geeft in jouw energie,
              karaktereigenschappen en de manier waarop je met situaties en
              mensen omgaat.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Dat profiel laat zien waar jouw kracht ligt, waar je sneller uit
              balans kunt raken en wat je nodig hebt om prettiger te werken en
              te leven.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Nine Star Ki werkt met de vijf elementen - hout, vuur, aarde,
              metaal en water. Deze elementen volgen elkaar op in een
              natuurlijke cyclus en beinvloeden hoe energie zich ontwikkelt.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-[#eee7dd]">
          <h3 className="text-xl font-semibold text-gray-800">Voorbeeld</h3>

          <p className="mt-4 leading-8 text-gray-600">
            Iemand kan van nature heel daadkrachtig en snel zijn, terwijl een
            ander juist meer behoefte heeft aan rust, overzicht en
            voorbereiding. Dat is niet goed of fout, maar laat zien hoe
            verschillend energie kan werken.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Juist dat inzicht helpt om jezelf beter te begrijpen en ook
            prettiger samen te werken met anderen.
          </p>

          <div className="mt-8">
            <Link
              href="/nine-star-ki-cijfers"
              className="inline-flex rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
            >
              Bekijk de betekenis van de cijfers 1 t/m 9
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <motion.div
          className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 text-center shadow-sm ring-1 ring-[#eee7dd] md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Nine Star Ki Calculator
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Bereken eenvoudig jouw Nine Star Ki reeks
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Bereken je reeks en ontdek wat jouw getal zegt over je energie,
            kwaliteiten en levenspatronen. Op de calculatorpagina vind je ook
            uitleg over Nine Star Ki, de betekenis van de cijfers en veel
            gestelde vragen.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/nine-star-ki-calculator"
              className="inline-flex rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Open calculatorpagina
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=nl.fengshuinederland.ninestarkicalculator&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
            >
              Download Android app
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Gebruik je een iPhone of werk je liever in de browser? Kies dan de
            webversie.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <motion.div
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h3 className="text-xl font-semibold">Zelfinzicht</h3>
            <p className="mt-4 leading-7 text-gray-600">
              Begrijp beter wat jou motiveert, waar jouw kracht ligt en waarom
              bepaalde patronen steeds terugkomen.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h3 className="text-xl font-semibold">Relaties</h3>
            <p className="mt-4 leading-7 text-gray-600">
              Krijg meer inzicht in communicatie, dynamiek en de verschillen
              tussen jou en de mensen om je heen.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
            <h3 className="text-xl font-semibold">Samenwerking</h3>
            <p className="mt-4 leading-7 text-gray-600">
              Ontdek hoe verschillende energieen binnen een team elkaar kunnen
              versterken in plaats van tegenwerken.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-white px-6 py-20 md:py-24">
        <motion.div
          className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Voor particulieren
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Meer helderheid in jezelf en je richting
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Nine Star Ki helpt om meer inzicht te krijgen in jezelf, je gedrag
              en de fases waar je doorheen gaat. Het geeft woorden aan wat je
              misschien al voelde, maar nog niet goed kon plaatsen.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Dat maakt het waardevol bij persoonlijke ontwikkeling,
              relatievraagstukken, keuzes in werk en wanneer je meer begrip wilt
              krijgen voor jouw natuurlijke energie.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Voor bedrijven
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Verdieping voor teamontwikkeling en teambuilding
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Binnen teams kan Nine Star Ki helpen om verschillen in gedrag,
              communicatie en werkstijl beter te begrijpen. Waar de een snel en
              direct werkt, heeft de ander meer behoefte aan rust, structuur of
              overzicht.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Juist dat verschil hoeft geen probleem te zijn, maar kan een
              kracht worden wanneer het zichtbaar en bespreekbaar wordt. Daarom
              is Nine Star Ki ook waardevol voor teambuilding, samenwerking en
              bewust leiderschap.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <motion.div
          className="mx-auto max-w-4xl rounded-[2rem] bg-[#2f312d] px-8 py-14 text-center text-white md:px-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Vrijblijvend kennismaken
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Benieuwd wat Nine Star Ki voor jou of je team kan betekenen?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Plan een gratis intake en ontdek hoe deze methode kan bijdragen aan
            meer inzicht, betere samenwerking en meer balans.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Plan gratis intake
            </Link>

            <Link
              href="/nine-star-ki-calculator"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Open calculator
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
