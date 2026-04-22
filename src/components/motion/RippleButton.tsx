"use client";

import { useState, type MouseEvent, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface RippleButtonProps {
  label?: string;
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "coral";
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Override the text colour for any variant. Accepts any valid CSS colour value,
   *  e.g. textColor="#0a5c60" or textColor="var(--ink)" */
  textColor?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

// Variant styles no longer hardcode text colours — textColor prop handles overrides.
const variantStyles: Record<NonNullable<RippleButtonProps["variant"]>, string> = {
  primary: "bg-amber-400 text-white hover:bg-amber-300",
  secondary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
  ghost: "border-2 border-white/40 text-white hover:border-white/80",
  coral: "bg-[var(--coral)] text-white hover:bg-coral-400",
};

const sizeStyles: Record<NonNullable<RippleButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm font-semibold",
  lg: "px-8 py-4 text-base font-semibold",
};

export function RippleButton({
  label,
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  textColor,
  type = "button",
  disabled = false,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function addRipple(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipples((r) => [
      ...r,
      { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
  }

  const content = label ?? children;

  const base = cn(
    "relative overflow-hidden rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // Applied via style so it always wins over Tailwind's colour utilities.
  const colorStyle = textColor ? { color: textColor } : undefined;

  if (href) {
    return (
      <Link href={href} className={base} style={colorStyle} onClick={addRipple}>
        <RippleLayer
          ripples={ripples}
          onDone={(id) => setRipples((r) => r.filter((r) => r.id !== id))}
        />
        <span className="relative z-10 flex items-center justify-center gap-2">{content}</span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={base}
      style={colorStyle}
      onClick={(e) => {
        addRipple(e);
        onClick?.();
      }}
    >
      <RippleLayer
        ripples={ripples}
        onDone={(id) => setRipples((r) => r.filter((r) => r.id !== id))}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">{content}</span>
    </motion.button>
  );
}

function RippleLayer({
  ripples,
  onDone,
}: {
  ripples: Ripple[];
  onDone: (id: number) => void;
}) {
  return (
    <AnimatePresence>
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.35, x: r.x, y: r.y }}
          animate={{ scale: 18, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          onAnimationComplete={() => onDone(r.id)}
          className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white pointer-events-none"
          style={{ left: 0, top: 0, x: r.x - 10, y: r.y - 10 }}
        />
      ))}
    </AnimatePresence>
  );
}