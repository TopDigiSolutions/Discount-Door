import { useState } from "react";
import { cn } from "@/utils/cn";
import { business, services } from "@/data/business";
import { media } from "@/data/media";
import { IconMapFallback } from "./IconMap";
import { ArrowIcon, CheckIcon, ChevronIcon, PhoneIcon } from "./Icons";
import { CallButton, SectionHead } from "./ui";
import { useScrollTo } from "@/hooks/useScrollMotion";

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);
  const scrollTo = useScrollTo();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ink-900 py-24 text-white lg:py-32"
    >
      <div aria-hidden className="grid-lines-dark absolute inset-0" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,90,31,0.16),transparent_60%)]"
      />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* sticky left rail */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHead
              index="02"
              tone="dark"
              kicker="What we repair & install"
              title={
                <>
                  Every part of
                  <br />
                  the door system
                </>
              }
              lead="Springs, openers, cables, rollers, tracks, sensors and the doors themselves. Residential single and double doors, sectional and roll-up — if it lifts, we fix it."
            />

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "240ms" }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <CallButton label="Get a free quote" className="px-5 py-3" />
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-hiviz-400 hover:text-hiviz-400"
              >
                Send a video
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <figure
              data-reveal
              style={{ ["--reveal-delay" as string]: "320ms" }}
              className="group relative mt-10 hidden overflow-hidden border border-white/10 lg:block"
            >
              <img
                src={media.hardwareSprings}
                alt="Springs, chains and fasteners stocked for garage door repair"
                className="h-44 w-full object-cover grayscale-[0.5] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                <span className="tag text-[0.58rem] text-hiviz-400">On the truck</span>
                <span className="mt-1 block text-sm text-white/85">
                  Springs, cables, rollers, brackets & opener parts — so one visit finishes the job.
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* service list */}
        <div className="lg:col-span-8">
          <ul className="border-t border-white/10">
            {services.map((s, i) => {
              const Icon = IconMapFallback(s.icon);
              const isOpen = open === i;
              return (
                <li key={s.id} data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${s.id}`}
                    className={cn(
                      "group relative flex w-full items-start gap-4 border-b border-white/10 px-1 py-6 text-left transition-colors duration-500 sm:gap-6 sm:px-4",
                      isOpen ? "bg-white/[0.055]" : "hover:bg-white/[0.035]",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 top-0 h-full w-[3px] bg-signal-500 transition-transform duration-500 origin-top",
                        isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100",
                      )}
                    />
                    <span
                      className={cn(
                        "mt-1 font-mono text-[0.72rem] tracking-[0.1em] transition-colors duration-300",
                        isOpen ? "text-hiviz-400" : "text-steel-500 group-hover:text-hiviz-400",
                      )}
                    >
                      {s.no}
                    </span>
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center border transition-all duration-500",
                        isOpen
                          ? "border-signal-500 bg-signal-500 text-white"
                          : "border-white/15 bg-white/5 text-hiviz-400 group-hover:border-signal-500/60 group-hover:text-signal-400",
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center justify-between gap-4">
                        <span className="display text-[1.28rem] leading-tight text-white sm:text-[1.5rem]">
                          {s.title}
                        </span>
                        <ChevronIcon
                          className={cn(
                            "h-5 w-5 shrink-0 text-steel-400 transition-transform duration-500",
                            isOpen && "-rotate-180 text-hiviz-400",
                          )}
                        />
                      </span>
                      <span
                        className={cn(
                          "mt-2 block max-w-2xl text-[0.95rem] leading-relaxed transition-colors duration-500",
                          isOpen ? "text-steel-300" : "text-steel-500",
                        )}
                      >
                        {s.summary}
                      </span>

                      <span
                        id={`service-panel-${s.id}`}
                        className={cn(
                          "grid transition-all duration-500 ease-[cubic-bezier(.22,.75,.25,1)]",
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden">
                          <span className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-4">
                            {s.points.map((p) => (
                              <span
                                key={p}
                                className="flex items-center gap-2 text-sm text-white/80"
                              >
                                <CheckIcon className="h-4 w-4 text-signal-500" />
                                {p}
                              </span>
                            ))}
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div
            data-reveal
            className="mt-8 flex flex-col gap-5 border border-white/12 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="display text-xl text-white">
                Not sure what's wrong with it?
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-steel-300">
                Film the door doing its thing and text it over. Most of the time we can tell you
                the fix — and the price — before we ever get in the truck.
              </p>
            </div>
            <a
              href={business.phoneHref}
              className="group flex shrink-0 items-center gap-3 border border-hiviz-400/50 bg-hiviz-400/10 px-5 py-3.5 transition-colors duration-300 hover:bg-hiviz-400"
            >
              <PhoneIcon className="h-5 w-5 text-hiviz-400 transition-colors group-hover:text-ink-900" />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors group-hover:text-ink-900">
                {business.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
