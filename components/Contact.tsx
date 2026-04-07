import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT, COMPANY, MAPS } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-green-accent" />
            <span className="text-sm font-semibold text-green-accent uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dark">
            Nous trouver
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto bg-gray-200">
            <iframe
              src={MAPS.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${COMPANY.name} - ${COMPANY.address}`}
            />
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            {/* Téléphone */}
            <a
              href={CONTACT.phoneHref}
              className="block bg-gray-light rounded-2xl p-6 hover:bg-green-light transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-light group-hover:bg-white flex items-center justify-center shrink-0 transition-colors">
                  <Phone size={24} className="text-green-accent" />
                </div>
                <div>
                  <h4 className="font-[var(--font-heading)] text-lg font-bold text-dark mb-1">
                    Téléphone
                  </h4>
                  <p className="text-gray-text group-hover:text-green-dark transition-colors">
                    {CONTACT.phoneDisplay}
                  </p>
                </div>
              </div>
            </a>

            {/* Horaires */}
            <div className="bg-gray-light rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-green-accent" />
                </div>
                <div>
                  <h4 className="font-[var(--font-heading)] text-lg font-bold text-dark mb-1">
                    Horaires d&apos;ouverture
                  </h4>
                  <p className="text-gray-text">{CONTACT.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <a
              href={CONTACT.emailHref}
              className="block bg-gray-light rounded-2xl p-6 hover:bg-green-light transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-light group-hover:bg-white flex items-center justify-center shrink-0 transition-colors">
                  <Mail size={24} className="text-green-accent" />
                </div>
                <div>
                  <h4 className="font-[var(--font-heading)] text-lg font-bold text-dark mb-1">
                    Email
                  </h4>
                  <p className="text-gray-text group-hover:text-green-dark transition-colors">
                    {CONTACT.email}
                  </p>
                </div>
              </div>
            </a>

            {/* CTA button */}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-accent text-white font-semibold px-6 py-4 rounded-xl hover:bg-green-dark transition-colors"
            >
              <MessageCircle size={18} />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
