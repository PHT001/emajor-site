import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center px-6">
          <div className="font-heading text-[120px] sm:text-[180px] font-bold text-brand/15 leading-none select-none">
            404
          </div>
          <h1 className="font-heading text-dark text-[28px] sm:text-[36px] font-bold -mt-8 mb-4">
            Page introuvable
          </h1>
          <p className="text-gray-text text-[16px] max-w-md mx-auto leading-relaxed mb-8">
            Cette page n&apos;existe pas ou a été déplacée. Retournez à
            l&apos;accueil pour trouver ce que vous cherchez.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-[30px] text-[15px] transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
