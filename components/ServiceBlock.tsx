import type { LucideIcon } from "lucide-react";

type Props = {
  idx: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  image: string;
  reverse?: boolean;
};

export default function ServiceBlock({
  idx,
  icon: Icon,
  title,
  description,
  items,
  image,
  reverse = false,
}: Props) {
  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center ${
        reverse ? "lg:[&>:first-child]:col-start-7" : ""
      }`}
    >
      <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[5/4]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
            filter: "grayscale(0.1) contrast(1.05)",
          }}
        />
      </div>
      <div className={`lg:col-span-6 ${reverse ? "lg:row-start-1 lg:col-start-1" : ""}`}>
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center">
            <Icon size={26} className="text-accent" strokeWidth={2.2} />
          </div>
          <span className="idx-tag">{idx}</span>
        </div>
        <h3 className="text-ink text-4xl sm:text-5xl font-semibold tracking-[-0.03em] mb-5">
          {title}
        </h3>
        <p className="text-ink-mute text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
          {description}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-ink-mute"
            >
              <span className="text-accent mt-1.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
