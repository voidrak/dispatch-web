# Truck Dispatch Services Web Application

Welcome to the Truck Dispatch Services web application! This project is built using **Laravel** for the backend and **React** for the frontend. The primary purpose of this application is to provide a simple platform for car owners to contact us, facilitating communication and inquiries regarding our truck dispatch services.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
 

## Introduction

This project represents my first work for a client, and I am excited to share it with the community. The application serves as a straightforward solution for car owners who wish to reach out for information or assistance related to our services. By leveraging modern web technologies, I have created an accessible platform that enhances communication.

## Features

- **Contact Form**: Car owners can easily fill out a form to get in touch with us.
- **Document Submission**: Users can send relevant information and documents directly through the application using Laravel.
- **User-Friendly Interface**: Designed with simplicity in mind, making it easy for users to navigate and submit inquiries.

## Technologies Used

- **Backend**: Laravel
- **Frontend**: React
- **Database**: MySQL
- **Version Control**: Git
- **Deployment**: (Specify your deployment method here, e.g., Heroku, AWS, etc.)

## Installation

To get started with the Truck Dispatch Services web application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/truck-dispatch-services.git
   ```

2. Navigate to the project directory:
   ```bash
   cd truck-dispatch-services
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   composer install
   ```

4. Set up your environment variables:
   - Copy `.env.example` to `.env` and configure your database settings.

5. Generate the application key:
   ```bash
   php artisan key:generate
   ```

6. Run migrations:
   ```bash
   php artisan migrate
   ```

7. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

8. Start the development server:
   - For Laravel (backend):
     ```bash
     php artisan serve
     ```
   - For React (frontend):
     ```bash
     npm start
     ```

## Usage

Once the application is running, you can access it via your web browser at `http://localhost:8000` (or the port specified by Laravel). Car owners will be able to fill out the contact form and submit their inquiries or documents.

 
 

Thank you for checking out my Truck Dispatch Services web application! I hope it serves as a valuable tool for car owners looking to connect with us. If you have any questions or feedback, feel free to reach out!
