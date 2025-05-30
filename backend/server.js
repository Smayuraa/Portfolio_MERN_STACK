import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


app.use(express.static(path.join(__dirname,"../portfolio/dist")));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,"../portfolio/dist/index.html"));
});

// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/portfolio', {
  mongoose.connect(process.env.ATLASDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));


// Mongoose Schema and Model
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', ContactSchema);

// API Endpoints
app.post('/contact', async (req, res) => {
  console.log('Incoming Request:', req.body); // Debugging
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});


app.get('/',(req,res)=>{
  // res.redirect(process.env.FRONTEND_URL);
  res.send("hello")

})

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
