require('dotenv').config();

const express = require('express');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes'); // Import route books
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

// Gunakan route authors
app.use('/authors', authorRoutes);

// Gunakan route books
app.use('/books', bookRoutes);

// Jalankan server
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});