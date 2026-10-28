import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (p: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

/* --- subject icons --------------------------------------------------- */

export const SpringIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12h2" />
    <path d="M5 8.5 9 15M9 8.5 13 15M13 8.5 17 15M17 8.5l2 3.2" />
    <path d="M5 8.5h4M9 8.5h4M13 8.5h4M17 15H7" opacity=".45" />
    <path d="M19 12h2" />
  </svg>
);

export const OpenerIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="8.5" width="11" height="7" rx="1.4" />
    <path d="M14 12h7" />
    <circle cx="6.5" cy="12" r="1.1" />
    <path d="M9.5 10.4v3.2M11 10.4v3.2" opacity=".5" />
    <path d="M17 10v4M20 9.4v5.2" opacity=".45" />
  </svg>
);

export const InstallIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 4h16v3H4z" opacity=".5" />
    <rect x="7" y="10" width="10" height="6" rx="1.3" />
    <path d="M12 7v3" />
    <path d="m9.6 18.6 2.4 2.4 2.4-2.4" />
  </svg>
);

export const CableIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5c3 2.2 3 4.8 0 7s-3 4.8 0 7" />
    <path d="M9 5c3 2.2 3 4.8 0 7s-3 4.8 0 7" opacity=".5" />
    <circle cx="17.5" cy="8" r="2.5" />
    <path d="M17.5 13v7" />
  </svg>
);

export const RollerIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 4v16M20 4v16" opacity=".45" />
    <circle cx="9" cy="8" r="2.4" />
    <circle cx="15" cy="16" r="2.4" />
    <path d="M9 10.4v3.2M15 8v5.6" opacity=".7" />
  </svg>
);

export const TuneUpIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.6 6.4a3.6 3.6 0 0 0 4.9 4.9l-1.9-1.9-.8-2.2 2.2.8 1.9 1.9a3.6 3.6 0 0 0-4.9-4.9l-1.9-1.9-.8 2.2-2.2-.8z" opacity=".55" />
    <path d="M11.4 9.6 4.6 16.4a2.2 2.2 0 0 0 3.1 3.1l6.8-6.8" />
    <path d="m12.6 12.6 1.6 1.6" />
  </svg>
);

export const DoorIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 20V6.2A1.2 1.2 0 0 1 4.7 5h14.6a1.2 1.2 0 0 1 1.2 1.2V20" />
    <path d="M3.5 20h17" />
    <path d="M6 9h12M6 12.7h12M6 16.4h12" opacity=".6" />
  </svg>
);

export const RemoteIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="7" width="8" height="13" rx="2" />
    <circle cx="8" cy="11.5" r="1.3" />
    <path d="M6.6 16.4h2.8" opacity=".6" />
    <path d="M15.4 8.6a5.6 5.6 0 0 1 0 6.8" />
    <path d="M18 6.4a8.6 8.6 0 0 1 0 11.2" opacity=".55" />
  </svg>
);

export const OwnerIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="7.4" r="3.2" />
    <path d="M4.8 20c.6-3.7 3.6-6 7.2-6s6.6 2.3 7.2 6" />
    <path d="M9.4 3.6h5.2" opacity=".5" />
  </svg>
);

export const VideoIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="6" y="2.6" width="12" height="18.8" rx="2.2" />
    <path d="m10.6 9.4 4.2 2.6-4.2 2.6z" />
    <path d="M10.8 18.6h2.4" opacity=".6" />
  </svg>
);

export const TruckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.6 16.4V7.2h10.2v9.2" />
    <path d="M12.8 10.4h3.9l2.7 3v3h-6.6" />
    <circle cx="7" cy="17.6" r="1.8" />
    <circle cx="16.6" cy="17.6" r="1.8" />
    <path d="M8.8 17.6h6" opacity=".5" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 5.8v5.4c0 4 2.9 7.6 7 9.8 4.1-2.2 7-5.8 7-9.8V5.8z" />
    <path d="m9.2 12 2 2 3.6-3.8" />
  </svg>
);

export const TagIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12.6 3.4H20V10.8L11 19.8a2 2 0 0 1-2.8 0l-4.4-4.4a2 2 0 0 1 0-2.8z" />
    <circle cx="16.4" cy="7.2" r="1.3" />
  </svg>
);

export const HandshakeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m3 11.4 3.4-3.6h4L12 9.2l1.6-1.4h4l3.4 3.6" />
    <path d="m8.6 12.6 2.6 2.4 1.6-1.4 2.6 2.4" />
    <path d="M6.4 7.8v6.6M17.6 7.8v6.6" opacity=".5" />
  </svg>
);

/* --- utility icons --------------------------------------------------- */

export const StarIcon = ({ filled = true, ...p }: IconProps & { filled?: boolean }) => (
  <svg {...base(p)} fill={filled ? "currentColor" : "none"} strokeWidth={filled ? 0 : 1.6}>
    <path d="m12 3.2 2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.5l6-.8z" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.2 3.4h3l1.5 3.7-2 1.4a11.4 11.4 0 0 0 5.6 5.6l1.4-2 3.7 1.5v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.2 5.6a2 2 0 0 1 2-2.2z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
    <path d="m3.4 6.6 8.6 6.4 8.6-6.4" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.4V12l3.2 2" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </svg>
);

export const ChevronIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m4.6 12.6 4.6 4.6L19.4 6.8" />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: 0 })} fill="currentColor">
    <path d="M9.4 5.6C6.3 7 4.4 9.8 4.4 13.4c0 3 1.7 5 4.2 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1.1.2.4-1.7 1.7-3.2 3.4-4.2zm9.3 0C15.6 7 13.7 9.8 13.7 13.4c0 3 1.7 5 4.2 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1.1.2.4-1.7 1.7-3.2 3.4-4.2z" />
  </svg>
);

export const GoogleG = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path
      fill="#4285F4"
      d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.4 3.62v3h3.87c2.27-2.09 3.58-5.17 3.58-8.81z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.96-1.08 7.94-2.92l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0 0 12 24z"
    />
    <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54V6.64H1.28a12 12 0 0 0 0 10.72z" />
    <path
      fill="#EA4335"
      d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.64l3.99 3.09C6.22 6.88 8.87 4.77 12 4.77z"
    />
  </svg>
);

export const LogoMark = (p: IconProps) => (
  <svg viewBox="0 0 44 44" fill="none" {...p}>
    <rect x="1.2" y="1.2" width="41.6" height="41.6" rx="9" fill="currentColor" opacity=".12" />
    <rect
      x="1.2"
      y="1.2"
      width="41.6"
      height="41.6"
      rx="9"
      stroke="currentColor"
      strokeOpacity=".35"
      strokeWidth="1.4"
    />
    <rect x="9" y="10" width="26" height="4.6" rx="1.2" fill="#FF5A1F" />
    <rect x="9" y="17.4" width="26" height="4.6" rx="1.2" fill="#FFC531" />
    <rect x="9" y="24.8" width="26" height="4.6" rx="1.2" fill="#FF5A1F" opacity=".75" />
    <path d="M14 34.4h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity=".55" />
  </svg>
);

export const iconMap = {
  spring: SpringIcon,
  opener: OpenerIcon,
  install: InstallIcon,
  cable: CableIcon,
  roller: RollerIcon,
  tuneup: TuneUpIcon,
  door: DoorIcon,
  remote: RemoteIcon,
  owner: OwnerIcon,
  video: VideoIcon,
  truck: TruckIcon,
  shield: ShieldIcon,
  tag: TagIcon,
  handshake: HandshakeIcon,
} as const;

export type IconKey = keyof typeof iconMap;
