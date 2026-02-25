# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EB Agency is a luxury real estate agency website built with Next.js 15, featuring property listings, a blog, an admin dashboard, contact forms, and comprehensive SEO optimization. The site specializes in high-end real estate in Paris and surrounding areas (Île-de-France), offering purchase, sale, and rental services.

## Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4 with custom luxury theme
- **Package Manager**: pnpm 10
- **Node Version**: 20
- **Deployment**: Vercel
- **Database**: PostgreSQL (Neon) via Prisma 7
- **Authentication**: NextAuth.js v5 (beta) with Credentials provider
- **Image Storage**: Cloudinary (+ local /public for legacy)
- **Rich Text Editor**: TipTap
- **Email**: Nodemailer for contact form

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server with Turbopack
pnpm dev

# Build for production (includes prisma generate)
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint

# Database commands
pnpm db:generate    # Generate Prisma client
pnpm db:migrate     # Run migrations (dev)
pnpm db:push        # Push schema to DB
pnpm db:seed        # Seed database (admin user + sample data)
pnpm db:studio      # Open Prisma Studio
```

Development server runs at http://localhost:3000

## Project Structure

```
app/                         # Next.js App Router pages
├── page.tsx                # Home page
├── layout.tsx              # Root layout with global metadata & Analytics
├── biens/                  # Property listings (Prisma queries)
├── blog/                   # Public blog
│   ├── page.tsx           # Blog listing (paginated)
│   ├── [slug]/page.tsx    # Blog article (with generateMetadata)
│   └── categorie/[slug]/  # Category filtering
├── contact/                # Contact form page
├── services/               # Services page
├── qui-sommes-nous/        # About us page
├── mentions-legales/       # Legal notices
├── politique-confidentialite/  # Privacy policy
├── sitemap.ts              # Dynamic XML sitemap (includes blog)
├── robots.ts               # Robots.txt generation
├── admin/                  # Admin dashboard (protected)
│   ├── page.tsx           # Dashboard with stats
│   ├── layout.tsx         # Admin layout (no public nav)
│   ├── login/             # Login page
│   ├── biens/             # Listings CRUD
│   ├── blog/              # Blog posts CRUD
│   ├── contacts/          # Contact messages management
│   └── settings/          # Admin settings
├── api/
│   ├── auth/[...nextauth]/ # NextAuth API route
│   ├── contact/route.ts    # Contact form (email + DB storage)
│   └── admin/              # Protected admin API routes
│       ├── listings/       # Listings CRUD API
│       ├── blog/           # Blog CRUD API
│       ├── categories/     # Blog categories API
│       ├── contacts/       # Contacts management API
│       ├── stats/          # Dashboard stats API
│       └── upload/         # Image upload (Cloudinary)
└── generated/prisma/       # Generated Prisma client (gitignored)

components/
├── navigation/            # Navbar
├── home/                  # Header with slider
├── ui/                    # Button, CountUp, CloudImage
├── seo/                   # SEO components (Analytics, StructuredData, etc.)
├── biens/                 # Property filters and cards
├── blog/                  # Blog components (BlogCard, BlogContent, etc.)
├── admin/                 # Admin UI components (Sidebar, Table, Forms, etc.)
├── layout/                # PublicLayout (conditional nav/footer)
└── Footer.tsx

lib/
├── prisma.ts             # Prisma client singleton
├── auth.ts               # NextAuth configuration
├── cloudinary.ts         # Cloudinary upload/delete utilities
└── listing-utils.ts      # Enum-to-French label mappings

prisma/
├── schema.prisma         # Database schema
├── seed.ts               # Seed script (admin + sample data)
└── migrations/           # Database migrations

types/
└── next-auth.d.ts        # NextAuth type augmentations

