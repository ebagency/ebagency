import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const { id } = await params;

    const listing = await prisma.listing.findUnique({
      where: { id },
    });

    if (!listing) {
      return NextResponse.json({ error: 'Bien non trouvé' }, { status: 404 });
    }

    return NextResponse.json(listing);
  } catch (error) {
    console.error('Erreur lors de la récupération du bien:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la récupération du bien' },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await req.json();

    const existing = await prisma.listing.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Bien non trouvé' }, { status: 404 });
    }

    const listing = await prisma.listing.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du bien:', error);
    if ((error as { code?: string }).code === 'P2002') {
      return NextResponse.json(
        { error: 'Un bien avec ce slug existe déjà' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Erreur serveur lors de la mise à jour du bien' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const { id } = await params;

    const existing = await prisma.listing.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Bien non trouvé' }, { status: 404 });
    }

    await prisma.listing.delete({ where: { id } });

    return NextResponse.json({ message: 'Bien supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du bien:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la suppression du bien' },
      { status: 500 }
    );
  }
}
