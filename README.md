# To-Do List Application

This project is a **To-Do List Application** developed using the **FreeSchema Frontend** framework by Mentor Friends Pvt. Ltd. The application allows users to manage their tasks by creating, viewing, editing, and deleting to-do items.

## Features

- **Create Task**: Add new tasks to your list.
- **List Tasks**: View all created tasks.
- **Edit Task**: Modify details of an existing task.
- **Delete Task**: Remove a task from the list.
- **Mark as Complete**: Mark tasks as completed or uncompleted.

## Project Structure

```plaintext
.
├── .gitignore
├── index.html
├── package.json
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── default/
│   │   │   ├── BaseObserver.ts
│   │   │   ├── BaseWidget.ts
│   │   │   ├── mainView.class.ts
│   │   │   └── StatefulWidget.ts
│   │   ├── environments/
│   │   │   └── environment.dev.ts
│   │   ├── interfaces/
│   │   │   └── IUser.interface.ts
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.index.ts
│   │   │   │   ├── home.service.ts
│   │   │   │   └── home.style.css
│   │   │   ├── noPageFound/
│   │   │   │   └── noPageFound.index.ts
│   │   │   └── todo/
│   │   │       ├── create.todo.ts
│   │   │       ├── list.todo.ts
│   │   │       └── wrapper.todo.ts
│   │   ├── routes/
│   │   │   ├── renderRoute.service.ts
│   │   │   └── routes.ts
│   ├── main.ts
│   └── style.css
├── tsconfig.json
└── vite.config.js
```

## Key Files

- **`src/app/pages/todo/create.todo.ts`**: Manages task creation and submission.
- **`src/app/pages/todo/list.todo.ts`**: Displays tasks and provides options to edit, delete, and mark as complete.
- **`src/app/pages/todo/wrapper.todo.ts`**: Wraps the create and list components for an integrated view.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Ayush85/freeschemaTodo.git
   cd freeschemaTodo
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Build the Project** (for production):

   ```bash
   npm run build
   ```

5. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

## Usage

1. **Creating a Task**: Enter task details in the input field and click "Submit."
2. **Listing Tasks**: View all tasks in the list view.
3. **Editing a Task**: Click "Edit" on a task to modify its details.
4. **Deleting a Task**: Click "Delete" on a task to remove it from the list.
5. **Marking a Task as Complete**: Toggle the checkbox to mark a task as complete or incomplete.
