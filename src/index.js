const express = require('express');
const cors = require('cors');

const connectToDB = require('./database');

const authRoutes = require('./routes/auth.routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database
connectToDB();

// Default Route
app.get('/', (req, res) => {
  res.json({
    name: 'Node App',
    author: 'Jhon Esteban Herrera',
    private: true,
  });
});

// Routes
app.use('/api/v1/auth', authRoutes);

// Server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
