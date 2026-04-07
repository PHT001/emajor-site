const arrondissements = [
  { num: "1ᵉʳ", name: "Louvre" },
  { num: "4ᵉ", name: "Le Marais" },
  { num: "6ᵉ", name: "Saint-Germain" },
  { num: "7ᵉ", name: "Invalides" },
  { num: "8ᵉ", name: "Champs-Élysées" },
  { num: "9ᵉ", name: "Opéra" },
  { num: "14ᵉ", name: "Montparnasse" },
  { num: "16ᵉ", name: "Passy" },
  { num: "17ᵉ", name: "Batignolles" },
];

export default function Arrondissements() {
  return (
    <section className="py-20 bg-paris-cream border-y border-paris-stone">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — ornamental Parisian separator */}
        <div className="text-center mb-12">
          <div className="paris-separator mb-4">
            <span className="paris-separator-label">Nos arrondissements</span>
          </div>
          <h2 className="font-[var(--font-display)] italic text-3xl sm:text-4xl md:text-5xl text-dark font-medium">
            Présents dans tout&nbsp;Paris
          </h2>
          <p className="text-gray-text mt-4 max-w-xl mx-auto leading-relaxed">
            Nous intervenons en intra-muros et dans toute l&apos;Île-de-France,
            avec une attention particulière aux quartiers historiques.
          </p>
        </div>

        {/* Grille arrondissements */}
        <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-9 gap-px bg-paris-stone rounded-2xl overflow-hidden">
          {arrondissements.map((a) => (
            <li
              key={a.num}
              className="bg-paris-cream group hover:bg-white transition-colors py-6 px-3 text-center"
            >
              <div className="font-[var(--font-display)] text-3xl text-paris-gold-dark font-medium">
                {a.num}
              </div>
              <div className="text-xs text-gray-text mt-1 tracking-wide">
                {a.name}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-gray-text/80 italic">
          ... et toute l&apos;Île-de-France sur demande
        </p>
      </div>
    </section>
  );
}
