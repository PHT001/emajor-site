import Link from "next/link";
import { CONTACT, COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Navigation */}
          <div>
            <h3 className="font-heading text-white text-[18px] font-semibold mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="/particuliers" className="text-white/70 hover:text-brand transition-colors">
                  Particuliers
                </Link>
              </li>
              <li>
                <Link href="/professionnels" className="text-white/70 hover:text-brand transition-colors">
                  Professionnels
                </Link>
              </li>
              <li>
                <Link href="/assistant" className="text-white/70 hover:text-brand transition-colors">
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
              <li>149 Av. du Maine, 75014 Paris</li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="hover:text-brand transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-white text-[18px] font-semibold mb-5">
              Légal
            </h3>
            <ul className="space-y-3 text-[14px] text-white/70">
              <li>SIRET : {COMPANY.siret}</li>
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

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-[13px] text-white/50">
            © {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
