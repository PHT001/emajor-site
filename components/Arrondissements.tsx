const arrondissements = [
  { num: "Iᵉʳ", name: "Louvre" },
  { num: "IVᵉ", name: "Le Marais" },
  { num: "VIᵉ", name: "Saint-Germain" },
  { num: "VIIᵉ", name: "Invalides" },
  { num: "VIIIᵉ", name: "Champs-Élysées" },
  { num: "IXᵉ", name: "Opéra" },
  { num: "XIVᵉ", name: "Montparnasse" },
  { num: "XVIᵉ", name: "Passy" },
  { num: "XVIIᵉ", name: "Batignolles" },
];

export default function Arrondissements() {
  return (
    <section className="py-24 sm:py-32 bg-paris-ivory border-y border-paris-stone">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Editorial header */}
        <div className="text-center mb-20">
          <div className="paris-label paris-label-centered mb-6">
            <span>Nos arrondissements</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-anthracite text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Présents dans
            <br />
            <span className="italic font-light">tout Paris</span>
            <span className="text-paris-gold">.</span>
          </h2>
        </div>

        {/* Editorial grid */}
        <ul className="grid grid-cols-3 md:grid-cols-9 gap-px bg-paris-stone border border-paris-stone">
          {arrondissements.map((a) => (
            <li
              key={a.num}
              className="bg-paris-ivory hover:bg-paris-cream transition-colors py-8 px-3 text-center"
            >
              <div className="font-[var(--font-heading)] text-2xl text-paris-gold-dark italic">
                {a.num}
              </div>
              <div className="text-[0.65rem] uppercase tracking-[0.15em] text-anthracite/60 mt-2">
                {a.name}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center font-[var(--font-display)] italic text-anthracite/50 text-sm">
          ... et toute l&apos;Île-de-France sur demande
        </p>
      </div>
    </section>
  );
}
