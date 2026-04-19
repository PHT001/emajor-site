import Link from "next/link";
import { CONTACT } from "@/lib/constants";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  primaryTarget?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  primaryTarget,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl p-8 sm:p-12 lg:p-14 text-center text-white relative overflow-hidden shadow-[0_24px_60px_-24px_rgba(26,92,50,0.5)]">
          {/* Decorative glow */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-white/5 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full bg-gold/15 blur-3xl"
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-[24px] sm:text-[36px] lg:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-3 sm:mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/85 text-[14px] sm:text-[16px] leading-relaxed mb-6 sm:mb-8">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
              <PrimaryButton
                href={primaryHref}
                target={primaryTarget}
                label={primaryLabel}
              />
              {secondaryLabel && secondaryHref && (
                <SecondaryButton href={secondaryHref} label={secondaryLabel} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrimaryButton({
  href,
  target,
  label,
}: {
  href: string;
  target?: string;
  label: string;
}) {
  const cls =
    "btn-shine inline-flex items-center justify-center gap-2 bg-white hover:bg-white/95 text-brand font-semibold px-5 py-3.5 sm:px-7 sm:py-4 rounded-full text-[14px] sm:text-[15px] transition-all duration-200 hover:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.25)] active:scale-[0.97] whitespace-nowrap";
  if (target === "_blank")
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

function SecondaryButton({ href, label }: { href: string; label: string }) {
  const cls =
    "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold px-5 py-3.5 sm:px-7 sm:py-4 rounded-full text-[14px] sm:text-[15px] transition-all duration-200 active:scale-[0.97]";
  if (href.startsWith("http"))
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

export function HomeCTA() {
  return (
    <CTASection
      title="Besoin d'un électricien ou plombier ?"
      subtitle="Contactez Marc directement pour un devis gratuit sous 24h."
      primaryLabel="Contacter Marc"
      primaryHref={CONTACT.whatsappUrl}
      primaryTarget="_blank"
      secondaryLabel="Voir nos services"
      secondaryHref="/particuliers"
    />
  );
}
