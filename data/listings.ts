export type Listing = {
  id: string;
  title: string;
  status: 'vente' | 'location';
  price: number; // EUR
  city: string;
  areaM2: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: 'appartement' | 'villa' | 'maison';
  images: string[]; // public paths under /public
  available: boolean;
  featured?: boolean;
  description: string;
};

export const listings: Listing[] = [
  {
    id: 'villa-aurora-1',
    title: 'Villa Aurora avec vue mer',
    status: 'vente',
    price: 1890000,
    city: 'Cannes',
    areaM2: 260,
    bedrooms: 5,
    bathrooms: 4,
    propertyType: 'villa',
    images: ['/elements/villa-1.webp'],
    available: true,
    featured: true,
    description: 'Villa contemporaine avec piscine à débordement et jardin paysager.'
  },
  {
    id: 'villa-parc-2',
    title: 'Villa Parc Résidentiel',
    status: 'location',
    price: 8200,
    city: 'Saint-Tropez',
    areaM2: 210,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: 'villa',
    images: ['/elements/villa-2.jpg'],
    available: true,
    description: 'Villa de charme proche des plages, idéale pour des séjours d’exception.'
  },
  {
    id: 'villa-pinede-3',
    title: 'Villa La Pinède',
    status: 'vente',
    price: 1290000,
    city: 'Antibes',
    areaM2: 180,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: 'villa',
    images: ['/elements/villa-3.jpg'],
    available: true,
    description: 'Séjour lumineux, matériaux haut de gamme, quartier résidentiel calme.'
  },
  {
    id: 'appart-centre-1',
    title: 'Appartement centre-ville terrasse',
    status: 'location',
    price: 2200,
    city: 'Nice',
    areaM2: 85,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'appartement',
    images: ['/elements/appartement-1.jpg'],
    available: true,
    description: 'Dernier étage, terrasse ensoleillée, proche commerces et tram.'
  },
  {
    id: 'maison-provence-1',
    title: 'Maison Provençale avec jardin',
    status: 'vente',
    price: 670000,
    city: 'Aix-en-Provence',
    areaM2: 140,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'maison',
    images: ['/elements/villa-2.jpg'],
    available: false,
    description: 'Charme de l’ancien, belles hauteurs sous plafond, jardin intime.'
  },
  {
    id: 'appart-croisette-2',
    title: 'Appartement Croisette balcon',
    status: 'vente',
    price: 940000,
    city: 'Cannes',
    areaM2: 95,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'appartement',
    images: ['/elements/appartement-1.jpg'],
    available: true,
    description: 'Adresse prestigieuse, rénovation récente, prestations soignées.'
  },
  {
    id: 'loft-riviera-1',
    title: 'Loft Riviera design',
    status: 'location',
    price: 3100,
    city: 'Monaco',
    areaM2: 70,
    bedrooms: 1,
    bathrooms: 1,
    propertyType: 'appartement',
    images: ['/elements/appartement-1.jpg'],
    available: true,
    description: 'Espace ouvert, finitions premium, services et sécurité.'
  },
  {
    id: 'maison-bastide-2',
    title: 'Bastide rénovée avec piscine',
    status: 'vente',
    price: 840000,
    city: 'Grasse',
    areaM2: 170,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: 'maison',
    images: ['/elements/villa-3.jpg'],
    available: true,
    description: 'Authenticité et confort moderne, terrain arboré, vue dégagée.'
  }
];


