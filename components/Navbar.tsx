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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" aria-label="E-Major — accueil" className="flex items-center gap-1">
          <span aria-hidden="true" className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-dark">
            e-maj
          </span>
          <span aria-hidden="true" className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-green-accent">
            o
          </span>
          <span aria-hidden="true" className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-dark">
            r
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-text hover:text-dark transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-dark hover:text-green-accent transition-colors"
          >
            <Phone size={16} />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-dark transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-text hover:text-dark transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-dark text-dark font-semibold px-5 py-2.5 rounded-full"
            >
              <Phone size={16} />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-accent text-white font-semibold px-5 py-2.5 rounded-full"
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
