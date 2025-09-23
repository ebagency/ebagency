export type Listing = {
  id: string;
  title: string;
  status: 'vente' | 'location' | 'vente&location';
  price: number; // EUR
  city: string;
  areaM2: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: 'appartement' | 'villa' | 'maison' | 'hôtel particulier';
  images: string[]; // public paths under /public
  available: boolean;
  featured?: boolean;
  description: string;
  exterieur_m2?: number;
};

export const listings: Listing[] = [
  {
    id: 'villa-contemporaine-mougins',
    title: 'Villa Contemporaine sud de la France',
    status: 'vente&location',
    price: 2500000,
    city: 'Mougins',
    areaM2: 1000,
    bedrooms: 6,
    bathrooms: 5,
    propertyType: 'villa',
    images: ['/Villa Mougins.jpeg'],
    available: true,
    featured: true,
    description: 'Villa contemporaine exceptionnelle avec vue panoramique sur la Méditerranée.'
  },
  {
    id: 'hotel-particulier-avenue-foch',
    title: 'Hôtel Particulier Avenue Foch',
    status: 'vente',
    price: 8500000,
    city: 'Paris',
    areaM2: 500,
    bedrooms: 6,
    bathrooms: 7,
    propertyType: 'hôtel particulier',
    images: ['/Hotel particulier.jpg'],
    available: true,
    featured: true,
    description: 'Hôtel particulier prestigieux dans le 16ème arrondissement de Paris.'
  },
  {
    id: 'appartement-t3-boulevard-exelmans',
    title: 'Appartement T3 boulevard Exelmans',
    status: 'location',
    price: 2800,
    city: 'Paris',
    areaM2: 70,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'appartement',
    images: ['/Appartement Exelmens.jpeg'],
    available: true,
    description: 'Appartement moderne et lumineux proche du métro.'
  },
  {
    id: 'appartement-t4-porte-saint-cloud',
    title: 'Appartement T4 Porte de Saint Cloud',
    status: 'vente',
    price: 750000,
    city: 'Boulogne-Billancourt',
    areaM2: 113,
    bedrooms: 3,
    bathrooms: 2,
    exterieur_m2: 20,
    propertyType: 'appartement',
    images: ['/appartement st cloud.jpeg'],
    available: true,
    description: 'Appartement avec balcon et terrasse privative.'
  },
  {
    id: 'maison-moderne-la-frette',
    title: 'Maison Moderne La Frette-sur-Seine',
    status: 'vente',
    price: 650000,
    city: 'La Frette-sur-Seine',
    areaM2: 200,
    bedrooms: 3,
    bathrooms: 3,
    exterieur_m2: 600,
    propertyType: 'maison',
    images: ['/Maison La-Frette-sur-Seine.jpeg'],
    available: true,
    description: 'Maison moderne avec grand jardin et piscine.'
  }
];


