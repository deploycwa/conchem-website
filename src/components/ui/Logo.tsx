import Image from "next/image";

import { images } from "@/data/images";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";
type LogoVariant = "navbar" | "badge";

type LogoProps = {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

const logoConfigs: Record<
  LogoVariant,
  Record<LogoSize, { width: number; height: number; defaultClass: string }>
> = {
  navbar: {
    sm: { width: 150, height: 40, defaultClass: "h-[40px] w-auto" },
    md: { width: 180, height: 48, defaultClass: "h-[48px] w-auto" },
    lg: { width: 225, height: 60, defaultClass: "h-[60px] w-auto" },
  },
  badge: {
    sm: { width: 180, height: 50, defaultClass: "h-[50px] w-auto" },
    md: { width: 240, height: 65, defaultClass: "h-[65px] w-auto" },
    lg: { width: 480, height: 125, defaultClass: "h-[95px] sm:h-[125px] w-auto" },
  },
};

export default function Logo({ size = "md", variant, className, priority = false }: LogoProps) {
  const activeVariant: LogoVariant = variant ?? (size === "lg" ? "badge" : "navbar");
  const src = activeVariant === "navbar" ? images.logo.navbar : images.logo.badge;
  const { width, height, defaultClass } = logoConfigs[activeVariant][size];

  return (
    <Image
      src={src}
      alt={images.logo.alt}
      width={width}
      height={height}
      priority={priority}
      className={cn(defaultClass, className)}
    />
  );
}
