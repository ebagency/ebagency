import type { Metadata } from 'next';
import { Button } from '@/components';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle
} from 'react-icons/fi';
import { IconType } from 'react-icons';

export const metadata: Metadata = {
  title: 'Contact - EB Agency | Agence Immobilière Paris 75008',
  description: 'Contactez EB Agency, votre agence immobilière à Paris. Téléphone, email et adresse au 78 Avenue des Champs-Élysées. Devis gratuit et conseil personnalisé.',
  keywords: [
    'contact agence immobilière Paris',
    'EB Agency contact',
    'agence immobilière 75008',
    'Champs-Élysées immobilier',
    'devis immobilier gratuit',
    'conseil immobilier Paris',
    'rendez-vous immobilier',
    'estimation gratuite Paris'
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact - EB Agency Agence Immobilière Paris',
    description: 'Contactez notre équipe d\'experts immobiliers à Paris pour vos projets d\'achat, vente ou location',
    type: 'website',
    url: '/contact'
  }
};

// Composant pour afficher les messages de succès
const SuccessMessage = ({ message }: { message: string }) => (
  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 md:p-6 shadow-lg">
    <div className="flex items-center space-x-3">
      <FiCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
      <p className="text-green-800 font-semibold text-sm md:text-base">{message}</p>
    </div>
  </div>
);

// Composants atomiques avec design amélioré et plus de contraste
const ContactCard = ({ 
  icon: Icon, 
  title, 
  content, 
  className = "" 
}: {
  icon: IconType;
  title: string;
  content: string;
  className?: string;
}) => (
  <div className={`group bg-white p-4 sm:p-6 md:p-8 border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-xl sm:rounded-2xl ${className}`}>
    <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6">
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </div>
      <div className="flex-1 text-center">
        <h3 className="font-dm-serif text-primary text-base sm:text-lg md:text-2xl mb-1 sm:mb-2 md:mb-3 font-bold">{title}</h3>
        <p className="text-dark text-xs sm:text-sm md:text-lg leading-relaxed font-medium">{content}</p>
      </div>
    </div>
  </div>
);

