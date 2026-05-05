import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-end pt-24 sm:pt-32 pb-12 sm:pb-20 bg-dark overflow-hidden">
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
          <span className="inline-flex items-center gap-2 bg-brand/20 text-brand px-3 py-1 rounded-full text-[13px] font-medium animate-float-soft">
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
        <p className="text-white/65 text-[15px] sm:text-[20px] mt-5 sm:mt-8 max-w-2xl leading-relaxed font-light">
          Entreprise d&apos;électricité et de plomberie sur Paris et proche
          couronne. Dépannage, maintenance des installations, rénovation — du
          lundi au samedi.
        </p>

        {/* Rating strip */}
        <div
          className="mt-5 sm:mt-6 inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full pl-2 pr-4 py-1.5 animate-stat-in"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex items-center gap-[1px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                strokeWidth={0}
                className="fill-gold text-gold"
              />
            ))}
          </div>
          <span className="text-white font-semibold text-[13px] sm:text-[14px] tracking-tight">
            4,8/5
          </span>
          <span
            aria-hidden
            className="h-3 w-px bg-white/20"
          />
          <span className="text-white/70 text-[12px] sm:text-[13px] font-medium">
            +200&nbsp;avis
          </span>
        </div>

        {/* Bottom row — CTAs left, stats right */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-10 items-end border-t border-white/10 pt-6 sm:pt-10">
          {/* CTAs */}
          <div className="flex flex-row gap-2.5 sm:gap-3">
            <Link
              href="/assistant"
              className="btn-shine group flex-1 sm:flex-initial inline-flex items-center justify-center sm:justify-between gap-2.5 sm:gap-6 bg-brand hover:bg-brand-dark text-white px-4 py-3.5 sm:px-7 sm:py-5 rounded-full transition-all duration-300 hover:shadow-[0_16px_40px_-10px_rgba(45,140,78,0.6)] active:scale-[0.98] whitespace-nowrap"
            >
              <span className="font-semibold text-[14px] sm:text-[15px]">
                <span className="sm:hidden">Assistant</span>
                <span className="hidden sm:inline">
                  Lancer l&apos;assistant
                </span>
              </span>
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <a
              href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(
                "Bonjour, je vous contacte depuis votre site emajor.fr.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white px-4 py-3.5 sm:px-7 sm:py-5 rounded-full transition-all duration-200 font-semibold text-[14px] sm:text-[15px] active:scale-[0.98] whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Stats strip */}
          <dl className="flex items-end gap-8 sm:gap-10 text-white">
            <div
              className="animate-stat-in"
              style={{ animationDelay: "200ms" }}
            >
              <dt className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-1">
                Réponse
              </dt>
              <dd className="font-heading text-[32px] sm:text-[40px] font-bold tracking-tight leading-none">
                2&nbsp;h
              </dd>
            </div>
            <div className="w-px h-12 bg-white/15" />
            <div
              className="animate-stat-in"
              style={{ animationDelay: "350ms" }}
            >
              <dt className="text-[11px] uppercase tracking-widest text-white/40 font-mono mb-1">
                Dispo
              </dt>
              <dd className="font-heading text-[32px] sm:text-[40px] font-bold tracking-tight leading-none">
                6/7
              </dd>
            </div>
            <div className="w-px h-12 bg-white/15 hidden sm:block" />
            <div
              className="hidden sm:block animate-stat-in"
              style={{ animationDelay: "500ms" }}
            >
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
