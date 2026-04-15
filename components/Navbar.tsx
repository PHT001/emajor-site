"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const navItems = [
  { label: "Particuliers", href: "/particuliers" },
  { label: "Professionnels", href: "/professionnels" },
  { label: "Services", href: "/#services" },
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
        <Link
          href="/"
          aria-label="E-Major — accueil"
          className={`font-bold tracking-tight text-xl transition-colors ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          E-Major<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink/70 hover:text-ink"
                  : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nous contacter sur WhatsApp"
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
              scrolled
                ? "bg-ink/5 hover:bg-[#25D366] text-ink hover:text-white"
                : "bg-paper/10 hover:bg-[#25D366] text-paper hover:text-white"
            }`}
          >
            <WhatsAppIcon size={18} />
          </a>
          <Link
            href="/assistant"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-ink text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Lancer l&apos;assistant
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="group-hover:rotate-45 transition-transform"
            />
          </Link>
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
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-ink text-base font-medium border-b border-line"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/assistant"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-accent text-ink font-semibold px-6 py-4 rounded-full"
            >
              Lancer l&apos;assistant
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-paper-2 text-ink font-semibold px-6 py-4 rounded-full"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
