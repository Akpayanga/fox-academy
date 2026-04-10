# Backend Folder
All Backend code goes here (Node.js / Python / Database / APIs)

## Dashboard & Management APIs (V1)

### Dashboard Analytics
- **GET /api/v1/dashboard/admin**: Platform-wide metrics (Interns, Mentors, Health Snapshot, Activity).
- **GET /api/v1/dashboard/mentor**: Personal metrics for instructors.

### User Management
- **GET /api/v1/management/mentors**: Comprehensive list of mentors with performance metrics.
- **GET /api/v1/management/interns**: Searchable list of students with progress tracking.
    - Query params: `mentorId`, `discipline` ("frontend", "backend", etc.), `status`.
