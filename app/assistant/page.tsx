import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";

export const metadata = {
  title: "Assistant — E-Major | Décrivez votre besoin en 30s",
  description:
    "Répondez en cliquant sur les boutons, zéro saisie. Marc vous recontacte avec un devis sous 24h.",
};

export default function AssistantPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-16 sm:py-20 bg-gray-bg">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-2 rounded-full text-[13px] font-semibold mb-6">
                Assistant E-Major
              </span>
              <h1 className="font-heading text-dark text-[36px] sm:text-[48px] font-bold tracking-[-0.02em] leading-[1.05] mb-4">
                Décrivez votre besoin
              </h1>
              <p className="text-gray-text text-[16px] max-w-xl mx-auto leading-relaxed">
                Répondez aux questions en cliquant sur les boutons. Zéro saisie
                nécessaire !
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