data/
└── listings.ts           # DEPRECATED - Legacy static data (use Prisma)
```

## Database Schema (Prisma)

### Models
- **User** - Admin users (email, password, role: ADMIN|EDITOR)
- **Account/Session/VerificationToken** - NextAuth adapter models
- **BlogPost** - Blog articles (title, slug, content, excerpt, coverImage, published)
- **BlogCategory** - Blog categories (name, slug)
- **BlogTag** - Blog tags (name, slug)
- **Listing** - Property listings (title, slug, status, price, city, etc.)
- **ContactMessage** - Contact form submissions (name, email, message, status)

### Enums
- `ListingStatus`: VENTE, LOCATION, VENTE_LOCATION
- `PropertyType`: APPARTEMENT, VILLA, MAISON, HOTEL_PARTICULIER
- `ContactStatus`: NEW, READ, REPLIED, ARCHIVED
- `UserRole`: ADMIN, EDITOR

### Database Configuration
- Prisma 7 with `prisma.config.ts` for datasource URL
- Schema at `prisma/schema.prisma`
- Generated client output: `app/generated/prisma` (gitignored)

## Architecture Patterns

### Authentication
- NextAuth.js v5 beta with JWT strategy
- Credentials provider (email/password with bcrypt)
- Middleware protects `/admin/*` routes
- Session includes user id and role
- Type augmentations in `types/next-auth.d.ts`

### Admin Interface
- Separate layout without public Navbar/Footer (via PublicLayout component)
- SessionProvider wraps admin routes
- Sidebar navigation with active state detection
- TipTap rich text editor for blog content
- Cloudinary image uploads via protected API route

### Data Management
- Property listings: PostgreSQL via Prisma (was static array)
- Blog: Full CRUD via admin, public pages with SSR
- Contacts: Stored in DB + email notification via Nodemailer
- Type `Listing` imported from `@/app/generated/prisma`
- Enum utilities in `lib/listing-utils.ts`

### Page Metadata
Each page exports a `metadata` object with SEO-optimized values including:
- Title with template pattern (`%s | EB Agency - Agence Immobilière`)
- Description, keywords, OpenGraph, Twitter cards
- Canonical URLs

### Structured Data (Schema.org)
- `OrganizationStructuredData` - Company information
- `LocalBusinessStructuredData` - Business details with geo coordinates
- `FAQStructuredData` - FAQ content
- `EBAgencyGeoStructuredData` - Geographic/address data
- `RealEstateStructuredData` - Property listings (accepts Prisma Listing type)
- `ArticleStructuredData` - Blog article schema

### API Routes
- **POST /api/contact**: Validates, stores in DB, sends email
- **GET/POST /api/admin/listings**: List/create listings (auth required)
- **GET/PUT/DELETE /api/admin/listings/[id]**: Single listing CRUD
- **GET/POST /api/admin/blog**: List/create blog posts
- **GET/PUT/DELETE /api/admin/blog/[id]**: Single post CRUD
- **GET/POST /api/admin/categories**: Blog categories
- **GET /api/admin/contacts**: List contact messages
- **GET/PUT/DELETE /api/admin/contacts/[id]**: Single contact CRUD
- **GET /api/admin/stats**: Dashboard statistics
- **POST /api/admin/upload**: Cloudinary image upload

### Analytics Integration
- Google Analytics 4 integration via `Analytics` component in root layout
- `useAnalytics` hook provides tracking functions

## Environment Variables

Required in `.env` (not committed to repo):
```
# Database (Neon PostgreSQL)
DATABASE_URL=
DIRECT_DATABASE_URL=

# NextAuth
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Admin seed
ADMIN_EMAIL=
ADMIN_PASSWORD=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=

# Google Analytics
NEXT_PUBLIC_GA_ID=

# Email (Nodemailer)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
SMTP_TO=
```

## Styling Conventions

### Custom Tailwind Theme
Key colors (defined in `styles/globals.css`):
- `primary`: #5D4940 (brown - main brand color)
- `secondary`: #5D4940 (same as primary)
- `accent`: #5D4940
- `dark`: #1A1A1A
- `light`: #F8F8F8 (off-white)

### Custom Animations
Available classes: `animate-fade-in-up`, `animate-slide-in-right`, `animate-slide-in-left`, `animate-scale-in`

Custom utility class: `hover-lift` (hover elevation effect)

### Blog Styles
`.blog-content` class in globals.css provides prose-like styling for blog HTML content.
`.tiptap-editor` class styles the TipTap editor in admin.

### Font
- Primary font: Montserrat (Google Font loaded in layout)
- Font variable: `--font-montserrat`

## CI/CD

### GitHub Actions Workflows

1. **CI Build & Lint** (`.github/workflows/ci-build.yml`)
   - Triggers on: PRs to `dev`/`main`, pushes to `dev`
   - Steps: Install pnpm, dependencies, prisma generate, lint, build
   - Requires secrets: `DATABASE_URL`, `DIRECT_DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`

2. **Vercel Deployment** (`.github/workflows/vercel-deploy.yml`)
   - Triggers on: Pushes to non-main branches
   - Uses Vercel CLI for production deployment
   - Requires secrets: `VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, `VERCEL_ORG_ID`

## Component Patterns

### Path Aliases
Use `@/` prefix for imports (maps to root directory):
```typescript
import { prisma } from '@/lib/prisma';
import type { Listing } from '@/app/generated/prisma';
import { BlogCard } from '@/components/blog';
```

### Component Exports
Components are exported from barrel files (`index.ts`) for cleaner imports.

### Image Optimization
- Local images: Next.js `<Image>` from `/public`
- Cloudinary images: Served via `res.cloudinary.com` (configured in `next.config.ts`)
- `CloudImage` component handles both local and Cloudinary sources

### Form Handling
Contact form: Native submission to `/api/contact` -> validates -> stores in DB -> sends email
Admin forms: Client-side React forms with fetch to admin API routes

## Important Notes

1. **Turbopack**: Dev and build commands use `--turbopack` flag
2. **Prisma 7**: Uses `prisma.config.ts` for datasource config (not in schema)
3. **French language**: All content is in French (`lang="fr"`)
4. **No tests**: No test framework configured
5. **Database required**: Listings and blog require PostgreSQL connection
6. **Email dependency**: Contact form requires valid SMTP credentials
7. **Analytics optional**: Site works without GA_ID but tracking disabled
8. **Admin routes**: Protected by NextAuth middleware, no public Navbar/Footer

## French Real Estate Terminology

- **Biens**: Properties/listings
- **Vente**: Sale
- **Location**: Rental
- **Appartement**: Apartment
- **Villa**: Villa
- **Maison**: House
- **Hôtel particulier**: Private mansion (luxury property type)
- **m²**: Square meters (primary unit for area)
