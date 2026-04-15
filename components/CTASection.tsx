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
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-[32px] sm:text-[44px] font-bold tracking-[-0.02em] leading-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/85 text-[16px] leading-relaxed mb-8">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
    "inline-flex items-center gap-2 bg-white hover:bg-white/90 text-brand font-semibold px-7 py-4 rounded-[30px] text-[15px] transition-colors";
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
    "inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-4 rounded-[30px] text-[15px] transition-colors";
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
