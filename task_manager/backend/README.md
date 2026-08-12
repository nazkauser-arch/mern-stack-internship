# Task Management Backend

This repository contains a task management backend developed during my MERN stack internship. The project includes MongoDB database integration, REST APIs, CRUD operations, validation, error handling, and user authentication.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* MongoDB Shell (mongosh)

## Features

* User registration
* User login
* Password hashing
* JWT-based authentication
* Protected API routes
* Task CRUD operations
* User-task ownership
* Request validation
* Centralized error handling
* Pagination
* Filtering
* Sorting
* MongoDB aggregation
* Database indexing

## Database Design

The application uses MongoDB with two main collections:

### Users Collection

Stores user information and securely hashed passwords.

Example document:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed-password",
  "role": "user"
}
```

Passwords are never stored as plain text. They are hashed using `bcrypt` before being stored in the database.

### Tasks Collection

Stores task details including title, description, status, priority, owner, and timestamps.

Example document:

```json
{
  "title": "Learn MongoDB",
  "description": "Practice MongoDB queries",
  "status": "pending",
  "priority": "high",
  "ownerId": "ObjectId",
  "dueDate": "ISODate",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

## Authentication

Authentication is implemented using JSON Web Tokens (JWT).

### Registration

Users can create an account by providing:

* Name
* Email
* Password
* Role

During registration:

1. The password is validated.
2. The password is hashed using `bcrypt`.
3. The user is stored in MongoDB.
4. A JWT can be generated for the authenticated user.

### Login

Users can log in using their email and password.

During login:

1. The user is searched by email.
2. The provided password is compared with the stored hashed password.
3. A JWT is generated after successful authentication.
4. The token is used to access protected routes.

### Authentication Middleware

Protected routes use authentication middleware to:

1. Read the JWT from the request.
2. Verify the token.
3. Extract the authenticated user's information.
4. Attach the user information to the request.
5. Allow the request to continue.

Requests with missing or invalid tokens are rejected.

## API Operations

The backend provides REST API endpoints for authentication and task management.

### Authentication

* Register a user
* Login a user

### Tasks

* Get all tasks
* Get a task by ID
* Create a task
* Update a task
* Delete a task

Authenticated users can access protected task routes, and tasks can be associated with their respective owners.

## Validation

Mongoose and middleware are used to validate incoming data.

Examples include:

* Required fields
* Email validation
* Password validation
* Minimum task title length
* Valid task status
* Valid priority
* Required owner ID
* Due date validation
* MongoDB ObjectId validation
* Trimming unnecessary whitespace

## Error Handling

The application uses centralized error-handling middleware to provide consistent API error responses.

It handles errors such as:

* Invalid request data
* Invalid MongoDB ObjectId
* Resource not found
* Mongoose validation errors
* Invalid authentication credentials
* Missing authentication token
* Invalid or expired JWT
* Duplicate user email

## Project Structure

```text
task-management-api/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── validateTask.js
│   │
│   ├── models/
│   │   ├── taskModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── taskRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── taskService.js
│   │   └── userService.js
│   │
│   ├── utils/
│   │   └── token.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

## Environment Setup

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=task_management
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

Keep sensitive environment variables out of version control by adding `.env` to `.gitignore`.

## Installation

Install the project dependencies:

```bash
npm install
```

## Running the Backend

Start the backend:

```bash
node server.js
```

For development:

```bash
npm run dev
```

The application connects to MongoDB when the server starts.

## Authentication Flow

```text
Register
   ↓
Hash Password
   ↓
Store User in MongoDB
   ↓
Login
   ↓
Verify Password
   ↓
Generate JWT
   ↓
Send JWT to Client
   ↓
Client Sends JWT with Requests
   ↓
Authentication Middleware
   ↓
Verify JWT
   ↓
Access Protected Route
```

## MongoDB Indexing

Indexes were created to improve query performance:

* Unique index on user email
* Index on `ownerId`
* Compound index on `ownerId` and `status`
* Index on `createdAt`

Query performance was analyzed using:

```javascript
explain("executionStats")
```

## Learning Outcomes

Through this project, I learned:

* MongoDB database and collection design
* MongoDB CRUD operations
* Aggregation pipelines
* Database indexing and query optimization
* Connecting MongoDB with Node.js and Express.js
* Mongoose models and validation
* REST API development
* MVC/layered backend architecture
* Password hashing using bcrypt
* JWT-based authentication
* Authentication middleware
* Protecting API routes
* Centralized error handling
* Pagination, filtering, and sorting
* Separating authentication logic into controllers, services, routes, middleware, and utilities
