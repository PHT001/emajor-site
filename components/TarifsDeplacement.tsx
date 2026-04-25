import { MapPin, Truck } from "lucide-react";

const zones = [
  {
    icon: MapPin,
    label: "Paris & proche couronne",
    price: "70 €",
  },
  {
    icon: Truck,
    label: "Hors Île-de-France",
    price: "75 €",
  },
];

export default function TarifsDeplacement() {
  return (
    <section
      aria-labelledby="tarifs-heading"
      className="py-14 sm:py-20 bg-gray-bg"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
            Frais de déplacement
          </span>
          <h2
            id="tarifs-heading"
            className="font-heading text-dark text-[26px] sm:text-[36px] lg:text-[40px] font-bold tracking-[-0.02em] leading-tight mt-3 mb-3"
          >
            Tarifs de déplacement
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Forfait fixe, sans surprise. Inclus dans le devis dès la première
            visite.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-3xl mx-auto">
          {zones.map((z) => (
            <li
              key={z.label}
              className="bg-white rounded-2xl border border-gray-200/60 p-5 sm:p-7 flex items-center gap-4 sm:gap-5 hover:border-brand/40 hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-light flex items-center justify-center">
                <z.icon
                  size={22}
                  className="text-brand"
                  strokeWidth={2.2}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-gray-text text-[12px] sm:text-[13px] font-medium uppercase tracking-wider">
                  Zone
                </div>
                <div className="font-heading text-dark text-[16px] sm:text-[18px] font-semibold leading-tight mt-0.5">
                  {z.label}
                </div>
              </div>
              <div className="font-heading text-brand text-[24px] sm:text-[32px] font-bold tracking-tight">
                {z.price}
              </div>
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-mid text-[12px] sm:text-[13px] mt-6 sm:mt-8 max-w-xl mx-auto">
          Le déplacement est facturé une seule fois par intervention. Pour les
          chantiers planifiés, il peut être inclus dans le devis global.
        </p>
      </div>
    </section>
  );
}
