"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { CONTACT } from "@/lib/constants";

type StateKey =
  | "start"
  | "elec_service"
  | "elec_building"
  | "elec_urgency"
  | "elec_urgent_contact"
  | "plomb_service"
  | "plomb_specifics"
  | "plomb_urgency"
  | "plomb_urgent_contact"
  | "processing"
  | "done";

type Option = {
  label: string;
  emoji?: string;
  next: StateKey;
  highlight?: boolean;
};

type Step = {
  botMessage: string;
  options: Option[];
};

const STATES: Record<Exclude<StateKey, "processing" | "done" | "elec_urgent_contact" | "plomb_urgent_contact">, Step> = {
  start: {
    botMessage:
      "Bonjour ! Je suis l'assistant E-Major. De quoi avez-vous besoin ?",
    options: [
      { emoji: "⚡", label: "Électricité", next: "elec_service" },
      { emoji: "🔧", label: "Plomberie", next: "plomb_service" },
    ],
  },
  elec_service: {
    botMessage: "Quel type d'intervention électrique ?",
    options: [
      { label: "Courant Fort", next: "elec_building" },
      { label: "Courant Faible", next: "elec_building" },
      { label: "Dépannage", next: "elec_building" },
    ],
  },
  elec_building: {
    botMessage: "Quel type de bâtiment ?",
    options: [
      { label: "Appartement", next: "elec_urgency" },
      { label: "Maison", next: "elec_urgency" },
      { label: "Local professionnel", next: "elec_urgency" },
    ],
  },
  elec_urgency: {
    botMessage: "C'est pour quand ?",
    options: [
      { label: "Planifié", next: "processing" },
      { label: "Urgent", next: "elec_urgent_contact", highlight: true },
    ],
  },
  plomb_service: {
    botMessage: "Quel type d'intervention plomberie ?",
    options: [
      {
        label: "Chauffe-eau / Ballon",
        next: "plomb_specifics",
        highlight: true,
      },
      { label: "Sanitaire", next: "plomb_specifics" },
      { label: "Robinetterie", next: "plomb_specifics" },
      { label: "Dépannage", next: "plomb_specifics" },
    ],
  },
  plomb_specifics: {
    botMessage: "Pouvez-vous préciser ?",
    options: [
      { label: "Pose", next: "plomb_urgency" },
      { label: "Changement", next: "plomb_urgency" },
      { label: "Réparation", next: "plomb_urgency" },
    ],
  },
  plomb_urgency: {
    botMessage: "C'est pour quand ?",
    options: [
      { label: "Planifié", next: "processing" },
      { label: "Urgent", next: "plomb_urgent_contact", highlight: true },
    ],
  },
};

type Message =
  | { role: "bot"; text: string }
  | { role: "user"; text: string };

const URGENT_MESSAGE =
  "Pour une intervention urgente, contactez-nous directement. Marc vous répondra au plus vite.";

const PROCESSING_STEPS = [
  "Analyse de votre demande...",
  "Vérification des disponibilités...",
  "Préparation du devis...",
  "Envoi des documents...",
  "Demande confirmée !",
];

