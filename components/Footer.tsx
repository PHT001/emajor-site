import { CONTACT, COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-anthracite text-paris-cream/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Wordmark + tagline */}
          <div className="md:col-span-5">
            <div className="font-[var(--font-heading)] text-paris-cream text-3xl sm:text-4xl tracking-tight">
              E-Major<span className="text-paris-gold">.</span>
            </div>
            <p className="font-[var(--font-display)] italic text-paris-gold/80 mt-3 text-lg">
              L&apos;artisanat de l&apos;ombre
            </p>
            <p className="text-paris-cream/50 mt-6 text-sm leading-relaxed max-w-sm">
              Maison parisienne d&apos;électricité et de plomberie, fondée au cœur
              du 14ᵉ arrondissement.
            </p>
            <div className="inline-flex items-center gap-3 mt-6 px-4 py-2 border border-paris-gold/30">
              <div className="w-1 h-1 rounded-full bg-paris-gold" />
              <span className="text-[0.65rem] text-paris-gold uppercase tracking-[0.2em]">
                Établi&nbsp;Paris&nbsp;XIV
              </span>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="paris-label mb-6 text-paris-gold">
              <span>Navigation</span>
            </div>
            <ul className="space-y-3">
              {[
                { label: "Particuliers", href: "#particuliers" },
                { label: "Tertiaire", href: "#tertiaire" },
                { label: "Nos Offres", href: "#offres" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-paris-cream/60 hover:text-paris-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="paris-label mb-6 text-paris-gold">
              <span>Atelier</span>
            </div>
            <ul className="space-y-3 text-paris-cream/60 text-sm">
              <li>149, av. du Maine</li>
              <li>75014 Paris</li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-paris-gold transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="hover:text-paris-gold transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div className="md:col-span-2">
            <div className="paris-label mb-6 text-paris-gold">
              <span>Légal</span>
            </div>
            <ul className="space-y-3 text-paris-cream/60 text-sm">
              <li>
                <a href="/mentions-legales" className="hover:text-paris-gold transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="hover:text-paris-gold transition-colors">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-paris-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-paris-cream/40 text-xs uppercase tracking-[0.15em]">
            &copy; {new Date().getFullYear()} {COMPANY.name} — Tous droits réservés
          </p>
          <p className="text-paris-cream/40 text-xs uppercase tracking-[0.15em]">
            SIRET {COMPANY.siret}
          </p>
        </div>
      </div>
    </footer>
  );
}
