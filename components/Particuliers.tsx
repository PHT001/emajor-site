import { CONTACT } from "@/lib/constants";

const blocks = [
  {
    num: "I",
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
    num: "II",
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
    <section id="particuliers" className="py-24 sm:py-32 bg-paris-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial header */}
        <div className="max-w-2xl mb-20">
          <div className="paris-label mb-6">
            <span>Particuliers</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-anthracite text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Pour les
            <br />
            <span className="italic font-light">appartements</span> qui ont
            <br />
            une histoire
            <span className="text-paris-gold">.</span>
          </h2>
          <p className="text-anthracite/70 mt-8 text-lg leading-relaxed max-w-xl">
            Du studio d&apos;artiste au pied-à-terre haussmannien, nous intervenons
            avec la même attention aux détails et aux moulures.
          </p>
        </div>

        {/* Two editorial blocks */}
        <div className="space-y-24">
          {blocks.map((b, idx) => (
            <article
              key={b.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ${
                idx % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
              }`}
            >
              {/* Triptych image */}
              <div className="lg:col-span-7 grid grid-cols-3 gap-2">
                {b.images.map((src) => (
                  <div
                    key={src}
                    className="aspect-[3/4] bg-cover bg-center bg-paris-stone"
                    style={{
                      backgroundImage: `url('${src}')`,
                      filter: "grayscale(0.45) contrast(1.05)",
                    }}
                  />
                ))}
              </div>

              {/* Text */}
              <div className="lg:col-span-5 lg:py-8">
                <div className="paris-label mb-4">
                  <span>Métier {b.num}</span>
                </div>
                <h3 className="font-[var(--font-heading)] text-anthracite text-3xl sm:text-4xl md:text-5xl mb-8">
                  {b.title}
                  <span className="text-paris-gold">.</span>
                </h3>
                <ul className="space-y-3 mb-8">
                  {b.items.map((item) => (
                    <li
                      key={item}
                      className="text-anthracite/75 text-sm leading-relaxed flex items-baseline gap-3"
                    >
                      <span className="text-paris-gold text-xs">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 pt-16 border-t border-paris-stone text-center">
          <p className="font-[var(--font-display)] italic text-anthracite/60 text-xl mb-6">
            Devis sous 24 heures, gracieusement.
          </p>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-anthracite text-paris-cream px-10 py-4 hover:bg-paris-gold transition-colors text-sm uppercase tracking-[0.2em] font-medium"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
