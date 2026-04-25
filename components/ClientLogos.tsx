import Image from "next/image";

// Skip indexes (1-based numbering on the file system).
// 17 = ambassade du Brésil — Marc demande de retirer.
const SKIP = new Set<number>([17]);

// These logos render visually smaller because their source has lots of
// whitespace. We bump their displayed size so they don't disappear.
const ENLARGE = new Set<number>([
  11, // Notre-Dame du Rosaire
  18, // Paroisse de l'Immaculée Conception
]);

// Even bigger slot — Marc demande explicitement Apollon "encore plus gros".
const ENLARGE_XL = new Set<number>([
  23, // Apollon Montparnasse
]);

// Total clients: 34 (29 originaux + 5 nouveaux ajoutés sur demande Marc :
// 30 Oralia, 31 Hôtel Eiffel Petit Louvre, 32 SMP, 33 EGIM, 34 Dacofim)
const LOGOS = Array.from({ length: 34 }, (_, i) => i + 1)
  .filter((n) => !SKIP.has(n))
  .map((n) => ({
    src: `/logos/clients/client-${String(n).padStart(2, "0")}.jpg`,
    alt: `Client ${n}`,
    enlarged: ENLARGE.has(n),
    enlargedXL: ENLARGE_XL.has(n),
  }));

export default function ClientLogos() {
  const strip = [...LOGOS, ...LOGOS];
  return (
    <section
      aria-labelledby="clients-heading"
      className="py-12 sm:py-16 bg-white border-y border-gray-200/60 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
            Ils nous font confiance
          </span>
          <h2 id="clients-heading" className="sr-only">
            Ils nous font confiance
          </h2>
        </div>
      </div>

      <div
        className="relative group"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul
          className="flex gap-10 sm:gap-14 w-max items-center animate-logo-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          aria-label="Logos de nos clients"
        >
          {strip.map((logo, i) => {
            const sizeClasses = logo.enlargedXL
              ? "h-24 sm:h-32 w-52 sm:w-64"
              : logo.enlarged
                ? "h-20 sm:h-28 w-44 sm:w-56"
                : "h-16 sm:h-20 w-32 sm:w-40";
            return (
              <li
                key={`${logo.src}-${i}`}
                className={`shrink-0 ${sizeClasses} flex items-center justify-center`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={120}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  aria-hidden={i >= LOGOS.length}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
