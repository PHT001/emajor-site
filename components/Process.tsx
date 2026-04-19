import { MessageSquare, FileText, Wrench } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Décrivez votre besoin",
    description:
      "Utilisez l'assistant ou contactez-nous directement. Aucun jargon technique, juste des questions simples.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Recevez un devis",
    description:
      "Devis détaillé sous 24h avec RIB et attestation d'assurance inclus. Zéro surprise.",
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
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-dark text-[32px] sm:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-gray-text text-[16px] leading-relaxed">
            Trois étapes, zéro friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="group relative bg-gray-bg rounded-2xl p-8 border border-gray-200/60 hover:border-brand/40 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="absolute -top-4 left-8 bg-brand text-white text-[13px] font-bold px-3 py-1 rounded-full group-hover:bg-brand-dark transition-colors duration-300">
                {s.num}
              </div>
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/60 flex items-center justify-center mb-5 mt-2 group-hover:border-brand/40 transition-colors duration-300">
                <s.icon
                  size={22}
                  className="text-brand group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={2.2}
                />
              </div>
              <h3 className="font-heading text-dark text-[20px] font-semibold mb-3">
                {s.title}
              </h3>
              <p className="text-gray-text text-[14px] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
