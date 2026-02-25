import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { BlogContent } from '@/components/blog/BlogContent';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ArticleStructuredData } from '@/components/blog/ArticleStructuredData';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: { author: { select: { name: true } }, category: true },
  });

  if (!post) return { title: 'Article non trouvé' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt?.toISOString(),
      authors: post.author?.name ? [post.author.name] : undefined,
      ...(post.coverImage && { images: [{ url: post.coverImage }] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug, published: true },
    include: { author: { select: { name: true } }, category: true },
  });

  if (!post) notFound();

  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      published: true,
      id: { not: post.id },
      ...(post.categoryId ? { categoryId: post.categoryId } : {}),
    },
    include: { author: { select: { name: true } }, category: true },
    orderBy: { publishedAt: 'desc' },
    take: 3,
  });

  const baseUrl = 'https://www.ebagency.fr';

  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <ArticleStructuredData
        title={post.title}
        description={post.excerpt}
        url={`${baseUrl}/blog/${post.slug}`}
        image={post.coverImage || ''}
        datePublished={post.publishedAt?.toISOString() || post.createdAt.toISOString()}
        dateModified={post.updatedAt.toISOString()}
        authorName={post.author?.name || 'EB Agency'}
      />

      <article className="px-4 md:px-8 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-dark/60">
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          {post.category && (
            <>
              <span className="mx-2">/</span>
              <Link href={`/blog/categorie/${post.category.slug}`} className="hover:text-primary">
                {post.category.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-dark/80">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {post.category && (
            <Link
              href={`/blog/categorie/${post.category.slug}`}
              className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4"
            >
              {post.category.name}
            </Link>
          )}
          <h1 className="text-3xl md:text-5xl font-dm-serif text-primary leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-dark/60">
            {post.author?.name && <span>Par {post.author.name}</span>}
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
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        {/* Content */}
        <BlogContent content={post.content} />

        {/* Share */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <ShareButtons title={post.title} url={`${baseUrl}/blog/${post.slug}`} />
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 md:px-8 max-w-7xl mx-auto mt-16">
          <RelatedPosts posts={relatedPosts} />
        </section>
      )}
    </main>
  );
}
