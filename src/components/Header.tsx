import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { business, navLinks } from "@/data/business";
import { useActiveSection, useScrollProgress, useScrolled, useScrollTo } from "@/hooks/useScrollMotion";
import { ClockIcon, LogoMark, PhoneIcon, PinIcon } from "./Icons";
import { Stars } from "./ui";

const ids = navLinks.map((l) => l.id);

export default function Header() {
  const scrolled = useScrolled(40);
  const progress = useScrollProgress();
  const active = useActiveSection(ids);
  const scrollTo = useScrollTo();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // let the drawer close before scrolling
    window.setTimeout(() => scrollTo(id), 40);
  };

  return (
    <>
      {/* utility bar */}
      <div className="relative z-50 hidden bg-ink-950 text-steel-300 lg:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-2 text-[0.78rem] xl:px-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <PinIcon className="h-3.5 w-3.5 text-signal-500" />
              Serving Houston and surrounding communities
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon className="h-3.5 w-3.5 text-signal-500" />
              Same-day calls when available · After-hours help by phone
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Stars className="text-hiviz-400" />
            <span className="font-mono text-[0.72rem] tracking-[0.14em] text-white/70">
              5.0 ON GOOGLE
            </span>
            <span className="h-3 w-px bg-white/20" />
            <a
              href={business.mapsProfile}
              target="_blank"
              rel="noreferrer"
              className="link-sweep text-white/80 transition hover:text-white"
            >
              Read our reviews
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-ink-900/95 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] backdrop-blur-md"
            : "border-b border-white/5 bg-ink-900",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 transition-all duration-500 xl:px-10",
            scrolled ? "py-2.5" : "py-4",
          )}
        >
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-3 text-left"
            aria-label={`${business.name} — home`}
          >
            <LogoMark
              className={cn(
                "text-white transition-all duration-500 group-hover:rotate-[-6deg]",
                scrolled ? "h-9 w-9" : "h-11 w-11",
              )}
            />
            <span className="leading-none">
              <span className="display block text-[1.05rem] tracking-[0.03em] text-white sm:text-[1.2rem]">
                Discount <span className="text-signal-500">Door</span>
              </span>
              <span className="tag mt-1 block text-[0.58rem] text-steel-400">
                Mechanic LLC · Houston
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={cn(
                  "relative px-3.5 py-2 font-display text-[0.82rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300",
                  active === link.id ? "text-hiviz-400" : "text-white/70 hover:text-white",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0.5 left-3.5 h-[2px] bg-signal-500 transition-all duration-300",
                    active === link.id ? "w-[calc(100%-1.75rem)]" : "w-0",
                  )}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="group hidden items-center gap-3 sm:flex"
              aria-label={`Call ${business.phoneDisplay}`}
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-signal-500 text-white transition-transform duration-300 group-hover:scale-110">
                <span className="pulse-ring absolute inset-0 rounded-full text-signal-500/60" />
                <PhoneIcon className="relative h-[18px] w-[18px]" />
              </span>
              <span className="leading-tight">
                <span className="tag block text-[0.58rem] text-steel-400">Talk to the owner</span>
                <span className="font-display text-[1.02rem] font-semibold tracking-[0.03em] text-white">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-white/20 text-white transition hover:border-hiviz-400 xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="h-[2px] w-5 bg-current" />
              <span className="h-[2px] w-5 bg-current" />
              <span className="h-[2px] w-3 self-center bg-signal-500" />
            </button>
          </div>
        </div>

        <div className="relative h-[3px] w-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-signal-500 via-hiviz-400 to-signal-500 transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[70] xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(23rem,88vw)] flex-col bg-ink-900 transition-transform duration-500 ease-[cubic-bezier(.22,.75,.25,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="hazard h-2 w-full" />
          <div className="flex items-center justify-between px-6 py-5">
            <span className="display text-lg text-white">
              Discount <span className="text-signal-500">Door</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition hover:border-signal-500 hover:text-signal-500"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 5l14 14M19 5 5 19" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-6">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
                className={cn(
                  "group flex items-center justify-between border-b border-white/8 px-3 py-4 text-left transition-all duration-500",
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                )}
              >
                <span className="display text-2xl text-white transition-colors group-hover:text-hiviz-400">
                  {link.label}
                </span>
                <span className="tag text-[0.6rem] text-steel-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </nav>
          <div className="space-y-3 border-t border-white/10 bg-ink-850 px-6 py-6">
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-3 bg-signal-500 px-5 py-4 font-display text-base font-semibold uppercase tracking-[0.12em] text-white active:bg-signal-600"
            >
              <PhoneIcon className="h-5 w-5" />
              {business.phoneDisplay}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="block truncate text-center font-mono text-[0.72rem] text-steel-300"
            >
              {business.email}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
