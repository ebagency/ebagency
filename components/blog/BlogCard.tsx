import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string | null;
    publishedAt: Date | null;
    author: { name: string | null } | null;
    category: { name: string; slug: string } | null;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-all">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-primary/40 text-4xl font-dm-serif">EB</span>
            </div>
          )}
          {post.category && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs rounded-full">
              {post.category.name}
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-lg font-dm-serif text-primary mb-2 line-clamp-2 group-hover:opacity-80 transition">
            {post.title}
          </h3>
          <p className="text-dark/70 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-dark/50">
            {post.author?.name && <span>{post.author.name}</span>}
            {post.publishedAt && (
              <time dateTime={post.publishedAt.toISOString()}>
                {post.publishedAt.toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
