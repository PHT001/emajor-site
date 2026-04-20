import type { LucideIcon } from "lucide-react";
import { Camera } from "lucide-react";

type Props = {
  icon?: LucideIcon;
  /** Tailwind aspect utility, e.g. "aspect-[16/9]" or "aspect-square". */
  aspect?: string;
  /** Tailwind rounded utility. */
  rounded?: string;
  className?: string;
  /** Hint text shown at the bottom. Hidden when set to false. */
  label?: string | false;
};

/**
 * Branded placeholder used while real photos are being collected.
 * Swap to <Image /> once assets are provided — keep the same container
 * shape so the layout doesn't shift.
 */
export default function PlaceholderImage({
  icon: Icon = Camera,
  aspect = "aspect-[16/10]",
  rounded = "rounded-xl",
  className = "",
  label = "Photo bientôt",
}: Props) {
  return (
    <div
      aria-hidden
      className={[
        "relative overflow-hidden",
        aspect,
        rounded,
        "bg-gradient-to-br from-brand/12 via-brand/6 to-brand/15",
        "border border-brand/10",
        className,
      ].join(" ")}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, var(--color-brand) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--color-brand) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <div className="w-11 h-11 rounded-full bg-white/80 border border-brand/15 flex items-center justify-center shadow-sm">
          <Icon size={18} className="text-brand" strokeWidth={2.2} />
        </div>
        {label !== false && (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-brand/70">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
