const express = require('express');
const itemsRouter = require('./routes/items');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Joebrain, Simple API!');
});

// Items routes
app.use('/api/items', itemsRouter);

// 404 handler (single occurrence)
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
