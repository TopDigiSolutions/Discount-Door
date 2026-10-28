import { useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { areas, business } from "@/data/business";
import { ArrowIcon, PhoneIcon, PinIcon } from "./Icons";
import { SectionHead } from "./ui";
import { useRevealObserver } from "@/hooks/useScrollMotion";

const pins = [
  { name: "Houston", x: 214, y: 224, big: true },
  { name: "Katy", x: 126, y: 186, big: true },
  { name: "Sugar Land", x: 168, y: 274, big: true },
  { name: "Cypress", x: 172, y: 120 },
  { name: "Spring", x: 264, y: 100 },
  { name: "The Woodlands", x: 310, y: 66 },
  { name: "Pearland", x: 244, y: 326 },
  { name: "League City", x: 324, y: 300 },
  { name: "Richmond", x: 102, y: 282 },
  { name: "Humble", x: 300, y: 176 },
  { name: "Missouri City", x: 184, y: 300 },
  { name: "Conroe", x: 344, y: 28 },
];

function CoverageRadar() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="Illustrated coverage map of the Greater Houston service area"
    >
      <defs>
        <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.28" />
          <stop offset="65%" stopColor="#FF5A1F" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFC531" stopOpacity="0" />
          <stop offset="100%" stopColor="#FFC531" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="185" fill="url(#radarGlow)" />
      {[60, 105, 150, 185].map((r) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
          strokeDasharray={r === 185 ? "none" : "3 5"}
        />
      ))}
      <path
        d="M200 200 L200 15 M200 200 L385 200 M200 200 L200 385 M200 200 L15 200"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />

      {/* rotating sweep */}
      <g style={{ transformOrigin: "200px 200px" }} className="spin-slow">
        <path d="M200 200 L200 15 A185 185 0 0 1 300 45 Z" fill="url(#sweepGrad)" opacity="0.55" />
        <line x1="200" y1="200" x2="200" y2="15" stroke="#FFC531" strokeWidth="1.2" opacity="0.6" />
      </g>

      {pins.map((p, i) => (
        <g key={p.name}>
          <circle
            cx={p.x}
            cy={p.y}
            r={p.big ? 5 : 3.4}
            fill={p.big ? "#FF5A1F" : "#FFC531"}
            opacity="0.95"
          >
            <animate
              attributeName="opacity"
              values="0.35;1;0.35"
              dur={`${2.6 + (i % 4) * 0.7}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={p.x} cy={p.y} r="10" fill="none" stroke={p.big ? "#FF5A1F" : "#FFC531"} strokeWidth="0.8" opacity="0.35" />
          <text
            x={p.x + 12}
            y={p.y + 4}
            fill="rgba(255,255,255,0.72)"
            fontSize="11"
            fontFamily="IBM Plex Mono, monospace"
            letterSpacing="0.06em"
          >
            {p.name}
          </text>
        </g>
      ))}

      <circle cx="200" cy="200" r="6" fill="#fff" />
      <text
        x="200"
        y="228"
        textAnchor="middle"
        fill="#FF5A1F"
        fontSize="11"
        fontFamily="IBM Plex Mono, monospace"
        letterSpacing="0.22em"
      >
        HOUSTON HQ
      </text>
    </svg>
  );
}

export default function Areas() {
  const [query, setQuery] = useState("");
  const [zone, setZone] = useState("All");

  const zones = useMemo(
    () => ["All", ...Array.from(new Set(areas.map((a) => a.zone))).sort()],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return areas.filter(
      (a) =>
        (zone === "All" || a.zone === zone) &&
        (!q || a.city.toLowerCase().includes(q) || a.zone.toLowerCase().includes(q)),
    );
  }, [query, zone]);

  useRevealObserver([query, zone, filtered.length]);

  return (
    <section id="areas" className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
      <div aria-hidden className="grid-lines-dark absolute inset-0 opacity-80" />
      <div
        aria-hidden
        className="absolute -right-40 top-10 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.18),transparent_62%)]"
      />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHead
              index="05"
              tone="dark"
              kicker="Service area"
              title={
                <>
                  If it's in the
                  <br />
                  Houston area, <span className="text-signal-500">we drive it</span>
                </>
              }
              lead="From Katy and Cypress down to Pearland and League City, plus the communities around Houston. Don't see your city? Call anyway. The list is a starting point, not a boundary."
            />

            {/* filter controls */}
            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
              className="mt-10 space-y-4"
            >
              <label className="group relative flex items-center">
                <PinIcon className="pointer-events-none absolute left-4 h-5 w-5 text-steel-500 transition-colors group-focus-within:text-signal-500" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search your city or county…"
                  className="w-full border border-white/15 bg-white/[0.04] py-4 pl-12 pr-4 text-[0.95rem] text-white placeholder:text-steel-500 transition-colors duration-300 outline-none focus:border-signal-500 focus:bg-white/[0.07]"
                />
                <span className="tag absolute right-4 hidden text-[0.55rem] text-steel-500 sm:block">
                  {filtered.length} / {areas.length}
                </span>
              </label>

              <div className="flex flex-wrap gap-2">
                {zones.map((z) => (
                  <button
                    key={z}
                    onClick={() => setZone(z)}
                    className={cn(
                      "border px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-all duration-300",
                      zone === z
                        ? "border-signal-500 bg-signal-500 text-white"
                        : "border-white/15 text-steel-400 hover:border-hiviz-400 hover:text-hiviz-400",
                    )}
                  >
                    {z.replace(" County", "")}
                  </button>
                ))}
              </div>
            </div>

            {/* city grid */}
            <div className="mt-8 columns-2 gap-x-6 sm:columns-3 lg:columns-4">
              {filtered.map((a, i) => (
                <div
                  key={a.city}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${Math.min(i, 8) * 22}ms` }}
                  className="reveal-fast group mb-2 break-inside-avoid"
                >
                  <div className="flex items-center gap-2.5 border-b border-white/8 py-2.5 transition-colors duration-300 hover:border-signal-500/70">
                    <PinIcon className="h-3.5 w-3.5 shrink-0 text-steel-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-signal-500" />
                    <span className="truncate text-[0.92rem] text-steel-300 transition-colors duration-300 group-hover:text-white">
                      {a.city}
                    </span>
                    <span className="tag ml-auto shrink-0 text-[0.5rem] text-steel-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {a.zone.split(" ")[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-8 border border-dashed border-hiviz-400/40 bg-hiviz-400/5 p-6 text-center">
                <p className="display text-xl text-white">
                  We probably still cover it.
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm text-steel-300">
                  Our list isn't a limit — it's a starting point. Call and ask directly.
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-5 inline-flex items-center gap-2.5 bg-signal-500 px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-signal-600"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {business.phoneDisplay}
                </a>
              </div>
            )}
          </div>

          {/* radar column */}
          <div className="lg:col-span-5">
            <div
              data-reveal="scale"
              className="relative border border-white/12 bg-ink-900/70 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="tag text-[0.58rem] text-steel-400">Coverage radar</span>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 text-hiviz-400">
                    <span className="pulse-ring absolute inset-0 rounded-full" />
                    <span className="relative h-2 w-2 rounded-full bg-hiviz-400" />
                  </span>
                  <span className="tag text-[0.55rem] text-hiviz-400">Live</span>
                </span>
              </div>
              <div className="aspect-square w-full">
                <CoverageRadar />
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-4 font-mono text-[0.68rem] text-steel-400">
                <div className="flex justify-between gap-2">
                  <dt>Cities</dt>
                  <dd className="text-hiviz-400">{areas.length}+</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Counties</dt>
                  <dd className="text-hiviz-400">{zones.length - 1}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Radius</dt>
                  <dd className="text-hiviz-400">Metro-wide</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Travel fee</dt>
                  <dd className="text-hiviz-400">None</dd>
                </div>
              </dl>
            </div>

            <a
              href={business.mapsProfile}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 flex items-center justify-between gap-4 border border-white/12 bg-white/[0.04] px-5 py-4 transition-colors duration-300 hover:border-hiviz-400/60 hover:bg-white/[0.08]"
            >
              <span>
                <span className="tag block text-[0.55rem] text-steel-400">Google Business Profile</span>
                <span className="mt-1 block font-display text-[0.98rem] uppercase tracking-[0.08em] text-white">
                  {business.region}
                </span>
              </span>
              <ArrowIcon className="h-5 w-5 shrink-0 text-signal-500 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
