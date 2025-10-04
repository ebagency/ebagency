import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}

// FAQ spécifiques à l'immobilier
export const realEstateFAQs: FAQItem[] = [
  {
    question: "Quels sont les services proposés par EB Agency ?",
    answer: "EB Agency propose des services complets d'achat, vente et location immobilière à Paris. Nous accompagnons nos clients dans la recherche de biens, l'estimation, la négociation et la gestion locative avec une expertise reconnue depuis plus de 15 ans."
  },
  {
    question: "Comment EB Agency peut-elle m'aider à acheter un bien immobilier à Paris ?",
    answer: "Notre équipe d'experts vous accompagne dans votre recherche d'achat immobilier à Paris avec une approche personnalisée. Nous proposons une recherche sur-mesure, des visites privées, une négociation optimale et un suivi complet jusqu'à la signature de l'acte de vente."
  },
  {
    question: "Quels types de biens immobiliers proposez-vous ?",
    answer: "EB Agency propose une sélection exclusive de biens immobiliers haut de gamme à Paris : appartements, maisons, villas, hôtels particuliers et biens de prestige. Tous nos biens sont soigneusement sélectionnés pour leur qualité et leur localisation privilégiée."
  },
  {
    question: "Comment se déroule l'estimation d'un bien immobilier ?",
    answer: "Notre estimation immobilière est gratuite et réalisée par nos experts. Nous analysons le marché local, les caractéristiques du bien, sa localisation et les tendances du marché parisien pour vous fournir une évaluation précise et actualisée."
  },
  {
    question: "EB Agency propose-t-elle des services de gestion locative ?",
    answer: "Oui, EB Agency propose une gestion locative complète incluant la sélection de locataires, la rédaction des contrats, l'état des lieux, la collecte des loyers, la maintenance et l'optimisation des revenus locatifs."
  },
  {
    question: "Quelle est la zone d'intervention d'EB Agency ?",
    answer: "EB Agency intervient principalement à Paris et en Île-de-France, avec une expertise particulière sur les arrondissements parisiens et les communes de la petite couronne. Notre agence est située au 78 Avenue des Champs-Élysées dans le 8ème arrondissement."
  }
];
