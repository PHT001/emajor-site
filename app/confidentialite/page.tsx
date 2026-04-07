import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotFAQ from "@/components/ChatbotFAQ";
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
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-dark mb-10">
            Politique de confidentialité
          </h1>

          <section className="space-y-6 text-gray-text leading-relaxed">
            <p>
              La présente politique de confidentialité décrit comment {COMPANY.legalName}
              collecte, utilise et protège les données personnelles des visiteurs de son
              site web, conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés.
            </p>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Responsable du traitement
              </h2>
              <p>
                {COMPANY.legalName} — {COMPANY.address}
                <br />
                Contact : <a href={CONTACT.emailHref} className="text-green-accent hover:underline">{CONTACT.email}</a>
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Données collectées
              </h2>
              <p>
                Ce site ne collecte aucune donnée personnelle via un formulaire à ce jour.
                Lorsque vous nous contactez par email, téléphone ou WhatsApp, nous traitons
                les informations que vous nous transmettez uniquement pour répondre à votre
                demande et établir un devis.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Cookies et services tiers
              </h2>
              <p>
                Ce site intègre une carte interactive fournie par Google Maps. Google
                peut déposer des cookies et collecter des informations relatives à votre
                navigation, conformément à sa propre politique de confidentialité (
                <a
                  href="https://policies.google.com/privacy"
                  className="text-green-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/privacy
                </a>
                ). Aucun autre outil de suivi ou d&apos;analytique n&apos;est déployé à ce jour.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Durée de conservation
              </h2>
              <p>
                Les échanges liés à une demande de devis sont conservés pendant la durée
                de la relation commerciale, puis jusqu&apos;à 3 ans après le dernier contact,
                à des fins commerciales et administratives.
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données
                personnelles : accès, rectification, effacement, limitation, portabilité
                et opposition. Pour exercer ces droits, contactez-nous à{" "}
                <a href={CONTACT.emailHref} className="text-green-accent hover:underline">
                  {CONTACT.email}
                </a>
                . Vous pouvez également introduire une réclamation auprès de la CNIL (
                <a href="https://www.cnil.fr" className="text-green-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  cnil.fr
                </a>
                ).
              </p>
            </div>

            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-dark mb-2">
                Sécurité
              </h2>
              <p>
                Nous mettons en œuvre les mesures techniques et organisationnelles
                appropriées pour garantir la sécurité de vos données personnelles contre
                toute perte, utilisation abusive ou accès non autorisé.
              </p>
            </div>

            <p className="text-sm text-gray-400 pt-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
            </p>
          </section>
        </article>
      </main>
      <Footer />
      <ChatbotFAQ />
    </>
  );
}
