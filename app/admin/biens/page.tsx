'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminTable } from '@/components/admin/AdminTable';
import { AdminBadge } from '@/components/admin/AdminBadge';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

interface Listing {
  id: string;
  title: string;
  status: string;
  price: number;
  city: string;
  areaM2: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  images: string[];
  available: boolean;
  featured?: boolean;
  description: string;
}

const priceFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

function getStatusBadge(status: string) {
  switch (status) {
    case 'vente':
      return <AdminBadge variant="success">Vente</AdminBadge>;
    case 'location':
      return <AdminBadge variant="warning">Location</AdminBadge>;
    case 'vente&location':
      return <AdminBadge variant="default">Vente &amp; Location</AdminBadge>;
    default:
      return <AdminBadge>{status}</AdminBadge>;
  }
}

export default function AdminBiensPage() {
  const router = useRouter();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchListings();
  }, []);

  async function fetchListings() {
    try {
      const res = await fetch('/api/admin/listings');
      if (!res.ok) throw new Error('Erreur lors du chargement des biens');
      const data = await res.json();
      setListings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/listings/${deleteId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Erreur lors de la suppression');
      setListings((prev) => prev.filter((l) => l.id !== deleteId));
      setDeleteId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la suppression');
    } finally {
      setDeleting(false);
    }
  }

  const columns = [
    {
      key: 'image',
      label: 'Image',
      render: (item: Listing) => (
        <div className="relative w-16 h-12 rounded overflow-hidden bg-gray-100">
          {item.images?.[0] ? (
            <Image
              src={item.images[0]}
              alt={item.title}
              fill
              className="object-cover"
              sizes="64px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
              N/A
            </div>
          )}
        </div>
      ),
    },
    {
      key: 'title',
      label: 'Titre',
      render: (item: Listing) => (
        <span className="font-medium text-[#1A1A1A]">{item.title}</span>
      ),
    },
    {
      key: 'city',
      label: 'Ville',
    },
    {
      key: 'status',
      label: 'Status',
      render: (item: Listing) => getStatusBadge(item.status),
    },
    {
      key: 'price',
      label: 'Prix',
      render: (item: Listing) => priceFormatter.format(item.price),
    },
    {
      key: 'featured',
      label: 'Featured',
      render: (item: Listing) =>
        item.featured ? (
          <AdminBadge variant="success">Oui</AdminBadge>
        ) : (
          <AdminBadge variant="default">Non</AdminBadge>
        ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (item: Listing) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push(`/admin/biens/${item.id}`)}
            className="p-2 text-gray-500 hover:text-[#5D4940] hover:bg-[#5D4940]/10 rounded-lg transition"
            title="Modifier"
          >
            <FiEdit size={16} />
          </button>
          <button
            onClick={() => setDeleteId(item.id)}
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
            title="Supprimer"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Gestion des biens</h1>
          <button
            onClick={() => router.push('/admin/biens/nouveau')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5D4940] text-white rounded-lg text-sm font-medium hover:bg-[#4a3a33] transition"
          >
            <FiPlus size={18} />
            Nouveau bien
          </button>
        </div>

        {loading && <p className="text-gray-500">Chargement...</p>}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {!loading && !error && (
          <AdminTable columns={columns} data={listings} />
        )}

        <ConfirmDialog
          open={deleteId !== null}
          title="Confirmer la suppression"
          message="Etes-vous sur de vouloir supprimer ce bien ? Cette action est irreversible."
          onConfirm={handleDelete}
          onClose={() => setDeleteId(null)}
          confirmLabel="Supprimer"
        />
      </main>
    </div>
  );
}
