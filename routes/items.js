const express = require('express');
const router = express.Router();

let items = [
  { id: 1, name: 'Mango', description: 'Good for the body' },
  { id: 2, name: 'Monday', description: 'Days of the week' }
];

// Get all items
router.get('/', (req, res) => {
  res.json(items);
});

// Get item by ID
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// Create new item
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update item by ID
router.put('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// Delete item by ID
router.delete('/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem[0]);
});

module.exports = router;
