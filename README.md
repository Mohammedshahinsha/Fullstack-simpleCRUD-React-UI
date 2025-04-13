# Student Management System

A fullstack student management system with React frontend and Express/PostgreSQL backend with complete CRUD functionality

## GET /api/students

* Description: Retrieves a list of all students
* Response: Array of student objects
* Status Code: 200 OK (success)

## GET /api/students/:id

* Description: Retrieves a specific student by ID
* Response: Student object
* Status Code: 200 OK (success), 404 Not Found (invalid ID)

## POST /api/students

* Description: Creates a new student record
* Request Body: Student data (name, roll number, email, mobile)
* Response: Created student object with generated ID
* Status Code: 201 Created (success), 400 Bad Request (validation error)

## PUT /api/students/:id

* Description: Updates an existing student record
* Request Body: Updated student data
* Response: Updated student object
* Status Code: 200 OK (success), 404 Not Found (invalid ID), 400 Bad Request (validation error)

## DELETE /api/students/:id

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

## Screenshots

### Student List Page
![Student List](./images/student-list.png)

### Add Student Form
![Add Student](./images/add-student.png)

### Edit Student Form
![Edit Student](./images/edit-student.png)

### Delete Confirmation
![Delete Confirmation](./images/delete-confirmation.png)

### Analytics Dashboard
![Analytics Dashboard](./images/analytics.png)

## API Screenshots

### GET All Students
![GET All Students](./images/postman-get-all.png)

### GET Student by ID
![GET Student by ID](./images/postman-get-by-id.png)

### POST Create Student
![POST Create Student](./images/postman-post.png)

### PUT Update Student
![PUT Update Student](./images/postman-put.png)

### DELETE Student
![DELETE Student](./images/postman-delete.png)

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
```