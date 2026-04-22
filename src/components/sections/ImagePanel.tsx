"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ImagePanelProps {
  src: string;
  title: string;
  body: string;
  eyebrow?: string;
  location?: string;
  programme?: string;
  href?: string;
  variant?: "card" | "story";
  /** Dark inverted card like Raygan featured items */
  dark?: boolean;
}

export function ImagePanel({
  src,
  title,
  body,
  eyebrow,
  location,
  programme,
  href,
  variant = "card",
  dark = false,
}: ImagePanelProps) {
  const label = eyebrow ?? programme;
  const cardClass = dark ? "ed-card ed-card-dark" : "ed-card";

  const inner = (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`group h-full ${cardClass}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--primary-light)]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Label */}
        {label && (
          <p
            className={`ed-label mb-3 ${dark ? "text-[var(--accent)]" : "text-[var(--primary)]"}`}
          >
            {label}
          </p>
        )}

        {/* Title */}
        <h3
          className={`ed-title text-lg mb-2.5 ${dark ? "text-white" : "text-[var(--ink)]"}`}
        >
          {title}
        </h3>

        {/* Body */}
        {variant === "story" ? (
          <blockquote
            className={`flex-1 text-sm leading-relaxed italic border-l-2 border-[var(--accent)] pl-3 ${
              dark ? "text-white/65" : "text-[var(--ink-600,#374151)]"
            }`}
          >
            &ldquo;{body}&rdquo;
          </blockquote>
        ) : (
          <p
            className={`flex-1 text-sm leading-relaxed ${
              dark ? "text-white/60" : "text-[var(--ink-600,#374151)]"
            }`}
          >
            {body}
          </p>
        )}

        {/* Meta row */}
        <div className={`ed-meta mt-4 ${dark ? "text-white/40" : "text-[var(--primary)]/50"}`}>
          <span>{location ?? (variant === "story" ? "Community voice" : "LURI Foundation")}</span>
          {href && (
            <ArrowRight
              className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-1 ${
                dark ? "text-[var(--accent)]" : "text-[var(--primary)]"
              }`}
            />
          )}
        </div>
      </div>
    </motion.article>
  );

  return href ? (
    <Link href={href} className="h-full block">
      {inner}
    </Link>
  ) : (
    inner
  );
}
