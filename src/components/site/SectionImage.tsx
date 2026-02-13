import Image from "next/image";
import { cn } from "@/lib/utils";

type SectionImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  frameClassName?: string;
  priority?: boolean;
  overlay?: boolean;
};

export function SectionImage({
  src,
  alt,
  caption,
  className,
  imageClassName,
  frameClassName,
  priority,
  overlay = false,
}: SectionImageProps) {
  return (
    <figure className={cn("space-y-2", className)}>
      <div className="rounded-3xl overflow-hidden border border-foreground/10 bg-background">
        <div className={cn("relative min-h-[260px] w-full", frameClassName)}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            className={cn("object-cover w-full h-full", imageClassName)}
          />
          {overlay ? (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          ) : null}
        </div>
      </div>
      {caption ? (
        <figcaption className="text-sm md:text-base text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

