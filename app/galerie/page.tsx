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
    alt: "Locaux technique — protection des circuits et des personnes",
    category: "Locaux technique",
    title: "Copropriété — Paris",
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
                  <article className="group">
                    <div
                      className="relative overflow-hidden rounded-2xl mb-3 bg-gray-bg"
                      style={{ aspectRatio: p.aspect }}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-brand">
                      {p.category}
                    </span>
                    <h2 className="font-heading text-dark text-[15px] sm:text-[17px] font-semibold leading-snug mt-1">
                      {p.title}
                    </h2>
                    {p.location && (
                      <p className="text-[12px] sm:text-[13px] text-gray-mid mt-0.5">
                        {p.location}
                      </p>
                    )}
                  </article>
                </li>
              ))}
              {tiles.map((t, i) => {
                const Icon = t.icon;
                return (
                  <li key={`${t.title}-${i}`}>
                    <article className="group">
                      <div
                        className="relative overflow-hidden rounded-2xl mb-3 bg-gray-bg"
                        style={{ aspectRatio: t.aspect }}
                      >
                        <Image
                          src={t.image}
                          alt={t.alt}
                          fill
                          sizes="(min-width: 1024px) 290px, (min-width: 768px) 33vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute top-3 left-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                          <Icon className="w-4 h-4 text-brand" />
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-brand">
                        {t.category}
                      </span>
                      <h2 className="font-heading text-dark text-[14px] sm:text-[16px] font-semibold leading-snug mt-1">
                        {t.title}
                      </h2>
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
