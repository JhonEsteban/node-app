const express = require('express');
const connectToDB = require('./database');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database
connectToDB();

// Routes
app.get('/', (req, res) => {
  res.json({
    name: 'Node App',
    author: 'Jhon Esteban Herrera',
    private: true,
  });
});

// Server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
