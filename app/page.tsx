// server directive non nécessaire

import Image from 'next/image';
import { Button, Header, CountUp } from '@/components';
import { OrganizationStructuredData, LocalBusinessStructuredData } from '@/components/seo';
import Link from 'next/link';

export default function Home() {
  // Images pour les services
  const serviceImages = [
    '/elements/villa-1.webp',
    '/elements/appartement-1.jpg',
    '/elements/villa-2.jpg'
  ];

  // Images pour les projets du portfolio
  const portfolioImages = [
    '/elements/villa-3.jpg',
    '/elements/villa-1.webp',
    '/elements/appartement-1.jpg'
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Données structurées SEO */}
      <OrganizationStructuredData />
      <LocalBusinessStructuredData />

      {/* Header avec Slider */}
      <Header />

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="text-white">
              <div className="text-2xl md:text-4xl font-dm-serif font-bold mb-2">
                <CountUp end={150} suffix="+" />
              </div>
              <div className="text-text-light text-xs md:text-sm">PROJETS RÉALISÉS</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-4xl font-dm-serif font-bold mb-2">
                <CountUp end={98} suffix="%" />
              </div>
              <div className="text-text-light text-xs md:text-sm">CLIENTS SATISFAITS</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-4xl font-dm-serif font-bold mb-2">
                <CountUp end={15} suffix="+" />
              </div>
              <div className="text-text-light text-xs md:text-sm">ANNÉES D&apos;EXPÉRIENCE</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-4xl font-dm-serif font-bold mb-2">
                <CountUp end={24} suffix="/7" />
              </div>
              <div className="text-text-light text-xs md:text-sm">SUPPORT CLIENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="home" className="pb-20 bg-gradient-to-br from-light via-white to-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 mt-2 md:space-y-6 animate-fade-in-left">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-7xl font-dm-serif text-primary leading-tight font-bold">
                L&apos;AGENCE DE
                <span className="block text-secondary font-bold">COMMUNICATION</span>
                <span className="block text-accent font-bold">LUXUEUSE</span>
              </h1>
              <p className="text-base md:text-lg text-dark/80 leading-relaxed max-w-lg">
                Nous créons des expériences de marque exceptionnelles qui élèvent votre présence
                et captent l&apos;essence du luxe. Chaque projet est une œuvre d&apos;art unique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/qui-sommes-nous" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                  DÉCOUVRIR NOS CRÉATIONS
                </Link>
                <Link href="/qui-sommes-nous" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                  EN SAVOIR PLUS
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-right my-16">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-4 md:p-8 rounded-3xl shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent to-light rounded-2xl overflow-hidden">
                    <Image
                      src="/elements/villa-1.webp"
                      alt="Villa de luxe"
                      width={300}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4 font-semibold">NOS SERVICES EXCLUSIFS</h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-sm md:text-base">
              Nous offrons une gamme complète de services de communication de luxe
              pour répondre aux besoins les plus exigeants de nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover-lift transition-all">
              <div className="w-full h-40 md:h-48 mb-4 md:mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={serviceImages[0]}
                  alt="Design & Créativité"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-dm-serif text-primary mb-3 md:mb-4 font-bold">Design & Créativité</h3>
              <p className="text-dark/70 mb-4 md:mb-6 text-sm md:text-base">
                Créations visuelles uniques et impactantes qui reflètent l&apos;excellence
                et la sophistication de votre marque.
              </p>
              <Link href="/services" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                En savoir plus →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover-lift transition-all">
              <div className="w-full h-40 md:h-48 mb-4 md:mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={serviceImages[1]}
                  alt="Digital & Marketing"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-dm-serif text-primary mb-3 md:mb-4 font-bold">Digital & Marketing</h3>
              <p className="text-dark/70 mb-4 md:mb-6 text-sm md:text-base">
                Stratégies digitales innovantes et campagnes marketing ciblées
                pour maximiser votre présence en ligne.
              </p>
              <Link href="/services" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                En savoir plus →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover-lift transition-all">
              <div className="w-full h-40 md:h-48 mb-4 md:mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={serviceImages[2]}
                  alt="Branding & Identité"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-dm-serif text-primary mb-3 md:mb-4 font-bold">Branding & Identité</h3>
              <p className="text-dark/70 mb-4 md:mb-6 text-sm md:text-base">
                Développement d&apos;identités de marque distinctives et mémorables
                qui créent une connexion émotionnelle avec votre audience.
              </p>
              <Link href="/services" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-secondary rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-light p-4 md:p-8 rounded-3xl">
                <div className="aspect-video bg-gradient-to-br from-accent to-light rounded-2xl overflow-hidden">
                  <Image
                    src="/elements/villa-2.jpg"
                    alt="Excellence EB Agency"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-dm-serif text-primary font-semibold">POURQUOI CHOISIR EB AGENCY ?</h2>
              <p className="text-base md:text-lg text-dark/80 leading-relaxed">
                Depuis plus de 15 ans, EB Agency s&apos;est imposée comme une référence
                dans le domaine de la communication de luxe. Notre approche unique
                combine créativité, innovation et excellence pour créer des expériences
                de marque exceptionnelles.
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm md:text-base">Expertise reconnue</h4>
                    <p className="text-dark/70 text-xs md:text-sm">Plus de 150 projets réussis dans le secteur du luxe</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm md:text-base">Approche personnalisée</h4>
                    <p className="text-dark/70 text-xs md:text-sm">Chaque projet est unique et adapté à vos besoins</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm md:text-base">Innovation constante</h4>
                    <p className="text-dark/70 text-xs md:text-sm">Nous restons à la pointe des dernières tendances</p>
                  </div>
                </div>
              </div>

              <Link href="/qui-sommes-nous" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                DÉCOUVRIR NOTRE HISTOIRE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4 font-semibold">NOS CRÉATIONS RÉCENTES</h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-sm md:text-base">
              Découvrez quelques-uns de nos projets les plus remarquables
              qui illustrent notre expertise et notre créativité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden shadow-lg hover-lift transition-all">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={portfolioImages[0]}
                  alt="Collection Luxe"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-dm-serif mb-2">Collection Luxe</h3>
                  <p className="text-sm text-white/60">Branding & Design</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden shadow-lg hover-lift transition-all">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={portfolioImages[1]}
                  alt="Hôtel de Prestige"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-dm-serif mb-2">Hôtel de Prestige</h3>
                  <p className="text-sm text-white/60">Identité de Marque</p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden shadow-lg hover-lift transition-all">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={portfolioImages[2]}
                  alt="Automobile Premium"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-dm-serif mb-2">Automobile Premium</h3>
                  <p className="text-sm text-white/60">Campagne Marketing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/biens" className="bg-secondary mx-auto block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
              VOIR TOUTS NOS BIENS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4 md:mb-6 font-semibold">
            PRÊT À ÉLÉVER VOTRE MARQUE ?
          </h2>
          <p className="text-black text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet
            et découvrir comment nous pouvons transformer votre vision en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
              DÉMARRER UN PROJET
            </Link>
            <Link href="/contact" className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
              PRENDRE RENDEZ-VOUS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
