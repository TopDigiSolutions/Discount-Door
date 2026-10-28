import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { business, reviews, type Review } from "@/data/business";
import { ArrowIcon, ChevronIcon, GoogleG, QuoteIcon } from "./Icons";
import { SectionHead, Stars } from "./ui";

const avatarTones = [
  "bg-signal-500 text-white",
  "bg-shop-500 text-white",
  "bg-hiviz-400 text-ink-900",
  "bg-ink-800 text-hiviz-400",
  "bg-steel-500 text-white",
  "bg-signal-700 text-white",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

function ReviewCard({
  review,
  index,
  tone = "light",
}: {
  review: Review;
  index: number;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <article
      data-reveal
      style={{ ["--reveal-delay" as string]: `${Math.min(index, 5) * 70}ms` }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border p-6 transition-all duration-500 hover:-translate-y-1.5",
        dark
          ? "border-white/12 bg-white/[0.045] hover:border-hiviz-400/50 hover:bg-white/[0.075]"
          : "border-ink-900/10 bg-white hover:border-signal-500/50 hover:shadow-[0_28px_54px_-34px_rgba(21,26,32,0.7)]",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-[3px] w-0 transition-all duration-700 group-hover:w-full",
          dark ? "bg-hiviz-400" : "bg-signal-500",
        )}
      />
      <QuoteIcon
        className={cn(
          "absolute right-5 top-5 h-8 w-8 transition-transform duration-500 group-hover:-scale-x-100",
          dark ? "text-white/8" : "text-ink-900/6",
        )}
      />
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold",
            avatarTones[index % avatarTones.length],
          )}
        >
          {initials(review.name)}
        </span>
        <span className="min-w-0">
          <span
            className={cn(
              "block truncate font-display text-[0.98rem] font-semibold uppercase tracking-[0.05em]",
              dark ? "text-white" : "text-ink-900",
            )}
          >
            {review.name}
          </span>
          <span
            className={cn(
              "block truncate font-mono text-[0.63rem] tracking-[0.06em]",
              dark ? "text-steel-400" : "text-steel-500",
            )}
          >
            {review.meta}
          </span>
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Stars starClass="h-4 w-4" />
        <span
          className={cn(
            "font-mono text-[0.63rem] tracking-[0.1em] uppercase",
            dark ? "text-steel-400" : "text-steel-500",
          )}
        >
          {review.when}
        </span>
      </div>

      <p
        className={cn(
          "mt-3 flex-1 text-[0.95rem] leading-relaxed",
          dark ? "text-steel-300" : "text-steel-600",
        )}
      >
        {review.text}
      </p>

      {review.response && (
        <div
          className={cn(
            "mt-5 border-l-2 pl-4 text-[0.85rem] leading-relaxed",
            dark ? "border-hiviz-400/60 text-steel-400" : "border-signal-500/60 text-steel-600",
          )}
        >
          <span
            className={cn(
              "tag mb-1.5 flex items-center gap-2 text-[0.55rem]",
              dark ? "text-hiviz-400" : "text-signal-600",
            )}
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-current text-[0.5rem] font-bold text-ink-900">
              S
            </span>
            Response from the owner
          </span>
          {review.response}
        </div>
      )}
    </article>
  );
}

