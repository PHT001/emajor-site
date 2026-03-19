import { Building2, WrenchIcon, ShieldCheck } from "lucide-react";

const offers = [
  {
    icon: Building2,
    title: "Chantier tertiaire",
    description:
      "Rénovation complète de vos espaces professionnels avec une gestion de projet rigoureuse.",
    items: [
      "Pilotage de chantier, études techniques et planification",
      "Installation électrique, ventilation, climatisation",
      "Infrastructure réseau et contrôle d'accès",
    ],
  },
  {
    icon: WrenchIcon,
    title: "Dépannage",
    description:
      "Intervention rapide 7j/7 pour rétablir le fonctionnement de vos installations.",
    items: [
      "Intervention rapide en cas de coupure de courant",
      "Levée de réserve de site ERP/ERT (hôtelier) suite au passage de commission de sécurité",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Contrat de maintenance",
    description:
      "Sérénité garantie avec un suivi régulier et une astreinte permanente.",
    items: [
      "Maintenance de vos réseaux électriques, ventilation et climatisation",
      "Astreinte jour/nuit",
      "Placement de techniciens en régie",
    ],
  },
];

export default function Offers() {
  return (
    <section id="offres" className="py-24 sm:py-32 bg-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-green-accent" />
            <span className="text-sm font-semibold text-green-accent uppercase tracking-widest">
              Offres
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dark">
            Ce que nous
            <br />
            vous proposons
          </h2>
        </div>

        {/* Offer blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className="bg-white rounded-2xl p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Number + icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-[var(--font-heading)] text-6xl font-bold text-gray-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-14 h-14 rounded-xl bg-green-light flex items-center justify-center">
                  <offer.icon size={28} className="text-green-accent" />
                </div>
              </div>

              <h3 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-3">
                {offer.title}
              </h3>

              <p className="text-gray-text mb-6 leading-relaxed">
                {offer.description}
              </p>

              <ul className="space-y-3">
                {offer.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-accent mt-2 shrink-0" />
                    <span className="text-gray-text text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
