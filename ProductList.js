import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result=await result.json();
        setProducts(result);
    }
    console.warn("products :", products);
    return (
        <div className='product-list'>
            <h2>Product List</h2>
            <ul>
                <li>S. No.</li>
                <li>Model</li>
                <li>Brand</li>
                <li>Price</li>
                <li>Category</li>
            </ul>
            {
               products.map((item,index)=> 
               <ul>
                <li>{index+1}</li>
                <li>{item.Model}</li>
                <li>{item.Brand}</li>
                <li>Rs. {item.Price}/-</li>
                <li>{item.Category}</li>
            </ul>          
               )
            }
        </div>
    )
}


export default ProductList;