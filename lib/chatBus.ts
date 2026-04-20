export type AssistantIntent = "intervention" | "devis" | "admin";

export const CHAT_OPEN_EVENT = "emajor:open-assistant";

export type ChatOpenDetail = { intent?: AssistantIntent };

export function openAssistant(intent?: AssistantIntent) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<ChatOpenDetail>(CHAT_OPEN_EVENT, {
      detail: { intent },
    }),
  );
}
