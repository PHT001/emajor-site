import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Zap, Radio, Droplets, Wrench, Wind, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import PlaceholderImage from "@/components/PlaceholderImage";
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
};

type Tile = {
  icon: typeof Zap;
  category: string;
  title: string;
};

const photos: Photo[] = [
  {
    src: "/galerie/ciup-fondation-lucien-paye.jpg",
    alt: "Linéaire LED suspendu avec éclairage direct et indirect — Fondation Lucien Payé",
    category: "Dégagement",
    title: "Fondation Lucien Payé",
    location: "Linéaire LED suspendu — éclairage direct et indirect",
  },
  {
    src: "/galerie/locaux-technique-copro.jpg",
    alt: "Locaux technique — protection des circuits et des personnes",
    category: "Locaux technique",
    title: "Copropriété — Paris",
    location:
      "Disposants différentiels pour protection des circuits et des personnes",
  },
];

const tiles: Tile[] = [
  { icon: Zap, category: "Courant Fort", title: "Tableau électrique rénové" },
  { icon: Lightbulb, category: "Éclairage", title: "Luminaires sur mesure" },
  { icon: Radio, category: "Courant Faible", title: "Réseau VDI résidentiel" },
  { icon: Droplets, category: "Plomberie", title: "Salle de bain complète" },
  { icon: Wrench, category: "Dépannage", title: "Fuite chauffe-eau résolue" },
  { icon: Wind, category: "CVC & GTB", title: "Supervision CTA tertiaire" },
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
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-3 bg-gray-bg">
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
              {tiles.map((t, i) => (
                <li key={`${t.title}-${i}`}>
                  <article className="group">
                    <PlaceholderImage
                      icon={t.icon}
                      aspect="aspect-[4/5]"
                      rounded="rounded-2xl"
                      label={false}
                      className="mb-3"
                    />
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-brand">
                      {t.category}
                    </span>
                    <h2 className="font-heading text-dark text-[14px] sm:text-[16px] font-semibold leading-snug mt-1">
                      {t.title}
                    </h2>
                  </article>
                </li>
              ))}
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
