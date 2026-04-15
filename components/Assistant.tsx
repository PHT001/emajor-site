"use client";

import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type Answers = {
  metier?: "Électricité" | "Plomberie" | "CVC";
  service?: string;
  profil?: "Particulier" | "Professionnel";
  urgence?: "Urgent" | "Planifié";
};

const servicesByMetier: Record<NonNullable<Answers["metier"]>, string[]> = {
  Électricité: [
    "Panne générale",
    "Tableau électrique",
    "Prises & éclairage",
    "Mise aux normes",
    "Rénovation complète",
  ],
  Plomberie: [
    "Fuite d'eau",
    "Canalisation bouchée",
    "Chauffe-eau / ballon",
    "Salle de bain",
    "Robinetterie",
  ],
  CVC: [
    "Climatisation",
    "VMC / ventilation",
    "Traitement d'air",
    "Maintenance GTB",
  ],
};

function buildMessage(a: Answers) {
  const lines = [
    "Bonjour, je souhaite un devis.",
    "",
    `• Besoin : ${a.metier ?? "—"}`,
    `• Type : ${a.service ?? "—"}`,
    `• Profil : ${a.profil ?? "—"}`,
    `• Urgence : ${a.urgence ?? "—"}`,
  ];
  return encodeURIComponent(lines.join("\n"));
}

export default function Assistant() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>({});

  const goBack = () => setStep((s) => Math.max(0, s - 1));
  const next = () => setStep((s) => s + 1);

  const totalSteps = 4;
  const progress = Math.min(100, ((step + 1) / (totalSteps + 1)) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-ink-faint">
          <span>ÉTAPE {Math.min(step + 1, totalSteps + 1)} / {totalSteps + 1}</span>
          {step > 0 && step <= totalSteps && (
            <button
              onClick={goBack}
              className="inline-flex items-center gap-1 hover:text-ink transition-colors"
            >
              <ArrowLeft size={12} strokeWidth={2.5} />
              Retour
            </button>
          )}
        </div>
        <div className="h-1 rounded-full bg-line overflow-hidden">
          <div
            className="h-full bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="bg-paper-2 rounded-3xl p-8 sm:p-12 border border-line min-h-[420px] flex flex-col">
        {step === 0 && (
          <Question
            title="Quel est votre besoin ?"
            subtitle="On adapte tout de suite la suite selon votre métier."
          >
            {(["Électricité", "Plomberie", "CVC"] as const).map((opt) => (
              <Choice
                key={opt}
                label={opt}
                onClick={() => {
                  setA({ ...a, metier: opt });
                  next();
                }}
              />
            ))}
          </Question>
        )}

        {step === 1 && a.metier && (
          <Question
            title="Plus précisément ?"
            subtitle={`Vous avez sélectionné ${a.metier}.`}
          >
            {servicesByMetier[a.metier].map((s) => (
              <Choice
                key={s}
                label={s}
                onClick={() => {
                  setA({ ...a, service: s });
                  next();
                }}
              />
            ))}
          </Question>
        )}

        {step === 2 && (
          <Question
            title="Vous intervenez pour ?"
            subtitle="Particulier ou pour une entreprise."
          >
            {(["Particulier", "Professionnel"] as const).map((opt) => (
              <Choice
                key={opt}
                label={opt}
                onClick={() => {
                  setA({ ...a, profil: opt });
                  next();
                }}
              />
            ))}
          </Question>
        )}

        {step === 3 && (
          <Question
            title="C'est urgent ?"
            subtitle="On route votre demande en conséquence."
          >
            <Choice
              label="Urgent — j'ai besoin d'une intervention aujourd'hui"
              tone="urgent"
              onClick={() => {
                setA({ ...a, urgence: "Urgent" });
                next();
              }}
            />
            <Choice
              label="Planifié — je peux attendre quelques jours"
              onClick={() => {
                setA({ ...a, urgence: "Planifié" });
                next();
              }}
            />
          </Question>
        )}

        {step === 4 && (
          <div className="flex flex-col items-start gap-6 my-auto">
            <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center">
              <Check size={26} className="text-accent" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-ink text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-3">
                On a tout ce qu&apos;il faut.
              </h3>
              <p className="text-ink-mute text-base leading-relaxed max-w-md">
                Finalisez votre demande sur WhatsApp en un clic — on vous
                répond sous {a.urgence === "Urgent" ? "15 minutes" : "2 heures"}.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-line">
              <Recap label="Besoin" value={a.metier} />
              <Recap label="Type" value={a.service} />
              <Recap label="Profil" value={a.profil} />
              <Recap label="Urgence" value={a.urgence} />
            </dl>

            <a
              href={`${CONTACT.whatsappUrl}?text=${buildMessage(a)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-5 rounded-full transition-colors"
            >
              <WhatsAppIcon size={22} />
              Envoyer sur WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function Question({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-ink text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-3">
          {title}
        </h3>
        <p className="text-ink-mute text-base leading-relaxed">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function Choice({
  label,
  onClick,
  tone = "default",
}: {
  label: string;
  onClick: () => void;
  tone?: "default" | "urgent";
}) {
  const base =
    "group w-full text-left px-6 py-5 rounded-2xl border transition-all hover:-translate-y-0.5";
  const theme =
    tone === "urgent"
      ? "bg-paper border-accent/30 hover:border-accent hover:bg-accent-soft/40"
      : "bg-paper border-line hover:border-ink hover:bg-paper";

  return (
    <button onClick={onClick} className={`${base} ${theme}`}>
      <span className="flex items-center justify-between gap-4">
        <span className="text-ink font-medium">{label}</span>
        <span className="text-ink-faint group-hover:text-accent transition-colors">→</span>
      </span>
    </button>
  );
}

function Recap({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt className="text-xs text-ink-faint font-mono mb-1">{label}</dt>
      <dd className="text-ink font-semibold text-sm">{value ?? "—"}</dd>
    </div>
  );
}
