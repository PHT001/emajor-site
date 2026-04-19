"use client";

import { useEffect, useState } from "react";
import { X, MessageSquare } from "lucide-react";
import Assistant from "@/components/Assistant";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when the sheet is open on mobile
  useEffect(() => {
    if (!open) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 639px)").matches) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Backdrop — mobile only, dismisses on tap */}
      {open && (
        <button
          type="button"
          aria-label="Fermer l'assistant"
          onClick={() => setOpen(false)}
          className="sm:hidden fixed inset-0 z-[998] bg-black/40 backdrop-blur-[2px] animate-fade-in-up"
        />
      )}

      {/* Popover / bottom-sheet */}
      {open && (
        <div
          className={[
            "fixed z-[999] flex flex-col animate-chat-open",
            // Mobile: bottom-sheet full width, uses dynamic viewport (dvh)
            // so iOS Safari toolbar doesn't clip the action buttons.
            "inset-x-0 bottom-0 h-[85dvh] max-h-[85dvh]",
            // Desktop: floating card bottom-right
            "sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-auto sm:max-h-[600px]",
          ].join(" ")}
        >
          <div
            className={[
              "bg-white shadow-2xl border border-gray-200/60 overflow-hidden flex flex-col h-full",
              // Mobile: round only the top
              "rounded-t-2xl sm:rounded-2xl",
              "sm:max-h-[600px]",
            ].join(" ")}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-brand text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-brand font-bold text-[13px]">E</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-[14px] leading-tight">
                    Assistant E-Major
                  </div>
                  <div className="text-[11px] text-white/75">
                    Réponse en moins de 2h
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="w-9 h-9 rounded-full hover:bg-white/20 active:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scroll area inside Assistant handles its own overflow.
                Wrap in flex-1 + min-h-0 so it shrinks properly inside the sheet. */}
            <div className="flex-1 min-h-0 overflow-hidden">
              <Assistant compact />
            </div>
          </div>
        </div>
      )}

      {/* Floating button — hidden when open */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir l'assistant"
          className="fixed bottom-6 right-6 z-[1000] w-14 h-14 rounded-full bg-brand hover:bg-brand-dark text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-30" />
          <MessageSquare
            size={24}
            strokeWidth={2.2}
            className="relative z-10"
          />
        </button>
      )}
    </>
  );
}
