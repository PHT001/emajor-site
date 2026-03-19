import { Clock, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/33XXXXXXXXX";
const ADDRESS = "149 Av. du Maine, 75014 Paris, France";
const MAPS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1!2d2.3257!3d48.8357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671a7c81a146d%3A0x7e2e2f1b6e1f1b1b!2s149%20Av.%20du%20Maine%2C%2075014%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr`;

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
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="E-Major - 149 Av. du Maine, 75014 Paris"
            />
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            {/* Horaires */}
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-green-accent" />
                </div>
                <div>
                  <h4 className="font-[var(--font-heading)] text-lg font-bold text-dark mb-1">
                    Horaires d&apos;ouverture
                  </h4>
                  <p className="text-gray-text">Lun – Ven : 7h30 – 12h30 / 13h30 – 17h30</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-green-accent" />
                </div>
                <div>
                  <h4 className="font-[var(--font-heading)] text-lg font-bold text-dark mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:contact@emajor.fr"
                    className="text-gray-text hover:text-green-accent transition-colors"
                  >
                    contact@emajor.fr
                  </a>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-accent text-white font-semibold px-6 py-4 rounded-xl hover:bg-green-dark transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
