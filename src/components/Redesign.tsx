import { useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import heroImage from "@/assets/ddm-hero.jpg";
import detailImage from "@/assets/ddm-detail.jpg";
import { areas, business, navLinks, reviews, services, type Review } from "@/data/business";
import { media } from "@/data/media";
import { useActiveSection, useRevealObserver, useScrollProgress, useScrollTo, useScrolled } from "@/hooks/useScrollMotion";
import { ArrowIcon, ChevronIcon, CheckIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon, StarIcon } from "./Icons";
import { CloseIcon, MaximizeIcon } from "./GalleryIcons";

const navIds = navLinks.map((link) => link.id);

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-sun" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} className={className} />)}
    </span>
  );
}

function SectionIntro({
  number,
  eyebrow,
  title,
  body,
  dark = false,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div data-reveal className={`reveal max-w-3xl ${dark ? "text-paper" : "text-ink"}`}>
      <div className="flex items-center gap-3">
        <span className={`mono-label ${dark ? "text-sun" : "text-rust"}`}>{number}</span>
        <span className={`h-px w-12 ${dark ? "bg-sun/60" : "bg-rust/60"}`} />
        <span className={`mono-label ${dark ? "text-paper/55" : "text-ink/55"}`}>{eyebrow}</span>
      </div>
      <h2 className="serif mt-7 text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.035em]">
        {title}
      </h2>
      {body && <p className={`mt-7 max-w-2xl text-base leading-[1.8] ${dark ? "text-paper/65" : "text-ink/65"}`}>{body}</p>}
    </div>
  );
}

function ButtonLink({
  href,
  children,
  dark = false,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  dark?: boolean;
  onClick?: () => void;
}) {
  const className = `group inline-flex items-center justify-center gap-3 border px-5 py-3.5 text-sm font-bold tracking-[0.03em] transition-all duration-300 hover:-translate-y-0.5 ${dark ? "border-paper/30 text-paper hover:border-sun hover:bg-sun hover:text-ink" : "border-ink/20 text-ink hover:border-rust hover:bg-rust hover:text-white"}`;
  if (onClick) return <button onClick={onClick} className={className}>{children}<ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" /></button>;
  return <a href={href} className={className}>{children}<ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" /></a>;
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className={`flex h-10 w-10 items-center justify-center border text-xs font-extrabold tracking-[-0.08em] ${light ? "border-paper/40 text-paper" : "border-ink/25 text-ink"}`}>
        DDM
      </span>
      <span className="leading-[0.95]">
        <span className={`block text-[0.9rem] font-extrabold uppercase tracking-[0.09em] ${light ? "text-paper" : "text-ink"}`}>Discount Door</span>
        <span className={`mt-1 block font-mono text-[0.52rem] uppercase tracking-[0.19em] ${light ? "text-paper/55" : "text-ink/55"}`}>Mechanic LLC</span>
      </span>
    </span>
  );
}

