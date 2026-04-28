import Image from "next/image";
import { Zap, Radio, Droplets, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

type Card = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  image: string;
  alt: string;
  priority?: boolean;
};

const cards: Card[] = [
  {
    icon: Zap,
    title: "Courant Fort",
    description:
      "Éclairer et chauffer votre bâtiment selon la norme NF C 15-100.",
    items: [
      "Tableaux électriques",
      "Prises et interrupteurs",
      "Radiateurs électrique ou mixte",
      "Mise aux normes",
      "Automatisme",
    ],
    image: "/images/courant-fort.jpg",
    alt: "Tableau électrique modulaire avec disjoncteurs et câblage soigné — installation conforme NF C 15-100",
  },
  {
    icon: Radio,
    title: "Courant Faible",
    description:
      "Communiquer grâce au réseau VDI selon la norme NFC 90-483.",
    items: [
      "Réseau informatique",
      "Interphonie vidéo",
      "Alarmes intrusion",
      "Alarme incendie",
      "Domotique",
      "Contrôle d'accès",
    ],
    image: "/images/courant-faible.jpg",
    alt: "Baie de brassage et rack réseau — installation VDI tertiaire",
  },
  {
    icon: Droplets,
    title: "Plomberie",
    priority: true,
    description:
      "Confiez votre installation sanitaire à un professionnel pour éviter les fuites.",
    items: [
      "Chauffe-eau",
      "Salle de bain complète",
      "Recherche de fuite",
      "Réfection des joints",
      "Cuisine professionnelle",
    ],
    image: "/images/plomberie.jpg",
    alt: "Intervention plomberie sur installation sanitaire",
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
            Trois métiers, une seule équipe travaillant en coordination.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal
                key={c.title}
                as="article"
                delay={i * 120}
                className={[
                  "group relative bg-white border border-gray-200/70 rounded-2xl p-4 sm:p-7",
                  "hover:border-brand/40 hover:-translate-y-1",
                  "hover:shadow-[0_20px_40px_-20px_rgba(45,140,78,0.25)]",
                  "transition-all duration-300",
                  i === 2 ? "col-span-2 md:col-span-1" : "",
                ].join(" ")}
              >
                {c.priority && (
                  <span className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 text-[10px] sm:text-[11px] font-semibold text-brand bg-brand-light px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                    Prioritaire
                  </span>
                )}
                <div
                  className={[
                    "relative overflow-hidden mb-4 sm:mb-5 rounded-xl bg-gray-100",
                    i === 2
                      ? "aspect-[21/9] sm:aspect-[16/10]"
                      : "aspect-[16/10]",
                  ].join(" ")}
                >
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
                  </div>
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
