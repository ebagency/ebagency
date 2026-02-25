'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export default function AdminSettingsPage() {
  const { data: session, status } = useSession();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword.length < 8) {
      setError('Le nouveau mot de passe doit contenir au moins 8 caracteres.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    // Placeholder - no backend integration
    setMessage('Cette fonctionnalite sera bientot disponible.');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Parametres</h1>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 max-w-2xl">
          <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">
            Informations du compte
          </h2>

          {status === 'loading' && (
            <p className="text-gray-500">Chargement...</p>
          )}

          {status === 'authenticated' && session?.user && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#5D4940]/10 flex items-center justify-center text-[#5D4940] text-xl font-bold">
                  {session.user.name
                    ? session.user.name.charAt(0).toUpperCase()
                    : session.user.email?.charAt(0).toUpperCase() || 'A'}
                </div>
                <div>
                  {session.user.name && (
                    <p className="font-medium text-[#1A1A1A]">
                      {session.user.name}
                    </p>
                  )}
                  <p className="text-sm text-gray-500">{session.user.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Nom
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    {session.user.name || '-'}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    {session.user.email || '-'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {status === 'unauthenticated' && (
            <p className="text-gray-500">Non connecte.</p>
          )}
        </div>

        {/* Change Password Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">
            Changer le mot de passe
          </h2>

          {message && (
            <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-4 text-sm">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mot de passe actuel
              </label>
              <input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nouveau mot de passe
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirmer le nouveau mot de passe
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#5D4940] text-white rounded-lg text-sm font-medium hover:bg-[#4a3a33] transition"
              >
                Mettre a jour le mot de passe
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
