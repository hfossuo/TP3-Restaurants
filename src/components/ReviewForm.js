import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ restaurantId }) {
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/reviews', { restaurantId, review });
        setReview('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={review} onChange={(e) => setReview(e.target.value)} />
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default ReviewForm;
