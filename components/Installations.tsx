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
    alt: "Prises et interrupteurs en porcelaine et bois — tête de lit",
    category: "Chambre",
    title: "Prises et interrupteurs en porcelaine et bois",
    brands: ["Fontini Garby", "AQForm Modern"],
  },
  {
    src: "/images/chambre-prises.jpg",
    alt: "Applique murale en verre dépoli pour ambiance de chambre",
    category: "Chambre",
    title: "Applique en verre dépoli",
    brands: ["Verre dépoli sur mesure"],
  },
  {
    src: "/images/cuisine-chauffe-eau.jpg",
    alt: "Chauffe eau faible encombrement en cuisine parisienne",
    category: "Cuisine",
    title: "Chauffe eau faible encombrement",
    brands: ["Atlantic Linéo"],
  },
  {
    src: "/assets/img/salon-haussmann-led.jpg",
    alt: "Éclairage LED sur corniche dans salon",
    category: "Salon",
    title: "Éclairage LED sur corniche",
    brands: ["Eva Lighting Strip 24V"],
  },
  {
    src: "/assets/img/entree-haussmann-spots.jpg",
    alt: "Spot LED commandé par poussoir et minuterie — hall d'immeuble",
    category: "Hall d'immeuble",
    title: "Spot LED commandé par poussoir et minuterie",
    brands: ["Spot Poséidon Replique R80", "Poussoir Eppal Logus"],
  },
  {
    src: "/images/thermographie-tableau.jpg",
    alt: "Contrôle des serrages des bornes avec caméra thermique infrarouge",
    category: "Maintenance",
    title: "Thermographie — maintenance préventive",
    brands: [
      "Caméra thermique infrarouge",
      "Contrôle serrages des bornes",
    ],
  },
];

const proItems: Item[] = [
  {
    src: "/assets/img/tableau-tert.jpg",
    alt: "Tableau divisionnaire tertiaire",
    category: "Tertiaire",
    title: "Tableau divisionnaire",
    brands: ["Legrand Drivia"],
  },
  {
    src: "/assets/img/cvc.jpg",
    alt: "Installation CVC et GTB en local professionnel",
    category: "CVC & GTB",
    title: "CVC & GTB",
    brands: ["Daikin", "Atlantic", "Mitsubishi"],
  },
  {
    src: "/assets/img/scene-concert.jpg",
    alt: "Installation électrique pour équipement scénique de concert",
    category: "Équipement scénique",
    title: "Installation Équipement Scénique",
    brands: [
      "Passage de câble en goulotte",
      "Coffrets d'alimentation",
      "Électricien en régie",
      "Fontaine à eau",
    ],
  },
];

function Tile({ it }: { it: Item }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-gray-200">
      <Image
        src={it.src}
        alt={it.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
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

function Grid({ items, cols }: { items: Item[]; cols?: 2 | 3 }) {
  // 3-cols variant aligns 3 items on a single desktop row.
  // 2-cols variant pairs 4 items into 2 balanced rows.
  const gridClass =
    cols === 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      : "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6";
  return (
    <div className={gridClass}>
      {items.map((it) => (
        <Tile key={it.src} it={it} />
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
            Des matériels fiables, une technique de pose maîtrisée, une finition
            propre — nous œuvrons pour votre confort.
          </p>
        </div>
        <Grid items={residentialItems} />

        {/* Professionnel */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 mt-14 sm:mt-24">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-gold bg-gold/10 px-2.5 py-1 rounded-full mb-3">
            Tertiaire
          </span>
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Installations professionnelles
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Bureaux, commerces, hôtels, halls d&apos;immeubles. Dépannage des
            équipements professionnels — restaurants, musées, théâtres.
          </p>
        </div>
        <Grid items={proItems} cols={3} />
      </div>
    </section>
  );
}
