import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

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
  title: "E-Major | Électricien & Plombier à Paris",
  description:
    "E-Major, votre électricien et plombier à Paris et Île-de-France. Rénovation, dépannage, maintenance pour particuliers, commerces, hôtels, bureaux et théâtres.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
