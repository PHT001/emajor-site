"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageCircle, X, ArrowLeft, Phone, MessageSquare, ExternalLink } from "lucide-react";
import { FAQ, type FaqCategory, type FaqEntry } from "@/lib/faq";
import { CONTACT } from "@/lib/constants";

type View =
  | { type: "categories" }
  | { type: "questions"; category: FaqCategory }
  | { type: "answer"; category: FaqCategory; entry: FaqEntry };

export default function ChatbotFAQ() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>({ type: "categories" });

  // Reset to root each time we close
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setView({ type: "categories" }), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Lock body scroll on mobile fullscreen
  useEffect(() => {
    if (open && typeof document !== "undefined") {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [open]);

  const back = useCallback(() => {
    setView((v) => {
      if (v.type === "answer") return { type: "questions", category: v.category };
      if (v.type === "questions") return { type: "categories" };
      return v;
    });
  }, []);

  return (
    <>
      {/* Floating trigger */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir l'assistant E-Major"
          className="fixed bottom-6 right-6 z-50 bg-anthracite hover:bg-paris-gold text-paris-cream pl-5 pr-6 py-4 shadow-2xl border border-paris-gold/40 transition-colors group flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-paris-gold group-hover:bg-paris-cream transition-colors animate-pulse" />
          <MessageCircle size={20} />
          <span className="text-xs uppercase tracking-[0.2em] font-medium">
            Une question&nbsp;?
          </span>
        </button>
      )}

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-anthracite/50 backdrop-blur-sm"
        />
      )}

      {/* Panel */}
      {open && (
        <aside
          role="dialog"
          aria-label="Assistant E-Major"
          aria-modal="true"
          className="fixed z-50 bg-paris-cream border border-anthracite/10 shadow-2xl flex flex-col
            inset-0
            sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:max-h-[min(640px,calc(100vh-3rem))]"
        >
          {/* Header */}
          <header className="flex items-center justify-between px-6 py-5 border-b border-paris-stone bg-anthracite text-paris-cream shrink-0">
            <div className="flex items-center gap-3">
              {view.type !== "categories" && (
                <button
                  onClick={back}
                  aria-label="Retour"
                  className="hover:text-paris-gold transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
              )}
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.25em] text-paris-gold">
                  Assistant E-Major
                </div>
                <div className="font-[var(--font-heading)] text-lg leading-tight">
                  {view.type === "categories" && "Comment puis-je vous aider ?"}
                  {view.type === "questions" && view.category.label}
                  {view.type === "answer" && "Réponse"}
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="text-paris-cream hover:text-paris-gold transition-colors"
            >
              <X size={22} />
            </button>
          </header>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {view.type === "categories" && (
              <CategoriesView
                onPick={(cat) => setView({ type: "questions", category: cat })}
              />
            )}
            {view.type === "questions" && (
              <QuestionsView
                category={view.category}
                onPick={(entry) =>
                  setView({ type: "answer", category: view.category, entry })
                }
              />
            )}
            {view.type === "answer" && (
              <AnswerView entry={view.entry} />
            )}
          </div>

          {/* Footer — escape hatch always visible */}
          <footer className="border-t border-paris-stone bg-paris-ivory shrink-0 px-6 py-4">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-anthracite/50 mb-3">
              Pas de réponse satisfaisante&nbsp;?
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-paris-cream border border-anthracite/15 hover:border-paris-gold hover:text-paris-gold text-anthracite px-4 py-3 transition-colors text-xs uppercase tracking-[0.15em]"
              >
                <Phone size={14} />
                Appeler
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-anthracite hover:bg-paris-gold text-paris-cream px-4 py-3 transition-colors text-xs uppercase tracking-[0.15em]"
              >
                <MessageSquare size={14} />
                WhatsApp
              </a>
            </div>
          </footer>
        </aside>
      )}
    </>
  );
}

/* ─────────────────────────────  views  ───────────────────────────── */

function CategoriesView({ onPick }: { onPick: (cat: FaqCategory) => void }) {
  return (
    <div>
      <p className="text-anthracite/70 text-sm leading-relaxed mb-6">
        Quelques questions préparées pour vous éviter d&apos;attendre.
        Choisissez un sujet ci-dessous.
      </p>
      <ul className="space-y-2">
        {FAQ.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onPick(cat)}
              className="w-full text-left bg-paris-cream hover:bg-paris-ivory border border-paris-stone hover:border-paris-gold/50 px-5 py-4 transition-colors group"
            >
              <div className="font-[var(--font-heading)] text-anthracite text-base group-hover:text-paris-gold transition-colors">
                {cat.label}
              </div>
              <div className="text-xs text-anthracite/50 mt-0.5">
                {cat.description}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuestionsView({
  category,
  onPick,
}: {
  category: FaqCategory;
  onPick: (entry: FaqEntry) => void;
}) {
  return (
    <div>
      <div className="paris-label mb-5 text-paris-gold">
        <span>{category.label}</span>
      </div>
      <ul className="space-y-2">
        {category.entries.map((e) => (
          <li key={e.id}>
            <button
              onClick={() => onPick(e)}
              className="w-full text-left bg-paris-cream hover:bg-paris-ivory border border-paris-stone hover:border-paris-gold/50 px-5 py-4 transition-colors group"
            >
              <div className="text-anthracite text-sm leading-snug group-hover:text-paris-gold transition-colors">
                {e.question}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AnswerView({ entry }: { entry: FaqEntry }) {
  return (
    <div>
      <div className="paris-label mb-4 text-paris-gold">
        <span>Question</span>
      </div>
      <h3 className="font-[var(--font-heading)] text-anthracite text-xl leading-snug mb-6">
        {entry.question}
      </h3>
      <div className="h-px w-12 bg-paris-gold mb-6" />
      <p className="text-anthracite/80 text-sm leading-relaxed whitespace-pre-line">
        {entry.answer}
      </p>
      {entry.cta && (
        <a
          href={entry.cta.href}
          target={entry.cta.external ? "_blank" : undefined}
          rel={entry.cta.external ? "noopener noreferrer" : undefined}
          className="mt-6 inline-flex items-center gap-2 bg-anthracite hover:bg-paris-gold text-paris-cream px-5 py-3 transition-colors text-xs uppercase tracking-[0.15em]"
        >
          {entry.cta.label}
          <ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}
