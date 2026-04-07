"use client";

import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const navItems = [
  { label: "Particuliers", href: "#particuliers" },
  { label: "Tertiaire", href: "#tertiaire" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paris-cream/90 backdrop-blur-md border-b border-paris-stone/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
        {/* Logo — wordmark serif */}
        <a href="#" aria-label="E-Major — accueil" className="flex items-baseline gap-2">
          <span className="font-[var(--font-heading)] text-2xl tracking-tight text-anthracite">
            E-Major
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-paris-gold hidden sm:inline">
            Paris
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-anthracite/70 hover:text-anthracite transition-colors uppercase tracking-[0.15em]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-anthracite hover:text-paris-gold transition-colors font-[var(--font-heading)]"
          >
            <Phone size={14} />
            {CONTACT.phoneDisplay}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-dark"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paris-cream border-t border-paris-stone px-6 pb-8 pt-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-anthracite/80 hover:text-anthracite transition-colors text-xs uppercase tracking-[0.2em] border-b border-paris-stone/60"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-3 border border-anthracite text-anthracite px-6 py-3.5 font-[var(--font-heading)]"
            >
              <Phone size={16} />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-anthracite text-paris-cream px-6 py-3.5 font-[var(--font-heading)] hover:bg-paris-gold transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
