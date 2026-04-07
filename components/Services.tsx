import { PenTool, Zap, Wind, Monitor, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const services = [
  {
    idx: "01",
    icon: PenTool,
    title: "Maîtrise d'œuvre",
    description:
      "Études techniques, conception et pilotage du dossier APD jusqu'à la livraison.",
    tags: ["Études", "Conception", "Pilotage"],
    image: "/assets/img/schema-horizontal.jpg",
  },
  {
    idx: "02",
    icon: Zap,
    title: "Électricité",
    description:
      "Courant fort, courant faible, éclairage. NF C 15-100 et certifications hôtelières.",
    tags: ["Courant fort", "Courant faible", "Éclairage"],
    image: "/assets/img/tableau-tert.jpg",
  },
  {
    idx: "03",
    icon: Wind,
    title: "CVC",
    description:
      "Climatisation, ventilation et traitement d'air pour des locaux confortables.",
    tags: ["Climatisation", "VMC", "Traitement d'air"],
    image: "/assets/img/cvc.jpg",
  },
  {
    idx: "04",
    icon: Monitor,
    title: "Supervision",
    description:
      "Automatisme, infrastructures réseaux et GMAO pour une maintenance maîtrisée.",
    tags: ["Automatisme", "Réseaux", "GMAO"],
    image: "/assets/img/infra.jpg",
  },
];

export default function Services() {
  return (
    <section id="tertiaire" className="py-24 sm:py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow text-accent mb-4">
              <span>Tertiaire</span>
            </div>
            <h2 className="text-paper text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Pour les pros
              <br />
              qui ne tolèrent pas
              <br />
              <span className="text-accent">l&apos;à-peu-près.</span>
            </h2>
          </div>
          <p className="text-paper/60 text-base lg:text-lg max-w-md leading-relaxed">
            Bureaux, hôtels, restaurants, boutiques, théâtres. Quatre métiers,
            une seule signature, des engagements tenus.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl bg-ink-soft border border-paper/10 hover:border-accent/40 transition-colors"
            >
              {/* Image */}
              <div
                className="aspect-[16/9] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${s.image}')`,
                  filter: "grayscale(0.4) brightness(0.8) contrast(1.05)",
                }}
              />
              {/* Content */}
              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                    <s.icon size={22} className="text-accent" strokeWidth={2.2} />
                  </div>
                  <span className="idx-tag text-paper/40">{s.idx}</span>
                </div>
                <h3 className="text-paper text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-4">
                  {s.title}
                </h3>
                <p className="text-paper/60 text-sm sm:text-base leading-relaxed mb-6">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border border-paper/15 text-paper/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-ink px-8 py-5 rounded-full font-semibold transition-colors"
          >
            Discuter d&apos;un projet
            <ArrowUpRight size={20} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
