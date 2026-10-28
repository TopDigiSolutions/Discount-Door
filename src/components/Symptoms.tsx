import { useState } from "react";
import { cn } from "@/utils/cn";
import { business } from "@/data/business";
import { useScrollTo } from "@/hooks/useScrollMotion";
import { ArrowIcon, PhoneIcon, VideoIcon } from "./Icons";
import { SectionHead } from "./ui";

const symptoms = [
  {
    symptom: "Loud bang, door won't lift",
    cause: "Torsion spring snapped",
    fix: "Spring pair + balance",
  },
  {
    symptom: "Motor hums but the door stays put",
    cause: "Stripped drive gear or disconnected trolley",
    fix: "Gear kit / trolley",
  },
  {
    symptom: "Door reverses before hitting the floor",
    cause: "Photo-eye out of alignment or force set too low",
    fix: "Sensor + force calibration",
  },
  {
    symptom: "One side hangs lower than the other",
    cause: "Lift cable jumped the drum or snapped",
    fix: "Cables, both sides",
  },
  {
    symptom: "Grinding, squeaking, jerky travel",
    cause: "Worn steel rollers and dry hardware",
    fix: "Nylon rollers + lube",
  },
  {
    symptom: "Door closes, then pops right back open",
    cause: "Travel limits drifted out of adjustment",
    fix: "Limit reset + test",
  },
  {
    symptom: "Remote only works a few feet away",
    cause: "Antenna, battery or logic board fault",
    fix: "Board / antenna check",
  },
  {
    symptom: "Door came off the track after a bump",
    cause: "Bent rail or damaged section",
    fix: "Track realign / panel repair",
  },
];

export default function Symptoms() {
  const [hover, setHover] = useState<number | null>(null);
  const scrollTo = useScrollTo();

  return (
    <section className="relative overflow-hidden bg-ink-850 py-24 text-white lg:py-28">
      <div aria-hidden className="grid-lines-dark absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(43,127,143,0.22),transparent_65%)]"
      />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHead
              kicker="Field diagnostics"
              tone="dark"
              title={
                <>
                  What your door
                  <br />
                  is <span className="text-hiviz-400">telling you</span>
                </>
              }
              lead="Most garage door failures announce themselves before they strand you. Match the symptom to the usual culprit — then send us a video and we'll confirm it before we drive out."
            />

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "220ms" }}
              className="mt-9 space-y-3"
            >
              <button
                onClick={() => scrollTo("contact")}
                className="group flex w-full items-center justify-between gap-4 border border-white/15 bg-white/[0.04] px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-hiviz-400 hover:bg-white/[0.08]"
              >
                <span className="flex items-center gap-3">
                  <VideoIcon className="h-5 w-5 text-hiviz-400" />
                  <span className="font-display text-[0.98rem] uppercase tracking-[0.1em] text-white">
                    Describe your symptom
                  </span>
                </span>
                <ArrowIcon className="h-4 w-4 text-signal-500 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
              <a
                href={business.phoneHref}
                className="group flex w-full items-center justify-between gap-4 bg-signal-500 px-5 py-4 transition-colors duration-300 hover:bg-signal-600"
              >
                <span className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover:-rotate-12" />
                  <span className="font-display text-[0.98rem] uppercase tracking-[0.1em] text-white">
                    {business.phoneDisplay}
                  </span>
                </span>
                <span className="tag text-[0.55rem] text-white/75">Call or text</span>
              </a>
            </div>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "300ms" }}
              className="mt-6 border-l-2 border-hiviz-400 pl-4 text-[0.88rem] leading-relaxed text-steel-400"
            >
              Don't force a door with a broken spring or a frayed cable — those parts are under
              serious tension. Stop using it and call; we'll release it safely.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div
            data-reveal
            className="hidden grid-cols-12 gap-4 border-b border-white/15 pb-3 sm:grid"
          >
            <span className="tag col-span-5 text-[0.55rem] text-steel-500">Symptom</span>
            <span className="tag col-span-4 text-[0.55rem] text-steel-500">Likely cause</span>
            <span className="tag col-span-3 text-right text-[0.55rem] text-steel-500">
              Typical fix
            </span>
          </div>

          <ul className="border-b border-white/10">
            {symptoms.map((s, i) => (
              <li
                key={s.symptom}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 55}ms` }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={cn(
                  "group relative grid gap-x-4 gap-y-2 border-b border-white/8 px-2 py-5 transition-colors duration-400 sm:grid-cols-12 sm:items-center",
                  hover === i ? "bg-white/[0.055]" : "hover:bg-white/[0.055]",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-0 h-full w-[3px] origin-top bg-hiviz-400 transition-transform duration-500",
                    hover === i ? "scale-y-100" : "scale-y-0",
                  )}
                />
                <span className="col-span-5 flex items-start gap-3">
                  <span className="mt-[0.45rem] font-mono text-[0.62rem] text-steel-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[1.06rem] leading-snug text-white transition-transform duration-400 group-hover:translate-x-1 sm:text-[1.15rem]">
                    {s.symptom}
                  </span>
                </span>
                <span className="col-span-4 text-[0.9rem] leading-snug text-steel-400">
                  {s.cause}
                </span>
                <span className="col-span-3 sm:text-right">
                  <span className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.06em] text-hiviz-400 transition-colors duration-400 group-hover:border-hiviz-400/50 group-hover:bg-hiviz-400/10">
                    {s.fix}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-steel-500">
            <span className="h-px w-8 bg-signal-500" />
            Symptom not listed? It's probably still fixable — ask.
          </p>
        </div>
      </div>
    </section>
  );
}
