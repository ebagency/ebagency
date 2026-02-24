# Roadmap EB Agency — Plan d'implémentation complet

## Vue d'ensemble

Transformation du site statique EB Agency (Next.js 15) en plateforme complète avec :
- Base de données PostgreSQL (Neon) via Prisma
- Authentification admin (NextAuth.js v5)
- Upload d'images (Cloudinary)
- Interface d'administration complète
- Blog public avec SEO
- Migration des données statiques vers la BDD

## Phases d'implémentation

### Phase 0 — Préparation
- [x] Créer `roadmap.md`
- [ ] Branch `remove-hamida` → retirer Hamida de l'équipe → merge main
- [ ] Créer branche `dev` depuis `main`

### Phase 1 — Prisma + Neon PostgreSQL
- Installer : `prisma`, `@prisma/client`, `bcryptjs`, `@types/bcryptjs`, `tsx`
- Créer le schéma Prisma (User, Session, BlogPost, BlogCategory, BlogTag, Listing, ContactMessage)
- Créer `lib/prisma.ts` (singleton PrismaClient)
- Créer `lib/listing-utils.ts` (mapping enums ↔ français)
- Créer `prisma/seed.ts` (admin + 5 listings + 4 catégories blog)
- Ajouter scripts `db:*` dans `package.json`
- Migration initiale + seed

### Phase 2 — NextAuth.js v5
- Installer : `next-auth@5`, `@auth/prisma-adapter`
- Créer `lib/auth.ts` (config NextAuth, Credentials provider, JWT, callbacks)
- Créer `app/api/auth/[...nextauth]/route.ts`
- Créer `types/next-auth.d.ts` (augmentation types)
- Créer `middleware.ts` (protection /admin/*)
- Créer page de login admin + layout admin

### Phase 3 — Cloudinary
- Installer : `cloudinary`, `next-cloudinary`
- Créer `lib/cloudinary.ts` (config, upload, delete)
- Créer `app/api/admin/upload/route.ts`
- Modifier `next.config.ts` (remotePatterns Cloudinary)
- Créer `components/admin/ImageUpload.tsx`
- Créer `components/ui/CloudImage.tsx`

### Phase 4 — Interface Admin
- Installer TipTap (éditeur rich text)
- Créer composants admin : Sidebar, Table, Card, Badge, Pagination, ConfirmDialog
- Créer formulaires : ListingForm, BlogPostForm
- Créer pages admin : dashboard, blog CRUD, listings CRUD, contacts, settings
- Créer API routes admin : CRUD listings, blog, catégories, contacts
- Modifier API contact pour stockage BDD

### Phase 5 — Blog public
- Créer `app/blog/page.tsx` (listing paginé)
- Créer `app/blog/[slug]/page.tsx` (article avec SEO)
- Créer `app/blog/categorie/[slug]/page.tsx` (filtrage par catégorie)
- Créer composants : BlogCard, BlogContent, ShareButtons, RelatedPosts, etc.
- Ajouter styles prose dans `globals.css`

### Phase 6 — Migration données statiques → BDD
- Modifier `app/biens/page.tsx` → requêtes Prisma
- Modifier `ListingCard.tsx` → type Prisma
- Modifier `app/page.tsx` → featured listings depuis BDD
- Modifier `StructuredData.tsx` → type Prisma
- Déprécier `data/listings.ts`

### Phase 7 — MAJ Navigation, Footer, Sitemap
- Ajouter lien Blog dans la navbar
- Ajouter section Blog dans le footer
- Rendre le sitemap dynamique (blog + catégories)

### Phase 8 — CI/CD + Documentation
- Mettre à jour le workflow CI (prisma generate)
- Mettre à jour `CLAUDE.md`

## Packages à installer

### Dependencies
```
prisma @prisma/client bcryptjs
next-auth@5 @auth/prisma-adapter
cloudinary next-cloudinary
@tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link @tiptap/extension-placeholder @tiptap/pm
```

### DevDependencies
```
@types/bcryptjs tsx
```

## Variables d'environnement requises
```env
DATABASE_URL=                              # Neon PostgreSQL (pooled)
DIRECT_DATABASE_URL=                       # Neon PostgreSQL (direct)
NEXTAUTH_URL=                              # URL du site
NEXTAUTH_SECRET=                           # Secret NextAuth
ADMIN_EMAIL=                               # Email admin pour seed
ADMIN_PASSWORD=                            # Password admin pour seed
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=         # Cloudinary
CLOUDINARY_API_KEY=                        # Cloudinary
CLOUDINARY_API_SECRET=                     # Cloudinary
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=      # Cloudinary
```

## Estimation
- ~55 fichiers à créer
- ~15 fichiers à modifier
- Vérification `pnpm build` + `pnpm lint` après chaque phase
