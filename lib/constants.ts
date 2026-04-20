// Single source of truth for contact / branding constants.
// Update here and it propagates everywhere.

export const COMPANY = {
  name: "E-Major",
  legalName: "E-Major SAS",
  siret: "95103995700018",
  address: "Atelier — 100 Rue de l'Ouest, 75014 Paris, France",
  addressShort: "100 Rue de l'Ouest, 75014 Paris",
  streetAddress: "100 Rue de l'Ouest",
  postalCode: "75014",
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
    "100 Rue de l'Ouest, 75014 Paris",
  )}`,
  // Embed generated from "100 Rue de l'Ouest, 75014 Paris" — query-based embed is
  // forgiving and re-centers on the address on load.
  embedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("100 Rue de l'Ouest, 75014 Paris") +
    "&z=16&output=embed",
} as const;

export const SITE = {
  url: "https://emajor.fr",
  title: "E-Major | Électricien & Plombier à Paris",
  description:
    "E-Major, votre électricien et plombier à Paris et Île-de-France. Rénovation, dépannage, maintenance pour particuliers, commerces, hôtels, bureaux et théâtres.",
} as const;
