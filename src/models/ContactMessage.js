import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, lowercase: true, trim: true },
    phone:   { type: String, trim: true },
    subject: { type: String, trim: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model('ContactMessage', contactMessageSchema);

export default ContactMessage;
