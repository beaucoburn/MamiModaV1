# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Fashion E-commerce Starter built with Medusa 2.0, featuring a modern furniture brand "Sofa Society" concept. The project consists of two main components:

- **Medusa Backend** (`fashion-starter/medusa/`): E-commerce backend built with Medusa 2.0
- **Next.js Storefront** (`fashion-starter/storefront/`): Frontend storefront built with Next.js 15 and Tailwind CSS

## Architecture

### Backend (Medusa)
- **Custom Modules**: Fashion module with materials and colors system
- **Search Integration**: Meilisearch for product search functionality
- **Email Service**: Resend integration for transactional emails
- **Admin Extensions**: Custom admin widgets for managing collections, materials, and colors
- **Database**: PostgreSQL with MikroORM migrations
- **API Routes**: Custom admin and store API endpoints for fashion-specific features

### Frontend (Storefront)  
- **Framework**: Next.js 15 with App Router and Turbo
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query for server state, React hooks for local state
- **Search**: Meilisearch integration with InstantSearch
- **Payments**: Stripe integration
- **E2E Testing**: Playwright test suite

## Development Commands

### Medusa Backend (`fashion-starter/medusa/`)
```bash
# Development
yarn dev                    # Start development server
yarn build                  # Build the project
yarn start                  # Start production server

# Database
yarn medusa db:migrate      # Run database migrations
yarn seed                   # Seed database with sample data

# Testing
yarn test:integration:http  # Run HTTP integration tests
yarn test:unit             # Run unit tests

# Email development
yarn emails:dev            # Start email template development server

# User management
yarn medusa user -e "admin@medusa.local" -p "supersecret"  # Create admin user
```

### Storefront (`fashion-starter/storefront/`)
```bash
# Development
yarn dev                   # Start development server (port 8000)
yarn build                 # Build for production
yarn start                 # Start production server
yarn lint                  # Run ESLint

# Testing
yarn test-e2e             # Run Playwright E2E tests

# Analysis
yarn analyze               # Analyze bundle size
```

## Key Features & Implementation

### Fashion System
- **Materials and Colors**: Products have materials with associated colors and pricing
- **Dynamic Pricing**: Prices change based on material/color selection
- **Custom Admin Interface**: Specialized admin widgets for managing fashion-specific data

### Custom Modules
- `src/modules/fashion/`: Core fashion module with materials/colors models and service
- `src/modules/meilisearch/`: Search integration service
- `src/modules/resend/`: Email service with React Email templates

### API Structure
- Admin routes: `/admin/fashion/`, `/admin/custom/`
- Store routes: `/store/fashion/`, `/store/custom/`
- Custom middleware for authentication and validation

## Environment Setup

### Required Services
- PostgreSQL database
- Redis (via Docker Compose)
- Meilisearch server
- Stripe account (for payments)

### Environment Files
- `medusa/.env` - Backend configuration
- `storefront/.env.local` - Frontend configuration  

### Docker Setup
```bash
cd fashion-starter/medusa
docker-compose up -d  # Start PostgreSQL and Redis
```

## Testing

### E2E Testing (Storefront)
- Playwright configuration in `playwright.config.ts`
- Test fixtures for page objects and data management
- Coverage includes cart, checkout, authentication, and product flows

### Integration Testing (Medusa)
- HTTP endpoint testing
- Module integration testing
- Uses Jest with custom test configuration

## File Structure Notes

- **Admin Components**: Located in `medusa/src/admin/` with TSX components
- **Email Templates**: React Email templates in `medusa/src/modules/resend/emails/`
- **Migrations**: Database migrations in `medusa/src/modules/fashion/migrations/`
- **Storefront Modules**: Feature-based organization in `storefront/src/modules/`
- **API Routes**: Next.js API routes follow Medusa SDK patterns

## Development Workflow

1. Start Medusa backend first (`yarn dev` in medusa folder)
2. Configure publishable API key from admin panel
3. Start storefront development server
4. Use admin panel at `localhost:9000/app` for content management
5. Access storefront at `localhost:8000`

## Package Managers

- **Medusa**: Uses Yarn v4 (Berry)
- **Storefront**: Uses Yarn v1 (Classic)