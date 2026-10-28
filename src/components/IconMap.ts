import type { ComponentType, SVGProps } from "react";
import { TuneUpIcon, iconMap } from "./Icons";

/** Resolves a loose icon key to a component, falling back to the wrench icon. */
export function IconMapFallback(key: string): ComponentType<SVGProps<SVGSVGElement>> {
  return (iconMap as Record<string, ComponentType<SVGProps<SVGSVGElement>>>)[key] ?? TuneUpIcon;
}
