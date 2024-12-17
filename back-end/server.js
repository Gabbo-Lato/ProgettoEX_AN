const express = require('express');
const cors = require('cors');
const animalRoutes = require('./routes/animals');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/animals', animalRoutes);

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
