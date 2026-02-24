import 'dotenv/config';
import { PrismaClient, ListingStatus, PropertyType } from '../app/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function main() {
  console.log('Seeding database...');

  // ─── Admin User ──────────────────────────────────
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@ebagency.fr';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123456';
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: 'Admin EB Agency',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log(`Admin user created: ${admin.email}`);

  // ─── Blog Categories ─────────────────────────────
  const categories = [
    { name: 'Marché Immobilier', slug: 'marche-immobilier', description: 'Actualités et analyses du marché immobilier' },
    { name: 'Conseils Achat', slug: 'conseils-achat', description: 'Guides et conseils pour l\'achat immobilier' },
    { name: 'Investissement', slug: 'investissement', description: 'Stratégies d\'investissement immobilier' },
    { name: 'Vie de l\'Agence', slug: 'vie-agence', description: 'Actualités et événements de l\'agence' },
  ];

  for (const cat of categories) {
    await prisma.blogCategory.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }
  console.log(`${categories.length} blog categories created`);

  // ─── Listings ─────────────────────────────────────
  const listings = [
    {
      title: 'Villa Contemporaine sud de la France',
      slug: 'villa-contemporaine-mougins',
      status: ListingStatus.VENTE_LOCATION,
      price: 2500000,
      city: 'Mougins',
      areaM2: 1000,
      bedrooms: 6,
      bathrooms: 5,
      propertyType: PropertyType.VILLA,
      images: ['/Villa Mougins.jpeg'],
      available: true,
      featured: true,
      description: 'Villa contemporaine exceptionnelle avec vue panoramique sur la Méditerranée.',
    },
    {
      title: 'Hôtel Particulier Avenue Foch',
      slug: 'hotel-particulier-avenue-foch',
      status: ListingStatus.VENTE,
      price: 8500000,
      city: 'Paris',
      areaM2: 500,
      bedrooms: 6,
      bathrooms: 7,
      propertyType: PropertyType.HOTEL_PARTICULIER,
      images: ['/Hotel particulier.jpg'],
      available: true,
      featured: true,
      description: 'Hôtel particulier prestigieux dans le 16ème arrondissement de Paris.',
    },
    {
      title: 'Appartement T3 boulevard Exelmans',
      slug: 'appartement-t3-boulevard-exelmans',
      status: ListingStatus.LOCATION,
      price: 2800,
      city: 'Paris',
      areaM2: 70,
      bedrooms: 2,
      bathrooms: 1,
      propertyType: PropertyType.APPARTEMENT,
      images: ['/Appartement Exelmens.jpeg'],
      available: true,
      featured: false,
      description: 'Appartement moderne et lumineux proche du métro.',
    },
    {
      title: 'Appartement T4 Porte de Saint Cloud',
      slug: 'appartement-t4-porte-saint-cloud',
      status: ListingStatus.VENTE,
      price: 750000,
      city: 'Boulogne-Billancourt',
      areaM2: 113,
      exterieurM2: 20,
      bedrooms: 3,
      bathrooms: 2,
      propertyType: PropertyType.APPARTEMENT,
      images: ['/appartement st cloud.jpeg'],
      available: true,
      featured: false,
      description: 'Appartement avec balcon et terrasse privative.',
    },
    {
      title: 'Maison Moderne La Frette-sur-Seine',
      slug: 'maison-moderne-la-frette',
      status: ListingStatus.VENTE,
      price: 650000,
      city: 'La Frette-sur-Seine',
      areaM2: 200,
      exterieurM2: 600,
      bedrooms: 3,
      bathrooms: 3,
      propertyType: PropertyType.MAISON,
      images: ['/Maison La-Frette-sur-Seine.jpeg'],
      available: true,
      featured: false,
      description: 'Maison moderne avec grand jardin et piscine.',
    },
  ];

  for (const listing of listings) {
    await prisma.listing.upsert({
      where: { slug: listing.slug },
      update: {},
      create: listing,
    });
  }
  console.log(`${listings.length} listings created`);

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
