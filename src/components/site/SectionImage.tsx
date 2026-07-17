import { ParallaxImage } from "@/components/site/ParallaxImage";
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
      <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-background">
        <div className={cn("relative min-h-[220px] w-full overflow-hidden sm:min-h-[260px]", frameClassName)}>
          <ParallaxImage
            src={src}
            alt={alt}
            priority={priority}
            intensity={70}
            scale={1.24}
            sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
            className={cn("w-full h-full", imageClassName)}
          />
          {overlay ? (
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          ) : null}
        </div>
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground md:text-base">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
