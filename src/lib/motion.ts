export const durations = {
  reveal: 0.6,
  hover: 0.22,
  preview: 0.3,
  tease: 0.6,
  ambientZoom: 12,
};

export const easings = {
  standard: "easeOut",
  easeOut: "easeOut",
};

export const revealVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: durations.reveal, ease: easings.standard, delay },
  }),
};

export const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: durations.hover },
  },
  hover: {
    y: -4,
    scale: 1.02,
    rotate: 0,
    boxShadow: "0 10px 30px rgba(17,24,39,0.06)",
    transition: { duration: durations.hover },
  },
  tease: {
    y: -6,
    scale: 1.01,
    rotate: -2,
    transition: { duration: durations.tease },
  },
};

export const previewVariants = {
  rest: { opacity: 0, scale: 1 },
  hover: { opacity: 1, scale: 1.08, transition: { duration: durations.preview } },
  tease: { opacity: 0.6, scale: 1.03, transition: { duration: durations.tease } },
};

export function prefersReduceMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
