// FAQ tree for the chatbot — designed to qualify calls so Marc only
// receives serious leads. Edit categories/questions/answers freely;
// the chatbot UI consumes this object directly.

export type FaqCategoryId =
  | "assurance"
  | "tarifs"
  | "delais"
  | "zone"
  | "metiers"
  | "documents";

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  // Optional follow-up CTA shown under the answer
  cta?: { label: string; href: string; external?: boolean };
}

export interface FaqCategory {
  id: FaqCategoryId;
  label: string;
  description: string;
  entries: FaqEntry[];
}

export const FAQ: FaqCategory[] = [
  {
    id: "assurance",
    label: "Assurance & qualifications",
    description: "Garanties professionnelles et certifications",
    entries: [
      {
        id: "decennale",
        question: "Êtes-vous bien assurés ?",
        answer:
          "Oui — E-Major SAS dispose d'une assurance décennale (obligation légale loi Spinetta) et d'une responsabilité civile professionnelle, conformément à la réglementation française du bâtiment. Notre attestation est à jour et peut vous être transmise sur simple demande avant signature de devis.",
        cta: { label: "Demander l'attestation par mail", href: "mailto:contact@emajor.fr?subject=Demande%20d%27attestation%20d%C3%A9cennale", external: false },
      },
      {
        id: "siret",
        question: "Quel est votre statut juridique ?",
        answer:
          "E-Major est une SAS française inscrite au Registre du Commerce. SIRET 95103995700018. Siège social : 149 avenue du Maine, 75014 Paris. Toutes nos factures sont conformes à la réglementation fiscale française.",
      },
      {
        id: "qualification",
        question: "Vos techniciens sont-ils qualifiés ?",
        answer:
          "Tous nos intervenants sont des artisans qualifiés en électricité (norme NF C 15-100), plomberie sanitaire et CVC. Nous formons régulièrement nos équipes aux nouvelles normes et aux exigences hôtelières (commissions de sécurité ERP/ERT).",
      },
    ],
  },
  {
    id: "tarifs",
    label: "Tarifs & devis",
    description: "Combien ça coûte, comment ça se passe",
    entries: [
      {
        id: "devis-gratuit",
        question: "Faites-vous des devis gratuits ?",
        answer:
          "Oui — devis gratuit, sans engagement, sous 24 à 48 heures. Pour les petits travaux et dépannages, nous pouvons souvent vous donner un ordre de prix immédiatement par WhatsApp à partir de quelques photos.",
      },
      {
        id: "deroulement-devis",
        question: "Comment se déroule un devis ?",
        answer:
          "Trois options : (1) photos par WhatsApp pour un chiffrage indicatif rapide, (2) visite gratuite sur place pour un devis détaillé, (3) pour les chantiers tertiaires, étude technique avec dossier APD. Vous choisissez la formule selon votre projet.",
        cta: { label: "Démarrer par WhatsApp", href: "https://wa.me/33661864303", external: true },
      },
      {
        id: "tarif-depannage",
        question: "Combien coûte un dépannage en urgence ?",
        answer:
          "Le prix dépend de la nature de la panne. Nous facturons un forfait de déplacement + main d'œuvre au temps passé. Pour vous donner un ordre de grandeur précis, décrivez-nous votre situation par WhatsApp et nous vous répondons sous quelques minutes.",
      },
      {
        id: "moyens-paiement",
        question: "Quels moyens de paiement acceptez-vous ?",
        answer:
          "Virement bancaire, chèque, espèces (jusqu'aux plafonds légaux). Pour les chantiers importants, paiement échelonné selon avancement. Notre RIB est transmis avec chaque devis accepté.",
      },
    ],
  },
  {
    id: "delais",
    label: "Délais d'intervention",
    description: "Quand est-ce qu'on vient",
    entries: [
      {
        id: "urgence",
        question: "Quel délai pour une urgence ?",
        answer:
          "Pour les urgences sur Paris intra-muros (fuite, coupure, panne bloquante), nous nous engageons à intervenir sous 2 heures en journée et sous 4 heures en soirée. Nous travaillons 6j/7 pour les urgences avérées.",
        cta: { label: "Appeler en urgence", href: "tel:+33661864303", external: false },
      },
      {
        id: "renovation",
        question: "Quel délai pour un chantier de rénovation ?",
        answer:
          "Cela dépend de l'ampleur. Une rénovation électrique d'appartement : compter 1 à 3 semaines selon la surface. Un chantier tertiaire complet : devis avec planning détaillé. Nous nous engageons sur des délais réalistes que nous tenons.",
      },
      {
        id: "rdv",
        question: "Comment prendre rendez-vous ?",
        answer:
          "Par WhatsApp, téléphone ou email. Nous proposons un créneau dans les 48 heures pour les visites de devis. Pour les interventions urgentes, contactez-nous directement par téléphone.",
      },
    ],
  },
  {
    id: "zone",
    label: "Zone d'intervention",
    description: "Où est-ce qu'on intervient",
    entries: [
      {
        id: "arrondissements",
        question: "Dans quels arrondissements intervenez-vous ?",
        answer:
          "Tout Paris intra-muros, avec une attention particulière au 1ᵉʳ (Louvre), 4ᵉ (Marais), 6ᵉ (Saint-Germain), 7ᵉ (Invalides), 8ᵉ (Champs-Élysées), 9ᵉ (Opéra), 14ᵉ (Montparnasse, notre atelier), 16ᵉ (Passy) et 17ᵉ (Batignolles).",
      },
      {
        id: "idf",
        question: "Sortez-vous de Paris ?",
        answer:
          "Oui, nous intervenons aussi en proche couronne (92, 93, 94) et plus largement en Île-de-France pour les chantiers tertiaires significatifs. Frais de déplacement adaptés selon la zone.",
      },
    ],
  },
  {
    id: "metiers",
    label: "Nos métiers",
    description: "Ce que l'on sait faire",
    entries: [
      {
        id: "electricite",
        question: "Faites-vous l'électricité complète ?",
        answer:
          "Oui : courant fort (puissance, tableaux, mise aux normes NF C 15-100), courant faible (data, vidéo, contrôle d'accès), éclairage architectural, dépannage et recherche de panne.",
      },
      {
        id: "plomberie",
        question: "Et la plomberie ?",
        answer:
          "Installation sanitaire complète, rénovation de salle de bain, robinetterie, chauffe-eau et ballon d'eau chaude, dépannage et recherche de fuites.",
      },
      {
        id: "tertiaire",
        question: "Travaillez-vous pour des hôtels et restaurants ?",
        answer:
          "Oui, c'est l'une de nos spécialités. Nous gérons les chantiers neufs, les rénovations, les levées de réserves ERP/ERT après commission de sécurité, et la maintenance avec astreinte 24h/24 si besoin.",
      },
      {
        id: "cvc",
        question: "Et la climatisation / CVC ?",
        answer:
          "Oui : installation et maintenance de climatisation, ventilation et traitement d'air pour les espaces tertiaires (bureaux, commerces, CHR).",
      },
    ],
  },
  {
    id: "documents",
    label: "Documents administratifs",
    description: "RIB, attestations, factures",
    entries: [
      {
        id: "rib",
        question: "Pouvez-vous m'envoyer votre RIB ?",
        answer:
          "Oui, le RIB d'E-Major SAS vous est transmis automatiquement à l'acceptation d'un devis. Si vous en avez besoin avant (mise en place de prélèvement, gestion comptable), envoyez-nous un mail et nous vous le faisons parvenir sous quelques heures.",
        cta: { label: "Demander le RIB", href: "mailto:contact@emajor.fr?subject=Demande%20de%20RIB", external: false },
      },
      {
        id: "facture",
        question: "Comment retrouver une ancienne facture ?",
        answer:
          "Envoyez-nous un mail avec la date approximative et l'objet de l'intervention, nous vous renvoyons la facture sous 24 à 48 heures.",
        cta: { label: "Demander une facture", href: "mailto:contact@emajor.fr?subject=Demande%20de%20facture", external: false },
      },
      {
        id: "attestation",
        question: "Avez-vous un Kbis et l'attestation URSSAF ?",
        answer:
          "Oui — Kbis à jour, attestation URSSAF de vigilance, attestation fiscale. Tous ces documents sont disponibles sur demande et systématiquement transmis aux clients tertiaires (syndics, gestionnaires, hôteliers).",
      },
    ],
  },
];
