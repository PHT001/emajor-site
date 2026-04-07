import { Zap, Droplets, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const blocks = [
  {
    idx: "01",
    icon: Zap,
    title: "Électricité",
    items: [
      "Rénovation électrique complète",
      "Mise aux normes NF C 15-100",
      "Tableau électrique",
      "Prises, interrupteurs, éclairage",
      "Dépannage & recherche de panne",
    ],
    images: ["/assets/img/part-1.jpg", "/assets/img/part-2.jpg", "/assets/img/part-3.jpg"],
  },
  {
    idx: "02",
    icon: Droplets,
    title: "Plomberie",
    items: [
      "Installation sanitaire",
      "Rénovation salle de bain",
      "Robinetterie & mitigeurs",
      "Chauffe-eau & ballon d'eau chaude",
      "Dépannage & fuites",
    ],
    images: ["/assets/img/plomb-2.jpeg", "/assets/img/plomb-1.jpg", "/assets/img/plomb-3.jpeg"],
  },
];

export default function Particuliers() {
  return (
    <section id="particuliers" className="py-24 sm:py-32 bg-paper-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span>Particuliers</span>
            </div>
            <h2 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Votre logement,
              <br />
              entre nos mains.
            </h2>
          </div>
          <p className="text-ink-mute text-base lg:text-lg max-w-md leading-relaxed">
            Nous intervenons sur Paris et toute l&apos;Île-de-France pour les
            particuliers et les cabinets de gestion. Devis gratuit sous 24h.
          </p>
        </div>

        {/* Two big editorial blocks */}
        <div className="space-y-8 lg:space-y-12">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Big triptych image */}
              <div className="lg:col-span-7 grid grid-cols-3 gap-2 rounded-3xl overflow-hidden h-80 sm:h-96">
                {b.images.map((src) => (
                  <div
                    key={src}
                    className="bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${src}')`,
                      filter: "grayscale(0.15) contrast(1.05)",
                    }}
                  />
                ))}
              </div>

              {/* Text card */}
              <div className="lg:col-span-5 bg-paper rounded-3xl p-8 sm:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center">
                    <b.icon size={26} className="text-accent" strokeWidth={2.2} />
                  </div>
                  <span className="idx-tag">{b.idx}</span>
                </div>
                <h3 className="text-ink text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-6">
                  {b.title}
                </h3>
                <ul className="space-y-3 mb-8 flex-1">
                  {b.items.map((item) => (
                    <li
                      key={item}
                      className="text-ink-mute text-sm leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-accent mt-1.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-10 bg-ink rounded-3xl">
          <div>
            <div className="text-paper text-2xl sm:text-3xl font-semibold tracking-tight">
              Devis gratuit sous 24&nbsp;heures.
            </div>
            <div className="text-paper/60 text-sm mt-2">
              Envoyez-nous quelques photos par WhatsApp, on vous répond immédiatement.
            </div>
          </div>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-ink px-7 py-4 rounded-full font-semibold transition-colors shrink-0"
          >
            Démarrer
            <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
