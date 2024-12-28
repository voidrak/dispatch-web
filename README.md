# Truck Dispatch Services Web Application

Welcome to the Truck Dispatch Services web application! This project is built using **Laravel** for the backend and **React** for the frontend. It is designed to manage load scheduling, routing, and communication for truck drivers, streamlining deliveries and maximizing efficiency. This application allows drivers to focus on safe, timely transport while dispatchers handle logistics.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project represents my first work for a client, and I am excited to share it with the community. The application aims to improve the logistics of truck dispatch services by providing an intuitive interface for both dispatchers and drivers. By leveraging modern web technologies, I have created a solution that enhances communication and operational efficiency.

## Features

- **Load Scheduling**: Easily schedule loads for drivers with a user-friendly interface.
- **Routing Management**: Optimize routes for timely deliveries.
- **Document Submission**: Users can send information and documents directly to the client using Laravel.
- **Real-time Communication**: Facilitate seamless communication between dispatchers and drivers.

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

Once the application is running, you can access it via your web browser at `http://localhost:8000` (or the port specified by Laravel). You will be able to create accounts, schedule loads, manage routes, and submit documents.

## Contributing

I welcome contributions from the community! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out my Truck Dispatch Services web application! I hope it serves as a valuable tool for improving logistics in the trucking industry. If you have any questions or feedback, feel free to reach out!
