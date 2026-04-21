import Image from "next/image";

const LOGOS = Array.from({ length: 22 }, (_, i) => ({
  src: `/logos/clients/client-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Client ${i + 1}`,
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
          className="flex gap-10 sm:gap-14 w-max animate-logo-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          aria-label="Logos de nos clients"
        >
          {strip.map((logo, i) => (
            <li
              key={`${logo.src}-${i}`}
              className="shrink-0 h-16 sm:h-20 w-32 sm:w-40 flex items-center justify-center"
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
          ))}
        </ul>
      </div>
    </section>
  );
}
