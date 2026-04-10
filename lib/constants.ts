// Single source of truth for contact / branding constants.
// Update here and it propagates everywhere.

export const COMPANY = {
  name: "E-Major",
  legalName: "E-Major SAS",
  siret: "95103995700018",
  address: "149 Av. du Maine, 75014 Paris, France",
  city: "Paris",
  region: "Île-de-France",
} as const;

export const CONTACT = {
  phone: "+33661864303",
  phoneDisplay: "06 61 86 43 03",
  phoneHref: "tel:+33661864303",
  email: "contact@emajor.fr",
  emailHref: "mailto:contact@emajor.fr",
  whatsappNumber: "33661864303",
  whatsappUrl: "https://wa.me/33661864303",
  openingHours: "Lun – Sam : 7h30 – 12h30 / 13h30 – 17h30",
} as const;

export const MAPS = {
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    COMPANY.address,
  )}`,
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1!2d2.3257!3d48.8357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671a7c81a146d%3A0x7e2e2f1b6e1f1b1b!2s149%20Av.%20du%20Maine%2C%2075014%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
} as const;

export const SITE = {
  url: "https://emajor.fr",
  title: "E-Major | Électricien & Plombier à Paris",
  description:
    "E-Major, votre électricien et plombier à Paris et Île-de-France. Rénovation, dépannage, maintenance pour particuliers, commerces, hôtels, bureaux et théâtres.",
} as const;
