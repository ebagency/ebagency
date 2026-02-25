import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ListingCard } from '@/components/biens/ListingCard';
import { Filters } from '@/components/biens/Filters';
import { RealEstateStructuredData } from '@/components/seo/StructuredData';
import { ListingStatus, PropertyType, Prisma } from '@/app/generated/prisma';

export const metadata: Metadata = {
  title: 'Biens Immobiliers Paris - EB Agency | Achat Vente Location',
  description: 'Découvrez notre sélection exclusive de biens immobiliers à Paris : appartements, maisons, villas et hôtels particuliers à vendre et à louer. Filtrez par arrondissement, prix et surface.',
  keywords: [
    'biens immobiliers Paris',
    'appartement Paris',
    'maison Paris',
    'villa Paris',
    'hôtel particulier Paris',
    'achat immobilier Paris',
    'vente immobilier Paris',
    'location immobilier Paris',
    'immobilier 75008',
    'immobilier Champs-Élysées',
    'biens de luxe Paris',
    'investissement immobilier Paris'
  ],
  alternates: { canonical: '/biens' },
  openGraph: {
    title: 'Biens Immobiliers Paris - EB Agency',
    description: 'Sélection haut de gamme de biens immobiliers à vendre et à louer à Paris',
    type: 'website',
    url: '/biens'
  }
};

type SearchParams = { [key: string]: string | string[] | undefined };

const statusMap: Record<string, ListingStatus> = {
  vente: ListingStatus.VENTE,
  location: ListingStatus.LOCATION,
};

const propertyTypeMap: Record<string, PropertyType> = {
  appartement: PropertyType.APPARTEMENT,
  maison: PropertyType.MAISON,
  villa: PropertyType.VILLA,
};

const sortMap: Record<string, Prisma.ListingOrderByWithRelationInput> = {
  prix_asc: { price: 'asc' },
  prix_desc: { price: 'desc' },
  surface_desc: { areaM2: 'desc' },
};

export default async function BiensPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const resolvedSearchParams = await searchParams;
  const sp = Object.fromEntries(
    Object.entries(resolvedSearchParams)
      .map(([k, v]) => [k, Array.isArray(v) ? v[0] : v])
      .filter(([, v]) => v !== undefined)
  ) as Record<string, string>;

  const pageSize = 9;
  const currentPage = Math.max(1, Number(sp.page) || 1);

  // Build Prisma where clause
  const where: Prisma.ListingWhereInput = {};

  if (sp.status && statusMap[sp.status]) {
    where.status = statusMap[sp.status];
  }
  if (sp.propertyType && propertyTypeMap[sp.propertyType]) {
    where.propertyType = propertyTypeMap[sp.propertyType];
  }
  if (sp.city) {
    where.city = sp.city;
  }
  if (sp.priceMin) {
    where.price = { ...((where.price as object) || {}), gte: Number(sp.priceMin) };
  }
  if (sp.priceMax) {
    where.price = { ...((where.price as object) || {}), lte: Number(sp.priceMax) };
  }
  if (sp.bedrooms) {
    where.bedrooms = { gte: Number(sp.bedrooms) };
  }
  if (sp.areaMin) {
    where.areaM2 = { gte: Number(sp.areaMin) };
  }
  if (sp.available === 'on') {
    where.available = true;
  }

  const orderBy: Prisma.ListingOrderByWithRelationInput =
    sortMap[sp.sort] || { featured: 'desc' };

  const [items, total, allListings] = await Promise.all([
    prisma.listing.findMany({
      where,
      orderBy,
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    }),
    prisma.listing.count({ where }),
    prisma.listing.findMany({ select: { city: true } }),
  ]);

  const uniqueCities = Array.from(new Set(allListings.map((l) => l.city))).sort();
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((l, idx) => ({
      '@type': 'ListItem',
      position: (currentPage - 1) * pageSize + idx + 1,
      url: `https://www.ebagency.fr/biens#${l.slug}`,
      name: l.title,
    })),
  };

  return (
    <main className="min-h-screen bg-light pt-28 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RealEstateStructuredData listings={items} />

      <section className="px-4 md:px-8 max-w-7xl mx-auto text-dark">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-dm-serif text-primary">Nos biens immobiliers</h1>
          <p className="mt-2 text-dark/70">À vendre et à louer</p>
        </header>

        <Filters
          cities={uniqueCities}
          initial={{
            status: sp.status,
            propertyType: sp.propertyType,
            city: sp.city,
            priceMin: sp.priceMin,
            priceMax: sp.priceMax,
            bedrooms: sp.bedrooms,
            areaMin: sp.areaMin,
            available: sp.available,
            sort: sp.sort,
          }}
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((listing) => (
            <div key={listing.id} id={listing.slug}>
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>

        {total === 0 && (
          <p className="mt-12 text-center text-dark/60">Aucun bien ne correspond à vos critères.</p>
        )}

        {total > 0 && totalPages > 1 && (
          <nav className="mt-10 flex justify-center items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const params = new URLSearchParams(sp);
              params.set('page', String(p));
              const active = p === currentPage;
              return (
                <Link
                  key={p}
                  href={`/biens?${params.toString()}`}
                  className={`px-3 py-1 border text-sm ${active ? 'bg-primary text-white border-primary' : 'border-dark/30 text-dark hover:bg-light'}`}
                >
                  {p}
                </Link>
              );
            })}
          </nav>
        )}
      </section>
    </main>
  );
}
