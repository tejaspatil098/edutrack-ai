# System Architecture

## Overview
EduTrack AI follows a multi-service architecture. The admin web app and teacher portal interact with a NestJS backend using REST APIs. Background jobs, reminders, and AI processing run through a dedicated scheduler and AI engine. A PostgreSQL database plus Redis cache support stateful operations and scheduling.

## Core layers
- Presentation: React web admin portal and React Native teacher/mobile app
- API layer: NestJS service with RBAC, validation, audit logging, and rate limits
- Data layer: PostgreSQL + Prisma and Redis for cache/job queueing
- AI layer: Python/FastAPI for OCR, face verification, liveness, and report generation
- Integration layer: Firebase Cloud Messaging, private media object storage, Google Maps/OpenStreetMap, and scheduler jobs

## Tenant isolation
Every table is scoped by `schoolId` and restricted through access policies in the application layer. Admins can only read and manage their own school records.

## Security controls
- HTTPS everywhere
- Argon2id or bcrypt-equivalent password hashing
- JWT-based sessions with refresh token rotation in production
- MFA for privileged users
- Strict audit logging for all critical actions
- Encrypted media and geolocation evidence stored in a private bucket

## Development phases
1. Project setup and authentication
2. School and staff lifecycle
3. Official timetable configuration
4. AI timetable OCR and approvals
5. Reminder scheduler and notification engine
6. GeoCam validation and liveness
7. GPS geofencing and location monitoring
8. Late/absence workflows and leave management
9. Reports and audit analytics
10. Security validation and pilot deployment
