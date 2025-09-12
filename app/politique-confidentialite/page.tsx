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
                  EB Agency s'engage à protéger votre vie privée et vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons, 
                  stockons et protégeons vos informations personnelles conformément au Règlement 
                  Général sur la Protection des Données (RGPD) et à la loi française.
                </p>
                <p className="text-dark/80">
                  En utilisant notre site web ou nos services, vous acceptez les pratiques 
                  décrites dans cette politique de confidentialité.
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Responsable du traitement</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  <strong>EB Agency</strong><br />
                  SAS au capital de 50 000 €<br />
                  RCS Paris B 123 456 789<br />
                  Siège social : 123 Avenue des Champs-Élysées, 75008 Paris, France<br />
                  Email : contact@ebagency.com<br />
                  Téléphone : +33 1 23 45 67 89
                </p>
                <p className="text-dark/80">
                  <strong>Délégué à la Protection des Données (DPO) :</strong><br />
                  Email : dpo@ebagency.com
                </p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Données personnelles collectées</h2>
              <div className="bg-light p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-4">Données collectées directement</h3>
                <ul className="text-dark/80 mb-6 space-y-2">
                  <li>• <strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li>• <strong>Données professionnelles :</strong> entreprise, fonction, secteur d'activité</li>
                  <li>• <strong>Données de contact :</strong> adresse postale, préférences de communication</li>
                  <li>• <strong>Données de navigation :</strong> pages visitées, durée de visite, source de trafic</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-primary mb-4">Données collectées automatiquement</h3>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Données techniques :</strong> adresse IP, type de navigateur, système d'exploitation</li>
                  <li>• <strong>Cookies :</strong> cookies de session, cookies analytiques, cookies de préférences</li>
                  <li>• <strong>Données d'usage :</strong> interactions avec le site, clics, temps passé sur les pages</li>
                </ul>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Finalités du traitement</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">Nous utilisons vos données personnelles pour :</p>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Gestion des demandes :</strong> répondre à vos questions et demandes d'information</li>
                  <li>• <strong>Prestations de services :</strong> fournir nos services de communication et design</li>
                  <li>• <strong>Communication commerciale :</strong> vous envoyer des informations sur nos services (avec votre consentement)</li>
                  <li>• <strong>Amélioration du site :</strong> analyser l'utilisation du site pour l'améliorer</li>
                  <li>• <strong>Obligations légales :</strong> respecter nos obligations légales et réglementaires</li>
                  <li>• <strong>Gestion des litiges :</strong> résoudre d'éventuels litiges</li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Base légale du traitement</h2>
              <div className="bg-light p-6 rounded-2xl">
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Consentement :</strong> pour l'envoi de communications marketing</li>
                  <li>• <strong>Exécution du contrat :</strong> pour la fourniture de nos services</li>
                  <li>• <strong>Intérêt légitime :</strong> pour l'amélioration de notre site et services</li>
                  <li>• <strong>Obligation légale :</strong> pour respecter nos obligations comptables et fiscales</li>
                </ul>
              </div>
            </div>

            {/* Conservation des données */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Conservation des données</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">Nous conservons vos données personnelles pendant :</p>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li>• <strong>Données clients :</strong> durée de la relation contractuelle + 5 ans</li>
                  <li>• <strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li>• <strong>Données comptables :</strong> 10 ans conformément à la législation française</li>
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
                  <li>• <strong>Obligations légales :</strong> autorités compétentes en cas d'obligation légale</li>
                  <li>• <strong>Protection de nos droits :</strong> en cas de litige ou de protection de nos droits légitimes</li>
                </ul>
              </div>
            </div>

            {/* Vos droits */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Vos droits</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                  <li>• <strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
                  <li>• <strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li>• <strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li>• <strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li>• <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li>• <strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
                </ul>
                <p className="text-dark/80 mt-4">
                  Pour exercer ces droits, contactez-nous à : <strong>dpo@ebagency.com</strong>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Cookies et technologies similaires</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic.
                </p>
                <h3 className="text-lg font-semibold text-primary mb-4">Types de cookies utilisés :</h3>
                <ul className="text-dark/80 space-y-2">
                  <li>• <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                  <li>• <strong>Cookies analytiques :</strong> pour mesurer l'audience et l'utilisation du site</li>
                  <li>• <strong>Cookies de préférences :</strong> pour mémoriser vos choix et préférences</li>
                  <li>• <strong>Cookies marketing :</strong> pour personnaliser les publicités (avec votre consentement)</li>
                </ul>
                <p className="text-dark/80 mt-4">
                  Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur 
                  ou en nous contactant à : <strong>contact@ebagency.com</strong>
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Sécurité des données</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles contre :
                </p>
                <ul className="text-dark/80 space-y-2">
                  <li>• L'accès non autorisé</li>
                  <li>• La divulgation non autorisée</li>
                  <li>• La modification non autorisée</li>
                  <li>• La destruction non autorisée</li>
                </ul>
                <p className="text-dark/80 mt-4">
                  Ces mesures incluent le chiffrement des données, l'authentification forte, 
                  la formation du personnel et des audits de sécurité réguliers.
                </p>
              </div>
            </div>

            {/* Transferts internationaux */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Transferts internationaux</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne. 
                  Dans ce cas, nous nous assurons que des garanties appropriées sont en place :
                </p>
                <ul className="text-dark/80 space-y-2">
                  <li>• Décision d'adéquation de la Commission européenne</li>
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
                  <li>• Nous contacter directement à : <strong>dpo@ebagency.com</strong></li>
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
                  Cette politique de confidentialité peut être modifiée à tout moment. 
                  Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
                </p>
                <p className="text-dark/80">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-dm-serif text-primary mb-6">Contact</h2>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-dark/80 mb-4">
                  Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
                </p>
                <p className="text-dark/80">
                  <strong>Email :</strong> dpo@ebagency.com<br />
                  <strong>Téléphone :</strong> +33 1 23 45 67 89<br />
                  <strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
