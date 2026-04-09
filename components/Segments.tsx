import { ArrowUpRight } from "lucide-react";

const segments = [
  {
    idx: "01",
    title: "Particuliers",
    description:
      "Appartements, maisons, hôtels particuliers. Rénovation complète, mise aux normes, dépannage urgent.",
    href: "#particuliers",
    image: "/assets/img/facade-haussmann-angle.jpg",
    tags: ["Électricité", "Plomberie", "Dépannage"],
  },
  {
    idx: "02",
    title: "Tertiaire",
    description:
      "Boutiques, bureaux, hôtels, restaurants, théâtres. Pilotage de chantier, maintenance, astreinte 24/7.",
    href: "#tertiaire",
    image: "/assets/img/tertiaire.jpg",
    tags: ["Maîtrise d'œuvre", "CVC", "Supervision"],
  },
];

export default function Segments() {
  return (
    <section className="py-24 sm:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span>Nos terrains</span>
            </div>
            <h2 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Deux mondes,
              <br />
              une exigence.
            </h2>
          </div>
          <p className="text-ink-mute text-base lg:text-lg max-w-md leading-relaxed">
            Du studio d&apos;artiste au plateau de bureaux, nous appliquons la même
            rigueur de chantier et le même soin du détail.
          </p>
        </div>

        {/* Two large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {segments.map((seg) => (
            <a
              key={seg.title}
              href={seg.href}
              className="group block relative overflow-hidden rounded-3xl bg-ink aspect-[4/5] sm:aspect-[3/4]"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                style={{
                  backgroundImage: `url('${seg.image}')`,
                  filter: "grayscale(0.2) brightness(0.85)",
                }}
              />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/80 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="idx-tag text-paper/60">{seg.idx}</span>
                  <span className="w-12 h-12 rounded-full bg-paper/10 backdrop-blur-sm border border-paper/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                    <ArrowUpRight size={20} className="text-paper group-hover:text-ink transition-colors" strokeWidth={2.5} />
                  </span>
                </div>

                <div>
                  <h3 className="text-paper text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-4">
                    {seg.title}
                  </h3>
                  <p className="text-paper/70 leading-relaxed mb-5 max-w-md">
                    {seg.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {seg.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-paper/20 text-paper/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
