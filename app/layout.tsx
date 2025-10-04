import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Navbar, Footer } from "@/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EB Agency - Agence Immobilière d'Exception | Achat Vente Location Paris",
    template: "%s | EB Agency - Agence Immobilière"
  },
  description: "EB Agency, agence immobilière d'exception à Paris spécialisée dans l'achat, la vente et la location de biens immobiliers haut de gamme. 15+ ans d'expertise, 150+ projets réalisés. Votre partenaire immobilier de confiance en Île-de-France.",
  keywords: [
    "agence immobilière Paris",
    "achat immobilier Paris",
    "vente immobilier Paris", 
    "location immobilier Paris",
    "biens immobiliers Paris",
    "immobilier de luxe Paris",
    "EB Agency",
    "agence immobilière 75008",
    "projet immobilier Paris",
    "expertise immobilière",
    "appartement Paris",
    "maison Paris",
    "villa Paris",
    "hôtel particulier Paris",
    "investissement immobilier Paris",
    "estimation immobilière Paris",
    "gestion locative Paris",
    "agence immobilière Champs-Élysées",
    "immobilier haut de gamme",
    "transaction immobilière Paris"
  ],
  authors: [{ name: "EB Agency", url: "https://www.ebagency.fr" }],
  creator: "EB Agency",
  publisher: "EB Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ebagency.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    title: "EB Agency - Agence Immobilière d'Exception à Paris",
    description: "Votre partenaire de confiance pour vos projets immobiliers à Paris. Achat, vente et location de biens haut de gamme en Île-de-France.",
    url: 'https://www.ebagency.fr',
    siteName: 'EB Agency - Agence Immobilière',
    images: [
      {
        url: '/logo/Logo EB Agency avec baseline - sans fond.png',
        width: 1200,
        height: 630,
        alt: 'EB Agency - Agence Immobilière d\'Exception à Paris',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EB Agency - Agence Immobilière d\'Exception à Paris',
    description: 'Votre partenaire de confiance pour vos projets immobiliers à Paris.',
    images: ['/logo/Logo EB Agency avec baseline - sans fond.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
