import { Leaf } from "lucide-react";
import { CONTACT, COMPANY } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Wordmark */}
          <div className="md:col-span-5">
            <div className="text-paper text-4xl sm:text-5xl font-bold tracking-tight">
              E-Major<span className="text-accent">.</span>
            </div>
            <p className="text-paper/60 mt-6 text-base leading-relaxed max-w-sm">
              Entreprise d&apos;électricité et de plomberie sur Paris et proche couronne.
            </p>
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-accent/30">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-medium">
                Disponible aujourd&apos;hui
              </span>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono text-paper/40 uppercase tracking-wider mb-6">
              Navigation
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
                    className="text-paper/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="text-xs font-mono text-paper/40 uppercase tracking-wider mb-6">
              Atelier
            </div>
            <ul className="space-y-3 text-paper/70 text-sm">
              <li>149, av. du Maine</li>
              <li>75014 Paris</li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <WhatsAppIcon size={14} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="hover:text-accent transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div className="md:col-span-2">
            <div className="text-xs font-mono text-paper/40 uppercase tracking-wider mb-6">
              Légal
            </div>
            <ul className="space-y-3 text-paper/70 text-sm">
              <li>
                <a href="/mentions-legales" className="hover:text-accent transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="hover:text-accent transition-colors">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Engagement environnemental */}
        <div className="mb-12 flex items-center gap-4 px-6 py-4 rounded-2xl border border-paper/10">
          <Leaf size={20} className="text-accent shrink-0" strokeWidth={2.2} />
          <p className="text-paper/60 text-sm">
            Chaque chantier est évalué selon son impact énergétique et écologique.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-paper/40 text-xs font-mono">
            &copy; {new Date().getFullYear()} {COMPANY.name} — Tous droits réservés
          </p>
          <p className="text-paper/40 text-xs font-mono">
            SIRET {COMPANY.siret}
          </p>
        </div>
      </div>
    </footer>
  );
}
