import Link from 'next/link';

interface BlogCategoriesProps {
  categories: Array<{
    name: string;
    slug: string;
    _count: { posts: number };
  }>;
  activeSlug?: string;
}

export function BlogCategories({ categories, activeSlug }: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
          !activeSlug
            ? 'bg-primary text-white'
            : 'bg-white text-dark/70 border border-dark/20 hover:border-primary hover:text-primary'
        }`}
      >
        Tous
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/blog/categorie/${cat.slug}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            activeSlug === cat.slug
              ? 'bg-primary text-white'
              : 'bg-white text-dark/70 border border-dark/20 hover:border-primary hover:text-primary'
          }`}
        >
          {cat.name} ({cat._count.posts})
        </Link>
      ))}
    </div>
  );
}
