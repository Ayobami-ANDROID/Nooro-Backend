# Todo List Backend

This project is a **Backend for a Todo List App** built using **Express.js**. It provides REST API endpoints to manage tasks, including functionalities to create, edit, delete, and toggle task completion statuses. The backend uses **Prisma** for database interaction with **MySQL** and is implemented entirely in **TypeScript**. **Zod** is used for form validation to ensure data integrity and consistency.

---

## Features

### Backend

- **Task Management Endpoints**:
  - `GET /tasks`: Fetch all tasks.
  - `POST /tasks`: Create a new task.
  - `PUT /tasks/:id`: Update an existing task.
  - `DELETE /tasks/:id`: Delete a task.
- **Database Schema**:
  - Tasks include the following fields:
    - `id`: Unique identifier.
    - `title`: The title of the task.
    - `color`: Color associated with the task.
    - `completed`: Boolean indicating completion status.
    - `createdAt`: Timestamp of task creation.
    - `updatedAt`: Timestamp of the last update.
- **Validation**:
  - Input validation using **Zod** for task creation and updates.
  - Error handling for invalid requests and database errors.

---

## Project Setup

### Prerequisites

- Node.js
- MySQL

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend
