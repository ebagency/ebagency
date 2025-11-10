import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - EB Agency',
  description: 'Politique de confidentialité et protection des données personnelles d\'EB Agency, agence de communication de luxe.',
  alternates: { canonical: '/politique-confidentialite' },
  openGraph: {
    title: 'Politique de Confidentialité - EB Agency',
    description: 'Protection des données personnelles et politique de confidentialité d\'EB Agency',
    type: 'website',
    url: '/politique-confidentialite'
  }
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-light via-white to-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-dm-serif text-primary mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-dark/80 leading-relaxed">
              Protection de vos données personnelles et respect de votre vie privée
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Introduction</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  <strong>EB Agency</strong> s&apos;engage à protéger votre <em>vie privée</em> et vos <strong>données personnelles</strong>. 
                  Cette <strong>politique de confidentialité</strong> explique comment nous collectons, utilisons, 
                  stockons et protégeons vos informations personnelles conformément au <abbr title="Règlement Général sur la Protection des Données"><strong>RGPD</strong></abbr> et à la <strong>loi française</strong>.
                </p>
                <p className="text-dark/80">
                  En utilisant notre <strong>site web</strong> ou nos <strong>services</strong>, vous acceptez les pratiques 
                  décrites dans cette <strong>politique de confidentialité</strong>.
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Responsable du traitement</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  <strong>EB Agency</strong><br />
                  SAS au capital de 1 000 €<br />
                  <strong>RCS :</strong> Paris B <strong>991 612 128</strong><br />
                  Siège social : 78 Avenue des Champs-Élysées, 75008 Paris, France<br />
                  Email : contact@ebagency.fr<br />
                  Téléphone : 07 78 79 18 25
                </p>
                <p className="text-dark/80">
                  <strong>Délégué à la Protection des Données (DPO) :</strong><br />
                  Email : contact@ebagency.fr
                </p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Données personnelles collectées</h2>
              <div className="bg-light p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-4">Données collectées directement</h3>
                <ul className="text-dark/80 mb-6 space-y-2">
                  <li>• <strong>Données d&apos;identification :</strong> <em>nom, prénom, adresse email, numéro de téléphone</em></li>
                  <li>• <strong>Données professionnelles :</strong> <em>entreprise, fonction, secteur d&apos;activité</em></li>
                  <li>• <strong>Données de contact :</strong> <em>adresse postale, préférences de communication</em></li>
                  <li>• <strong>Données de navigation :</strong> <em>pages visitées, durée de visite, source de trafic</em></li>
                </ul>
                
                <h3 className="text-lg font-semibold text-primary mb-4">Données collectées automatiquement</h3>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Données techniques :</strong> <em>adresse IP, type de navigateur, système d&apos;exploitation</em></li>
                  <li>• <strong>Cookies :</strong> <em>cookies de session, cookies analytiques, cookies de préférences</em></li>
                  <li>• <strong>Données d&apos;usage :</strong> <em>interactions avec le site, clics, temps passé sur les pages</em></li>
                </ul>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Finalités du traitement</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">Nous utilisons vos <strong>données personnelles</strong> pour :</p>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Gestion des demandes :</strong> <em>répondre à vos questions et demandes d&apos;information</em></li>
                  <li>• <strong>Prestations de services :</strong> <em>fournir nos services de communication et design</em></li>
                  <li>• <strong>Communication commerciale :</strong> <em>vous envoyer des informations sur nos services</em> <mark>(avec votre consentement)</mark></li>
                  <li>• <strong>Amélioration du site :</strong> <em>analyser l&apos;utilisation du site pour l&apos;améliorer</em></li>
                  <li>• <strong>Obligations légales :</strong> <em>respecter nos obligations légales et réglementaires</em></li>
                  <li>• <strong>Gestion des litiges :</strong> <em>résoudre d&apos;éventuels litiges</em></li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Base légale du traitement</h2>
              <div className="bg-light p-6 rounded-2xl">
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Consentement :</strong> <em>pour l&apos;envoi de communications marketing</em></li>
                  <li>• <strong>Exécution du contrat :</strong> <em>pour la fourniture de nos services</em></li>
                  <li>• <strong>Intérêt légitime :</strong> <em>pour l&apos;amélioration de notre site et services</em></li>
                  <li>• <strong>Obligation légale :</strong> <em>pour respecter nos obligations comptables et fiscales</em></li>
                </ul>
              </div>
            </div>

            {/* Conservation des données */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Conservation des données</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">Nous conservons vos <strong>données personnelles</strong> pendant :</p>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Données de contact :</strong> <mark>3 ans</mark> après le dernier contact</li>
                  <li>• <strong>Données clients :</strong> <mark>durée de la relation contractuelle + 5 ans</mark></li>
                  <li>• <strong>Données de navigation :</strong> <mark>13 mois maximum</mark></li>
                  <li>• <strong>Données comptables :</strong> <mark>10 ans</mark> conformément à la <strong>législation française</strong></li>
                </ul>
              </div>
            </div>

            {/* Partage des données */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Partage des données</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, 
                  sauf dans les cas suivants :
                </p>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Prestataires de services :</strong> hébergement, maintenance, analytics (sous contrat de confidentialité)</li>
                  <li>• <strong>Obligations légales :</strong> autorités compétentes en cas d&apos;obligation légale</li>
                  <li>• <strong>Protection de nos droits :</strong> en cas de litige ou de protection de nos droits légitimes</li>
                </ul>
              </div>
            </div>

            {/* Vos droits */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Vos droits</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">Conformément au <strong><abbr title="Règlement Général sur la Protection des Données">RGPD</abbr></strong>, vous disposez des <strong>droits suivants</strong> :</p>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Droit d&apos;accès :</strong> <em>obtenir une copie de vos données personnelles</em></li>
                  <li>• <strong>Droit de rectification :</strong> <em>corriger des données inexactes ou incomplètes</em></li>
                  <li>• <strong>Droit à l&apos;effacement :</strong> <em>demander la suppression de vos données</em></li>
                  <li>• <strong>Droit à la limitation :</strong> <em>limiter le traitement de vos données</em></li>
                  <li>• <strong>Droit à la portabilité :</strong> <em>récupérer vos données dans un format structuré</em></li>
                  <li>• <strong>Droit d&apos;opposition :</strong> <em>vous opposer au traitement de vos données</em></li>
                  <li>• <strong>Droit de retrait du consentement :</strong> <em>retirer votre consentement à tout moment</em></li>
                </ul>
                <p className="text-dark/80 mt-4">
                  Pour exercer ces droits, contactez-nous à : <strong><a href="mailto:contact@ebagency.fr" className="text-primary hover:underline">contact@ebagency.fr</a></strong>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Cookies et technologies similaires</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Notre <strong>site</strong> utilise des <strong>cookies</strong> pour améliorer votre <em>expérience de navigation</em> et analyser le trafic.
                </p>
                <h3 className="text-lg font-semibold text-primary mb-4">Types de cookies utilisés :</h3>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Cookies essentiels :</strong> <em>nécessaires au fonctionnement du site</em></li>
                  <li>• <strong>Cookies analytiques :</strong> <em>pour mesurer l&apos;audience et l&apos;utilisation du site</em></li>
                  <li>• <strong>Cookies de préférences :</strong> <em>pour mémoriser vos choix et préférences</em></li>
                  <li>• <strong>Cookies marketing :</strong> <em>pour personnaliser les publicités</em> <mark>(avec votre consentement)</mark></li>
                </ul>
                <p className="text-dark/80 mt-4">
                  Vous pouvez gérer vos <strong>préférences de cookies</strong> via les paramètres de votre navigateur 
                  ou en nous contactant à : <strong><a href="mailto:contact@ebagency.fr" className="text-primary hover:underline">contact@ebagency.fr</a></strong>
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Sécurité des données</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Nous mettons en place des <strong>mesures techniques et organisationnelles</strong> appropriées 
                  pour protéger vos <strong>données personnelles</strong> contre :
                </p>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>L&apos;accès non autorisé</strong></li>
                  <li>• <strong>La divulgation non autorisée</strong></li>
                  <li>• <strong>La modification non autorisée</strong></li>
                  <li>• <strong>La destruction non autorisée</strong></li>
                </ul>
                <p className="text-dark/80 mt-4">
                  Ces mesures incluent le <strong>chiffrement des données</strong>, l&apos;<strong>authentification forte</strong>, 
                  la <em>formation du personnel</em> et des <em>audits de sécurité réguliers</em>.
                </p>
              </div>
            </div>

            {/* Transferts internationaux */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Transferts internationaux</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Certains de nos prestataires peuvent être situés en dehors de l&apos;Union Européenne. 
                  Dans ce cas, nous nous assurons que des garanties appropriées sont en place :
                </p>
                <ul className="text-dark/80 space-y-2">
                  <li>• Décision d&apos;adéquation de la Commission européenne</li>
                  <li>• Clauses contractuelles types approuvées par la Commission</li>
                  <li>• Certifications ou codes de conduite approuvés</li>
                </ul>
              </div>
            </div>

            {/* Réclamations */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Réclamations</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez :
                </p>
                <ul className="text-dark/80 space-y-2">
                  <li>• Nous contacter directement à : <strong>contact@ebagency.fr</strong></li>
                  <li>• Introduire une réclamation auprès de la CNIL : <strong>www.cnil.fr</strong></li>
                  <li>• Saisir le tribunal compétent</li>
                </ul>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Modifications de la politique</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Cette <strong>politique de confidentialité</strong> peut être modifiée à tout moment. 
                  Toute modification sera publiée sur cette page avec une nouvelle <strong>date de mise à jour</strong>.
                </p>
                <p className="text-dark/80">
                  <strong>Dernière mise à jour :</strong> <time dateTime={new Date().toISOString()}>{new Date().toLocaleDateString('fr-FR')}</time>
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Contact</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Pour toute question concernant cette <strong>politique de confidentialité</strong> ou vos <strong>données personnelles</strong> :
                </p>
                <p className="text-dark/80">
                  <strong>Email :</strong> <a href="mailto:contact@ebagency.fr" className="text-primary hover:underline">contact@ebagency.fr</a><br />
                  <strong>Téléphone :</strong> <a href="tel:+33778791825" className="text-primary hover:underline">07 78 79 18 25</a><br />
                  <strong>Adresse :</strong> <address className="inline">78 Avenue des Champs-Élysées, 75008 Paris, France</address>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
