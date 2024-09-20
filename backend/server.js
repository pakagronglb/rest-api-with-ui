// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from other origins

// Mock data (could come from a database)
const items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 },
];

// Define a route to get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
