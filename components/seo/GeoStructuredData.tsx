import Script from "next/script";

interface GeoStructuredDataProps {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export function GeoStructuredData({
  latitude,
  longitude,
  address,
  city,
  region,
  postalCode,
  country,
}: GeoStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "EB Agency - Agence Immobilière Paris",
    description:
      "Agence immobilière d'exception située au cœur de Paris, spécialisée dans l'achat, la vente et la location de biens haut de gamme.",
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      addressRegion: region,
      postalCode: postalCode,
      addressCountry: country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: latitude,
      longitude: longitude,
    },
    url: "https://www.ebagency.fr",
    telephone: "07 78 79 18 25",
    email: "contact@ebagency.fr",
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-19:00"],
    priceRange: "€€€",
    areaServed: {
      "@type": "City",
      name: "Paris",
    },
  };

  return (
    <Script
      id="geo-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}

// Données par défaut pour EB Agency
export function EBAgencyGeoStructuredData() {
  return (
    <GeoStructuredData
      latitude={48.8566}
      longitude={2.3522}
      address="78 Avenue des Champs-Élysées"
      city="Paris"
      region="Île-de-France"
      postalCode="75008"
      country="FR"
    />
  );
}
