import { Clock, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT, COMPANY, MAPS } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-paper-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span>Contact</span>
            </div>
            <h2 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Parlons de
              <br />
              votre projet.
            </h2>
          </div>
          <p className="text-ink-mute text-base lg:text-lg max-w-md leading-relaxed">
            Atelier au cœur du 14ᵉ arrondissement. Réponse sous 2&nbsp;heures
            en journée par WhatsApp ou téléphone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Map */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-ink min-h-[450px]">
            <iframe
              src={MAPS.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 450, filter: "grayscale(0.4)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${COMPANY.name} - ${COMPANY.address}`}
            />
          </div>

          {/* Info card */}
          <div className="lg:col-span-5 bg-paper rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
            {/* Address */}
            <a
              href={MAPS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-paper-2 group-hover:bg-accent-soft flex items-center justify-center shrink-0 transition-colors">
                  <MapPin size={20} className="text-ink group-hover:text-accent transition-colors" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-ink-faint mb-1 font-medium">Adresse</div>
                  <div className="text-ink font-semibold leading-snug">
                    149, avenue du Maine
                    <br />
                    75014 Paris
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-ink-faint group-hover:text-accent transition-colors mt-2" />
              </div>
            </a>

            <div className="h-px bg-line" />

            {/* WhatsApp */}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-paper-2 group-hover:bg-[#25D366] flex items-center justify-center shrink-0 transition-colors">
                  <WhatsAppIcon size={20} className="text-ink group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-ink-faint mb-1 font-medium">WhatsApp</div>
                  <div className="text-ink font-semibold">Écrire maintenant</div>
                </div>
                <ArrowUpRight size={18} className="text-ink-faint group-hover:text-accent transition-colors mt-2" />
              </div>
            </a>

            <div className="h-px bg-line" />

            {/* Email */}
            <a href={CONTACT.emailHref} className="block group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-paper-2 group-hover:bg-accent-soft flex items-center justify-center shrink-0 transition-colors">
                  <Mail size={20} className="text-ink group-hover:text-accent transition-colors" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-ink-faint mb-1 font-medium">Email</div>
                  <div className="text-ink font-semibold">{CONTACT.email}</div>
                </div>
                <ArrowUpRight size={18} className="text-ink-faint group-hover:text-accent transition-colors mt-2" />
              </div>
            </a>

            <div className="h-px bg-line" />

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-paper-2 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-ink" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-ink-faint mb-1 font-medium">Horaires</div>
                <div className="text-ink-mute text-sm">{CONTACT.openingHours}</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-ink px-7 py-4 rounded-full font-semibold transition-colors mt-2"
            >
              <WhatsAppIcon size={18} />
              Écrire sur WhatsApp
              <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
