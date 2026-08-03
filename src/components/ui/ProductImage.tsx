import Image from "next/image";

import { images } from "@/data/images";
import { cn } from "@/lib/utils";

type ProductImageVariant = "card" | "featured" | "detail";

type ProductImageProps = {
  slug?: string;
  placeholderText?: string;
  src?: string;
  alt?: string;
  variant?: ProductImageVariant;
  className?: string;
  priority?: boolean;
  blurDataURL?: string;
};

const variantOuterStyles: Record<ProductImageVariant, string> = {
  card: "aspect-[4/3] w-full rounded-[1.5rem] border border-[#E5E7EB] bg-[#FAFAFA] p-3.5",
  featured:
    "flex min-h-[260px] items-center justify-center rounded-[2.25rem] border border-[#E5E7EB] bg-[#FBFBFB] p-4 sm:min-h-[320px] lg:min-h-[360px]",
  detail: "rounded-[2.5rem] border border-[#E5E7EB] bg-[#F8FAFC] p-5 sm:p-6",
};

const variantInnerStyles: Record<ProductImageVariant, string> = {
  card: "rounded-[1.25rem] border border-dashed border-[#D1D5DB] bg-white p-4",
  featured: "rounded-[1.75rem] border border-dashed border-[#D1D5DB] bg-white px-6 py-14",
  detail: "rounded-[1.75rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16",
};

export default function ProductImage({
  slug,
  placeholderText,
  src: overrideSrc,
  alt: overrideAlt,
  variant = "card",
  className,
  priority = false,
  blurDataURL,
}: ProductImageProps) {
  const registered = slug ? images.products.bySlug[slug] : undefined;
  const imageSrc = overrideSrc || registered?.src || "";
  const imageAlt = overrideAlt || registered?.alt || placeholderText || "Conchem Product Image";

  const hasRealImage = Boolean(imageSrc && imageSrc.trim().length > 0);

  return (
    <div className={cn(variantOuterStyles[variant], className)}>
      {hasRealImage ? (
        <div className="relative aspect-square w-full overflow-hidden rounded-[1.75rem] bg-[#F1F5F9]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={
              variant === "detail"
                ? "(max-width: 1024px) 100vw, 50vw"
                : variant === "featured"
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            priority={priority}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            className={cn(
              "rounded-[1.75rem] object-cover object-center transition-transform duration-300 group-hover:scale-105"
            )}
          />
        </div>
      ) : (
        <div
          className={cn(
            "flex h-full w-full items-center justify-center text-center",
            variantInnerStyles[variant]
          )}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280]">
            {placeholderText || "PRODUCT IMAGE"}
          </span>
        </div>
      )}
    </div>
  );
}
