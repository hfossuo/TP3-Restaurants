import React, { useState } from 'react';
import axios from 'axios';

function Coupon() {
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleApplyCoupon = async () => {
        try {
            const res = await axios.post('/api/coupons', { code: couponCode });
            setDiscount(res.data.discount);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter your coupon code"
            />
            <button onClick={handleApplyCoupon}>Apply</button>
            {discount > 0 && <p>Discount: {discount}%</p>}
        </div>
    );
}

export default Coupon;
