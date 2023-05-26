import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CartItems() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        const res = await axios.get('/api/cart');
        setCartItems(res.data);
    };

    const handleAddItem = async (item) => {
        await axios.post('/api/cart', item);
        fetchCartItems();
    };

    const handleUpdateItem = async (id, quantity) => {
        await axios.put(`/api/cart/${id}`, { quantity });
        await fetchCartItems();
    };

    const handleDeleteItem = async (id) => {
        await axios.delete(`/api/cart/${id}`);
        await fetchCartItems();
    };

    return (
        <div>
            {cartItems.map(item => (
                <div key={item._id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div>
                        <button onClick={() => handleUpdateItem(item._id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleUpdateItem(item._id, item.quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => handleDeleteItem(item._id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default CartItems;
