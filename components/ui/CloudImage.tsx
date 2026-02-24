import Image from 'next/image';

interface CloudImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function CloudImage({ src, alt, width, height, fill, className, priority, sizes }: CloudImageProps) {
  const isCloudinary = src.startsWith('https://res.cloudinary.com');
  const isExternal = src.startsWith('http');

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        {...(!isExternal && !isCloudinary ? {} : { unoptimized: false })}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
