import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  posts: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string | null;
    publishedAt: Date | null;
    author: { name: string | null } | null;
    category: { name: string; slug: string } | null;
  }>;
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-dm-serif text-primary mb-8">
        Articles similaires
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