function RatingSummary() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const bars = [
    { stars: 5, pct: 100 },
    { stars: 4, pct: 0 },
    { stars: 3, pct: 0 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 0 },
  ];
  return (
    <div
      ref={ref}
      data-reveal
      className="relative overflow-hidden border border-white/12 bg-ink-850 p-7 sm:p-9"
    >
      <div aria-hidden className="grid-lines-dark absolute inset-0 opacity-70" />
      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-end gap-5">
          <span className="display text-[clamp(3.6rem,9vw,5.6rem)] leading-[0.8] text-white">
            5<span className="text-signal-500">.0</span>
          </span>
          <span className="pb-2">
            <Stars starClass="h-5 w-5" />
            <span className="tag mt-2 block text-[0.6rem] text-steel-400">
              Based on {business.reviewCount}+ Google reviews
            </span>
          </span>
        </div>

        <div className="w-full max-w-xs space-y-1.5">
          {bars.map((b, i) => (
            <div key={b.stars} className="flex items-center gap-3">
              <span className="w-8 shrink-0 font-mono text-[0.65rem] text-steel-400">
                {b.stars}★
              </span>
              <span className="h-2 flex-1 overflow-hidden bg-white/10">
                <span
                  className="block h-full bg-hiviz-400 transition-[width] duration-[1.4s] ease-out"
                  style={{ width: shown ? `${b.pct}%` : "0%", transitionDelay: `${i * 120}ms` }}
                />
              </span>
              <span className="w-10 shrink-0 text-right font-mono text-[0.62rem] text-steel-500">
                {b.pct}%
              </span>
            </div>
          ))}
        </div>

        <a
          href={business.mapsProfile}
          target="_blank"
          rel="noreferrer"
          className="group flex shrink-0 items-center gap-3 border border-white/20 px-5 py-3.5 transition-colors duration-300 hover:border-hiviz-400 hover:bg-hiviz-400 hover:text-ink-900"
        >
          <GoogleG className="h-5 w-5" />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors group-hover:text-ink-900">
            See them on Google
          </span>
          <ArrowIcon className="h-4 w-4 text-hiviz-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink-900" />
        </a>
      </div>
    </div>
  );
}

export default function Reviews() {
  const railRef = useRef<HTMLDivElement>(null);
  const featured = reviews.filter((r) => r.featured);
  const more = reviews.filter((r) => !r.featured);

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 520), behavior: "smooth" });
  };

  return (
    <section id="reviews" className="relative overflow-hidden bg-concrete-50 py-24 lg:py-32">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,197,49,0.16),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index="04"
            kicker="Verified Google reviews"
            title={
              <>
                Neighbors keep
                <br />
                sending us <span className="text-signal-500">neighbors</span>
              </>
            }
            lead="Every review below comes from a real Houston-area customer. The common thread is simple: quick help, honest options, fair pricing and work that holds up."
            className="max-w-2xl"
          />
          <div data-reveal className="flex items-center gap-3">
            <button
              onClick={() => nudge(-1)}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center border border-ink-900/15 text-ink-900 transition-colors duration-300 hover:border-signal-500 hover:bg-signal-500 hover:text-white"
            >
              <ChevronIcon className="h-5 w-5 rotate-90" />
            </button>
            <button
              onClick={() => nudge(1)}
              aria-label="More reviews"
              className="flex h-11 w-11 items-center justify-center border border-ink-900/15 text-ink-900 transition-colors duration-300 hover:border-signal-500 hover:bg-signal-500 hover:text-white"
            >
              <ChevronIcon className="h-5 w-5 -rotate-90" />
            </button>
            <span className="tag ml-1 hidden text-[0.58rem] text-steel-500 sm:block">
              Drag / scroll →
            </span>
          </div>
        </div>

        <div className="mt-12">
          <RatingSummary />
        </div>

        {/* featured rail */}
        <div
          ref={railRef}
          className="rail mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
        >
          {featured.map((r, i) => (
            <div
              key={r.name}
              className="w-[min(24rem,84vw)] shrink-0 snap-start sm:w-[26rem]"
            >
              <ReviewCard review={r} index={i} />
            </div>
          ))}
        </div>

        {/* remaining reviews */}
        <div className="mt-6 flex items-center gap-4">
          <h3 className="display whitespace-nowrap text-lg uppercase tracking-[0.1em] text-ink-900">
            More from the neighborhood
          </h3>
          <span aria-hidden className="h-px flex-1 bg-ink-900/12" />
          <span className="tag whitespace-nowrap text-[0.58rem] text-steel-500">
            {more.length} more
          </span>
        </div>

        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {more.map((r, i) => (
            <div key={r.name} className="mb-5 break-inside-avoid">
              <ReviewCard review={r} index={i + 2} />
            </div>
          ))}
        </div>

        <p
          data-reveal
          className="mt-10 flex flex-col items-center gap-3 border border-dashed border-ink-900/20 px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <span className="text-[0.95rem] text-steel-600">
            <strong className="font-semibold text-ink-900">Worked on your door?</strong> A quick
            Google review keeps a small owner-operator busy all year — thank you.
          </span>
          <a
            href={business.mapsProfile}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-signal-600"
          >
            <span className="link-sweep">Leave a review</span>
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
