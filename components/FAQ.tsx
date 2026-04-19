"use client";

import { useState } from "react";
import Script from "next/script";
import { Plus, Minus } from "lucide-react";
import { SITE } from "@/lib/constants";

export type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Intervenez-vous en urgence le soir et le week-end ?",
    answer:
      "Nous intervenons en urgence du lundi au samedi jusqu'à 20 h sur Paris et proche couronne. Le dimanche et en nuit profonde, nous orientons vers notre partenaire agréé. Le délai moyen constaté est de 2 h sur Paris intra-muros.",
  },
  {
    question: "Sous quel délai recevrai-je mon devis ?",
    answer:
      "Sous 24 h ouvrées pour une demande standard, immédiatement après visite technique pour les chantiers de rénovation. Tous nos devis sont détaillés poste par poste avec RIB, SIRET et attestation d'assurance décennale.",
  },
  {
    question: "Êtes-vous certifiés et assurés ?",
    answer:
      "Oui. SIRET 951 039 957 00018, garantie décennale en cours, qualifications RGE et habilitation NF C 15-100. L'attestation d'assurance est fournie sur simple demande avant signature.",
  },
  {
    question: "Quelle zone géographique couvrez-vous ?",
    answer:
      "Paris (tous arrondissements) et la petite couronne : Hauts-de-Seine (92), Seine-Saint-Denis (93) et Val-de-Marne (94). Au-delà, les déplacements sont étudiés au cas par cas.",
  },
  {
    question: "Faites-vous de la mise aux normes pour la vente d'un bien ?",
    answer:
      "Oui, c'est un de nos chantiers les plus fréquents. Diagnostic, chiffrage, mise aux normes NF C 15-100 complète, attestation Consuel pour la remise en service Enedis. Comptez 2 à 5 jours selon la surface.",
  },
  {
    question: "Travaillez-vous avec les syndics et gestionnaires ?",
    answer:
      "Oui, nous sommes référencés chez plusieurs syndics parisiens et intervenons sur parties communes comme privatives. Facturation syndic directe possible, avec devis conforme aux procédures AG.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4 justify-center">FAQ</span>
          <h2
            id="faq-heading"
            className="font-heading text-dark text-[32px] sm:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-4 mt-3"
          >
            Questions fréquentes
          </h2>
          <p className="text-gray-text text-[16px] leading-relaxed">
            Les réponses directes aux questions qu&apos;on nous pose avant
            chaque devis.
          </p>
        </div>

        <ul className="divide-y divide-gray-200/70 border-y border-gray-200/70">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <li key={f.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-5 py-5 sm:py-6 text-left group"
                >
                  <span className="font-heading text-dark text-[17px] sm:text-[18px] font-semibold leading-snug group-hover:text-brand transition-colors">
                    {f.question}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                      open
                        ? "bg-brand border-brand text-white"
                        : "border-gray-200 text-gray-text group-hover:border-brand group-hover:text-brand"
                    }`}
                  >
                    {open ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!open}
                  className="pb-6 pr-12 text-gray-text text-[15px] leading-[1.75]"
                >
                  {f.answer}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Script
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
