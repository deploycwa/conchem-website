import Image from "next/image";

import { images } from "@/data/images";
import { cn } from "@/lib/utils";

type IndustryImageVariant = "hero" | "card";

type IndustryImageProps = {
  category?: string;
  placeholderText?: string;
  src?: string;
  alt?: string;
  variant?: IndustryImageVariant;
  className?: string;
  priority?: boolean;
  blurDataURL?: string;
};

const variantOuterStyles: Record<IndustryImageVariant, string> = {
  hero:
    "flex min-h-[320px] w-full items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] p-2 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px] lg:min-h-[560px]",
  card:
    "aspect-[4/3] w-full rounded-[1.25rem] border border-[#E5E7EB] bg-[#FAFAFA] p-4",
};

export default function IndustryImage({
  category,
  placeholderText = "INDUSTRY IMAGE",
  src: overrideSrc,
  alt: overrideAlt,
  variant = "hero",
  className,
  priority = false,
  blurDataURL,
}: IndustryImageProps) {
  const registered = category ? images.industries.byCategory[category.toLowerCase()] : undefined;
  const imageSrc = overrideSrc || registered?.src || (variant === "hero" ? images.industries.primary : "");
  const imageAlt = overrideAlt || registered?.alt || images.industries.alt;

  const hasRealImage = Boolean(imageSrc && imageSrc.trim().length > 0);

  return (
    <div className={cn(variantOuterStyles[variant], className)}>
      {hasRealImage ? (
        <div className="relative min-h-[320px] w-full overflow-hidden rounded-[1.5rem] sm:min-h-[420px] lg:min-h-[560px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={
              variant === "hero"
                ? "(max-width: 1024px) 100vw, 45vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            priority={priority}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
            {placeholderText}
          </span>
        </div>
      )}
    </div>
  );
}
