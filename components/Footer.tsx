import Link from "next/link";
import { Mail } from "lucide-react";
import { CONTACT, COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 pb-24 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Navigation */}
          <div>
            <h3 className="font-heading text-white text-[18px] font-semibold mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link
                  href="/particuliers"
                  className="text-white/70 hover:text-brand transition-colors"
                >
                  Particuliers
                </Link>
              </li>
              <li>
                <Link
                  href="/professionnels"
                  className="text-white/70 hover:text-brand transition-colors"
                >
                  Professionnels
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="text-white/70 hover:text-brand transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-brand transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/assistant"
                  className="text-white/70 hover:text-brand transition-colors"
                >
                  Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white text-[18px] font-semibold mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-[14px] text-white/70">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-brand mt-0.5 shrink-0" />
                <a
                  href={CONTACT.emailHref}
                  className="hover:text-brand transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <Link
                  href="/assistant"
                  className="inline-flex items-center gap-2 mt-1 bg-brand/10 hover:bg-brand/20 text-brand px-3.5 py-1.5 rounded-full transition-all duration-200 text-[13px] font-medium"
                >
                  Lancer l&apos;assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-white text-[18px] font-semibold mb-5">
              Légal
            </h3>
            <ul className="space-y-3 text-[14px] text-white/70">
              <li>SIRET&nbsp;: {COMPANY.siret}</li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-brand transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="hover:text-brand transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/50">
            © {new Date().getFullYear()} {COMPANY.legalName}. Tous droits
            réservés.
          </p>
          <p className="text-[12px] text-white/40 tracking-wide">
            Électricité & plomberie · Paris & Île-de-France
          </p>
        </div>
      </div>
    </footer>
  );
}
