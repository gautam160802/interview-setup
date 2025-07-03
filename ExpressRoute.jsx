const express = require("express");
const app = express();
const PORT = 3000;

// dummy data
const products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 50 },
  { id: 3, name: "Mango", price: 80 },
];

// get route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
