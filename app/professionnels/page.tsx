import Link from "next/link";
import { Radio, Zap, Droplets, Wind, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceBlock from "@/components/ServiceBlock";

export const metadata = {
  title: "Professionnels — E-Major | Tertiaire CHR, Bureaux, Hôtels",
  description:
    "Maîtrise d'œuvre, courant fort / faible, plomberie, CVC et supervision pour bureaux, hôtels, restaurants et théâtres à Paris.",
};

const blocks = [
  {
    idx: "01",
    icon: Radio,
    title: "Courant Faible",
    description:
      "VDI, contrôle d'accès, vidéosurveillance, sonorisation, IoT. Déploiement clé en main avec recette technique.",
    items: [
      "VDI catégorie 6/6a",
      "Contrôle d'accès & badges",
      "Vidéosurveillance IP",
      "Sonorisation & affichage",
    ],
    image: "/assets/img/infra.jpg",
  },
  {
    idx: "02",
    icon: Zap,
    title: "Courant Fort",
    description:
      "TGBT, distribution, éclairages techniques, secours. Dossiers ERP/ERT traités de bout en bout, levée de réserves incluse.",
    items: [
      "TGBT & distribution",
      "Éclairage de sécurité",
      "Mise aux normes ERP",
      "Levée de réserves commission",
    ],
    image: "/assets/img/tableau-tert.jpg",
  },
  {
    idx: "03",
    icon: Droplets,
    title: "Plomberie",
    description:
      "Réseaux, sanitaires collectifs, cuisines pro CHR, surpresseurs, adoucisseurs. Maintenance préventive et curative.",
    items: [
      "Sanitaires collectifs",
      "Cuisines professionnelles",
      "Surpresseurs & adoucisseurs",
      "Maintenance préventive",
    ],
    image: "/assets/img/plomb-1.jpg",
  },
  {
    idx: "04",
    icon: Wind,
    title: "CVC & Supervision",
    description:
      "Climatisation, VMC, traitement d'air. Automatisme, GTB/GTC et GMAO pour piloter vos installations à distance.",
    items: [
      "Climatisation & VMC",
      "Traitement d'air",
      "GTB / GTC (KNX, BACnet)",
      "GMAO & astreinte 24/7",
    ],
    image: "/assets/img/cvc.jpg",
  },
];

export default function ProfessionnelsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 bg-ink overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
            <div className="eyebrow text-accent mb-6">
              <span>Professionnels</span>
            </div>
            <h1 className="text-paper text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-4xl">
              Pour les pros
              <br />
              qui ne tolèrent pas
              <br />
              <span className="text-accent">l&apos;à-peu-près.</span>
            </h1>
            <p className="text-paper/60 text-lg sm:text-xl mt-10 max-w-2xl leading-relaxed">
              Bureaux, hôtels, restaurants, boutiques, théâtres. Quatre
              métiers, une seule signature, des engagements tenus — de la
              maîtrise d&apos;œuvre à la GMAO.
            </p>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-paper">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-24 sm:space-y-32">
            {blocks.map((b, i) => (
              <ServiceBlock key={b.title} {...b} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>

        <section className="pb-24 sm:pb-32 bg-paper">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="bg-ink rounded-3xl p-10 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <div className="text-paper text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-tight">
                  Cadrons votre projet
                  <br />
                  en 30 secondes.
                </div>
                <p className="text-paper/60 text-sm sm:text-base mt-4 max-w-md">
                  L&apos;assistant qualifie votre besoin et route votre demande
                  — urgence ou RDV planifié.
                </p>
              </div>
              <Link
                href="/assistant"
                className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-ink px-8 py-5 rounded-full font-semibold transition-colors shrink-0"
              >
                Lancer l&apos;assistant
                <ArrowUpRight
                  size={20}
                  strokeWidth={2.5}
                  className="group-hover:rotate-45 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
