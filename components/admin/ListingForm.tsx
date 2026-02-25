'use client';

import { useState, useEffect } from 'react';
import { ImageUpload } from '@/components/admin/ImageUpload';

/* ---------- Types ---------- */

interface ListingData {
  id?: string;
  title: string;
  slug: string;
  status: 'VENTE' | 'LOCATION' | 'VENTE_LOCATION';
  price: number;
  city: string;
  areaM2: number;
  exterieurM2?: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: 'APPARTEMENT' | 'VILLA' | 'MAISON' | 'HOTEL_PARTICULIER';
  description: string;
  available: boolean;
  featured: boolean;
  images: string[];
}

interface ListingFormProps {
  listing?: ListingData;
  onSubmit: (data: ListingData) => Promise<void> | void;
}

/* ---------- Helpers ---------- */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const statusOptions = [
  { value: 'VENTE', label: 'Vente' },
  { value: 'LOCATION', label: 'Location' },
  { value: 'VENTE_LOCATION', label: 'Vente & Location' },
] as const;

const propertyTypeOptions = [
  { value: 'APPARTEMENT', label: 'Appartement' },
  { value: 'VILLA', label: 'Villa' },
  { value: 'MAISON', label: 'Maison' },
  { value: 'HOTEL_PARTICULIER', label: 'Hotel particulier' },
] as const;

/* ---------- Default values ---------- */

const defaultListing: ListingData = {
  title: '',
  slug: '',
  status: 'VENTE',
  price: 0,
  city: '',
  areaM2: 0,
  exterieurM2: undefined,
  bedrooms: 0,
  bathrooms: 0,
  propertyType: 'APPARTEMENT',
  description: '',
  available: true,
  featured: false,
  images: [],
};

/* ---------- Component ---------- */

export function ListingForm({ listing, onSubmit }: ListingFormProps) {
  const [form, setForm] = useState<ListingData>(listing ?? defaultListing);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  /* Auto-generate slug from title */
  useEffect(() => {
    if (!listing) {
      setForm((prev) => ({ ...prev, slug: slugify(prev.title) }));
    }
  }, [form.title, listing]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    if (!form.title.trim()) newErrors.title = 'Le titre est requis.';
    if (!form.slug.trim()) newErrors.slug = 'Le slug est requis.';
    if (!form.city.trim()) newErrors.city = 'La ville est requise.';
    if (form.price <= 0) newErrors.price = 'Le prix doit etre superieur a 0.';
    if (form.areaM2 <= 0) newErrors.areaM2 = 'La surface doit etre superieure a 0.';
    if (form.bedrooms < 0) newErrors.bedrooms = 'Nombre de chambres invalide.';
    if (form.bathrooms < 0) newErrors.bathrooms = 'Nombre de salles de bain invalide.';
    if (!form.description.trim()) newErrors.description = 'La description est requise.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await onSubmit(form);
    } finally {
      setLoading(false);
    }
  }

  /* ---------- Input helpers ---------- */

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5D4940]/50 focus:border-[#5D4940] transition-colors';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';
  const errorClass = 'text-xs text-red-600 mt-1';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title & Slug */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="title" className={labelClass}>
            Titre *
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.title && <p className={errorClass}>{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="slug" className={labelClass}>
            Slug *
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            value={form.slug}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.slug && <p className={errorClass}>{errors.slug}</p>}
        </div>
      </div>

      {/* Status & Property type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="status" className={labelClass}>
            Statut *
          </label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            className={inputClass}
          >
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Type de bien *
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className={inputClass}
          >
            {propertyTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Price & City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="price" className={labelClass}>
            Prix (EUR) *
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min={0}
            value={form.price}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.price && <p className={errorClass}>{errors.price}</p>}
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            Ville *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.city && <p className={errorClass}>{errors.city}</p>}
        </div>
      </div>

      {/* Area, Exterior, Bedrooms, Bathrooms */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <label htmlFor="areaM2" className={labelClass}>
            Surface (m2) *
          </label>
          <input
            id="areaM2"
            name="areaM2"
            type="number"
            min={0}
            value={form.areaM2}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.areaM2 && <p className={errorClass}>{errors.areaM2}</p>}
        </div>
        <div>
          <label htmlFor="exterieurM2" className={labelClass}>
            Exterieur (m2)
          </label>
          <input
            id="exterieurM2"
            name="exterieurM2"
            type="number"
            min={0}
            value={form.exterieurM2 ?? ''}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bedrooms" className={labelClass}>
            Chambres *
          </label>
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            min={0}
            value={form.bedrooms}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.bedrooms && <p className={errorClass}>{errors.bedrooms}</p>}
        </div>
        <div>
          <label htmlFor="bathrooms" className={labelClass}>
            Salles de bain *
          </label>
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            min={0}
            value={form.bathrooms}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.bathrooms && <p className={errorClass}>{errors.bathrooms}</p>}
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className={labelClass}>
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={form.description}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.description && <p className={errorClass}>{errors.description}</p>}
      </div>

      {/* Checkboxes */}
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
            className="w-4 h-4 rounded border-gray-300 text-[#5D4940] focus:ring-[#5D4940]"
          />
          Disponible
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
            className="w-4 h-4 rounded border-gray-300 text-[#5D4940] focus:ring-[#5D4940]"
          />
          Mis en avant
        </label>
      </div>

      {/* Images */}
      <div>
        <label className={labelClass}>Images</label>
        <ImageUpload
          value={form.images}
          onChange={(urls) => setForm((prev) => ({ ...prev, images: urls }))}
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-4 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 text-sm font-medium text-white bg-[#5D4940] rounded-lg hover:bg-[#4a3a33] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
        >
          {loading
            ? 'Enregistrement...'
            : listing
              ? 'Mettre a jour'
              : 'Creer le bien'}
        </button>
      </div>
    </form>
  );
}
