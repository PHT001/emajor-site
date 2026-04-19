"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Power } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const navItems = [
  { label: "Particuliers", href: "/particuliers" },
  { label: "Professionnels", href: "/professionnels" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          aria-label="E-Major — accueil"
          className="font-heading font-bold tracking-tight text-[20px] text-dark inline-flex items-center"
        >
          <span>e-maj</span>
          <Power
            size={16}
            strokeWidth={2.75}
            className="text-brand mx-[1px] -translate-y-[1px]"
            aria-hidden
          />
          <span>r</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-gray-text hover:text-brand transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Nous contacter
          </a>
        </div>

        <button
          className="md:hidden text-dark"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200/60 py-4 px-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-text hover:text-brand font-medium text-[14px]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded-full text-[14px] transition-colors mt-2"
          >
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  );
}
