export default function Info() {
  return (
    <section className="bg-anthracite py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="paris-label paris-label-centered mb-6 text-paris-gold">
          <span>Engagement</span>
        </div>
        <p className="font-[var(--font-heading)] italic text-paris-cream/90 text-2xl sm:text-3xl md:text-4xl leading-[1.3] font-light">
          « Chaque chantier est évalué selon son impact
          <br className="hidden sm:block" /> énergétique et écologique. »
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-paris-gold">
          — La Maison E-Major
        </p>
      </div>
    </section>
  );
}
