import { ArrowRight, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const segments = [
  {
    title: "Particuliers",
    description:
      "Rénovation électrique, plomberie, mise aux normes pour appartements et maisons.",
    href: "#particuliers",
    image: "/assets/img/particuliers.jpg",
  },
  {
    title: "Tertiaire",
    description:
      "Commerces, bureaux, cafés-hôtels-restaurants, théâtres.",
    href: "#tertiaire",
    image: "/assets/img/tertiaire.jpg",
  },
];

export default function Segments() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#F5F0EB] via-[#E8DFD5] to-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <div className="paris-separator mb-4">
            <span className="paris-separator-label">Nos univers</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dark">
            À qui s&apos;adressent
            <br />
            <span className="font-[var(--font-display)] italic font-medium">nos services</span>&nbsp;?
          </h2>
        </div>

        {/* Two pastille cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Warm glow behind left card */}
          <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#D4A44A]/30 rounded-full blur-[100px] pointer-events-none" />
          {/* Warm glow behind right card */}
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#C48A3F]/25 rounded-full blur-[100px] pointer-events-none" />
          {segments.map((seg) => (
            <a
              key={seg.title}
              href={seg.href}
              className="group block rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Image zone with title overlay */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out will-change-transform"
                  style={{ backgroundImage: `url('${seg.image}')` }}
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Title over image */}
                <h3 className="absolute bottom-6 left-8 font-[var(--font-heading)] text-3xl font-bold text-white">
                  {seg.title}
                </h3>
              </div>

              {/* Description zone */}
              <div className="bg-dark px-8 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-white/60 text-sm leading-relaxed">
                    {seg.description}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-green-accent flex items-center justify-center shrink-0 ml-4 group-hover:bg-green-dark transition-colors duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            <MessageCircle size={20} />
            Discuter de mon projet
          </a>
        </div>
      </div>
    </section>
  );
}
