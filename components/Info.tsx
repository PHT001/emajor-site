import { Leaf } from "lucide-react";

export default function Info() {
  return (
    <section className="py-6">
      <div className="bg-gradient-to-r from-green-dark via-green-accent to-green-dark py-5 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 text-white text-sm sm:text-base font-medium text-center">
          <Leaf size={18} className="shrink-0" />
          <span>Engagés pour l&apos;environnement — chaque chantier est évalué selon son impact énergétique et écologique.</span>
        </div>
      </div>
    </section>
  );
}
