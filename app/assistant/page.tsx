import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";

export const metadata = {
  title: "Assistant — E-Major | Qualifier votre demande en 30s",
  description:
    "Répondez à 4 questions et recevez une réponse sur WhatsApp. Devis gratuit, intervention sous 2h à Paris.",
};

export default function AssistantPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-24 sm:pt-48 sm:pb-32 bg-paper">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <div className="eyebrow mb-6 justify-center">
                <span>Assistant</span>
              </div>
              <h1 className="text-ink text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
                Qualifions votre demande.
              </h1>
              <p className="text-ink-mute text-lg mt-6 leading-relaxed">
                4 questions rapides, puis on finalise sur WhatsApp — devis
                gratuit sous 2h.
              </p>
            </div>

            <Assistant />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
