const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');
const PORT = 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Joebrain, Simple API!');
});

app.use('/items', itemsRouter);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
