import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-end pt-32 pb-16 sm:pb-20 bg-dark overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/img/header-1.jpeg')",
            filter: "grayscale(0.85) brightness(0.42) contrast(1.1)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-dark via-dark/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-brand/20 text-brand px-3 py-1 rounded-full text-[13px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Disponible aujourd&apos;hui
          </span>
          <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-white/40">
            <span>Paris / IDF</span>
            <span>·</span>
            <span>Est. 2024</span>
          </div>
        </div>

        {/* H1 — massive, left-aligned, squared */}
        <h1 className="font-heading text-white text-[44px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-bold leading-[0.9] tracking-[-0.03em] max-w-5xl">
          Électricité,
          <br />
          plomberie
          <br />
          <span className="text-brand">à&nbsp;Paris.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/65 text-[17px] sm:text-[20px] mt-8 max-w-2xl leading-relaxed font-light">
          Entreprise d&apos;électricité et de plomberie sur Paris et proche
          couronne. Dépannage, installation, rénovation — du lundi au samedi.
        </p>

        {/* Bottom row — CTAs left, stats right */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end border-t border-white/10 pt-10">
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/assistant"
              className="group inline-flex items-center justify-between gap-6 bg-brand hover:bg-brand-dark text-white px-7 py-5 rounded-[30px] transition-all duration-300 hover:shadow-[0_16px_40px_-10px_rgba(45,140,78,0.6)] active:scale-[0.98]"
            >
              <span className="font-semibold text-[15px]">
                Lancer l&apos;assistant
              </span>
              <ArrowRight
                size={20}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white px-7 py-5 rounded-[30px] transition-all duration-200 font-semibold text-[15px] active:scale-[0.98]"
            >
              Nous contacter
            </a>
          </div>

          {/* Stats strip */}
          <dl className="flex items-end gap-8 sm:gap-10 text-white">
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-1">
                Réponse
              </dt>
              <dd className="font-heading text-[32px] sm:text-[40px] font-bold tracking-tight leading-none">
                2&nbsp;h
              </dd>
            </div>
            <div className="w-px h-12 bg-white/15" />
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-1">
                Dispo
              </dt>
              <dd className="font-heading text-[32px] sm:text-[40px] font-bold tracking-tight leading-none">
                6/7
              </dd>
            </div>
            <div className="w-px h-12 bg-white/15 hidden sm:block" />
            <div className="hidden sm:block">
              <dt className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-1">
                Devis
              </dt>
              <dd className="font-heading text-[32px] sm:text-[40px] font-bold tracking-tight leading-none">
                Gratuit
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
