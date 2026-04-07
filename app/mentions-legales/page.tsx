import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY, CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Mentions légales | ${COMPANY.name}`,
  description: `Mentions légales du site ${SITE.url} — éditeur, hébergeur, propriété intellectuelle.`,
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-white">
        <article className="max-w-3xl mx-auto px-6">
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-dark mb-10">
            Mentions légales
          </h1>

          <section className="space-y-6 text-gray-text leading-relaxed">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Éditeur du site
              </h2>
              <p>
                <strong>{COMPANY.legalName}</strong>
                <br />
                Siège social : {COMPANY.address}
                <br />
                SIRET : {COMPANY.siret}
                <br />
                Téléphone : <a href={CONTACT.phoneHref} className="text-green-accent hover:underline">{CONTACT.phoneDisplay}</a>
                <br />
                Email : <a href={CONTACT.emailHref} className="text-green-accent hover:underline">{CONTACT.email}</a>
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Directeur de la publication
              </h2>
              <p>Le directeur de la publication est le représentant légal de {COMPANY.legalName}.</p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Hébergeur
              </h2>
              <p>
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133, Walnut, CA 91789, USA
                <br />
                <a href="https://vercel.com" className="text-green-accent hover:underline">vercel.com</a>
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes) est
                la propriété exclusive de {COMPANY.legalName}, sauf mention contraire. Toute
                reproduction, représentation, modification, publication ou adaptation totale
                ou partielle des éléments du site, quel que soit le moyen ou le procédé
                utilisé, est interdite sans autorisation écrite préalable.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Assurance professionnelle
              </h2>
              <p>
                {COMPANY.legalName} est couverte par une assurance responsabilité civile
                professionnelle et une garantie décennale, conformément à la réglementation
                en vigueur pour les professionnels du bâtiment.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Droit applicable
              </h2>
              <p>
                Le présent site et ses mentions légales sont régis par le droit français.
                En cas de litige, compétence est attribuée aux tribunaux français.
              </p>
            </div>

            <p className="text-sm text-gray-400 pt-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