const FormField = ({ 
  label, 
  type = "text", 
  placeholder, 
  required = false,
  icon: Icon
}: {
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  icon?: IconType;
}) => (
  <div className="space-y-1 sm:space-y-2 md:space-y-3">
    <label className="block text-xs sm:text-xs md:text-sm font-bold text-primary uppercase tracking-wider">
      {label} {required && <span className="text-red-600 ml-1">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-3 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-primary/60">
          <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </div>
      )}
      {type === "textarea" ? (
        <textarea
          name={label.toLowerCase().replace(/\s+/g, '_')}
          placeholder={placeholder}
          required={required}
          rows={3}
          className={`w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 ${Icon ? 'pl-8 sm:pl-10 md:pl-12' : ''} bg-white border-2 border-primary/30 rounded-lg sm:rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-dark/40 resize-none shadow-inner text-xs sm:text-sm md:text-base`}
        />
      ) : (
        <input
          type={type}
          name={label.toLowerCase().replace(/\s+/g, '_')}
          placeholder={placeholder}
          required={required}
          className={`w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 ${Icon ? 'pl-8 sm:pl-10 md:pl-12' : ''} bg-white border-2 border-primary/30 rounded-lg sm:rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-dark/40 shadow-inner text-xs sm:text-sm md:text-base`}
        />
      )}
    </div>
  </div>
);

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  const { success: successParam } = await searchParams;
  const showSuccess = successParam === '1';
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-dm-serif text-primary leading-tight mb-4 sm:mb-6 md:mb-8 font-bold">
              Contactez notre équipe
            </h1>
          </div>
        </div>
      </section>

      {showSuccess && (
        <section className="pb-2">
          <div className="container mx-auto px-4 md:px-6">
            <SuccessMessage message="Merci pour votre message. Nous revenons vers vous sous 24h." />
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <ContactCard
              icon={FiPhone}
              title="Téléphone"
              content="0778791825"
            />
            <ContactCard
              icon={FiMail}
              title="Email"
              content="contact@ebagency.fr"
            />
            <ContactCard
              icon={FiMapPin}
              title="Adresse"
              content="78 Avenue des Champs-Élysées, 75008 Paris"
              className="sm:col-span-2 lg:col-span-1"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Formulaire de contact */}
            <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl border-2 border-primary/20 order-2 lg:order-1">
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-dm-serif text-primary mb-2 md:mb-3 font-bold">
                  Envoyez-nous un message
                </h2>
                <p className="text-dark/80 text-sm sm:text-base md:text-lg font-medium">Nous répondons sous 24h</p>
              </div>
              
              <form action="/api/contact" method="POST" className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <FormField
                    label="Nom complet"
                    placeholder="Votre nom complet"
                    required
                    icon={FiUser}
                  />
                  <FormField
                    label="Email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    icon={FiMail}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <FormField
                    label="Téléphone"
                    type="tel"
                    placeholder="07 78 79 18 25"
                    icon={FiPhone}
                  />
                  <FormField
                    label="Service souhaité"
                    placeholder="Achat, Vente, Location"
                    icon={FiMessageSquare}
                  />
                </div>

                <FormField
                  label="Message"
                  type="textarea"
                  placeholder="Décrivez votre projet et vos besoins..."
                  required
                  icon={FiMessageSquare}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full bg-secondary hover:bg-primary text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <FiSend className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span>Envoyer le message</span>
                  </div>
                </Button>
              </form>
            </div>

            {/* Informations supplémentaires */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl border-2 border-primary/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-dm-serif text-primary mb-3 sm:mb-4 md:mb-6 font-bold">
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 p-2 sm:p-3 md:p-4 bg-primary/5 rounded-lg sm:rounded-xl md:rounded-2xl border border-primary/20">
                    <FiClock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dark text-sm sm:text-base md:text-lg">Lundi au vendredi</p>
                      <p className="text-dark/80 font-medium text-xs sm:text-sm md:text-base">9h – 18h</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 p-2 sm:p-3 md:p-4 bg-primary/5 rounded-lg sm:rounded-xl md:rounded-2xl border border-primary/20">
                    <FiClock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dark text-sm sm:text-base md:text-lg">Samedi</p>
                      <p className="text-dark/80 font-medium text-xs sm:text-sm md:text-base">10h – 19h</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 p-2 sm:p-3 md:p-4 bg-primary/5 rounded-lg sm:rounded-xl md:rounded-2xl border border-primary/20">
                    <FiClock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dark text-sm sm:text-base md:text-lg">Dimanche</p>
                      <p className="text-dark/80 font-medium text-xs sm:text-sm md:text-base">Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl text-white shadow-lg sm:shadow-xl md:shadow-2xl border-2 border-white/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-dm-serif mb-3 sm:mb-4 md:mb-6 font-bold">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  <li className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="leading-relaxed font-medium text-xs sm:text-sm md:text-lg">Expertise en communication de luxe</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="leading-relaxed font-medium text-xs sm:text-sm md:text-lg">Approche personnalisée et sur-mesure</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="leading-relaxed font-medium text-xs sm:text-sm md:text-lg">Résultats mesurables et ROI garanti</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-sm"></div>
                    <span className="leading-relaxed font-medium text-xs sm:text-sm md:text-lg">Support dédié et réactif 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section masquée */}
      <section className="hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-dm-serif text-black mb-3 sm:mb-4 md:mb-6 font-bold">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-semibold px-2 sm:px-4">
            Rejoignez nos clients satisfaits et transformez votre vision en réalité 
            avec notre expertise en communication de luxe.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-primary px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all duration-300 hover:scale-105 hover-lift shadow-lg"
          >
            DÉMARRER MAINTENANT
          </Button>
        </div>
      </section>
    </main>
  );
}

