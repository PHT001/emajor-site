const offers = [
  {
    num: "I",
    title: "Chantier tertiaire",
    description:
      "Rénovation complète de vos espaces professionnels avec une gestion de projet rigoureuse.",
    items: [
      "Pilotage de chantier, études techniques, planification",
      "Installation électrique, ventilation, climatisation",
      "Infrastructure réseau et contrôle d'accès",
    ],
  },
  {
    num: "II",
    title: "Dépannage",
    description:
      "Intervention rapide 7j/7 pour rétablir le fonctionnement de vos installations.",
    items: [
      "Coupures de courant, pannes urgentes",
      "Levée de réserves ERP/ERT (hôtelier) après commission de sécurité",
    ],
  },
  {
    num: "III",
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
    <section id="offres" className="py-24 sm:py-32 bg-paris-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial header */}
        <div className="max-w-2xl mb-20">
          <div className="paris-label mb-6">
            <span>Offres</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-anthracite text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Trois manières
            <br />
            de <span className="italic font-light">travailler</span> ensemble
            <span className="text-paris-gold">.</span>
          </h2>
        </div>

        {/* Three editorial columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-paris-stone border border-paris-stone">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-paris-cream p-10 sm:p-12 hover:bg-paris-ivory transition-colors group"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-[var(--font-heading)] italic text-paris-gold text-3xl">
                  {offer.num}
                </span>
                <div className="h-px w-16 bg-paris-gold/40 mt-4" />
              </div>

              <h3 className="font-[var(--font-heading)] text-anthracite text-2xl sm:text-3xl mb-4 group-hover:text-paris-gold transition-colors">
                {offer.title}
                <span className="text-paris-gold">.</span>
              </h3>

              <p className="text-anthracite/70 mb-6 leading-relaxed text-sm">
                {offer.description}
              </p>

              <ul className="space-y-3">
                {offer.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-anthracite/75 text-sm leading-relaxed"
                  >
                    <span className="text-paris-gold text-xs shrink-0">—</span>
                    <span>{item}</span>
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
