import { useState } from "react";
import { cn } from "@/utils/cn";
import { media } from "@/data/media";
import { ChevronIcon, CloseIcon, MaximizeIcon } from "./GalleryIcons";
import { SectionHead } from "./ui";

const gallery = [
  { src: media.houstonHomes, title: "Residential garage doors", note: "Houston homes and neighborhoods" },
  { src: media.workshopWorker, title: "Hands-on repair", note: "Diagnose the cause, not just the noise" },
  { src: media.hardwareSprings, title: "Spring and hardware work", note: "The parts that keep the door balanced" },
  { src: media.handTools, title: "Tools ready to go", note: "Practical equipment for a clean repair" },
  { src: media.toolboxWorker, title: "On-site service", note: "Fast help at the driveway" },
  { src: media.modernHomeGarage, title: "Quiet, reliable operation", note: "A better door changes the whole arrival home" },
  { src: media.toolboxes, title: "Repair day details", note: "The right tools for the right fix" },
  { src: media.doorRoundWindows, title: "Door style and function", note: "Repairs and upgrades across Houston" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const move = (direction: 1 | -1) => {
    if (selected === null) return;
    setSelected((selected + direction + gallery.length) % gallery.length);
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-concrete-50 py-24 lg:py-32">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-45" />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index="06"
            kicker="Pictures gallery"
            title={
              <>
                The work is in
                <br />
                the <span className="text-signal-500">details</span>
              </>
            }
            lead="A look at the homes, hardware and hands-on work behind the service. Tap any image to view it larger."
            className="max-w-2xl"
          />
          <span data-reveal className="tag text-[0.6rem] text-steel-500">
            Houston · Katy · League City · and beyond
          </span>
        </div>

        <div className="mt-14 grid auto-rows-[12rem] grid-cols-2 gap-3 sm:auto-rows-[15rem] sm:grid-cols-4 sm:gap-5">
          {gallery.map((image, index) => (
            <button
              key={image.title}
              onClick={() => setSelected(index)}
              data-reveal="scale"
              style={{ ["--reveal-delay" as string]: `${Math.min(index, 7) * 70}ms` }}
              className={cn(
                "group relative overflow-hidden border border-ink-900/10 bg-ink-900 text-left",
                index === 0 && "col-span-2 row-span-2",
                index === 3 && "sm:col-span-2",
                index === 6 && "sm:col-span-2",
              )}
              aria-label={`Open ${image.title} gallery image`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover grayscale-[0.28] transition-all duration-[1s] ease-out group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                <span>
                  <span className="display block text-[1.05rem] text-white sm:text-xl">{image.title}</span>
                  <span className="mt-1 block text-[0.76rem] text-steel-300 sm:text-sm">{image.note}</span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/25 text-white transition-all duration-300 group-hover:border-hiviz-400 group-hover:bg-hiviz-400 group-hover:text-ink-900">
                  <MaximizeIcon className="h-4 w-4" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/95 p-5 backdrop-blur-md sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-signal-500 hover:bg-signal-500"
            aria-label="Close gallery"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); move(-1); }}
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:border-hiviz-400 hover:bg-hiviz-400 hover:text-ink-900 sm:left-8"
            aria-label="Previous gallery image"
          >
            <ChevronIcon className="h-5 w-5 rotate-90" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="relative max-h-[88vh] max-w-5xl">
            <img
              src={gallery[selected].src}
              alt={gallery[selected].title}
              className="max-h-[78vh] w-auto max-w-full object-contain shadow-[0_32px_80px_-35px_rgba(0,0,0,0.9)]"
            />
            <figcaption className="mt-4 flex items-center justify-between gap-6">
              <span>
                <span className="display block text-xl text-white">{gallery[selected].title}</span>
                <span className="mt-1 block text-sm text-steel-400">{gallery[selected].note}</span>
              </span>
              <span className="tag shrink-0 text-[0.58rem] text-hiviz-400">
                {String(selected + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); move(1); }}
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:border-hiviz-400 hover:bg-hiviz-400 hover:text-ink-900 sm:right-8"
            aria-label="Next gallery image"
          >
            <ChevronIcon className="h-5 w-5 -rotate-90" />
          </button>
        </div>
      )}
    </section>
  );
}