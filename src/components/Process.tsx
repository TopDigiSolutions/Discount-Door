import { business, process } from "@/data/business";
import { media } from "@/data/media";
import { PhoneIcon } from "./Icons";
import { SectionHead } from "./ui";

const strip = [
  {
    src: media.toolboxWorker,
    caption: "Arrives stocked",
    note: "Parts on board, so the first visit is usually the last",
  },
  {
    src: media.ladderWorker,
    caption: "Works clean",
    note: "Drop cloths, tidy driveway, old parts hauled away",
  },
  {
    src: media.whiteDoorFoliage,
    caption: "Leaves it balanced",
    note: "Lubed, tensioned and safety-tested before we go",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-concrete-100 py-24 lg:py-32">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index="03"
            kicker="From first call to fixed door"
            title={
              <>
                How a repair with
                <br />
                <span className="text-signal-500">Discount Door</span> actually goes
              </>
            }
            className="max-w-2xl"
          />
          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
            className="max-w-sm border-l-2 border-signal-500 pl-5 text-[0.98rem] leading-relaxed text-steel-600"
          >
            No dispatch fees, no diagnostic up-sell, no “we'll have to come back for that part.”
            Just a straight line from your call to a door that works.
          </p>
        </div>

        {/* timeline */}
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute left-[27px] top-6 hidden h-[calc(100%-3rem)] w-px bg-ink-900/12 lg:left-0 lg:top-[3.1rem] lg:h-px lg:w-full"
          />
          {process.map((p, i) => (
            <li
              key={p.step}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              className="group relative"
            >
              <div className="flex items-start gap-5 lg:block">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-ink-900 bg-concrete-100 font-display text-lg font-bold text-ink-900 transition-all duration-500 group-hover:border-signal-500 group-hover:bg-signal-500 group-hover:text-white">
                  {p.step}
                </span>
                <h3 className="display pt-1 text-[1.24rem] leading-tight text-ink-900 lg:mt-6 lg:pt-0">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 max-w-sm pl-[4.75rem] text-[0.95rem] leading-relaxed text-steel-600 lg:pl-0">
                {p.body}
              </p>
              {i < process.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-[3.1rem] hidden h-px w-6 bg-signal-500/0 transition-all duration-500 group-hover:w-12 group-hover:bg-signal-500/70 lg:block"
                />
              )}
            </li>
          ))}
        </ol>

        {/* photo strip */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {strip.map((s, i) => (
            <figure
              key={s.caption}
              data-reveal="scale"
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className="group relative overflow-hidden border border-ink-900/10 bg-ink-900"
            >
              <img
                src={s.src}
                alt={s.caption}
                className="h-64 w-full object-cover opacity-90 grayscale transition-all duration-[1.1s] ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="display block text-lg text-white">{s.caption}</span>
                <span className="mt-1 block max-w-[30ch] text-[0.85rem] leading-snug text-steel-300">
                  {s.note}
                </span>
                <span className="mt-3 block h-[2px] w-0 bg-hiviz-400 transition-all duration-700 group-hover:w-16" />
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          data-reveal
          className="mt-10 flex flex-col items-center justify-between gap-5 border border-ink-900/12 bg-white px-7 py-6 sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <h3 className="display text-2xl text-ink-900">Door down? Don't wait on it.</h3>
            <p className="mt-1 text-sm text-steel-600">
              Call or text now and you'll usually be on the schedule for tomorrow morning.
            </p>
          </div>
          <a
            href={business.phoneHref}
            className="group flex shrink-0 items-center gap-3 bg-ink-900 px-6 py-4 font-display text-base font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-signal-500"
          >
            <PhoneIcon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
