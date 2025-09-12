import type { Metadata } from 'next';
import Link from 'next/link';
import { listings } from '@/data/listings';
import { ListingCard } from '@/components/biens/ListingCard';
import { Filters } from '@/components/biens/Filters';

export const metadata: Metadata = {
  title: 'Biens immobiliers - EB Agency',
  description: 'Découvrez nos biens immobiliers à vendre et à louer: villas, appartements, maisons. Filtrez par ville, prix, surface et plus.',
  alternates: { canonical: '/biens' },
  openGraph: {
    title: 'Biens immobiliers - EB Agency',
    description: 'Sélection haut de gamme de biens à vendre et à louer',
    type: 'website',
    url: '/biens'
  }
};

type SearchParams = { [key: string]: string | string[] | undefined };

function toNumber(value: string | undefined, fallback = 0) {
  if (!value) return fallback;
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function applyFilters(sp: Record<string, string>, pageSize: number) {
  const { status, propertyType, city, priceMin, priceMax, bedrooms, areaMin, available, sort, page } = sp;

  let result = listings.slice();

  if (status === 'vente' || status === 'location') {
    result = result.filter(l => l.status === status);
  }
  if (propertyType === 'appartement' || propertyType === 'maison' || propertyType === 'villa') {
    result = result.filter(l => l.propertyType === propertyType);
  }
  if (city) {
    result = result.filter(l => l.city === city);
  }
  if (priceMin) {
    const min = toNumber(priceMin, 0);
    result = result.filter(l => l.price >= min);
  }
  if (priceMax) {
    const max = toNumber(priceMax, Number.MAX_SAFE_INTEGER);
    result = result.filter(l => l.price <= max);
  }
  if (bedrooms) {
    const br = toNumber(bedrooms, 0);
    result = result.filter(l => l.bedrooms >= br);
  }
  if (areaMin) {
    const a = toNumber(areaMin, 0);
    result = result.filter(l => l.areaM2 >= a);
  }
  if (available === 'on') {
    result = result.filter(l => l.available);
  }

  switch (sort) {
    case 'prix_asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'prix_desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'surface_desc':
      result.sort((a, b) => b.areaM2 - a.areaM2);
      break;
    default:
      // recent: featured first then by id for stability
      result.sort((a, b) => Number(b.featured === true) - Number(a.featured === true));
  }

  const currentPage = Math.max(1, toNumber(page, 1));
  const total = result.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageItems = result.slice(start, end);
  return { total, totalPages, currentPage, items: pageItems };
}

export default async function BiensPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const resolvedSearchParams = await searchParams;
  const sp = Object.fromEntries(Object.entries(resolvedSearchParams).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]).filter(([v]) => v !== undefined)) as Record<string, string>;
  const uniqueCities = Array.from(new Set(listings.map(l => l.city))).sort();

  const pageSize = 9;
  const { items, total, totalPages, currentPage } = applyFilters(sp, pageSize);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((l, idx) => ({
      '@type': 'ListItem',
      position: (currentPage - 1) * pageSize + idx + 1,
      url: `https://www.eb-agency.fr/biens#${l.id}`,
      name: l.title
    }))
  };

  return (
    <main className="min-h-screen bg-light pt-28 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-4 md:px-8 max-w-7xl mx-auto text-dark">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-dm-serif text-primary">Nos biens immobiliers</h1>
          <p className="mt-2 text-dark/70">À vendre et à louer — Côte d&apos;Azur et alentours</p>
        </header>

        <Filters
          cities={uniqueCities}
          initial={{ status: sp.status, propertyType: sp.propertyType, city: sp.city, priceMin: sp.priceMin, priceMax: sp.priceMax, bedrooms: sp.bedrooms, areaMin: sp.areaMin, available: sp.available, sort: sp.sort }}
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((listing) => (
            <div key={listing.id} id={listing.id}>
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
                <Link key={p} href={`/biens?${params.toString()}`} className={`px-3 py-1 border text-sm ${active ? 'bg-primary text-white border-primary' : 'border-dark/30 text-dark hover:bg-light'}`}>
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