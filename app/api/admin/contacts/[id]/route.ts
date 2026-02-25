import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ContactStatus } from '@/app/generated/prisma';

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

    const contact = await prisma.contactMessage.findUnique({
      where: { id },
    });

    if (!contact) {
      return NextResponse.json({ error: 'Message non trouvé' }, { status: 404 });
    }

    return NextResponse.json(contact);
  } catch (error) {
    console.error('Erreur lors de la récupération du message:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la récupération du message' },
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

    const { status } = body;

    if (!status || !Object.values(ContactStatus).includes(status)) {
      return NextResponse.json(
        { error: 'Statut invalide. Valeurs acceptées : NEW, READ, REPLIED, ARCHIVED' },
        { status: 400 }
      );
    }

    const existing = await prisma.contactMessage.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Message non trouvé' }, { status: 404 });
    }

    const contact = await prisma.contactMessage.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du message:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la mise à jour du message' },
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

    const existing = await prisma.contactMessage.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Message non trouvé' }, { status: 404 });
    }

    await prisma.contactMessage.delete({ where: { id } });

    return NextResponse.json({ message: 'Message supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du message:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la suppression du message' },
      { status: 500 }
    );
  }
}
