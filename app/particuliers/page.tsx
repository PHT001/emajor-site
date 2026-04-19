import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Particuliers — Électricien & Plombier à Paris",
  description:
    "Dépannage, installation et rénovation pour votre logement à Paris et Île-de-France. Prises, éclairage, chauffe-eau, fuites, mise aux normes : on s'occupe de tout.",
  alternates: { canonical: `${SITE.url}/particuliers` },
  openGraph: {
    title: "Particuliers — E-Major",
    description:
      "Dépannage, installation et rénovation pour votre logement. Devis sous 24 h.",
    url: `${SITE.url}/particuliers`,
    type: "website",
  },
};

const blocks = [
  {
    title: "Courant Faible",
    description:
      "Installation et maintenance de vos équipements basse tension.",
    items: [
      "Interrupteurs et prises de communication",
      "Interphones et visiophones",
      "Domotique et objets connectés",
      "Détection de fumée et alarmes",
      "Prises RJ45 et réseau domestique",
    ],
  },
  {
    title: "Courant Fort",
    description:
      "Tout ce qui touche à l'électricité de puissance dans votre logement.",
    items: [
      "Installation et remplacement de prises",
      "Pose de luminaires et éclairage",
      "Tableau électrique et disjoncteurs",
      "Mise aux normes NF C 15-100",
      "Rénovation électrique complète",
    ],
  },
  {
    title: "Plomberie",
    badge: "Chauffe-eau prioritaire",
    description:
      "Chauffe-eau, fuites, robinetterie… on intervient vite.",
    items: [
      "Chauffe-eau : installation, remplacement, dépannage",
      "Salles de bain complètes",
      "Fuites et réparations urgentes",
      "Robinetterie et raccordements",
      "Évacuation et débouchage",
    ],
  },
  {
    title: "Dépannage",
    description:
      "Réparations urgentes en électricité et plomberie.",
    items: [
      "Panne électrique et coupures",
      "Court-circuit et disjoncteur qui saute",
      "Fuite d'eau urgente",
      "Chauffe-eau en panne",
      "Intervention rapide sur Paris et IdF",
    ],
  },
];

const heroImages = [
  { src: "/images/chambre-prises.jpg", alt: "Prises intégrées chambre" },
  { src: "/images/cuisine-chauffe-eau.jpg", alt: "Chauffe-eau cuisine" },
  { src: "/images/interrupteur-vintage.jpg", alt: "Interrupteur vintage" },
];

export default function ParticuliersPage() {
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
              Particuliers
            </span>
            <h1 className="font-heading text-[40px] sm:text-[56px] md:text-[64px] font-bold tracking-[-0.02em] leading-[1.05] max-w-3xl mb-6">
              Intervention pour particuliers
            </h1>
            <p className="text-white/75 text-[16px] sm:text-[18px] max-w-2xl leading-relaxed mb-8">
              Dépannage, installation et rénovation pour votre logement.
              Prises, éclairage, chauffe-eau, fuites… on s&apos;occupe de tout.
            </p>
            <Link
              href="/assistant"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-[30px] text-[15px] transition-colors"
            >
              Lancer l&apos;assistant
            </Link>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
              {heroImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 service cards */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {blocks.map((b) => (
                <article
                  key={b.title}
                  className="bg-gray-bg border border-gray-200/60 rounded-2xl p-8 hover:border-brand/40 hover:-translate-y-0.5 transition-all relative"
                >
                  {b.badge && (
                    <span className="absolute top-6 right-6 text-[11px] font-semibold text-brand bg-white px-2.5 py-1 rounded-full border border-brand/20">
                      {b.badge}
                    </span>
                  )}
                  <h2 className="font-heading text-dark text-[24px] sm:text-[28px] font-bold mb-3">
                    {b.title}
                  </h2>
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl p-10 sm:p-14 text-center text-white">
              <h2 className="font-heading text-[28px] sm:text-[40px] font-bold tracking-[-0.02em] leading-tight mb-4">
                Un souci électrique ou de plomberie ?
              </h2>
              <p className="text-white/85 text-[16px] max-w-xl mx-auto mb-8 leading-relaxed">
                Notre assistant vous guide pas à pas. Aucun jargon technique,
                juste des questions simples.
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
