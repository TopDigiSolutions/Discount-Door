const items = [
  "Broken springs",
  "Opener repair",
  "Same-day service",
  "Cables & brackets",
  "Nylon rollers",
  "Full tune-ups",
  "Safety sensors",
  "New installs",
  "Door off track",
  "Remotes & keypads",
  "Video diagnosis",
  "Upfront pricing",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-track${reverse ? " reverse" : ""}`}>
      {doubled.map((item, i) => (
        <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-6 px-6">
          <span className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.2em] text-ink-900 sm:text-[1.05rem]">
            {item}
          </span>
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-ink-900/55" aria-hidden>
            <path
              d="M12 0v24M0 12h24M3.5 3.5l17 17M20.5 3.5l-17 17"
              stroke="currentColor"
              strokeWidth="2.6"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="marquee-host relative overflow-hidden border-y-2 border-ink-900 bg-hiviz-400 py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-hiviz-400 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-hiviz-400 to-transparent" />
      <Row />
    </div>
  );
}
