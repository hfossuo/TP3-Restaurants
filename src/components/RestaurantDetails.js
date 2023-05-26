import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RestaurantDetails({ match }) {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await axios.get(`/api/restaurants/${match.params.id}`);
            setRestaurant(res.data);
        };

        fetchRestaurant();
    }, [match.params.id]);

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <p>{restaurant.address}</p>
        </div>
    );
}

export default RestaurantDetails;
