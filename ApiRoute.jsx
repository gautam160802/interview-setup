// Write a basic Express server with a route /api/greet that returns { message: "Hello Gautam" }.

const express = require("express");
const app = express();

app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello Gautam" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
