import { Zap, Radio, Droplets } from "lucide-react";

const services = [
  {
    idx: "01",
    icon: Zap,
    title: "Courant Fort",
    description:
      "Tableaux, réseaux de distribution, prises de force, éclairages techniques.",
    items: [
      "Tableaux électriques",
      "Distribution NF C 15-100",
      "Éclairage & prises",
      "Mise aux normes",
    ],
  },
  {
    idx: "02",
    icon: Radio,
    title: "Courant Faible",
    description:
      "VDI, contrôle d'accès, vidéosurveillance, sonorisation, domotique.",
    items: [
      "Réseaux VDI",
      "Contrôle d'accès",
      "Vidéosurveillance",
      "Domotique & audio",
    ],
  },
  {
    idx: "03",
    icon: Droplets,
    title: "Plomberie",
    description:
      "Sanitaires, rénovation de salle de bain, robinetterie, chauffe-eau, dépannage.",
    items: [
      "Sanitaires complets",
      "Rénovation salle de bain",
      "Chauffe-eau & ballon",
      "Dépannage & fuites",
    ],
  },
];

export default function ServicesHome() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-paper-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span>Nos services</span>
            </div>
            <h2 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Trois métiers,
              <br />
              une seule équipe.
            </h2>
          </div>
          <p className="text-ink-mute text-base lg:text-lg max-w-md leading-relaxed">
            Électriciens et plombiers formés ensemble, pour une coordination
            sans zone grise sur vos chantiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-paper rounded-3xl p-8 sm:p-10 border border-line hover:border-accent/40 hover:shadow-[0_8px_40px_-12px_rgba(255,106,44,0.15)] transition-all"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center">
                  <s.icon size={26} className="text-accent" strokeWidth={2.2} />
                </div>
                <span className="idx-tag">{s.idx}</span>
              </div>

              <h3 className="text-ink text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-4">
                {s.title}
              </h3>
              <p className="text-ink-mute text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-mute"
                  >
                    <span className="text-accent mt-1.5 shrink-0">▸</span>
                    {item}
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
