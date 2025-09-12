import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, CountUp } from '@/components';
import {
  FiEdit,
  FiMonitor,
  FiTarget,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiCamera,
  FiEdit3,
  FiBarChart,
  FiZap,
  FiShield,
  FiAward
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
    description: 'Accompagnement complet pour l\'achat de biens haut de gamme',
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
    description: 'Stratégie de vente premium et valorisation de vos biens',
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
    id: 'locations',
    icon: FiMonitor,
    title: 'Locations',
    description: 'Gestion et location de biens d\'exception',
    features: [
      'Sélection de locataires',
      'Contrats et état des lieux',
      'Gestion complète',
      'Optimisation des revenus',
      'Maintenance',
      'Service premium'
    ],
    image: '/elements/appartement-1.jpg',
    color: 'from-accent to-secondary'
  },
  {
    id: 'estimations-biens',
    icon: FiGlobe,
    title: 'Estimations & Biens',
    description: 'Service d\'estimation et accès à notre portefeuille de biens',
    features: [
      'Estimation en 48h',
      'Rapport détaillé',
      'Accès biens off-market',
      'Conseils personnalisés'
    ],
    image: '/elements/villa-3.jpg',
    color: 'from-primary-dark to-primary'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Découverte & Audit',
    description: 'Nous analysons votre marque, vos objectifs et votre marché pour définir la stratégie optimale.',
    icon: FiCamera
  },
  {
    step: '02',
    title: 'Stratégie & Conception',
    description: 'Développement de concepts créatifs et de stratégies personnalisées pour votre projet.',
    icon: FiEdit3
  },
  {
    step: '03',
    title: 'Développement & Production',
    description: 'Réalisation de tous les éléments créatifs avec une attention particulière aux détails.',
    icon: FiZap
  },
  {
    step: '04',
    title: 'Lancement & Optimisation',
    description: 'Déploiement de votre projet avec suivi et optimisations continues pour maximiser les résultats.',
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

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-4">
              Nos Services
            </h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-lg">
              Chaque service est conçu avec passion et expertise pour répondre
              aux standards les plus élevés du secteur du luxe.
            </p>
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
                  <h3 className="text-xl font-dm-serif text-primary mb-3">{service.title}</h3>
                  <p className="text-dark/70 mb-4 leading-relaxed">{service.description}</p>

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
            <p className="text-dark/70 max-w-2xl mx-auto text-lg">
              Une méthodologie éprouvée en 4 étapes pour garantir l&apos;excellence
              de chaque projet et la satisfaction de nos clients.
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