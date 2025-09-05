import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import contactRoutes from './routes/contact.js';
import { connectDB } from './db.js';   // 👈 import DB connector

dotenv.config();

const app = express();
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use('/api/contact', contactRoutes);

// DB connect
await connectDB();

// Health (optional)
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Contact route
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 API on http://localhost:${PORT}`));
