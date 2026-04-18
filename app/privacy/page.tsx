import type { Metadata } from "next";

import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Privacyverklaring | Feng Shui Nederland",
  description:
    "Lees de privacyverklaring van Feng Shui Nederland en bekijk welke persoonsgegevens worden verwerkt en waarom.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
          Privacyverklaring
        </p>

        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          Privacyverklaring Feng Shui Nederland
        </h1>

        <p className="mt-6 leading-8 text-gray-600">
          Feng Shui Nederland hecht veel waarde aan jouw privacy. In deze
          privacyverklaring leg ik uit welke persoonsgegevens worden verwerkt,
          waarom dit gebeurt en hoe zorgvuldig hiermee wordt omgegaan.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Welke gegevens worden verwerkt</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Wanneer je contact opneemt, je inschrijft voor de nieuwsbrief of
            gebruikmaakt van een formulier op deze website, kunnen de volgende
            gegevens worden verwerkt:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Eventuele informatie die je zelf invult in een formulier of bericht</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Waarom deze gegevens worden gebruikt</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Jouw gegevens worden alleen gebruikt voor doeleinden die passen bij
            Feng Shui Nederland, zoals:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Het beantwoorden van vragen of contactverzoeken</li>
            <li>Het versturen van de aangevraagde gratis gids</li>
            <li>Het versturen van inspiratiemails of nieuwsbrieven wanneer je je daarvoor hebt aangemeld</li>
            <li>Het verbeteren van de dienstverlening en website</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Nieuwsbrief en e-mails</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Wanneer je je inschrijft voor de nieuwsbrief of een gratis gids
            aanvraagt, wordt jouw e-mailadres gebruikt om je de gevraagde
            informatie en relevante e-mails te sturen. Je kunt je op ieder
            moment weer uitschrijven via de afmeldlink onderaan de e-mail.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Delen van gegevens</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Persoonsgegevens worden niet verkocht aan derden. Alleen wanneer dit
            nodig is voor het functioneren van de website of e-maildienst, kan
            gebruik worden gemaakt van betrouwbare verwerkers, zoals een
            nieuwsbriefsysteem of hostingpartij.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Bewaartermijn</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Jouw gegevens worden niet langer bewaard dan nodig is voor het doel
            waarvoor ze zijn verzameld, tenzij er een wettelijke verplichting
            bestaat om gegevens langer te bewaren.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Jouw rechten</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Je hebt het recht om jouw persoonsgegevens in te zien, te laten
            corrigeren of te laten verwijderen. Ook kun je bezwaar maken tegen
            het gebruik van jouw gegevens of eerder gegeven toestemming
            intrekken.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Heb je vragen over deze privacyverklaring of wil je gebruikmaken van
            jouw rechten? Neem dan contact op via:
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            Feng Shui Nederland
            <br />
            info@fengshuinederland.nl
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Wijzigingen</h2>
          <p className="mt-4 leading-8 text-gray-600">
            Feng Shui Nederland behoudt zich het recht voor om deze
            privacyverklaring te wijzigen. De meest actuele versie staat altijd
            op deze pagina.
          </p>
        </section>
      </div>
    </main>
  );
}
