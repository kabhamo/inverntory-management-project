# **Fullstack Inventory Management Dashboard**

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Documentation](#api-documentation)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

## **Project Overview**

The Fullstack Inventory Management Dashboard is a robust, full-featured web application designed to help businesses manage their inventory efficiently. The dashboard provides real-time data visualization, intuitive management of inventory items, and seamless integration with cloud services for scalability and reliability.

This project showcases a comprehensive use of modern web technologies, including a responsive frontend, a powerful backend, and cloud-based infrastructure to ensure high availability and performance.

## **Features**

- **Real-time Inventory Tracking**: Monitor inventory levels in real-time across multiple warehouses.
- **CRUD Operations**: Easily create, read, update, and delete inventory records with an intuitive interface.
- **Responsive Design**: Fully responsive layout that works on desktops, tablets, and mobile devices.
- **Cloud Integration**: Utilizes AWS services for storage, API management, and server hosting.

## **Technology Stack**

### **Frontend**
- **Next.js**: Server-side rendering, routing, and frontend framework.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux Toolkit & Redux Toolkit Query**: State management and data fetching.
- **Material UI Data Grid**: For displaying and managing tabular data.

### **Backend**
- **Node.js**: JavaScript runtime for server-side logic.
- **Prisma**: ORM for database management.

### **Cloud Infrastructure**
- **AWS EC2**: Hosts the Node.js server.
- **AWS RDS**: Manages the PostgreSQL database.
- **AWS API Gateway**: Handles API requests and routes them to the backend.
- **AWS Amplify**: Facilitates CI/CD for deploying updates of the frontend.
- **AWS S3**: Stores and serves static assets like images.

## **Installation**

To set up the project locally, follow these steps:

### **Prerequisites**

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **PostgreSQL** (if running the database locally)
- **AWS CLI** (for deploying to AWS)

### **Clone the Repository**

```bash
git clone https://github.com/your-username/inventory-management-dashboard.git
cd inventory-management
npm run dev
cd server
npm install
```
```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api-gateway-url
DATABASE_URL=postgresql://user:password@localhost:5432/your-database
AWS_S3_BUCKET_NAME=your-s3-bucket-name
AWS_REGION=your-aws-region
```
```bash
npx prisma migrate dev
npm run dev
```
![Dashboard Screenshot](server/assets/screenshot.png)
