"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { durations } from "../../lib/motion";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  direction?: "bottom" | "left" | "right";
  stagger?: number;
};

export default function MotionSection({ children, className, direction = "bottom" }: MotionSectionProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "bottom" ? 20 : 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: durations.reveal,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
