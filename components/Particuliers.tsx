import { Zap, Droplets, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const categories = [
  {
    icon: Zap,
    title: "Électricité",
    items: [
      "Rénovation électrique complète",
      "Mise aux normes NF C 15-100",
      "Tableau électrique",
      "Prises, interrupteurs, éclairage",
      "Dépannage & recherche de panne",
    ],
  },
  {
    icon: Droplets,
    title: "Plomberie",
    items: [
      "Installation sanitaire",
      "Rénovation salle de bain",
      "Robinetterie & mitigeurs",
      "Chauffe-eau & ballon d'eau chaude",
      "Dépannage & fuites",
    ],
  },
];

export default function Particuliers() {
  return (
    <section id="particuliers" className="py-24 sm:py-32 bg-gradient-to-b from-[#F5F0EB] via-[#E8DFD5] to-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <div className="paris-separator mb-4">
            <span className="paris-separator-label">Particuliers</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dark">
            Votre logement
            <br />
            <span className="font-[var(--font-display)] italic font-medium">entre de bonnes mains</span>
          </h2>
          <p className="text-gray-text mt-6 text-lg leading-relaxed max-w-xl mx-auto">
            Nous intervenons pour les particuliers et les cabinets de gestion
            sur Paris et toute l&apos;Île-de-France.
          </p>
        </div>

        {/* Électricité — photos à gauche, détails à droite */}
        <div className="mb-16 flex flex-col md:flex-row gap-6 items-stretch">
          {/* Photos pastille */}
          <div className="group/elec rounded-3xl overflow-hidden shadow-lg md:w-3/5">
            <div className="flex h-64 sm:h-80 group-hover/elec:scale-[1.03] transition-transform duration-[800ms] ease-out will-change-transform">
              <div
                className="w-1/3 h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/part-1.jpg')" }}
              />
              <div
                className="w-1/3 h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/part-2.jpg')" }}
              />
              <div
                className="w-1/3 h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/part-3.jpg')" }}
              />
            </div>
          </div>
          {/* Détails pastille */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl md:w-2/5 p-8 flex flex-col justify-center" style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-accent/20 flex items-center justify-center">
                <Zap size={24} className="text-green-accent" />
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl font-bold text-dark">Électricité</h3>
            </div>
            <ul className="space-y-3">
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Rénovation électrique complète</li>
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Mise aux normes NF C 15-100</li>
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Tableau électrique</li>
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Prises, interrupteurs, éclairage</li>
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Dépannage &amp; recherche de panne</li>
            </ul>
          </div>
        </div>

        {/* Plomberie — détails à gauche, photos à droite (inversé + décalé) */}
        <div className="flex flex-col md:flex-row-reverse gap-6 items-stretch md:ml-auto md:max-w-[90%]">
          {/* Photos pastille */}
          <div className="group/plomb rounded-3xl overflow-hidden shadow-lg md:w-3/5">
            <div className="flex h-64 sm:h-80 group-hover/plomb:scale-[1.03] transition-transform duration-[800ms] ease-out will-change-transform">
              <div
                className="w-1/3 h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/plomb-2.jpeg')" }}
              />
              <div
                className="w-1/3 h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/plomb-1.jpg')" }}
              />
              <div
                className="w-1/3 h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/plomb-3.jpeg')" }}
              />
            </div>
          </div>
          {/* Détails pastille */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl md:w-2/5 p-8 flex flex-col justify-center" style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-accent/20 flex items-center justify-center">
                <Droplets size={24} className="text-green-accent" />
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl font-bold text-dark">Plomberie</h3>
            </div>
            <ul className="space-y-3">
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Installation sanitaire</li>
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Rénovation salle de bain</li>
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Robinetterie &amp; mitigeurs</li>
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Chauffe-eau &amp; ballon d&apos;eau chaude</li>
              <li className="text-gray-text text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />Dépannage &amp; fuites</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            <MessageCircle size={20} />
            Devis gratuit en 24h
          </a>
        </div>
      </div>
    </section>
  );
}
