import Link from "next/link";
import { Radio, Zap, Droplets, Wrench, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceBlock from "@/components/ServiceBlock";

export const metadata = {
  title: "Particuliers — E-Major | Électricien & Plombier à Paris",
  description:
    "Électricité, plomberie et dépannage pour particuliers à Paris et Île-de-France. Rénovation, mise aux normes, intervention sous 2h.",
};

const blocks = [
  {
    idx: "01",
    icon: Radio,
    title: "Courant Faible",
    description:
      "Réseaux VDI, interphonie, vidéosurveillance, domotique et sonorisation pour votre logement.",
    items: [
      "Réseau Ethernet & Wi-Fi",
      "Interphone vidéo",
      "Alarme & vidéosurveillance",
      "Domotique & éclairage connecté",
    ],
    image: "/assets/img/haussmann-facade.jpg",
  },
  {
    idx: "02",
    icon: Zap,
    title: "Courant Fort",
    description:
      "Tableau, prises, éclairage, mise aux normes NF C 15-100. Installation propre, sans tirer un fil de travers.",
    items: [
      "Tableau électrique",
      "Mise aux normes NF C 15-100",
      "Prises, interrupteurs, éclairage",
      "Rénovation complète",
    ],
    image: "/assets/img/part-1.jpg",
  },
  {
    idx: "03",
    icon: Droplets,
    title: "Plomberie",
    description:
      "Installation sanitaire, rénovation de salle de bain, robinetterie, chauffe-eau et dépannage.",
    items: [
      "Salle de bain complète",
      "Robinetterie & mitigeurs",
      "Chauffe-eau & ballon",
      "Dépannage & fuites",
    ],
    image: "/assets/img/plomb-2.jpeg",
  },
  {
    idx: "04",
    icon: Wrench,
    title: "Dépannage",
    description:
      "Intervention rapide sur Paris intra-muros et proche IDF. Disjoncteur, fuite, prise HS — on arrive avec le bon matos.",
    items: [
      "Intervention sous 2h",
      "7 jours sur 7",
      "Diagnostic inclus",
      "Devis avant travaux",
    ],
    image: "/assets/img/haussmann-hall.jpg",
  },
];

export default function ParticuliersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Intro */}
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 bg-paper-2 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
            <div className="eyebrow mb-6">
              <span>Particuliers</span>
            </div>
            <h1 className="text-ink text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-4xl">
              Votre logement,
              <br />
              entre nos mains.
            </h1>
            <p className="text-ink-mute text-lg sm:text-xl mt-10 max-w-2xl leading-relaxed">
              Appartements, maisons, hôtels particuliers. De la rénovation
              complète au dépannage de nuit, nous intervenons à Paris et en
              Île-de-France avec la rigueur d&apos;un atelier et la réactivité
              d&apos;un artisan.
            </p>
          </div>
        </section>

        {/* Blocks */}
        <section className="py-24 sm:py-32 bg-paper">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-24 sm:space-y-32">
            {blocks.map((b, i) => (
              <ServiceBlock key={b.title} {...b} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>

        {/* CTA Assistant */}
        <section className="pb-24 sm:pb-32 bg-paper">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="bg-ink rounded-3xl p-10 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <div className="text-paper text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-tight">
                  Qualifions votre demande
                  <br />
                  en 30 secondes.
                </div>
                <p className="text-paper/60 text-sm sm:text-base mt-4 max-w-md">
                  Un assistant vous pose 4 questions, puis transfère votre
                  demande sur WhatsApp — pré-remplie.
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
