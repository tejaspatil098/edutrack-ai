# API design snapshot

## Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`

## Staff lifecycle
- `GET /api/staff`
- `GET /api/registrations/pending`
- `POST /api/registrations/:id/approve`

## Timetable
- `POST /api/timetable/upload`
- `POST /api/timetable/extract`
- `POST /api/timetable/confirm`

## Attendance
- `POST /api/attendance/start`
- `POST /api/attendance/capture`
- `POST /api/attendance/submit`
- `GET /api/attendance/history`

The backend scaffold includes the initial auth API and validates request payloads through NestJS DTOs.
