"use client"

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components';

export type FiltersProps = {
  cities: string[];
  initial: Record<string, string | undefined>;
};

export function Filters({ cities, initial }: FiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  // Ouvrir par défaut sur desktop, fermé sur mobile. Met à jour si le viewport change.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const setByMQ = () => setOpen(mq.matches);
    setByMQ();
    mq.addEventListener('change', setByMQ);
    return () => mq.removeEventListener('change', setByMQ);
  }, []);

  const current = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

  function onSubmit(formData: FormData) {
    const params = new URLSearchParams();
    const entries = Array.from(formData.entries()) as [string, string][];
    for (const [key, value] of entries) {
      const v = value.trim();
      if (v) params.set(key, v);
    }
    // Reset pagination when filters change
    params.delete('page');
    router.push(`${pathname}?${params.toString()}`);
    setOpen(false);
  }

  function onReset() {
    router.push(pathname);
    setOpen(false);
  }

  return (
    <section className="text-dark md:sticky md:top-24 md:z-20 bg-white/90 backdrop-blur-xs">
      {/* Barre d'action commune (mobile + desktop) */}
      <div className="flex justify-between items-center p-3 border border-black/10">
        <h2 className="text-lg font-semibold">Filtres</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="filters-panel"
            className="border-primary text-primary hover:bg-primary hover:text-white!"
          >
            {open ? 'Masquer' : 'Afficher'}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setOpen(true);
              onReset();
            }}
            className="border-dark hover:border-black text-dark hover:bg-black hover:text-white"
          >
            Réinitialiser
          </Button>
        </div>
      </div>

      <div
        id="filters-panel"
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[1200px] py-2 mt-4' : 'max-h-0 py-0 mt-0'}`}
        aria-hidden={!open}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            onSubmit(fd);
          }}
          className="grid grid-cols-1 md:grid-cols-6 gap-3 p-4 rounded-md border border-black/10 bg-white shadow-soft"
        >
        <div className="flex flex-col">
          <label htmlFor="status" className="text-xs uppercase tracking-wide text-dark/70">Type</label>
          <select id="status" name="status" defaultValue={current.status ?? initial.status ?? ''} className="bg-background-light border border-black/10 px-3 py-2 text-sm">
            <option value="">Tous</option>
            <option value="vente">À vendre</option>
            <option value="location">À louer</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="propertyType" className="text-xs uppercase tracking-wide text-dark/70">Bien</label>
          <select id="propertyType" name="propertyType" defaultValue={current.propertyType ?? initial.propertyType ?? ''} className="bg-background-light border border-black/10 px-3 py-2 text-sm">
            <option value="">Tous</option>
            <option value="appartement">Appartement</option>
            <option value="maison">Maison</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="text-xs uppercase tracking-wide text-dark/70">Ville</label>
          <select id="city" name="city" defaultValue={current.city ?? initial.city ?? ''} className="bg-background-light border border-black/10 px-3 py-2 text-sm">
            <option value="">Toutes</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="priceMin" className="text-xs uppercase tracking-wide text-dark/70">Prix min (€)</label>
          <input id="priceMin" name="priceMin" type="number" min={0} defaultValue={current.priceMin ?? initial.priceMin ?? ''} className="bg-background-light border border-black/10 px-3 py-2 text-sm text-dark" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="priceMax" className="text-xs uppercase tracking-wide text-dark/70">Prix max (€)</label>
          <input id="priceMax" name="priceMax" type="number" min={0} defaultValue={current.priceMax ?? initial.priceMax ?? ''} className="bg-background-light border border-black/10 px-3 py-2 text-sm text-dark" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="bedrooms" className="text-xs uppercase tracking-wide text-dark/70">Chambres</label>
          <input id="bedrooms" name="bedrooms" type="number" min={0} defaultValue={current.bedrooms ?? initial.bedrooms ?? ''} className="bg-background-light border border-black/10 px-3 py-2 text-sm text-dark" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="areaMin" className="text-xs uppercase tracking-wide text-dark/70">Surface min (m²)</label>
          <input id="areaMin" name="areaMin" type="number" min={0} defaultValue={current.areaMin ?? initial.areaMin ?? ''} className="bg-background-light border border-black/10 px-3 py-2 text-sm text-dark" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="sort" className="text-xs uppercase tracking-wide text-dark/70">Tri</label>
          <select id="sort" name="sort" defaultValue={current.sort ?? initial.sort ?? ''} className="bg-background-light border border-black/10 px-3 py-2 text-sm">
            <option value="recent">Plus récents</option>
            <option value="prix_asc">Prix croissant</option>
            <option value="prix_desc">Prix décroissant</option>
            <option value="surface_desc">Surface décroissante</option>
          </select>
        </div>

        <div className="flex items-end gap-3 md:col-span-2">
          <label className="flex items-center gap-2 text-sm text-dark">
            <input type="checkbox" name="available" defaultChecked={(current.available ?? initial.available ?? '') === 'on'} className="accent-primary" />
            Uniquement disponibles
          </label>
        </div>

          <div className="flex gap-3 md:col-span-2">
            <Button type="submit" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white!">Appliquer</Button>
            <Button type="button" variant="outline" className="w-full border-dark text-dark hover:bg-black hover:text-white!" onClick={onReset}>Réinitialiser</Button>
          </div>
        </form>
      </div>
    </section>
  );
}


