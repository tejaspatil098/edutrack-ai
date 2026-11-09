# EduTrack AI infrastructure notes

This directory contains Docker and deployment templates for the backend service, AI engine, Redis cache, and a PostgreSQL database.

Planned deployment structure:
- `docker/` — service-specific containers
- `deployment/` — Helm / Kubernetes or compose deployment descriptors
- `monitoring/` — dashboards and alerting config
