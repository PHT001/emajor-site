import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter E-Major sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-anthracite hover:bg-paris-gold text-paris-cream p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-paris-gold/30"
    >
      <MessageCircle size={28} />
    </a>
  );
}
