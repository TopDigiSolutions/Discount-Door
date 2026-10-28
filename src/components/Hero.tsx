import heroImg from "@/assets/hero-garage.jpg";
import { business } from "@/data/business";
import { useScrollTo } from "@/hooks/useScrollMotion";
import { ArrowIcon, CheckIcon, GoogleG, PhoneIcon, ShieldIcon, TruckIcon } from "./Icons";
import { CallButton, Stars } from "./ui";

const quickFacts = ["Broken springs", "Dead openers", "Snapped cables", "Noisy doors"];

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink-900 text-white">
      {/* ambient layers */}
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-70" />
      <div
        aria-hidden
        className="absolute -left-40 top-0 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.22),transparent_62%)] blur-[10px]"
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,197,49,0.14),transparent_65%)]"
      />
      <div aria-hidden className="door-panels absolute inset-x-0 bottom-0 h-64 opacity-30" />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 pb-20 pt-14 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-28 lg:pt-20">
        {/* left */}
        <div className="lg:col-span-7 xl:col-span-6">
          <div
            className="mb-8 inline-flex items-center gap-3 border border-hiviz-400/30 bg-hiviz-400/10 px-3.5 py-2"
            style={{ animation: "float-y 6s ease-in-out infinite" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hiviz-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-hiviz-400" />
            </span>
            <span className="tag text-[0.63rem] text-hiviz-300">
              Discount Door Mechanic LLC · Taking calls today · Houston
            </span>
          </div>

          <h1 className="display text-[clamp(2.9rem,8.2vw,6.2rem)] leading-[0.94]">
            <span className="mask-line pb-[0.06em]">
              <span style={{ ["--line-delay" as string]: "80ms" }}>Your garage</span>
            </span>
            <span className="mask-line pb-[0.06em]">
              <span style={{ ["--line-delay" as string]: "200ms" }}>
                door, <span className="text-signal-500">fixed</span>
              </span>
            </span>
            <span className="mask-line pb-[0.06em]">
              <span style={{ ["--line-delay" as string]: "320ms" }}>right.</span>
            </span>
          </h1>

          <div className="mt-7 flex items-center gap-2">
            <span aria-hidden className="hazard h-2 w-24" />
            <span className="tag text-[0.6rem] text-steel-400">
              Springs · Openers · Cables · Tune-ups
            </span>
          </div>

          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "420ms" }}
            className="mt-7 max-w-xl text-[1.08rem] leading-relaxed text-steel-300"
          >
            Fair-priced garage door repair for Houston and the surrounding area. Broken springs,
            dead openers, snapped cables and doors that won't close — explained clearly, quoted
            before the work starts, and repaired with care.
          </p>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "520ms" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <CallButton label="Call for a free quote" />
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-hiviz-400 hover:bg-white/5"
            >
              Request a callback
              <ArrowIcon className="h-4 w-4 text-hiviz-400 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>

          <ul
            data-reveal
            style={{ ["--reveal-delay" as string]: "620ms" }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {quickFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-2 text-sm text-steel-300">
                <CheckIcon className="h-4 w-4 text-signal-500" />
                {fact}
              </li>
            ))}
          </ul>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "720ms" }}
            className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7"
          >
            <a
              href={business.mapsProfile}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3"
            >
              <GoogleG className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="leading-tight">
                <span className="flex items-center gap-2">
                  <span className="font-display text-xl font-bold text-white">
                    {business.rating.toFixed(1)}
                  </span>
                  <Stars />
                </span>
                <span className="tag block text-[0.6rem] text-steel-400">
                  {business.reviewCount}+ Google reviews
                </span>
              </span>
            </a>
            <span className="hidden h-9 w-px bg-white/15 sm:block" />
            <span className="flex items-center gap-2.5 text-sm text-steel-300">
              <ShieldIcon className="h-5 w-5 text-hiviz-400" />
              Damion-led service — clear options, fair prices
            </span>
          </div>
        </div>

        {/* right — image + job ticket */}
        <div className="relative lg:col-span-5 xl:col-span-6">
          <div data-reveal="scale" className="relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-full w-full border border-hiviz-400/40 lg:-left-6 lg:-top-6"
            />
            <figure className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-ink-800 lg:aspect-[5/4]">
              <img
                src={heroImg}
                alt="Garage door technician installing an opener on a ceiling rail in a residential garage"
                className="kenburns h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5">
                <span className="tag text-[0.62rem] text-hiviz-300">
                  Service example · Houston area
                </span>
                <span className="font-display text-sm uppercase tracking-[0.14em] text-white/85">
                  Opener swap + tune-up
                </span>
              </figcaption>
            </figure>

            {/* floating job ticket */}
            <div className="float-y absolute -bottom-8 -left-2 w-[15.5rem] border border-white/12 bg-ink-850/95 p-4 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.95)] backdrop-blur sm:-left-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="tag text-[0.58rem] text-steel-400">Job ticket</span>
                <span className="tag text-[0.58rem] text-hiviz-400">#DDM-0417</span>
              </div>
              <dl className="mt-3 space-y-2 font-mono text-[0.7rem] text-steel-300">
                <div className="flex justify-between gap-3">
                  <dt className="text-steel-500">TECH</dt>
                  <dd className="text-white">SERGIO</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-steel-500">ISSUE</dt>
                  <dd>SNAPPED TORSION SPRING</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-steel-500">PARTS</dt>
                  <dd>ON TRUCK</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-steel-500">ETA</dt>
                  <dd className="text-hiviz-400">NEXT MORNING</dd>
                </div>
              </dl>
              <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
                <TruckIcon className="h-4 w-4 text-signal-500" />
                <span className="tag text-[0.56rem] text-steel-400">Status: dispatched</span>
              </div>
            </div>
          </div>

          <a
            href={business.phoneHref}
            className="group mt-14 flex items-center gap-3 border border-white/12 bg-white/5 px-4 py-3 transition-colors hover:border-signal-500/60 hover:bg-white/10 lg:absolute lg:-right-2 lg:top-4 lg:mt-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal-500 text-white transition-transform duration-300 group-hover:rotate-12">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="tag block text-[0.55rem] text-steel-400">After-hours line</span>
              <span className="font-display text-sm tracking-[0.06em] text-white">
                {business.phoneDisplay}
              </span>
            </span>
          </a>
        </div>
      </div>

      <div aria-hidden className="hazard relative h-2.5 w-full" />
    </section>
  );
}
