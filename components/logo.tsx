import { site } from "@/content/site";

/** The FitForm mark: an "F" built from bars that lean forward, like good form in motion. */
export function LogoMark({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const stem = tone === "dark" ? "#ffffff" : "var(--ink)";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <path d="M6 37 L13.5 37 L22 3 L14.5 3 Z" fill={stem} />
      <path d="M16.2 3 L38 3 L36.2 10.2 L14.4 10.2 Z" fill="var(--primary)" />
      <path d="M12.8 16.6 L31 16.6 L29.2 23.8 L11 23.8 Z" fill="var(--primary)" />
    </svg>
  );
}

export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" tone={tone} />
      <span className={`text-[1.3rem] leading-none tracking-[-0.03em] ${tone === "dark" ? "text-on-ink" : "text-ink"}`}>
        <span className="font-bold">{site.shortName}</span>
        <span className="font-medium"> Fitness</span>
      </span>
    </span>
  );
}
