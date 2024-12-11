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
   cd Nooro-Backend

2. Install dependency:

   ```bash
   npm install

3.Configure environment variables:
  - create  a `.env` file in the root directory and add the following
    ```bash
    DATABASE_URL="mysql://username:password@localhost:3306/todo_db"

  Replace `username`, `password`, and `todo_db` with your MySQL credentials and database name.

4. Set up database
   ```bash
   npx prisma migrate dev --name init

5. Start the development server:
   ```npm run dev
   
6.The backend API will be accessible at `http://localhost:3002`.


   
   
