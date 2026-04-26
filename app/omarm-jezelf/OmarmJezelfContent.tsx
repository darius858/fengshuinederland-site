"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const modules = [
  "Welkom in de wereld van Nine Star Ki",
  "De taal van energie",
  "Jouw hoofdgetal",
  "Jouw binnenwereld",
  "Jouw kracht en valkuilen",
  "Jij in relatie tot anderen",
  "Omarm wie je bent",
];

const benefits = [
  "Meer inzicht in je patronen en natuurlijke energie",
  "Een zachtere blik op jezelf en hoe jij beweegt door het leven",
  "Een warme, toegankelijke kennismaking met Nine Star Ki",
  "Praktische reflectievragen en oefeningen die je direct kunt gebruiken",
];

const audience = [
  "zichzelf beter willen begrijpen",
  "hun kwaliteiten en valkuilen helderder willen zien",
  "meer rust, zachtheid en zelfinzicht zoeken",
  "nieuwsgierig zijn naar Nine Star Ki zonder dat het te technisch wordt",
];

export default function OmarmJezelfContent() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800 md:py-24">
      <div className="mx-auto max-w-6xl">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
              Online cursus
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Omarm Jezelf
            </h1>

            <p className="mt-4 text-xl text-[#8a5a3b]">
              Leer jezelf begrijpen met Nine Star Ki
            </p>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Omarm Jezelf is een warme en toegankelijke online cursus voor
              vrouwen die meer inzicht willen in zichzelf, hun patronen en hun
              natuurlijke energie. Via Nine Star Ki leer je met meer zachtheid
              en helderheid naar jezelf kijken.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#interesselijst"
                className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
              >
                Meld je interesse
              </a>

              <Link
                href="/nine-star-ki"
                className="rounded-full border border-[#c57b57] px-7 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Meer over Nine Star Ki
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#eee7dd]">
              <Image
                src="/omarm-jezelf-hero-lifestyle.png"
                alt="Vrouw die Omarm Jezelf op een tablet volgt in een warme, rustige setting"
                width={1200}
                height={900}
                className="h-[320px] w-full object-cover"
                priority
              />
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
                Wat deze cursus je brengt
              </p>

              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#c57b57]" />
                    <span className="leading-7 text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
              Voor wie
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Voor vrouwen die zichzelf beter willen begrijpen
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Deze cursus is voor vrouwen die voelen dat bepaalde patronen zich
              blijven herhalen en die verlangen naar meer rust, helderheid en
              mildheid naar zichzelf.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {audience.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd]"
              >
                <p className="leading-7 text-gray-700">Voor vrouwen die {item}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#eee7dd]">
            <Image
              src="/omarm-jezelf-reflectie-landschap.png"
              alt="Vrouw in een rustig landschap als beeld voor reflectie, zelfinzicht en innerlijke groei"
              width={1200}
              height={900}
              className="h-[320px] w-full object-cover"
            />
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
              Rust en reflectie
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Een cursus om even stil te staan bij jezelf
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Omarm Jezelf is geen zware theoriecursus. Het is een zachte en
              heldere verdieping waarin je stap voor stap leert kijken naar wie
              jij bent, wat jou beweegt en wat je nodig hebt om meer in balans
              te zijn.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Juist door rust, herkenning en praktische reflectie ontstaat er
              ruimte voor zelfbegrip.
            </p>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-[#fcfaf7] p-8 ring-1 ring-[#eee7dd] md:p-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
                Waarom Nine Star Ki
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Een zachte ingang naar meer zelfinzicht
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Nine Star Ki helpt je om jezelf beter te begrijpen via energie,
                karakter en levenspatronen. Niet om jezelf in een hokje te
                stoppen, maar om te herkennen wat jou drijft, wat je nodig hebt
                en waar je soms uit balans raakt.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                In Omarm Jezelf gebruiken we Nine Star Ki als spiegel. Zodat je
                jezelf niet harder hoeft aan te pakken, maar juist beter leert
                verstaan.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#eee7dd]">
              <Image
                src="/omarm-jezelf-bagua.png"
                alt="Conceptuele Feng Shui bagua op papier als beeld voor Nine Star Ki en zelfinzicht"
                width={1200}
                height={900}
                className="h-[280px] w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
              Cursusopbouw
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Wat je in de cursus gaat ontdekken
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {modules.map((module, index) => (
                <div
                  key={module}
                  className="rounded-2xl bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd]"
                >
                  <p className="text-sm font-medium text-[#c57b57]">
                    Module {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800">
                    {module}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="interesselijst"
          className="mt-14 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10"
        >
          <Script id="mailerlite-omarm-jezelf" strategy="afterInteractive">
            {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml'); ml('account', '2250185');`}
          </Script>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-[#c57b57]">
              Interesselijst
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Wil je als eerste horen wanneer de cursus opent?
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Laat hieronder je naam en e-mailadres achter. Dan houd ik je op
              de hoogte van de start, inhoud en mogelijkheden van Omarm Jezelf.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-[1.75rem] bg-[#fcfaf7] p-6 ring-1 ring-[#efe7dd] md:p-8">
            <div className="ml-embedded" data-form="eO0ZPz" />
          </div>
        </section>
      </div>
    </main>
  );
}
