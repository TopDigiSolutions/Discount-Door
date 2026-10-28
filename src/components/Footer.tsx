import { areas, business, navLinks, services } from "@/data/business";
import { useScrollTo } from "@/hooks/useScrollMotion";
import { ArrowIcon, LogoMark, MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { Stars } from "./ui";

export default function Footer() {
  const scrollTo = useScrollTo();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="hazard h-2 w-full" />
      <div aria-hidden className="grid-lines-dark absolute inset-0 opacity-60" />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12 text-white" />
              <span>
                <span className="display block text-xl leading-none text-white">
                  Discount <span className="text-signal-500">Door</span>
                </span>
                <span className="tag mt-1.5 block text-[0.58rem] text-steel-400">
                  Mechanic LLC · Houston
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-steel-400">
              Fair-priced garage door repair and opener service across Houston and surrounding
              communities. Springs, cables, rollers, openers, tune-ups and new installs — done
              carefully, with the price and options explained up front.
            </p>

            <a
              href={business.mapsProfile}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-3 border border-white/12 bg-white/[0.04] px-4 py-3 transition-colors duration-300 hover:border-hiviz-400/60"
            >
              <Stars starClass="h-4 w-4" />
              <span className="font-mono text-[0.72rem] text-white">
                {business.rating.toFixed(1)} · {business.reviewCount}+ Google reviews
              </span>
              <ArrowIcon className="h-4 w-4 text-signal-500 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 bg-signal-500 px-5 py-3.5 font-display text-[0.95rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-signal-600"
              >
                <PhoneIcon className="h-[18px] w-[18px]" />
                {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 border border-white/20 px-5 py-3.5 font-mono text-[0.76rem] text-white transition-colors duration-300 hover:border-hiviz-400 hover:text-hiviz-400"
              >
                <MailIcon className="h-[18px] w-[18px]" />
                <span className="truncate">{business.email}</span>
              </a>
            </div>
          </div>

          {/* services */}
          <nav className="lg:col-span-3">
            <h3 className="tag border-b border-white/10 pb-3 text-[0.58rem] text-hiviz-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="group flex items-start gap-2 text-left text-[0.92rem] text-steel-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 bg-signal-500 transition-all duration-300 group-hover:w-3" />
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* areas */}
          <div className="lg:col-span-3">
            <h3 className="tag border-b border-white/10 pb-3 text-[0.58rem] text-hiviz-400">
              Top service areas
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {areas.slice(0, 16).map((a) => (
                <li key={a.city}>
                  <button
                    onClick={() => scrollTo("areas")}
                    className="group flex items-center gap-1.5 text-left text-[0.88rem] text-steel-400 transition-colors duration-300 hover:text-white"
                  >
                    <PinIcon className="h-3 w-3 shrink-0 text-steel-600 transition-colors group-hover:text-signal-500" />
                    <span className="truncate">{a.city}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("areas")}
              className="mt-4 inline-flex items-center gap-2 font-display text-[0.82rem] uppercase tracking-[0.12em] text-hiviz-400 transition-colors hover:text-white"
            >
              <span className="link-sweep">See all {areas.length}+ cities</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* company */}
          <div className="lg:col-span-2">
            <h3 className="tag border-b border-white/10 pb-3 text-[0.58rem] text-hiviz-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="group flex items-center gap-2 text-left text-[0.92rem] text-steel-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-hiviz-400 transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 border border-white/10 bg-white/[0.04] p-4">
              <span className="tag block text-[0.55rem] text-steel-500">Hours</span>
              <ul className="mt-2 space-y-1.5 font-mono text-[0.7rem] text-steel-300">
                {business.hours.map(({ d: day, h: time }) => (
                  <li key={day} className="flex justify-between gap-2">
                    <span className="text-steel-500">{day}</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.68rem] text-steel-500">
            © {year} {business.name} · {business.region} · Owner-operated, no subcontractors
          </p>
          <div className="flex items-center gap-5">
            <span className="tag hidden text-[0.55rem] text-steel-600 sm:block">
              Same-day & next-morning service
            </span>
            <button
              onClick={() => scrollTo("home")}
              className="group flex items-center gap-2 border border-white/15 px-3.5 py-2 font-display text-[0.72rem] uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-hiviz-400 hover:text-hiviz-400"
            >
              Back to top
              <ArrowIcon className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
