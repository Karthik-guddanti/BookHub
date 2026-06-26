import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.routes.js';
import adminBookRoutes from './routes/admin.routes.js';
import userBookRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://bookhub-theta.vercel.app',
  'https://book-hub-coral.vercel.app',
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      const isAllowed =
        allowedOrigins.includes(origin) ||
        /^https?:\/\/localhost:\d+$/.test(origin) ||
        /^https:\/\/(bookhub|book-hub)-[a-z0-9-]+\.vercel\.app$/.test(origin) ||
        ((origin.includes('bookhub') || origin.includes('book-hub')) && origin.endsWith('.vercel.app'));

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
  })
);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 200,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the BookHub API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/admin/books', adminBookRoutes);
app.use('/api/books', userBookRoutes);

app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  console.error('Global error:', err.message);
  if (res.headersSent) return next(err);
  return res.status(err.statusCode || 500).json({
    message: err.message || 'Internal server error',
  });
});

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is required');
    }

    await mongoose.connect(process.env.MONGO_URI);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
};

startServer();