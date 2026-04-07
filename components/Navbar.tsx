"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const navItems = [
  { label: "Particuliers", href: "#particuliers" },
  { label: "Tertiaire", href: "#tertiaire" },
  { label: "Offres", href: "#offres" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
        {/* Logo wordmark */}
        <a
          href="#"
          aria-label="E-Major — accueil"
          className={`font-bold tracking-tight text-xl transition-colors ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          E-Major<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink/70 hover:text-ink"
                  : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.phoneHref}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "text-ink hover:text-accent"
                : "text-paper hover:text-accent"
            }`}
          >
            <Phone size={14} strokeWidth={2.5} />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-ink text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Devis
            <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-ink" : "text-paper"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paper border-t border-line px-6 pb-8 pt-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-ink text-base font-medium border-b border-line"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-paper-2 text-ink font-semibold px-6 py-4 rounded-full"
            >
              <Phone size={16} strokeWidth={2.5} />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-ink font-semibold px-6 py-4 rounded-full"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              Devis WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
