# Volunteer Coordination

## Introduction

Welcome to Volunteer Coordination application! My project aims to streamline the process of volunteering tasks managing through a user-friendly and efficient web application built using React.js.

The heart of the application lies in its ability to connect to a server and retrieve data from a MongoDB database in real-time, ensuring that users always have access to the latest information.

The application features a well-defined set of routes that guide users through different sections.

## Features

1. **Registration:** Click on "Sign up", fill in the required information, and then click "Submit".
2. **Login:** Enter your registered "Email" and "Password" to sign in.
3. **Logout:** Click on "Logout" in the header to log out of your account.
4. **Browse Volunteering Tasks:** Access the "home page" or click on the "TASKS" button to view all available volunteering tasks.
5. **View Task Details:** Click on a specific task to see its details.
6. **Sign for a Task:** Click "I want to sign up for this volunteering task" to submit for a specific task.
7. **Complete a Task:** Click "I finished the task" to mark a task as completed.
8. **Dashboard:** Navigate to the dashboard by clicking on the "DASHBOARD" button to view:
   - "My Tasks" - A list of all the volunteering tasks I have signed up for.
   - "Tasks I Performed" - A list of all the volunteering tasks I've completed.
   - "Suggested Tasks" - A list of all the suggested volunteering tasks offered by the system based on skill or location.
9. **View Task Details on Dashboard:** Click on a task to view its details directly from the dashboard.
10. **Navigate Back:** Return to the previous page by clicking the "Go Back" button.
11. **Messages:** Send a message to all users participating in the same tasks as me.

## Before you start

1. [x] Download the code from Git-Hub : https://github.com/eliyasamary/volunteer-coordination

2. [x] Navigate to the project directory and start the app using the following commands in the terminal:

- `$npm install`
- `$npm run start`

## How to Use

1. ### **Log-in / Sign-up:**
   - Route: "/" brfore login
   - Summary: Enter your registered "Email" and "Password" and sign in, or click on "Sign-up", fill in the required information, and then click "Submit"
2. ### **Retrieve all tasks:**
   - Route: "/" or "/allItems" [after login]
   - Summary: The home page is the main hub of the application, showcasing a comprehensive list of all available volunteering tasks. Users can effortlessly sign up for tasks directly from this page.
3. ### **Retrieve a specific task by ID:**
   - Route: "/ItemPage/:id"
   - Summary: By clicking on a task, users can view its details and choose to sign up for it or mark it as completed if they have already signed up.
4. ### **Dashboard:**
   - Route: "/dashboard"
   - Summary: On the dashboard, users can easily see "My Tasks", "Tasks I've Completed", and "Suggested Tasks" tailored to their profile.
5. ### **Messages:**
   - Route: "/messages"
   - Summary: Send a message to all users participating in the same task as you by typing your message and clicking "SEND".
