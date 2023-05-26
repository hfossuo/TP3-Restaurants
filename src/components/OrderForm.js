import React, { useState } from 'react';
import axios from 'axios';

function OrderForm({ restaurantId }) {
    const [order, setOrder] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/orders', { restaurantId, order });
        setOrder('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={order} onChange={(e) => setOrder(e.target.value)} />
            <button type="submit">Place Order</button>
        </form>
    );
}

export default OrderForm;
