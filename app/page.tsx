// server directive non nécessaire

import Image from 'next/image';
import { Header, CountUp } from '@/components';
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
                <CountUp end={50} suffix="+" />
              </div>
              <div className="text-text-light text-xs md:text-sm">PROJETS RÉALISÉS</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-4xl font-dm-serif font-bold mb-2">
                <CountUp end={100} suffix="+" />
              </div>
              <div className="text-text-light text-xs md:text-sm">CLIENTS ACCOMPAGNÉS</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-4xl font-dm-serif font-bold mb-2">
                <CountUp end={10} suffix="+" />
              </div>
              <div className="text-text-light text-xs md:text-sm">ANS D&apos;EXPÉRIENCE</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-4xl font-dm-serif font-bold mb-2">
                <CountUp end={24} suffix="h" />
              </div>
              <div className="text-text-light text-xs md:text-sm">RÉPONSE GARANTIE</div>
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
                L&apos;AGENCE
                <span className="block text-secondary font-bold">IMMOBILIÈRE</span>
                <span className="block text-accent font-bold">ENGAGÉE</span>
              </h1>
              <p className="text-base md:text-lg text-dark/80 leading-relaxed max-w-lg">
                Nous accompagnons vos projets immobiliers avec soin et expertise, révélant le meilleur de chaque bien et facilitant chaque étape de votre parcours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/biens" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                  DÉCOUVRIR NOS BIENS
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
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4 font-semibold">NOS SERVICES DÉDIÉS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 - Achat */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover-lift transition-all">
              <div className="w-full h-40 md:h-48 mb-4 md:mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={serviceImages[0]}
                  alt="Achat immobilier"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-dm-serif text-primary mb-2 md:mb-3 font-bold">Achat</h3>
              <p className="text-sm text-primary/70 mb-3 md:mb-4 font-medium">Votre futur commence ici</p>
              <p className="text-dark/70 mb-4 md:mb-6 text-sm md:text-base">
                Nous vous aidons à trouver le bien idéal, rapidement et en toute sérénité.
              </p>
              <ul className="space-y-2 mb-4 md:mb-6">
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Recherche sur-mesure
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Négociation optimale
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Accompagnement juridique
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Visites privées
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Réseau exclusif
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Suivi personnalisé
                </li>
              </ul>
            </div>

            {/* Service 2 - Vente */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover-lift transition-all">
              <div className="w-full h-40 md:h-48 mb-4 md:mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={serviceImages[1]}
                  alt="Vente immobilière"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-dm-serif text-primary mb-3 md:mb-4 font-bold">Vente</h3>
              <p className="text-sm text-primary/70 mb-3 md:mb-4 font-medium">Valorisez votre bien</p>
              <p className="text-dark/70 mb-4 md:mb-6 text-sm md:text-base">
                Mettez toutes les chances de votre côté pour vendre efficacement et au meilleur prix.
              </p>
              <ul className="space-y-2 mb-4 md:mb-6">
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Estimation précise
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Mise en valeur
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Marketing ciblé
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Réseau d&apos;acheteurs
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Négociation
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Suivi jusqu&apos;à l&apos;acte
                </li>
              </ul>
            </div>

            {/* Service 3 - Location */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover-lift transition-all">
              <div className="w-full h-40 md:h-48 mb-4 md:mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={serviceImages[2]}
                  alt="Location immobilière"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-dm-serif text-primary mb-3 md:mb-4 font-bold">Location</h3>
              <p className="text-sm text-primary/70 mb-3 md:mb-4 font-medium">Simplifiez vos projets</p>
              <p className="text-dark/70 mb-4 md:mb-6 text-sm md:text-base">
                Louez ou faites louer votre bien facilement, avec un accompagnement complet à chaque étape.
              </p>
              <ul className="space-y-2 mb-4 md:mb-6">
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Sélection de locataires
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Contrats et état des lieux
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Gestion complète
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Optimisation des revenus
                </li>
                <li className="flex items-center text-sm text-dark/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Maintenance
                </li>
              </ul>
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
              <h2 className="text-3xl md:text-4xl font-dm-serif text-primary font-semibold">QUI SOMMES-NOUS ?</h2>
              <p className="text-base md:text-lg text-dark/80 leading-relaxed">
                EB Agency, c&apos;est une équipe passionnée qui accompagne chaque client comme un partenaire de confiance.
                À l&apos;écoute de vos besoins, nous vous accompagnons pas à pas pour transformer vos envies en réalité, avec attention et confiance.
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm md:text-base">Expertise reconnue</h4>
                    <p className="text-dark/70 text-xs md:text-sm">Plus de 50 projets immobiliers réussis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm md:text-base">Approche personnalisée</h4>
                    <p className="text-dark/70 text-xs md:text-sm">Chaque projet immobilier est unique et adapté à vos besoins</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm md:text-base">Innovation constante</h4>
                    <p className="text-dark/70 text-xs md:text-sm">Nous restons à la pointe des dernières tendances immobilières</p>
                  </div>
                </div>
              </div>

              <Link href="/qui-sommes-nous" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4 font-semibold">LES NOUVEAUTÉS DE L&apos;AGENCE</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden shadow-lg hover-lift transition-all">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={portfolioImages[0]}
                  alt="Hôtel particulier, Paris (France)"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-dm-serif mb-2">Hôtel particulier, Paris (France)</h3>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden shadow-lg hover-lift transition-all">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={portfolioImages[1]}
                  alt="Appartement, Paris (France)"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-dm-serif mb-2">Appartement, Paris (France)</h3>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden shadow-lg hover-lift transition-all">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={portfolioImages[2]}
                  alt="Appartement, Paris (France)"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-dm-serif mb-2">Appartement, Paris (France)</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/biens" className="bg-secondary mx-auto block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
              EXPLORER NOS BIENS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4 md:mb-6 font-semibold">
            PRÊT À RÉALISER VOTRE PROJET IMMOBILIER ?
          </h2>
          <p className="text-black text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet immobilier
            et découvrir comment nous pouvons vous accompagner dans votre parcours.
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
