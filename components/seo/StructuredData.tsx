import Script from 'next/script';

interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs?: string[];
}

interface ServiceData {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}

interface FAQData {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: 'organization' | 'service' | 'faq' | 'breadcrumb' | 'localBusiness';
  data: OrganizationData | ServiceData | FAQData[] | unknown;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://www.eb-agency.fr';
    
    switch (type) {
      case 'organization':
        const orgData = data as OrganizationData;
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: orgData.name,
          url: orgData.url,
          logo: orgData.logo,
          description: orgData.description,
          address: orgData.address ? {
            '@type': 'PostalAddress',
            ...orgData.address
          } : undefined,
          contactPoint: orgData.contactPoint ? {
            '@type': 'ContactPoint',
            ...orgData.contactPoint
          } : undefined,
          sameAs: orgData.sameAs || [
            'https://www.linkedin.com/company/eb-agency',
            'https://www.instagram.com/ebagency',
            'https://www.facebook.com/ebagency'
          ]
        };

      case 'service':
        const serviceData = data as ServiceData;
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceData.name,
          description: serviceData.description,
          provider: {
            '@type': 'Organization',
            name: serviceData.provider,
            url: baseUrl
          },
          areaServed: serviceData.areaServed,
          serviceType: serviceData.serviceType
        };

      case 'faq':
        const faqData = data as FAQData[];
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: (data as Array<{ name: string; url: string }>).map((item, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'EB Agency',
          description: 'Agence de communication de luxe spécialisée dans le design, branding et marketing premium',
          url: baseUrl,
          telephone: '07 78 79 18 25',
          email: 'contact@ebagency.fr',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '78 Avenue des Champs-Élysées',
            addressLocality: 'Paris',
            addressRegion: 'Île-de-France',
            postalCode: '75008',
            addressCountry: 'FR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 48.8566,
            longitude: 2.3522
          },
          openingHours: [
            'Mo-Fr 09:00-18:00',
            'Sa 10:00-16:00'
          ],
          priceRange: '€€€',
          serviceArea: {
            '@type': 'Country',
            name: 'France'
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}

// Composants spécialisés pour chaque type
export function OrganizationStructuredData() {
  const data: OrganizationData = {
    name: 'EB Agency',
    url: 'https://www.eb-agency.fr',
    logo: 'https://www.eb-agency.fr/logo/Logo EB Agency avec baseline - sans fond.png',
    description: 'Agence de communication de luxe spécialisée dans le design, branding et marketing premium. 15+ ans d\'expertise, 150+ projets réalisés.',
    address: {
      streetAddress: '78 Avenue des Champs-Élysées',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      postalCode: '75008',
      addressCountry: 'FR'
    },
    contactPoint: {
      telephone: '07 78 79 18 25',
      contactType: 'customer service',
      email: 'contact@ebagency.fr'
    },
    sameAs: [
      'https://www.linkedin.com/company/eb-agency',
      'https://www.instagram.com/ebagency',
      'https://www.facebook.com/ebagency'
    ]
  };

  return <StructuredData type="organization" data={data} />;
}

export function ServiceStructuredData({ name, description, serviceType }: { name: string; description: string; serviceType: string }) {
  const data: ServiceData = {
    name,
    description,
    provider: 'EB Agency',
    areaServed: 'France',
    serviceType
  };

  return <StructuredData type="service" data={data} />;
}

export function FAQStructuredData({ faqs }: { faqs: FAQData[] }) {
  return <StructuredData type="faq" data={faqs} />;
}

export function BreadcrumbStructuredData({ items }: { items: { name: string; url: string }[] }) {
  return <StructuredData type="breadcrumb" data={items} />;
}

export function LocalBusinessStructuredData() {
  return <StructuredData type="localBusiness" data={null} />;
}
