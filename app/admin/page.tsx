'use client';

import { useEffect, useState } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminCard } from '@/components/admin/AdminCard';
import { FiMapPin, FiFileText, FiMail } from 'react-icons/fi';

interface Stats {
  listings: number;
  blogPosts: number;
  contacts: number;
  newContacts: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/admin/stats');
        if (!res.ok) throw new Error('Erreur lors du chargement des statistiques');
        const data = await res.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8">
        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-8">Dashboard</h1>

        {loading && <p className="text-gray-500">Chargement...</p>}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <AdminCard
              title="Biens"
              value={stats.listings}
              icon={<FiMapPin size={24} />}
            />
            <AdminCard
              title="Articles Blog"
              value={stats.blogPosts}
              icon={<FiFileText size={24} />}
            />
            <AdminCard
              title="Messages"
              value={stats.contacts}
              icon={<FiMail size={24} />}
            />
            <AdminCard
              title="Nouveaux Messages"
              value={stats.newContacts}
              icon={<FiMail size={24} />}
            />
          </div>
        )}

        {/* Recent Activity Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">
            Activite recente
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
              <div className="w-2 h-2 rounded-full bg-[#5D4940]" />
              <p className="text-sm text-gray-600">
                Aucune activite recente pour le moment.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
