import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark to-brand-dark text-white">
      {/* Radial blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(45, 140, 78, 0.1)" }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
        <span className="inline-flex items-center gap-2 bg-brand/20 text-brand px-3 py-1 rounded-full text-[13px] font-medium mb-8">
          Paris &amp; Île-de-France
        </span>

        <h1 className="font-heading text-[40px] sm:text-[56px] md:text-[72px] font-bold tracking-[-0.02em] leading-[1.05] max-w-4xl mx-auto">
          Électricité &amp; Plomberie
          <br />
          de qualité,{" "}
          <span className="text-brand">à votre service</span>
        </h1>

        <p className="text-white/70 text-[16px] sm:text-[18px] mt-6 max-w-2xl mx-auto leading-relaxed">
          Dépannage, installation et rénovation pour particuliers et
          professionnels. Intervention rapide sur Paris et l&apos;Île-de-France.
        </p>

        {/* Two audience cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <Link
            href="/particuliers"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand rounded-2xl p-6 transition-all text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-heading text-white text-[22px] font-semibold">
                Particuliers
              </span>
              <ArrowRight
                size={20}
                className="text-white/50 group-hover:text-brand group-hover:translate-x-1 transition-all"
              />
            </div>
            <p className="text-white/60 text-[14px] leading-relaxed">
              Dépannage et rénovation pour votre logement.
            </p>
          </Link>

          <Link
            href="/professionnels"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand rounded-2xl p-6 transition-all text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-heading text-white text-[22px] font-semibold">
                Professionnels
              </span>
              <ArrowRight
                size={20}
                className="text-white/50 group-hover:text-brand group-hover:translate-x-1 transition-all"
              />
            </div>
            <p className="text-white/60 text-[14px] leading-relaxed">
              Solutions tertiaires et maintenance.
            </p>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[12px] font-medium tracking-wider">Défiler</span>
          <ChevronDown size={18} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
