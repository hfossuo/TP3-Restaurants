import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Update with your backend API URL
});

// Fetch nearby restaurants based on latitude and longitude
export const fetchNearbyRestaurants = async (latitude, longitude) => {
    try {
        const response = await api.get('/restaurants', {
            params: {
                latitude,
                longitude,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch nearby restaurants');
    }
};

// Get a restaurant by its ID
export const getRestaurantById = async (restaurantId) => {
    try {
        const response = await api.get(`/restaurants/${restaurantId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to get restaurant by ID');
    }
};

// Create a new restaurant
export const createRestaurant = async (restaurantData) => {
    try {
        const response = await api.post('/restaurants', restaurantData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create restaurant');
    }
};

// Update a restaurant by its ID
export const updateRestaurant = async (restaurantId, restaurantData) => {
    try {
        const response = await api.put(`/restaurants/${restaurantId}`, restaurantData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update restaurant');
    }
};

// Delete a restaurant by its ID
export const deleteRestaurant = async (restaurantId) => {
    try {
        await api.delete(`/restaurants/${restaurantId}`);
    } catch (error) {
        throw new Error('Failed to delete restaurant');
    }
};

// Other API functions...

const apiModule = {
    fetchNearbyRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
};

export default apiModule;
