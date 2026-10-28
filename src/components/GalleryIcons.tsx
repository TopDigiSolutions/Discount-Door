import type { SVGProps } from "react";

const base = (p: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 5l14 14M19 5 5 19" /></svg>
);

export const ChevronIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m6.5 9.5 5.5 5.5 5.5-5.5" /></svg>
);

export const MaximizeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M8 4H4v4M16 4h4v4M20 16v4h-4M4 16v4h4" /><path d="M4 4l6 6M20 4l-6 6M4 20l6-6M20 20l-6-6" opacity=".5" /></svg>
);