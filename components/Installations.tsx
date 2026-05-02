import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  category: string;
  title: string;
  subtitle?: string;
  brands: string[];
  aspect: string;
};

const residentialItems: Item[] = [
  {
    src: "/images/chambre-prises.jpg",
    alt: "Prises et interrupteurs en porcelaine et bois + applique en verre dépoli — chambre",
    category: "Chambre",
    title: "Prises et interrupteurs en porcelaine et bois",
    subtitle: "Applique en verre dépoli",
    brands: ["Fontini Garby", "AQForm Modern", "Verre dépoli sur mesure"],
    aspect: "1/1",
  },
  {
    src: "/images/cuisine-chauffe-eau.jpg",
    alt: "Chauffe eau faible encombrement en cuisine parisienne",
    category: "Cuisine",
    title: "Chauffe eau faible encombrement",
    brands: ["Atlantic Linéo"],
    aspect: "3/4",
  },
  {
    src: "/assets/img/salon-haussmann-led.jpg",
    alt: "Éclairage LED sur corniche dans salon",
    category: "Salon",
    title: "Éclairage LED sur corniche",
    brands: ["Eva Lighting Strip 24V"],
    aspect: "4/3",
  },
  {
    src: "/assets/img/entree-haussmann-spots.jpg",
    alt: "Spot LED commandé par poussoir et minuterie — hall d'immeuble",
    category: "Hall d'immeuble",
    title: "Spot LED commandé par poussoir et minuterie",
    brands: ["Spot Poséidon Replique R80", "Poussoir Efapel Logus"],
    aspect: "4/3",
  },
  {
    src: "/images/entree-coffret-resi9.jpg",
    alt: "Coffret électrique 3 rangées monté-câblé Schneider Resi9 dans placard d'entrée",
    category: "Entrée",
    title: "Coffret 3 rangées monté-câblé",
    brands: ["Schneider Electric Resi9", "Appareillage modulaire"],
    aspect: "3/4",
  },
  {
    src: "/images/salle-de-bain.jpg",
    alt: "Salle de bain complète moderne — rénovation plomberie sanitaire",
    category: "Salle de bain",
    title: "Salle de bain complète",
    brands: ["Plomberie sanitaire", "Robinetterie", "Faïence"],
    aspect: "3/2",
  },
];

const proItems: Item[] = [
  {
    src: "/images/maintenance-hoteliere.jpg",
    alt: "Façade d'hôtel parisien — maintenances planifiées multi-technique en régie",
    category: "Multi-technique",
    title: "Maintenances planifiées en régie",
    subtitle: "Mise à disposition de techniciens qualifiés",
    brands: ["Techniciens E-Major", "Régie temps plein", "Maintenances planifiées"],
    aspect: "1/1",
  },
  {
    src: "/images/gtb-clim-smart.jpg",
    alt: "Gestion Technique du Bâtiment — climatisation et thermostat connecté pilotés à distance",
    category: "CVC",
    title:
      "Contrôle, Mesure et Automatisation des équipements de Chauffage, Ventilation, Climatisation et Éclairage",
    brands: ["Daikin", "Atlantic", "Mitsubishi", "KNX", "Carlo Gavazzi"],
    aspect: "16/9",
  },
  {
    src: "/images/eclairage-bureaux.jpg",
    alt: "Plateau de bureaux open-space avec panels LED suspendus personnalisés au logo E-Major",
    category: "Éclairage bureaux",
    title: "Personnalisation des panels LED",
    brands: ["Eva Lighting", "Flocage logo", "Éclairage tertiaire"],
    aspect: "20/9",
  },
  {
    src: "/images/coffret-extraction-parking.jpg",
    alt: "Coffret électrique d'automatisme avec contacteurs Eaton — extraction d'air parking",
    category: "Automatisme",
    title: "Coffret d'extraction d'air de parking",
    brands: ["Eaton", "Contacteur moteur", "Automatisme parking"],
    aspect: "7/8",
  },
  {
    src: "/assets/img/scene-concert.jpg",
    alt: "Installation électrique pour événementiel — concert",
    category: "Événementiel",
    title: "Installation événementiel",
    brands: [
      "Goulotte de sol Efapel",
      "Coffret d'alimentation Famatel",
      "Passage de câble en goulotte",
      "Coffrets d'alimentation",
    ],
    aspect: "1/1",
  },
  {
    src: "/images/thermographie-tableau.jpg",
    alt: "Contrôle des serrages des bornes avec caméra thermique infrarouge",
    category: "Maintenance préventive",
    title: "Thermographie",
    brands: [
      "Caméra thermique infrarouge",
      "Contrôle serrages des bornes",
    ],
    aspect: "16/9",
  },
];

function Tile({ it }: { it: Item }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-gray-200"
      style={{ aspectRatio: it.aspect }}
    >
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
        {it.subtitle && (
          <p className="font-heading text-[14px] sm:text-[18px] font-semibold leading-tight mt-1">
            {it.subtitle}
          </p>
        )}
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
  // Masonry-style via CSS columns so cards of different aspect ratios
  // pack tightly without leaving blank rows underneath shorter tiles.
  const colsClass =
    cols === 3
      ? "columns-1 sm:columns-2 lg:columns-3"
      : "columns-1 sm:columns-2";
  return (
    <div
      className={`${colsClass} gap-4 sm:gap-6 [column-fill:_balance]`}
    >
      {items.map((it) => (
        <div key={it.src} className="mb-4 sm:mb-6 break-inside-avoid">
          <Tile it={it} />
        </div>
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
            propre —{" "}
            <span className="whitespace-nowrap">nous œuvrons</span> pour votre
            confort.
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
            Bureaux, commerces, hôtels, restaurants, musées, théâtres, cinémas.
          </p>
          <p className="mt-4 sm:mt-5 text-dark text-[14px] sm:text-[17px] leading-relaxed font-medium italic">
            Vos murs sont votre principal outil de production : les entretenir,
            c&apos;est assurer la qualité d&apos;accueil de vos clients.
          </p>
        </div>
        <Grid items={proItems} />
      </div>
    </section>
  );
}
