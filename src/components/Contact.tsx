import { useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { areas, business, services } from "@/data/business";
import {
  ArrowIcon,
  CheckIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
  TruckIcon,
  VideoIcon,
} from "./Icons";
import { SectionHead } from "./ui";

type Form = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  urgency: string;
  message: string;
};

const emptyForm: Form = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: services[0].title,
  urgency: "As soon as possible",
  message: "",
};

const urgencies = ["As soon as possible", "This week", "Planning ahead"];

const nextSteps = [
  {
    icon: PhoneIcon,
    title: "You hear back fast",
    body: "The owner reads every message himself. Most calls and texts get an answer within the hour.",
  },
  {
    icon: VideoIcon,
    title: "Send a video",
    body: "Film the door trying to move. Nine times out of ten we can name the problem from the clip.",
  },
  {
    icon: TruckIcon,
    title: "Get an upfront price",
    body: "You approve the number before anything is scheduled — and that's the number you pay.",
  },
];

function fieldClass(hasError?: boolean) {
  return cn(
    "w-full border bg-white/[0.04] px-4 py-3.5 text-[0.95rem] text-white outline-none transition-all duration-300 placeholder:text-steel-500",
    "focus:border-signal-500 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(255,90,31,0.16)]",
    hasError ? "border-signal-500 bg-signal-500/8" : "border-white/15 hover:border-white/30",
  );
}

