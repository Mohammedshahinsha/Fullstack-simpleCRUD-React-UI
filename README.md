# Student Management System

A fullstack student management system with React frontend and Express/PostgreSQL backend with complete CRUD functionality

## Screenshots

### Student List
![Student List](./images/student-list.png)

### Add Student
![Add Student](./images/add-student.png)

### Edit Student
![Edit Student](./images/edit-student.png)

### Delete Confirmation
![Delete Confirmation](./images/delete-confirmation.png)

### Analytics Dashboard
![Analytics](./images/analytics.png)

## React Demo Screenshots

### Add New Student Form
![Add New Student Form](./attached_assets/Screenshot_2025-04-13-13-52-20-980_com.android.chrome.jpg)

### Student List View
![Student List](./attached_assets/Screenshot_2025-04-13-13-52-47-825_com.android.chrome.jpg)

### Analytics View
![Analytics View](./attached_assets/Screenshot_2025-04-13-13-52-56-370_com.android.chrome.jpg)

### API Screenshots

#### GET All Students
![GET All Students](./images/api-get-all.png)

#### GET Student by ID
![GET Student by ID](./images/api-get-by-id.png)

#### POST Create Student
![POST Create Student](./images/api-post.png)

#### PUT Update Student
![PUT Update Student](./images/api-put.png)

#### DELETE Student
![DELETE Student](./images/api-delete.png)


## API Documentation

### GET /api/students
* Description: Retrieves a list of all students
* Response: Array of student objects
* Status Code: 200 OK (success)

### GET /api/students/:id
* Description: Retrieves a specific student by ID
* Response: Student object
* Status Code: 200 OK (success), 404 Not Found (invalid ID)

### POST /api/students
* Description: Creates a new student record
* Request Body: Student data (name, roll number, email, mobile)
* Response: Created student object with generated ID
* Status Code: 201 Created (success), 400 Bad Request (validation error)

### PUT /api/students/:id
* Description: Updates an existing student record
* Request Body: Updated student data
* Response: Updated student object
* Status Code: 200 OK (success), 404 Not Found (invalid ID), 400 Bad Request (validation error)

### DELETE /api/students/:id
* Description: Removes a student record
* Response: No content
* Status Code: 204 No Content (success), 404 Not Found (invalid ID)

## Database Schema

The PostgreSQL database includes a `students` table with the following structure:

```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  roll_number TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  mobile TEXT NOT NULL
);
```

## API Tests

### GET All Students

```http
GET /api/students HTTP/1.1
Host: localhost:5000
Accept: application/json
```

Response (200 OK):
```json
[
  {
    "id": 3,
    "name": "Mohammed shahinsha Abdul Ali",
    "rollNumber": "727622BAD109 ",
    "email": "mohammedshahinsha3333@gmail.com",
    "mobile": "09994814936"
  },
  {
    "id": 4,
    "name": "Test Student",
    "rollNumber": "R98765",
    "email": "test@example.com",
    "mobile": "1234567890"
  }
]
```

### GET Student by ID

```http
GET /api/students/3 HTTP/1.1
Host: localhost:5000
Accept: application/json
```

Response (200 OK):
```json
{
  "id": 3,
  "name": "Mohammed shahinsha Abdul Ali",
  "rollNumber": "727622BAD109 ",
  "email": "mohammedshahinsha3333@gmail.com",
  "mobile": "09994814936"
}
```

### POST Create Student

```http
POST /api/students HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "name": "Test Student",
  "rollNumber": "R12345-UNIQUE",
  "email": "unique-test@example.com",
  "mobile": "1234567890"
}
```

Response (201 Created):
```json
{
  "id": 6,
  "name": "Test Student",
  "rollNumber": "R12345-UNIQUE",
  "email": "unique-test@example.com",
  "mobile": "1234567890"
}
```

### PUT Update Student

```http
PUT /api/students/6 HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "name": "Updated Test Student",
  "rollNumber": "R12345-UNIQUE",
  "email": "unique-test-updated@example.com",
  "mobile": "9876543210"
}
```

Response (200 OK):
```json
{
  "id": 6,
  "name": "Updated Test Student",
  "rollNumber": "R12345-UNIQUE",
  "email": "unique-test-updated@example.com",
  "mobile": "9876543210"
}
```

### DELETE Student

```http
DELETE /api/students/6 HTTP/1.1
Host: localhost:5000
```

Response (204 No Content):
```
// No response body returned
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/Mohammedshahinsha/Fullstack-simpleCRUD-React-UI.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Setup PostgreSQL database and update the connection in .env file:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/student_management
   ```

4. Run database migrations:
   ```
   npm run db:push
   ```

5. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

```
/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Application pages
│   │   └── types/        # TypeScript type definitions
├── server/               # Backend Express application
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── db.ts             # Database connection
├── shared/               # Shared code between frontend and backend
│   └── schema.ts         # Database schema and validation
└── drizzle.config.ts     # Drizzle ORM configuration