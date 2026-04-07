import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-light">
      {/* Background — two images side by side */}
      <div className="absolute inset-0 flex">
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/img/header-2.jpg')" }}
        />
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/img/header-1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Logo accent */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <div className="w-2 h-2 rounded-full bg-green-accent" />
          <span className="text-sm font-medium text-white/90">
            Paris &mdash; Île-de-France
          </span>
        </div>

        {/* Frosted glass card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-10 sm:px-16 lg:px-20 py-10 sm:py-14 shadow-2xl"
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-8">
            Électricité
            <span
              className="mx-3 lg:mx-6 inline-block"
              style={{
                background: "linear-gradient(180deg, #5CDB8B 0%, #2D8C4E 50%, #0D3B1E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >&amp;</span>
            plomberie
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              <MessageCircle size={20} />
              Devis sur WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              <Phone size={20} />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-green-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
