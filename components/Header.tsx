"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/nine-star-ki", label: "Nine Star Ki" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCalculatorOpen, setMobileCalculatorOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCalculatorOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileCalculatorOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileCalculatorOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e9e2d8] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
          onClick={closeMobileMenu}
        >
          <Image
            src="/logo.png"
            alt="Logo Feng Shui Nederland"
            width={44}
            height={44}
            priority
            className="rounded-full"
          />
          <div className="leading-tight">
            <span className="block text-base font-semibold text-gray-800 md:text-lg">
              Feng Shui Nederland
            </span>
            <span className="hidden text-xs tracking-[0.18em] text-[#c57b57] md:block">
              RUST • FOCUS • BALANS
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop navigatie */}
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#c57b57]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop acties */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setCalculatorOpen((prev) => !prev)}
                className="rounded-full border border-[#c57b57] px-5 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Ontdek je reeks
              </button>

              {calculatorOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-[#eee7dd] bg-white shadow-lg">
                  <a
                    href="https://play.google.com/store/apps/details?id=nl.fengshuinederland.ninestarkicalculator&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-[#f8f6f1]"
                    onClick={() => setCalculatorOpen(false)}
                  >
                    📱 Android app downloaden
                  </a>

                  <a
                    href="https://app.fengshuinederland.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-[#f8f6f1]"
                    onClick={() => setCalculatorOpen(false)}
                  >
                    🌐 Open webversie
                  </a>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-[#c57b57] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Plan gratis intake
            </Link>
          </div>

          {/* Mobiele knop */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e9e2d8] text-gray-800 transition hover:bg-[#f8f6f1] md:hidden"
          >
            <span className="text-xl leading-none">
              {mobileMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobiel menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="border-t border-[#e9e2d8] bg-white px-6 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-4 text-base text-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#c57b57]"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  setMobileCalculatorOpen((prev) => !prev)
                }
                className="w-full rounded-full border border-[#c57b57] px-5 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
              >
                Ontdek je reeks
              </button>

              {mobileCalculatorOpen && (
                <div className="mt-3 overflow-hidden rounded-xl border border-[#eee7dd] bg-[#fcfaf7]">
                  <a
                    href="https://play.google.com/store/apps/details?id=nl.fengshuinederland.ninestarkicalculator&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-[#f8f6f1]"
                    onClick={closeMobileMenu}
                  >
                    📱 Android app downloaden
                  </a>

                  <a
                    href="https://app.fengshuinederland.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-[#f8f6f1]"
                    onClick={closeMobileMenu}
                  >
                    🌐 Open webversie
                  </a>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="mt-2 rounded-full bg-[#c57b57] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#b36c49]"
              onClick={closeMobileMenu}
            >
              Plan gratis intake
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}