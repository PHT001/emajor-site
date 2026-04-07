import { Clock, Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { CONTACT, COMPANY, MAPS } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-paris-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial header */}
        <div className="max-w-2xl mb-20">
          <div className="paris-label mb-6">
            <span>Contact</span>
          </div>
          <h2 className="font-[var(--font-heading)] text-anthracite text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Au cœur du
            <br />
            <span className="italic font-light">14ᵉ arrondissement</span>
            <span className="text-paris-gold">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Map */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-paris-stone min-h-[400px]">
              <iframe
                src={MAPS.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400, filter: "grayscale(0.5) contrast(0.95)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${COMPANY.name} - ${COMPANY.address}`}
              />
            </div>
          </div>

          {/* Editorial info column */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="paris-label mb-3 text-paris-gold">
                <span>Adresse</span>
              </div>
              <a
                href={MAPS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <p className="font-[var(--font-heading)] text-anthracite text-xl sm:text-2xl leading-snug group-hover:text-paris-gold transition-colors">
                  149, avenue du Maine
                  <br />
                  75014 Paris
                </p>
                <span className="inline-flex items-center gap-2 mt-2 text-xs uppercase tracking-[0.15em] text-anthracite/60 group-hover:text-paris-gold transition-colors">
                  <MapPin size={12} />
                  Itinéraire
                </span>
              </a>
            </div>

            <div className="h-px bg-paris-stone" />

            <div>
              <div className="paris-label mb-3 text-paris-gold">
                <span>Téléphone</span>
              </div>
              <a
                href={CONTACT.phoneHref}
                className="font-[var(--font-heading)] text-anthracite text-xl sm:text-2xl hover:text-paris-gold transition-colors inline-flex items-center gap-3"
              >
                <Phone size={18} />
                {CONTACT.phoneDisplay}
              </a>
            </div>

            <div className="h-px bg-paris-stone" />

            <div>
              <div className="paris-label mb-3 text-paris-gold">
                <span>Email</span>
              </div>
              <a
                href={CONTACT.emailHref}
                className="font-[var(--font-heading)] text-anthracite text-xl sm:text-2xl hover:text-paris-gold transition-colors inline-flex items-center gap-3"
              >
                <Mail size={18} />
                {CONTACT.email}
              </a>
            </div>

            <div className="h-px bg-paris-stone" />

            <div>
              <div className="paris-label mb-3 text-paris-gold">
                <span>Horaires</span>
              </div>
              <p className="font-[var(--font-body)] text-anthracite/80 inline-flex items-center gap-3">
                <Clock size={16} />
                {CONTACT.openingHours}
              </p>
            </div>

            {/* CTA */}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-anthracite text-paris-cream px-10 py-4 hover:bg-paris-gold transition-colors text-sm uppercase tracking-[0.2em] font-medium w-full"
            >
              <MessageCircle size={16} />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
