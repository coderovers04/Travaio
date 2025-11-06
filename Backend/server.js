const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const tripRoutes = require('./routes/trip');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: '*', 
}));
app.use(express.json());


app.get('/health', (req, res) => {
  res.send('Server is running');
});


app.use('/auth', authRoutes);
app.use('/trip', tripRoutes);
app.use('/api/contact', contactRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
