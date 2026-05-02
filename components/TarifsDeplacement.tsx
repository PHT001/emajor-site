import { MapPin, Truck, Clock, Calendar } from "lucide-react";

type Row = {
  icon: typeof MapPin;
  kind: string;
  label: string;
  price: string;
  unit?: string;
};

const deplacement: Row[] = [
  {
    icon: MapPin,
    kind: "Zone Paris",
    label: "Paris & proche couronne",
    price: "70 €",
  },
  {
    icon: Truck,
    kind: "Zone IDF",
    label: "Hors zone (+ 10 km de Paris)",
    price: "85 €",
  },
];

const horaire: Row[] = [
  {
    icon: Clock,
    kind: "Tarif horaire",
    label: "1 heure",
    price: "75 €",
    unit: "HT",
  },
  {
    icon: Calendar,
    kind: "Tarif journée",
    label: "1 journée",
    price: "550 €",
    unit: "HT",
  },
];

function PriceRow({ r }: { r: Row }) {
  return (
    <li className="bg-white rounded-2xl border border-gray-200/60 p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:border-brand/40 hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.15)] transition-all duration-300">
      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-light flex items-center justify-center">
        <r.icon size={22} className="text-brand" strokeWidth={2.2} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-gray-text text-[11px] sm:text-[12px] font-medium uppercase tracking-wider">
          {r.kind}
        </div>
        <div className="font-heading text-dark text-[15px] sm:text-[17px] font-semibold leading-tight mt-0.5">
          {r.label}
        </div>
      </div>
      <div className="font-heading text-brand text-[22px] sm:text-[28px] font-bold tracking-tight whitespace-nowrap">
        {r.price}
        {r.unit && (
          <span className="text-gray-mid text-[11px] sm:text-[12px] font-medium ml-1">
            {r.unit}
          </span>
        )}
      </div>
    </li>
  );
}

export default function TarifsDeplacement() {
  return (
    <section
      id="tarifs"
      aria-labelledby="tarifs-heading"
      className="py-14 sm:py-20 bg-gray-bg scroll-mt-20"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
            Tarifs
          </span>
          <h2
            id="tarifs-heading"
            className="font-heading text-dark text-[26px] sm:text-[36px] lg:text-[40px] font-bold tracking-[-0.02em] leading-tight mt-3 mb-3"
          >
            Tarifs
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Forfait fixe à chaque visite, hors devis — le devis reste gratuit.
          </p>
        </div>

        {/* Déplacement */}
        <div className="mb-10 sm:mb-12">
          <h3 className="font-heading text-dark text-[16px] sm:text-[18px] font-semibold mb-4 sm:mb-5">
            Déplacement
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {deplacement.map((r) => (
              <PriceRow key={r.label} r={r} />
            ))}
          </ul>
        </div>

        {/* Horaire */}
        <div>
          <h3 className="font-heading text-dark text-[16px] sm:text-[18px] font-semibold mb-4 sm:mb-5">
            Main d&apos;œuvre — fixe pour les 3 métiers
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {horaire.map((r) => (
              <PriceRow key={r.label} r={r} />
            ))}
          </ul>
        </div>

        <p className="text-center text-gray-mid text-[12px] sm:text-[13px] mt-8 sm:mt-10 max-w-xl mx-auto">
          Tarif horaire identique pour les trois métiers — électricité,
          courant faible et plomberie. Le devis est toujours gratuit.
        </p>
      </div>
    </section>
  );
}
