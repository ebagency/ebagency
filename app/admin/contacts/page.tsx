'use client';

import { useEffect, useState } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminTable } from '@/components/admin/AdminTable';
import { FiEye, FiTrash2 } from 'react-icons/fi';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  createdAt: string;
}

function AdminBadge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' }) {
  const colors: Record<string, string> = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[variant]}`}>
      {children}
    </span>
  );
}

function ConfirmDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'new':
      return <AdminBadge variant="info">Nouveau</AdminBadge>;
    case 'read':
      return <AdminBadge variant="warning">Lu</AdminBadge>;
    case 'replied':
      return <AdminBadge variant="success">Repondu</AdminBadge>;
    case 'archived':
      return <AdminBadge variant="default">Archive</AdminBadge>;
    default:
      return <AdminBadge>{status}</AdminBadge>;
  }
}

const statusOptions = [
  { value: 'new', label: 'Nouveau' },
  { value: 'read', label: 'Lu' },
  { value: 'replied', label: 'Repondu' },
  { value: 'archived', label: 'Archive' },
];

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const res = await fetch('/api/admin/contacts');
      if (!res.ok) throw new Error('Erreur lors du chargement des contacts');
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!deleteId) return;
    try {
      const res = await fetch(`/api/admin/contacts/${deleteId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Erreur lors de la suppression');
      setContacts((prev) => prev.filter((c) => c.id !== deleteId));
      setDeleteId(null);
      if (selectedContact?.id === deleteId) {
        setSelectedContact(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la suppression');
    }
  }

  async function handleStatusChange(contactId: string, newStatus: string) {
    try {
      const res = await fetch(`/api/admin/contacts/${contactId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Erreur lors de la mise a jour du statut');
      setContacts((prev) =>
        prev.map((c) =>
          c.id === contactId ? { ...c, status: newStatus as Contact['status'] } : c
        )
      );
      if (selectedContact?.id === contactId) {
        setSelectedContact((prev) =>
          prev ? { ...prev, status: newStatus as Contact['status'] } : prev
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la mise a jour');
    }
  }

  function handleView(contact: Contact) {
    setSelectedContact(contact);
    if (contact.status === 'new') {
      handleStatusChange(contact.id, 'read');
    }
  }

  const columns = [
    {
      key: 'name',
      label: 'Nom',
      render: (item: Contact) => (
        <span className="font-medium text-[#1A1A1A]">{item.name}</span>
      ),
    },
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'service',
      label: 'Service',
      render: (item: Contact) => item.service || '-',
    },
    {
      key: 'status',
      label: 'Status',
      render: (item: Contact) => (
        <select
          value={item.status}
          onChange={(e) => handleStatusChange(item.id, e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: 'createdAt',
      label: 'Date',
      render: (item: Contact) =>
        new Date(item.createdAt).toLocaleDateString('fr-FR'),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (item: Contact) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleView(item)}
            className="p-2 text-gray-500 hover:text-[#5D4940] hover:bg-[#5D4940]/10 rounded-lg transition"
            title="Voir"
          >
            <FiEye size={16} />
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
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Gestion des contacts</h1>
        </div>

        {loading && <p className="text-gray-500">Chargement...</p>}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-6">
            <AdminTable columns={columns} data={contacts} />

            {/* Contact Detail Panel */}
            {selectedContact && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-[#1A1A1A]">
                      Message de {selectedContact.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {selectedContact.email}
                      {selectedContact.phone && ` - ${selectedContact.phone}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(selectedContact.status)}
                    <button
                      onClick={() => setSelectedContact(null)}
                      className="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Fermer
                    </button>
                  </div>
                </div>

                {selectedContact.service && (
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Service:</span> {selectedContact.service}
                  </p>
                )}

                <p className="text-sm text-gray-500 mb-3">
                  <span className="font-medium">Date:</span>{' '}
                  {new Date(selectedContact.createdAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {selectedContact.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        <ConfirmDialog
          open={deleteId !== null}
          title="Confirmer la suppression"
          message="Etes-vous sur de vouloir supprimer ce message ? Cette action est irreversible."
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      </main>
    </div>
  );
}
