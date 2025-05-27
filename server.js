const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items'); 

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/api/items', itemsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the SimpleAPI!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
