export default function Gallery() {
  const placeholders = [
    { label: "Appartement", aspect: "aspect-[4/3]" },
    { label: "Salle de bain", aspect: "aspect-square" },
    { label: "Commerce", aspect: "aspect-[4/3]" },
    { label: "Hôtel", aspect: "aspect-square" },
    { label: "Bureau", aspect: "aspect-[4/3]" },
    { label: "Salle de spectacle", aspect: "aspect-square" },
    { label: "Copropriété", aspect: "aspect-square" },
    { label: "Chantier", aspect: "aspect-[4/3]" },
  ];

  return (
    <section id="galerie" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-green-accent" />
            <span className="text-sm font-semibold text-green-accent uppercase tracking-widest">
              Réalisations
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dark">
            Nos projets
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className={`${item.aspect} relative rounded-xl overflow-hidden bg-gray-200 break-inside-avoid group`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/50 flex items-center justify-center">
                    <span className="text-gray-text text-lg font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-gray-text font-medium">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Photo à ajouter</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
