# EduTrack AI

EduTrack AI is a multi-tenant SaaS platform for schools, designed to manage staff attendance, AI-powered timetable processing, geocam verification, live location monitoring, and automated reporting.

## Monorepo structure

- `apps/admin-web` — React + TypeScript admin portal
- `services/backend` — NestJS backend with REST APIs and authentication
- `database/schema` — Prisma schema and database design
- `infrastructure/docker` — Docker and deployment configuration
- `docs` — architecture, database, and security guidance

## Getting started

1. Copy `.env.example` to `.env` and update the values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start local infrastructure:
   ```bash
   docker compose up -d postgres redis
   ```
4. Generate Prisma client:
   ```bash
   npm run db:generate --workspace services/backend
   ```
5. Start apps:
   ```bash
   npm run dev
   ```

## Default seed roles

The backend includes a simple, consent-based auth flow with role-based user creation for the initial school administration workflow.

## Security note

This repository is an implementation scaffold and should be reviewed by legal/security teams before production biometric and employee-location processing. The project is designed to support Indian DPDP-era privacy requirements, but legal review is required before live biometric deployment.
