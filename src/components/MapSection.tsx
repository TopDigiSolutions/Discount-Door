import { useEffect, useRef, useState } from "react";
import { business } from "@/data/business";
import { ArrowIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon, StarIcon } from "./Icons";
import { SectionHead, Stars } from "./ui";

const EMBED_SRC =
  "https://www.google.com/maps?q=Discount%20Door%20Mechanic%20LLC%2C%20Houston%2C%20TX&z=9&output=embed";

export default function MapSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setLoaded(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "400px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section id="map" className="relative overflow-hidden bg-concrete-100 py-24 lg:py-32">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-55" />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
                index="07"
            kicker="Where we work"
            title={
              <>
                Pinned across
                <br />
                <span className="text-signal-500">Greater Houston</span>
              </>
            }
            lead="We're a service-area business — the truck comes to your driveway, not the other way around. Here's the coverage on the map, plus every way to reach us."
            className="max-w-2xl"
          />
          <a
            href={business.mapsProfile}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 border border-ink-900/20 bg-white px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-500"
          >
            <span className="tag text-[0.58rem] text-steel-500">Google profile</span>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">
              Open in Maps
            </span>
            <ArrowIcon className="h-4 w-4 text-signal-500 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* map frame */}
          <div className="lg:col-span-8">
            <div
              ref={frameRef}
              data-reveal="scale"
              className="group relative overflow-hidden border border-ink-900/15 bg-ink-800 shadow-[0_40px_80px_-56px_rgba(21,26,32,0.9)]"
            >
              <div className="relative aspect-[16/11] w-full sm:aspect-[16/9] lg:aspect-[16/10]">
                {!loaded && (
                  <div
                    aria-hidden
                    className="absolute inset-0 grid-lines-dark flex items-center justify-center bg-ink-900"
                  >
                    <span className="tag animate-pulse text-[0.6rem] text-hiviz-400">
                      Loading map…
                    </span>
                  </div>
                )}
                {loaded && (
                  <iframe
                    title="Discount Door Mechanic service area on Google Maps"
                    src={EMBED_SRC}
                    className="absolute inset-0 h-full w-full border-0 grayscale-[0.25] transition duration-700 hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                )}
              </div>

              {/* floating location card */}
              <div className="pointer-events-none absolute left-4 top-4 w-[min(19rem,calc(100%-2rem))] border border-ink-900/10 bg-white/96 p-4 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.6)] backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center bg-signal-500 text-white">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="display block text-[1rem] leading-tight text-ink-900">
                      {business.name}
                    </span>
                    <span className="mt-0.5 block text-[0.8rem] text-steel-600">
                      Service-area business · {business.region}
                    </span>
                    <span className="mt-2 flex items-center gap-2">
                      <Stars starClass="h-3.5 w-3.5" />
                      <span className="font-mono text-[0.66rem] text-ink-900">
                        {business.rating.toFixed(1)}
                      </span>
                      <span className="font-mono text-[0.62rem] text-steel-500">
                        ({business.reviewCount}+)
                      </span>
                    </span>
                  </span>
                </div>
                <a
                  href={business.mapsProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="pointer-events-auto mt-3 flex items-center justify-center gap-2 border border-ink-900/15 py-2.5 font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink-900 transition-colors duration-300 hover:bg-ink-900 hover:text-white"
                >
                  Get directions
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </div>

              <span
                aria-hidden
                className="absolute bottom-4 right-4 hidden items-center gap-2 border border-white/20 bg-ink-950/80 px-3 py-2 backdrop-blur sm:flex"
              >
                <StarIcon className="h-3.5 w-3.5 text-hiviz-400" />
                <span className="tag text-[0.55rem] text-white/85">5.0 · Google verified</span>
              </span>
            </div>
          </div>

          {/* details panel */}
          <div className="grid gap-5 lg:col-span-4">
            {[
              {
                icon: PhoneIcon,
                label: "Call or text",
                value: business.phoneDisplay,
                href: business.phoneHref,
                note: "Owner answers — usually within the hour",
              },
              {
                icon: MailIcon,
                label: "Email",
                value: business.email,
                href: `mailto:${business.email}`,
                note: "Send photos or a video of the problem",
              },
              {
                icon: PinIcon,
                label: "Coverage",
                value: business.region,
                href: business.mapsProfile,
                note: "40+ cities · Houston to Katy to League City",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                  className="group flex items-start gap-4 border border-ink-900/10 bg-white p-5 transition-all duration-400 hover:-translate-y-1 hover:border-signal-500/60 hover:shadow-[0_24px_48px_-32px_rgba(21,26,32,0.7)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink-900/12 bg-concrete-100 text-signal-600 transition-colors duration-400 group-hover:border-signal-500 group-hover:bg-signal-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="tag block text-[0.55rem] text-steel-500">{item.label}</span>
                    <span className="mt-1 block truncate font-display text-[1.02rem] uppercase tracking-[0.04em] text-ink-900">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-[0.82rem] text-steel-600">{item.note}</span>
                  </span>
                  <ArrowIcon className="ml-auto h-4 w-4 shrink-0 translate-x-0 text-steel-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-signal-500" />
                </a>
              );
            })}

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "270ms" }}
              className="border border-ink-900/10 bg-ink-900 p-5 text-white"
            >
              <span className="flex items-center gap-2.5">
                <ClockIcon className="h-5 w-5 text-hiviz-400" />
                <span className="display text-[1.05rem] uppercase tracking-[0.08em]">
                  Business hours
                </span>
              </span>
              <ul className="mt-4 space-y-2.5">
                {business.hours.map((h) => (
                  <li
                    key={h.d}
                    className="flex items-baseline justify-between gap-3 border-b border-white/8 pb-2.5 text-[0.88rem] last:border-0"
                  >
                    <span className="text-steel-300">{h.d}</span>
                    <span className="font-mono text-[0.74rem] text-hiviz-400">{h.h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.8rem] leading-relaxed text-steel-400">
                Door down outside these hours? Leave a voicemail or text with a video — it's read
                first thing every morning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
