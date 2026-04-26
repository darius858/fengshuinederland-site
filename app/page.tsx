"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Feng Shui Nederland",
  url: "https://fengshuinederland.nl",
  areaServed: "NL",
  serviceType: ["Feng Shui advies", "Nine Star Ki consult"],
  sameAs: ["https://www.instagram.com/fengshui_nederland/"],
};

export default function Home() {
  return (
    <>
      <Script
        id="feng-shui-nederland-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <main className="bg-[#f8f6f1] text-gray-800">
        <section className="relative overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Rustige werkruimte"
            width={1920}
            height={1400}
            className="h-[78vh] min-h-[560px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <motion.div
              className="mx-auto max-w-3xl text-center text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/80">
                Feng Shui Nederland
              </p>

              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Meer rust, focus en balans in je werkruimte
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                Praktisch Feng Shui advies voor ondernemers en bedrijven die hun
                werkplek rustiger, helderder en prettiger willen maken.
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-white/90">
                Ik maak Feng Shui begrijpbaar en praktisch - zonder
                standaardoplossingen, maar afgestemd op jouw ruimte.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="/nine-star-ki-calculator"
                  className="rounded-full border border-white/70 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Bereken je reeks
                </a>

                <a
                  href="/contact"
                  className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
                >
                  Plan gratis intake
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <motion.div
            className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
                Waarom Feng Shui
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Een ruimte heeft direct invloed op hoe je werkt en hoe je je
                voelt
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Wanneer een werkruimte onrustig of onlogisch aanvoelt, merk je
                dat in je concentratie en energie. Met praktische Feng Shui
                aanpassingen ontstaat er meer overzicht, rust en flow.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                  <span className="text-gray-700">
                    Meer rust en overzicht in je werkruimte
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                  <span className="text-gray-700">
                    Betere focus tijdens je werkdag
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                  <span className="text-gray-700">
                    Een ruimte die ondersteunt in plaats van afleidt
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <Image
                src="/werkruimte.jpg"
                alt="Feng Shui werkruimte"
                width={1200}
                height={900}
                className="h-full w-full rounded-[2rem] object-cover shadow-sm"
              />
            </div>
          </motion.div>
        </section>

        <section className="bg-white px-6 py-20 md:py-24">
          <motion.div
            className="mx-auto max-w-6xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
                Diensten
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Praktisch advies dat direct toepasbaar is
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Geen zweverigheid, maar heldere aanbevelingen die je werkruimte
                rustiger, functioneler en prettiger maken.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-[#eee7dd] bg-[#fcfaf7] p-8 shadow-sm transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Bedrijfsadvies
                </h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Praktische Feng Shui analyse voor kantoren en werkruimtes, met
                  direct toepasbare verbeteringen.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-[#eee7dd] bg-[#fcfaf7] p-8 shadow-sm transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Online sessies
                </h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Persoonlijk advies op afstand, helder uitgelegd en afgestemd
                  op jouw ruimte en doelen.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-[#eee7dd] bg-[#fcfaf7] p-8 shadow-sm transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Workshops
                </h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Inspirerende sessies voor teams en ondernemers over rust,
                  focus en balans in de werkomgeving.
                </p>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/diensten"
                className="inline-flex rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
              >
                Meer over de diensten
              </a>
            </div>
          </motion.div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
              Praktisch Feng Shui zonder zweverigheid
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Feng Shui Nederland helpt ondernemers en professionals om hun
              ruimte logisch en praktisch in te richten. Geen ingewikkelde
              regels, maar duidelijke aanpassingen die direct zorgen voor meer
              rust, focus en overzicht.
              <br />
              <br />
              Naast Feng Shui werk ik ook met Nine Star Ki, een methode die
              inzicht geeft in persoonlijke energie, gedrag en samenwerking.
              Dit helpt om ruimtes niet alleen goed in te richten, maar ook
              beter af te stemmen op de mensen die erin werken.
            </p>
          </motion.div>
        </section>

        <section className="bg-white px-6 py-20 md:py-24">
          <motion.div
            className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-[#fcfaf7] p-8 shadow-sm ring-1 ring-[#eee7dd] md:grid-cols-[1.05fr_0.95fr] md:items-center md:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
                Nine Star Ki Calculator
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Bereken je Nine Star Ki reeks
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Ben je benieuwd welk getal bij jouw geboortedatum hoort? Met de
                Nine Star Ki Calculator ontdek je jouw reeks en krijg je meer
                inzicht in je energie, kwaliteiten en levenspatronen.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Nine Star Ki helpt je om jezelf beter te begrijpen. Je ontdekt
                hoe jij van nature beweegt, waar je kracht ligt en wat jou
                helpt om meer rust en balans te ervaren.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/nine-star-ki-calculator"
                  className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
                >
                  Open calculator
                </a>

                <a
                  href="/nine-star-ki"
                  className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
                >
                  Meer over Nine Star Ki
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
              <h3 className="text-xl font-semibold text-gray-800">
                Wat je ontdekt
              </h3>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                  <span className="text-gray-700">
                    Welk Nine Star Ki getal bij jouw geboortedatum hoort
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
            </div>
          </motion.div>
        </section>

        <section className="bg-white px-6 py-20 md:py-24">
          <motion.div
            className="mx-auto max-w-5xl rounded-[2rem] bg-[#fcfaf7] p-8 text-center shadow-sm ring-1 ring-[#eee7dd] md:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Nieuw cursusaanbod
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Omarm Jezelf
            </h2>

            <p className="mt-3 text-lg text-[#8a5a3b]">
              Leer jezelf begrijpen met Nine Star Ki
            </p>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
              Een warme online cursus voor meer zelfinzicht, zachtheid en
              begrip voor je eigen energie en levenspatronen. Ideaal als je op
              een toegankelijke manier wilt kennismaken met Nine Star Ki.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/aanbod"
                className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
              >
                Bekijk aanbod
              </a>

              <a
                href="/omarm-jezelf"
                className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Meld je interesse
              </a>
            </div>
          </motion.div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <motion.div
            className="mx-auto max-w-6xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
                Werkwijze
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Helder, persoonlijk en praktisch
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
                <span className="text-sm font-medium text-[#c57b57]">
                  Stap 1
                </span>
                <h3 className="mt-3 text-xl font-semibold">Kennismaking</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  We bespreken je ruimte, je uitdagingen en wat je wilt
                  verbeteren.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
                <span className="text-sm font-medium text-[#c57b57]">
                  Stap 2
                </span>
                <h3 className="mt-3 text-xl font-semibold">Analyse</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Ik kijk naar de indeling, energie en praktische knelpunten van
                  je werkplek.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
                <span className="text-sm font-medium text-[#c57b57]">
                  Stap 3
                </span>
                <h3 className="mt-3 text-xl font-semibold">Concreet advies</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Je ontvangt duidelijke aanbevelingen die je direct kunt
                  toepassen.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd]">
                <span className="text-sm font-medium text-[#c57b57]">
                  Stap 4
                </span>
                <h3 className="mt-3 text-xl font-semibold">Meer balans</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Je ervaart meer rust, helderheid en flow in je dagelijkse
                  werk.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="bg-white px-6 py-20 md:py-24">
          <motion.div
            className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <Image
                src="/kantoor.jpg"
                alt="Rustige kantoorruimte"
                width={1200}
                height={900}
                className="w-full rounded-[2rem] object-cover shadow-sm"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
                Over Feng Shui Nederland
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Praktisch advies voor ruimte, energie en samenwerking
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Feng Shui Nederland helpt ondernemers en professionals om hun
                ruimte bewust en logisch in te richten. Met kleine, doordachte
                veranderingen ontstaat er vaak direct meer rust, helderheid en
                energie.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Door Feng Shui te combineren met inzichten uit Nine Star Ki
                ontstaat niet alleen een prettige ruimte, maar ook meer begrip
                voor hoe mensen werken, communiceren en samenwerken.
              </p>

              <div className="mt-8">
                <a
                  href="/over-mij"
                  className="inline-flex rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
                >
                  Meer over mij
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="bg-[#2f312d] px-6 py-20 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold">
              Download gratis: 5 Feng Shui tips voor meer rust en focus
            </h2>

            <p className="mt-4 text-white/80">
              Direct toepasbare tips om meer rust, overzicht en focus te
              creeren in je werkruimte.
            </p>

            <div
              className="mt-8"
              dangerouslySetInnerHTML={{
                __html: `
<style type="text/css">
#ml-embedded-wrapper {
  margin: 0 auto;
  max-width: 720px;
}
</style>
<div id="ml-embedded-wrapper">
  <div class="ml-embedded" data-form="0FuVBO"></div>
</div>
                `,
              }}
            />
          </div>
        </section>
      </main>

      <Script
        id="mailerlite-universal"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account', '2250185');`,
        }}
      />
    </>
  );
}
