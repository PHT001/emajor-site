"use client";

import { useState } from "react";
import { X, MessageSquare } from "lucide-react";
import Assistant from "@/components/Assistant";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Popover */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[999] w-[calc(100%-2rem)] sm:w-[380px] max-h-[600px] animate-chat-open">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden flex flex-col max-h-[600px]">
            <div className="flex items-center justify-between px-4 py-3 bg-brand text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-brand font-bold text-[13px]">E</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-[14px] leading-tight">
                    Assistant E-Major
                  </div>
                  <div className="text-[11px] text-white/70">
                    Réponse en moins de 2h
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="overflow-y-auto">
              <Assistant compact />
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir l'assistant"
          className="fixed bottom-6 right-6 z-[1000] w-14 h-14 rounded-full bg-brand hover:bg-brand-dark text-white shadow-xl flex items-center justify-center transition-colors"
        >
          <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-30" />
          <MessageSquare size={24} strokeWidth={2.2} className="relative z-10" />
        </button>
      )}
    </>
  );
}
