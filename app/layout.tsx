import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { COMPANY, CONTACT, SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${COMPANY.name}`,
  },
  description: SITE.description,
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.legalName }],
  keywords: [
    "électricien Paris",
    "plombier Paris",
    "rénovation électrique",
    "dépannage plomberie",
    "courant fort",
    "courant faible",
    "CVC",
    "tertiaire",
    "hôtel",
    "théâtre",
    "commerce",
    "E-Major",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: COMPANY.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician", "Plumber"],
  "@id": `${SITE.url}/#business`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  description: SITE.description,
  url: SITE.url,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  image: `${SITE.url}/opengraph-image`,
  logo: `${SITE.url}/icon`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 Rue de l'Ouest",
    addressLocality: "Paris",
    postalCode: "75014",
    addressRegion: COMPANY.region,
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.8357, longitude: 2.3193 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Paris" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
    { "@type": "AdministrativeArea", name: "Seine-Saint-Denis" },
    { "@type": "AdministrativeArea", name: "Val-de-Marne" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Installation et rénovation électrique",
        serviceType: "Électricité générale",
        areaServed: { "@type": "City", name: "Paris" },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Dépannage et installation plomberie",
        serviceType: "Plomberie sanitaire",
        areaServed: { "@type": "City", name: "Paris" },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mise aux normes NF C 15-100",
        serviceType: "Mise en conformité électrique",
        areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
      },
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Garantie décennale",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Qualification RGE",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Habilitation NF C 15-100",
    },
  ],
  identifier: COMPANY.siret,
  sameAs: [] as string[],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: COMPANY.name,
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE.url}/#business` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-white antialiased">
        {children}
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
