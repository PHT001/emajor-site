const arrondissements = [
  { num: "06", name: "Saint-Germain" },
  { num: "07", name: "Invalides" },
  { num: "08", name: "Champs-Élysées" },
  { num: "11", name: "Bastille" },
  { num: "12", name: "Reuilly" },
  { num: "13", name: "Gobelins" },
  { num: "14", name: "Montparnasse" },
  { num: "15", name: "Vaugirard" },
  { num: "16", name: "Passy" },
  { num: "17", name: "Batignolles" },
];

export default function Arrondissements() {
  return (
    <section className="py-24 sm:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="eyebrow paris-label-centered mb-4">
            <span>Zone d&apos;intervention</span>
          </div>
          <h2 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
            Présents partout
            <br />
            dans Paris.
          </h2>
        </div>

        {/* Modern grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {arrondissements.map((a) => (
            <li
              key={a.num}
              className="group bg-paper-2 hover:bg-ink rounded-2xl p-5 sm:p-6 text-center transition-colors cursor-default"
            >
              <div className="text-2xl sm:text-3xl font-semibold text-ink group-hover:text-accent transition-colors">
                {a.num}
              </div>
              <div className="text-[0.65rem] uppercase tracking-wider text-ink-faint group-hover:text-paper/60 mt-2 transition-colors">
                {a.name}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-ink-mute font-medium">
          + Boulogne, Montrouge, Vanves, Issy-les-Moulineaux, Gentilly
        </p>
        <p className="mt-2 text-center text-sm text-ink-faint">
          + toute l&apos;Île-de-France pour les chantiers tertiaires
        </p>
      </div>
    </section>
  );
}
