import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-dark text-white py-16 relative">
      <div className="mx-auto px-6 md:px-16 lg:px-20 min-w-full">
        <div className="flex justify-start flex-wrap max-w-7xl mx-auto gap-12 items-start">
          <div className="flex md:px-6 justify-center md:justify-start max-md:basis-full">
            <Image
              src="/logo/Logos EB AGENCY blanc sans fond (1).png"
              alt="EB Agency Logo"
              width={80}
              height={40}
              className="logo-image"
            />
          </div>

          <div className="md:max-w-[340px] md:px-6 max-md:basis-full max-md:mx-auto">
            <div>
              <h3 className="text-lg font-dm-serif">EB Agency</h3>
              <p className="text-xs text-light">Paris, France</p>
            </div>
            <p className="text-light text-sm max-w-[380px]">
              Votre partenaire de confiance pour des communications de luxe exceptionnelles.
            </p>
          </div>

          <div className="md:px-6  max-md:basis-full max-md:mx-auto">
            <h4 className="font-semibold mb-4 text-white/65!">
              <Link href="/services">SERVICES</Link>
            </h4>
            <ul className="space-y-2 text-sm text-light">
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link href="/biens">Achat</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link href="/biens">Vente</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link href="/biens">Location</Link>
              </li>
            </ul>
          </div>

          <div className="md:px-6  max-md:basis-full max-md:mx-auto">
            <h4 className="font-semibold mb-4 text-white/65!">ACTUS</h4>
            <ul className="space-y-2 text-sm text-light">
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link href="/qui-sommes-nous">À propos</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link href="/qui-sommes-nous">Équipe</Link>
              </li>
            </ul>
          </div>

          <div className="md:px-6  max-md:basis-full max-md:mx-auto">
            <h4 className="font-semibold mb-4 text-white/65!">CONTACT</h4>
            <div className="space-y-2 text-sm text-light">
              <p className="hover:text-white transition-colors cursor-pointer">contact@ebagency.fr</p>
              <p className="hover:text-white transition-colors cursor-pointer">07 78 79 18 25</p>
              <p className="hover:text-white transition-colors cursor-pointer">123 Avenue des Champs-Élysées, 75008 Paris</p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-12 pt-8 text-center">
          <p className="text-light text-sm">
            © 2025 EB Agency. Tous droits réservés. |
            <Link href="/mentions-legales" target='_blank' className="hover:text-white transition-all ml-2">Mentions légales</Link> |
            <Link href="/politique-confidentialite" target='_blank' className="hover:text-white transition-all ml-2">Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