function ModernHeader() {
  const scrolled = useScrolled(28);
  const progress = useScrollProgress();
  const active = useActiveSection(navIds);
  const scrollTo = useScrollTo();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollTo(id), 30);
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-paper/95 shadow-[0_12px_34px_-25px_rgba(23,32,27,0.7)] backdrop-blur-md" : "bg-paper/70 backdrop-blur-sm"}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <button onClick={() => go("home")} aria-label={`${business.name} home`}><Brand /></button>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.filter((link) => link.id !== "reviews").map((link) => (
              <button key={link.id} onClick={() => go(link.id)} className={`relative py-2 text-[0.7rem] font-bold uppercase tracking-[0.13em] transition-colors ${active === link.id ? "text-rust" : "text-ink/60 hover:text-ink"}`}>
                {link.label}
                <span className={`absolute bottom-0 left-0 h-px bg-rust transition-all ${active === link.id ? "w-full" : "w-0"}`} />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={business.phoneHref} className="hidden items-center gap-2 text-right sm:flex">
              <span className="hidden text-[0.62rem] font-bold uppercase tracking-[0.12em] text-ink/45 md:block">Call Damion</span>
              <span className="font-mono text-[0.72rem] font-semibold text-rust">{business.phoneDisplay}</span>
            </a>
            <button onClick={() => setMenuOpen(true)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-ink/20 lg:hidden" aria-label="Open navigation" aria-expanded={menuOpen}>
              <span className="h-px w-5 bg-ink" /><span className="h-px w-5 bg-rust" /><span className="h-px w-3 self-center bg-ink" />
            </button>
          </div>
        </div>
        <div className="h-px bg-ink/10"><div className="h-full bg-rust transition-[width]" style={{ width: `${progress * 100}%` }} /></div>
      </header>

      <div className={`fixed inset-0 z-[70] lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div onClick={() => setMenuOpen(false)} className={`absolute inset-0 bg-ink/60 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"}`} />
        <aside className={`absolute right-0 top-0 flex h-full w-[min(24rem,90vw)] flex-col bg-moss p-6 text-paper transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between"><Brand light /><button onClick={() => setMenuOpen(false)} className="flex h-10 w-10 items-center justify-center border border-paper/30" aria-label="Close navigation"><CloseIcon className="h-4 w-4" /></button></div>
          <nav className="mt-14 flex flex-1 flex-col">
            {navLinks.map((link, index) => <button key={link.id} onClick={() => go(link.id)} className="flex items-center justify-between border-b border-paper/15 py-5 text-left text-3xl font-medium transition-colors hover:text-sun"><span className="serif">{link.label}</span><span className="mono-label text-paper/45">{String(index + 1).padStart(2, "0")}</span></button>)}
          </nav>
          <a href={business.phoneHref} className="flex items-center justify-center gap-3 bg-rust px-5 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white"><PhoneIcon className="h-4 w-4" />{business.phoneDisplay}</a>
        </aside>
      </div>
    </>
  );
}

function ModernHero() {
  const scrollTo = useScrollTo();
  return (
    <section id="home" className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-ink pb-14 pt-32 text-paper sm:min-h-[840px] lg:min-h-[900px] lg:pb-20">
      <img src={heroImage} alt="Warm Houston-area home with a modern garage door" className="hero-image absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,32,27,0.95)_0%,rgba(23,32,27,0.78)_34%,rgba(23,32,27,0.18)_76%,rgba(23,32,27,0.26)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(23,32,27,0.72),transparent_52%)]" />
      <div className="absolute right-8 top-32 hidden h-56 w-56 rounded-full border border-paper/25 lg:block" />
      <div className="absolute right-24 top-48 hidden h-24 w-24 rounded-full border border-rust/70 lg:block" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 lg:px-10">
        <div className="max-w-3xl">
          <div className="reveal mb-7 flex items-center gap-3 text-paper/65" data-reveal style={{ ["--delay" as string]: "80ms" }}>
            <span className="h-px w-12 bg-sun" /><span className="mono-label">Houston · Katy · League City · surrounding areas</span>
          </div>
          <h1 className="serif max-w-4xl text-[clamp(4.2rem,10vw,9.5rem)] leading-[0.86] tracking-[-0.05em]">
            <span className="hero-title-line"><span style={{ ["--line-delay" as string]: "100ms" }}>A better</span></span>
            <span className="hero-title-line"><span style={{ ["--line-delay" as string]: "220ms" }}>way through</span></span>
            <span className="hero-title-line text-sun"><span style={{ ["--line-delay" as string]: "340ms" }}>the door.</span></span>
          </h1>
          <p data-reveal className="reveal mt-8 max-w-xl text-base leading-[1.75] text-paper/72 sm:text-lg" style={{ ["--delay" as string]: "450ms" }}>
            Garage door repair that is quick when you need it, fair when you see the price, and clear from the first call. Discount Door Mechanic serves Houston and the communities around it.
          </p>
          <div data-reveal className="reveal mt-9 flex flex-wrap gap-3" style={{ ["--delay" as string]: "540ms" }}>
            <a href={business.phoneHref} className="group inline-flex items-center gap-3 bg-rust px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-rust-dark"><PhoneIcon className="h-4 w-4" />Call {business.phoneDisplay}</a>
            <ButtonLink onClick={() => scrollTo("contact")} dark>Request service</ButtonLink>
          </div>
          <div data-reveal className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-paper/60" style={{ ["--delay" as string]: "630ms" }}>
            <span className="flex items-center gap-2"><Stars className="h-3.5 w-3.5" /><span className="font-mono text-[0.66rem]">{business.rating.toFixed(1)} on Google</span></span>
            <span className="h-4 w-px bg-paper/25" />
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em]">No hidden charges</span>
            <span className="h-4 w-px bg-paper/25" />
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em]">Same-day when available</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-5 hidden max-w-[200px] border-l border-sun/60 pl-4 text-paper/60 xl:block">
          <span className="mono-label text-sun">01 / 08</span>
          <p className="mt-3 text-xs leading-relaxed">A neighborhood garage door mechanic for the jobs that cannot wait.</p>
        </div>
      </div>
    </section>
  );
}

function ProofBand() {
  return (
    <section className="border-b border-line bg-paper-deep">
      <div className="mx-auto grid max-w-[1440px] divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
        {[
          ["01", "Fair pricing", "Great work should not come with a ridiculous price."],
          ["02", "Clear choices", "We explain the repair so you can decide with confidence."],
          ["03", "Fast response", "Same-day and after-hours help when the schedule allows."],
        ].map(([number, title, text]) => <div key={title} className="flex gap-4 py-7 sm:px-6 first:pl-0 last:pr-0"><span className="mono-label pt-1 text-rust">{number}</span><span><span className="block text-sm font-extrabold uppercase tracking-[0.06em] text-ink">{title}</span><span className="mt-1 block max-w-xs text-sm leading-relaxed text-ink/55">{text}</span></span></div>)}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-28 lg:py-40">
      <div aria-hidden className="paper-grid absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 lg:grid-cols-12 lg:gap-24 lg:px-10">
        <div className="lg:col-span-5">
          <div data-reveal className="reveal-left reveal relative" style={{ ["--delay" as string]: "100ms" }}>
            <div className="absolute -bottom-5 -right-5 h-full w-full border border-rust/55" />
            <img src={detailImage} alt="Hands adjusting a residential garage door roller and track" className="relative aspect-[4/5] w-full object-cover" loading="lazy" />
            <div className="absolute bottom-5 left-5 bg-paper px-4 py-3 shadow-[0_18px_40px_-28px_rgba(23,32,27,0.7)]"><span className="mono-label text-rust">DDM / 2026</span><span className="mt-1 block text-xs text-ink/55">Good work. Fair price. No theatre.</span></div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-6">
          <SectionIntro number="02" eyebrow="The difference is how it feels" title={<>Repair without the <em className="text-rust">runaround.</em></>} body={<>A garage door is part of your home's daily rhythm. When it breaks, you want someone who shows up, tells you the truth and makes the fix feel simple. Discount Door Mechanic was built around that exact experience — practical work, honest options and a price that makes sense.</>} />
          <div className="mt-12 grid gap-7 border-t border-line pt-7 sm:grid-cols-2">
            {["Damion explains what failed before touching a tool.", "You get choices when more than one repair makes sense.", "The work is tested, adjusted and left cleaner than it was found.", "If something needs attention again, you can reach us."].map((item, index) => <div key={item} data-reveal className="reveal flex gap-3" style={{ ["--delay" as string]: `${180 + index * 80}ms` }}><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-rust" /><span className="text-sm leading-relaxed text-ink/70">{item}</span></div>)}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"><span className="serif text-4xl text-ink">{business.owner}</span><span className="h-px w-12 bg-rust" /><span className="mono-label text-ink/50">Discount Door Mechanic LLC · Houston, TX</span></div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="dark-noise relative overflow-hidden bg-moss py-28 text-paper lg:py-40">
      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 lg:grid-cols-12 lg:gap-24 lg:px-10">
        <div className="lg:col-span-4"><div className="lg:sticky lg:top-32"><SectionIntro number="03" eyebrow="The repair list" dark title={<>What is wrong<br />with your <em className="text-sun">door?</em></>} body="Springs, openers, cables, rollers, tracks, sensors and doors that have met a vehicle. Every job starts with the actual problem, not a pre-written sales pitch." /><div data-reveal className="reveal mt-10 border-t border-paper/20 pt-5" style={{ ["--delay" as string]: "180ms" }}><span className="mono-label text-sun">Call with a symptom</span><a href={business.phoneHref} className="mt-3 flex items-center gap-3 text-lg font-bold text-paper underline decoration-rust decoration-2 underline-offset-8 transition-colors hover:text-sun"><PhoneIcon className="h-5 w-5 text-rust" />{business.phoneDisplay}</a></div></div></div>
          <div className="lg:col-span-8"><div className="border-t border-paper/20">{services.map((service, index) => { const isOpen = open === index; return <div key={service.id} className="service-row border-b border-paper/15" data-open={isOpen}><button onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen} className="relative flex w-full items-start gap-4 py-6 text-left sm:gap-7 sm:py-7"><span className="mono-label mt-2 w-7 shrink-0 text-paper/40">{service.no}</span><span className="flex-1"><span className="flex items-center justify-between gap-5"><span className="serif text-[clamp(1.7rem,3vw,2.8rem)] leading-none text-paper">{service.title}</span><ArrowIcon className="service-arrow h-5 w-5 shrink-0 text-sun" /></span><span className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><span className="overflow-hidden"><span className="mt-4 block max-w-2xl text-sm leading-[1.75] text-paper/60">{service.summary}</span><span className="mt-5 flex flex-wrap gap-x-6 gap-y-2">{service.points.map((point) => <span key={point} className="flex items-center gap-2 text-xs text-paper/70"><CheckIcon className="h-3.5 w-3.5 text-sun" />{point}</span>)}</span></span></span></span></button><span className="service-rule block h-px w-0 bg-rust" /></div>; })}</div></div>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: media.houstonHomes, title: "Houston homes", note: "The kind of door we work on every week" },
  { src: media.workshopWorker, title: "Hands on the problem", note: "A quiet repair starts with a good diagnosis" },
  { src: media.hardwareSprings, title: "The working parts", note: "Springs, hardware and the details that matter" },
  { src: media.modernHomeGarage, title: "Better arrivals", note: "Reliable operation changes the way home feels" },
  { src: media.handTools, title: "Ready for the job", note: "Good tools. No unnecessary drama." },
  { src: media.doorRoundWindows, title: "The finished door", note: "Repair, upgrade or reset — done with care" },
];

function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const step = (direction: 1 | -1) => { if (selected !== null) setSelected((selected + direction + galleryImages.length) % galleryImages.length); };
  return (
    <section id="gallery" className="relative overflow-hidden bg-paper-deep py-28 lg:py-40">
      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionIntro number="04" eyebrow="Pictures gallery" title={<>Good work leaves a <em className="text-rust">trace.</em></>} body="A closer look at the homes, tools, hardware and hands-on service behind Discount Door Mechanic." /><span data-reveal className="reveal mono-label text-ink/45" style={{ ["--delay" as string]: "180ms" }}>Houston · Texas</span></div><div className="mt-14 grid auto-rows-[13rem] grid-cols-2 gap-3 sm:auto-rows-[16rem] sm:grid-cols-4 sm:gap-5">{galleryImages.map((image, index) => <button key={image.title} data-reveal className="gallery-tile reveal group relative overflow-hidden text-left" style={{ ["--delay" as string]: `${index * 70}ms` }} onClick={() => setSelected(index)}><img src={image.src} alt={image.title} className="gallery-image h-full w-full object-cover" loading="lazy" /><span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" /><span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5"><span><span className="serif block text-xl text-white sm:text-2xl">{image.title}</span><span className="mt-1 block text-xs text-white/65 sm:text-sm">{image.note}</span></span><span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/35 text-white transition-colors group-hover:border-sun group-hover:bg-sun group-hover:text-ink"><MaximizeIcon className="h-4 w-4" /></span></span></button>)}</div></div>
      {selected !== null && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-5 backdrop-blur-md sm:p-10" onClick={() => setSelected(null)} role="dialog" aria-modal="true"><button onClick={() => setSelected(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-paper/30 text-paper hover:border-sun hover:bg-sun hover:text-ink" aria-label="Close gallery"><CloseIcon className="h-5 w-5" /></button><button onClick={(event) => { event.stopPropagation(); step(-1); }} className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/30 text-paper hover:border-sun hover:bg-sun hover:text-ink" aria-label="Previous image"><ChevronIcon className="h-5 w-5 rotate-90" /></button><figure onClick={(event) => event.stopPropagation()} className="max-w-5xl"><img src={galleryImages[selected].src} alt={galleryImages[selected].title} className="max-h-[74vh] w-auto max-w-full object-contain" /><figcaption className="mt-4 flex items-end justify-between gap-6 text-paper"><span><span className="serif text-2xl">{galleryImages[selected].title}</span><span className="mt-1 block text-sm text-paper/55">{galleryImages[selected].note}</span></span><span className="mono-label text-sun">{String(selected + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</span></figcaption></figure><button onClick={(event) => { event.stopPropagation(); step(1); }} className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/30 text-paper hover:border-sun hover:bg-sun hover:text-ink" aria-label="Next image"><ChevronIcon className="h-5 w-5 -rotate-90" /></button></div>}
    </section>
  );
}

function ReviewQuote({ review, index }: { review: Review; index: number }) {
  return <article data-reveal className="reveal min-w-[min(88vw,27rem)] snap-start border-t border-paper/20 pt-5 sm:min-w-[29rem]" style={{ ["--delay" as string]: `${index * 80}ms` }}><div className="flex items-center justify-between gap-4"><span className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun text-xs font-extrabold text-ink">{review.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span><span><span className="block text-sm font-bold text-paper">{review.name}</span><span className="block font-mono text-[0.58rem] uppercase tracking-[0.06em] text-paper/40">{review.when} · Google</span></span></span><Stars className="h-3.5 w-3.5" /></div><p className="mt-5 text-lg leading-[1.65] text-paper/75">“{review.text}”</p>{review.response && <p className="mt-5 border-l border-rust pl-4 text-xs leading-[1.7] text-paper/45"><span className="mono-label mb-1 block text-[0.55rem] text-rust">Owner response</span>{review.response}</p>}</article>;
}

function ReviewsSection() {
  const railRef = useRef<HTMLDivElement>(null);
  return <section id="reviews" className="dark-noise relative overflow-hidden bg-ink py-28 text-paper lg:py-40"><div className="relative mx-auto max-w-[1440px] px-5 lg:px-10"><div className="grid gap-14 lg:grid-cols-12 lg:gap-24"><div className="lg:col-span-5"><SectionIntro number="05" eyebrow="What neighbors say" dark title={<>The price is good.<br /><em className="text-sun">The work is better.</em></>} body={<>More than a rating, these are the patterns customers repeat: fast responses, clean explanations, affordable repairs and doors that keep working.</>} /><a href={business.mapsProfile} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-4 border-b border-sun/50 pb-3 text-paper transition-colors hover:text-sun"><span className="flex items-center gap-2"><Stars /><span className="serif text-2xl">{business.rating.toFixed(1)}</span></span><span className="mono-label text-paper/50">{business.reviewCount}+ Google reviews</span><ArrowIcon className="h-4 w-4" /></a></div><div className="lg:col-span-7"><div ref={railRef} className="review-rail flex snap-x gap-8 overflow-x-auto pb-7">{reviews.filter((review) => review.featured).slice(0, 6).map((review, index) => <ReviewQuote key={review.name} review={review} index={index} />)}</div><div className="mt-5 flex items-center gap-3 text-paper/35"><span className="h-px w-20 bg-paper/25" /><span className="mono-label text-[0.58rem]">Drag to read more</span></div></div></div></div></section>;
}

function AreasSection() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => areas.filter((area) => area.city.toLowerCase().includes(query.toLowerCase()) || area.zone.toLowerCase().includes(query.toLowerCase())), [query]);
  return <section id="areas" className="paper-grid relative overflow-hidden bg-paper py-28 lg:py-40"><div className="relative mx-auto max-w-[1440px] px-5 lg:px-10"><div className="grid gap-14 lg:grid-cols-12 lg:gap-24"><div className="lg:col-span-5"><SectionIntro number="06" eyebrow="Where we work" title={<>Houston, from the <em className="text-rust">inside out.</em></>} body="Katy to League City, Cypress to The Woodlands and the neighborhoods between them. If the door is in the Houston area, start with a call." /><div className="mt-10 flex items-center gap-3 border-b border-ink/20 pb-3"><PinIcon className="h-5 w-5 text-rust" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search your city" className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/35" /><span className="mono-label text-ink/35">{filtered.length}</span></div><div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">{filtered.slice(0, 30).map((area, index) => <span key={area.city} data-reveal className="reveal flex items-center gap-2 text-sm text-ink/70" style={{ ["--delay" as string]: `${Math.min(index, 10) * 30}ms` }}><span className="h-1.5 w-1.5 rounded-full bg-rust" />{area.city}</span>)}</div><p className="mt-8 text-xs leading-relaxed text-ink/45">Do not see your city? Call anyway. The list is a guide, not a boundary.</p></div><div className="lg:col-span-7"><div className="relative h-full min-h-[500px] overflow-hidden bg-moss p-6 text-paper sm:p-8"><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, transparent 0 21%, rgba(244,239,231,.25) 21.2% 21.5%, transparent 21.7% 38%, rgba(244,239,231,.2) 38.2% 38.5%, transparent 38.7% 58%, rgba(244,239,231,.15) 58.2% 58.5%, transparent 58.7%), linear-gradient(rgba(244,239,231,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,231,.15) 1px, transparent 1px)", backgroundSize: "100% 100%, 44px 44px, 44px 44px" }} /><div className="relative flex items-start justify-between"><span className="mono-label text-sun">Service area / HOU</span><span className="mono-label text-paper/45">40+ cities</span></div><div className="relative flex min-h-[390px] items-center justify-center"><span className="absolute h-28 w-28 rounded-full border border-sun/40" /><span className="absolute h-56 w-56 rounded-full border border-paper/20" /><span className="absolute h-[22rem] w-[22rem] rounded-full border border-paper/15" /><span className="float-gently relative flex h-24 w-24 flex-col items-center justify-center rounded-full bg-rust text-center shadow-[0_0_0_12px_rgba(201,96,50,.14)]"><PinIcon className="h-6 w-6" /><span className="mt-1 font-mono text-[0.52rem] uppercase tracking-[0.12em]">Houston</span></span><span className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-sun" /><span className="absolute right-[19%] top-[23%] h-2 w-2 rounded-full bg-sun" /><span className="absolute left-[27%] bottom-[19%] h-2 w-2 rounded-full bg-sun" /><span className="absolute right-[25%] bottom-[26%] h-2 w-2 rounded-full bg-sun" /><span className="absolute left-[12%] top-[42%] font-mono text-[0.55rem] text-paper/55">Katy</span><span className="absolute right-[10%] top-[37%] font-mono text-[0.55rem] text-paper/55">Spring</span><span className="absolute left-[17%] bottom-[12%] font-mono text-[0.55rem] text-paper/55">Sugar Land</span><span className="absolute right-[12%] bottom-[17%] font-mono text-[0.55rem] text-paper/55">League City</span></div><div className="relative flex items-end justify-between border-t border-paper/20 pt-4"><span className="text-sm text-paper/60">Neighborhood service. Metro-wide reach.</span><a href={business.phoneHref} className="text-sm font-bold text-sun underline decoration-rust underline-offset-4">Call the mechanic</a></div></div></div></div></div></section>;
}

function MapSection() {
  return <section id="map" className="relative overflow-hidden bg-paper-deep py-28 lg:py-40"><div className="relative mx-auto max-w-[1440px] px-5 lg:px-10"><div className="grid gap-12 lg:grid-cols-12 lg:gap-24"><div className="lg:col-span-4"><SectionIntro number="07" eyebrow="Find the coverage" title={<>A map to the<br /><em className="text-rust">right door.</em></>} body="Discount Door Mechanic is a mobile service. We come to your home across the Houston area, so you can stay where the problem is." /><div className="mt-10 space-y-5 border-t border-line pt-5"><a href={business.phoneHref} className="flex items-center gap-3 text-sm font-bold text-ink transition-colors hover:text-rust"><PhoneIcon className="h-5 w-5 text-rust" />{business.phoneDisplay}</a><a href={`mailto:${business.email}`} className="flex items-center gap-3 text-sm font-bold text-ink transition-colors hover:text-rust"><MailIcon className="h-5 w-5 text-rust" />{business.email}</a><span className="flex items-center gap-3 text-sm text-ink/60"><ClockIcon className="h-5 w-5 text-rust" />Same-day calls when available</span></div></div><div className="lg:col-span-8"><div data-reveal className="reveal relative overflow-hidden border border-line bg-ink" style={{ ["--delay" as string]: "120ms" }}><iframe title="Discount Door Mechanic Houston service area map" src="https://www.google.com/maps?q=Discount%20Door%20Mechanic%20LLC%2C%20Houston%2C%20TX&z=9&output=embed" loading="lazy" className="map-filter h-[430px] w-full border-0 grayscale-[0.2] sm:h-[540px]" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className="absolute bottom-4 left-4 bg-paper px-4 py-3"><span className="mono-label text-rust">Mobile service area</span><span className="mt-1 block text-sm font-bold text-ink">Houston + surrounding communities</span></div></div></div></div></div></section>;
}

type FormState = { name: string; phone: string; email: string; city: string; service: string; message: string };

function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", city: "", service: services[0].title, message: "" });
  const [sent, setSent] = useState(false);
  const set = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const mailto = useMemo(() => { const subject = `Garage door repair request - ${form.service}`; const body = [`Name: ${form.name}`, `Phone: ${form.phone}`, `Email: ${form.email}`, `City: ${form.city}`, `Service: ${form.service}`, "", form.message].join("\n"); return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; }, [form]);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };
  return <section id="contact" className="dark-noise relative overflow-hidden bg-ink py-28 text-paper lg:py-40"><div className="relative mx-auto max-w-[1440px] px-5 lg:px-10"><div className="grid gap-14 lg:grid-cols-12 lg:gap-24"><div className="lg:col-span-5"><SectionIntro number="08" eyebrow="Contact us" dark title={<>Let's get your<br /><em className="text-sun">door moving.</em></>} body="Call for the fastest answer, or send the details below. We will respond with a clear next step and a price that makes sense." /><div className="mt-10 border-t border-paper/20 pt-5"><span className="mono-label text-paper/40">Prefer the phone?</span><a href={business.phoneHref} className="mt-3 flex items-center gap-3 text-2xl font-bold text-sun"><PhoneIcon className="h-5 w-5 text-rust" />{business.phoneDisplay}</a><p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/45">Fast response, fair pricing and no confusing handoff.</p></div></div><div className="lg:col-span-7"><div className="border border-paper/20 bg-paper/5 p-6 sm:p-9">{sent ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-sun text-ink"><CheckIcon className="h-7 w-7" /></span><h3 className="serif mt-7 text-4xl">Your request is ready.</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-paper/60">Open the prepared email below and it will go directly to {business.email}.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><a href={mailto} className="inline-flex items-center gap-3 bg-rust px-5 py-3.5 text-sm font-bold text-white hover:bg-rust-dark"><MailIcon className="h-4 w-4" />Open email</a><a href={business.phoneHref} className="inline-flex items-center gap-3 border border-paper/30 px-5 py-3.5 text-sm font-bold hover:border-sun hover:text-sun"><PhoneIcon className="h-4 w-4" />Call instead</a></div><button onClick={() => setSent(false)} className="mt-7 text-xs text-paper/45 underline underline-offset-4">Send another request</button></div> : <form onSubmit={submit} className="space-y-6"><div className="grid gap-5 sm:grid-cols-2">{(["name", "phone", "email", "city"] as const).map((key) => <label key={key} className="block"><span className="mono-label mb-2 block text-paper/45">{key === "name" ? "Your name" : key === "phone" ? "Phone number" : key === "email" ? "Email" : "City"}{key === "name" || key === "phone" ? " *" : ""}</span><input required={key === "name" || key === "phone"} type={key === "email" ? "email" : key === "phone" ? "tel" : "text"} value={form[key]} onChange={(event) => set(key, event.target.value)} placeholder={key === "name" ? "Alex Martinez" : key === "phone" ? "(832) 555-0134" : key === "email" ? "you@email.com" : "Katy"} className="w-full border-b border-paper/25 bg-transparent px-0 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper/25 focus:border-sun" /></label>)}</div><label className="block"><span className="mono-label mb-2 block text-paper/45">What do you need?</span><select value={form.service} onChange={(event) => set("service", event.target.value)} className="w-full border-b border-paper/25 bg-transparent px-0 py-3 text-sm text-paper outline-none focus:border-sun">{services.map((service) => <option key={service.id} value={service.title} className="bg-ink">{service.title}</option>)}</select></label><label className="block"><span className="mono-label mb-2 block text-paper/45">Tell us what the door is doing *</span><textarea required rows={4} value={form.message} onChange={(event) => set("message", event.target.value)} placeholder="Door will not open, loud bang, off track..." className="w-full resize-y border-b border-paper/25 bg-transparent px-0 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper/25 focus:border-sun" /></label><div className="flex flex-col gap-4 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between"><span className="max-w-xs text-xs leading-relaxed text-paper/40">No obligation. No hidden charges. Just a useful reply.</span><button type="submit" className="group inline-flex items-center justify-center gap-3 bg-sun px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-paper">Send request<ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" /></button></div></form>}</div></div></div></div></section>;
}

function ModernFooter() {
  const scrollTo = useScrollTo();
  return <footer className="bg-ink-soft py-14 text-paper"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="flex flex-col justify-between gap-10 border-b border-paper/15 pb-10 md:flex-row md:items-end"><div><Brand light /><p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/50">Fair-priced garage door repair for Houston and the surrounding communities. Good work, clearly explained.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3">{navLinks.map((link) => <button key={link.id} onClick={() => scrollTo(link.id)} className="underline-grow pb-1 text-xs font-bold uppercase tracking-[0.1em] text-paper/55 hover:text-paper">{link.label}</button>)}</div></div><div className="flex flex-col justify-between gap-3 pt-6 text-xs text-paper/35 sm:flex-row"><span>© {new Date().getFullYear()} Discount Door Mechanic LLC · Houston, TX</span><span>{business.email} · {business.phoneDisplay}</span></div></div></footer>;
}

export default function Redesign() {
  useRevealObserver([]);
  return <div className="min-h-screen bg-paper font-body text-ink"><ModernHeader /><main><ModernHero /><ProofBand /><AboutSection /><ServicesSection /><GallerySection /><ReviewsSection /><AreasSection /><MapSection /><ContactSection /></main><ModernFooter /><div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-paper/15 bg-ink/95 p-2 backdrop-blur-md lg:hidden"><a href={business.phoneHref} className="flex flex-1 items-center justify-center gap-2 bg-rust py-3 text-xs font-bold uppercase tracking-[0.08em] text-white"><PhoneIcon className="h-4 w-4" />Call</a><a href={`sms:${business.phoneHref.replace("tel:", "")}`} className="flex flex-1 items-center justify-center gap-2 border border-paper/25 py-3 text-xs font-bold uppercase tracking-[0.08em] text-paper"><span className="text-sm">Text</span></a><a href="#contact" className="flex flex-1 items-center justify-center gap-2 border border-sun/50 py-3 text-xs font-bold uppercase tracking-[0.08em] text-sun">Request</a></div><div className="h-14 bg-ink-soft lg:hidden" /></div>;
}