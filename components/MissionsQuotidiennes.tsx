import {
  Zap,
  Wind,
  Users,
  Lightbulb,
  DoorOpen,
  ClipboardCheck,
  ShieldAlert,
  Hotel,
  Bath,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type Mission = {
  icon: LucideIcon;
  title: string;
};

const missions: Mission[] = [
  {
    icon: Zap,
    title:
      "Intervention sur armoire électrique TGBT pour modification d'une protection modulaire",
  },
  {
    icon: Wind,
    title:
      "Dépoussiérage des réseaux de ventilation de centre d'hébergement",
  },
  {
    icon: Users,
    title:
      "Renforcement des équipes techniques des Théâtres et Musées pour des événementiels",
  },
  {
    icon: Lightbulb,
    title:
      "Modification des appareils d'éclairage des plateaux de bureau pour relamping tube LED",
  },
  {
    icon: DoorOpen,
    title: "Dépannage sur automatisme de porte",
  },
  {
    icon: ClipboardCheck,
    title:
      "Levée de réserves suite au passage de bureau de contrôle dans les ERP",
  },
  {
    icon: ShieldAlert,
    title: "Remplacement des blocs de secours",
  },
  {
    icon: Hotel,
    title: "Réfection des joints silicone pour chambre d'hôtel",
  },
  {
    icon: Bath,
    title: "Pose d'un WC suspendu",
  },
];

export default function MissionsQuotidiennes() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-gold bg-gold/10 px-2.5 py-1 rounded-full mb-3">
            Au quotidien
          </span>
          <h2 className="font-heading text-dark text-[26px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
            Nos missions quotidiennes
          </h2>
          <p className="text-gray-text text-[14px] sm:text-[16px] leading-relaxed">
            Un aperçu concret de nos interventions récurrentes en tertiaire.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {missions.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal
                as="li"
                key={m.title}
                delay={i * 60}
                className="group flex items-start gap-3 sm:gap-4 bg-gray-bg rounded-2xl p-4 sm:p-5 border border-gray-200/60 hover:border-brand/40 hover:bg-white hover:shadow-[0_16px_32px_-20px_rgba(45,140,78,0.2)] transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-gray-200/70 flex items-center justify-center group-hover:bg-brand-light group-hover:border-brand/30 transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-brand"
                    strokeWidth={2.2}
                  />
                </div>
                <p className="text-dark text-[13px] sm:text-[14px] leading-relaxed font-medium pt-1.5">
                  {m.title}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
