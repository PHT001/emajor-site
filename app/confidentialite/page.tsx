import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY, CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Politique de confidentialité | ${COMPANY.name}`,
  description: `Politique de confidentialité et traitement des données personnelles sur ${SITE.url}.`,
  robots: { index: true, follow: true },
};

export default function Confidentialite() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-white">
        <article className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-[36px] sm:text-[48px] font-bold text-dark mb-10">
            Politique de confidentialité
          </h1>

          <section className="space-y-8 text-gray-text text-[15px] leading-relaxed">
            <div>
              <h2 className="font-heading text-[22px] font-bold text-dark mb-3">
                Responsable du traitement
              </h2>
              <p>
                {COMPANY.legalName}, dont le siège social est situé au{" "}
                {COMPANY.address}.
                <br />
                Email : <a href={CONTACT.emailHref} className="text-brand hover:underline">{CONTACT.email}</a>
                <br />
                SIRET : {COMPANY.siret}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-bold text-dark mb-3">
                Données collectées
              </h2>
              <p>
                Ce site ne collecte aucune donnée personnelle de manière
                automatique (pas de cookies tiers, pas de trackers, pas
                d&apos;analytics). Les seules données transmises le sont
                volontairement par l&apos;utilisateur via l&apos;assistant de
                devis, qui redirige vers WhatsApp.
              </p>
              <p className="mt-3">
                Les données éventuellement partagées via WhatsApp (type de
                besoin, photos, coordonnées) sont traitées uniquement dans le
                cadre de la réponse à votre demande de devis.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-bold text-dark mb-3">
                Finalité du traitement
              </h2>
              <p>
                Les informations recueillies via l&apos;assistant sont utilisées
                exclusivement pour qualifier votre besoin et vous transmettre un
                devis. Elles ne sont jamais cédées, vendues ou louées à des
                tiers.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-bold text-dark mb-3">
                Durée de conservation
              </h2>
              <p>
                Les échanges WhatsApp sont conservés le temps nécessaire au
                traitement de votre demande et au suivi du chantier éventuel,
                puis supprimés dans un délai maximum de 3 ans conformément aux
                obligations légales.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-bold text-dark mb-3">
                Vos droits (RGPD)
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez des
                droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à{" "}
                <a href={CONTACT.emailHref} className="text-brand hover:underline">
                  {CONTACT.email}
                </a>
                . Vous pouvez également introduire une réclamation auprès de la
                CNIL (
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  cnil.fr
                </a>
                ).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-bold text-dark mb-3">
                Cookies
              </h2>
              <p>
                Ce site n&apos;utilise aucun cookie publicitaire ou de suivi.
                Seuls des cookies techniques strictement nécessaires au
                fonctionnement du site peuvent être déposés (gestion du cache,
                préférences de navigation). Ces cookies ne nécessitent pas votre
                consentement au sens de la directive ePrivacy.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-bold text-dark mb-3">
                Hébergeur
              </h2>
              <p>
                Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA.
              </p>
            </div>

            <p className="text-[13px] text-gray-mid pt-6">
              Dernière mise à jour : avril 2026
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
