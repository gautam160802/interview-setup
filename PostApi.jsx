const express = require("express");
const app = express();
app.use(express.json());

const products = [];

app.post("/api/products", (req, res) => {
    const { name, price} = req.body;

    if(!name || !price) {
        return.res.status(400).json({ message: "Name and price required"});
    }

    const newProduct = { id: Date.now(), name, price};
    products.push(newProduct);

    res.status(201).json(newProduct);
})

app.listen(3000, () => console.log("Server running on port 3000"))