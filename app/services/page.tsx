import type { Metadata } from 'next';
import Image from 'next/image';
import { CountUp } from '@/components';
import {
  FiEdit,
  FiMonitor,
  FiTarget,
  FiGlobe,
  FiCamera,
  FiEdit3,
  FiBarChart,
  FiZap
} from 'react-icons/fi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nos Services - EB Agency',
  description: 'Nos services: Achat, Vente, Locations, Estimations & Biens.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Nos Services - EB Agency',
    description: 'Achat, Vente, Locations, Estimations & Biens',
    type: 'website',
    url: '/services'
  }
};

const services = [
  {
    id: 'achat',
    icon: FiEdit,
    title: 'Achat',
    description: 'Votre futur commence ici',
    subtitle: 'Nous vous aidons à trouver le bien idéal, rapidement et en toute sérénité.',
    features: [
      'Recherche sur-mesure',
      'Négociation optimale',
      'Accompagnement juridique',
      'Visites privées',
      'Réseau exclusif',
      'Suivi personnalisé'
    ],
    image: '/elements/villa-1.webp',
    color: 'from-primary to-primary-dark'
  },
  {
    id: 'vente',
    icon: FiTarget,
    title: 'Vente',
    description: 'Valorisez votre bien',
    subtitle: 'Mettez toutes les chances de votre côté pour vendre efficacement et au meilleur prix.',
    features: [
      'Estimation précise',
      'Mise en valeur',
      'Marketing ciblé',
      'Réseau d\'acheteurs',
      'Négociation',
      'Suivi jusqu\'à l\'acte'
    ],
    image: '/elements/villa-2.jpg',
    color: 'from-secondary to-accent'
  },
  {
    id: 'location',
    icon: FiMonitor,
    title: 'Location',
    description: 'Simplifiez vos projets',
    subtitle: 'Louez ou faites louer votre bien facilement, avec un accompagnement complet à chaque étape.',
    features: [
      'Sélection de locataires',
      'Contrats et état des lieux',
      'Gestion complète',
      'Optimisation des revenus',
      'Maintenance'
    ],
    image: '/elements/appartement-1.jpg',
    color: 'from-accent to-secondary'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Écoute et analyse',
    description: 'Nous prenons le temps de comprendre vos besoins, vos attentes et vos objectifs pour définir ensemble la meilleure stratégie immobilière.',
    icon: FiCamera
  },
  {
    step: '02',
    title: 'Mise en valeur et promotion',
    description: 'Nous préparons et mettons en avant votre bien ou recherchons les meilleures options pour votre futur achat/locatif, avec des outils adaptés et une communication efficace.',
    icon: FiEdit3
  },
  {
    step: '03',
    title: 'Accompagnement et transactions',
    description: 'Nous gérons les visites, négociations et toutes les démarches administratives pour assurer une transaction sécurisée et fluide.',
    icon: FiZap
  },
  {
    step: '04',
    title: 'Suivi et accompagnement après-vente/location',
    description: 'Nous restons à vos côtés même après la transaction pour répondre à vos questions et vous garantir une expérience complète et sereine.',
    icon: FiBarChart
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-light via-white to-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-dm-serif text-primary mb-6">
              Nos Services
              <span className="block text-secondary">d&apos;Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-dark/80 leading-relaxed mb-8">
              Nous offrons une gamme complète de services de communication de luxe,
              conçus pour élever votre marque et créer des expériences exceptionnelles
              qui marquent les esprits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/qui-sommes-nous" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                DÉCOUVRIR NOS CRÉATIONS
              </Link>
              <Link href="/contact" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                DEMANDER UN DEVIS
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4">
              Nos Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover-lift transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-dm-serif text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-primary/70 mb-3 font-medium">{service.description}</p>
                  <p className="text-dark/70 mb-4 leading-relaxed">{service.subtitle}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-dark/80">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4">
              Notre Processus
            </h2>
            <p className="text-dark/70 max-w-3xl mx-auto text-lg">
              Quatre étapes claires pour vous accompagner sereinement dans votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-dm-serif text-primary mb-3">{step.title}</h3>
                <p className="text-dark/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section supprimée */}
    </main>
  );
}