import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 sm:pb-20 bg-ink overflow-hidden">
      {/* Background — full bleed photo with strong grade */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/img/header-1.jpeg')",
            filter: "grayscale(0.85) brightness(0.45) contrast(1.1)",
          }}
        />
        {/* Bottom dark fade for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink via-ink/85 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top meta — small mono */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div className="eyebrow text-accent">
            <span>Disponible aujourd&apos;hui</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-paper/50 font-mono">
            <span className="idx-tag text-paper/40">PARIS / IDF</span>
            <span className="text-paper/30">·</span>
            <span className="idx-tag text-paper/40">EST. 2024</span>
          </div>
        </div>

        {/* Title — massive, tight, modern */}
        <h1 className="text-paper text-[clamp(2.75rem,9vw,9rem)] font-semibold leading-[0.9] tracking-[-0.04em] max-w-6xl">
          Électricité,
          <br />
          plomberie
          <br />
          <span className="text-accent">à&nbsp;Paris.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-paper/60 text-lg sm:text-xl md:text-2xl mt-8 max-w-2xl leading-relaxed font-light">
          Entreprise d&apos;électricité et de plomberie sur Paris et proche
          couronne. Votre logement mis en valeur par une installation soignée.
        </p>

        {/* Bottom row — CTAs and stats */}
        <div className="mt-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-6 bg-accent hover:bg-accent-dark text-ink px-7 py-5 rounded-full transition-all hover:scale-[1.02]"
            >
              <span className="inline-flex items-center gap-3">
                <WhatsAppIcon size={20} />
                <span className="font-semibold text-base">Devis WhatsApp</span>
              </span>
              <ArrowUpRight size={20} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Écrire sur WhatsApp"
              className="group inline-flex items-center justify-center w-[64px] h-[64px] bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full transition-all hover:scale-[1.05]"
            >
              <WhatsAppIcon size={28} />
            </a>
          </div>

          {/* Stats — modern metric strip */}
          <dl className="flex items-end gap-10 text-paper">
            <div>
              <dt className="text-xs text-paper/40 font-mono mb-1">Réponse moyenne</dt>
              <dd className="text-3xl sm:text-4xl font-semibold tracking-tight">2&nbsp;h</dd>
            </div>
            <div className="w-px h-12 bg-paper/15" />
            <div>
              <dt className="text-xs text-paper/40 font-mono mb-1">Disponibilité</dt>
              <dd className="text-3xl sm:text-4xl font-semibold tracking-tight">6/7</dd>
            </div>
            <div className="w-px h-12 bg-paper/15 hidden sm:block" />
            <div className="hidden sm:block">
              <dt className="text-xs text-paper/40 font-mono mb-1">Devis</dt>
              <dd className="text-3xl sm:text-4xl font-semibold tracking-tight">Gratuit</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
