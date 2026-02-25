'use client';

import { useEffect, useState } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminTable } from '@/components/admin/AdminTable';
import { AdminBadge } from '@/components/admin/AdminBadge';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import { FiEye, FiTrash2 } from 'react-icons/fi';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status: 'NEW' | 'READ' | 'REPLIED' | 'ARCHIVED';
  createdAt: string;
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'NEW':
      return <AdminBadge variant="info">Nouveau</AdminBadge>;
    case 'READ':
      return <AdminBadge variant="warning">Lu</AdminBadge>;
    case 'REPLIED':
      return <AdminBadge variant="success">Repondu</AdminBadge>;
    case 'ARCHIVED':
      return <AdminBadge variant="default">Archive</AdminBadge>;
    default:
      return <AdminBadge>{status}</AdminBadge>;
  }
}

const statusOptions = [
  { value: 'NEW', label: 'Nouveau' },
  { value: 'READ', label: 'Lu' },
  { value: 'REPLIED', label: 'Repondu' },
  { value: 'ARCHIVED', label: 'Archive' },
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
        method: 'PUT',
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
    if (contact.status === 'NEW') {
      handleStatusChange(contact.id, 'READ');
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
          onClose={() => setDeleteId(null)}
          confirmLabel="Supprimer"
        />
      </main>
    </div>
  );
}
