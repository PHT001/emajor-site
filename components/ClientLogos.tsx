/**
 * Clients logos strip — "Ils nous font confiance".
 * Currently uses text placeholders. Once real SVG/PNG logos are provided,
 * replace each `<span>` with an <Image /> keeping the same monochrome
 * (grayscale) + hover reveal treatment.
 */
const placeholders = [
  "Client 01",
  "Client 02",
  "Client 03",
  "Client 04",
  "Client 05",
  "Client 06",
];

export default function ClientLogos() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="py-12 sm:py-16 bg-white border-y border-gray-200/60"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
            Ils nous font confiance
          </span>
          <h2
            id="clients-heading"
            className="sr-only"
          >
            Ils nous font confiance
          </h2>
        </div>

        <ul className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 items-center">
          {placeholders.map((name) => (
            <li key={name}>
              <div className="aspect-[5/2] flex items-center justify-center rounded-xl border border-dashed border-gray-200/80 bg-gray-bg/40 text-gray-mid hover:border-brand/30 hover:text-brand hover:bg-brand-pale/30 transition-all duration-300">
                <span className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider">
                  {name}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 sm:mt-8 text-center text-[11px] text-gray-mid italic">
          Emplacements réservés — logos clients à venir.
        </p>
      </div>
    </section>
  );
}
