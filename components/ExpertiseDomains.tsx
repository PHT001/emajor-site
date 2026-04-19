import { Zap, Radio, Droplets } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Courant Fort",
    description:
      "Tableaux, prises, éclairage, mise aux normes NF C 15-100.",
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
    <section
      id="services"
      className="py-14 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Nos domaines d&apos;expertise
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Trois métiers, une seule équipe. On coordonne tous les corps
            d&apos;état pour que votre chantier avance sans zone grise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className={[
                "group relative bg-white border border-gray-200/70 rounded-2xl p-4 sm:p-7",
                "hover:border-brand/40 hover:-translate-y-1",
                "hover:shadow-[0_20px_40px_-20px_rgba(45,140,78,0.25)]",
                "transition-all duration-300",
                // The 3rd card takes full width on mobile (odd one out)
                i === 2 ? "col-span-2 md:col-span-1" : "",
              ].join(" ")}
            >
              {c.priority && (
                <span className="absolute top-3 right-3 sm:top-5 sm:right-5 text-[10px] sm:text-[11px] font-semibold text-brand bg-brand-light px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                  Prioritaire
                </span>
              )}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-light flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-105 group-hover:bg-brand transition-all duration-300">
                <c.icon
                  size={18}
                  className="text-brand group-hover:text-white transition-colors duration-300 sm:hidden"
                  strokeWidth={2.2}
                />
                <c.icon
                  size={22}
                  className="text-brand group-hover:text-white transition-colors duration-300 hidden sm:block"
                  strokeWidth={2.2}
                />
              </div>
              <h3 className="font-heading text-dark text-[16px] sm:text-[22px] font-semibold mb-1.5 sm:mb-3 leading-tight">
                {c.title}
              </h3>
              <p className="text-gray-text text-[12.5px] sm:text-[14px] leading-relaxed mb-3 sm:mb-5">
                {c.description}
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-[12px] sm:text-[13px] text-gray-text"
                  >
                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-brand" />
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
