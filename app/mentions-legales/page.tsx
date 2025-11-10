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
                  <strong>Raison sociale :</strong> <strong>EB Agency</strong><br />
                  <strong>Forme juridique :</strong> <em>Société par actions simplifiée</em> (<abbr title="Société par actions simplifiée"><strong>SAS</strong></abbr>)<br />
                  <strong>Siège social :</strong> <address className="inline">78 Avenue des Champs-Élysées, 75008 Paris, France</address><br />
                  <strong>Capital social :</strong> <mark>1 000 €</mark><br />
                  <strong>RCS :</strong> Paris B <strong>991 612 128</strong><br />
                  <strong>SIRET :</strong> <strong>991 612 128 00017</strong><br />
                  <strong>Code APE :</strong> <strong>7021Z</strong> (<em>Conseil en relations publiques et communication</em>)<br />
                  <strong>TVA intracommunautaire :</strong> <strong>FR44991612128</strong>
                </p>
                <p className="text-dark/80 mb-4">
                  <strong>Directeur de la publication :</strong> <strong>Émilie Bernard</strong><br />
                  <strong>Email :</strong> <a href="mailto:contact@ebagency.fr" className="text-primary hover:underline">contact@ebagency.fr</a><br />
                  <strong>Téléphone :</strong> <a href="tel:+33778791825" className="text-primary hover:underline">07 78 79 18 25</a>
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Hébergement</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  <strong>Hébergeur :</strong> <strong>Vercel Inc.</strong><br />
                  <strong>Adresse :</strong> <address className="inline">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</address><br />
                  <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a>
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Propriété intellectuelle</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  L&apos;ensemble de ce <strong>site</strong> relève de la <strong>législation française</strong> et <strong>internationale</strong> sur le <strong>droit d&apos;auteur</strong> et la <strong>propriété intellectuelle</strong>. 
                  Tous les <strong>droits de reproduction</strong> sont réservés, y compris pour les <em>documents téléchargeables</em> et les <em>représentations iconographiques et photographiques</em>.
                </p>
                <p className="text-dark/80 mb-4">
                  La reproduction de tout ou partie de ce site sur un <strong>support électronique</strong> quel qu&apos;il soit est <mark>formellement interdite</mark> sauf <strong>autorisation expresse</strong> du directeur de la publication.
                </p>
                <p className="text-dark/80">
                  La marque <strong>&quot;EB Agency&quot;</strong> et le <strong>logo associé</strong> sont des <strong>marques déposées</strong>. Toute reproduction non autorisée de ces marques, dessins et modèles constitue une <mark>contrefaçon passible de sanctions pénales</mark>.
                </p>
              </div>
            </div>

            {/* Collecte de données */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Collecte et traitement des données</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Conformément à la loi <strong>&quot;Informatique et Libertés&quot;</strong> du <time dateTime="1978-01-06">6 janvier 1978</time> modifiée et au <strong><abbr title="Règlement Général sur la Protection des Données">RGPD</abbr></strong>, 
                  vous disposez d&apos;un <strong>droit d&apos;accès</strong>, de <strong>rectification</strong>, de <strong>suppression</strong> et d&apos;<strong>opposition</strong> aux <strong>données personnelles</strong> vous concernant.
                </p>
                <p className="text-dark/80 mb-4">
                  Les <strong>données personnelles</strong> collectées sur ce site sont destinées à <strong>EB Agency</strong> et ne seront en aucun cas transmises à des <em>tiers</em> sans votre <strong>accord préalable</strong>.
                </p>
                <p className="text-dark/80">
                  Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse : <strong><a href="mailto:contact@ebagency.fr" className="text-primary hover:underline">contact@ebagency.fr</a></strong>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Cookies</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Ce <strong>site</strong> utilise des <strong>cookies</strong> pour améliorer votre <em>expérience de navigation</em> et analyser le trafic. 
                  Les <strong>cookies</strong> sont de <em>petits fichiers texte</em> stockés sur votre ordinateur qui nous permettent de reconnaître votre navigateur.
                </p>
                <p className="text-dark/80 mb-4">
                  Vous pouvez configurer votre <strong>navigateur</strong> pour refuser les cookies, mais cela peut affecter certaines <em>fonctionnalités du site</em>.
                </p>
                <p className="text-dark/80">
                  En continuant à utiliser ce site, vous acceptez l&apos;utilisation de <strong>cookies</strong> conformément à notre <strong>politique de confidentialité</strong>.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Limitation de responsabilité</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Les <strong>informations</strong> contenues sur ce site sont aussi <em>précises que possible</em> et le site remis à jour à différentes périodes de l&apos;année, 
                  mais peut toutefois contenir des <mark>inexactitudes ou des omissions</mark>.
                </p>
                <p className="text-dark/80 mb-4">
                  Si vous constatez une <strong>lacune</strong>, <strong>erreur</strong> ou ce qui parait être un <strong>dysfonctionnement</strong>, merci de bien vouloir le signaler par email, 
                  à l&apos;adresse <strong><a href="mailto:contact@ebagency.fr" className="text-primary hover:underline">contact@ebagency.fr</a></strong>, en décrivant le problème de la manière la plus précise possible.
                </p>
                <p className="text-dark/80">
                  Tout <strong>contenu téléchargé</strong> se fait aux <mark>risques et périls de l&apos;utilisateur</mark> et sous sa seule responsabilité. 
                  En conséquence, ne saurait être tenu responsable d&apos;un quelconque <strong>dommage</strong> subi par l&apos;ordinateur de l&apos;utilisateur ou d&apos;une quelconque <strong>perte de données</strong> consécutives au téléchargement.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Droit applicable</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Le présent site est soumis au <strong>droit français</strong>. En cas de <strong>litige</strong>, les <em>tribunaux français</em> seront seuls compétents.
                </p>
                <p className="text-dark/80">
                  <strong>Dernière mise à jour :</strong> <time dateTime={new Date().toISOString()}>{new Date().toLocaleDateString('fr-FR')}</time>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
