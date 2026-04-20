import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  category: string;
  title: string;
  brands: string[];
};

const residentialItems: Item[] = [
  {
    src: "/images/chambre-prises.jpg",
    alt: "Prises intégrées dans tête de lit en bois",
    category: "Chambre",
    title: "Prises intégrées bois",
    brands: ["Legrand Céliane", "Schneider Odace"],
  },
  {
    src: "/images/cuisine-chauffe-eau.jpg",
    alt: "Chauffe-eau dans cuisine parisienne",
    category: "Plomberie",
    title: "Chauffe-eau en cuisine",
    brands: ["Atlantic", "De Dietrich", "Thermor"],
  },
  {
    src: "/assets/img/salon-haussmann-led.jpg",
    alt: "Éclairage LED encastré dans salon haussmannien",
    category: "Salon",
    title: "Éclairage LED haussmannien",
    brands: ["Aric", "Erco", "Fontini"],
  },
];

const proItems: Item[] = [
  {
    src: "/assets/img/tableau-tert.jpg",
    alt: "Tableau électrique tertiaire modulaire",
    category: "Tertiaire",
    title: "Tableau TGBT tertiaire",
    brands: ["Schneider Acti9", "Hager", "Legrand XL³"],
  },
  {
    src: "/assets/img/entree-haussmann-spots.jpg",
    alt: "Hall d'entrée haussmannien avec spots encastrés",
    category: "Hall d'immeuble",
    title: "Éclairage hall pro",
    brands: ["Erco", "iGuzzini", "Aric"],
  },
  {
    src: "/assets/img/cvc.jpg",
    alt: "Installation CVC dans local professionnel",
    category: "CVC",
    title: "CVC tertiaire",
    brands: ["Daikin", "Atlantic", "Mitsubishi"],
  },
];

function Tile({ it, span }: { it: Item; span?: boolean }) {
  return (
    <div
      className={[
        "group relative rounded-2xl overflow-hidden aspect-square bg-gray-200",
        span ? "col-span-2 aspect-[16/9] md:aspect-square md:col-span-1" : "",
      ].join(" ")}
    >
      <Image
        src={it.src}
        alt={it.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent" />

      {/* Category + title — always visible */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 text-white transition-all duration-300 group-hover:-translate-y-1">
        <span className="inline-block text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-brand/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full mb-1.5 sm:mb-2">
          {it.category}
        </span>
        <h3 className="font-heading text-[14px] sm:text-[18px] font-semibold leading-tight">
          {it.title}
        </h3>
      </div>

      {/* Brand tooltip — slides up on hover, tap-to-show on touch via :focus-within */}
      <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 flex flex-wrap gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
        <span className="text-[10px] uppercase tracking-wider text-white/70 font-mono w-full">
          Matériel
        </span>
        {it.brands.map((b) => (
          <span
            key={b}
            className="inline-flex items-center gap-1 bg-white/95 text-dark text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function Grid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
      {items.map((it, i) => (
        <Tile key={it.src} it={it} span={i === 2} />
      ))}
    </div>
  );
}

export default function Installations() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Résidentiel */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-brand bg-brand-light px-2.5 py-1 rounded-full mb-3">
            Résidentiel
          </span>
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Des installations soignées
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Finitions propres, matériel de qualité. Survolez chaque image pour
            voir les marques utilisées.
          </p>
        </div>
        <Grid items={residentialItems} />

        {/* Professionnel */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 mt-14 sm:mt-24">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-gold bg-gold/10 px-2.5 py-1 rounded-full mb-3">
            Tertiaire &amp; Professionnel
          </span>
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Installations professionnelles
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Bureaux, commerces, hôtels, halls d&apos;immeubles. Matériel
            professionnel, coordination tous corps d&apos;état.
          </p>
        </div>
        <Grid items={proItems} />
      </div>
    </section>
  );
}
