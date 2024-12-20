# Stage One Backend

This repository contains the setup for a basic backend server using Express.js. The server provides several routes that give information about the developer, their hobbies, dreams, and the status of the server.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Live Demo](#live-demo)

## Overview

The purpose of this project is to set up a basic Express server with multiple routes:

- A welcome message indicating that the server is running.
- A route displaying the developer's name.
- A route showing the developer's hobby.
- A route displaying the developer's dream and goals.
- A "Not Found" route to handle invalid API requests.

## Installation

To get started, follow the steps below to set up the server on your local machine:

1. **Clone the repository**:
   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/BrukAbebe/stage-one-backend.git

2. **Navigate to the project directory**:
   Use the following command to move into the project directory:
 
   ```bash
   cd stage-one-backend

3. **Install dependencies**:
   Run the following command to install the required Node.js packages:

   ```bash
   npm install

## Usage

1. **Start the server**:
    Use the following command to start the server:

   ```bash
   npm start

2. **Access the routes**:
    Open your browser or use a tool like Postman to test the following routes:

   1. **GET /**: Displays a welcome message indicating that the server is running.
   2. **GET /name**: Returns the developer's name.
   3. **GET /hobby**: Returns the developer's hobby.
   4. **GET /dream**: Returns the developer's dream and goals.
   5. **Invalid route**: Displays a 404 "Route not found" message for undefined routes.

## Routes

 - GET /:
    Returns a JSON response indicating the server is running successfully.
    Example Response:

    ```json
     {
       "message": "Welcome to Stage One Backend!",
       "serverStatus": "Server is running successfully!"
     }

 - GET /name:
    Displays the developer's name.
    Example Response:
    `Biruk Abebe`

 - GET /hobby:
    Displays the developer's hobby.
    Example Response:

    ```json
     {
        "hobby": "Traveling"
     }

 - GET /dream:
    Displays the developer's dream and goals.
    Example Response:
    `My name is Biruk. I aspire to be a problem solver and a creative thinker. I want to build an AI company where many developers can work, and through this company, I aim to address the needs of all Ethiopian rural students.`

 - Invalid Routes:
    Returns a 404 "Route not found" response for undefined routes.
    Example Response:

    ```json
     {
        "message": "Route not found"
    }

## Live Demo
    You can check out the live demo of this project at the following link:

  [Demo](https://stage-one-backend-7h3q.onrender.com)
