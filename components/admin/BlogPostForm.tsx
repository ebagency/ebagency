'use client';

import { useState, useEffect } from 'react';
import { TiptapEditor } from '@/components/admin/TiptapEditor';
import { ImageUpload } from '@/components/admin/ImageUpload';

/* ---------- Types ---------- */

interface Category {
  id: string;
  name: string;
}

interface BlogPostData {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categoryId: string;
  coverImage: string;
  published: boolean;
}

interface BlogPostFormProps {
  post?: BlogPostData;
  categories: Category[];
  onSubmit: (data: BlogPostData) => Promise<void> | void;
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

const defaultPost: BlogPostData = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  categoryId: '',
  coverImage: '',
  published: false,
};

/* ---------- Component ---------- */

export function BlogPostForm({ post, categories, onSubmit }: BlogPostFormProps) {
  const [form, setForm] = useState<BlogPostData>(post ?? defaultPost);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  /* Auto-generate slug from title */
  useEffect(() => {
    if (!post) {
      setForm((prev) => ({ ...prev, slug: slugify(prev.title) }));
    }
  }, [form.title, post]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

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
    if (!form.excerpt.trim()) newErrors.excerpt = "L'extrait est requis.";
    if (!form.content.trim() || form.content === '<p></p>')
      newErrors.content = 'Le contenu est requis.';
    if (!form.categoryId) newErrors.categoryId = 'La categorie est requise.';

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

  /* ---------- Style helpers ---------- */

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

      {/* Category */}
      <div>
        <label htmlFor="categoryId" className={labelClass}>
          Categorie *
        </label>
        <select
          id="categoryId"
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Selectionnez une categorie</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.categoryId && <p className={errorClass}>{errors.categoryId}</p>}
      </div>

      {/* Excerpt */}
      <div>
        <label htmlFor="excerpt" className={labelClass}>
          Extrait *
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={3}
          value={form.excerpt}
          onChange={handleChange}
          className={inputClass}
          placeholder="Resume court de l'article..."
        />
        {errors.excerpt && <p className={errorClass}>{errors.excerpt}</p>}
      </div>

      {/* Content (TipTap) */}
      <div>
        <label className={labelClass}>Contenu *</label>
        <TiptapEditor
          content={form.content}
          onChange={(html) => {
            setForm((prev) => ({ ...prev, content: html }));
            if (errors.content) {
              setErrors((prev) => {
                const next = { ...prev };
                delete next.content;
                return next;
              });
            }
          }}
        />
        {errors.content && <p className={errorClass}>{errors.content}</p>}
      </div>

      {/* Cover Image */}
      <div>
        <label className={labelClass}>Image de couverture</label>
        <ImageUpload
          value={form.coverImage ? [form.coverImage] : []}
          onChange={(urls) =>
            setForm((prev) => ({ ...prev, coverImage: urls[0] ?? '' }))
          }
          max={1}
        />
      </div>

      {/* Published */}
      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            checked={form.published}
            onChange={handleChange}
            className="w-4 h-4 rounded border-gray-300 text-[#5D4940] focus:ring-[#5D4940]"
          />
          Publier l&apos;article
        </label>
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
            : post
              ? 'Mettre a jour'
              : "Creer l'article"}
        </button>
      </div>
    </form>
  );
}
