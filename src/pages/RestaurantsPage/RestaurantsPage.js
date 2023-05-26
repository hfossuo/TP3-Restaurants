import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantsPage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
    });
    const [cuisine, setCuisine] = useState('');

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await axios.get('/api/restaurants');
            setRestaurants(response.data);
        } catch (error) {
            console.error('Failed to fetch restaurants:', error);
        }
    };

    const handleCreateRestaurant = () => {
        const newRestaurant = {
            name,
            address,
            cuisine,
        };

        axios
            .post('/api/restaurants', newRestaurant)
            .then((response) => {
                console.log('Restaurant created successfully:', response.data);
                fetchRestaurants(); // Refresh the restaurant list
                // Display a success message or perform any additional actions
            })
            .catch((error) => {
                console.error('Failed to create restaurant:', error);
                // Display an error message or perform any error handling
            });
    };

    const handleUpdateRestaurant = (restaurantId) => {
        const updatedRestaurant = {
            name,
            address,
            cuisine,
        };

        axios
            .put(`/api/restaurants/${restaurantId}`, updatedRestaurant)
            .then((response) => {
                console.log('Restaurant updated successfully:', response.data);
                fetchRestaurants(); // Refresh the restaurant list
                // Display a success message or perform any additional actions
            })
            .catch((error) => {
                console.error('Failed to update restaurant:', error);
                // Display an error message or perform any error handling
            });
    };

    const handleDeleteRestaurant = (restaurantId) => {
        axios
            .delete(`/api/restaurants/${restaurantId}`)
            .then((response) => {
                console.log('Restaurant deleted successfully:', response.data);
                fetchRestaurants(); // Refresh the restaurant list
                // Display a success message or perform any additional actions
            })
            .catch((error) => {
                console.error('Failed to delete restaurant:', error);
                // Display an error message or perform any error handling
            });
    };

    return (
        <div>
            <h2>Restaurants</h2>
            <div>
                <h3>Create Restaurant</h3>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Street" value={address?.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} />
                <input type="text" placeholder="City" value={address?.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
                <input type="text" placeholder="State" value={address?.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} />
                <input type="text" placeholder="Zip Code" value={address?.zipCode} onChange={(e) => setAddress({ ...address, zipCode: e.target.value })} />
                <input type="text" placeholder="Country" value={address?.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} />
                <input type="text" placeholder="Cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
                <button onClick={handleCreateRestaurant}>Create</button>
            </div>
            <div>
                <h3>Restaurant List</h3>
                {restaurants.length === 0 ? (
                    <p>No restaurants available.</p>
                ) : (
                    <ul>
                        {restaurants.map((restaurant) => (
                            <li key={restaurant._id}>
                                <div>
                                    <h3>{restaurant.name}</h3>
                                    <p>Address: {restaurant.address?.street}, {restaurant.address?.city}, {restaurant.address?.state}, {restaurant.address?.zipCode}, {restaurant.address?.country}</p>
                                    <p>Cuisine: {restaurant.cuisine}</p>
                                    <button onClick={() => handleUpdateRestaurant(restaurant._id)}>Update</button>
                                    <button onClick={() => handleDeleteRestaurant(restaurant._id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default RestaurantsPage;
