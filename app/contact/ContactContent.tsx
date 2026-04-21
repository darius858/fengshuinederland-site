"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mreoryol", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      form.reset();
      setSubmitted(true);
    } else {
      alert("Er ging iets mis. Probeer opnieuw.");
    }
  }

  if (submitted) {
    return (
      <main className="bg-[#f8f6f1] px-6 py-24 text-gray-800">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-sm ring-1 ring-[#eee7dd] md:p-14">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Aanvraag verzonden
          </p>

          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Bedankt voor je bericht
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            Je aanvraag is goed ontvangen. Ik neem zo snel mogelijk persoonlijk
            contact met je op om een intakegesprek in te plannen.
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex rounded-full bg-[#c57b57] px-6 py-3 text-white transition hover:bg-[#b36c49]"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f8f6f1] px-6 py-20 text-gray-800 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c57b57]">
            Gratis intake
          </p>

          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Plan een gratis intakegesprek
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            Benieuwd wat er mogelijk is in jouw werkruimte of situatie? Laat je
            gegevens achter en ik neem persoonlijk contact met je op om samen te
            kijken wat passend is.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eee7dd] md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="Nieuwe aanvraag Feng Shui Nederland"
            />

            <div>
              <label htmlFor="name" className="block text-sm text-gray-700">
                Naam
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#c57b57]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#c57b57]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700">
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#c57b57]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#c57b57] px-6 py-3 font-medium text-white transition hover:bg-[#b36c49] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Versturen..." : "Verstuur aanvraag"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Ik neem meestal binnen 48 uur persoonlijk contact met je op.
          </p>
        </div>
      </div>
    </main>
  );
}
