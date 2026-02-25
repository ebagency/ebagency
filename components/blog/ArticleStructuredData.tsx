interface ArticleStructuredDataProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}

export function ArticleStructuredData({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    ...(image && { image }),
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EB Agency',
      url: 'https://www.ebagency.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ebagency.fr/logo/Logo EB Agency avec baseline - sans fond.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
