import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter E-Major sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1EBE57] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
    >
      <MessageCircle size={28} />
    </a>
  );
}
