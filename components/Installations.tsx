import Image from "next/image";

const items = [
  {
    src: "/images/chambre-prises.jpg",
    alt: "Prises intégrées dans tête de lit en bois",
    category: "Chambre",
    title: "Prises intégrées bois",
  },
  {
    src: "/images/cuisine-chauffe-eau.jpg",
    alt: "Chauffe-eau dans cuisine parisienne",
    category: "Plomberie",
    title: "Chauffe-eau en cuisine",
  },
  {
    src: "/images/interrupteur-vintage.jpg",
    alt: "Interrupteur Fontini vintage",
    category: "Détail",
    title: "Interrupteur Fontini",
  },
];

export default function Installations() {
  return (
    <section className="py-20 sm:py-24 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-dark text-[32px] sm:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-4">
            Des installations soignées
          </h2>
          <p className="text-gray-text text-[16px] leading-relaxed">
            Finitions propres, matériel de qualité, détails qui comptent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((it) => (
            <div
              key={it.src}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-200"
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block text-[11px] font-semibold tracking-wider uppercase bg-brand/90 px-2.5 py-1 rounded-full mb-2">
                  {it.category}
                </span>
                <h3 className="font-heading text-[18px] font-semibold">
                  {it.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
