import type { Metadata } from "next";
import { Montserrat, DM_Serif_Display } from "next/font/google";
import "@/styles/globals.css";
import { Navbar, Footer } from "@/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EB Agency - Agence de Communication Luxueuse | Design & Branding Premium",
    template: "%s | EB Agency"
  },
  description: "EB Agency, agence de communication de luxe spécialisée dans le design, branding et marketing premium. 15+ ans d'expertise, 150+ projets réalisés. Transformez votre marque avec nos services sur-mesure.",
  keywords: [
    "agence communication luxe",
    "design premium",
    "branding de luxe", 
    "marketing haut de gamme",
    "identité visuelle",
    "communication corporate",
    "EB Agency",
    "agence design Paris",
    "stratégie de marque",
    "marketing digital luxe"
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
    title: "EB Agency - Agence de Communication Luxueuse",
    description: "Votre partenaire de confiance pour des communications de luxe exceptionnelles. Design, branding et marketing premium.",
    url: 'https://www.eb-agency.fr',
    siteName: 'EB Agency',
    images: [
      {
        url: '/logo/Logo EB Agency avec baseline - sans fond.png',
        width: 1200,
        height: 630,
        alt: 'EB Agency - Agence de Communication Luxueuse',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EB Agency - Agence de Communication Luxueuse',
    description: 'Votre partenaire de confiance pour des communications de luxe exceptionnelles.',
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
