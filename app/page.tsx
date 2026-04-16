"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <main className="bg-[#f8f6f1] text-gray-800">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Rustige werkruimte"
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
<p className="mt-6 text-white/90 max-w-2xl mx-auto">
  Ik maak Feng Shui begrijpbaar en praktisch — zonder standaardoplossingen, maar afgestemd op jouw ruimte.
</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#c57b57] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
                >
                  Plan gratis intake
                </a>

                <a
                  href="/diensten"
                  className="rounded-full border border-white/70 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Bekijk diensten
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WAAROM FENG SHUI */}
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
                Een ruimte heeft direct invloed op hoe je werkt en hoe je je voelt
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Wanneer een werkruimte onrustig of onlogisch aanvoelt, merk je dat
                in je concentratie en energie. Met praktische Feng Shui
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
              <img
                src="/werkruimte.jpg"
                alt="Feng Shui werkruimte"
                className="h-full w-full rounded-[2rem] object-cover shadow-sm"
              />
            </div>
          </motion.div>
        </section>

        {/* DIENSTEN */}
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
                  Persoonlijk advies op afstand, helder uitgelegd en afgestemd op
                  jouw ruimte en doelen.
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
                  Inspirerende sessies voor teams en ondernemers over rust, focus
                  en balans in de werkomgeving.
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

        {/* UITLEG + NINE STAR KI */}
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
              Feng Shui Nederland helpt ondernemers en professionals om hun ruimte
              logisch en praktisch in te richten. Geen ingewikkelde regels, maar
              duidelijke aanpassingen die direct zorgen voor meer rust, focus en
              overzicht.
              <br />
              <br />
              Naast Feng Shui werk ik ook met Nine Star Ki, een methode die
              inzicht geeft in persoonlijke energie, gedrag en samenwerking. Dit
              helpt om ruimtes niet alleen goed in te richten, maar ook beter af
              te stemmen op de mensen die erin werken.
            </p>
          </motion.div>
        </section>

        {/* WERKWIJZE */}
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
                  Je ervaart meer rust, helderheid en flow in je dagelijkse werk.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EXTRA BLOK */}
        <section className="bg-white px-6 py-20 md:py-24">
          <motion.div
            className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <img
                src="/kantoor.jpg"
                alt="Rustige kantoorruimte"
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

        {/* WEGGEVER / NIEUWSBRIEF */}
        <section className="bg-[#2f312d] px-6 py-20 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold">
              Download gratis: 5 Feng Shui tips voor meer rust en focus
            </h2>

            <p className="mt-4 text-white/80">
              Direct toepasbare tips om meer rust, overzicht en focus te creëren
              in je werkruimte.
            </p>

            <div
              className="mt-8"
              dangerouslySetInnerHTML={{
                __html: `
<style type="text/css">
@import url("https://assets.mlcdn.com/fonts.css?version=1775464");

#mlb2-39543069.ml-form-embedContainer {
  box-sizing: border-box;
  display: table;
  margin: 0 auto;
  width: 100% !important;
}

#mlb2-39543069.ml-form-embedContainer h4,
#mlb2-39543069.ml-form-embedContainer p,
#mlb2-39543069.ml-form-embedContainer span,
#mlb2-39543069.ml-form-embedContainer button,
#mlb2-39543069.ml-form-embedContainer label,
#mlb2-39543069.ml-form-embedContainer a {
  text-transform: none !important;
  letter-spacing: normal !important;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
}

#mlb2-39543069.ml-form-embedContainer .ml-form-embedWrapper {
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
  display: inline-block !important;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  max-width: 720px;
}

#mlb2-39543069.ml-form-embedContainer .ml-form-align-center {
  text-align: center;
}

#mlb2-39543069.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
#mlb2-39543069.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
  padding: 0;
}

#mlb2-39543069.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent {
  display: none;
}

#mlb2-39543069.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
  margin: 0;
  width: 100%;
}

#mlb2-39543069 .ml-form-formContent {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 0 0 12px 0;
}

#mlb2-39543069 .ml-form-fieldRow {
  margin: 0;
  width: 100%;
}

#mlb2-39543069 .ml-form-fieldRow input[type="text"],
#mlb2-39543069 .ml-form-fieldRow input[type="email"] {
  background-color: #ffffff !important;
  color: #333333 !important;
  border: 1px solid #cccccc !important;
  border-radius: 12px !important;
  font-size: 16px !important;
  line-height: 21px !important;
  padding: 14px 16px !important;
  width: 100% !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
}

#mlb2-39543069 .ml-form-fieldRow input::placeholder {
  color: #6b7280 !important;
}

#mlb2-39543069 .ml-consent {
  margin: 14px 0 18px 0;
  text-align: left;
  color: rgba(255,255,255,.92);
  font-size: 15px;
  line-height: 1.5;
}

#mlb2-39543069 .ml-consent label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
}

#mlb2-39543069 .ml-consent input[type="checkbox"] {
  margin-top: 3px;
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
}

#mlb2-39543069 .ml-consent a {
  color: #ffffff !important;
  text-decoration: underline !important;
}

#mlb2-39543069 .ml-form-embedSubmit {
  margin: 0;
  width: 100%;
}

#mlb2-39543069 .ml-form-embedSubmit button {
  background-color: #c57b57 !important;
  border: none !important;
  border-radius: 9999px !important;
  color: #ffffff !important;
  cursor: pointer;
  font-size: 15px !important;
  font-weight: 700 !important;
  line-height: 21px !important;
  padding: 14px 20px !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

#mlb2-39543069 .ml-form-embedSubmit button:hover {
  background-color: #b36c49 !important;
}

#mlb2-39543069 .ml-form-successBody .ml-form-successContent {
  text-align: center;
  color: white;
  padding: 24px 0;
}

#mlb2-39543069 .ml-form-successBody .ml-form-successContent h4 {
  color: #ffffff;
  font-size: 24px;
  margin: 0 0 10px 0;
  text-align: center;
}

#mlb2-39543069 .ml-form-successBody .ml-form-successContent p {
  color: rgba(255,255,255,.8);
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0;
}

.ml-form-embedSubmitLoad {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.ml-form-embedSubmitLoad:after {
  content: " ";
  display: block;
  width: 11px;
  height: 11px;
  margin: 1px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-color: #ffffff #ffffff #ffffff transparent;
  animation: ml-form-embedSubmitLoad 1.2s linear infinite;
}

@keyframes ml-form-embedSubmitLoad {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

.success-animation {
  text-align: center;
  color: white;
  padding: 20px 0;
}

.checkmark-circle {
  width: 70px;
  height: 70px;
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
}

.checkmark-circle::before {
  content: "";
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid #c57b57;
  position: absolute;
  top: 0;
  left: 0;
  animation: scaleIn 0.3s ease-out forwards;
}

.checkmark {
  position: absolute;
  left: 18px;
  top: 34px;
  width: 20px;
  height: 10px;
  border-left: 3px solid #c57b57;
  border-bottom: 3px solid #c57b57;
  transform: rotate(-45deg);
  opacity: 0;
}

.checkmark.draw {
  animation: drawCheck 0.4s ease-out 0.3s forwards;
}

@keyframes scaleIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes drawCheck {
  from { opacity: 0; transform: scale(0.5) rotate(-45deg); }
  to { opacity: 1; transform: scale(1) rotate(-45deg); }
}

@media (min-width: 640px) {
  #mlb2-39543069 .ml-form-formContent {
    grid-template-columns: 1fr 1fr;
  }

  #mlb2-39543069 .ml-form-embedSubmit {
    margin-top: 12px;
  }
}
</style>

<div id="mlb2-39543069" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-39543069">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent">
          <h4>Ontvang direct gratis Feng Shui tips</h4>
          <p>Meld je aan en ontvang direct de gratis gids voor meer rust en focus in je werkruimte.</p>
        </div>

        <form
          class="ml-block-form"
          action="https://assets.mailerlite.com/jsonp/2250185/forms/184079357090727808/subscribe"
          data-code=""
          method="post"
          target="_blank"
        >
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow">
              <div class="ml-field-group ml-field-name">
                <input
                  aria-label="name"
                  type="text"
                  class="form-control"
                  name="fields[name]"
                  placeholder="Naam"
                  autocomplete="given-name"
                />
              </div>
            </div>

            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input
                  aria-label="email"
                  aria-required="true"
                  type="email"
                  class="form-control"
                  name="fields[email]"
                  placeholder="E-mailadres"
                  autocomplete="email"
                />
              </div>
            </div>
          </div>

          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />

          <div class="ml-consent">
            <label>
              <input type="checkbox" required />
              <span>
                Ik ga akkoord met het ontvangen van e-mails en de
                <a href="/privacy" target="_blank"> privacyverklaring</a>
              </span>
            </label>
          </div>

          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary">Download gratis gids</button>
            <button disabled="disabled" style="display:none;" type="button" class="loading">
              <div class="ml-form-embedSubmitLoad"></div>
              <span class="sr-only">Loading...</span>
            </button>
          </div>
        </form>
      </div>

      <div class="ml-form-successBody row-success" style="display:none">
        <div class="ml-form-successContent success-animation">
          <div class="checkmark-circle">
            <div class="checkmark draw"></div>
          </div>
          <h4>Gelukt!</h4>
          <p>Je ontvangt binnen een paar minuten de gratis gids in je mailbox.</p>
        </div>
      </div>
    </div>
  </div>
</div>
                `,
              }}
            />
          </div>
        </section>
      </main>

      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}