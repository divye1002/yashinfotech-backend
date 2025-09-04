import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// DB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yashinfotech')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ Mongo error', err));

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
