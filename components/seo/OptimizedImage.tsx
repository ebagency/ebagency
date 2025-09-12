import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function OptimizedImage({
  alt,
  priority = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Génération d'un placeholder blur simple
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        {...props}
        alt={alt}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}

// Composant spécialisé pour les images de héros
export function HeroImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      quality={90}
      className="w-full h-full object-cover"
    />
  );
}

// Composant spécialisé pour les images de services
export function ServiceImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      quality={80}
      className="w-full h-full object-cover rounded-lg"
    />
  );
}

// Composant spécialisé pour les images de portfolio
export function PortfolioImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      quality={85}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  );
}
