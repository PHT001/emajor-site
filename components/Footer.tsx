import { CONTACT, COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + Paris badge */}
          <div>
            <span aria-label="E-Major" className="font-[var(--font-heading)] text-2xl font-bold">
              e-maj<span className="text-paris-gold">o</span>r
            </span>
            <p className="font-[var(--font-display)] italic text-paris-gold/80 mt-2 text-sm tracking-wide">
              L&apos;artisanat parisien
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed text-sm">
              Électricité &amp; plomberie
              <br />
              Paris &amp; Île-de-France.
            </p>
            <div className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 border border-paris-gold/30 rounded-full">
              <div className="w-1 h-1 rounded-full bg-paris-gold" />
              <span className="text-xs text-paris-gold tracking-widest uppercase">
                Établi&nbsp;Paris&nbsp;14ᵉ
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-gray-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Particuliers", href: "#particuliers" },
                { label: "Tertiaire", href: "#tertiaire" },
                { label: "Nos Offres", href: "#offres" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-gray-400">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>{COMPANY.address.replace(", France", "")}</li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-gray-400">
              Informations
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="hover:text-white transition-colors">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm">SIRET : {COMPANY.siret}</p>
        </div>
      </div>
    </footer>
  );
}
