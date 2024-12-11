
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
   git clone https://github.com/Ayobami-ANDROID/Nooro-Backend.git
   cd Nooro-Backend 
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the root directory and add the following:
     ```env
     DATABASE_URL="mysql://username:password@localhost:3306/todo_db"
     ```
     Replace `username`, `password`, and `todo_db` with your MySQL credentials and database name.

4. Set up the database:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. The backend API will be accessible at `http://localhost:3002`.

---

## Endpoints

### `GET /tasks`

- Fetches a list of all tasks.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Sample Task",
      "color": "blue",
      "completed": false,
      "createdAt": "2024-01-01T12:00:00.000Z",
      "updatedAt": "2024-01-01T12:00:00.000Z"
    }
  ]
  ```

### `POST /tasks`

- Creates a new task.
- **Request Body**:
  ```json
  {
    "title": "New Task",
    "color": "red"
  }
  ```
- **Response**:
  ```json
  {
    "id": 2,
    "title": "New Task",
    "color": "red",
    "completed": false,
    "createdAt": "2024-01-01T12:05:00.000Z",
    "updatedAt": "2024-01-01T12:05:00.000Z"
  }
  ```

### `PUT /tasks/:id`

- Updates an existing task.
- **Request Body**:
  ```json
  {
    "title": "Updated Task",
    "color": "green",
    "completed": true
  }
  ```
- **Response**:
  ```json
  {
    "id": 2,
    "title": "Updated Task",
    "color": "green",
    "completed": true,
    "createdAt": "2024-01-01T12:05:00.000Z",
    "updatedAt": "2024-01-01T12:10:00.000Z"
  }
  ```

### `DELETE /tasks/:id`

- Deletes a task by ID.
- **Response**:
  ```json
  {
    "message": "Task deleted successfully."
  }
  ```

---

## Notes

- This backend is designed for seamless integration with a Next.js frontend application.
- Prisma is used to simplify database operations and migrations.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

