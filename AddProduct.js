import React, { useState } from 'react';



const AddProduct = () => {
    const [Model, setModel] = useState("");
    const [Brand, setBrand] = useState("");
    const [Price, setPrice] = useState("");
    const [Category, setCategory] = useState("");
    const [error, setError] = useState("false");

    const addProduct = async () => {
        if (!Model || !Brand || !Price || !Category) {
            setError(true);
            return false;
        }
        const UserId = JSON.parse(localStorage.getItem('userData'))._id;
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'Post',
            body: JSON.stringify({ Model, Brand, Price, Category, UserId }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
    }
    return (
        <div className='product'>
            <h1>Add Product</h1>
            
            <input type="text" placeholder='Enter the Model of Product' className='inputBox'
                value={Model} onChange={(e) => setModel(e.target.value)} />
            {error && !Model && <span className='invalid-input'>Enter valid model name</span>}

            <input type="text" placeholder='Enter the Brand of Product' className='inputBox'
                value={Brand} onChange={(e) => setBrand(e.target.value)} />
            {error && !Brand && <span className='invalid-input'>Enter valid brand name</span>}

            <input type="text" placeholder='Enter the Price of Product' className='inputBox'
                value={Price} onChange={(e) => setPrice(e.target.value)} />
            {error && !Price && <span className='invalid-input'>Enter valid price of product</span>}

            <input type="text" placeholder='Enter the Category of Product' className='inputBox'
                value={Category} onChange={(e) => setCategory(e.target.value)} />
            {error && !Category && <span className='invalid-input'>Enter valid category of product</span>}

            <button className='appButton' type='button' onClick={addProduct}>Add Product</button>
        </div>
    )
}
export default AddProduct; 