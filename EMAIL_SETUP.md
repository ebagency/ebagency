# Configuration Email - EB Agency

## 📧 Intégration Nodemailer

L'application utilise Nodemailer pour envoyer les emails de contact. Voici comment configurer votre service email.

## 🔧 Configuration des Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Configuration Email avec Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=contact@ebagency.fr
```

## 📮 Configuration Gmail

### 1. Activer l'authentification à 2 facteurs
- Allez dans votre compte Google
- Sécurité → Authentification à 2 facteurs
- Activez cette fonctionnalité

### 2. Générer un mot de passe d'application
- Sécurité → Mots de passe des applications
- Sélectionnez "Autre" et nommez votre application
- Copiez le mot de passe généré dans `SMTP_PASS`

### 3. Configuration finale
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application
SMTP_FROM=votre-email@gmail.com
SMTP_TO=contact@ebagency.fr
```

## 📮 Configuration Outlook/Office 365

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=votre-email@outlook.com
SMTP_PASS=votre-mot-de-passe
SMTP_FROM=votre-email@outlook.com
SMTP_TO=contact@ebagency.fr
```

## 📮 Configuration Yahoo

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=votre-email@yahoo.com
SMTP_PASS=votre-mot-de-passe-application
SMTP_FROM=votre-email@yahoo.com
SMTP_TO=contact@ebagency.fr
```

## 🔒 Sécurité

- **Ne jamais commiter** le fichier `.env.local`
- Utilisez des mots de passe d'application pour Gmail
- Testez la configuration avant la mise en production

## 🧪 Test de Configuration

1. Démarrez l'application : `npm run dev`
2. Allez sur `/contact`
3. Remplissez et soumettez le formulaire
4. Vérifiez que l'email arrive dans votre boîte de réception

## 📋 Fonctionnalités

- ✅ Envoi d'emails HTML formatés
- ✅ Support des champs optionnels (téléphone, entreprise, service)
- ✅ Validation des données
- ✅ Gestion d'erreurs
- ✅ Redirection avec message de succès
- ✅ Template email professionnel avec branding EB Agency

## 🎨 Template Email

L'email envoyé inclut :
- Design responsive avec les couleurs EB Agency
- Informations complètes du contact
- Message formaté
- Liens cliquables (email, téléphone)
- Branding professionnel

## 🚀 Déploiement

Pour la production, assurez-vous que :
1. Les variables d'environnement sont configurées sur votre serveur
2. Le port 587 est ouvert pour les emails sortants
3. Les credentials sont sécurisés
4. Un monitoring est en place pour les échecs d'envoi

## 📞 Support

En cas de problème :
1. Vérifiez les logs de l'application
2. Testez la configuration SMTP
3. Vérifiez les paramètres de sécurité de votre compte email
4. Consultez la documentation Nodemailer
