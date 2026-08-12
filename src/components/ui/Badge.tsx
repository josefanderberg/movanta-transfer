import { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "yellow" | "planned";
}) {
  const toneClasses = {
    neutral:
      "border-white/10 bg-white/[0.03] text-text-secondary",
    yellow: "border-yellow/30 bg-yellow/10 text-yellow",
    planned: "border-white/15 bg-white/[0.04] text-metal",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
