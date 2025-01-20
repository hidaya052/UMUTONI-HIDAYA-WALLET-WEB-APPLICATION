Wallet Web Application
Project Overview
The Wallet Web Application helps users manage their finances by tracking income and expenses across multiple accounts (bank, mobile money, cash, etc.), generating reports, and staying within budget. It provides a user-friendly interface with visualizations for better insights into spending habits.

Features
Transaction Tracking: Add and view income/expenses from various accounts.
Report Generation: Generate reports based on a specified time period.
Budget Management: Set budgets for categories and receive notifications when exceeded.
Categorization: Add categories and subcategories to link transactions.
Visualization: Interactive charts summarizing transaction data.
Setup and Installation Instructions
Prerequisites
Node.js (v16+): Download Node.js
MongoDB Atlas (or local MongoDB instance): Set up MongoDB Atlas
Git: Install Git
Frontend: React.js
Backend Deployment Platform: Render or other hosting services.
Frontend Deployment Platform: Netlify or Vercel.
Backend Setup
Clone the Repository:git clone https://github.com/hidaya052/UMUTONI-HIDAYA-WALLET-WEB-APPLICATION/
cd wallet-web-app/backend
Install Dependencies:npm installMONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
Run the Backend:npm run dev
The backend will run on: https://app.netlify.com/teams/hidaya052/sitesFrontend Setup
Navigate to the Frontend:
cd ../frontend
Install Dependencies:
npm install
Run the Frontend
npm start
The frontend will run on:https://app.netlify.com/teams/hidaya052/sites
Deployment
Backend
Push the backend code to a GitHub repository.
Deploy the backend on Render:
Add environment variables (MONGO_URI, JWT_SECRET) on Render.
Copy the live backend URL (e.g., https://your-wallet-api.onrender.com).
Frontend
Build the frontend:
npm run build
Deploy on Netlify or Vercel:
Connect your GitHub repository.
Configure the build command as npm run build and the publish directory as build/.
Live Demo
Frontend: https://app.netlify.com/teams/hidaya052/
Backend API: https://app.netlify.com/teams/hidaya052/sites
Project Structure
wallet-web-app/
│
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── .env             # Environment variables
│   ├── package.json     # Backend dependencies
│   └── index.js         # Main backend entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # React pages
│   │   └── services/    # API integration
│   ├── public/          # Static assets
│   ├── package.json     # Frontend dependencies
│   └── README.md        # Frontend-specific documentation
│
└── README.md            # Main documentation
Future Improvements
User authentication and role-based access control.
Enhanced reporting with downloadable PDF/Excel reports.
Advanced data visualizations (trends, forecasts).

Set Up Environment Variables: Create a .env file in the backend folder with the following variables:
