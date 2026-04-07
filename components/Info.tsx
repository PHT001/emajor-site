import { Leaf } from "lucide-react";

export default function Info() {
  return (
    <section className="py-16 bg-paper">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="bg-ink rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <Leaf size={26} className="text-accent" strokeWidth={2.2} />
          </div>
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
              Engagement environnemental
            </div>
            <p className="text-paper text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Chaque chantier est évalué selon son impact énergétique et écologique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
