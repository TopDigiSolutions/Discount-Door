import { cn } from "@/utils/cn";
import { business } from "@/data/business";
import { useScrollTo, useScrolled } from "@/hooks/useScrollMotion";
import { MailIcon, PhoneIcon } from "./Icons";

export default function MobileCallBar() {
  const visible = useScrolled(620);
  const scrollTo = useScrollTo();

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[60] border-t border-white/12 bg-ink-950/96 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(.22,.75,.25,1)] lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center gap-2">
        <a
          href={business.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 bg-signal-500 py-3.5 font-display text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-white active:bg-signal-600"
        >
          <PhoneIcon className="h-4 w-4" />
          Call now
        </a>
        <a
          href={`sms:${business.phoneHref.replace("tel:", "")}`}
          className="flex flex-1 items-center justify-center gap-2 border border-white/25 py-3.5 font-display text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-white active:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path
              d="M20.5 12c0 4-3.8 7.2-8.5 7.2-1 0-2-.15-2.9-.42L4 20.5l1.6-3.6C4.2 15.6 3.5 13.9 3.5 12c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2z"
              strokeLinejoin="round"
            />
          </svg>
          Text
        </a>
        <button
          onClick={() => scrollTo("contact")}
          className="flex items-center justify-center gap-2 border border-hiviz-400/50 bg-hiviz-400/10 px-4 py-3.5 font-display text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-hiviz-400 active:bg-hiviz-400 active:text-ink-900"
        >
          <MailIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
