import { Star, ShieldCheck, Building2 } from "lucide-react";

const blocks = [
  {
    idx: "01",
    icon: Star,
    title: "Ils nous recommandent",
    description:
      "Plus de 200 interventions réalisées sur Paris et en Île-de-France, avec des retours clients constants sur la ponctualité et la propreté de chantier.",
    stats: [
      { label: "Note moyenne", value: "4,9/5" },
      { label: "Avis vérifiés", value: "120+" },
    ],
  },
  {
    idx: "02",
    icon: ShieldCheck,
    title: "Assurés & certifiés",
    description:
      "Décennale, RC Pro, attestations fournies sans demande. Techniciens habilités B1V / B2V / BR pour tous travaux électriques.",
    stats: [
      { label: "Décennale", value: "Active" },
      { label: "Habilitations", value: "B/BR/H0" },
    ],
  },
  {
    idx: "03",
    icon: Building2,
    title: "Références",
    description:
      "Hôtels 4★, cabinets de gestion, théâtres parisiens, restaurants étoilés, cabinets d'architectes. Discrétion et RIB transmis sur demande.",
    stats: [
      { label: "Secteurs", value: "CHR · Hôtels · Théâtres" },
      { label: "Zone", value: "Paris / IDF" },
    ],
  },
];

export default function Confiance() {
  return (
    <section className="py-24 sm:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span>Confiance</span>
            </div>
            <h2 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Sérieux,
              <br />
              c&apos;est notre base.
            </h2>
          </div>
          <p className="text-ink-mute text-base lg:text-lg max-w-md leading-relaxed">
            Artisans déclarés, assurés, habilités. Pas de sous-traitance cachée,
            pas de surprise sur le devis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="bg-paper-2 rounded-3xl p-8 sm:p-10 border border-line"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-ink flex items-center justify-center">
                  <b.icon size={24} className="text-accent" strokeWidth={2.2} />
                </div>
                <span className="idx-tag">{b.idx}</span>
              </div>

              <h3 className="text-ink text-2xl sm:text-3xl font-semibold tracking-[-0.03em] mb-4">
                {b.title}
              </h3>
              <p className="text-ink-mute text-sm leading-relaxed mb-8">
                {b.description}
              </p>

              <dl className="grid grid-cols-2 gap-4 pt-6 border-t border-line">
                {b.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs text-ink-faint font-mono mb-1">
                      {s.label}
                    </dt>
                    <dd className="text-ink text-base font-semibold">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
