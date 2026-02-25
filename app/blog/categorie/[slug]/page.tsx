import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogCategories } from '@/components/blog/BlogCategories';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await prisma.blogCategory.findUnique({ where: { slug } });

  if (!category) return { title: 'Catégorie non trouvée' };

  return {
    title: `${category.name} - Blog Immobilier`,
    description: category.description || `Articles de la catégorie ${category.name} sur le blog EB Agency.`,
    alternates: { canonical: `/blog/categorie/${slug}` },
    openGraph: {
      title: `${category.name} - Blog EB Agency`,
      description: category.description || `Articles ${category.name}`,
      type: 'website',
      url: `/blog/categorie/${slug}`,
    },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const pageSize = 9;

  const category = await prisma.blogCategory.findUnique({ where: { slug } });
  if (!category) notFound();

  const [posts, total, categories] = await Promise.all([
    prisma.blogPost.findMany({
      where: { published: true, categoryId: category.id },
      include: { author: { select: { name: true } }, category: true },
      orderBy: { publishedAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.blogPost.count({ where: { published: true, categoryId: category.id } }),
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
          <h1 className="text-3xl md:text-5xl font-dm-serif text-primary">{category.name}</h1>
          {category.description && (
            <p className="mt-2 text-dark/70">{category.description}</p>
          )}
        </header>

        <BlogCategories categories={categories} activeSlug={slug} />

        {posts.length === 0 ? (
          <p className="mt-12 text-center text-dark/60">Aucun article dans cette catégorie.</p>
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
                  href={`/blog/categorie/${slug}?page=${p}`}
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
