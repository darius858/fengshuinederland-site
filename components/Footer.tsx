export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-600">
        <p className="font-medium text-gray-800">Feng Shui Nederland</p>

        <p className="mt-2">
          Praktisch Feng Shui advies voor rust, focus en balans
        </p>

        <div className="mt-4">
          <a
            href="https://www.instagram.com/fengshui_nederland/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800"
          >
            Volg Feng Shui Nederland op Instagram
          </a>
        </div>

        <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
          <a href="/privacy" className="underline hover:text-gray-800">
            Privacyverklaring
          </a>
          <a href="/cookies" className="underline hover:text-gray-800">
            Cookieverklaring
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Copyright {new Date().getFullYear()} Feng Shui Nederland
        </p>
      </div>
    </footer>
  );
}
