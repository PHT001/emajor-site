import { Zap, Radio, Droplets } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Courant Fort",
    description:
      "Distribution électrique, tableaux, prises et éclairage. Mise aux normes NF C 15-100.",
    items: [
      "Tableaux électriques",
      "Prises et interrupteurs",
      "Éclairage LED",
      "Mise aux normes",
    ],
  },
  {
    icon: Radio,
    title: "Courant Faible",
    description:
      "Réseaux VDI, domotique, contrôle d'accès, vidéosurveillance.",
    items: [
      "Réseau informatique",
      "Interphones vidéo",
      "Alarmes et détection",
      "Domotique",
    ],
  },
  {
    icon: Droplets,
    title: "Plomberie",
    priority: true,
    description:
      "Chauffe-eau, sanitaires, fuites, robinetterie. Intervention rapide.",
    items: [
      "Chauffe-eau",
      "Salle de bain complète",
      "Fuites et dépannage",
      "Robinetterie",
    ],
  },
];

export default function ExpertiseDomains() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-dark text-[32px] sm:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-4">
            Nos domaines d&apos;expertise
          </h2>
          <p className="text-gray-text text-[16px] leading-relaxed">
            Trois métiers, une seule équipe. On coordonne tous les corps
            d&apos;état pour que votre chantier avance sans zone grise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group bg-white border border-gray-200/60 rounded-2xl p-7 hover:border-brand/40 hover:-translate-y-1 hover:shadow-2xl transition-all relative"
            >
              {c.priority && (
                <span className="absolute top-5 right-5 text-[11px] font-semibold text-brand bg-brand-light px-2.5 py-1 rounded-full">
                  Prioritaire
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-5">
                <c.icon size={22} className="text-brand" strokeWidth={2.2} />
              </div>
              <h3 className="font-heading text-dark text-[22px] font-semibold mb-3">
                {c.title}
              </h3>
              <p className="text-gray-text text-[14px] leading-relaxed mb-5">
                {c.description}
              </p>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-[13px] text-gray-text"
                  >
                    <span className="text-brand mt-1.5 shrink-0 w-1 h-1 rounded-full bg-brand" />
                    {it}
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
