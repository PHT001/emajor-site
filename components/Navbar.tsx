"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/33XXXXXXXXX";

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
        <a href="#" className="flex items-center gap-1">
          <span className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-dark">
            e-maj
          </span>
          <span className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-green-accent">
            o
          </span>
          <span className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-dark">
            r
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
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
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-dark transition-colors"
          >
            <MessageCircle size={16} />
            Nous contacter
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
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-green-accent text-white font-semibold px-5 py-2.5 rounded-full"
          >
            <MessageCircle size={16} />
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  );
}
