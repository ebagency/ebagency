'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminTable } from '@/components/admin/AdminTable';
import { AdminBadge } from '@/components/admin/AdminBadge';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  published: boolean;
  coverImage?: string;
  createdAt: string;
}

export default function AdminBlogPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const res = await fetch('/api/admin/blog');
      if (!res.ok) throw new Error('Erreur lors du chargement des articles');
      const data = await res.json();
      setPosts(data);
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
      const res = await fetch(`/api/admin/blog/${deleteId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Erreur lors de la suppression');
      setPosts((prev) => prev.filter((p) => p.id !== deleteId));
      setDeleteId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la suppression');
    } finally {
      setDeleting(false);
    }
  }

  const columns = [
    {
      key: 'coverImage',
      label: 'Image',
      render: (item: BlogPost) => (
        <div className="relative w-16 h-12 rounded overflow-hidden bg-gray-100">
          {item.coverImage ? (
            <Image
              src={item.coverImage}
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
      render: (item: BlogPost) => (
        <span className="font-medium text-[#1A1A1A]">{item.title}</span>
      ),
    },
    {
      key: 'category',
      label: 'Categorie',
    },
    {
      key: 'published',
      label: 'Publie',
      render: (item: BlogPost) =>
        item.published ? (
          <AdminBadge variant="success">Publie</AdminBadge>
        ) : (
          <AdminBadge variant="warning">Brouillon</AdminBadge>
        ),
    },
    {
      key: 'createdAt',
      label: 'Date',
      render: (item: BlogPost) =>
        new Date(item.createdAt).toLocaleDateString('fr-FR'),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (item: BlogPost) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push(`/admin/blog/${item.id}`)}
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
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Gestion du blog</h1>
          <button
            onClick={() => router.push('/admin/blog/nouveau')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5D4940] text-white rounded-lg text-sm font-medium hover:bg-[#4a3a33] transition"
          >
            <FiPlus size={18} />
            Nouvel article
          </button>
        </div>

        {loading && <p className="text-gray-500">Chargement...</p>}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {!loading && !error && (
          <AdminTable columns={columns} data={posts} />
        )}

        <ConfirmDialog
          open={deleteId !== null}
          title="Confirmer la suppression"
          message="Etes-vous sur de vouloir supprimer cet article ? Cette action est irreversible."
          onConfirm={handleDelete}
          onClose={() => setDeleteId(null)}
          confirmLabel="Supprimer"
        />
      </main>
    </div>
  );
}
