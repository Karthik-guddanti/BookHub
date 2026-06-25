# 📚 BookHub — Role-Based Library Management System

BookHub is a professional full-stack web application designed for managing and browsing book collections with role-based access control (RBAC). Built using the modern MERN stack (MongoDB, Express, React, Node.js), BookHub enables library administrators to curate collections while providing users a sleek interface to search, filter, and discover books.

---

## 📋 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#%EF%B8%8F-tech-stack)
3. [Project Structure](#-project-structure)
4. [Installation & Setup](#-installation--setup)
5. [API Endpoints](#-api-endpoints)
6. [Role-Based Access Control](#-role-based-access-control)
7. [Dynamic Environment Setup](#-dynamic-environment-setup)
8. [License](#-license)

---

## ✨ Features

### 🔐 User Authentication & Authorization
- **Role Selection**: Distinct user roles for **Admin** and **User** upon registration.
- **Secure Access**: JWT-based session tokens with HTTP headers authorization.
- **Data Security**: Secure password hashing using `bcryptjs`.
- **Protected Routes**: Custom React router guards and Express middleware to prevent unauthorized access.

### ✍️ Admin Dashboard
- **Create**: Add new books with titles, authors, descriptions, and cover image URLs.
- **Update**: Edit existing book details via a premium modal interface.
- **Delete**: Remove books from the collection.
- **Scoped View**: Admins can only view and manage books *they* have posted.

### 🔍 User Dashboard
- **Discover**: Browse the library containing all books posted across all admins.
- **Search**: Fast, real-time search filtering by Title, Author, or Description.
- **Details View**: View detailed cards and descriptions of any book in the library.

### 🛡️ Security Implementations
- **CORS Protection**: Configuration permitting only allowed client origins.
- **Helmet**: Secures HTTP response headers.
- **Rate Limiting**: Protects backend endpoints against brute-force and DDoS attempts.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** (UI library)
- **Vite** (Build tool & development server)
- **React Router Dom v6** (Client-side routing)
- **Axios** (HTTP client with interceptors)
- **Tailwind CSS** (Utility-first styling framework)
- **ESLint** (Static code quality checks)

### Backend
- **Node.js** (Runtime environment)
- **Express 5** (Fast, minimalist web framework)
- **MongoDB** & **Mongoose 8** (NoSQL Database & Object Data Modeling)
- **JSON Web Tokens (JWT)** (Session security)
- **bcryptjs** (Password cryptography)
- **Helmet** & **Express Rate Limit** (Server hardening)

---

## 📁 Project Structure

```text
bookhub/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── Navbar.jsx      # Navigation bar
│   │   │   └── ui/
│   │   │       ├── BookCard.jsx    # Card display for books
│   │   │       ├── EditBookModal.jsx # Modal to edit books
│   │   │       └── FilterSidebar.jsx # Sidebar search & filter
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── Login.jsx           # Login interface
│   │   │   ├── Signup.jsx          # User registration
│   │   │   ├── AdminDashboard.jsx  # Admin-only dashboard
│   │   │   └── UserDashboard.jsx   # User-only dashboard
│   │   ├── routes/
│   │   │   ├── AppRouter.jsx       # Client routes definitions
│   │   │   └── ProtectedRoute.jsx  # Auth guard component
│   │   ├── services/
│   │   │   └── api.js              # Centralized Axios instance with auth headers
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Global auth state provider
│   │   ├── hooks/
│   │   │   └── useAuth.js          # Custom auth consumer hook
│   │   ├── App.jsx                 # Root UI component
│   │   └── main.jsx                # DOM entry point
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # CSS styles compilation setup
│   └── package.json
│
└── server/                          # Express backend
    ├── controllers/
    │   ├── auth.controller.js       # Authentication logic (register, login)
    │   ├── book.admin.controller.js # Admin book write operations
    │   └── book.user.controller.js  # User search & read operations
    ├── routes/
    │   ├── auth.routes.js           # Public endpoints
    │   ├── admin.routes.js          # Admin authorization guarded endpoints
    │   └── user.routes.js           # Read-only authenticated endpoints
    ├── models/
    │   ├── user.model.js            # User mongoose schema
    │   └── book.model.js            # Book mongoose schema
    ├── middlewares/
    │   └── auth.middleware.js       # Auth token validation and role checking
    ├── utils/
    │   └── generateToken.js         # JWT generation helper
    ├── server.js                    # Express application entry file
    └── package.json
```

---

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB instance

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/Karthik-guddanti/BookHub.git
cd BookHub
```

---

### Step 2: Backend Setup & Configuration

1. Navigate to the server folder and install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` configuration file in the `server` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_signing_key
   CLIENT_URL=http://localhost:5173
   ```

3. Run the backend server in development mode:
   ```bash
   npm run dev
   ```
   *The API server will launch at `http://localhost:5000`.*

---

### Step 3: Frontend Setup

1. Open a new terminal window, navigate to the client folder, and install dependencies:
   ```bash
   cd client
   npm install
   ```

2. > [!NOTE]
   > **No `.env` file configuration is required for local development.** 
   > The Axios service automatically detects the browser's hostname:
   > - Local hostnames (`localhost`, `127.0.0.1`) connect automatically to `http://localhost:5000/api`
   > - Deployed platforms automatically route to `https://bookhub-3lud.onrender.com/api`

3. Start the local frontend development server:
   ```bash
   npm run dev
   ```
   *The React app will launch at `http://localhost:5173`.*

---

## 🔌 API Endpoints

### Base URL
```text
http://localhost:5000/api
```

### Authentication Endpoints
| HTTP Method | Route | Description | Authentication Required |
|:---|:---|:---|:---|
| `POST` | `/auth/signup` | Register a new user | ❌ |
| `POST` | `/auth/login` | Log in existing user and return JWT | ❌ |

### Book Operations (Admin)
| HTTP Method | Route | Description | Authorization |
|:---|:---|:---|:---|
| `POST` | `/admin/books` | Add a new book to the library | ✅ Admin |
| `GET` | `/admin/books` | Fetch books managed by the logged-in admin | ✅ Admin |
| `PUT` | `/admin/books/:id` | Update an existing book's details | ✅ Admin (Owner) |
| `DELETE` | `/admin/books/:id` | Delete a book from the system | ✅ Admin (Owner) |

### Book Operations (User/Reader)
| HTTP Method | Route | Description | Query Parameters |
|:---|:---|:---|:---|
| `GET` | `/books` | Search & retrieve all books from database | `?title=...&author=...` |
| `GET` | `/books/:id` | Retrieve single book detail by ID | None |

---

## 🛡️ Role-Based Access Control

Our RBAC rules ensure secure operations:
- **Guest / Unauthenticated**: Can access the public home page, registration, and log-in views.
- **User (Reader)**: Can browse the entire repository list, view book details, and perform text-based searches.
- **Admin**: Can create and edit books. The backend validates the `addedBy` field of the book against the authenticated Admin's token to ensure admins cannot modify or delete books owned by other admins.

---

## 🌐 Dynamic Environment Setup

The API client dynamically identifies where the browser is running:
- **Development**: If `window.location.hostname` is `localhost`, the client communicates with `http://localhost:5000/api`.
- **Production**: On external networks, it defaults to the deployed backend URL at `https://bookhub-3lud.onrender.com/api`.

> [!IMPORTANT]
> If you need to override this default behavior (e.g. testing the local client against production data), you can create a `client/.env` file and define `VITE_API_URL=https://your-custom-url.com/api`.

---

## 📝 License

Distributed under the ISC License. See `LICENSE` for more information.
