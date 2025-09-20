import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - EB Agency',
  description: 'Mentions légales et informations légales d\'EB Agency, agence de communication de luxe basée à Paris.',
  alternates: { canonical: '/mentions-legales' },
  openGraph: {
    title: 'Mentions Légales - EB Agency',
    description: 'Informations légales et mentions obligatoires d\'EB Agency',
    type: 'website',
    url: '/mentions-legales'
  }
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-light via-white to-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-dm-serif text-primary mb-6">
              Mentions Légales
            </h1>
            <p className="text-lg text-dark/80 leading-relaxed">
              Informations légales et mentions obligatoires concernant EB Agency
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Éditeur du site */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Éditeur du site</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  <strong>Raison sociale :</strong> EB Agency<br />
                  <strong>Forme juridique :</strong> Société par actions simplifiée (SAS)<br />
                  <strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France<br />
                  <strong>Capital social :</strong> 50 000 €<br />
                  <strong>RCS :</strong> Paris B 123 456 789<br />
                  <strong>SIRET :</strong> 123 456 789 00012<br />
                  <strong>Code APE :</strong> 7021Z (Conseil en relations publiques et communication)<br />
                  <strong>TVA intracommunautaire :</strong> FR12 123456789
                </p>
                <p className="text-dark/80 mb-4">
                  <strong>Directeur de la publication :</strong> Émilie Bernard<br />
                  <strong>Email :</strong> contact@ebagency.com<br />
                  <strong>Téléphone :</strong> 07 78 79 18 25
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Hébergement</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  <strong>Hébergeur :</strong> Vercel Inc.<br />
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
                  <strong>Site web :</strong> https://vercel.com
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Propriété intellectuelle</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-dark/80 mb-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p className="text-dark/80">
                  La marque &quot;EB Agency&quot; et le logo associé sont des marques déposées. Toute reproduction non autorisée de ces marques, dessins et modèles constitue une contrefaçon passible de sanctions pénales.
                </p>
              </div>
            </div>

            {/* Collecte de données */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Collecte et traitement des données</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Conformément à la loi &quot;Informatique et Libertés&quot; du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
                </p>
                <p className="text-dark/80 mb-4">
                  Les données personnelles collectées sur ce site sont destinées à EB Agency et ne seront en aucun cas transmises à des tiers sans votre accord préalable.
                </p>
                <p className="text-dark/80">
                  Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse : contact@ebagency.com
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Cookies</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
                  Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous permettent de reconnaître votre navigateur.
                </p>
                <p className="text-dark/80 mb-4">
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
                </p>
                <p className="text-dark/80">
                  En continuant à utiliser ce site, vous acceptez l&apos;utilisation de cookies conformément à notre politique de confidentialité.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Limitation de responsabilité</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l&apos;année, 
                  mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="text-dark/80 mb-4">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, 
                  à l&apos;adresse contact@ebagency.com, en décrivant le problème de la manière la plus précise possible.
                </p>
                <p className="text-dark/80">
                  Tout contenu téléchargé se fait aux risques et périls de l&apos;utilisateur et sous sa seule responsabilité. 
                  En conséquence, ne saurait être tenu responsable d&apos;un quelconque dommage subi par l&apos;ordinateur de l&apos;utilisateur ou d&apos;une quelconque perte de données consécutives au téléchargement.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Droit applicable</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
                <p className="text-dark/80">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
