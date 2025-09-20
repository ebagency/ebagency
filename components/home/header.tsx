'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation as SwiperNavigation, EffectFade } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { Button } from '../ui/Button';
import { cn } from '../../utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

export function Header() {
  const swiperRef = useRef<SwiperRef | null>(null);

  // Images de background pour le slider du header (avec versions mobile)
  const headerBackgrounds = [
    {
      src: '/backgrounds/header-1.jpg',
      srcMobile: '/backgrounds/header-1.jpg', // Même image mais optimisée pour mobile
      alt: 'Header background 1',
      title: 'L\'AGENCE IMMOBILIÈRE D\'EXCEPTION',
      titleMobile: 'L\'AGENCE IMMOBILIÈRE D\'EXCEPTION',
      subtitle: 'Agence Immobilière',
      subtitleMobile: 'Agence Immobilière',
      span: 'EB AGENCY'
    },
    {
      src: '/backgrounds/wallpaperflare.com_wallpaper.jpg',
      srcMobile: '/backgrounds/wallpaperflare.com_wallpaper.jpg',
      alt: 'Header background 2',
      title: 'VOTRE PARTENAIRE IMMOBILIER',
      titleMobile: 'VOTRE PARTENAIRE IMMOBILIER',
      subtitle: 'Agence Immobilière',
      subtitleMobile: 'Agence Immobilière',
      span: 'EB AGENCY'
    },
    {
      src: '/backgrounds/Best-HD-Backgrounds-Photos-Download.jpg',
      srcMobile: '/backgrounds/Best-HD-Backgrounds-Photos-Download.jpg',
      alt: 'Header background 3',
      title: 'RÉUSSIR VOTRE PROJET SIMPLEMENT',
      titleMobile: 'RÉUSSIR VOTRE PROJET SIMPLEMENT',
      subtitle: 'Agence Immobilière',
      subtitleMobile: 'Agence Immobilière',
      span: 'EB AGENCY'
    }
  ];

  return (
    <header className="relative w-full">
      {/* Numéro de téléphone au milieu à gauche avec rotation 90° - caché sur mobile */}
      <div className="absolute left-8 top-1/2 transform -translate-x-[85px] -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex items-center space-x-3 text-white bg-black/20 backdrop-blur-sm px-4 py-3 border border-white/20 transform rotate-270">
          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="font-montserrat text-sm font-medium">07 78 79 18 25</span>
        </div>
      </div>

      {/* Slider de Background avec Swiper */}
      <div className="relative h-screen overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination, SwiperNavigation, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          speed={1000}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom'
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="h-full"
        >
          {headerBackgrounds.map((bg, index) => (
            <SwiperSlide key={bg.src} className="relative">
              {/* Image de fond responsive */}
              <Image
                src={bg.src}
                alt={bg.alt}
                height={1000}
                width={1920}
                className="object-cover w-full h-full"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/35"></div>
              
              {/* Contenu du slide */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 md:px-6">
                <div className="space-y-4 md:space-y-6 z-10 max-w-4xl mx-auto">
                  
                  {/* Span au-dessus du titre */}
                  <div className="text-base md:text-xl font-montserrat text-white/75 tracking-widest">
                    {bg.span}
                  </div>
                  
                  {/* Titre principal - responsive */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-dm-serif font-bold tracking-wider leading-tight">
                    <span className={cn('md:hidden', 'header-content-mobile')}>{bg.titleMobile}</span>
                    <span className={cn('hidden md:block', 'header-content-desktop')}>{bg.title}</span>
                  </h2>
                  
                  {/* Sous-titre - responsive */}
                  <p className="text-base md:text-xl font-montserrat text-white/80 tracking-wide">
                    <span className={cn('md:hidden', 'header-content-mobile')}>{bg.subtitleMobile}</span>
                    <span className={cn('hidden md:block', 'header-content-desktop')}>{bg.subtitle}</span>
                  </p>
                  
                  {/* Boutons CTA - plus petits, espacés et de même largeur */}
                  <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link href="/biens">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className={cn('w-32 md:w-36', 'cta-button-mobile')}
                      >
                        NOS BIENS
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation personnalisée du slider - adaptée au mobile */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="swiper-pagination-custom flex space-x-2 md:space-x-3">
            {/* Les bullets seront générés automatiquement par Swiper */}
          </div>
        </div>

        {/* Icônes Instagram et WhatsApp en bas à droite - adaptées au mobile */}
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20 flex space-x-2 md:space-x-4">
          <Link
            href="https://www.instagram.com/eb.agency_?igsh=ZXg4MWh3bzk5YTFx&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              'w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300',
              'social-icon'
            )}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
