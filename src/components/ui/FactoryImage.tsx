import Image from "next/image";

import { images } from "@/data/images";
import { cn } from "@/lib/utils";

type FactoryImageVariant = "default" | "compact";

type FactoryImageProps = {
  src?: string;
  alt?: string;
  variant?: FactoryImageVariant;
  className?: string;
  priority?: boolean;
  blurDataURL?: string;
};

const variantOuterStyles: Record<FactoryImageVariant, string> = {
  default:
    "flex min-h-[320px] h-full w-full items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] p-2 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px] lg:min-h-[560px]",
  compact:
    "flex min-h-[320px] h-full w-full items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] p-2 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px]",
};

export default function FactoryImage({
  src = images.factory.primary,
  alt = images.factory.alt,
  variant = "default",
  className,
  priority = false,
  blurDataURL,
}: FactoryImageProps) {
  const hasRealImage = Boolean(src && src.trim().length > 0);

  return (
    <div className={cn(variantOuterStyles[variant], className)}>
      {hasRealImage ? (
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
          <Image
            src={src!}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={priority}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            className="object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
            FACTORY IMAGE
          </span>
        </div>
      )}
    </div>
  );
}
