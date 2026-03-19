import { PenTool, Zap, Monitor, Wind, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/33XXXXXXXXX";

export default function Services() {
  return (
    <section id="tertiaire" className="relative bg-[#111111] overflow-hidden">
      {/* Warm light sources */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#D4A44A]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#C48A3F]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section header */}
      <div className="relative z-10 max-w-2xl mx-auto text-center pt-24 sm:pt-32 pb-16 px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-green-accent" />
          <span className="text-sm font-semibold text-green-accent uppercase tracking-widest">
            Tertiaire
          </span>
          <div className="w-8 h-[2px] bg-green-accent" />
        </div>
        <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
          Nos domaines
          <br />
          d&apos;expertise
        </h2>
        <p className="text-white/50 mt-6 text-lg leading-relaxed max-w-xl mx-auto">
          Commerces, plateaux de bureaux, cafés-hôtels-restaurants (CHR),
          théâtres — nous intervenons sur tous types de locaux professionnels.
        </p>
      </div>

      {/* Bento Grid — full width */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-2 px-2">

        {/* Maîtrise d'œuvre — 2 colonnes */}
        <div className="group md:col-span-2 relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#1A1A1A]">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out will-change-transform"
            style={{ backgroundImage: "url('/assets/img/schema-horizontal.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          {/* Glass overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div
              className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-accent/20 flex items-center justify-center">
                  <PenTool size={20} className="text-green-accent" />
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white">
                  Maîtrise d&apos;œuvre
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Études", "Conception", "Pilotage"].map((item) => (
                  <span key={item} className="px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-white/70 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Électricité — 1 colonne */}
        <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#1A1A1A]">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out will-change-transform"
            style={{ backgroundImage: "url('/assets/img/tableau-tert.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div
              className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl p-5"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-accent/20 flex items-center justify-center">
                  <Zap size={20} className="text-green-accent" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-white">
                  Électricité
                </h3>
              </div>
              <ul className="space-y-2">
                {["Courant fort", "Courant faible", "Éclairage"].map((item) => (
                  <li key={item} className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CVC — 1 colonne */}
        <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#1A1A1A]">
          <div
            className="absolute inset-0 bg-cover group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out will-change-transform"
            style={{ backgroundImage: "url('/assets/img/cvc.jpg')", backgroundPosition: "center 48%" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div
              className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl p-5"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-accent/20 flex items-center justify-center">
                  <Wind size={20} className="text-green-accent" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-white">
                  CVC
                </h3>
              </div>
              <ul className="space-y-2">
                {["Traitement d'air", "Climatisation"].map((item) => (
                  <li key={item} className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Supervision — 2 colonnes */}
        <div className="group md:col-span-2 relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#1A1A1A]">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out will-change-transform"
            style={{ backgroundImage: "url('/assets/img/infra.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div
              className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-accent/20 flex items-center justify-center">
                  <Monitor size={20} className="text-green-accent" />
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white">
                  Supervision
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Automatisme", "Infrastructure Réseaux", "GMAO"].map((item) => (
                  <span key={item} className="px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-white/70 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="relative z-10 py-16 text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          <MessageCircle size={20} />
          Demander un devis gratuit
        </a>
      </div>
    </section>
  );
}
