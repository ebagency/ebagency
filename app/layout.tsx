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
    default: "EB Agency - Agence Immobilière d'Exception | Achat Vente Location",
    template: "%s | EB Agency"
  },
  description: "EB Agency, agence immobilière d'exception spécialisée dans l'achat, la vente et la location de biens haut de gamme. 10+ ans d'expertise, 50+ projets réalisés. Votre partenaire immobilier de confiance.",
  keywords: [
    "agence immobilière",
    "achat immobilier",
    "vente immobilier", 
    "location immobilier",
    "biens immobiliers",
    "immobilier de luxe",
    "EB Agency",
    "agence immobilière Paris",
    "projet immobilier",
    "expertise immobilière"
  ],
  authors: [{ name: "EB Agency", url: "https://www.eb-agency.fr" }],
  creator: "EB Agency",
  publisher: "EB Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.eb-agency.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    title: "EB Agency - Agence Immobilière d'Exception",
    description: "Votre partenaire de confiance pour vos projets immobiliers. Achat, vente et location de biens haut de gamme.",
    url: 'https://www.eb-agency.fr',
    siteName: 'EB Agency',
    images: [
      {
        url: '/logo/Logo EB Agency avec baseline - sans fond.png',
        width: 1200,
        height: 630,
        alt: 'EB Agency - Agence Immobilière d\'Exception',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EB Agency - Agence Immobilière d\'Exception',
    description: 'Votre partenaire de confiance pour vos projets immobiliers.',
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
