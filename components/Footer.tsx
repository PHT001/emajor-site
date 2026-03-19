export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo */}
          <div>
            <span className="font-[var(--font-heading)] text-2xl font-bold">
              e-maj<span className="text-green-accent">o</span>r
            </span>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Électricité &amp; plomberie
              <br />
              Paris &amp; Île-de-France.
            </p>
          </div>

          {/* Links */}
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

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-gray-400">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>149 Av. du Maine, 75014 Paris</li>
              <li>
                <a
                  href="mailto:contact@emajor.fr"
                  className="hover:text-white transition-colors"
                >
                  contact@emajor.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} E-Major. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm">SIRET : 95103995700018</p>
        </div>
      </div>
    </footer>
  );
}
