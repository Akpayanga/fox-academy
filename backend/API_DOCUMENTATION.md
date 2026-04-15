# Foxtrot TalentFlow LMS API Documentation

This document provides full details on how to interact with the API endpoints. Base URL is generally `http://localhost:8000`.

---

## System Health

### /api/v1/live

**Endpoint:** `GET /api/v1/live`

**Authentication Required:** None

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/health

**Endpoint:** `GET /api/v1/health`

**Authentication Required:** None

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /

**Endpoint:** `GET /`

**Authentication Required:** None

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## User & Instructor Auth

### /api/v1/auth/pre-register

**Endpoint:** `POST /api/v1/auth/pre-register`

**Authentication Required:** None

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "adeboiz2021@gmail.com",
  "role": "student"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/verify-invitation

**Endpoint:** `POST /api/v1/auth/verify-invitation`

**Authentication Required:** None

**Request Body:**

```json
{
  "token": "dummy-token-12345",
  "code": "123456"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/complete-registration

**Endpoint:** `POST /api/v1/auth/complete-registration`

**Authentication Required:** None

**Request Body:**

```json
{
  "email": "adeboiz2021@gmail.com",
  "password": "Str0ng_P@ssw0rd!123"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/login

**Endpoint:** `POST /api/v1/auth/login`

**Authentication Required:** None

**Request Body:**

```json
{
  "email": "adeboiz2021@gmail.com",
  "password": "Str0ng_P@ssw0rd!123",
  "provider": "local"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/refresh-token

**Endpoint:** `POST /api/v1/auth/refresh-token`

**Authentication Required:** None

**Request Body:**

```json
{
  "refreshToken": "dummy-refresh-token"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/forgot-password

**Endpoint:** `POST /api/v1/auth/forgot-password`

**Authentication Required:** None

**Request Body:**

```json
{
  "email": "adeboiz2021@gmail.com"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/reset-password

**Endpoint:** `POST /api/v1/auth/reset-password`

**Authentication Required:** None

**Request Body:**

```json
{
  "token": "reset-token-xyz",
  "newPassword": "Str0ng_P@ssw0rd!123"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/profile

**Endpoint:** `GET /api/v1/auth/profile`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/complete-student-profile

**Endpoint:** `POST /api/v1/auth/complete-student-profile`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "course": "backend"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/complete-mentor-profile

**Endpoint:** `POST /api/v1/auth/complete-mentor-profile`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "bio": "I am a senior developer...",
  "roleTitle": "Senior Engineer",
  "linkedIn": "https://linkedin.com/in/dummy",
  "phoneNumber": "+1234567890"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/logout

**Endpoint:** `POST /api/v1/auth/logout`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/google

**Endpoint:** `GET /api/v1/auth/google`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/google/callback

**Endpoint:** `GET /api/v1/auth/google/callback`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/password-strength

**Endpoint:** `POST /api/v1/auth/password-strength`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "password": "Str0ng_P@ssw0rd!123"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Admin Auth

### /api/v1/auth/admin/register

**Endpoint:** `POST /api/v1/auth/admin/register`

**Authentication Required:** None

**Request Body:**

```json
{
  "firstName": "Admin",
  "lastName": "User",
  "email": "adeboiz2021@gmail.com",
  "password": "Str0ng_P@ssw0rd!123"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/admin/verify

**Endpoint:** `GET /api/v1/auth/admin/verify`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/admin/google

**Endpoint:** `GET /api/v1/auth/admin/google`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/auth/admin/google/callback

**Endpoint:** `GET /api/v1/auth/admin/google/callback`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Media

### /api/v1/media/upload

**Endpoint:** `POST /api/v1/media/upload`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/media/delete/:id

**Endpoint:** `DELETE /api/v1/media/delete/:id`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/media/many-upload

**Endpoint:** `POST /api/v1/media/many-upload`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Management

### /api/v1/management/mentors

**Endpoint:** `GET /api/v1/management/mentors`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/management/interns

**Endpoint:** `GET /api/v1/management/interns`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Courses

### /api/v1/courses/

**Endpoint:** `GET /api/v1/courses/`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/courses/:id

**Endpoint:** `GET /api/v1/courses/:id`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Applications

### /api/v1/applications/submit

**Endpoint:** `POST /api/v1/applications/submit`

**Authentication Required:** None

**Request Body:**

```json
{
  "fullName": "Jane Doe",
  "email": "adeboiz2021@gmail.com",
  "phoneNumber": "+1987654321",
  "primaryDiscipline": "frontend",
  "expertiseLevel": "intermediate",
  "personalStatement": "I am very eager to learn...",
  "portfolioUrl": "https://janedoe.me",
  "githubLinkedin": "https://github.com/janedoe"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/applications/status/:email

**Endpoint:** `GET /api/v1/applications/status/:email`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Learning

### /api/v1/learning/

**Endpoint:** `GET /api/v1/learning/`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/learning/:courseId

**Endpoint:** `GET /api/v1/learning/:courseId`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Audit

### /api/v1/audit/

**Endpoint:** `GET /api/v1/audit/`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Dashboard

### /api/v1/dashboard/

**Endpoint:** `GET /api/v1/dashboard/`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/dashboard/admin

**Endpoint:** `GET /api/v1/dashboard/admin`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/dashboard/mentor

**Endpoint:** `GET /api/v1/dashboard/mentor`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Course Progress

### /api/v1/course-progress/get/:userId/:courseId

**Endpoint:** `GET /api/v1/course-progress/get/:userId/:courseId`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/course-progress/mark-lecture-viewed

**Endpoint:** `POST /api/v1/course-progress/mark-lecture-viewed`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "userId": "64a2c0a1f0a123456789abcd",
  "courseId": "64a2c0a1f0a123456789abcd",
  "lectureId": "12345"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/course-progress/reset-progress

**Endpoint:** `POST /api/v1/course-progress/reset-progress`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "userId": "64a2c0a1f0a123456789abcd",
  "courseId": "64a2c0a1f0a123456789abcd"
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Community / Discussions

### /api/v1/community/discussions

**Endpoint:** `POST /api/v1/community/discussions`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "title": "How to export modules in Node.js?",
  "content": "I am struggling with module.exports versus export default...",
  "channel": "general",
  "tags": ["nodejs", "javascript"],
  "attachments": []
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/community/discussions

**Endpoint:** `GET /api/v1/community/discussions`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/community/discussions/:id

**Endpoint:** `GET /api/v1/community/discussions/:id`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/community/discussions/:id/replies

**Endpoint:** `POST /api/v1/community/discussions/:id/replies`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "content": "You should use module.exports for CommonJS."
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/community/resources/pinned

**Endpoint:** `GET /api/v1/community/resources/pinned`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Assignments

### /api/v1/assignments/

**Endpoint:** `GET /api/v1/assignments/`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/assignments/:id

**Endpoint:** `GET /api/v1/assignments/:id`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/assignments/:id/submit

**Endpoint:** `POST /api/v1/assignments/:id/submit`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "fileUrl": "https://s3.dummy.com/submission.zip",
  "linkUrl": "https://github.com/dummy/repo",
  "mentorNote": "Please review my assignment."
}
```

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Notifications

### /api/v1/notifications/

**Endpoint:** `GET /api/v1/notifications/`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/notifications/read-notify

**Endpoint:** `PUT /api/v1/notifications/read-notify`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Request successful",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

## Bookings

### /api/v1/bookings/

**Endpoint:** `POST /api/v1/bookings/`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Request Body:**

```json
{
  "mentorId": "64a2c0a1f0a123456789aaaa",
  "studentId": "64a2c0a1f0a123456789bbbb",
  "date": "2026-05-01",
  "time": "14:00",
  "purpose": "Discuss backend architecture design"
}
```

**Expected Responses:**

#### Successful Request (201)

```json
{
  "status": "success",
  "message": "Session Booked!",
  "data": {}
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "All fields (mentorId, studentId, date, time, purpose) are required",
  "data": null
}
```

---

### /api/v1/bookings/mentor/:mentorId

**Endpoint:** `GET /api/v1/bookings/mentor/:mentorId`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Mentor bookings fetched successfully",
  "data": []
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---

### /api/v1/bookings/student/:studentId

**Endpoint:** `GET /api/v1/bookings/student/:studentId`

**Authentication Required:** Bearer Token (`Authorization: Bearer <token>`)

**Expected Responses:**

#### Successful Request (200)

```json
{
  "status": "success",
  "message": "Student bookings fetched successfully",
  "data": []
}
```

#### Error Response (400)

```json
{
  "status": "error",
  "message": "Bad request",
  "data": null
}
```

---