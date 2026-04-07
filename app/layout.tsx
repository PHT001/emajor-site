import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { COMPANY, CONTACT, SITE } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
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
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  description: SITE.description,
  url: SITE.url,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "149 Av. du Maine",
    addressLocality: "Paris",
    postalCode: "75014",
    addressRegion: COMPANY.region,
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.8357, longitude: 2.3257 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Paris" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
  ],
  identifier: COMPANY.siret,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-white antialiased">
        {children}
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
