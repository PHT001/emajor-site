const stats = [
  { value: "100%", label: "Assurés", color: "text-brand" },
  { value: "24h", label: "Devis", color: "text-brand" },
  { value: "10 ans", label: "Garantie décennale", color: "text-gold" },
  { value: "IDF", label: "Zone couverte", color: "text-brand" },
];

const certs = ["Décennale", "RGE", "NF C 15-100", "SIRET"];

export default function WhyChoose() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Pourquoi choisir E-Major&nbsp;?
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Des artisans déclarés, assurés, habilités. Pas de sous-traitance
            cachée.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-white rounded-2xl p-4 sm:p-7 border border-gray-200/60 text-center hover:border-brand/40 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div
                className={`font-heading text-[26px] sm:text-[44px] lg:text-[48px] font-bold tracking-tight mb-1 sm:mb-2 ${s.color} group-hover:scale-[1.03] transition-transform duration-300 origin-center`}
              >
                {s.value}
              </div>
              <div className="text-[11px] sm:text-[13px] text-gray-text font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {certs.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 bg-white border border-gray-200/60 text-gray-text text-[12px] sm:text-[13px] font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
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
