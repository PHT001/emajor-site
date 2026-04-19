import { MessageSquare, FileText, Wrench } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Décrivez votre besoin",
    description:
      "Utilisez l'assistant ou contactez-nous directement. Aucun jargon technique.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Recevez un devis",
    description:
      "Devis détaillé sous 24h avec RIB et attestation d'assurance. Zéro surprise.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Intervention rapide",
    description:
      "Intervention planifiée ou en urgence sur Paris et l'Île-de-France, 7j/7.",
  },
];

export default function Process() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Comment ça marche&nbsp;?
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Trois étapes, zéro friction.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="group relative bg-gray-bg rounded-2xl p-5 sm:p-8 border border-gray-200/60 hover:border-brand/40 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex items-start sm:block gap-4 sm:gap-0"
            >
              {/* Step number — pill on desktop, inline badge on mobile */}
              <div className="shrink-0 sm:absolute sm:-top-4 sm:left-8 bg-brand text-white text-[12px] sm:text-[13px] font-bold w-10 h-10 sm:w-auto sm:h-auto sm:px-3 sm:py-1 rounded-full sm:rounded-full flex items-center justify-center group-hover:bg-brand-dark transition-colors duration-300">
                {s.num}
              </div>
              <div className="flex-1 sm:mt-2">
                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-white border border-gray-200/60 items-center justify-center mb-5 group-hover:border-brand/40 transition-colors duration-300">
                  <s.icon
                    size={22}
                    className="text-brand group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="font-heading text-dark text-[16px] sm:text-[20px] font-semibold mb-1.5 sm:mb-3 leading-tight flex items-center gap-2">
                  <s.icon
                    size={16}
                    className="text-brand sm:hidden shrink-0"
                    strokeWidth={2.4}
                  />
                  {s.title}
                </h3>
                <p className="text-gray-text text-[13px] sm:text-[14px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
