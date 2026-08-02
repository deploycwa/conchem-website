import Image from "next/image";

import { images } from "@/data/images";
import { cn } from "@/lib/utils";

type HeroImageProps = {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  blurDataURL?: string;
};

export default function HeroImage({
  src = images.hero.primary,
  alt = images.hero.alt,
  className,
  priority = true,
  blurDataURL,
}: HeroImageProps) {
  const hasRealImage = Boolean(src && src.trim().length > 0);

  return (
    <div
      className={cn(
        "relative flex h-[320px] w-full items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] p-2 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:h-[420px] lg:h-[560px]",
        className
      )}
    >
      {hasRealImage ? (
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
          <Image
            src={src!}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={priority}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            className="object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
            HERO VISUAL
          </span>
        </div>
      )}
    </div>
  );
}
