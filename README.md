# Google Drive Upload Application (Spring Boot, React CRA Typescript)

This application demonstrates how to upload images to Google Drive using Google Drive API. It consists of a React frontend and a Spring Boot backend.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
   - [Frontend](#frontend)
   - [Backend](#backend)

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for the React frontend)
- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html) (for the Spring Boot backend)
- [Maven](https://maven.apache.org/) (for managing the Spring Boot project)

## Setup

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd FE
2. **Navigate to the frontend directory:**

   ```bash
   npm install
3. Update GoogleDriveManager.tsx with your Back End URL credentials:
   ```bash
   const BACKEND_URL = 'http://localhost:8080';
4. Run the frontend development server:
   ```bash
   npm start

### Backend
1. Navigate to the backend directory:
   ```bash
   cd BE
2. Configure Google Drive API credentials.
3. Go to Google Service.java:
   Change backend development server port and YOUR_CLIENT_ID (credentials client id)
   ```bash
   LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8080).build();
        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("YOUR_CLIENT_ID");
4. Run the backend development server.
   

