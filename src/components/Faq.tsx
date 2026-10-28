import { useState } from "react";
import { cn } from "@/utils/cn";
import { business, faqs } from "@/data/business";
import { ChevronIcon, PhoneIcon } from "./Icons";
import { SectionHead } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-concrete-50 py-24 lg:py-28">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHead
              index="08"
              kicker="Straight answers"
              title={
                <>
                  Questions
                  <br />
                  we get <span className="text-signal-500">weekly</span>
                </>
              }
            />
            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "180ms" }}
              className="mt-8 border border-ink-900/12 bg-white p-6"
            >
              <p className="text-[0.95rem] leading-relaxed text-steel-600">
                Still stuck on something? Ask directly — you'll get an honest answer even if the
                answer is “you don't need us for that.”
              </p>
              <a
                href={business.phoneHref}
                className="group mt-5 flex items-center justify-between gap-3 border border-ink-900/15 px-4 py-3 transition-colors duration-300 hover:border-signal-500 hover:bg-signal-500"
              >
                <span className="flex items-center gap-3">
                  <PhoneIcon className="h-[18px] w-[18px] text-signal-500 transition-colors group-hover:text-white" />
                  <span className="font-display text-[0.95rem] uppercase tracking-[0.08em] text-ink-900 transition-colors group-hover:text-white">
                    {business.phoneDisplay}
                  </span>
                </span>
                <span className="tag text-[0.55rem] text-steel-500 transition-colors group-hover:text-white/80">
                  Call
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-ink-900/12">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className={cn(
                      "group flex w-full items-start gap-5 border-b border-ink-900/12 px-1 py-6 text-left transition-colors duration-400 sm:px-4",
                      isOpen ? "bg-white" : "hover:bg-white/70",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-1 font-mono text-[0.68rem] transition-colors duration-300",
                        isOpen ? "text-signal-500" : "text-steel-500",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-start justify-between gap-6">
                        <span
                          className={cn(
                            "display text-[1.15rem] leading-tight transition-colors duration-300 sm:text-[1.35rem]",
                            isOpen ? "text-signal-600" : "text-ink-900 group-hover:text-signal-600",
                          )}
                        >
                          {f.q}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-500",
                            isOpen
                              ? "rotate-180 border-signal-500 bg-signal-500 text-white"
                              : "border-ink-900/20 text-ink-900 group-hover:border-signal-500 group-hover:text-signal-500",
                          )}
                        >
                          <ChevronIcon className="h-4 w-4" />
                        </span>
                      </span>
                      <span
                        id={`faq-${i}`}
                        className={cn(
                          "grid transition-all duration-500 ease-[cubic-bezier(.22,.75,.25,1)]",
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden">
                          <span className="mt-3 block max-w-2xl pr-10 text-[0.98rem] leading-relaxed text-steel-600">
                            {f.a}
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
