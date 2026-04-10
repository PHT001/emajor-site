import { Building2, Wrench, ShieldCheck } from "lucide-react";

const offers = [
  {
    idx: "01",
    icon: Building2,
    title: "Chantier tertiaire",
    description:
      "Rénovation complète de vos espaces professionnels avec une gestion de projet rigoureuse.",
    items: [
      "Pilotage, études techniques, planification",
      "Installation électrique, ventilation, climatisation",
      "Infrastructure réseau et contrôle d'accès",
    ],
  },
  {
    idx: "02",
    icon: Wrench,
    title: "Dépannage",
    description:
      "Intervention rapide 6j/7 pour rétablir le fonctionnement de vos installations.",
    items: [
      "Coupures de courant, pannes urgentes",
      "Levée de réserves ERP/ERT après commission",
      "Réponse sous 2 heures sur Paris intra-muros",
    ],
  },
  {
    idx: "03",
    icon: ShieldCheck,
    title: "Maintenance",
    description:
      "Sérénité garantie avec un suivi régulier et une astreinte permanente.",
    items: [
      "Réseaux électriques, ventilation, climatisation",
      "Astreinte jour et nuit",
      "Placement de techniciens en régie",
    ],
  },
];

export default function Offers() {
  return (
    <section id="offres" className="py-24 sm:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span>Offres</span>
            </div>
            <h2 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Trois façons
              <br />
              de travailler ensemble.
            </h2>
          </div>
        </div>

        {/* Three modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="group bg-paper-2 rounded-3xl p-8 sm:p-10 hover:bg-ink hover:text-paper transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-paper border border-line flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                  <offer.icon size={26} className="text-ink group-hover:text-ink transition-colors" strokeWidth={2.2} />
                </div>
                <span className="idx-tag group-hover:text-paper/40 transition-colors">{offer.idx}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-4">
                {offer.title}
              </h3>

              <p className="text-ink-mute group-hover:text-paper/70 transition-colors mb-6 leading-relaxed text-sm">
                {offer.description}
              </p>

              <ul className="space-y-2.5">
                {offer.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span className="text-accent mt-1.5 shrink-0">▸</span>
                    <span className="text-ink-mute group-hover:text-paper/70 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
