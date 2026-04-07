import { ArrowRight } from "lucide-react";

const segments = [
  {
    label: "Chapitre I",
    title: "Particuliers",
    description:
      "Appartements haussmanniens, copropriétés, hôtels particuliers : nous prenons soin du logement comme on entretient une œuvre.",
    href: "#particuliers",
    image: "/assets/img/particuliers.jpg",
  },
  {
    label: "Chapitre II",
    title: "Tertiaire",
    description:
      "Boutiques, bureaux, cafés-hôtels-restaurants, théâtres : des lieux d'exception qui exigent une rigueur d'exception.",
    href: "#tertiaire",
    image: "/assets/img/tertiaire.jpg",
  },
];

export default function Segments() {
  return (
    <section className="py-24 sm:py-32 bg-paris-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section header — editorial */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="paris-label paris-label-centered mb-6">
            <span>Nos terrains</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-anthracite text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Deux mondes,
            <br />
            <span className="italic font-light">une seule</span> exigence
            <span className="text-paris-gold">.</span>
          </h2>
        </div>

        {/* Two editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {segments.map((seg) => (
            <a
              key={seg.title}
              href={seg.href}
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-paris-stone mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                  style={{
                    backgroundImage: `url('${seg.image}')`,
                    filter: "grayscale(0.5) contrast(1.05)",
                  }}
                />
                <div className="absolute inset-0 bg-anthracite/20 group-hover:bg-anthracite/10 transition-colors" />
              </div>

              {/* Caption */}
              <div className="paris-label mb-3">
                <span>{seg.label}</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-anthracite text-3xl sm:text-4xl md:text-5xl mb-4 group-hover:text-paris-gold transition-colors">
                {seg.title}
                <span className="text-paris-gold">.</span>
              </h3>
              <p className="text-anthracite/70 leading-relaxed mb-6 max-w-md">
                {seg.description}
              </p>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-anthracite group-hover:text-paris-gold transition-colors">
                Découvrir
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
