import aboutImg from "@/assets/about-tech.jpg";
import { business, differentiators } from "@/data/business";
import { media } from "@/data/media";
import { IconMapFallback } from "./IconMap";
import { QuoteIcon } from "./Icons";
import { SectionHead, Stars } from "./ui";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-concrete-50 py-24 lg:py-32">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-45" />
      <div
        aria-hidden
        className="absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(43,127,143,0.14),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-5 lg:grid-cols-12 lg:gap-14 lg:px-10">
        {/* image column */}
        <div className="lg:col-span-5">
          <div data-reveal="left" className="relative">
            <div
              aria-hidden
              className="absolute -bottom-5 -right-5 h-full w-full border-2 border-signal-500/70"
            />
            <figure className="relative aspect-[4/5] overflow-hidden bg-ink-800">
              <img
                src={aboutImg}
                alt="Garage door technician working on a residential spring assembly"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.06]"
                loading="lazy"
                decoding="async"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <span className="tag mb-2 block text-[0.6rem] text-hiviz-400">
                  Damion-led garage door service
                </span>
                <span className="display block text-2xl text-white">{business.owner}</span>
                <span className="mt-1 block text-sm text-steel-300">
                  Houston and surrounding communities
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="relative mt-10 flex items-center gap-5">
            <img
              src={media.modernHomeGarage}
              alt="Houston-area suburban home with a two-car garage door"
              className="h-28 w-40 shrink-0 border border-ink-900/10 object-cover grayscale-[0.35] transition duration-700 hover:grayscale-0 sm:h-32 sm:w-48"
              loading="lazy"
              decoding="async"
            />
            <blockquote className="border-l-2 border-signal-500 pl-4">
              <QuoteIcon className="mb-2 h-5 w-5 text-signal-500/60" />
              <p className="text-[0.98rem] italic leading-snug text-ink-800">
                “Damion did an amazing job. Very honest. He gave different options to choose from.”
              </p>
              <footer className="mt-2 flex items-center gap-2 text-xs text-steel-600">
                <Stars starClass="h-3 w-3" />
                Ashleigh M · Google review
              </footer>
            </blockquote>
          </div>
        </div>

        {/* copy column */}
        <div className="lg:col-span-7">
          <SectionHead
            index="01"
            kicker="Who shows up at your door"
            title={
              <>
                One truck. <span className="text-signal-500">One technician.</span>
                <br />
                Every job handled personally.
              </>
            }
            lead={
              <>
                Discount Door Mechanic is built around fair prices, clear explanations and work
                that lasts. {business.owner} and the team answer the phone, explain the repair,
                and give you options that fit the door and the budget. That's why customers in
                Katy, League City, Houston and the surrounding communities keep sending their
                neighbors our way.
              </>
            }
          />

          <div className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {[
              ["Answers his own phone", "No call centers, no phone trees."],
              ["Quotes before the work", "You approve the price first, every time."],
              ["Fixes what he finds", "Extra adjustments at no charge."],
              ["Follows up after", "A text or call once you've lived with it."],
            ].map(([title, body], i) => (
              <div
                key={title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${200 + i * 80}ms` }}
                className="group flex gap-3 border-b border-ink-900/10 pb-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 bg-signal-500 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-hiviz-400" />
                <span>
                  <span className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-ink-900">
                    {title}
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-steel-600">{body}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {differentiators.map((d, i) => {
              const Icon = IconMapFallback(d.icon);
              return (
                <article
                  key={d.title}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                  className="group relative overflow-hidden border border-ink-900/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-signal-500/50 hover:shadow-[0_22px_44px_-30px_rgba(21,26,32,0.65)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] w-0 bg-gradient-to-r from-signal-500 to-hiviz-400 transition-all duration-500 group-hover:w-full"
                  />
                  <Icon className="h-8 w-8 text-signal-500 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                  <h3 className="mt-4 font-display text-[1.02rem] font-semibold uppercase tracking-[0.07em] text-ink-900">
                    {d.title}
                  </h3>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-steel-600">{d.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
