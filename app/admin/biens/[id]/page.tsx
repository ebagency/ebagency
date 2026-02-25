'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ImageUpload } from '@/components/admin/ImageUpload';

interface ListingFormData {
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
  featured: boolean;
  description: string;
  exterieur_m2?: number;
}

export default function AdminEditBienPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [formData, setFormData] = useState<ListingFormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchListing() {
      try {
        const res = await fetch(`/api/admin/listings/${id}`);
        if (!res.ok) throw new Error('Erreur lors du chargement du bien');
        const data = await res.json();
        setFormData({
          title: data.title || '',
          status: data.status || 'vente',
          price: data.price || 0,
          city: data.city || '',
          areaM2: data.areaM2 || 0,
          bedrooms: data.bedrooms || 0,
          bathrooms: data.bathrooms || 0,
          propertyType: data.propertyType || 'appartement',
          images: data.images || [],
          available: data.available ?? true,
          featured: data.featured ?? false,
          description: data.description || '',
          exterieur_m2: data.exterieur_m2 || 0,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    }
    fetchListing();
  }, [id]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setFormData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [name]:
          type === 'checkbox'
            ? (e.target as HTMLInputElement).checked
            : type === 'number'
            ? Number(value)
            : value,
      };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData) return;
    setSaving(true);
    setError('');

    try {
      const res = await fetch(`/api/admin/listings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erreur lors de la mise a jour du bien');
      }

      router.push('/admin/biens');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      setSaving(false);
    }
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Modifier le bien</h1>
          <p className="text-sm text-gray-500 mt-1">
            Mettez a jour les informations du bien.
          </p>
        </div>

        {loading && <p className="text-gray-500">Chargement...</p>}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {formData && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6 max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Titre
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                >
                  <option value="vente">Vente</option>
                  <option value="location">Location</option>
                  <option value="vente&location">Vente &amp; Location</option>
                </select>
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de bien
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                >
                  <option value="appartement">Appartement</option>
                  <option value="villa">Villa</option>
                  <option value="maison">Maison</option>
                  <option value="hôtel particulier">Hotel particulier</option>
                </select>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Prix (EUR)
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  required
                  min={0}
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  Ville
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="areaM2" className="block text-sm font-medium text-gray-700 mb-1">
                  Surface (m2)
                </label>
                <input
                  id="areaM2"
                  name="areaM2"
                  type="number"
                  required
                  min={0}
                  value={formData.areaM2}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="exterieur_m2" className="block text-sm font-medium text-gray-700 mb-1">
                  Exterieur (m2)
                </label>
                <input
                  id="exterieur_m2"
                  name="exterieur_m2"
                  type="number"
                  min={0}
                  value={formData.exterieur_m2 || 0}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Chambres
                </label>
                <input
                  id="bedrooms"
                  name="bedrooms"
                  type="number"
                  required
                  min={0}
                  value={formData.bedrooms}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Salles de bain
                </label>
                <input
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  required
                  min={0}
                  value={formData.bathrooms}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition"
                />
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    name="available"
                    type="checkbox"
                    checked={formData.available}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#5D4940] rounded border-gray-300 focus:ring-[#5D4940]"
                  />
                  <span className="text-sm text-gray-700">Disponible</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    name="featured"
                    type="checkbox"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#5D4940] rounded border-gray-300 focus:ring-[#5D4940]"
                  />
                  <span className="text-sm text-gray-700">Mis en avant</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4940] focus:border-transparent outline-none transition resize-y"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Images
              </label>
              <ImageUpload
                value={formData.images}
                onChange={(urls) => setFormData((prev) => prev ? { ...prev, images: urls } : prev)}
              />
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-[#5D4940] text-white rounded-lg text-sm font-medium hover:bg-[#4a3a33] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Enregistrement...' : 'Mettre a jour'}
              </button>
              <button
                type="button"
                onClick={() => router.push('/admin/biens')}
                className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
              >
                Annuler
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