export default function Contact() {
  const [form, setForm] = useState<Form>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const cityList = useMemo(() => areas.map((a) => a.city), []);

  const set = (key: keyof Form) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const mailtoHref = useMemo(() => {
    const subject = `Garage door repair request - ${form.service} (${form.city || "Houston area"})`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "—"}`,
      `City: ${form.city || "—"}`,
      `Service needed: ${form.service}`,
      `Timing: ${form.urgency}`,
      "",
      "Details:",
      form.message || "—",
      "",
      "Sent from dfwelitegaragerepair.com",
    ].join("\n");
    return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (form.name.trim().length < 2) e.name = "Please tell us your name";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) e.phone = "Enter a 10-digit phone number";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "That email looks off";
    if (form.message.trim().length < 10) e.message = "A sentence or two about the problem helps";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-24 text-white lg:py-32">
      <div aria-hidden className="grid-lines-dark absolute inset-0" />
      <div
        aria-hidden
        className="absolute -left-32 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,197,49,0.13),transparent_64%)]"
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.2),transparent_64%)]"
      />
      <div aria-hidden className="grain absolute inset-0" />
      <div aria-hidden className="hazard absolute inset-x-0 top-0 h-2" />

      <div className="relative mx-auto max-w-[1400px] px-5 pt-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
          {/* left */}
          <div className="lg:col-span-5">
            <SectionHead
              index="09"
              tone="dark"
              kicker="Contact us"
              title={
                <>
                  Tell us what
                  <br />
                  the door is doing
                </>
              }
              lead="Fill this out and it lands with the Discount Door Mechanic team. Prefer to talk? Call or text — you will get a direct response, not a confusing phone tree."
            />

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="group flex flex-1 items-center gap-4 bg-signal-500 px-5 py-4 transition-colors duration-300 hover:bg-signal-600"
              >
                <PhoneIcon className="h-6 w-6 text-white transition-transform duration-300 group-hover:-rotate-12" />
                <span>
                  <span className="tag block text-[0.55rem] text-white/75">Call or text</span>
                  <span className="display block text-[1.15rem] tracking-[0.03em] text-white">
                    {business.phoneDisplay}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="group flex flex-1 items-center gap-4 border border-white/20 px-5 py-4 transition-colors duration-300 hover:border-hiviz-400 hover:bg-white/5"
              >
                <MailIcon className="h-6 w-6 text-hiviz-400" />
                <span className="min-w-0">
                  <span className="tag block text-[0.55rem] text-steel-400">Email</span>
                  <span className="block truncate font-mono text-[0.78rem] text-white">
                    {business.email}
                  </span>
                </span>
              </a>
            </div>

            <ul className="mt-10 space-y-5">
              {nextSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.title}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                    className="group flex gap-4 border-b border-white/10 pb-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-hiviz-400 transition-all duration-500 group-hover:border-signal-500 group-hover:bg-signal-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="tag block text-[0.55rem] text-steel-500">
                        Step {i + 1}
                      </span>
                      <span className="mt-1 block font-display text-[1.02rem] uppercase tracking-[0.05em] text-white">
                        {s.title}
                      </span>
                      <span className="mt-1 block max-w-sm text-[0.9rem] leading-relaxed text-steel-400">
                        {s.body}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <p
              data-reveal
              className="mt-8 flex items-start gap-3 border border-white/12 bg-white/[0.04] p-4 text-[0.85rem] leading-relaxed text-steel-300"
            >
              <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-hiviz-400" />
              Your details are only used to answer your request. No lists, no spam, no sales
              follow-up from anyone but the Discount Door Mechanic team.
            </p>
          </div>

          {/* right — form */}
          <div className="lg:col-span-7">
            <div
              data-reveal="scale"
              className="relative border border-white/12 bg-ink-850/85 p-6 backdrop-blur-sm sm:p-9"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <h3 className="display text-2xl text-white">Request service</h3>
                  <p className="mt-1 text-[0.85rem] text-steel-400">
                    Takes about 30 seconds. We reply the same business day.
                  </p>
                </div>
                <span className="tag hidden items-center gap-2 border border-hiviz-400/40 bg-hiviz-400/10 px-3 py-1.5 text-[0.55rem] text-hiviz-400 sm:flex">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hiviz-400 opacity-70" />
                    <span className="relative h-2 w-2 rounded-full bg-hiviz-400" />
                  </span>
                  Accepting jobs
                </span>
              </div>

              {status === "sent" ? (
                <div className="py-10 text-center">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-hiviz-400 bg-hiviz-400/10 text-hiviz-400">
                    <CheckIcon className="h-9 w-9" />
                  </span>
                  <h4 className="display mt-6 text-3xl text-white">
                    You're set, {form.name.split(" ")[0]}
                  </h4>
                  <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-steel-300">
                    Your request for <strong className="text-white">{form.service}</strong> in{" "}
                    <strong className="text-white">{form.city || "Houston area"}</strong> is ready to go.
                    Hit send below and it opens a prepared request email — or call for an instant
                    answer.
                  </p>
                  <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
                    <a
                      href={mailtoHref}
                      className="group inline-flex items-center justify-center gap-3 bg-signal-500 px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-signal-600"
                    >
                      <MailIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                      Send it now
                    </a>
                    <a
                      href={business.phoneHref}
                      className="inline-flex items-center justify-center gap-3 border border-white/25 px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-hiviz-400 hover:text-hiviz-400"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      Call instead
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setForm(emptyForm);
                      setStatus("idle");
                    }}
                    className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-steel-400 underline-offset-4 transition hover:text-hiviz-400 hover:underline"
                  >
                    Start another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-7 space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="tag mb-2 block text-[0.58rem] text-steel-400">
                        Your name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        placeholder="Alex Martinez"
                        className={fieldClass(Boolean(errors.name))}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <span className="mt-1.5 block font-mono text-[0.66rem] text-signal-400">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="tag mb-2 block text-[0.58rem] text-steel-400">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        placeholder="(832) 555-0134"
                        className={fieldClass(Boolean(errors.phone))}
                        autoComplete="tel"
                      />
                      {errors.phone && (
                        <span className="mt-1.5 block font-mono text-[0.66rem] text-signal-400">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="tag mb-2 block text-[0.58rem] text-steel-400">
                        Email <span className="text-steel-500">(optional)</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        placeholder="you@email.com"
                        className={fieldClass(Boolean(errors.email))}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <span className="mt-1.5 block font-mono text-[0.66rem] text-signal-400">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="city" className="tag mb-2 block text-[0.58rem] text-steel-400">
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        list="dfw-cities"
                        value={form.city}
                        onChange={(e) => set("city")(e.target.value)}
                        placeholder="Start typing your city…"
                        className={fieldClass(false)}
                        autoComplete="address-level2"
                      />
                      <datalist id="dfw-cities">
                        {cityList.map((c) => (
                          <option key={c} value={c} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service"
                        className="tag mb-2 block text-[0.58rem] text-steel-400"
                      >
                        What do you need?
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={(e) => set("service")(e.target.value)}
                          className={cn(fieldClass(false), "appearance-none pr-10")}
                        >
                          {services.map((s) => (
                            <option key={s.id} value={s.title} className="bg-ink-900 text-white">
                              {s.title}
                            </option>
                          ))}
                          <option value="Something else" className="bg-ink-900 text-white">
                            Something else / not sure
                          </option>
                        </select>
                        <ArrowIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-signal-500" />
                      </div>
                    </div>
                    <div>
                      <span className="tag mb-2 block text-[0.58rem] text-steel-400">
                        How soon?
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {urgencies.map((u) => (
                          <button
                            key={u}
                            type="button"
                            onClick={() => set("urgency")(u)}
                            aria-pressed={form.urgency === u}
                            className={cn(
                              "border px-3.5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] transition-all duration-300",
                              form.urgency === u
                                ? "border-signal-500 bg-signal-500 text-white"
                                : "border-white/15 text-steel-300 hover:border-hiviz-400 hover:text-hiviz-400",
                            )}
                          >
                            {u}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="tag mb-2 block text-[0.58rem] text-steel-400"
                    >
                      Describe the problem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={600}
                      value={form.message}
                      onChange={(e) => set("message")(e.target.value)}
                      placeholder="Door won't close, loud bang yesterday, one side looks crooked…"
                      className={cn(fieldClass(Boolean(errors.message)), "resize-y")}
                    />
                    <div className="mt-1.5 flex items-center justify-between gap-3">
                      {errors.message ? (
                        <span className="block font-mono text-[0.66rem] text-signal-400">
                          {errors.message}
                        </span>
                      ) : (
                        <span className="block font-mono text-[0.66rem] text-steel-500">
                          Tip: a short video texted to the number above speeds this up a lot.
                        </span>
                      )}
                      <span className="font-mono text-[0.62rem] text-steel-500">
                        {form.message.length}/600
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-[0.78rem] leading-relaxed text-steel-500">
                      No obligation, no dispatch fee. You'll get a real answer either way.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={cn(
                        "sheen-host group relative inline-flex items-center justify-center gap-3 overflow-hidden px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300",
                        status === "sending"
                          ? "cursor-wait bg-steel-600 text-white"
                          : "bg-signal-500 text-white shadow-[0_14px_34px_-14px_rgba(255,90,31,0.9)] hover:-translate-y-0.5 hover:bg-signal-600",
                      )}
                    >
                      <span
                        aria-hidden
                        className="sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 opacity-0 group-hover:opacity-100"
                      />
                      {status === "sending" ? "Preparing…" : "Send request"}
                      {status !== "sending" && (
                        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
