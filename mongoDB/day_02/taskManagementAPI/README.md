# MongoDB Task Management Backend

This repository contains a task management backend developed during my MERN stack internship. The project started with MongoDB practice tasks covering database design, CRUD operations, queries, aggregation, and indexing, and was later integrated with an Express.js backend using Mongoose.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* MongoDB Shell (mongosh)
* MongoDB Node.js Driver

## Database Design

The application uses MongoDB as its database and contains two main collections:

### Users Collection

Stores user information such as name, email, and role.

Example document:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user"
}
```

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

## Backend Integration

The MongoDB database is connected to the Express.js backend using Mongoose.

The backend follows a layered structure with separate responsibilities for:

* Routes
* Controllers
* Services
* Models
* Middleware
* Database configuration

The backend communicates with MongoDB through Mongoose models instead of using an in-memory task array.

## API Operations

The backend provides REST API endpoints for task management, including:

* Get all tasks
* Get a task by ID
* Create a new task
* Update a task
* Delete a task

The API supports:

* Pagination
* Filtering by status
* Sorting
* Task validation
* MongoDB ObjectId validation
* Centralized error handling

## Validation

Mongoose validation is used to validate task data.

Examples include:

* Required task title
* Minimum title length
* Valid task status
* Valid priority
* Required owner ID
* Due date validation
* Trimming unnecessary whitespace

Invalid requests are handled through centralized error-handling middleware.

## MongoDB Queries and Aggregation

The project also includes MongoDB practice queries covering:

* Filtering tasks by status
* Finding high-priority pending tasks
* Searching tasks using case-insensitive regular expressions
* Finding tasks before a specific due date
* Sorting tasks
* Pagination using `limit()` and `skip()`
* Counting tasks by status and user
* Grouping tasks by priority
* Finding users with more than three tasks

## Indexing

Indexes were created to improve query performance:

* Unique index on user email to prevent duplicate email addresses
* Index on `ownerId` for faster user-task lookups
* Compound index on `ownerId` and `status` for optimized filtering
* Index on `createdAt` for sorting tasks by creation date

Query performance was analyzed using:

```javascript
explain("executionStats")
```

## Project Structure

```text
mongodb-tasks/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── taskController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validateTask.js
│   │
│   ├── models/
│   │   ├── taskModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── taskRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── services/
│   │   ├── taskService.js
│   │   └── userService.js
│   │
│   ├── utils/
│   │   ├── server.js
│   │   └── app.js
├── .env
├── package.json
└── README.md
```

## Environment Setup

Create a `.env` file in the project root and add your MongoDB connection details:

```env
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=task_management
```

Make sure MongoDB is running before starting the backend.

## Installation

Install the project dependencies:

```bash
npm install
```

## Running the Backend

Start the backend using:

```bash
node server.js
```

Or, if the project uses a development script:

```bash
npm run dev
```

The Express server connects to MongoDB when the application starts.

## Learning Outcomes

Through this project, I learned:

* MongoDB database and collection design
* MongoDB CRUD operations and query operators
* Aggregation pipelines
* Index creation and query optimization
* Query performance analysis
* Connecting MongoDB with Node.js
* Connecting MongoDB with Express.js using Mongoose
* Creating and using Mongoose models
* Implementing validation with Mongoose
* Structuring a backend using controllers, services, routes, and middleware
* Building REST APIs backed by MongoDB
* Centralized error handling
* Pagination, filtering, and sorting
