import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    src: "/galerie/ciup-fondation-lucien-paye.jpg",
    alt: "Éclairage institutionnel — Fondation Lucien Payé, CIUP",
    category: "Éclairage institutionnel",
    title: "Fondation Lucien Payé",
    location: "Cité Internationale Universitaire de Paris",
  },
  {
    src: "/galerie/chaufferie-copropriete.jpg",
    alt: "Chaufferie collective — tableau électrique & chaudières",
    category: "Chaufferie collective",
    title: "Mise aux normes chaufferie",
    location: "Copropriété — Paris",
  },
];

export default function GalerieTeaser() {
  return (
    <section
      aria-labelledby="galerie-teaser-heading"
      className="py-16 sm:py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 mb-10 sm:mb-12">
          <div>
            <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
              Nos réalisations
            </span>
            <h2
              id="galerie-teaser-heading"
              className="font-heading text-dark text-[28px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.05] mt-3"
            >
              Voir ce qu&apos;on livre,<br className="hidden sm:block" /> pas juste ce qu&apos;on dit.
            </h2>
            <p className="text-gray-text text-[15px] sm:text-[17px] leading-relaxed max-w-xl mt-4">
              Chantiers récents à Paris et en Île-de-France — institutionnel,
              copropriétés, résidentiel.
            </p>
          </div>
          <Link
            href="/galerie"
            className="btn-shine inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-[14px] sm:text-[15px] font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-[0_10px_24px_-8px_rgba(45,140,78,0.5)] active:scale-[0.97] self-start sm:self-auto"
          >
            Voir toute la galerie
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {highlights.map((h) => (
            <li key={h.src}>
              <Link
                href="/galerie"
                className="group block relative overflow-hidden rounded-3xl bg-gray-bg"
                aria-label={`${h.title} — voir dans la galerie`}
              >
                <div className="relative aspect-[4/5] sm:aspect-[4/5]">
                  <Image
                    src={h.src}
                    alt={h.alt}
                    fill
                    sizes="(min-width: 1024px) 580px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      {h.category}
                    </span>
                    <h3 className="font-heading text-white text-[20px] sm:text-[24px] font-bold leading-tight mt-1.5">
                      {h.title}
                    </h3>
                    <p className="text-white/85 text-[13px] sm:text-[14px] mt-1">
                      {h.location}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
