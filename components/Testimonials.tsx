import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Intervention rapide pour un chauffe-eau HS, Marc a diagnostiqué en 10 minutes et a pu intervenir le lendemain. Chantier propre, prix annoncé respecté.",
    name: "Claire M.",
    location: "Paris 14ᵉ",
  },
  {
    quote:
      "Rénovation électrique complète de notre appartement haussmannien. Équipe soignée, planning tenu, finitions impeccables. On recommande.",
    name: "Antoine B.",
    location: "Paris 6ᵉ",
  },
  {
    quote:
      "On a fait appel à E-Major pour la mise aux normes de nos bureaux avant la commission. Levée de réserves sans aucun retour, très pro.",
    name: "Sophie L.",
    location: "Paris 8ᵉ",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-dark text-[32px] sm:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-4">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-gray-bg rounded-2xl p-7 border border-gray-200/60"
            >
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold fill-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="text-gray-text text-[15px] leading-relaxed italic mb-6">
                « {r.quote} »
              </blockquote>
              <div className="text-dark text-[14px] font-semibold">
                {r.name}
                <span className="text-gray-mid font-normal"> — {r.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