export default function Assistant({ compact = false }: { compact?: boolean }) {
  const [started, setStarted] = useState(false);
  const [state, setState] = useState<StateKey>("start");
  const [messages, setMessages] = useState<Message[]>([]);
  const [history, setHistory] = useState<StateKey[]>([]);
  const [processingStep, setProcessingStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, state, processingStep]);

  useEffect(() => {
    if (state !== "processing") return;
    setProcessingStep(0);
    const iv = setInterval(() => {
      setProcessingStep((p) => {
        if (p >= PROCESSING_STEPS.length - 1) {
          clearInterval(iv);
          setTimeout(() => setState("done"), 900);
          return p;
        }
        return p + 1;
      });
    }, 900);
    return () => clearInterval(iv);
  }, [state]);

  function start() {
    setStarted(true);
    setMessages([{ role: "bot", text: STATES.start.botMessage }]);
    setState("start");
  }

  function pick(opt: Option) {
    const label = opt.emoji ? `${opt.emoji} ${opt.label}` : opt.label;
    setMessages((m) => [...m, { role: "user", text: label }]);
    setHistory((h) => [...h, state]);

    if (opt.next === "elec_urgent_contact" || opt.next === "plomb_urgent_contact") {
      setTimeout(() => {
        setMessages((m) => [...m, { role: "bot", text: URGENT_MESSAGE }]);
        setState(opt.next);
      }, 400);
      return;
    }
    if (opt.next === "processing") {
      setState("processing");
      return;
    }
    const nextStep = STATES[opt.next as keyof typeof STATES];
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: nextStep.botMessage }]);
      setState(opt.next);
    }, 400);
  }

  function goBack() {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setMessages((m) => m.slice(0, -2)); // remove last bot + last user
    setState(prev);
  }

  function reset() {
    setMessages([{ role: "bot", text: STATES.start.botMessage }]);
    setHistory([]);
    setState("start");
  }

  const currentStep =
    state !== "processing" &&
    state !== "done" &&
    state !== "elec_urgent_contact" &&
    state !== "plomb_urgent_contact"
      ? STATES[state as keyof typeof STATES]
      : null;

  const isUrgentContact =
    state === "elec_urgent_contact" || state === "plomb_urgent_contact";
  const isDone = state === "done";
  const height = compact ? "h-[380px]" : "h-[500px]";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
      {/* Chat area */}
      <div
        ref={scrollRef}
        className={`${height} overflow-y-auto p-5 sm:p-6 space-y-4 bg-gradient-to-b from-white to-gray-bg`}
      >
        {!started ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-5">
            <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center">
              <span className="font-heading font-bold text-brand text-[24px]">
                E
              </span>
            </div>
            <div className="max-w-sm">
              <h3 className="font-heading text-dark text-[20px] font-semibold mb-2">
                Assistant E-Major
              </h3>
              <p className="text-gray-text text-[14px] leading-relaxed">
                Je vous pose quelques questions et je transmets votre demande à
                Marc. Aucune saisie de clavier nécessaire.
              </p>
            </div>
            <button
              onClick={start}
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-[30px] text-[14px] transition-colors"
            >
              Démarrer
            </button>
          </div>
        ) : (
          <>
            {messages.map((m, i) => (
              <MessageBubble key={i} message={m} />
            ))}

            {state === "processing" && <ProcessingBubble step={processingStep} />}

            {isDone && <DoneBubble />}
          </>
        )}
      </div>

      {/* Options bar */}
      {started && currentStep && (
        <div className="border-t border-gray-200/60 p-4 bg-gray-bg/50">
          {history.length > 0 && (
            <button
              onClick={goBack}
              className="inline-flex items-center gap-1 text-gray-mid hover:text-brand text-[12px] font-medium mb-3 transition-colors"
            >
              <ArrowLeft size={12} strokeWidth={2.5} />
              Retour
            </button>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentStep.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => pick(opt)}
                className={`text-left px-4 py-3 rounded-xl border transition-all hover:-translate-y-0.5 ${
                  opt.highlight
                    ? "bg-brand-pale border-brand/30 text-brand hover:bg-brand-light hover:border-brand"
                    : "bg-brand-pale border-gray-200/60 text-dark hover:border-brand hover:bg-brand-light"
                }`}
              >
                <span className="text-[14px] font-semibold">
                  {opt.emoji && <span className="text-lg mr-2">{opt.emoji}</span>}
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Done footer */}
      {isDone && (
        <div className="border-t border-gray-200/60 p-4 bg-gray-bg/50 flex flex-col sm:flex-row gap-2">
          <a
            href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(
              "Bonjour Marc, je vous contacte via l'assistant E-Major.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-white font-semibold px-5 py-3 rounded-xl text-[14px] transition-colors"
            style={{ backgroundColor: "#25D366" }}
          >
            Contact direct
          </a>
          <button
            onClick={reset}
            className="flex-1 inline-flex items-center justify-center bg-white border border-gray-200 hover:border-brand text-dark font-semibold px-5 py-3 rounded-xl text-[14px] transition-colors"
          >
            Nouvelle demande
          </button>
        </div>
      )}

      {/* Urgent contact footer */}
      {isUrgentContact && (
        <div className="border-t border-gray-200/60 p-4 bg-gray-bg/50 flex flex-col sm:flex-row gap-2">
          <a
            href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(
              "Bonjour Marc, je vous contacte via l'assistant E-Major pour une urgence.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-white font-semibold px-5 py-3 rounded-xl text-[14px] transition-colors"
            style={{ backgroundColor: "#25D366" }}
          >
            WhatsApp — {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.phoneHref}
            className="flex-1 inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-dark font-semibold px-5 py-3 rounded-xl text-[14px] transition-colors"
          >
            Appeler
          </a>
        </div>
      )}
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end animate-fade-in-up">
        <div className="bg-brand text-white rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%] text-[14px]">
          {message.text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2.5 animate-fade-in-up">
      <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shrink-0">
        <span className="text-white font-bold text-[13px]">E</span>
      </div>
      <div className="bg-brand-pale text-dark rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%] text-[14px] leading-relaxed">
        {message.text}
      </div>
    </div>
  );
}

function ProcessingBubble({ step }: { step: number }) {
  return (
    <div className="flex items-start gap-2.5 animate-fade-in-up">
      <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shrink-0">
        <span className="text-white font-bold text-[13px]">E</span>
      </div>
      <div className="bg-brand-pale rounded-2xl rounded-bl-sm px-5 py-4 max-w-[85%] min-w-[240px]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 border-2 border-brand/30 border-t-brand rounded-full animate-spin-slow" />
          <span className="text-dark text-[13px] font-semibold">
            Traitement en cours...
          </span>
        </div>
        <ul className="space-y-1.5">
          {PROCESSING_STEPS.map((label, i) => {
            const done = i < step;
            const active = i === step;
            return (
              <li
                key={label}
                className={`flex items-center gap-2 text-[12px] transition-opacity ${
                  i <= step ? "opacity-100" : "opacity-40"
                }`}
              >
                {done ? (
                  <Check size={12} className="text-brand" strokeWidth={3} />
                ) : active ? (
                  <span className="inline-flex gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-brand animate-typing-dot" />
                    <span className="w-1 h-1 rounded-full bg-brand animate-typing-dot-delay-1" />
                    <span className="w-1 h-1 rounded-full bg-brand animate-typing-dot-delay-2" />
                  </span>
                ) : (
                  <span className="w-3 h-3" />
                )}
                <span
                  className={done || active ? "text-gray-text" : "text-gray-mid"}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function DoneBubble() {
  return (
    <div className="flex items-start gap-2.5 animate-fade-in-up">
      <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shrink-0">
        <span className="text-white font-bold text-[13px]">E</span>
      </div>
      <div className="bg-brand-pale rounded-2xl rounded-bl-sm px-5 py-4 max-w-[90%]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center">
            <Check size={14} className="text-white" strokeWidth={3} />
          </div>
          <h4 className="font-heading text-dark text-[15px] font-bold">
            Demande confirmée
          </h4>
        </div>
        <p className="text-gray-text text-[13px] leading-relaxed mb-2">
          Votre demande a été transmise. Vous pouvez également envoyer des
          photos pour compléter votre dossier.
        </p>
        <p className="text-gray-mid text-[12px] leading-relaxed">
          Vous recevrez une confirmation avec le devis, le RIB et l&apos;attestation
          d&apos;assurance.
        </p>
      </div>
    </div>
  );
}
