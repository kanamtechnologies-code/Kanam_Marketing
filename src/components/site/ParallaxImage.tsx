"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type ParallaxImageProps = Omit<ImageProps, "fill" | "style"> & {
  /** Max vertical travel in px as the section crosses the viewport. */
  intensity?: number;
  /** Overscale so edges never show while translating. */
  scale?: number;
  className?: string;
  wrapperClassName?: string;
};

/**
 * Scroll parallax for full-bleed / framed photos.
 * Disabled when the user prefers reduced motion.
 */
export function ParallaxImage({
  intensity = 120,
  scale = 1.32,
  className,
  wrapperClassName,
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const layer = layerRef.current;
    if (!wrap || !layer) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let last = Number.NaN;

    const apply = (y: number) => {
      if (y === last) return;
      last = y;
      layer.style.transform =
        y === 0
          ? `scale(${scale})`
          : `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale})`;
    };

    const tick = () => {
      raf = 0;
      if (mq.matches) {
        apply(0);
        return;
      }
      const rect = wrap.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      // Smaller divisor = hits full travel sooner / feels stronger while scrolling
      const progress = (rect.top + rect.height / 2 - viewH / 2) / (viewH * 0.55);
      const clamped = Math.max(-1, Math.min(1, progress));
      apply(clamped * intensity);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    apply(0);
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    mq.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [intensity, scale]);

  return (
    <div ref={wrapRef} className={cn("absolute inset-0 overflow-hidden", wrapperClassName)}>
      <div
        ref={layerRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: `scale(${scale})` }}
      >
        <Image {...imageProps} alt={alt} fill className={cn("object-cover", className)} />
      </div>
    </div>
  );
}
