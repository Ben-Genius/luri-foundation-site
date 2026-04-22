"use client";

import { motion } from "framer-motion";

interface TextStaggerProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "p" | "span" | "div";
}

export function TextStagger({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.028,
  as: Tag = "p",
}: TextStaggerProps) {
  const words = text.split(" ");

  return (
    <Tag aria-label={text} className={`flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
