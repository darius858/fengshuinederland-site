"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/nine-star-ki", label: "Nine Star Ki" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
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
              RUST / FOCUS / BALANS
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
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

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/nine-star-ki-calculator"
              className="rounded-full border border-[#c57b57] px-5 py-3 text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
            >
              Bereken je reeks
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-[#c57b57] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#b36c49]"
            >
              Plan gratis intake
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e9e2d8] text-gray-800 transition hover:bg-[#f8f6f1] md:hidden"
          >
            <span className="text-xl leading-none">
              {mobileMenuOpen ? "X" : "="}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#e9e2d8] bg-white px-6 pb-6 pt-4 md:hidden">
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
              <Link
                href="/nine-star-ki-calculator"
                className="block w-full rounded-full border border-[#c57b57] px-5 py-3 text-center text-sm font-medium text-[#c57b57] transition hover:bg-[#c57b57] hover:text-white"
                onClick={closeMobileMenu}
              >
                Bereken je reeks
              </Link>
            </div>

            <Link
              href="/aanbod"
              className="mt-2 rounded-full border border-[#e7d6c8] bg-[#fcfaf7] px-5 py-3 text-center text-sm font-medium text-gray-800 transition hover:border-[#c57b57] hover:text-[#c57b57]"
              onClick={closeMobileMenu}
            >
              Bekijk aanbod
            </Link>

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
