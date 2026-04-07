import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pt-32 pb-16 sm:pb-24 bg-anthracite overflow-hidden">
      {/* Single editorial background — heavily desaturated, vignette */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/img/header-1.jpeg')",
            filter: "grayscale(0.65) brightness(0.55) contrast(1.08)",
          }}
        />
        {/* Vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite/40 via-anthracite/30 to-anthracite" />
        {/* Bottom solid for editorial caption layout */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-anthracite via-anthracite/95 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top label */}
        <div className="paris-label text-paris-gold mb-10 sm:mb-16">
          <span>Maison fondée à Paris</span>
        </div>

        {/* Title — editorial */}
        <h1 className="font-[var(--font-heading)] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight max-w-5xl">
          Électricité
          <br />
          <span className="italic font-light">&amp;&nbsp;plomberie</span>
          <span className="text-paris-gold">.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-[var(--font-display)] italic text-white/70 text-xl sm:text-2xl md:text-3xl mt-8 max-w-2xl leading-relaxed">
          L&apos;artisanat de l&apos;ombre, au service des plus belles adresses parisiennes.
        </p>

        {/* Editorial divider */}
        <div className="h-px w-24 bg-paris-gold mt-12 mb-10" />

        {/* CTAs — editorial style, minimal */}
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-3 text-white hover:text-paris-gold transition-colors group"
          >
            <span className="w-10 h-10 rounded-full border border-white/30 group-hover:border-paris-gold flex items-center justify-center transition-colors">
              <Phone size={16} />
            </span>
            <span className="flex flex-col">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-white/50 group-hover:text-paris-gold/80 transition-colors">
                Appeler l&apos;atelier
              </span>
              <span className="text-lg font-[var(--font-heading)]">
                {CONTACT.phoneDisplay}
              </span>
            </span>
          </a>

          <span className="hidden sm:block w-px h-12 bg-white/15" />

          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white hover:text-paris-gold transition-colors group"
          >
            <span className="w-10 h-10 rounded-full border border-white/30 group-hover:border-paris-gold flex items-center justify-center transition-colors">
              <MessageCircle size={16} />
            </span>
            <span className="flex flex-col">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-white/50 group-hover:text-paris-gold/80 transition-colors">
                Devis WhatsApp
              </span>
              <span className="text-lg font-[var(--font-heading)]">
                Réponse&nbsp;sous 2h
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
