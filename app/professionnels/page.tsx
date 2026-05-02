import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Zap, Radio, Droplets, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Professionnels — Tertiaire CHR, Bureaux, Hôtels",
  description:
    "Infrastructure électrique, réseau structuré, plomberie tertiaire, CVC et supervision. E-Major accompagne commerces, bureaux, hôtels et théâtres à Paris et IDF.",
  alternates: { canonical: `${SITE.url}/professionnels` },
  openGraph: {
    title: "Professionnels — E-Major",
    description:
      "Infrastructure électrique, réseau, plomberie et CVC pour vos locaux pros.",
    url: `${SITE.url}/professionnels`,
    type: "website",
  },
};

const blocks = [
  {
    title: "Courant Faible",
    icon: Radio,
    image: "/images/reseau-pro.jpg",
    alt: "Baie de brassage serveur avec câblage structuré bleu organisé",
    description:
      "Infrastructure réseau et sécurité pour vos locaux professionnels.",
    items: [
      "Systèmes multi-zones et câblage structuré",
      "Accès biométrique et contrôle d'accès",
      "Vidéosurveillance IP professionnelle",
      "Alarme intrusion et incendie",
      "Baies de brassage et fibre optique",
      "GTB (Gestion Technique du Bâtiment)",
    ],
    aspect: "16/9",
  },
  {
    title: "Courant Fort",
    icon: Zap,
    image: "/images/tgbt-pro.jpg",
    alt: "Armoire électrique TGBT avec câblage organisé et disjoncteurs de puissance",
    description:
      "Distribution électrique et éclairage professionnel.",
    items: [
      "Armoires électriques et TGBT",
      "Éclairage LED professionnel",
      "Chemins de câbles et goulottes",
      "Mise en conformité NF C 15-100",
      "Alimentation triphasée et monophasée",
      "Disjoncteurs et parafoudres",
    ],
    aspect: "3/2",
  },
  {
    title: "Plomberie",
    icon: Droplets,
    image: "/images/plomberie.jpg",
    alt: "Intervention plomberie sur installation sanitaire",
    description:
      "Réseaux d'eau et d'évacuation pour locaux professionnels.",
    items: [
      "Eau chaude collective et chaudières",
      "Sanitaires collectifs et accessibilité PMR",
      "Réseaux d'alimentation en cuivre et PER",
      "Évacuation et assainissement",
      "Pompes de relevage et bacs à graisse",
      "Contrats de maintenance préventive",
    ],
    aspect: "3/2",
  },
  {
    title: "CVC & Supervision",
    icon: Wind,
    image: "/images/cvc-supervision.jpg",
    alt: "Gaines de ventilation et conduits CVC en plafond technique tertiaire",
    description:
      "Chauffage, ventilation, climatisation et automatisation.",
    items: [
      "HVAC : installation et maintenance",
      "Automatisation des systèmes CVC",
      "Pilotage à distance et supervision",
      "Armoires de commande CTA",
      "Éclairage de sécurité automatisé",
      "Stores et volets automatiques",
    ],
    aspect: "3/2",
  },
];

export default function ProfessionnelsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-dark to-brand-dark text-white py-20 sm:py-24 relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "rgba(45, 140, 78, 0.1)" }}
          />
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 bg-brand/20 text-brand px-3 py-1 rounded-full text-[13px] font-medium mb-6">
              Professionnels
            </span>
            <h1 className="font-heading text-[40px] sm:text-[56px] md:text-[64px] font-bold tracking-[-0.02em] leading-[1.05] max-w-3xl mb-6">
              Solutions pour professionnels
            </h1>
            <p className="text-white/75 text-[16px] sm:text-[18px] max-w-2xl leading-relaxed mb-8">
              Infrastructure électrique, réseau informatique, plomberie. E-Major
              accompagne les commerces, plateaux de bureaux et locaux
              industriels.
            </p>
            <Link
              href="/assistant"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-[30px] text-[15px] transition-colors"
            >
              Lancer l&apos;assistant
            </Link>
          </div>
        </section>

        {/* 4 service cards */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {blocks.map((b) => {
                const Icon = b.icon;
                return (
                <article
                  key={b.title}
                  className="bg-gray-bg border border-gray-200/60 rounded-2xl p-6 sm:p-8 hover:border-brand/40 hover:-translate-y-0.5 transition-all group"
                >
                  <div
                    className="relative overflow-hidden rounded-xl mb-5 sm:mb-6 bg-gray-100"
                    style={{ aspectRatio: b.aspect }}
                  >
                    <Image
                      src={b.image}
                      alt={b.alt}
                      fill
                      sizes="(min-width: 768px) 480px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                  </div>
                  <h3 className="font-heading text-dark text-[22px] sm:text-[26px] font-bold mb-3">
                    {b.title}
                  </h3>
                  <p className="text-gray-text text-[14px] leading-relaxed mb-6">
                    {b.description}
                  </p>
                  <ul className="space-y-3">
                    {b.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-3 text-[14px] text-gray-text"
                      >
                        <Check
                          size={16}
                          className="text-brand shrink-0 mt-0.5"
                          strokeWidth={3}
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl p-10 sm:p-14 text-center text-white">
              <h2 className="font-heading text-[28px] sm:text-[40px] font-bold tracking-[-0.02em] leading-tight mb-4">
                Un projet professionnel ?
              </h2>
              <p className="text-white/85 text-[16px] max-w-xl mx-auto mb-8 leading-relaxed">
                Décrivez votre besoin via notre assistant et recevez un devis
                détaillé sous 24h.
              </p>
              <Link
                href="/assistant"
                className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-brand font-semibold px-7 py-4 rounded-[30px] text-[15px] transition-colors"
              >
                Lancer l&apos;assistant
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
