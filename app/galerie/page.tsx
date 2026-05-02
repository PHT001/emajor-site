import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Zap, Radio, Droplets, Wrench, Wind, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galerie — chantiers & installations",
  description:
    "Galerie de nos chantiers d'électricité et de plomberie à Paris et en Île-de-France : rénovations, installations, mises aux normes.",
  alternates: { canonical: `${SITE.url}/galerie` },
  openGraph: {
    title: "Galerie — E-Major",
    description:
      "Nos réalisations en électricité et plomberie à Paris et IDF.",
    url: `${SITE.url}/galerie`,
    type: "website",
  },
};

type Photo = {
  src: string;
  alt: string;
  category: string;
  title: string;
  location?: string;
  aspect: string;
};

type Tile = {
  icon: typeof Zap;
  category: string;
  title: string;
  image: string;
  alt: string;
  aspect: string;
  description?: string;
};

const photos: Photo[] = [
  {
    src: "/galerie/ciup-fondation-lucien-paye.jpg",
    alt: "Linéaire LED suspendu avec éclairage direct et indirect — résidence étudiante",
    category: "Dégagement",
    title: "Résidence Étudiante",
    location: "Linéaire LED suspendu — éclairage direct et indirect",
    aspect: "3/4",
  },
  {
    src: "/galerie/locaux-technique-copro.jpg",
    alt: "Locaux technique — chaufferie de siège social maison d'édition",
    category: "Locaux technique",
    title: "Siège social — Maison d'édition",
    location:
      "Dispositifs différentiels pour protection des circuits et des personnes",
    aspect: "3/4",
  },
  {
    src: "/galerie/locaux-exception.jpg",
    alt: "Intervention sur plafonds peints et dorures dans hôtel particulier — remplacement de réglette fluorescente par ruban LED",
    category: "Locaux d'exception",
    title: "Bureau de représentation gouvernementale",
    location: "Remplacement de réglette fluorescente par ruban LED 24V 2700K",
    aspect: "7/5",
  },
];

const tiles: Tile[] = [
  {
    icon: Zap,
    category: "Courant Fort",
    title: "Tableau électrique rénové",
    image: "/images/tableau-renove.jpg",
    alt: "Tableau électrique modulaire rénové avec rangées de disjoncteurs",
    aspect: "3/2",
  },
  {
    icon: Lightbulb,
    category: "Éclairage",
    title: "Luminaires sur mesure",
    image: "/images/luminaires-led.jpg",
    alt: "Luminaire LED suspendu design dans intérieur contemporain",
    aspect: "3/4",
    description: "Design et fabriqué en Pologne",
  },
  {
    icon: Radio,
    category: "Courant Faible",
    title: "Réseau VDI résidentiel",
    image: "/images/vdi-residentiel.jpg",
    alt: "Câbles ethernet RJ45 colorés branchés sur switch réseau résidentiel",
    aspect: "3/2",
  },
  {
    icon: Droplets,
    category: "Plomberie",
    title: "Salle de bain complète",
    image: "/images/salle-de-bain.jpg",
    alt: "Salle de bain moderne entièrement rénovée avec douche et vasque design",
    aspect: "3/2",
  },
  {
    icon: Wrench,
    category: "Dépannage",
    title: "Fuite chauffe-eau résolue",
    image: "/images/depannage-plomberie.jpg",
    alt: "Plombier en intervention sur tuyauterie, dépannage avec outils en main",
    aspect: "3/2",
  },
  {
    icon: Wind,
    category: "CVC & GTB",
    title: "Supervision CTA tertiaire",
    image: "/images/cvc-supervision.jpg",
    alt: "Gaines de ventilation et conduits CVC en plafond technique tertiaire",
    aspect: "3/2",
  },
];

export default function GaleriePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-14 sm:pt-20 pb-10 bg-gray-bg">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav
              aria-label="Fil d'Ariane"
              className="text-[13px] text-gray-mid mb-5 sm:mb-6"
            >
              <Link href="/" className="hover:text-brand transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <span className="text-dark">Galerie</span>
            </nav>
            <h1 className="font-heading text-dark text-[32px] sm:text-[48px] lg:text-[56px] font-bold tracking-[-0.02em] leading-[1.05] mb-4">
              Galerie
            </h1>
            <p className="text-gray-text text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
              Nos derniers chantiers d&apos;électricité et de plomberie à Paris
              et en Île-de-France. Installations, rénovations, mises aux normes
              — les photos sont mises en ligne au fur et à mesure.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              {photos.map((p) => (
                <li key={p.src} className="col-span-2 md:col-span-2 lg:col-span-2">
                  <article
                    className="group relative overflow-hidden rounded-2xl bg-gray-bg"
                    style={{ aspectRatio: p.aspect }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent"
                      aria-hidden
                    />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 text-white transition-all duration-300 group-hover:-translate-y-1">
                      <span className="inline-block text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-brand/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full mb-1.5 sm:mb-2">
                        {p.category}
                      </span>
                      <h2 className="font-heading text-[14px] sm:text-[18px] font-semibold leading-tight">
                        {p.title}
                      </h2>
                    </div>
                    {p.location && (
                      <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        <p className="text-white text-[11px] sm:text-[13px] font-medium leading-snug bg-white/10 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                          {p.location}
                        </p>
                      </div>
                    )}
                  </article>
                </li>
              ))}
              {tiles.map((t, i) => {
                const Icon = t.icon;
                return (
                  <li key={`${t.title}-${i}`}>
                    <article
                      className="group relative overflow-hidden rounded-2xl bg-gray-bg"
                      style={{ aspectRatio: t.aspect }}
                    >
                      <Image
                        src={t.image}
                        alt={t.alt}
                        fill
                        sizes="(min-width: 1024px) 290px, (min-width: 768px) 33vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent"
                        aria-hidden
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                        <Icon className="w-4 h-4 text-brand" />
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white transition-all duration-300 group-hover:-translate-y-1">
                        <span className="inline-block text-[10px] font-semibold tracking-wider uppercase bg-brand/90 px-2 py-0.5 rounded-full mb-1.5">
                          {t.category}
                        </span>
                        <h2 className="font-heading text-[13px] sm:text-[15px] font-semibold leading-tight">
                          {t.title}
                        </h2>
                      </div>
                      {t.description && (
                        <div className="pointer-events-none absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                          <p className="text-white text-[11px] font-medium leading-snug bg-white/10 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                            {t.description}
                          </p>
                        </div>
                      )}
                    </article>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 sm:mt-16 text-center max-w-xl mx-auto">
              <p className="text-gray-text text-[14px] leading-relaxed mb-5">
                D&apos;autres photos de nos chantiers arrivent bientôt. En
                attendant, vous pouvez nous décrire votre besoin — on vous
                répond en moins de 2&nbsp;h.
              </p>
              <Link
                href="/assistant"
                className="btn-shine inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-[14px] font-semibold px-5 py-3 rounded-full transition-all duration-200 hover:shadow-[0_10px_24px_-8px_rgba(45,140,78,0.5)] active:scale-[0.97]"
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
