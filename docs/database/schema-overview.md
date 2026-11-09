# Database Design Summary

The Prisma schema defines the primary entities for tenant isolation, staff administration, timetable workflows, and AI-based attendance evidence. The following major domains are included:

- `schools`, `users`, `roles`, `permissions`, `user_roles`
- `staff_profiles`, `registration_requests`, `staff_documents`
- `teacher_timetables`, `timetable_uploads`, `timetable_extractions`, `timetable_lectures`
- `attendance_records`, `attendance_attempts`, `geocam_photos`, `gps_attendance_records`
- `live_staff_locations`, `location_sharing_sessions`, `attendance_alerts`, `notification_logs`
- `leave_requests`, `substitute_assignments`, `ai_attendance_insights`, `audit_logs`

The schema is intentionally designed around UUID primary keys, UTC timestamps, and append-only audit trails. All biometric and GPS evidence is treated as sensitive data and should be stored in a private object store.
