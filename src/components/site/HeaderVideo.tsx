"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export function HeaderVideo({
  src,
  playbackRate = 0.6,
  className,
}: {
  src: string;
  playbackRate?: number;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <video
      ref={ref}
      className={cn(className)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
