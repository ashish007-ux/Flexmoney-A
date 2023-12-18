Project Documentation
Yoga Classes Enrollment App
Table of Contents
1.	Introduction
2.	Features
3.	Project Structure
4.	Frontend
•	Tech Stack
•	Setup
•	Folder Structure
•	Running the App
5.	Backend
•	Tech Stack
•	Setup
•	Folder Structure
•	Running the Server
6.	API Endpoints
7.	Database
•	Entity-Relationship (ER) Diagram
8.	Deployment
1. Introduction
The Yoga Classes Enrollment App is a simple web application that allows users to enroll in monthly yoga classes. The app consists of a frontend built with React and a backend built with Node.js using the Express framework.
2. Features
•	User registration for yoga classes.
•	Monthly enrollment with a choice of batches.
•	Age validation (18-65 years).
•	Payment processing (placeholder function, not implemented).
3. Project Structure
The project is organized into two main directories: frontend for the React app and backend for the Node.js server.
project-root/
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- ...
|   |-- package.json
|-- backend/
|   |-- server.js
|   |-- ...
|   |-- package.json
|-- ...
4. Frontend
Tech Stack
•	React
•	Axios (HTTP client)
Frontend Setup
1.	Navigate to the frontend directory:
              cd frontend 
2.	Install dependencies:
              npm install 
Frontend Folder Structure
frontend/
|-- public/
|-- src/
|   |-- components/
|   |-- App.js
|   |-- index.js
|   |-- ...
|-- package.json

Running the App
 npm start 
The app will be available at http://localhost:3000.
5. Backend
Tech Stack
•	Node.js
•	Express
•	Axios (for handling HTTP requests)
Backend Setup
1.	Navigate to the backend directory:
               cd backend 
2.	Install dependencies:
      npm install 
Backend Folder Structure
backend/
|-- server.js
|-- ...
|-- package.json

Running the Server
      npm start 
6. API Endpoints
•	Enroll User:
•	Accepts user data (name, age, batchTime) and performs basic validations.
7. Database
Entity-Relationship (ER) Diagram
   +-----------------+
   |     Yoga        |
   +-----------------+
  | _id (ObjectId)  |
  | name (String)   |
  | age (Number)    |
  | batchTime (String) |
   +-----------------+
This schema represents a MongoDB collection named "Yoga" with fields _id, name, age, and batchTime.
8. Deployment
1.	Frontend:
•	Build the React app:
                                npm run build 
•	Deployed the build folder to a hosting service  ( Netlify).
2.	Backend:
•	Deploy the Node.js server to a hosting service (render).
3.	Configure Environment Variables:
•	Set environment variables for production (e.g., database connection strings, API keys) on your hosting platform.


