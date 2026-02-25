import type { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogCategories } from '@/components/blog/BlogCategories';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Immobilier - Conseils, Actualités et Tendances',
  description:
    'Retrouvez nos articles sur le marché immobilier parisien : conseils achat/vente, tendances, investissement et actualités de l\'agence EB Agency.',
  keywords: [
    'blog immobilier Paris',
    'conseils achat immobilier',
    'marché immobilier Paris',
    'tendances immobilières',
    'investissement immobilier',
    'actualités immobilières',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Immobilier - EB Agency',
    description: 'Conseils, actualités et tendances du marché immobilier parisien',
    type: 'website',
    url: '/blog',
  },
};

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function BlogPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const pageSize = 9;

  const [posts, total, categories] = await Promise.all([
    prisma.blogPost.findMany({
      where: { published: true },
      include: { author: { select: { name: true } }, category: true },
      orderBy: { publishedAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.blogPost.count({ where: { published: true } }),
    prisma.blogCategory.findMany({
      include: { _count: { select: { posts: { where: { published: true } } } } },
      orderBy: { name: 'asc' },
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <main className="min-h-screen bg-light pt-28 pb-16">
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-dm-serif text-primary">Blog</h1>
          <p className="mt-2 text-dark/70">
            Actualités, conseils et tendances du marché immobilier
          </p>
        </header>

        <BlogCategories categories={categories} />

        {posts.length === 0 ? (
          <p className="mt-12 text-center text-dark/60">Aucun article pour le moment.</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-10 flex justify-center items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === page;
              return (
                <Link
                  key={p}
                  href={`/blog?page=${p}`}
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
