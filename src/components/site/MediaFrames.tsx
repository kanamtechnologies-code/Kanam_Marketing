import type { ReactNode } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function DeviceFrame({
  children,
  imageSrc,
  imageAlt = "",
  imageFit = "cover",
  imagePadding = "p-0",
  className,
}: {
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imagePadding?: "p-0" | "p-2" | "p-4";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "kanam-photo-pop relative w-full overflow-hidden rounded-3xl border border-[rgb(var(--accent-rgb)/0.45)] bg-white ring-1 ring-[rgb(var(--accent-rgb)/0.14)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent" />
      <div className="relative aspect-[2/1] w-full">
        {children ??
          (imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className={cn(
                "bg-white",
                imageFit === "contain"
                  ? cn("object-contain", imagePadding)
                  : "object-cover"
              )}
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white" />
          ))}
      </div>
    </div>
  );
}

export function VideoFrame({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "kanam-photo-pop relative w-full overflow-hidden rounded-3xl border border-[rgb(var(--accent-rgb)/0.45)] bg-white ring-1 ring-[rgb(var(--accent-rgb)/0.14)]",
        className
      )}
    >
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

