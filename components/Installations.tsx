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
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Des installations soignées
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Finitions propres, matériel de qualité, détails qui comptent.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
          {items.map((it, i) => (
            <div
              key={it.src}
              className={[
                "group relative rounded-2xl overflow-hidden aspect-square bg-gray-200",
                // Third image spans both cols on mobile for better rhythm
                i === 2 ? "col-span-2 aspect-[16/9] md:aspect-square md:col-span-1" : "",
              ].join(" ")}
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                <span className="inline-block text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-brand/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full mb-1.5 sm:mb-2">
                  {it.category}
                </span>
                <h3 className="font-heading text-[14px] sm:text-[18px] font-semibold leading-tight">
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
