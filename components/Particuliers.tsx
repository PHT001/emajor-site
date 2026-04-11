"use client";

import { useEffect, useRef } from "react";
import {
  Zap,
  Droplets,
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Construction,
  Phone,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

/* ── Service blocks (triptych + list) ───────────────────────────── */

const blocks = [
  {
    idx: "01",
    icon: Zap,
    title: "Électricité",
    subsections: [
      {
        label: "Courant fort",
        items: [
          "Rénovation électrique complète",
          "Mise aux normes NF C 15-100",
          "Tableau électrique & disjoncteurs",
          "Prises, interrupteurs, éclairage",
          "Dépannage & recherche de panne",
        ],
      },
      {
        label: "Courant faible",
        items: [
          "Alarme & détection incendie",
          "Interphone & vidéophone",
          "Réseau informatique & prises RJ45",
          "Domotique & automatismes",
          "Contrôle d'accès",
        ],
      },
    ],
    images: [
      "/assets/img/salon-haussmann-led.jpg",
      "/assets/img/entree-haussmann-spots.jpg",
      "/assets/img/facade-haussmann.jpg",
    ],
  },
  {
    idx: "02",
    icon: Droplets,
    title: "Plomberie",
    subsections: [
      {
        label: null,
        items: [
          "Installation sanitaire complète",
          "Rénovation salle de bain",
          "Robinetterie & mitigeurs",
          "Chauffe-eau & ballon d'eau chaude",
          "Dépannage & fuites",
        ],
      },
    ],
    images: [
      "/assets/img/sdb-haussmann.jpg",
      "/assets/img/plomb-2.jpeg",
      "/assets/img/plomb-3.jpeg",
    ],
  },
];

/* ── 4 CTA cards ─────────────────────────────────────────────────── */

const serviceCards = [
  {
    icon: ShieldCheck,
    title: "Mise aux Normes",
    subtitle: "NFC 15-100",
    items: [
      "Diagnostic électrique complet",
      "Installation de disjoncteurs différentiels",
      "Mise en place de la mise à la terre",
      "Certification de conformité Consuel",
    ],
    cta: "whatsapp" as const,
    ctaLabel: "Chiffrer ma mise aux normes",
  },
  {
    icon: Construction,
    title: "Rénovation Électrique",
    subtitle: "Complète",
    items: [
      "Rénovation d'appartements anciens",
      "Rénovation de bureaux et locaux",
      "Mise en sécurité électrique (loi ALUR)",
      "Optimisation énergétique",
    ],
    cta: "whatsapp" as const,
    ctaLabel: "Estimer ma rénovation",
  },
  {
    icon: Wrench,
    title: "Dépannage",
    subtitle: "Électrique",
    items: [
      "Panne de courant totale ou partielle",
      "Court-circuit et étincelles",
      "Disjoncteur qui saute",
      "Prise ou interrupteur hors service",
    ],
    cta: "whatsapp" as const,
    ctaLabel: "Planifier une intervention",
  },
  {
    icon: Phone,
    title: "Urgence",
    subtitle: "Dépannage",
    items: [
      "Intervention rapide sur Paris",
      "Disponible 6j/7",
      "Réponse sous 2 heures",
      "Odeur de brûlé, danger immédiat",
    ],
    cta: "phone" as const,
    ctaLabel: CONTACT.phoneDisplay,
  },
];

/* ── Triptych with scroll animation ──────────────────────────────── */

function Triptych({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("triptych-visible");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="lg:col-span-7 grid grid-cols-3 gap-2 rounded-3xl overflow-hidden h-80 sm:h-96 triptych"
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="bg-cover bg-center triptych-panel"
          style={{
            backgroundImage: `url('${src}')`,
            filter: "grayscale(0.15) contrast(1.05)",
            transitionDelay: `${i * 120}ms`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */

export default function Particuliers() {
  return (
    <section id="particuliers" className="py-24 sm:py-32 bg-paper-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span>Particuliers</span>
            </div>
            <h2 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Votre logement,
              <br />
              entre nos mains.
            </h2>
          </div>
          <p className="text-ink-mute text-base lg:text-lg max-w-md leading-relaxed">
            Nous intervenons sur Paris et proche couronne pour les particuliers
            et les cabinets de gestion. Devis gratuit sous 24h.
          </p>
        </div>

        {/* Two big editorial blocks */}
        <div className="space-y-8 lg:space-y-12">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Triptych with animation */}
              <Triptych images={b.images} />

              {/* Text card */}
              <div className="lg:col-span-5 bg-paper rounded-3xl p-8 sm:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center">
                    <b.icon
                      size={26}
                      className="text-accent"
                      strokeWidth={2.2}
                    />
                  </div>
                  <span className="idx-tag">{b.idx}</span>
                </div>
                <h3 className="text-ink text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-6">
                  {b.title}
                </h3>
                <div className="space-y-5 mb-8 flex-1">
                  {b.subsections.map((sub) => (
                    <div key={sub.label ?? "default"}>
                      {sub.label && (
                        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                          {sub.label}
                        </div>
                      )}
                      <ul className="space-y-2">
                        {sub.items.map((item) => (
                          <li
                            key={item}
                            className="text-ink-mute text-sm leading-relaxed flex items-start gap-3"
                          >
                            <span className="text-accent mt-1.5 shrink-0">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Tarifs strip ────────────────────────────────────────── */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-mute">
          <span className="font-semibold text-ink">Devis gratuit</span>
          <span className="hidden sm:inline text-ink-faint">·</span>
          <span>Tarif horaire 75&nbsp;€ HT</span>
          <span className="hidden sm:inline text-ink-faint">·</span>
          <span>Déplacement Paris 70&nbsp;€</span>
          <span className="hidden sm:inline text-ink-faint">·</span>
          <span>Hors Paris 75&nbsp;€</span>
        </div>

        {/* ── 4 service cards ─────────────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="bg-paper rounded-3xl p-6 sm:p-8 flex flex-col border border-line"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center mb-5">
                <card.icon
                  size={22}
                  className="text-accent"
                  strokeWidth={2.2}
                />
              </div>
              <h4 className="text-ink text-lg font-semibold tracking-tight leading-tight">
                {card.title}
              </h4>
              <p className="text-accent text-sm font-medium mb-4">
                {card.subtitle}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="text-ink-mute text-xs leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {card.cta === "whatsapp" ? (
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-ink px-4 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  {card.ctaLabel}
                </a>
              ) : (
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-ink/90 text-paper px-4 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  <Phone size={16} strokeWidth={2.2} />
                  {card.ctaLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ──────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-10 bg-ink rounded-3xl">
          <div>
            <div className="text-paper text-2xl sm:text-3xl font-semibold tracking-tight">
              Devis gratuit sous 24&nbsp;heures.
            </div>
            <div className="text-paper/60 text-sm mt-2 max-w-lg leading-relaxed">
              Envoyez une photo de votre équipement (tableau électrique, alarme,
              chauffe-eau…) et nous établissons un devis matériel. Le devis pose
              nécessite une visite de notre part.
            </div>
          </div>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-ink px-7 py-4 rounded-full font-semibold transition-colors shrink-0"
          >
            Démarrer
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="group-hover:rotate-45 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* ── Triptych animation styles ─────────────────────────────── */}
      <style jsx global>{`
        .triptych-panel {
          opacity: 0.85;
          transform: scale(0.97);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .triptych-visible .triptych-panel {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}
