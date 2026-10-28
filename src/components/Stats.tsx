import { stats } from "@/data/business";
import { useCountUp } from "@/hooks/useScrollMotion";

function StatItem({
  value,
  suffix,
  display,
  decimals,
  label,
  note,
  index,
}: {
  value: number;
  suffix: string;
  display?: string;
  decimals: number;
  label: string;
  note: string;
  index: number;
}) {
  const { ref, value: shown } = useCountUp(value, decimals);
  return (
    <div
      ref={ref}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
      className="group relative flex flex-col gap-2 border-ink-900/12 px-6 py-9 transition-colors duration-500 hover:bg-white sm:px-8 md:border-l md:first:border-l-0"
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-[3px] w-0 bg-signal-500 transition-all duration-500 group-hover:w-full"
      />
      <span className="tag text-[0.6rem] text-steel-500">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="display text-[clamp(2.6rem,6vw,4.1rem)] leading-none text-ink-900">
        {display ?? shown}
        {!display && <span className="text-signal-500">{suffix}</span>}
      </span>
      <span className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-ink-800">
        {label}
      </span>
      <span className="max-w-[22ch] text-sm leading-snug text-steel-600">{note}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative border-b border-ink-900/10 bg-concrete-100">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}
