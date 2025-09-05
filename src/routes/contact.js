import { Router } from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email and message are required' });
    }
    const saved = await ContactMessage.create({ name, email, phone, subject, message });
    return res.status(201).json({ id: saved._id });
  } catch (err) {
    console.error('Contact save error:', err);
    return res.status(500).json({ error: 'Failed to save message' });
  }
});

export default router;
