import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ListingStatus, PropertyType } from '@/app/generated/prisma';

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.max(1, Math.min(100, parseInt(searchParams.get('limit') || '20')));
    const skip = (page - 1) * limit;

    const [listings, total] = await Promise.all([
      prisma.listing.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.listing.count(),
    ]);

    return NextResponse.json({
      listings,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des biens:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la récupération des biens' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const body = await req.json();

    const { title, status, price, city, areaM2, bedrooms, bathrooms, propertyType, description } = body;

    const errors: string[] = [];
    if (!title || typeof title !== 'string') errors.push('Le titre est requis.');
    if (!status || !Object.values(ListingStatus).includes(status)) errors.push('Le statut est invalide.');
    if (price === undefined || typeof price !== 'number' || price < 0) errors.push('Le prix est requis et doit être positif.');
    if (!city || typeof city !== 'string') errors.push('La ville est requise.');
    if (areaM2 === undefined || typeof areaM2 !== 'number' || areaM2 < 0) errors.push('La surface est requise et doit être positive.');
    if (bedrooms === undefined || typeof bedrooms !== 'number') errors.push('Le nombre de chambres est requis.');
    if (bathrooms === undefined || typeof bathrooms !== 'number') errors.push('Le nombre de salles de bain est requis.');
    if (!propertyType || !Object.values(PropertyType).includes(propertyType)) errors.push('Le type de bien est invalide.');
    if (!description || typeof description !== 'string') errors.push('La description est requise.');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const slug = body.slug ? generateSlug(body.slug) : generateSlug(title);

    const listing = await prisma.listing.create({
      data: {
        title,
        slug,
        status,
        price,
        city,
        areaM2,
        exterieurM2: body.exterieurM2 ?? null,
        bedrooms,
        bathrooms,
        propertyType,
        images: body.images || [],
        available: body.available ?? true,
        featured: body.featured ?? false,
        description,
      },
    });

    return NextResponse.json(listing, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du bien:', error);
    if ((error as { code?: string }).code === 'P2002') {
      return NextResponse.json(
        { error: 'Un bien avec ce slug existe déjà' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Erreur serveur lors de la création du bien' },
      { status: 500 }
    );
  }
}
