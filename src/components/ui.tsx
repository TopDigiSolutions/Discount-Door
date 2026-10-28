import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { ArrowIcon, PhoneIcon, StarIcon } from "./Icons";
import { business } from "@/data/business";

export function Stars({
  rating = 5,
  className,
  starClass = "h-3.5 w-3.5",
}: {
  rating?: number;
  className?: string;
  starClass?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-hiviz-400", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < rating} className={starClass} />
      ))}
    </span>
  );
}

export function HazardStrip({ className }: { className?: string }) {
  return <div aria-hidden className={cn("hazard h-2 w-full opacity-90", className)} />;
}

export function SectionHead({
  index,
  kicker,
  title,
  lead,
  tone = "light",
  align = "left",
  className,
}: {
  index?: string;
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div
        data-reveal
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {index && (
          <span
            className={cn(
              "tag border px-2 py-1",
              dark
                ? "border-white/15 bg-white/5 text-hiviz-400"
                : "border-ink-900/15 bg-white text-signal-600",
            )}
          >
            {index}
          </span>
        )}
        <span
          className={cn(
            "tag",
            dark ? "text-steel-300" : "text-steel-600",
          )}
        >
          {kicker}
        </span>
        <span
          aria-hidden
          className={cn("h-px w-10 sm:w-16", dark ? "bg-white/20" : "bg-ink-900/20")}
        />
      </div>
      <h2
        data-reveal
        style={{ ["--reveal-delay" as string]: "80ms" }}
        className={cn(
          "display max-w-3xl text-[clamp(2.1rem,5.4vw,4rem)]",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          data-reveal
          style={{ ["--reveal-delay" as string]: "160ms" }}
          className={cn(
            "max-w-2xl text-[1.05rem] leading-relaxed sm:text-lg",
            dark ? "text-steel-300" : "text-steel-600",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

export function CallButton({
  className,
  label = `Call ${business.phoneDisplay}`,
  variant = "solid",
  showIcon = true,
}: {
  className?: string;
  label?: string;
  variant?: "solid" | "outline" | "dark";
  showIcon?: boolean;
}) {
  return (
    <a
      href={business.phoneHref}
      className={cn(
        "sheen-host group relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5",
        variant === "solid" &&
          "bg-signal-500 text-white shadow-[0_10px_30px_-12px_rgba(255,90,31,0.85)] hover:bg-signal-600 hover:shadow-[0_16px_36px_-12px_rgba(255,90,31,0.9)]",
        variant === "outline" &&
          "border border-ink-900/25 text-ink-900 hover:border-signal-500 hover:text-signal-600",
        variant === "dark" &&
          "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-hiviz-400 hover:bg-hiviz-400 hover:text-ink-900",
        className,
      )}
    >
      <span
        aria-hidden
        className="sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 opacity-0 group-hover:opacity-100"
      />
      {showIcon && <PhoneIcon className="h-4 w-4 transition-transform group-hover:-rotate-12" />}
      <span className="relative">{label}</span>
    </a>
  );
}

export function TextLink({
  to,
  children,
  className,
  tone = "dark",
}: {
  to: string;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <a
      href={to}
      className={cn(
        "group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em]",
        tone === "dark" ? "text-ink-900" : "text-white",
        className,
      )}
    >
      <span className="link-sweep">{children}</span>
      <ArrowIcon className="h-4 w-4 text-signal-500 transition-transform duration-300 group-hover:translate-x-1.5" />
    </a>
  );
}
