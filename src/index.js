const express = require('express');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.json({
    name: 'Node App',
    author: 'Jhon Esteban Herrera',
    private: true,
  });
});

// Server
app.listen(3000, () => {
  console.log(`Servidor corriendo en http://localhost:${3000}/`);
});
