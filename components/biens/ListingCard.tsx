import Image from 'next/image';
import Link from 'next/link';
import { Listing } from '@/data/listings';
import { cn } from '@/utils';

type ListingCardProps = {
  listing: Listing;
  className?: string;
};

export function ListingCard({ listing, className }: ListingCardProps) {
  const { title, images, city, status, areaM2, bedrooms, bathrooms, propertyType, available } = listing;

  return (
    <article className={cn('group relative rounded-md overflow-hidden bg-white border border-black/10 shadow-soft', className)}>
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={images[0]}
          alt={`${title} - ${propertyType} ${status === 'vente' ? 'à vendre' : 'à louer'} à ${city} - ${areaM2}m², ${bedrooms} chambres - EB Agency`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={listing.featured === true}
          loading={listing.featured ? 'eager' : 'lazy'}
        />
        {!available && (
          <span className="absolute top-3 left-3 bg-dark/80 text-white text-xs uppercase tracking-wide px-2 py-1">Indisponible</span>
        )}
        <span className="absolute top-3 right-3 bg-primary text-white text-xs uppercase tracking-wide px-2 py-1">{status === 'vente' ? 'À vendre' : 'À louer'}</span>
      </div>

      <div className="p-4 text-dark">
        <h3 className="text-lg font-medium line-clamp-2 text-primary">{title}</h3>
        <p className="mt-1 text-sm text-dark/70">{city}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-dark/80">
          <span>{areaM2} m²</span>
          <span>• {bedrooms} ch</span>
          <span>• {bathrooms} sdb</span>
          <span>• {propertyType}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Link href={`/contact`} className="text-sm text-primary underline underline-offset-4 hover:opacity-80">Contactez-nous</Link>
        </div>
      </div>
    </article>
  );
}


