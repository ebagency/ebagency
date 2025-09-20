import type { Metadata } from 'next';
import Image from 'next/image';
import { CountUp } from '@/components';
import { FiUsers, FiTarget, FiHeart, FiShield, FiZap, FiStar } from 'react-icons/fi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Qui Sommes-Nous - EB Agency',
  description: 'Découvrez l\'histoire, les valeurs et l\'équipe d\'EB Agency, votre partenaire de confiance en communication de luxe depuis plus de 15 ans.',
  alternates: { canonical: '/qui-sommes-nous' },
  openGraph: {
    title: 'À Propos d\'EB Agency - Communication de Luxe',
    description: 'Notre histoire, nos valeurs et notre engagement envers l\'excellence',
    type: 'website',
    url: '/qui-sommes-nous'
  }
};

const teamMembers = [
  {
    name: 'Boubacar',
    role: 'CEO et Fondateur (Agent Immobilier)',
    image: '/elements/team/team_1.png',
    description: 'Expert en immobilier de luxe avec une vision stratégique pour le développement de l\'agence.',
    expertise: ['Direction Générale', 'Immobilier de Luxe', 'Stratégie']
  },
  {
    name: 'Émile',
    role: 'CEO et Fondateur (Agent Immobilier)',
    image: '/elements/team/team_2.png',
    description: 'Co-fondateur spécialisé dans l\'immobilier haut de gamme et le développement commercial.',
    expertise: ['Direction Générale', 'Immobilier de Luxe', 'Développement Commercial']
  },
  {
    name: 'Hamida',
    role: 'Co-Fondatrice (Community Manager et Agent Immobilier)',
    image: '/elements/team/team_3.png',
    description: 'Spécialiste de la communication digitale et de la gestion communautaire pour l\'immobilier.',
    expertise: ['Community Management', 'Immobilier', 'Communication Digitale']
  },
  {
    name: 'Wided',
    role: 'Directrice des Opérations et Marketing',
    image: '/elements/team/team_4.png',
    description: 'Experte en opérations et marketing, optimise les processus et développe la visibilité de l\'agence.',
    expertise: ['Opérations', 'Marketing', 'Optimisation']
  }
];

const values = [
  { icon: FiShield, title: 'Confiance', description: 'Nous construisons des relations durables basées sur la confiance mutuelle et la transparence.' },
  { icon: FiHeart, title: 'Écoute', description: 'Nous prenons le temps d\'écouter et de comprendre vos besoins pour vous offrir le meilleur service.' },
  { icon: FiTarget, title: 'Engagement', description: 'Nous nous engageons pleinement dans chaque projet pour garantir votre satisfaction.' },
  { icon: FiUsers, title: 'Proximité', description: 'Nous restons proches de nos clients tout au long de leur parcours immobilier.' },
  { icon: FiStar, title: 'Expertise', description: 'Notre expertise reconnue vous accompagne dans tous vos projets immobiliers.' },
  { icon: FiShield, title: 'Transparence', description: 'Nous privilégions la transparence et l\'honnêteté dans toutes nos relations.' },
  { icon: FiZap, title: 'Excellence', description: 'Nous visons l\'excellence dans chaque détail, chaque projet, chaque interaction.' }
];

const milestones = [
  { year: '2008', title: 'Fondation d\'EB Agency', description: 'Émilie Bernard fonde EB Agency avec la vision de créer une agence de communication dédiée au luxe.' },
  { year: '2012', title: 'Premier Grand Client', description: 'Signature de notre premier contrat avec une maison de luxe internationale.' },
  { year: '2016', title: 'Expansion de l\'Équipe', description: 'Croissance de l\'équipe et ouverture de nouveaux services : développement web et marketing digital.' },
  { year: '2020', title: 'Transformation Digitale', description: 'Adaptation réussie aux nouveaux enjeux digitaux et lancement de nos services e-commerce de luxe.' },
  { year: '2023', title: 'Reconnaissance Internationale', description: 'Obtention de plusieurs prix internationaux et expansion de notre clientèle à l\'international.' }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-light via-white to-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-dm-serif text-primary mb-6 font-semibold">
                Qui Sommes-Nous ?
              </h1>
              <p className="text-lg md:text-xl text-dark/80 leading-relaxed mb-8">
                EB Agency, c'est une équipe passionnée qui accompagne chaque client comme un partenaire de confiance.
                À l'écoute de vos besoins, nous vous accompagnons pas à pas pour transformer vos envies en réalité, avec attention et confiance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                  DÉCOUVRIR NOTRE ÉQUIPE
                </Link>
                <Link href="#" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
                  NOS RÉFÉRENCES
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-accent to-light rounded-2xl overflow-hidden">
                  <Image
                    src="/elements/villa-1.webp"
                    alt="Équipe EB Agency"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
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


      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-6">
              Nos Valeurs
            </h2>
            <p className="text-lg text-dark/80 max-w-2xl mx-auto">
              Ces valeurs fondamentales guident notre travail quotidien et définissent
              notre approche unique de la communication de luxe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-dm-serif text-primary mb-3">{value.title}</h3>
                <p className="text-dark/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Notre Processus */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif text-primary mb-6">
              Notre Processus
            </h2>
            <p className="text-lg text-dark/80 max-w-3xl mx-auto">
              Quatre étapes claires pour vous accompagner sereinement dans votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-dm-serif text-primary mb-4">Écoute et analyse</h3>
              <p className="text-dark/70 leading-relaxed">
                Nous prenons le temps de comprendre vos besoins, vos attentes et vos objectifs pour définir ensemble la meilleure stratégie immobilière.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-dm-serif text-primary mb-4">Mise en valeur et promotion</h3>
              <p className="text-dark/70 leading-relaxed">
                Nous préparons et mettons en avant votre bien ou recherchons les meilleures options pour votre futur achat/locatif, avec des outils adaptés et une communication efficace.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-dm-serif text-primary mb-4">Accompagnement et transactions</h3>
              <p className="text-dark/70 leading-relaxed">
                Nous gérons les visites, négociations et toutes les démarches administratives pour assurer une transaction sécurisée et fluide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-dm-serif text-primary mb-4">Suivi et accompagnement après-vente/location</h3>
              <p className="text-dark/70 leading-relaxed">
                Nous restons à vos côtés même après la transaction pour répondre à vos questions et vous garantir une expérience complète et sereine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-dm-serif text-white mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise et notre passion peuvent transformer
            votre vision en réalité et élever votre marque vers de nouveaux sommets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
              DÉMARRER UN PROJET
            </Link>
            <Link href="/contact" className="bg-secondary block max-w-fit text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-white! border hover:border-secondary! hover:text-black! transition-all hover-lift">
              PRENDRE RENDEZ-VOUS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}