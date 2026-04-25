"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Power } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const navItems = [
  { label: "Particuliers", href: "/particuliers" },
  { label: "Professionnels", href: "/professionnels" },
  { label: "Galerie", href: "/galerie" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/90 border-b border-gray-200/70 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.1)]"
          : "bg-white/95 border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Link
          href="/"
          aria-label="E-Major — accueil"
          className="font-heading font-bold tracking-tight text-[20px] text-dark inline-flex items-center hover:opacity-85 transition-opacity duration-200"
        >
          <span>e-maj</span>
          <Power
            size={14}
            strokeWidth={2.75}
            className="text-brand mx-[1px] translate-y-[1px]"
            aria-hidden
          />
          <span>r</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[14px] font-medium text-gray-text hover:text-brand transition-colors duration-200 group"
            >
              {item.label}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand group-hover:w-full transition-[width] duration-300"
              />
            </Link>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_6px_16px_-4px_rgba(45,140,78,0.45)] active:scale-[0.97]"
          >
            Nous contacter
          </a>
        </div>

        <button
          className="md:hidden text-dark p-1.5 rounded-lg hover:bg-gray-bg transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — animated expand */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200/60 py-4 px-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-text hover:text-brand font-medium text-[14px] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded-full text-[14px] transition-all duration-200 active:scale-[0.98] mt-2"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </nav>
  );
}
