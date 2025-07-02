//  You have a product page in React. How would you fetch product data from /api/products when the component mounts and show a loading message while fetching?

import React, {useState, useEffect} from "react";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/products")
        .then(res => {
            setProducts(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Error fetching products:", err);
            setLoading(false);
        })
    }, []);

    return (
        <ul>
        {products.map(p => (
            
        ))}
        </ul>
    )
}

