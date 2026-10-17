# Sales Analytics Dashboard 📊

A full-stack sales analytics dashboard that helps users monitor sales performance, analyze revenue trends, explore product categories, and track recent customer orders through an interactive interface.

🌐 **Live Demo:** [Sales Analytics Dashboard](YOUR_FRONTEND_RENDER_URL)

## ✨ Features

- **Dashboard Summary** — View key sales metrics and performance indicators.
- **Revenue Analytics** — Visualize revenue data through interactive charts.
- **Category Analysis** — Explore sales performance across different product categories.
- **Recent Orders** — View the latest five orders with customer, product, amount, and order status.
- **REST API Integration** — Fetch dashboard and order data from the backend.
- **Database Storage** — Store and retrieve sales order records using MongoDB Atlas.
- **Interactive Charts** — Present sales insights using data visualizations.
- **Responsive UI** — Access the dashboard across desktop and mobile screen sizes.

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Recharts
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Deployment**
- Render
- MongoDB Atlas



## 📁 Project Structure

SalesAnalyticsDashboard/
├── Backend/
│   ├── Database/
│   ├── Models/
│   ├── routes/
│   ├── src/
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   └── .env
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── dist/
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   └── .env
│
└── README.md


## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account

### 1. Clone the repository

```bash
git clone https://github.com/AYUSHIbhatt1/sales-analytics-dashboard.git
cd sales-analytics-dashboard
```

### 2. Set up the backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory and configure:

```env
PORT=3000
Mongo_Url=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB connection string.

Start the backend:

```bash
npm start
```

Use `node server.js` if your `package.json` doesn't define a start script.

### 3. Set up the frontend

Open a separate terminal from the project root:

```bash
cd Frontend
npm install
```

Create a `.env` file inside the `Frontend` directory:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/order` | Fetch order records |
| GET | `/api/dashboard/summary` | Fetch dashboard summary metrics |
| GET | `/api/dashboard/revenue` | Fetch revenue analytics |
| GET | `/api/dashboard/categories` | Fetch category analytics |

## 🔐 Environment Variables

Keep your environment variables and database credentials private. Never commit `.env` files containing secrets to GitHub.

For production deployment, configure the required environment variables in your hosting provider's dashboard.

## 🎯 Project Goal

Sales Analytics Dashboard was built to practise full-stack web development, including REST API integration, database connectivity, data visualization, asynchronous data fetching, and full-stack deployment.

## 👩‍💻 Author

**Ayushi Bhatt**

- GitHub: [AYUSHIbhatt1](https://github.com/AYUSHIbhatt1)

---

⭐ If you find this project interesting, feel free to explore the repository!
