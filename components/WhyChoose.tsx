const stats = [
  { value: "100%", label: "Assurés", color: "text-brand" },
  { value: "24h", label: "Devis", color: "text-brand" },
  { value: "10 ans", label: "Garantie décennale", color: "text-gold" },
  { value: "IDF", label: "Zone couverte", color: "text-brand" },
];

const certs = ["Décennale", "RGE", "NF C 15-100", "SIRET"];

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-24 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-dark text-[32px] sm:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-4">
            Pourquoi choisir E-Major ?
          </h2>
          <p className="text-gray-text text-[16px] leading-relaxed">
            Des artisans déclarés, assurés, habilités. Pas de sous-traitance
            cachée.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-7 border border-gray-200/60 text-center"
            >
              <div
                className={`font-heading text-[40px] sm:text-[48px] font-bold tracking-tight mb-2 ${s.color}`}
              >
                {s.value}
              </div>
              <div className="text-[13px] text-gray-text font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {certs.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 bg-white border border-gray-200/60 text-gray-text text-[13px] font-semibold px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
