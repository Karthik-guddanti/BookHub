# BookHub - Role-Based Library Management System

A full-stack web application for managing and browsing books with role-based access control. Built with the MERN stack (MongoDB, Express, React, Node.js), BookHub allows admins to manage their book collections and users to discover and browse all available books.

---

## 📋 Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Installation & Setup](#installation--setup)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Role-Based Access Control](#role-based-access-control)
9. [Challenges & Learnings](#challenges--learnings)
10. [Future Improvements](#future-improvements)
11. [License](#license)

---

## 📖 Description

**BookHub** is a library management platform designed to demonstrate role-based authentication and authorization. It solves the problem of organizing and accessing book collections by providing a centralized system where:

- **Admins** can add, edit, and manage their own book collections
- **Users** can browse and filter books from all admins
- **Secure Access** is ensured through JWT-based authentication

The project exists to provide a practical example of building secure, role-based applications with proper access control and user management.

---

## ✨ Features

### User Authentication
- User signup with role selection (Admin/User)
- Secure login with JWT token generation
- Password encryption using bcryptjs

### Admin Features
- ✏️ Add new books to the library
- 📝 Edit book details (title, author, description, image)
- 🗑️ Delete books from the collection
- 👁️ View only their own posted books
- 📊 Admin dashboard for quick access

### User Features
- 🔍 View all books posted by admins
- 🔎 Search books by title, author, or description
- 📚 Filter and browse book collections
- 👤 User dashboard for navigation
- 📋 Browse detailed book information

### Security Features
- JWT-based token authentication
- Password hashing with bcryptjs
- CORS protection with configurable origins
- Helmet for HTTP header security
- Rate limiting to prevent abuse
- Protected routes with middleware

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.0 | UI Framework |
| Vite | 7.3.1 | Build tool & dev server |
| React Router | 6.28.0 | Client-side routing |
| Axios | 1.7.2 | HTTP client |
| Tailwind CSS | 3.4.13 | Styling |
| ESLint | 9.39.1 | Code linting |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | - | Runtime environment |
| Express | 5.1.0 | Web framework |
| MongoDB | - | NoSQL database |
| Mongoose | 8.19.2 | MongoDB ODM |
| JWT | 9.0.2 | Authentication |
| bcryptjs | 3.0.2 | Password hashing |
| Helmet | 8.1.0 | Security headers |
| CORS | 2.8.5 | Cross-origin requests |
| Express Rate Limit | 8.4.0 | Rate limiting |
| Nodemon | 3.1.10 | Dev auto-reload |

---

## 📁 Project Structure

```
bookhub/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── Navbar.jsx      # Navigation component
│   │   │   └── ui/
│   │   │       ├── BookCard.jsx    # Book display card
│   │   │       ├── EditBookModal.jsx # Edit modal
│   │   │       └── FilterSidebar.jsx # Filter & search
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── Login.jsx           # Login form
│   │   │   ├── Signup.jsx          # Registration form
│   │   │   ├── AdminDashboard.jsx  # Admin interface
│   │   │   └── UserDashboard.jsx   # User interface
│   │   ├── routes/
│   │   │   ├── AppRouter.jsx       # Main routing logic
│   │   │   └── ProtectedRoute.jsx  # Route protection
│   │   ├── services/
│   │   │   ├── api.js              # Axios instance
│   │   │   ├── auth.service.js     # Auth API calls
│   │   │   └── book.services.js    # Book API calls
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Auth state management
│   │   ├── hooks/
│   │   │   └── useAuth.js          # Auth hook
│   │   ├── App.jsx                 # Root component
│   │   └── main.jsx                # Entry point
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── eslint.config.js            # ESLint rules
│   └── package.json
│
└── server/                          # Express backend
    ├── controllers/
    │   ├── auth.controller.js       # Authentication logic
    │   ├── book.admin.controller.js # Admin book operations
    │   └── book.user.controller.js  # User book operations
    ├── routes/
    │   ├── auth.routes.js           # Auth endpoints
    │   ├── admin.routes.js          # Admin-only endpoints
    │   └── user.routes.js           # User endpoints
    ├── models/
    │   ├── user.model.js            # User schema
    │   └── book.model.js            # Book schema
    ├── middlewares/
    │   └── auth.middleware.js       # JWT & role verification
    ├── utils/
    │   └── generateToken.js         # JWT token generation
    ├── server.js                    # Server entry point
    └── package.json
```

### Folder Explanations

- **client/src/components**: Reusable UI components (Navbar, BookCard, modals)
- **client/src/pages**: Full-page components for different routes
- **client/src/services**: API communication layer with backend
- **client/src/context**: Global state for authentication using React Context
- **server/controllers**: Business logic for API endpoints
- **server/routes**: API route definitions with role-based protection
- **server/models**: Mongoose schemas for User and Book entities

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas connection string)

### Step 1: Clone & Navigate
```bash
git clone <repository-url>
cd bookhub
```

### Step 2: Backend Setup

#### Install Dependencies
```bash
cd server
npm install
```

#### Create Environment File
Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/bookhub
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookhub

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here_change_in_production

# CORS Configuration
CLIENT_URL=http://localhost:5173
CLIENT_URLS=http://localhost:5173,http://localhost:5174
```

#### Run Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server runs on `http://localhost:5000`

---

### Step 3: Frontend Setup

#### Install Dependencies
```bash
cd ../client
npm install
```

#### Create Environment File
Create a `.env` file in the `client` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
```

#### Run Frontend Development Server
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

### Step 4: Database Setup

#### Option A: Local MongoDB
```bash
# Start MongoDB service (Windows)
mongod

# Or on Mac/Linux
brew services start mongodb-community
```

#### Option B: MongoDB Atlas (Cloud)
1. Create a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Add it to `.env` file as `MONGODB_URI`

---

## 📖 Usage

### 1. Start the Application
```bash
# Terminal 1: Start Backend
cd server
npm run dev

# Terminal 2: Start Frontend
cd client
npm run dev
```

### 2. Access the Application
Open `http://localhost:5173` in your browser

### 3. User Workflows

#### Registration
1. Click "Sign Up" on the homepage
2. Enter username, password, and select role (Admin/User)
3. Submit to create account

#### Admin Workflow
1. Login as Admin
2. Access Admin Dashboard
3. Add new books (title, author, description, image URL)
4. Edit or delete your posted books
5. View only your own book collection

#### User Workflow
1. Login as User
2. Access User Dashboard
3. Browse all books from all admins
4. Use search and filter by:
   - Title
   - Author
   - Description
5. Click on books to view details

#### Guest Access
- View homepage without login
- Cannot access protected pages (dashboards)
- Will be redirected to login

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| POST | `/auth/signup` | Register new user | ❌ |
| POST | `/auth/login` | Login user | ❌ |

### Admin Book Endpoints

| Method | Endpoint | Description | Auth Required | Role |
|--------|----------|-------------|---|---|
| POST | `/admin/books` | Add a new book | ✅ | Admin |
| GET | `/admin/books` | Get user's books | ✅ | Admin |
| PUT | `/admin/books/:id` | Update book | ✅ | Admin |
| DELETE | `/admin/books/:id` | Delete book | ✅ | Admin |

### User Book Endpoints

| Method | Endpoint | Description | Auth Required | Query Params |
|--------|----------|-------------|---|---|
| GET | `/user/books` | Get all books | ❌ | `?title=...&author=...&description=...` |
| GET | `/user/books/:id` | Get book by ID | ❌ | - |

### Request/Response Examples

#### Signup
```bash
POST /auth/signup
Content-Type: application/json

{
  "username": "john_admin",
  "password": "password123",
  "role": "admin"
}

Response:
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "john_admin",
  "role": "admin",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Add Book (Admin)
```bash
POST /admin/books
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A classic American novel",
  "imageUrl": "https://example.com/image.jpg"
}

Response:
{
  "_id": "507f1f77bcf86cd799439012",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A classic American novel",
  "imageUrl": "https://example.com/image.jpg",
  "addedBy": "507f1f77bcf86cd799439011",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

#### Get All Books (User)
```bash
GET /user/books?title=Gatsby&author=Fitzgerald

Response:
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A classic American novel",
    "imageUrl": "https://example.com/image.jpg",
    "addedBy": {
      "_id": "507f1f77bcf86cd799439011",
      "username": "john_admin",
      "role": "admin"
    },
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

---

## 🔐 Role-Based Access Control

### Role Hierarchy

| Role | Can Do | Cannot Do |
|------|--------|----------|
| **Admin** | Add books, Edit own books, Delete own books, View own books | View other admin's books, Delete user accounts |
| **User** | View all books, Search & filter books | Add/Edit/Delete books, Post content |

### Protection Mechanism

1. **Route Protection**: Routes decorated with `protect` middleware require valid JWT token
2. **Role Checking**: Routes with `isAdmin` middleware only allow admin users
3. **Ownership Verification**: Admin can only edit/delete their own books (checked via `addedBy` field)

### How It Works

```
Client Login
    ↓
Server Issues JWT Token
    ↓
Client Stores Token in localStorage
    ↓
Subsequent Requests Include Token (Bearer <token>)
    ↓
Middleware Verifies Token & Extracts User
    ↓
Role Check (if admin-only route)
    ↓
Ownership Check (if modifying resource)
    ↓
Execute Endpoint
```

---

## 🎓 Challenges & Learnings

### Challenge 1: Role-Based Authorization
**Problem**: Preventing users from accessing admin endpoints while allowing admins to see only their content.

**Solution**: Implemented a two-layer middleware approach:
- `protect` middleware verifies JWT and extracts user data
- `isAdmin` middleware checks user role
- Ownership verification checks if admin owns the resource

**Learning**: Middleware composition is powerful for building secure, scalable authorization systems.

---

### Challenge 2: CORS Configuration
**Problem**: Frontend and backend running on different ports causes CORS errors.

**Solution**: Configured dynamic CORS allowlist in server:
```javascript
const allowlist = [
  'http://localhost:5173',  // Default Vite port
  process.env.CLIENT_URL,   // Production URL
  ...(process.env.CLIENT_URLS ? process.env.CLIENT_URLS.split(',') : [])
];
```

**Learning**: CORS whitelist should be environment-based to support development, staging, and production.

---

### Challenge 3: Search & Filter Implementation
**Problem**: Efficiently searching books by multiple fields without redundancy.

**Solution**: Used MongoDB regex queries with case-insensitive options:
```javascript
const filter = {};
if (req.query.title) {
  filter.title = { $regex: req.query.title, $options: 'i' };
}
// Similar for author and description
```

**Learning**: MongoDB's flexible query syntax makes multi-field search simple and performant.

---

### Challenge 4: State Management Across Components
**Problem**: Sharing authentication state (user data, token) across React components.

**Solution**: Used React Context API with a custom `useAuth` hook for centralized state.

**Learning**: React Context is sufficient for medium-complexity state; for larger apps, consider Redux or Zustand.

---

## 🚀 Future Improvements

### Short-term (Priority High)
- [ ] Add book ratings and reviews by users
- [ ] Implement book categories/genres
- [ ] Add pagination for large book lists
- [ ] User profile management (change password, update profile)
- [ ] Book cover image upload instead of URL
- [ ] Email verification on signup

### Medium-term (Priority Medium)
- [ ] Advanced search with filters (genre, year, rating)
- [ ] Wishlist/favorites feature for users
- [ ] Book borrowing system with due dates
- [ ] Admin analytics dashboard (total books, users, etc.)
- [ ] User activity logging
- [ ] Email notifications for new books

### Long-term (Priority Low)
- [ ] Mobile app (React Native)
- [ ] Social features (user profiles, follow admins)
- [ ] Book recommendations based on reading history
- [ ] Integration with external book APIs (Google Books, OpenLibrary)
- [ ] Admin ability to manage users
- [ ] Support for multiple roles (Moderator, Publisher, etc.)

---

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📧 Questions?

For questions or issues, please open a GitHub issue or contact the project maintainer.

---

**Happy Reading! 📚**
