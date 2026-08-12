"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

const offsets = {
  up: { x: 0, y: 26 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 }
} as const;

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.div>
  );
}