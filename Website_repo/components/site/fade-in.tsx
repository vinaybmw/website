"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = MotionProps & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className = "", delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
