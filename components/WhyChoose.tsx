import Reveal from "@/components/Reveal";
import { Hammer, ShieldCheck, Languages, BadgeCheck } from "lucide-react";
import type { ReactNode } from "react";

type Pillar = {
  icon: typeof Hammer;
  value: string;
  label: ReactNode;
  color: string;
};

const pillars: Pillar[] = [
  {
    icon: Hammer,
    value: "55 ans",
    label: (
      <>
        <span className="text-brand font-semibold">d&apos;expérience</span>{" "}
        de bâtiment cumulés des 2 dirigeants
      </>
    ),
    color: "text-brand",
  },
  {
    icon: ShieldCheck,
    value: "Diplôme",
    label: "Ingénierie CVC",
    color: "text-brand",
  },
  {
    icon: Languages,
    value: "FR · PT · EN",
    label: "Francophone · Lusophone · Anglophone",
    color: "text-gold",
  },
  {
    icon: BadgeCheck,
    value: "10 ans",
    label: "Garantie décennale",
    color: "text-brand",
  },
];

const certs = ["Décennale", "SIRET"];

export default function WhyChoose() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Pourquoi choisir E-Major&nbsp;?
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Artisans expérimentés qui s&apos;associent pour un meilleur service.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-10">
          {pillars.map((p, i) => (
            <Reveal
              key={p.value}
              delay={i * 100}
              className="group bg-white rounded-2xl p-4 sm:p-7 border border-gray-200/60 text-center hover:border-brand/40 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="mx-auto mb-2 sm:mb-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <p.icon
                  size={20}
                  className="text-brand"
                  strokeWidth={2.2}
                />
              </div>
              <div
                className={`font-heading text-[20px] sm:text-[28px] lg:text-[30px] font-bold tracking-tight mb-1 ${p.color}`}
              >
                {p.value}
              </div>
              <div className="text-[11px] sm:text-[13px] text-gray-text font-medium leading-snug">
                {p.label}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {certs.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 bg-white border border-gray-200/60 text-gray-text text-[12px] sm:text-[13px] font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
