# Configuration Google Analytics - EB Agency

## Variable d'environnement requise

Créez un fichier `.env.local` à la racine du projet avec la variable suivante :

```env
# Google Analytics 4 - ID de mesure (format: G-XXXXXXXXXX)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Comment obtenir votre ID Google Analytics

1. Allez sur https://analytics.google.com
2. Créez une propriété ou sélectionnez-en une existante
3. Allez dans **Admin** > **Flux de données** > **Ajouter un flux**
4. Sélectionnez **"Web"**
5. Copiez l'**ID de mesure** (format `G-XXXXXXXXXX`)

## Événements trackés automatiquement

Le système tracke automatiquement :

- ✅ **Page views** - Chaque visite de page
- ✅ **Contact form submissions** - Soumissions du formulaire de contact
- ✅ **Service views** - Vues des pages de services
- ✅ **Property views** - Vues des biens immobiliers

## Utilisation dans le code

### Hook useAnalytics

```tsx
'use client';

import { useAnalytics } from '@/components/seo';

function MyComponent() {
  const { trackEvent, trackContactForm } = useAnalytics();

  const handleClick = () => {
    trackEvent('button_click', {
      button_name: 'cta_contact',
      page_location: window.location.href,
    });
  };

  return <button onClick={handleClick}>Contact</button>;
}
```

### Tracking personnalisé

```tsx
const { trackEvent } = useAnalytics();

// Événement personnalisé
trackEvent('custom_event', {
  category: 'engagement',
  action: 'download',
  label: 'brochure_pdf',
});
```

## Configuration pour la production

Pour Vercel :
1. Allez dans votre projet Vercel
2. **Settings** > **Environment Variables**
3. Ajoutez la variable `NEXT_PUBLIC_GA_ID`
4. Redéployez votre application

## Respect de la vie privée

Le système Analytics respecte les préférences de l'utilisateur et la réglementation RGPD :
- ✅ Anonymisation IP activée
- ✅ Cookies sécurisés configurés
- ✅ Données utilisées uniquement à des fins statistiques

## Support

Pour toute question sur la configuration Google Analytics, consultez :
- [Documentation Google Analytics](https://support.google.com/analytics)
- [Guide de démarrage GA4](https://support.google.com/analytics/answer/9304153)


