import { CONTACT } from "@/lib/constants";

const services = [
  {
    num: "I",
    title: "Maîtrise d'œuvre",
    description:
      "Études techniques, conception et pilotage de chantiers complets, du dossier APD à la livraison.",
    keywords: ["Études", "Conception", "Pilotage"],
    image: "/assets/img/schema-horizontal.jpg",
  },
  {
    num: "II",
    title: "Électricité",
    description:
      "Courant fort, courant faible, éclairage architectural — installations conformes NF C 15-100 et certifications hôtelières.",
    keywords: ["Courant fort", "Courant faible", "Éclairage"],
    image: "/assets/img/tableau-tert.jpg",
  },
  {
    num: "III",
    title: "CVC",
    description:
      "Climatisation, ventilation et traitement d'air pour des locaux confortables en toutes saisons.",
    keywords: ["Traitement d'air", "Climatisation"],
    image: "/assets/img/cvc.jpg",
  },
  {
    num: "IV",
    title: "Supervision",
    description:
      "Automatisme, infrastructures réseaux et GMAO pour une maintenance préventive maîtrisée.",
    keywords: ["Automatisme", "Réseaux", "GMAO"],
    image: "/assets/img/infra.jpg",
  },
];

export default function Services() {
  return (
    <section id="tertiaire" className="py-24 sm:py-32 bg-paris-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial header */}
        <div className="max-w-2xl mb-20">
          <div className="paris-label mb-6">
            <span>Tertiaire</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-anthracite text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Pour les commerces,
            <br />
            <span className="italic font-light">hôtels</span> et théâtres
            <span className="text-paris-gold">.</span>
          </h2>
          <p className="font-[var(--font-body)] text-anthracite/70 mt-8 text-lg leading-relaxed max-w-xl">
            E-Major intervient sur les plateaux de bureaux, les cafés-hôtels-restaurants
            et les salles de spectacle. Quatre métiers, une seule signature.
          </p>
        </div>

        {/* Editorial grid — alternating left/right with image + text */}
        <div className="space-y-24">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:col-span-7 relative">
                <div className="aspect-[4/3] overflow-hidden bg-paris-stone">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${s.image}')`,
                      filter: "grayscale(0.4) contrast(1.05)",
                    }}
                  />
                </div>
                {/* Numbered tag */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-anthracite text-paris-cream px-5 py-3">
                  <span className="font-[var(--font-heading)] italic text-2xl">
                    {s.num}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-5">
                <div className="paris-label mb-4">
                  <span>Service {s.num}</span>
                </div>
                <h3 className="font-[var(--font-heading)] text-anthracite text-3xl sm:text-4xl md:text-5xl leading-[1.05] mb-6">
                  {s.title}
                  <span className="text-paris-gold">.</span>
                </h3>
                <p className="text-anthracite/70 leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-2">
                  {s.keywords.map((k) => (
                    <li
                      key={k}
                      className="text-xs uppercase tracking-[0.15em] text-paris-gold-dark"
                    >
                      — {k}
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
            Une question, un projet ?
          </p>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-anthracite text-paris-cream px-10 py-4 hover:bg-paris-gold transition-colors text-sm uppercase tracking-[0.2em] font-medium"
          >
            Parlons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}
