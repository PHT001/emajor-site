"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageCircle, X, ArrowLeft, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { FAQ, type FaqCategory, type FaqEntry } from "@/lib/faq";
import { CONTACT } from "@/lib/constants";

type View =
  | { type: "categories" }
  | { type: "questions"; category: FaqCategory }
  | { type: "answer"; category: FaqCategory; entry: FaqEntry };

export default function ChatbotFAQ() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>({ type: "categories" });

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setView({ type: "categories" }), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

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
          className="fixed bottom-6 right-6 z-50 group bg-ink hover:bg-accent text-paper hover:text-ink pl-5 pr-6 py-4 rounded-full shadow-2xl transition-all hover:scale-[1.03] flex items-center gap-3 border border-paper/10"
        >
          <span className="relative flex">
            <span className="absolute inline-flex h-2 w-2 rounded-full bg-accent group-hover:bg-ink opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent group-hover:bg-ink" />
          </span>
          <MessageCircle size={20} strokeWidth={2.5} />
          <span className="text-sm font-semibold">
            Une question&nbsp;?
          </span>
        </button>
      )}

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-md"
        />
      )}

      {/* Panel */}
      {open && (
        <aside
          role="dialog"
          aria-label="Assistant E-Major"
          aria-modal="true"
          className="fixed z-50 bg-paper shadow-2xl flex flex-col
            inset-0 sm:inset-auto sm:rounded-3xl sm:overflow-hidden
            sm:bottom-6 sm:right-6 sm:w-[440px] sm:max-h-[min(680px,calc(100vh-3rem))]"
        >
          {/* Header */}
          <header className="relative bg-ink text-paper px-6 py-6 shrink-0">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                {view.type !== "categories" && (
                  <button
                    onClick={back}
                    aria-label="Retour"
                    className="w-9 h-9 rounded-full bg-paper/10 hover:bg-paper/20 flex items-center justify-center shrink-0 transition-colors"
                  >
                    <ArrowLeft size={16} strokeWidth={2.5} />
                  </button>
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs font-medium text-accent">
                    <Sparkles size={12} strokeWidth={2.5} />
                    <span>Assistant E-Major</span>
                  </div>
                  <div className="text-xl font-semibold tracking-tight mt-1 truncate">
                    {view.type === "categories" && "Comment puis-je vous aider ?"}
                    {view.type === "questions" && view.category.label}
                    {view.type === "answer" && "Réponse"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="w-9 h-9 rounded-full bg-paper/10 hover:bg-paper/20 flex items-center justify-center shrink-0 transition-colors"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            </div>
          </header>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-5 py-6 bg-paper">
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
            {view.type === "answer" && <AnswerView entry={view.entry} />}
          </div>

          {/* Footer escape hatch */}
          <footer className="border-t border-line bg-paper-2 shrink-0 px-5 py-4">
            <div className="text-[0.65rem] uppercase tracking-wider text-ink-faint mb-3 font-medium">
              Pas de réponse satisfaisante&nbsp;?
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-paper border border-line hover:border-ink text-ink px-4 py-3 rounded-full transition-colors text-xs font-semibold"
              >
                <Phone size={14} strokeWidth={2.5} />
                Appeler
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-ink px-4 py-3 rounded-full transition-colors text-xs font-semibold"
              >
                WhatsApp
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </footer>
        </aside>
      )}
    </>
  );
}

/* ─────────────────────────  views  ───────────────────────── */

function CategoriesView({ onPick }: { onPick: (cat: FaqCategory) => void }) {
  return (
    <div>
      <p className="text-ink-mute text-sm leading-relaxed mb-5 px-1">
        Choisissez un sujet — réponse instantanée, sans attendre au téléphone.
      </p>
      <ul className="space-y-2">
        {FAQ.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onPick(cat)}
              className="w-full text-left bg-paper-2 hover:bg-ink hover:text-paper rounded-2xl px-5 py-4 transition-all group flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <div className="text-ink group-hover:text-paper text-sm font-semibold transition-colors">
                  {cat.label}
                </div>
                <div className="text-xs text-ink-faint group-hover:text-paper/60 mt-0.5 transition-colors">
                  {cat.description}
                </div>
              </div>
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="text-ink-faint group-hover:text-accent shrink-0 transition-colors"
              />
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
      <div className="text-xs font-medium text-accent mb-4 px-1">
        {category.label}
      </div>
      <ul className="space-y-2">
        {category.entries.map((e) => (
          <li key={e.id}>
            <button
              onClick={() => onPick(e)}
              className="w-full text-left bg-paper-2 hover:bg-ink hover:text-paper rounded-2xl px-5 py-4 transition-all group flex items-start justify-between gap-3"
            >
              <span className="text-ink group-hover:text-paper text-sm leading-snug font-medium transition-colors">
                {e.question}
              </span>
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="text-ink-faint group-hover:text-accent shrink-0 mt-0.5 transition-colors"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AnswerView({ entry }: { entry: FaqEntry }) {
  return (
    <div className="px-1">
      <div className="text-xs font-medium text-accent mb-3">Question</div>
      <h3 className="text-ink text-xl font-semibold tracking-tight leading-snug mb-5">
        {entry.question}
      </h3>
      <div className="bg-paper-2 rounded-2xl p-5">
        <p className="text-ink-mute text-sm leading-relaxed whitespace-pre-line">
          {entry.answer}
        </p>
      </div>
      {entry.cta && (
        <a
          href={entry.cta.href}
          target={entry.cta.external ? "_blank" : undefined}
          rel={entry.cta.external ? "noopener noreferrer" : undefined}
          className="mt-5 group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-ink px-5 py-3 rounded-full transition-colors text-sm font-semibold"
        >
          {entry.cta.label}
          <ArrowUpRight
            size={14}
            strokeWidth={2.5}
            className="group-hover:rotate-45 transition-transform"
          />
        </a>
      )}
    </div>
  );
}
